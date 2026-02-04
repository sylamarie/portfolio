import Link from "next/link";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";

export default function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <div>
      <section className="relative overflow-hidden pb-16 pt-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-[-10%] top-[-20%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(42,110,252,0.25),transparent_70%)] blur-3xl" />
          <div className="absolute right-[-10%] top-[10%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(124,93,255,0.25),transparent_70%)] blur-3xl" />
        </div>
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 md:grid-cols-[1.15fr_0.85fr] md:items-center md:px-8">
          <div className="space-y-6">
            <Reveal>
              <p className="text-eyebrow text-subtle">
                {site.role} • {site.location}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-display font-serif text-foreground">
                Building reliable, user-friendly web experiences.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-hero text-muted">{site.shortPitch}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-wrap items-center gap-4">
                <Magnetic>
                  <Button asChild size="lg">
                    <Link href="/projects">View projects</Link>
                  </Button>
                </Magnetic>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Start a project</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
                <Badge>Available</Badge>
                <span>{site.availability}</span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="glass-panel relative overflow-hidden p-6">
              <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-gradient-to-br from-accent/30 to-accent2/30 blur-3xl" />
              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-subtle">
                      Signature
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-foreground">
                      {site.name}
                    </p>
                  </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent2 text-lg font-semibold text-white shadow">
                    {site.initials}
                  </div>
                </div>
                <div className="space-y-3 text-sm text-muted">
                  <p>Focused on responsive web experiences and e-commerce.</p>
                  <p>Comfortable collaborating remotely and following structured workflows.</p>
                </div>
                <div className="grid gap-3 rounded-[12px] border border-border bg-white/70 p-4 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-subtle">Focus areas</span>
                    <span className="text-foreground">E-commerce, web apps</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-subtle">Specialties</span>
                    <span className="text-foreground">Responsive UI, Shopify</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-subtle">Strengths</span>
                    <span className="text-foreground">Detail-oriented</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Section
        eyebrow="Featured"
        title="Projects with measurable impact"
        description="A snapshot of product work spanning web apps, mobile, and design systems."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Button asChild variant="secondary">
            <Link href="/projects">Explore all projects</Link>
          </Button>
        </div>
      </Section>

      <Section
        eyebrow="Approach"
        title="Designing with intent"
        description="I collaborate across product, engineering, and brand teams to craft experiences that feel cohesive and perform under pressure."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Strategic foundations",
              body: "Aligning stakeholders early with lightweight discovery, journeys, and success metrics.",
            },
            {
              title: "Systems over screens",
              body: "Building reusable patterns, tokens, and documentation to scale design and engineering.",
            },
            {
              title: "Polish that ships",
              body: "Crafting micro-interactions, accessibility, and performance details before launch.",
            },
          ].map((item) => (
            <div key={item.title} className="card-surface p-6">
              <h3 className="text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Contact"
        title="Let’s build something premium"
        description="If you’re looking for a design-forward engineer, I’d love to hear about your product goals."
      >
        <div className="flex flex-wrap items-center gap-4">
          <Magnetic>
            <Button asChild size="lg">
              <Link href="/contact">Book a call</Link>
            </Button>
          </Magnetic>
          <Button asChild variant="outline" size="lg">
            <Link href="/about">More about me</Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}
