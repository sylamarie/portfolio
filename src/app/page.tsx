import Link from "next/link";

import {
  certificates,
  education,
  experience,
  site,
  skills,
  tools,
  workflowTools,
} from "@/data/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Magnetic } from "@/components/motion/magnetic";
import { ParallaxOrbs } from "@/components/motion/parallax-orbs";
import { Reveal, StaggerGroup } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { ProjectsGrid } from "@/components/projects-grid";
import { CertificatesGallery } from "@/components/certificates-gallery";
import { EducationGrid } from "@/components/education-grid";
import { StackGrid } from "@/components/stack-grid";
import { ContactPanel } from "@/components/contact-panel";

export default function HomePage() {
  return (
    <div>
      <section
        id="home"
        className="relative overflow-hidden pb-14 pt-20 md:pb-20 md:pt-24"
      >
        <ParallaxOrbs />
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 md:grid-cols-[1.2fr_0.8fr] md:items-center md:px-8">
          <div className="space-y-6">
            <Reveal>
              <p className="text-eyebrow text-subtle">
                {site.role} - {site.location}
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
                <Magnetic>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-[var(--color-border)] text-[var(--color-foreground)]"
                  >
                    <Link href={site.cta.secondaryHref}>{site.cta.secondaryLabel}</Link>
                  </Button>
                </Magnetic>
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
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-subtle">
                      Available for hire
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-foreground">
                      {site.name}
                    </p>
                    <p className="mt-1 text-sm font-medium text-muted">Software Developer</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
                    {site.initials}
                  </div>
                </div>

                <div className="space-y-2 rounded-xl border border-border/90 bg-white/90 p-4 text-sm">
                  <p className="text-subtle">Current focus</p>
                  <p className="font-medium text-foreground">
                    Frontend web apps, practical backend workflows, Shopify work, and
                    production-ready project delivery.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border/90 bg-white/88 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-subtle">
                      Location
                    </p>
                    <p className="mt-2 text-sm font-semibold text-foreground">
                      {site.location}
                    </p>
                  </div>
                  <div className="rounded-xl border border-border/90 bg-white/88 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-subtle">
                      Availability
                    </p>
                    <p className="mt-2 text-sm font-semibold text-foreground">Open for roles</p>
                  </div>
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
                  <p className="text-xs uppercase tracking-[0.18em] text-subtle">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-foreground">{stat.value}</p>
                  <p className="mt-2 text-sm text-muted">{stat.context}</p>
                </div>
              </Reveal>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <div id="projects" className="scroll-mt-28">
        <Section
          eyebrow="Projects"
          title="Projects that show delivery and product thinking"
          description="Each project demonstrates practical execution: defined user problem, clear implementation, and live deployment."
        >
          <ProjectsGrid />
        </Section>
      </div>

      <div id="about" className="scroll-mt-28">
        <Section
          eyebrow="About"
          title="A developer with real delivery practice"
          description="I combine live projects, freelance work, and practical experience shipping web apps."
        >
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-stretch">
            <Reveal className="h-full">
              <div className="card-surface h-full p-6">
                <p className="text-sm text-muted">
                  {site.name} has built multiple live portfolio projects that demonstrate
                  responsive frontend work, practical data handling, and deployment
                  readiness.
                </p>
                <p className="mt-4 text-sm text-muted">
                  Her recent work includes budgeting apps, frontend team projects, and
                  freelance Shopify implementation, with strength in turning requirements
                  into clear, usable web experiences.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.05} variant="scale" className="h-full">
              <div className="card-surface h-full p-6">
                <p className="text-sm font-semibold text-foreground">Quick facts</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-subtle">
                  Hiring Snapshot
                </p>
                <p className="mt-5 text-xs uppercase tracking-[0.2em] text-subtle">
                  Project work
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  Budgeting apps, frontend team builds, and freelance Shopify delivery
                </p>
                <p className="mt-5 text-xs uppercase tracking-[0.2em] text-subtle">
                  Delivery
                </p>
                <p className="mt-2 text-sm text-muted">
                  Responsive frontend work, practical data handling, and deployment-ready
                  project execution
                </p>
                <p className="mt-5 text-xs uppercase tracking-[0.2em] text-subtle">
                  Availability
                </p>
                <p className="mt-2 text-sm text-muted">{site.availability}</p>
              </div>
            </Reveal>
          </div>
        </Section>

        <Section
          eyebrow="Skills"
          title="Technical strengths"
          description="Core capabilities used across academic work, portfolio projects, and real delivery work."
        >
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Badge key={skill} variant="outline">
                {skill}
              </Badge>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Tools"
          title="Development stack"
          description="Core technologies I use across portfolio work, software development training, and practical web app delivery."
        >
          <StackGrid tools={tools} />
        </Section>

        <Section
          eyebrow="Tooling"
          title="Supporting workflow tools"
          description="Additional tools I use for documentation, collaboration, deployment, design support, and API testing."
        >
          <div className="flex flex-wrap gap-3">
            {workflowTools.map((tool) => (
              <Badge key={tool} variant="outline">
                {tool}
              </Badge>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Education"
          title="Academic background"
          description="Completed software development programs and credentials."
        >
          <EducationGrid education={education} />
        </Section>

        <Section
          eyebrow="Certificates"
          title="Completed certificates"
          description="Formal training credentials in software and web development."
        >
          <CertificatesGallery certificates={certificates} />
        </Section>

        <Section
          eyebrow="Experience"
          title="Professional and leadership experience"
          description="Roles focused on execution discipline, communication, and delivery."
        >
          <StaggerGroup className="space-y-6">
            {experience.map((item) => (
              <Reveal key={item.title} variant="up">
                <div className="card-surface p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-foreground">
                      {item.title} - {item.company}
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-subtle">
                      {item.period}
                    </p>
                  </div>
                  <p className="mt-3 text-sm text-muted">{item.summary}</p>
                </div>
              </Reveal>
            ))}
          </StaggerGroup>
        </Section>
      </div>

      <div id="contact" className="scroll-mt-28">
        <Section
          eyebrow="Contact"
          title="Open to software and web development roles"
          description="If you need a dependable developer for frontend work, web apps, APIs, or Shopify support, I would be glad to connect."
        >
          <ContactPanel />
        </Section>
      </div>
    </div>
  );
}
