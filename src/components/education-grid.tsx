"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type EducationItem = {
  degree: string;
  school: string;
  location: string;
  status: string;
  diplomaImage?: string;
};

type EducationGridProps = {
  education: EducationItem[];
};

export function EducationGrid({ education }: EducationGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const active = activeIndex !== null ? education[activeIndex] : null;

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

      <AnimatePresence>
        {active?.diplomaImage ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
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
              className="relative z-10 w-full max-w-4xl overflow-hidden rounded-[20px] border border-border bg-white shadow-glow"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between gap-4 border-b border-border px-6 py-4">
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
              <div className="max-h-[80vh] overflow-auto bg-white p-4">
                <Image
                  src={active.diplomaImage}
                  alt={`${active.degree} diploma`}
                  width={1200}
                  height={1600}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
