import type { Metadata } from "next";
import Link from "next/link";

import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Direct contact details for project discussions and opportunities.",
};

export default function ContactPage() {
  return (
    <div>
      <Section
        eyebrow="Contact"
        title="Get in touch"
        description="For job opportunities, freelance work, or project discussions, contact me directly through email or LinkedIn."
      >
        <Reveal variant="scale">
          <div className="card-surface max-w-3xl space-y-8 p-6 md:p-8">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-subtle">Contact Details</p>
              <h3 className="text-2xl font-semibold text-foreground">{site.email}</h3>
              <p className="text-sm leading-7 text-muted">
                I am open to remote software and web development opportunities, as well as
                select freelance collaborations.
              </p>
            </div>

            <div className="grid gap-6 border-t border-[var(--color-border)] pt-6 md:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-subtle">Email</p>
                <Link
                  className="mt-3 block text-sm text-muted transition hover:text-foreground"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </Link>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-subtle">LinkedIn</p>
                <Link
                  className="mt-3 block text-sm text-muted transition hover:text-foreground"
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View profile
                </Link>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-subtle">Location</p>
                <p className="mt-3 text-sm text-muted">{site.location}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="cta-emphasis">
                <Link href={`mailto:${site.email}`}>
                  <span className="cta-label">Send email</span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={site.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href={site.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </Link>
              </Button>
            </div>

            <p className="text-sm text-muted">{site.availability}</p>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
