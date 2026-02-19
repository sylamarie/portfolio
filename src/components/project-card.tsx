import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, className }: { project: Project; className?: string }) {
  const href = project.link ?? `/projects/${project.slug}`;
  const isExternal = Boolean(project.link);

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "group card-surface flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30",
        className
      )}
    >
      <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-white to-slate-50">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={cn(
            "transition duration-500 group-hover:scale-[1.1]",
            project.imageFit === "contain" ? "object-contain p-3" : "object-cover",
            project.imagePosition === "top" ? "object-top" : "object-center"
          )}
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-subtle">
            {project.category}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-foreground">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-muted">{project.summary}</p>
        </div>
        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
