import type { Metadata } from "next";

import { Section } from "@/components/section";
import { Reveal, StaggerGroup } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { site, skills, tools, experience, education, certificates } from "@/data/site";
import { CertificatesGallery } from "@/components/certificates-gallery";
import { EducationGrid } from "@/components/education-grid";

export const metadata: Metadata = {
  title: "About",
  description: "Background, technical capabilities, education, and work experience.",
};

export default function AboutPage() {
  return (
    <div>
      <Section
        eyebrow="About"
        title="Engineering mindset with practical execution"
        description="I focus on building dependable software: clear architecture, maintainable interfaces, and outcomes aligned with real user needs."
      >
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-stretch">
          <Reveal className="h-full">
            <div className="card-surface h-full p-6">
              <p className="text-sm text-muted">
                {site.name} is a software developer experienced in frontend and
                backend implementation. Current work centers on full-stack web
                development with React, Node.js, and Express.
              </p>
              <p className="mt-4 text-sm text-muted">
                Additional strengths include Shopify e-commerce development, API
                documentation with Swagger, and deployment workflows with Render
                and GitHub.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05} variant="scale" className="h-full">
            <div className="card-surface h-full p-6">
              <p className="text-sm font-semibold text-foreground">{site.name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-subtle">
                Software Developer
              </p>
              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-subtle">Location</p>
              <p className="mt-2 text-lg font-semibold text-foreground">{site.location}</p>
              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-subtle">
                Availability
              </p>
              <p className="mt-2 text-sm text-muted">{site.availability}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section
        eyebrow="Skills"
        title="Technical strengths"
        description="Applied skills used in real coursework, projects, and delivery workflows."
      >
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Tools"
        title="Development stack"
        description="Core technologies used across frontend, backend, and deployment."
      >
        <StaggerGroup className="grid gap-4 md:grid-cols-4">
          {tools.map((tool) => (
            <Reveal key={tool} variant="scale">
              <div className="card-surface p-4 text-sm text-foreground">{tool}</div>
            </Reveal>
          ))}
        </StaggerGroup>
      </Section>

      <Section
        eyebrow="Education"
        title="Academic background"
        description="Completed software development programs and credentials."
      >
        <EducationGrid education={education} />
      </Section>

      <Section
        eyebrow="Certificates"
        title="Completed certificates"
        description="Formal training credentials in software and web development."
      >
        <CertificatesGallery certificates={certificates} />
      </Section>

      <Section
        eyebrow="Experience"
        title="Professional and leadership experience"
        description="Roles focused on execution discipline, communication, and delivery."
      >
        <StaggerGroup className="space-y-6">
          {experience.map((item) => (
            <Reveal key={item.title} variant="up">
              <div className="card-surface p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-foreground">
                    {item.title} · {item.company}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-subtle">
                    {item.period}
                  </p>
                </div>
                <p className="mt-3 text-sm text-muted">{item.summary}</p>
              </div>
            </Reveal>
          ))}
        </StaggerGroup>
      </Section>
    </div>
  );
}
