import type { Metadata } from "next";

import { Section } from "@/components/section";
import { ProjectsGrid } from "@/components/projects-grid";
import { Reveal, StaggerGroup } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Software and web development projects with practical outcomes, clear architecture, and deployment-ready execution.",
};

export default function ProjectsPage() {
  return (
    <div>
      <Section
        eyebrow="Projects"
        title="Case-study oriented project work"
        description="Review projects by outcome, implementation quality, and live delivery. Each card highlights practical value and engineering decisions."
      >
        <ProjectsGrid />
      </Section>

      <Section
        eyebrow="Delivery Method"
        title="How projects move from idea to live product"
        description="A consistent process keeps scope clear and makes implementation reliable."
      >
        <StaggerGroup className="grid gap-6 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Problem framing",
              body: "Define the user problem and translate it into clear technical scope.",
            },
            {
              step: "02",
              title: "Solution build",
              body: "Implement UI, backend, and data integration with maintainable architecture.",
            },
            {
              step: "03",
              title: "Outcome validation",
              body: "Verify behavior, refine usability, and ship stable production deployment.",
            },
          ].map((item) => (
            <Reveal key={item.step} variant="up">
              <div className="card-surface h-full p-6">
                <p className="text-sm font-semibold text-subtle">{item.step}</p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </StaggerGroup>
      </Section>
    </div>
  );
}
