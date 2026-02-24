"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-white/72 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 md:px-8">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.08em] text-foreground"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-full border border-border/80 bg-white/75 p-1 md:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-accent shadow-sm"
                    : "text-foreground/80 hover:bg-[rgba(18,35,61,0.08)] hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill-desktop"
                    className="absolute inset-0 -z-10 rounded-full border border-accent/25 bg-[rgba(28,92,168,0.14)]"
                    transition={{ type: "spring", stiffness: 350, damping: 28, mass: 0.4 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex">
          <Button asChild size="sm">
            <Link href="/contact">Let&apos;s work together</Link>
          </Button>
        </div>

        <button
          type="button"
          className="focus-ring rounded-full border border-border bg-white px-3 py-2 text-xs font-semibold text-foreground md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/70 bg-white/90 px-4 py-3 md:hidden" aria-label="Mobile primary">
          <div className="mx-auto flex w-full max-w-7xl flex-wrap gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "focus-ring relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-accent"
                      : "bg-white text-foreground/80 hover:bg-[rgba(18,35,61,0.08)] hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill-mobile"
                      className="absolute inset-0 -z-10 rounded-full border border-accent/25 bg-[rgba(28,92,168,0.14)]"
                      transition={{ type: "spring", stiffness: 350, damping: 28, mass: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
            <Button asChild size="sm" className="ml-auto">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
