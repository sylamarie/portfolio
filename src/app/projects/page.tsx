import type { Metadata } from "next";

import { Section } from "@/components/section";
import { ProjectsGrid } from "@/components/projects-grid";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Software and web development projects, including full-stack, backend API, and e-commerce implementations.",
};

export default function ProjectsPage() {
  return (
    <div>
      <Section
        eyebrow="Projects"
        title="Selected development work"
        description="Projects from professional and academic experience, covering frontend, backend, APIs, and deployment."
      >
        <ProjectsGrid />
      </Section>

      <Section
        eyebrow="Process"
        title="How projects are delivered"
        description="A consistent engineering workflow helps me deliver reliable and maintainable results."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Architecture",
              body: "Define data models, API structure, and user flows based on requirements.",
            },
            {
              step: "02",
              title: "Implementation",
              body: "Build responsive frontend interfaces and backend services with clean code practices.",
            },
            {
              step: "03",
              title: "Testing & Deployment",
              body: "Validate APIs with Postman, document with Swagger, and deploy using Render.",
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
