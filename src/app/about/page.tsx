import type { Metadata } from "next";

import { Section } from "@/components/section";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { site, skills, tools, experience, education, certificates } from "@/data/site";
import { CertificatesGallery } from "@/components/certificates-gallery";
import { EducationGrid } from "@/components/education-grid";

export const metadata: Metadata = {
  title: "About",
  description: "Resume background, technical skills, and experience timeline.",
};

export default function AboutPage() {
  return (
    <div>
      <Section
        eyebrow="About"
        title="Software development background"
        description="My focus is practical software engineering: clean architecture, reliable APIs, and responsive interfaces that solve real user needs."
      >
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="card-surface p-6">
              <p className="text-sm text-muted">
                {site.name} is a software developer with hands-on experience in
                frontend and backend development. My current focus is building
                full-stack applications with React, Node.js, and Express.
              </p>
              <p className="mt-4 text-sm text-muted">
                I also work on e-commerce development using Shopify, API
                documentation with Swagger, and deployment workflows using
                Render and GitHub.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="card-surface p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-subtle">
                Location
              </p>
              <p className="mt-2 text-lg font-semibold text-foreground">
                {site.location}
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-subtle">
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
        description="Core technical capabilities from my resume and recent academic project work."
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
        description="Primary tools and technologies used in my software and web development projects."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {tools.map((tool) => (
            <div key={tool} className="card-surface p-4 text-sm text-foreground">
              {tool}
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Education"
        title="Academic background"
        description="Software development degree programs completed and in progress at BYU-Idaho."
      >
        <EducationGrid education={education} />
      </Section>

      <Section
        eyebrow="Certificates"
        title="Completed certificates"
        description="Software and web development certificates from BYU-Idaho."
      >
        <CertificatesGallery certificates={certificates} />
      </Section>

      <Section
        eyebrow="Experience"
        title="Professional and leadership experience"
        description="Recent roles focused on development, communication, and structured execution."
      >
        <div className="space-y-6">
          {experience.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
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
        </div>
      </Section>
    </div>
  );
}
