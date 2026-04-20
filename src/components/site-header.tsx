"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { site } from "@/data/site";
import { Magnetic } from "@/components/motion/magnetic";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/#home", sectionId: "home" },
  { label: "Projects", href: "/#projects", sectionId: "projects" },
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const headerRef = useRef<HTMLElement | null>(null);
  const pendingSectionRef = useRef<string | null>(null);
  const pendingResetRef = useRef<number | null>(null);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const syncFromHash = () => {
      const hashSection = window.location.hash.replace("#", "");

      if (navItems.some((item) => item.sectionId === hashSection)) {
        setActiveSection(hashSection);
      }
    };

    syncFromHash();

    const sectionElements = navItems
      .map((item) => document.getElementById(item.sectionId))
      .filter((element): element is HTMLElement => element instanceof HTMLElement);

    if (sectionElements.length === 0) {
      return;
    }

    let ticking = false;

    const syncFromScroll = () => {
      const viewportAnchor = window.scrollY + window.innerHeight * 0.35;
      let nextActiveSection = sectionElements[0].id;

      sectionElements.forEach((element) => {
        const sectionTop = window.scrollY + element.getBoundingClientRect().top;

        if (viewportAnchor >= sectionTop - 24) {
          nextActiveSection = element.id;
        }
      });

      if (pendingSectionRef.current) {
        const pendingElement = sectionElements.find(
          (element) => element.id === pendingSectionRef.current
        );

        if (pendingElement) {
          const headerOffset = headerRef.current?.offsetHeight ?? 88;
          const pendingRect = pendingElement.getBoundingClientRect();
          const reachedPendingSection = Math.abs(pendingRect.top - headerOffset) <= 32;

          if (!reachedPendingSection) {
            setActiveSection(pendingSectionRef.current);
            ticking = false;
            return;
          }
        }

        pendingSectionRef.current = null;
      }

      setActiveSection(nextActiveSection);
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(syncFromScroll);
    };

    syncFromScroll();
    window.addEventListener("hashchange", syncFromHash);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (pendingResetRef.current) {
        window.clearTimeout(pendingResetRef.current);
      }

      window.removeEventListener("hashchange", syncFromHash);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pathname]);

  const handleNavClick = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);

    if (!targetElement) {
      return;
    }

    setActiveSection(sectionId);
    pendingSectionRef.current = sectionId;

    if (pendingResetRef.current) {
      window.clearTimeout(pendingResetRef.current);
    }

    const headerOffset = headerRef.current?.offsetHeight ?? 88;
    const targetTop =
      window.scrollY + targetElement.getBoundingClientRect().top - headerOffset - 12;

    window.history.replaceState(null, "", `/#${sectionId}`);
    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: "smooth",
    });

    pendingResetRef.current = window.setTimeout(() => {
      pendingSectionRef.current = null;
      pendingResetRef.current = null;
    }, 1200);
  };

  const handleNavLinkClick = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (pathname !== "/") {
      return;
    }

    event.preventDefault();
    handleNavClick(sectionId);
  };

  return (
    <motion.header
      ref={headerRef}
      className="sticky top-0 z-40 border-b border-border/70 bg-white/72 backdrop-blur-md"
      initial={shouldReduceMotion ? false : { y: -16, opacity: 0 }}
      animate={shouldReduceMotion ? undefined : { y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 md:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: -10 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          <Link
            href="/#home"
            className="text-sm font-semibold tracking-[0.08em] text-foreground"
            onClick={() => setOpen(false)}
          >
            {site.name}
          </Link>
        </motion.div>

        <motion.nav
          className="hidden items-center gap-1 rounded-full border border-border/80 bg-white/75 p-1 md:flex"
          aria-label="Primary"
          initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          {navItems.map((item) => {
            const isActive = pathname === "/" && activeSection === item.sectionId;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavLinkClick(event, item.sectionId)}
                className={cn(
                  "focus-ring relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "scale-[1.05] -translate-y-0.5 text-accent shadow-[0_10px_24px_-16px_rgba(28,92,168,0.9)]"
                    : "text-foreground/80 hover:bg-[rgba(18,35,61,0.08)] hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill-desktop"
                    className="absolute inset-0 -z-10 rounded-full border border-accent/25 bg-[rgba(28,92,168,0.14)]"
                    transition={{ type: "spring", stiffness: 350, damping: 24, mass: 0.4 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </motion.nav>

        <motion.div
          className="hidden md:flex"
          initial={shouldReduceMotion ? false : { opacity: 0, x: 10 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
        >
          <Magnetic>
            <Button asChild size="sm">
              <Link href="/#contact">Let&apos;s work together</Link>
            </Button>
          </Magnetic>
        </motion.div>

        <motion.button
          type="button"
          className="focus-ring rounded-full border border-border bg-white px-3 py-2 text-xs font-semibold text-foreground md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.08 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
        >
          Menu
        </motion.button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            className="border-t border-border/70 bg-white/90 px-4 py-3 md:hidden"
            aria-label="Mobile primary"
            initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
            animate={shouldReduceMotion ? undefined : { height: "auto", opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="mx-auto flex w-full max-w-7xl flex-wrap gap-2 overflow-hidden"
              initial={shouldReduceMotion ? false : "hidden"}
              animate={shouldReduceMotion ? undefined : "visible"}
              exit={shouldReduceMotion ? undefined : "hidden"}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.04,
                  },
                },
              }}
            >
              {navItems.map((item) => {
                const isActive = pathname === "/" && activeSection === item.sectionId;

                return (
                  <motion.div
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, y: -8 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.24 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(event) => {
                        handleNavLinkClick(event, item.sectionId);
                        setOpen(false);
                      }}
                      className={cn(
                        "focus-ring relative block rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                        isActive
                          ? "scale-[1.04] -translate-y-0.5 text-accent shadow-[0_10px_24px_-16px_rgba(28,92,168,0.9)]"
                          : "bg-white text-foreground/80 hover:bg-[rgba(18,35,61,0.08)] hover:text-foreground"
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-pill-mobile"
                          className="absolute inset-0 -z-10 rounded-full border border-accent/25 bg-[rgba(28,92,168,0.14)]"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 24,
                            mass: 0.4,
                          }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                className="ml-auto"
                variants={{
                  hidden: { opacity: 0, y: -8 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.24 }}
              >
                <Button asChild size="sm" className="ml-auto">
                  <Link href="/#contact" onClick={() => setOpen(false)}>
                    Contact
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
