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
        title="Let&apos;s connect directly"
        description="The inquiry form is removed. Please contact me through email or social links below."
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal variant="scale">
            <div className="card-surface space-y-6 p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-subtle">Primary Email</p>
                <p className="mt-2 text-xl font-semibold text-foreground">{site.email}</p>
                <p className="mt-3 text-sm text-muted">
                  For job opportunities, collaborations, or project work, email me directly.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="cta-emphasis">
                  <Link href={`mailto:${site.email}`}>
                    <span className="cta-label">Email me</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={site.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.06}>
              <div className="card-surface p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-subtle">Connect</p>
                <div className="mt-4 space-y-3 text-sm">
                  <Link
                    className="block text-muted transition hover:text-foreground"
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                  </Link>
                  <Link
                    className="block text-muted transition hover:text-foreground"
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn Profile
                  </Link>
                  <Link
                    className="block text-muted transition hover:text-foreground"
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Profile
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} variant="scale">
              <div className="card-surface p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-subtle">Availability</p>
                <p className="mt-3 text-sm text-muted">{site.availability}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </div>
  );
}
