import Link from "next/link";

import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="text-sm font-semibold text-foreground">{site.name}</p>
          <p className="mt-2 text-sm text-muted">
            {site.role} • {site.location}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
          <Link
            className="hover:text-foreground"
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            className="hover:text-foreground"
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          <Link className="hover:text-foreground" href={`mailto:${site.email}`}>
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
