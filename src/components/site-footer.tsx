import Link from "next/link";

import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="footer-ambient relative overflow-hidden border-t border-white/10 py-12">
      <div className="footer-ribbon" />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 px-4 md:grid-cols-[1.2fr_0.8fr] md:px-8">
        <div className="space-y-3">
          <p className="text-sm font-semibold tracking-[0.06em] text-white">
            {site.name}
          </p>
          <p className="max-w-xl text-sm text-slate-200/90">
            Software developer focused on practical full-stack delivery, clean UX,
            and reliable implementation from idea to deployment.
          </p>
          <p className="text-sm text-slate-300/90">
            {site.role} · {site.location}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 text-sm">
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
            <Link className="block text-slate-200/95 transition hover:text-white" href="/">
              Home
            </Link>
            <Link className="block text-slate-200/95 transition hover:text-white" href="/projects">
              Projects
            </Link>
            <Link className="block text-slate-200/95 transition hover:text-white" href="/about">
              About
            </Link>
            <Link className="block text-slate-200/95 transition hover:text-white" href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
