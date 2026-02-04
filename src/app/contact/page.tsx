import type { Metadata } from "next";
import Link from "next/link";

import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for new projects and collaborations.",
};

export default function ContactPage() {
  return (
    <div>
      <Section
        eyebrow="Contact"
        title="Let’s build something beautiful"
        description="Share a few details about your project and I’ll respond within 1–2 business days."
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="card-surface space-y-6 p-6" aria-describedby="contact-note">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" name="firstName" placeholder="Jordan" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" name="lastName" placeholder="Reed" required />
              </div>
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
                placeholder="Tell me about the product, timeline, and goals."
                required
              />
            </div>
            <p id="contact-note" className="text-sm text-muted">
              Prefer email? Reach out at {site.email}.
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
