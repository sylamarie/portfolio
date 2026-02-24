import Link from "next/link";

import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Magnetic } from "@/components/motion/magnetic";
import { ParallaxOrbs } from "@/components/motion/parallax-orbs";
import { Reveal, StaggerGroup } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";

export default function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <div>
      <section className="relative overflow-hidden pb-14 pt-20 md:pb-20 md:pt-24">
        <ParallaxOrbs />
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 md:grid-cols-[1.2fr_0.8fr] md:items-center md:px-8">
          <div className="space-y-6">
            <Reveal>
              <p className="text-eyebrow text-subtle">
                {site.role} · {site.location}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-display font-serif text-foreground">{site.tagline}</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-2xl text-hero text-muted">{site.shortPitch}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-wrap gap-4">
                <Magnetic>
                  <Button asChild size="lg" className="cta-emphasis">
                    <Link href={site.cta.primaryHref}>
                      <span className="cta-label">{site.cta.primaryLabel}</span>
                    </Link>
                  </Button>
                </Magnetic>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[var(--color-border)] text-[var(--color-foreground)]"
                >
                  <Link href={site.cta.secondaryHref}>{site.cta.secondaryLabel}</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-3">
                <Badge>Open for work</Badge>
                <span className="text-sm text-muted">{site.availability}</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} variant="scale">
            <div className="glass-panel p-6">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-subtle">
                      Profile snapshot
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-foreground">
                      {site.name}
                    </p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
                    {site.initials}
                  </div>
                </div>

                <div className="space-y-2 rounded-xl border border-border/90 bg-white/90 p-4 text-sm">
                  <p className="text-subtle">Core stack</p>
                  <p className="font-medium text-foreground">
                    React, Next.js, Node.js, Express, MongoDB, SQL
                  </p>
                </div>

                <div className="space-y-3">
                  {site.valueProps.map((item) => (
                    <p key={item} className="text-sm text-muted">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-6 md:pb-12">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          <StaggerGroup className="grid gap-4 md:grid-cols-4">
            {site.stats.map((stat) => (
              <Reveal key={stat.label} variant="scale">
                <div className="card-surface p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-subtle">{stat.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-foreground">{stat.value}</p>
                  <p className="mt-2 text-sm text-muted">{stat.context}</p>
                </div>
              </Reveal>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <Section
        eyebrow="Featured Work"
        title="Projects that show delivery and product thinking"
        description="Each project demonstrates practical execution: defined user problem, clear implementation, and live deployment."
      >
        <StaggerGroup className="grid gap-6 md:grid-cols-3">
          {featured.map((project) => (
            <Reveal key={project.slug} variant="scale">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </StaggerGroup>
        <div className="mt-10">
          <Button asChild variant="secondary">
            <Link href="/projects">Explore all projects</Link>
          </Button>
        </div>
      </Section>

      <Section
        eyebrow="Workflow"
        title="How I build and deliver"
        description="I keep execution structured so projects stay clear, maintainable, and production-ready."
      >
        <StaggerGroup className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Plan",
              body: "Define scope, user flow, and data model before writing implementation code.",
            },
            {
              title: "Build",
              body: "Develop responsive UI, APIs, and integrations with clean component and route structure.",
            },
            {
              title: "Validate",
              body: "Test flows, verify API behavior, and deploy stable builds with documentation.",
            },
          ].map((item) => (
            <Reveal key={item.title} variant="up">
              <div className="card-surface h-full p-6">
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </StaggerGroup>
      </Section>

      <Section
        eyebrow="Contact"
        title="Ready to contribute to real product work"
        description="If you need a reliable junior developer for web products, APIs, or Shopify work, send your project details."
      >
        <div className="flex flex-wrap items-center gap-4">
          <Magnetic>
            <Button asChild size="lg" className="cta-emphasis">
              <Link href="/contact">
                <span className="cta-label">Send project details</span>
              </Link>
            </Button>
          </Magnetic>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-[var(--color-border)] text-[var(--color-foreground)]"
          >
            <Link href="/about">View background</Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}
