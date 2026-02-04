import type { Metadata } from "next";

import { Section } from "@/components/section";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { site, skills, tools, experience, education, certificates } from "@/data/site";
import { CertificatesGallery } from "@/components/certificates-gallery";

export const metadata: Metadata = {
  title: "About",
  description: "Background, skills, and experience timeline.",
};

export default function AboutPage() {
  return (
    <div>
      <Section
        eyebrow="About"
        title="Web development focus"
        description="I focus on building clean, responsive interfaces and reliable web experiences that help users complete tasks quickly and confidently."
      >
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="card-surface p-6">
              <p className="text-sm text-muted">
                {site.name} is a web developer focused on building clean,
                high-performing interfaces. I care about usability, accessibility,
                and the details that make web experiences feel reliable.
              </p>
              <p className="mt-4 text-sm text-muted">
                My experience includes Shopify e-commerce development, responsive
                UI implementation, and structured communication in remote teams.
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
        title="What I bring"
        description="A mix of strategic thinking and hands-on execution across product design and frontend engineering."
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
        title="Daily stack"
        description="Design and development tools used to deliver polished, production-ready experiences."
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
        description="Degree programs in software development at BYU–Idaho."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item) => (
            <div key={item.degree} className="card-surface p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-subtle">
                {item.status}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                {item.degree}
              </h3>
              <p className="mt-2 text-sm text-muted">{item.school}</p>
              <p className="text-sm text-muted">{item.location}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Certificates"
        title="Professional certificates"
        description="View each certificate inline. No downloads required."
      >
        <CertificatesGallery certificates={certificates} />
      </Section>

      <Section
        eyebrow="Experience"
        title="Timeline"
        description="A concise view of recent roles and impact areas."
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
