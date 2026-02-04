"use client";

import { useMemo, useState } from "react";

import { projectFilters, projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/motion/reveal";
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
              variant={isActive ? "default" : "outline"}
              onClick={() => setActive(filter)}
              aria-pressed={isActive}
            >
              {filter}
            </Button>
          );
        })}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.05}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
