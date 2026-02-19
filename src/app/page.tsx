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
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(39,80,153,0.12),transparent_40%)]" />
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 md:grid-cols-[1.15fr_0.85fr] md:items-center md:px-8">
          <div className="space-y-6">
            <Reveal>
              <p className="text-eyebrow text-subtle">
                {site.role} • {site.location}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-display font-serif text-foreground">
                Building reliable software and practical web solutions.
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
                  <Link href="/contact">Contact me</Link>
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
            <div className="glass-panel p-6">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-subtle">
                      Profile summary
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-foreground">
                      {site.name}
                    </p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
                    {site.initials}
                  </div>
                </div>
                <div className="space-y-2 text-sm text-muted">
                  <p>Experienced in React, Node.js, Express, REST APIs, and database integration.</p>
                  <p>Background includes Shopify e-commerce development and academic full-stack projects.</p>
                </div>
                <div className="grid gap-3 rounded-[12px] border border-border bg-white p-4 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-subtle">Core stack</span>
                    <span className="text-foreground">React, Node.js, Express</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-subtle">Databases</span>
                    <span className="text-foreground">MongoDB, PostgreSQL, MySQL</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-subtle">Deployment</span>
                    <span className="text-foreground">Render, GitHub</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Section
        eyebrow="Featured"
        title="Resume-aligned projects"
        description="Selected projects covering web application development, backend APIs, and e-commerce implementation."
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
        eyebrow="Work style"
        title="How I build"
        description="I follow a practical engineering process focused on clear architecture, tested APIs, and reliable deployments."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Plan",
              body: "Define requirements, data models, and technical scope before implementation.",
            },
            {
              title: "Build",
              body: "Develop responsive UIs and backend services with structured, maintainable code.",
            },
            {
              title: "Validate",
              body: "Test endpoints with Postman, document APIs with Swagger, and deploy on Render.",
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
        title="Open to new opportunities"
        description="I am currently open to junior software developer roles, web development projects, and remote collaboration."
      >
        <div className="flex flex-wrap items-center gap-4">
          <Magnetic>
            <Button asChild size="lg">
              <Link href="/contact">Send an inquiry</Link>
            </Button>
          </Magnetic>
          <Button asChild variant="outline" size="lg">
            <Link href="/about">View full background</Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}
