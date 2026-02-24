import type { Metadata } from "next";
import Link from "next/link";

import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FormSubmitPhTime } from "@/components/form-submit-ph-time";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project conversation for web development and software work.",
};

type ContactPageProps = {
  searchParams?: {
    sent?: string;
    error?: string;
  };
};

export default function ContactPage({ searchParams }: ContactPageProps) {
  const sent = searchParams?.sent;
  const error = searchParams?.error;

  return (
    <div>
      <Section
        eyebrow="Contact"
        title="Let&apos;s discuss your project scope"
        description="Share your timeline, requirements, and goals. I typically respond within 1-2 business days."
      >
        {sent === "1" && (
          <div className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
            Your message was sent successfully. I will get back to you soon.
          </div>
        )}
        {error === "1" && (
          <div className="mb-6 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800">
            Your message could not be sent. Please try again or email me directly.
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal variant="scale">
            <form
              className="card-surface space-y-6 p-6"
              aria-describedby="contact-note"
              method="POST"
              action="/api/contact"
            >
              <FormSubmitPhTime />
              <div className="hidden" aria-hidden="true">
                <Label htmlFor="_honey">Leave this field empty</Label>
                <Input id="_honey" name="_honey" tabIndex={-1} autoComplete="off" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fullName">Full name</Label>
                <Input id="fullName" name="name" placeholder="Jordan Reed" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jordan@company.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" name="company" placeholder="Studio North" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Project details</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your product, timeline, and technical goals."
                  required
                />
              </div>
              <p id="contact-note" className="text-sm text-muted">
                Prefer direct email? Reach out at {site.email}. Form submissions are sent to this inbox.
              </p>
              <Button type="submit" size="lg">
                Send inquiry
              </Button>
            </form>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.06}>
              <div className="card-surface p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-subtle">What to include</p>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  <li>Project goal and target users</li>
                  <li>Expected timeline and key milestone dates</li>
                  <li>Preferred stack or existing system constraints</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1} variant="scale">
              <div className="card-surface p-6">
                <p className="text-sm font-semibold text-foreground">Direct contact</p>
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
            </Reveal>
          </div>
        </div>
      </Section>
    </div>
  );
}
