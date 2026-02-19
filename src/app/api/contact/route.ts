import { NextResponse } from "next/server";

const RESEND_API_URL = "https://api.resend.com/emails";

function clean(value: FormDataEntryValue | null, maxLength = 5000) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function redirectTo(path: string) {
  return new NextResponse(null, {
    status: 303,
    headers: {
      Location: path,
    },
  });
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const honeypot = clean(formData.get("website"), 100);
    if (honeypot) {
      return redirectTo("/contact?sent=1");
    }

    const firstName = clean(formData.get("firstName"), 100);
    const lastName = clean(formData.get("lastName"), 100);
    const email = clean(formData.get("email"), 200);
    const company = clean(formData.get("company"), 200);
    const message = clean(formData.get("message"), 5000);

    if (!firstName || !lastName || !email || !message) {
      return redirectTo("/contact?error=1");
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!resendApiKey || !toEmail || !fromEmail) {
      return redirectTo("/contact?error=1");
    }

    const subject = `New portfolio inquiry from ${firstName} ${lastName}`;
    const text = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Company: ${company || "N/A"}`,
      "",
      "Project details:",
      message,
    ].join("\n");

    const sendResponse = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject,
        text,
      }),
      cache: "no-store",
    });

    if (!sendResponse.ok) {
      return redirectTo("/contact?error=1");
    }

    return redirectTo("/contact?sent=1");
  } catch {
    return redirectTo("/contact?error=1");
  }
}
