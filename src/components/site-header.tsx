import Link from "next/link";

import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { UnderlineLink } from "@/components/motion/underline-link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-white/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 md:px-8">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.08em] text-foreground"
        >
          {site.name}
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <UnderlineLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>
        <div className="hidden md:flex">
          <Button asChild size="sm">
            <Link href="/contact">Let’s work together</Link>
          </Button>
        </div>
        <nav className="flex items-center gap-3 md:hidden" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-medium text-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
