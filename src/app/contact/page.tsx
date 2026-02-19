import type { Metadata } from "next";
import Link from "next/link";

import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FormSubmitPhTime } from "@/components/form-submit-ph-time";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for new projects and collaborations.",
};

type ContactPageProps = {
  searchParams?: {
    sent?: string;
    error?: string;
  };
};

export default function ContactPage({ searchParams }: ContactPageProps) {
  const sent = searchParams?.sent;
  return (
    <div>
      <Section
        eyebrow="Contact"
        title="Let's discuss your project"
        description="Share your requirements and I will respond within 1-2 business days."
      >
        {sent === "1" && (
          <div className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
            Your message was sent successfully. I will get back to you soon.
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form
            className="card-surface space-y-6 p-6"
            aria-describedby="contact-note"
            method="POST"
            action="https://formsubmit.co/sylamariecumuyog@outlook.com"
          >
            <input type="hidden" name="_subject" value="New Client Inquiry - Syla Cumuyog Portfolio" />
            <input type="hidden" name="_next" value="https://sylamariecumuyog-portfolio.onrender.com/contact?sent=1" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="Source" value="Portfolio Contact Page" />
            <FormSubmitPhTime />
            <div className="hidden" aria-hidden="true">
              <Label htmlFor="_honey">Leave this field empty</Label>
              <Input id="_honey" name="_honey" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fullName">Full name</Label>
              <Input id="fullName" name="Name" placeholder="Jordan Reed" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="Email"
                type="email"
                placeholder="jordan@company.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" name="Company" placeholder="Studio North" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Project details</Label>
              <Textarea
                id="message"
                name="Project Details"
                placeholder="Tell me about the product, timeline, and goals."
                required
              />
            </div>
            <p id="contact-note" className="text-sm text-muted">
              Prefer email? Reach out at {site.email}. Form submissions are sent directly to this inbox.
            </p>
            <Button type="submit" size="lg">
              Send inquiry
            </Button>
          </form>
          <div className="space-y-6">
            <div className="card-surface p-6">
              <p className="text-sm font-semibold text-foreground">Direct</p>
              <p className="mt-3 text-sm text-muted">{site.email}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button asChild variant="secondary" size="sm">
                  <Link href={`mailto:${site.email}`}>Email me</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
            <div className="card-surface p-6">
              <p className="text-sm font-semibold text-foreground">Social</p>
              <div className="mt-4 space-y-3 text-sm text-muted">
                <Link
                  className="block hover:text-foreground"
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
                <Link
                  className="block hover:text-foreground"
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
