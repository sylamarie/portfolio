"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { site } from "@/data/site";
import { Button } from "@/components/ui/button";

const contactFacts = [
  site.location,
  "Open for remote roles",
  "Freelance collaboration welcome",
];

const contactRows = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    label: "LinkedIn",
    value: "View profile",
    href: site.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "Visit profile",
    href: site.github,
    external: true,
  },
  {
    label: "Location",
    value: site.location,
  },
] as const;

export function ContactPanel() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[26px] border border-border/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(246,249,255,0.92))] shadow-[0_32px_70px_-44px_rgba(15,36,61,0.48)]"
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14, scale: 0.985 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="pointer-events-none absolute -left-14 top-10 h-40 w-40 rounded-full bg-[rgba(96,154,235,0.16)] blur-3xl"
        animate={shouldReduceMotion ? undefined : { x: [0, 24, 0], y: [0, -10, 0] }}
        transition={
          shouldReduceMotion
            ? undefined
            : { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }
      />
      <motion.div
        className="pointer-events-none absolute -right-10 bottom-0 h-44 w-44 rounded-full bg-[rgba(47,121,213,0.14)] blur-3xl"
        animate={shouldReduceMotion ? undefined : { x: [0, -18, 0], y: [0, 16, 0] }}
        transition={
          shouldReduceMotion
            ? undefined
            : { duration: 9, repeat: Infinity, ease: "easeInOut" }
        }
      />

      <div className="relative grid md:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-8 p-6 md:p-10">
          <div className="space-y-4">
            <motion.p
              className="text-xs uppercase tracking-[0.2em] text-subtle"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              Contact
            </motion.p>
            <motion.h3
              className="max-w-xl text-[clamp(2rem,3vw,2.8rem)] font-semibold leading-[1.08] text-foreground"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              Let&apos;s talk about the role or project
            </motion.h3>
            <motion.p
              className="max-w-xl text-sm leading-7 text-muted md:text-[15px]"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.16 }}
            >
              I am open to remote software and web development opportunities, as well
              as select freelance collaborations.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            <Button asChild size="lg" className="cta-emphasis min-w-[180px]">
              <Link href={`mailto:${site.email}`}>
                <span className="cta-label">Send email</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[150px] bg-white/90">
              <Link href={site.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3 border-t border-border/80 pt-6"
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.28 }}
          >
            {contactFacts.map((fact) => (
              <span
                key={fact}
                className="rounded-full border border-border/80 bg-white/86 px-4 py-2 text-sm text-foreground shadow-[0_12px_28px_-24px_rgba(15,36,61,0.45)]"
              >
                {fact}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="border-t border-border/80 bg-[linear-gradient(180deg,rgba(248,250,255,0.88),rgba(243,247,255,0.78))] p-6 md:border-l md:border-t-0 md:p-8"
          initial={shouldReduceMotion ? undefined : { opacity: 0, x: 18 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-subtle">Direct contact</p>
          <div className="mt-5 overflow-hidden rounded-[20px] border border-border/80 bg-white/92 shadow-[0_22px_48px_-34px_rgba(15,36,61,0.35)]">
            {contactRows.map((row, index) => {
              const content = "href" in row ? (
                <Link
                  className="mt-3 block text-sm font-medium text-foreground transition hover:text-accent"
                  href={row.href}
                  target={"external" in row && row.external ? "_blank" : undefined}
                  rel={"external" in row && row.external ? "noopener noreferrer" : undefined}
                >
                  {row.value}
                </Link>
              ) : (
                <p className="mt-3 text-sm font-medium text-foreground">{row.value}</p>
              );

              return (
                <motion.div
                  key={row.label}
                  className="relative px-5 py-4"
                  whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                >
                  {index < contactRows.length - 1 ? (
                    <div className="absolute inset-x-5 bottom-0 h-px bg-border/80" />
                  ) : null}
                  <p className="text-xs uppercase tracking-[0.2em] text-subtle">{row.label}</p>
                  {content}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
