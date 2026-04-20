"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { site } from "@/data/site";

export function SiteFooter() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.footer
      className="footer-ambient relative overflow-hidden border-t border-white/10 py-12"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="footer-ribbon" />
      <motion.div
        className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 px-4 md:grid-cols-[1.2fr_0.8fr] md:px-8"
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
              delayChildren: 0.06,
            },
          },
        }}
      >
        <motion.div
          className="space-y-3"
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-sm font-semibold tracking-[0.06em] text-white">{site.name}</p>
          <p className="max-w-xl text-sm text-slate-200/90">
            Software developer focused on practical full-stack delivery, clean UX, and
            reliable implementation from idea to deployment.
          </p>
          <p className="text-sm text-slate-300/90">
            {site.role} - {site.location}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-5 text-sm"
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.45 }}
        >
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-300">Connect</p>
            <Link
              className="block text-slate-200/95 transition hover:text-white"
              href={`mailto:${site.email}`}
            >
              Email
            </Link>
            <Link
              className="block text-slate-200/95 transition hover:text-white"
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              className="block text-slate-200/95 transition hover:text-white"
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </div>

          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-300">Navigate</p>
            <Link className="block text-slate-200/95 transition hover:text-white" href="/#home">
              Home
            </Link>
            <Link
              className="block text-slate-200/95 transition hover:text-white"
              href="/#projects"
            >
              Projects
            </Link>
            <Link className="block text-slate-200/95 transition hover:text-white" href="/#about">
              About
            </Link>
            <Link
              className="block text-slate-200/95 transition hover:text-white"
              href="/#contact"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}
