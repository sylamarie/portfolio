"use client";

import { useMemo, useState } from "react";

import { projectFilters, projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { Reveal, StaggerGroup } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function ProjectsGrid({ className }: { className?: string }) {
  const [active, setActive] = useState<(typeof projectFilters)[number]>(
    projectFilters[0]
  );

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((project) => project.category === active);
  }, [active]);

  return (
    <div className={cn("space-y-8", className)}>
      <div className="flex flex-wrap gap-3">
        {projectFilters.map((filter) => {
          const isActive = filter === active;
          return (
            <Button
              key={filter}
              size="sm"
              variant={isActive ? "secondary" : "outline"}
              className={
                isActive
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-2)]"
                  : "border-[var(--color-border)] bg-white/72 text-[var(--color-foreground)]"
              }
              onClick={() => setActive(filter)}
              aria-pressed={isActive}
            >
              {filter}
            </Button>
          );
        })}
      </div>
      <StaggerGroup className="grid gap-6 md:grid-cols-2">
        {filtered.map((project) => (
          <Reveal key={project.slug} variant="scale">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </StaggerGroup>
    </div>
  );
}
