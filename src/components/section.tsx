import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn("section-fade py-[4.5rem] md:py-24", className)}>
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        {(eyebrow || title || description) && (
          <div className="mb-12 max-w-3xl space-y-3 md:mb-14">
            {eyebrow && (
              <Reveal>
                <p className="text-eyebrow text-subtle">{eyebrow}</p>
              </Reveal>
            )}
            {title && (
              <Reveal delay={0.06}>
                <h2 className="text-title font-serif text-foreground">
                  {title}
                </h2>
              </Reveal>
            )}
            {description && (
              <Reveal delay={0.12}>
                <p className="max-w-2xl text-base text-muted">{description}</p>
              </Reveal>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
