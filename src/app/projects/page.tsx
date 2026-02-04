import type { Metadata } from "next";

import { Section } from "@/components/section";
import { ProjectsGrid } from "@/components/projects-grid";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A curated selection of product, design system, and engineering work.",
};

export default function ProjectsPage() {
  return (
    <div>
      <Section
        eyebrow="Projects"
        title="Selected work"
        description="Filter by focus area to explore product outcomes, system thinking, and shipping velocity."
      >
        <ProjectsGrid />
      </Section>

      <Section
        eyebrow="Process"
        title="From concept to delivery"
        description="Every project follows a clear structure to align stakeholders and ship with confidence."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Discover",
              body: "Align on goals, constraints, and success metrics with rapid workshops.",
            },
            {
              step: "02",
              title: "Design",
              body: "Prototype flows, iterate in Figma, and establish scalable UI patterns.",
            },
            {
              step: "03",
              title: "Deliver",
              body: "Ship production-ready UI with performance, QA, and accessibility baked in.",
            },
          ].map((item, index) => (
            <Reveal key={item.step} delay={index * 0.08}>
              <div className="card-surface p-6">
                <p className="text-sm font-semibold text-subtle">{item.step}</p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
