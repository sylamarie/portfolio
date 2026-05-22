"use client";

import {
  useEffect,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  type PanInfo,
  useReducedMotion,
} from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal, StaggerGroup } from "@/components/motion/reveal";
import {
  freelanceProjects,
  wordPressShowcase,
  type FreelanceProject,
  type FreelanceShowcase,
  type ShowcaseImage,
} from "@/data/freelance-projects";

type SlidePlacement = "active" | "previous" | "next" | "left-hidden" | "right-hidden";

const slideAnimation: Record<
  SlidePlacement,
  {
    x: string;
    scale: number;
    opacity: number;
    zIndex: number;
    rotateY: number;
    filter: string;
  }
> = {
  active: {
    x: "-50%",
    scale: 1,
    opacity: 1,
    zIndex: 30,
    rotateY: 0,
    filter: "blur(0px)",
  },
  previous: {
    x: "-76%",
    scale: 0.84,
    opacity: 0.56,
    zIndex: 20,
    rotateY: 8,
    filter: "blur(0.4px)",
  },
  next: {
    x: "-24%",
    scale: 0.84,
    opacity: 0.56,
    zIndex: 20,
    rotateY: -8,
    filter: "blur(0.4px)",
  },
  "left-hidden": {
    x: "-120%",
    scale: 0.68,
    opacity: 0,
    zIndex: 0,
    rotateY: 14,
    filter: "blur(1px)",
  },
  "right-hidden": {
    x: "20%",
    scale: 0.68,
    opacity: 0,
    zIndex: 0,
    rotateY: -14,
    filter: "blur(1px)",
  },
};

function wrapIndex(index: number, total: number) {
  return (index + total) % total;
}

function getSlidePlacement(index: number, activeIndex: number, total: number): SlidePlacement {
  if (index === activeIndex) return "active";
  if (index === wrapIndex(activeIndex - 1, total)) return "previous";
  if (index === wrapIndex(activeIndex + 1, total)) return "next";

  const forwardDistance = wrapIndex(index - activeIndex, total);
  return forwardDistance < total / 2 ? "right-hidden" : "left-hidden";
}

function FreelanceProjectCard({ project }: { project: FreelanceProject }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const hasGallery = Boolean(project.screenshots?.length);

  const openLightbox = () => {
    if (hasGallery) {
      setIsLightboxOpen(true);
    }
  };

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (!hasGallery) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsLightboxOpen(true);
    }
  };

  return (
    <>
      <motion.article
        className={`card-surface flex h-full flex-col overflow-hidden ${
          hasGallery
            ? "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            : ""
        }`}
        role={hasGallery ? "button" : undefined}
        tabIndex={hasGallery ? 0 : undefined}
        onClick={openLightbox}
        onKeyDown={handleKeyDown}
        whileHover={
          shouldReduceMotion
            ? undefined
            : { y: -6, transition: { duration: 0.24 } }
        }
      >
        <div className="relative flex aspect-[16/10] min-h-56 items-center justify-center overflow-hidden border-b border-border/80 bg-gradient-to-br from-white via-slate-50 to-blue-50">
          {project.screenshot ? (
            <Image
              src={project.screenshot}
              alt={`${project.title} screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
            />
          ) : (
            <div className="mx-5 flex h-[78%] w-[84%] flex-col items-center justify-center rounded-lg border border-dashed border-accent/35 bg-white/72 px-5 text-center shadow-subtle">
              <p className="text-xs uppercase tracking-[0.2em] text-subtle">
                Screenshot Preview
              </p>
              <p className="mt-3 text-sm font-medium text-foreground">
                Placeholder for project screenshot
              </p>
              <p className="mt-2 max-w-xs text-sm text-muted">
                Add an image path here after uploading the screenshot.
              </p>
            </div>
          )}
          {hasGallery && (
            <div className="pointer-events-none absolute bottom-3 right-3 rounded-full border border-white/80 bg-white/86 px-3 py-1 text-xs font-medium text-foreground shadow-subtle backdrop-blur-sm">
              View screenshots
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-5 p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-subtle">
              Freelance Project
            </p>
            <h3 className="mt-2 text-lg font-semibold text-foreground">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              {project.description}
            </p>
          </div>

          <ProjectMeta platform={project.platform} techStack={project.techStack} />

          {project.link && (
            <div className="mt-auto" onClick={(event) => event.stopPropagation()}>
              <Button asChild size="sm" className="w-full sm:w-auto">
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </Link>
              </Button>
            </div>
          )}
        </div>
      </motion.article>

      {hasGallery && (
        <GalleryLightbox
          isOpen={isLightboxOpen}
          onClose={() => setIsLightboxOpen(false)}
          title={project.title}
          screenshots={project.screenshots ?? []}
        />
      )}
    </>
  );
}

function ProjectMeta({
  platform,
  techStack,
}: {
  platform: FreelanceProject["platform"];
  techStack: string[];
}) {
  return (
    <div className="grid gap-4 border-t border-border/80 pt-5 text-sm sm:grid-cols-2">
      <div>
        <p className="text-xs uppercase tracking-[0.16em] text-subtle">
          Platform Used
        </p>
        <p className="mt-2 font-semibold text-foreground">{platform}</p>
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.16em] text-subtle">
          Tech Stack
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

function GalleryLightbox({
  isOpen,
  onClose,
  title,
  screenshots,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  screenshots: ShowcaseImage[];
}) {
  const [zoom, setZoom] = useState(1);
  const shouldReduceMotion = useReducedMotion();

  const closeLightbox = () => {
    setZoom(1);
    onClose();
  };

  const zoomIn = () => {
    setZoom((current) => Math.min(1.8, Number((current + 0.2).toFixed(2))));
  };

  const zoomOut = () => {
    setZoom((current) => Math.max(0.8, Number((current - 0.2).toFixed(2))));
  };

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setZoom(1);
        onClose();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex bg-slate-950/88 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.22 }}
          onClick={closeLightbox}
        >
          <motion.div
            className="mx-auto flex h-full w-full max-w-6xl flex-col overflow-hidden rounded-xl border border-white/15 bg-slate-950/70 shadow-[0_30px_90px_-35px_rgba(0,0,0,0.9)]"
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.26 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-slate-950/85 p-3 sm:p-4">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white">{title}</p>
                <p className="mt-1 text-xs text-white/62">
                  {screenshots.length} screenshots
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  aria-label="Zoom out"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-lg font-semibold text-white transition hover:bg-white/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  onClick={zoomOut}
                >
                  -
                </button>
                <span className="hidden min-w-14 text-center text-xs font-medium text-white/80 sm:inline">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  type="button"
                  aria-label="Zoom in"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-lg font-semibold text-white transition hover:bg-white/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  onClick={zoomIn}
                >
                  +
                </button>
                <button
                  type="button"
                  aria-label="Close image preview"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm font-semibold text-white transition hover:bg-white/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  onClick={closeLightbox}
                >
                  x
                </button>
              </div>
            </div>

            <div className="modal-scroll flex-1 overflow-auto p-3 sm:p-5">
              <div
                className="mx-auto grid gap-5"
                style={{
                  width: `${zoom * 100}%`,
                  maxWidth: `${64 * zoom}rem`,
                }}
              >
                {screenshots.map((screenshot, index) => (
                  <motion.figure
                    key={screenshot.src}
                    className="overflow-hidden rounded-lg border border-white/12 bg-white shadow-[0_20px_70px_-35px_rgba(0,0,0,0.75)]"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: shouldReduceMotion ? 0.01 : 0.32,
                      delay: shouldReduceMotion ? 0 : index * 0.06,
                    }}
                  >
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      width={screenshot.width}
                      height={screenshot.height}
                      sizes="(max-width: 768px) 94vw, 1024px"
                      className="h-auto w-full"
                      priority={index === 0}
                    />
                  </motion.figure>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function WordPressShowcase({ project }: { project: FreelanceShowcase }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxProjectIndex, setLightboxProjectIndex] = useState<number | null>(
    null
  );
  const shouldReduceMotion = useReducedMotion();
  const total = project.projects.length;
  const lightboxProject =
    lightboxProjectIndex === null ? null : project.projects[lightboxProjectIndex];

  const goToPrevious = () => {
    setActiveIndex((current) => wrapIndex(current - 1, total));
  };

  const goToNext = () => {
    setActiveIndex((current) => wrapIndex(current + 1, total));
  };

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxProjectIndex(index);
  };

  const handleCarouselDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x < -60 || info.velocity.x < -450) {
      goToNext();
      return;
    }

    if (info.offset.x > 60 || info.velocity.x > 450) {
      goToPrevious();
    }
  };

  return (
    <>
      <motion.article
        className="card-surface flex h-full flex-col overflow-hidden"
        whileHover={
          shouldReduceMotion
            ? undefined
            : { y: -6, transition: { duration: 0.24 } }
        }
      >
        <div className="relative flex aspect-[16/10] min-h-56 items-center justify-center overflow-hidden border-b border-border/80 bg-gradient-to-br from-white via-slate-50 to-blue-50">
          <motion.div
            className="absolute inset-0 overflow-hidden [perspective:1200px]"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.08}
            onDragEnd={handleCarouselDragEnd}
          >
            <div className="pointer-events-none absolute inset-x-10 bottom-8 h-20 rounded-full bg-accent/10 blur-3xl" />
            {project.projects.map((item, index) => {
              const placement = getSlidePlacement(index, activeIndex, total);
              const animation = slideAnimation[placement];

              return (
                <motion.button
                  key={item.title}
                  type="button"
                  aria-label={`Open ${item.title} screenshots`}
                  className="absolute left-1/2 top-1/2 aspect-[16/10] w-[88%] origin-center overflow-hidden rounded-lg border border-white/80 bg-white shadow-[0_24px_58px_-30px_rgba(18,35,61,0.78)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                  animate={{
                    x: animation.x,
                    y: "-50%",
                    scale: animation.scale,
                    opacity: animation.opacity,
                    rotateY: animation.rotateY,
                    filter: animation.filter,
                  }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0.01 }
                      : { type: "spring", stiffness: 170, damping: 26, mass: 0.9 }
                  }
                  style={{ zIndex: animation.zIndex }}
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={item.preview}
                    alt={`${item.title} preview`}
                    fill
                    sizes="(max-width: 768px) 88vw, 44vw"
                    className="object-cover object-top"
                    priority={index === activeIndex}
                  />
                </motion.button>
              );
            })}

            <button
              type="button"
              aria-label="Previous WordPress project"
              className="absolute left-2 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/80 bg-white/90 text-xl font-semibold text-foreground shadow-soft transition hover:-translate-x-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 sm:left-4"
              onClick={goToPrevious}
            >
              {"<"}
            </button>
            <button
              type="button"
              aria-label="Next WordPress project"
              className="absolute right-2 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/80 bg-white/90 text-xl font-semibold text-foreground shadow-soft transition hover:translate-x-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 sm:right-4"
              onClick={goToNext}
            >
              {">"}
            </button>
          </motion.div>

          <div className="absolute bottom-3 left-1/2 z-40 flex -translate-x-1/2 justify-center gap-1.5 rounded-full bg-white/75 px-2 py-1 shadow-subtle backdrop-blur-sm">
            {project.projects.map((item, index) => (
              <button
                key={item.title}
                type="button"
                aria-label={`Show ${item.title}`}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-7 bg-accent"
                    : "w-2.5 bg-accent/18 hover:bg-accent/35"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          <div className="pointer-events-none absolute bottom-3 right-3 z-40 rounded-full border border-white/80 bg-white/86 px-3 py-1 text-xs font-medium text-foreground shadow-subtle backdrop-blur-sm">
            View screenshots
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-5 p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-subtle">
              Freelance Project
            </p>
            <h3 className="mt-2 text-lg font-semibold text-foreground">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              {project.description}
            </p>
          </div>
          <ProjectMeta platform={project.platform} techStack={project.techStack} />
          {project.link && (
            <div className="mt-auto">
              <Button asChild size="sm" className="w-full sm:w-auto">
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </Link>
              </Button>
            </div>
          )}
        </div>
      </motion.article>

      <GalleryLightbox
        isOpen={Boolean(lightboxProject)}
        onClose={() => setLightboxProjectIndex(null)}
        title={lightboxProject?.title ?? ""}
        screenshots={lightboxProject?.screenshots ?? []}
      />
    </>
  );
}

export function FreelanceProjectsGrid() {
  return (
    <StaggerGroup className="grid gap-6 lg:grid-cols-2">
      <Reveal variant="scale" className="h-full">
        <WordPressShowcase project={wordPressShowcase} />
      </Reveal>
      {freelanceProjects.map((project) => (
        <Reveal key={project.title} variant="scale" className="h-full">
          <FreelanceProjectCard project={project} />
        </Reveal>
      ))}
    </StaggerGroup>
  );
}
