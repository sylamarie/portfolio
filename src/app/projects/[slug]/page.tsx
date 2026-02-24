import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal, StaggerGroup } from "@/components/motion/reveal";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <section className="pb-12 pt-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <Reveal>
              <p className="text-eyebrow text-subtle">{project.category}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-display font-serif text-foreground">{project.title}</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-hero text-muted">{project.description}</p>
            </Reveal>
            {project.impact && (
              <Reveal delay={0.15} variant="scale">
                <p className="rounded-xl border border-border/80 bg-white/90 px-4 py-3 text-sm text-foreground">
                  {project.impact}
                </p>
              </Reveal>
            )}
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} variant="scale">
            <div className="card-surface overflow-hidden">
              <div className="relative h-64 w-full bg-gradient-to-br from-white to-slate-50">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={[
                    project.imageFit === "contain" ? "object-contain p-4" : "object-cover",
                    project.imagePosition === "top" ? "object-top" : "object-center",
                  ].join(" ")}
                  priority
                />
              </div>
              <div className="grid gap-4 p-6 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-subtle">Year</span>
                  <span className="text-foreground">{project.year}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-subtle">Role</span>
                  <span className="text-foreground">{project.role}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-subtle">Scope</span>
                  <span className="text-foreground">Frontend, Backend, Deployment</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.link && (
                    <Button asChild variant="secondary" size="sm">
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        Visit live project
                      </Link>
                    </Button>
                  )}
                  {project.repo && (
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.repo} target="_blank" rel="noopener noreferrer">
                        View repository
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {(project.problem || project.solution || project.outcome) && (
        <Section
          eyebrow="Case Study"
          title="Problem, solution, and outcome"
          description="A concise breakdown of how the project was approached and what it achieved."
        >
          <StaggerGroup className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Problem", body: project.problem },
              { title: "Solution", body: project.solution },
              { title: "Outcome", body: project.outcome },
            ]
              .filter((item) => item.body)
              .map((item) => (
                <Reveal key={item.title}>
                  <div className="card-surface h-full p-6">
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm text-muted">{item.body}</p>
                  </div>
                </Reveal>
              ))}
          </StaggerGroup>
        </Section>
      )}

      <Section
        eyebrow="Highlights"
        title="Implementation highlights"
        description="Key engineering tasks completed across development, integration, testing, and deployment."
      >
        <StaggerGroup className="grid gap-6 md:grid-cols-3">
          {project.highlights.map((item) => (
            <Reveal key={item} variant="up">
              <div className="card-surface p-6">
                <p className="text-sm text-muted">{item}</p>
              </div>
            </Reveal>
          ))}
        </StaggerGroup>
      </Section>

      <Section
        eyebrow="Next"
        title="Explore more projects"
        description="Review additional work across web development, APIs, and product-focused implementation."
      >
        <Button asChild variant="outline">
          <Link href="/projects">Back to projects</Link>
        </Button>
      </Section>
    </div>
  );
}
