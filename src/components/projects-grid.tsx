"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { Reveal, StaggerGroup } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function ProjectsGrid({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-8", className)}>
      <StaggerGroup className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Reveal key={project.slug} variant="scale">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </StaggerGroup>
    </div>
  );
}
