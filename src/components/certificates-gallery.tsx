"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type Certificate = {
  title: string;
  issuer: string;
  image: string;
};

type CertificatesGalleryProps = {
  certificates: Certificate[];
  className?: string;
};

export function CertificatesGallery({ certificates, className }: CertificatesGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const active = activeIndex !== null ? certificates[activeIndex] : null;

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
    <div className={cn("grid gap-8 lg:grid-cols-3", className)}>
      {certificates.map((cert, index) => (
        <button
          key={cert.title}
          type="button"
          onClick={() => setActiveIndex(index)}
          className="card-surface group text-left focus-ring"
        >
          <div className="p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-subtle">
                Certificate
              </span>
            </div>
          </div>
          <div className="overflow-hidden rounded-[16px] border border-border bg-white shadow-soft">
            <Image
              src={cert.image}
              alt={`${cert.title} certificate`}
              width={900}
              height={1200}
              className="h-auto w-full object-contain transition duration-300 group-hover:scale-[1.01]"
            />
          </div>
        </button>
      ))}

      <AnimatePresence>
        {active ? (
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
              aria-label="Close certificate"
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
                    Certificate
                  </p>
                  <p className="mt-1 text-base font-semibold text-foreground">
                    {active.title}
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
                  src={active.image}
                  alt={`${active.title} certificate`}
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
