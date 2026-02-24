import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  message: string;
  submittedAt: string;
};

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function readPayload(formData: FormData): ContactPayload {
  return {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    company: String(formData.get("company") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
    submittedAt: String(formData.get("submitted_at_ph_time") ?? "").trim(),
  };
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function resolvePublicOrigin(request: Request) {
  const proto = request.headers.get("x-forwarded-proto");
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");

  if (proto && host) {
    return `${proto}://${host}`;
  }

  if (host) {
    return `https://${host}`;
  }

  return process.env.NEXT_PUBLIC_SITE_URL ?? new URL(request.url).origin;
}

function redirectToContact(request: Request, query: "sent=1" | "error=1") {
  const origin = resolvePublicOrigin(request);
  return NextResponse.redirect(`${origin}/contact?${query}`, 303);
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const honeypot = String(formData.get("_honey") ?? "").trim();

  if (honeypot) {
    return redirectToContact(request, "sent=1");
  }

  const payload = readPayload(formData);

  if (!payload.name || !payload.email || !payload.message || !isValidEmail(payload.email)) {
    return redirectToContact(request, "error=1");
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "sylamariecumuyog@outlook.com";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

  if (!apiKey) {
    return redirectToContact(request, "error=1");
  }

  const safeName = escapeHtml(payload.name);
  const safeEmail = escapeHtml(payload.email);
  const safeCompany = escapeHtml(payload.company || "Not provided");
  const safeMessage = escapeHtml(payload.message).replaceAll("\n", "<br />");
  const safeSubmittedAt = escapeHtml(payload.submittedAt || "Not provided");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: `New Portfolio Inquiry from ${payload.name}`,
      reply_to: payload.email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Company:</strong> ${safeCompany}</p>
        <p><strong>Submitted (PH Time):</strong> ${safeSubmittedAt}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    }),
  });

  if (!response.ok) {
    return redirectToContact(request, "error=1");
  }

  return redirectToContact(request, "sent=1");
}
