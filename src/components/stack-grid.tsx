"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Reveal, StaggerGroup } from "@/components/motion/reveal";

type StackItem = {
  name: string;
  category: string;
  glow: string;
  border: string;
  logoPath?: string;
  logoAlt?: string;
  logoTint?: string;
  mark?: string;
};

const stackStyles: Record<string, StackItem> = {
  HTML: {
    name: "HTML",
    category: "Markup",
    glow:
      "radial-gradient(circle at 20% 18%, rgba(228, 77, 38, 0.44), transparent 34%), linear-gradient(145deg, rgba(68, 24, 12, 0.98), rgba(118, 46, 22, 0.94))",
    border: "rgba(228, 77, 38, 0.24)",
    logoPath: "/stack/html.svg",
    logoAlt: "HTML logo",
    mark: "H5",
    logoTint: "#ffffff",
  },
  CSS: {
    name: "CSS",
    category: "Styling",
    glow:
      "radial-gradient(circle at 20% 18%, rgba(38, 77, 228, 0.44), transparent 34%), linear-gradient(145deg, rgba(16, 32, 74, 0.98), rgba(29, 58, 136, 0.94))",
    border: "rgba(38, 77, 228, 0.24)",
    logoPath: "/stack/css.svg",
    logoAlt: "CSS logo",
    mark: "C3",
    logoTint: "#ffffff",
  },
  JavaScript: {
    name: "JavaScript",
    category: "Language",
    glow:
      "radial-gradient(circle at 20% 18%, rgba(247, 223, 30, 0.42), transparent 34%), linear-gradient(145deg, rgba(70, 61, 15, 0.98), rgba(121, 108, 24, 0.94))",
    border: "rgba(247, 223, 30, 0.24)",
    logoPath: "/stack/javascript.svg",
    logoAlt: "JavaScript logo",
    mark: "JS",
    logoTint: "#111827",
  },
  React: {
    name: "React",
    category: "Frontend",
    glow:
      "radial-gradient(circle at 20% 18%, rgba(97, 218, 251, 0.44), transparent 34%), linear-gradient(145deg, rgba(9, 28, 46, 0.98), rgba(18, 45, 73, 0.94))",
    border: "rgba(97, 218, 251, 0.25)",
    logoPath: "/stack/react.svg",
    logoAlt: "React logo",
  },
  "Node.js": {
    name: "Node.js",
    category: "Runtime",
    glow:
      "radial-gradient(circle at 20% 18%, rgba(124, 200, 74, 0.38), transparent 34%), linear-gradient(145deg, rgba(18, 38, 23, 0.98), rgba(31, 65, 39, 0.94))",
    border: "rgba(124, 200, 74, 0.24)",
    logoPath: "/stack/nodejs.svg",
    logoAlt: "Node.js logo",
  },
  "Next.js": {
    name: "Next.js",
    category: "Framework",
    glow:
      "radial-gradient(circle at 20% 18%, rgba(255, 255, 255, 0.22), transparent 34%), linear-gradient(145deg, rgba(11, 13, 19, 0.98), rgba(29, 34, 44, 0.94))",
    border: "rgba(255, 255, 255, 0.14)",
    logoPath: "/stack/nextjs.svg",
    logoAlt: "Next.js logo",
  },
  Python: {
    name: "Python",
    category: "Language",
    glow:
      "radial-gradient(circle at 20% 18%, rgba(55, 118, 171, 0.42), transparent 34%), linear-gradient(145deg, rgba(18, 38, 62, 0.98), rgba(70, 124, 63, 0.92))",
    border: "rgba(255, 212, 59, 0.22)",
    logoPath: "/stack/python.svg",
    logoAlt: "Python logo",
    mark: "Py",
    logoTint: "#ffffff",
  },
  "C#": {
    name: "C#",
    category: "Language",
    glow:
      "radial-gradient(circle at 20% 18%, rgba(104, 33, 122, 0.42), transparent 34%), linear-gradient(145deg, rgba(41, 18, 72, 0.98), rgba(96, 42, 140, 0.94))",
    border: "rgba(168, 85, 247, 0.24)",
    logoPath: "/stack/c%23.svg",
    logoAlt: "C# logo",
    mark: "C#",
    logoTint: "#ffffff",
  },
  "Tailwind CSS": {
    name: "Tailwind CSS",
    category: "Styling",
    glow:
      "radial-gradient(circle at 20% 18%, rgba(56, 189, 248, 0.46), transparent 34%), linear-gradient(145deg, rgba(10, 44, 60, 0.98), rgba(9, 93, 120, 0.94))",
    border: "rgba(56, 189, 248, 0.24)",
    logoPath: "/stack/tailwindcss.svg",
    logoAlt: "Tailwind CSS logo",
  },
  MongoDB: {
    name: "MongoDB",
    category: "Database",
    glow:
      "radial-gradient(circle at 20% 18%, rgba(0, 237, 100, 0.36), transparent 34%), linear-gradient(145deg, rgba(12, 39, 24, 0.98), rgba(18, 80, 41, 0.94))",
    border: "rgba(0, 237, 100, 0.24)",
    logoPath: "/stack/mongodb.svg",
    logoAlt: "MongoDB logo",
  },
  PostgreSQL: {
    name: "PostgreSQL",
    category: "Database",
    glow:
      "radial-gradient(circle at 20% 18%, rgba(51, 103, 145, 0.44), transparent 34%), linear-gradient(145deg, rgba(14, 35, 57, 0.98), rgba(28, 69, 106, 0.94))",
    border: "rgba(69, 120, 167, 0.24)",
    logoPath: "/stack/postgresql.svg",
    logoAlt: "PostgreSQL logo",
  },
  MySQL: {
    name: "MySQL",
    category: "Database",
    glow:
      "radial-gradient(circle at 20% 18%, rgba(0, 117, 143, 0.42), transparent 34%), linear-gradient(145deg, rgba(10, 36, 54, 0.98), rgba(20, 77, 107, 0.94))",
    border: "rgba(0, 117, 143, 0.24)",
    logoPath: "/stack/mysql.svg",
    logoAlt: "MySQL logo",
  },
  "Swagger (OpenAPI)": {
    name: "Swagger (OpenAPI)",
    category: "Docs",
    glow:
      "radial-gradient(circle at 20% 18%, rgba(133, 234, 45, 0.4), transparent 34%), linear-gradient(145deg, rgba(28, 45, 12, 0.98), rgba(74, 110, 25, 0.94))",
    border: "rgba(133, 234, 45, 0.22)",
    logoPath: "/stack/swagger.svg",
    logoAlt: "Swagger logo",
  },
  Postman: {
    name: "Postman",
    category: "API",
    glow:
      "radial-gradient(circle at 20% 18%, rgba(255, 108, 55, 0.44), transparent 34%), linear-gradient(145deg, rgba(66, 24, 12, 0.98), rgba(118, 47, 25, 0.94))",
    border: "rgba(255, 108, 55, 0.24)",
    logoPath: "/stack/postman.svg",
    logoAlt: "Postman logo",
  },
  Shopify: {
    name: "Shopify",
    category: "Commerce",
    glow:
      "radial-gradient(circle at 20% 18%, rgba(149, 191, 71, 0.4), transparent 34%), linear-gradient(145deg, rgba(32, 43, 15, 0.98), rgba(70, 95, 28, 0.94))",
    border: "rgba(149, 191, 71, 0.22)",
    logoPath: "/stack/shopify.svg",
    logoAlt: "Shopify logo",
  },
  Canva: {
    name: "Canva",
    category: "Design",
    glow:
      "radial-gradient(circle at 20% 18%, rgba(0, 205, 255, 0.42), transparent 34%), linear-gradient(145deg, rgba(10, 42, 69, 0.98), rgba(12, 109, 139, 0.94))",
    border: "rgba(0, 205, 255, 0.22)",
    logoPath: "/stack/canva.svg",
    logoAlt: "Canva logo",
  },
  Trello: {
    name: "Trello",
    category: "Planning",
    glow:
      "radial-gradient(circle at 20% 18%, rgba(0, 121, 191, 0.44), transparent 34%), linear-gradient(145deg, rgba(12, 38, 67, 0.98), rgba(19, 82, 127, 0.94))",
    border: "rgba(0, 121, 191, 0.24)",
    logoPath: "/stack/trello.svg",
    logoAlt: "Trello logo",
  },
  Git: {
    name: "Git",
    category: "Versioning",
    glow:
      "radial-gradient(circle at 20% 18%, rgba(240, 80, 51, 0.44), transparent 34%), linear-gradient(145deg, rgba(67, 23, 12, 0.98), rgba(115, 42, 22, 0.94))",
    border: "rgba(240, 80, 51, 0.24)",
    logoPath: "/stack/git.svg",
    logoAlt: "Git logo",
  },
  GitHub: {
    name: "GitHub",
    category: "Collaboration",
    glow:
      "radial-gradient(circle at 20% 18%, rgba(255, 255, 255, 0.16), transparent 34%), linear-gradient(145deg, rgba(15, 22, 40, 0.98), rgba(34, 43, 60, 0.94))",
    border: "rgba(248, 250, 252, 0.16)",
    logoPath: "/stack/github.svg",
    logoAlt: "GitHub logo",
  },
  Vercel: {
    name: "Vercel",
    category: "Hosting",
    glow:
      "radial-gradient(circle at 20% 18%, rgba(255, 255, 255, 0.14), transparent 34%), linear-gradient(145deg, rgba(12, 14, 20, 0.98), rgba(31, 36, 48, 0.94))",
    border: "rgba(255, 255, 255, 0.14)",
    logoPath: "/stack/vercel.svg",
    logoAlt: "Vercel logo",
  },
  Netlify: {
    name: "Netlify",
    category: "Hosting",
    glow:
      "radial-gradient(circle at 20% 18%, rgba(0, 193, 157, 0.42), transparent 34%), linear-gradient(145deg, rgba(8, 41, 45, 0.98), rgba(15, 95, 88, 0.94))",
    border: "rgba(0, 193, 157, 0.24)",
    logoPath: "/stack/netlify.svg",
    logoAlt: "Netlify logo",
  },
  Render: {
    name: "Render",
    category: "Deployment",
    glow:
      "radial-gradient(circle at 20% 18%, rgba(70, 125, 245, 0.44), transparent 34%), linear-gradient(145deg, rgba(18, 26, 70, 0.98), rgba(34, 61, 135, 0.94))",
    border: "rgba(70, 125, 245, 0.24)",
    logoPath: "/stack/render.svg",
    logoAlt: "Render logo",
  },
  ".NET Fundamentals": {
    name: ".NET Fundamentals",
    category: "Platform",
    glow:
      "radial-gradient(circle at 20% 18%, rgba(139, 92, 246, 0.4), transparent 34%), linear-gradient(145deg, rgba(27, 16, 67, 0.98), rgba(70, 40, 140, 0.94))",
    border: "rgba(139, 92, 246, 0.22)",
    logoPath: "/stack/dotnet.svg",
    logoAlt: ".NET logo",
  },
  ".NET": {
    name: ".NET",
    category: "Platform",
    glow:
      "radial-gradient(circle at 20% 18%, rgba(139, 92, 246, 0.4), transparent 34%), linear-gradient(145deg, rgba(27, 16, 67, 0.98), rgba(70, 40, 140, 0.94))",
    border: "rgba(139, 92, 246, 0.22)",
    logoPath: "/stack/dotnet.svg",
    logoAlt: ".NET logo",
  },
};

function resolveStackItem(name: string): StackItem {
  const style = stackStyles[name];

  if (style) {
    return style;
  }

  return {
    name,
    category: "Tooling",
    glow:
      "radial-gradient(circle at 20% 18%, rgba(28, 92, 168, 0.34), transparent 34%), linear-gradient(145deg, rgba(18, 35, 61, 0.98), rgba(28, 92, 168, 0.9))",
    border: "rgba(28, 92, 168, 0.22)",
    mark: name.slice(0, 2).toUpperCase(),
    logoTint: "#ffffff",
  };
}

function StackLogo({ item }: { item: StackItem }) {
  if (item.logoPath) {
    return (
      <div className="relative h-8 w-8 sm:h-9 sm:w-9">
        <Image
          src={item.logoPath}
          alt={item.logoAlt ?? `${item.name} logo`}
          fill
          className="object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.26)]"
          sizes="36px"
        />
      </div>
    );
  }

  return (
    <div
      className="flex h-8 w-8 items-center justify-center rounded-xl border text-xs font-semibold tracking-[0.12em] sm:h-9 sm:w-9"
      style={{
        color: item.logoTint ?? "#ffffff",
        borderColor: "rgba(255,255,255,0.14)",
        background: "linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.04))",
      }}
    >
      {item.mark}
    </div>
  );
}

export function StackGrid({ tools }: { tools: string[] }) {
  return (
    <StaggerGroup className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
      {tools.map((tool) => {
        const item = resolveStackItem(tool);

        return (
          <Reveal key={tool} variant="scale">
            <motion.div
              className="group relative flex aspect-square w-[9.1rem] flex-col overflow-hidden rounded-[13px] border p-2 shadow-[0_18px_44px_-34px_rgba(15,36,61,0.62)] sm:w-[9.5rem]"
              style={{
                background: item.glow,
                borderColor: item.border,
              }}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
            >
              <motion.div
                className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-white/8 blur-3xl"
                aria-hidden
                animate={{ scale: [1, 1.14, 1], opacity: [0.35, 0.6, 0.35] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-x-2 top-2 h-px bg-white/12 sm:inset-x-2.5 sm:top-2.5" aria-hidden />

              <div className="relative flex h-full flex-col items-center justify-center gap-1.5 text-center">
                <span className="rounded-full border border-white/12 bg-white/7 px-1.5 py-0.5 text-[7px] uppercase tracking-[0.18em] text-white/72 sm:text-[8px]">
                  {item.category}
                </span>

                <motion.div
                  className="rounded-[11px] border border-white/12 bg-white/8 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-sm sm:p-1.5"
                  whileHover={{ rotate: -4, y: -2 }}
                  transition={{ type: "spring", stiffness: 280, damping: 18 }}
                >
                  <StackLogo item={item} />
                </motion.div>

                <div className="relative max-w-[88%]">
                  <h3 className="text-[11px] font-semibold leading-tight text-white [text-wrap:balance] sm:text-xs">
                    {item.name}
                  </h3>
                </div>
              </div>

              <motion.div
                className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/22 to-transparent"
                aria-hidden
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </Reveal>
        );
      })}
    </StaggerGroup>
  );
}
