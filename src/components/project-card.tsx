"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, className }: { project: Project; className?: string }) {
  const href = project.link ?? `/projects/${project.slug}`;
  const isExternal = Boolean(project.link);
  const shouldReduceMotion = useReducedMotion();

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn("group block h-full focus-visible:outline-none", className)}
    >
      <motion.div
        className={cn(
          "card-surface relative flex h-full flex-col overflow-hidden transition hover:border-accent/35 hover:shadow-soft focus-visible:ring-2 focus-visible:ring-accent/30"
        )}
        whileHover={
          shouldReduceMotion
            ? undefined
            : { y: -7, rotateX: 1.8, rotateY: -1.8, transition: { duration: 0.28 } }
        }
      >
        <motion.div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(28,92,168,0)_20%,rgba(28,92,168,0.14)_50%,rgba(28,92,168,0)_80%)]"
          animate={shouldReduceMotion ? undefined : { x: ["-120%", "120%"] }}
          transition={shouldReduceMotion ? undefined : { duration: 4.8, repeat: Infinity, ease: "linear" }}
        />

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
        <div className="relative z-10 flex flex-1 flex-col gap-4 p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-subtle">
              {project.category} · {project.year}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-foreground">{project.title}</h3>
            <p className="mt-2 text-sm text-muted">{project.summary}</p>
            {project.impact && (
              <p className="mt-3 rounded-lg border border-border/80 bg-white/75 px-3 py-2 text-sm text-foreground">
                {project.impact}
              </p>
            )}
          </div>
          <div className="mt-auto flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
          <p className="text-sm font-medium text-accent">
            {isExternal ? "View live project" : "View case study"}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
