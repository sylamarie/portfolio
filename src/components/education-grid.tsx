"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type EducationItem = {
  degree: string;
  school: string;
  location: string;
  status: string;
  diplomaImage?: string;
  overview?: string;
  outcomes?: string[];
  careerPaths?: string[];
};

type EducationGridProps = {
  education: EducationItem[];
};

export function EducationGrid({ education }: EducationGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const active = activeIndex !== null ? education[activeIndex] : null;
  const canPortal = typeof document !== "undefined";

  useEffect(() => {
    if (active) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
    return undefined;
  }, [active]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    }

    if (active) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
    return undefined;
  }, [active]);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {education.map((item, index) => (
        <div key={item.degree} className="card-surface p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-subtle">
            {item.status}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-foreground">
            {item.degree}
          </h3>
          <p className="mt-2 text-sm text-muted">{item.school}</p>
          <p className="text-sm text-muted">{item.location}</p>
          {item.overview ? (
            <p className="mt-4 text-sm leading-7 text-muted">{item.overview}</p>
          ) : null}
          {item.outcomes?.length || item.careerPaths?.length ? (
            <details className="mt-4 rounded-[14px] border border-border bg-white/80 p-4">
              <summary className="cursor-pointer text-sm font-semibold text-foreground">
                Program details
              </summary>
              <div className="mt-4 space-y-4">
                {item.outcomes?.length ? (
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-subtle">
                      Outcomes
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-muted">
                      {item.outcomes.map((outcome) => (
                        <li key={outcome} className="leading-6">
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {item.careerPaths?.length ? (
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-subtle">
                      Potential roles
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.careerPaths.map((path) => (
                        <span
                          key={path}
                          className="rounded-full border border-border bg-white px-3 py-1 text-xs text-foreground"
                        >
                          {path}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </details>
          ) : null}
          {item.diplomaImage ? (
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="mt-5 block w-full overflow-hidden rounded-[14px] border border-border bg-white text-left focus-ring"
            >
              <Image
                src={item.diplomaImage}
                alt={`${item.degree} diploma`}
                width={900}
                height={1200}
                className="h-auto w-full object-contain transition duration-300 hover:scale-[1.01]"
              />
            </button>
          ) : null}
        </div>
      ))}

      {canPortal
        ? createPortal(
            <AnimatePresence>
              {active?.diplomaImage ? (
                <motion.div
                  className="fixed inset-0 z-[120] grid place-items-center p-3 sm:p-6"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Diploma preview dialog"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.button
                    type="button"
                    onClick={() => setActiveIndex(null)}
                    className="absolute inset-0 bg-black/50 backdrop-blur-md"
                    aria-label="Close diploma preview"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                  <motion.div
                    className="relative z-10 flex h-[calc(100dvh-1.5rem)] w-full max-w-5xl min-h-0 flex-col overflow-hidden rounded-[20px] border border-border bg-white shadow-glow sm:h-[calc(100dvh-3rem)]"
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
                    animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
                    exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-border bg-white px-4 py-4 sm:px-6">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-subtle">
                          Education
                        </p>
                        <p className="mt-1 text-base font-semibold text-foreground">
                          {active.degree}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveIndex(null)}
                        className="rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-foreground hover:bg-slate-50 focus-ring"
                      >
                        Close
                      </button>
                    </div>
                    <div className="modal-scroll min-h-0 flex-1 overflow-y-auto overscroll-contain bg-white p-4 sm:p-5">
                      <Image
                        src={active.diplomaImage}
                        alt={`${active.degree} diploma`}
                        width={1200}
                        height={1600}
                        className="mx-auto h-auto w-full max-w-[920px] object-contain"
                        priority
                      />
                    </div>
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body
          )
        : null}
    </div>
  );
}
