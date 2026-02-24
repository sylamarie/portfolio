"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type Certificate = {
  title: string;
  issuer: string;
  image: string;
  pdf?: string;
};

type CertificatesGalleryProps = {
  certificates: Certificate[];
  className?: string;
};

export function CertificatesGallery({ certificates, className }: CertificatesGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const active = activeIndex !== null ? certificates[activeIndex] : null;
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

      {canPortal
        ? createPortal(
            <AnimatePresence>
              {active ? (
                <motion.div
                  className="fixed inset-0 z-[120] grid place-items-center p-3 sm:p-6"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Certificate preview dialog"
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
                    className="relative z-10 flex h-[calc(100dvh-1.5rem)] w-full max-w-5xl min-h-0 flex-col overflow-hidden rounded-[20px] border border-border bg-white shadow-glow sm:h-[calc(100dvh-3rem)]"
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
                    animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
                    exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-border bg-white px-4 py-4 sm:px-6">
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
                    <div className="modal-scroll min-h-0 flex-1 overflow-y-auto overscroll-contain bg-white p-4 sm:p-5">
                      {active.pdf ? (
                        <div className="mb-4">
                          <Link
                            href={active.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex rounded-full border border-border bg-white px-4 py-2 text-xs font-medium text-foreground hover:bg-slate-50"
                          >
                            View PDF
                          </Link>
                        </div>
                      ) : null}
                      <Image
                        src={active.image}
                        alt={`${active.title} certificate`}
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
