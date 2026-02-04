import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

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
              <h1 className="text-display font-serif text-foreground">
                {project.title}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-hero text-muted">{project.description}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="card-surface overflow-hidden">
              <div className="relative h-64 w-full bg-gradient-to-br from-white to-slate-50">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
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
                  <span className="text-foreground">Product, UI, Motion</span>
                </div>
                {project.link && (
                  <Button asChild variant="secondary" size="sm">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit live project
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Section
        eyebrow="Highlights"
        title="Outcomes"
        description="Key product wins and measurable improvements delivered with this engagement."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {project.highlights.map((item, index) => (
            <Reveal key={item} delay={index * 0.08}>
              <div className="card-surface p-6">
                <p className="text-sm text-muted">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Next"
        title="More projects"
        description="Explore additional work across product, design systems, and AI tools."
      >
        <Button asChild variant="outline">
          <Link href="/projects">Back to projects</Link>
        </Button>
      </Section>
    </div>
  );
}
