export type Project = {
  title: string;
  slug: string;
  summary: string;
  description: string;
  category: "Web Apps" | "Design Systems" | "AI Tools" | "Mobile";
  year: string;
  role: string;
  tags: string[];
  highlights: string[];
  link?: string;
  image: string;
};

export const projectFilters = [
  "All",
  "Web Apps",
  "Design Systems",
  "AI Tools",
  "Mobile",
] as const;

export const projects: Project[] = [
  {
    title: "Aurora Finance",
    slug: "aurora-finance",
    summary: "A premium personal finance dashboard with real-time insights.",
    description:
      "Aurora Finance reimagines budgeting with clean visualizations, predictive cashflow, and personalized insights that adapt to user behavior.",
    category: "Web Apps",
    year: "2025",
    role: "Product design + Frontend",
    tags: ["Next.js", "Data viz", "Design system"],
    highlights: [
      "Built a component library shared across 3 product lines.",
      "Improved task completion by 28% through redesigned IA.",
      "Achieved sub-1s LCP on core dashboards.",
    ],
    link: "https://example.com",
    image: "/projects/aurora.svg",
  },
  {
    title: "Pulse Health",
    slug: "pulse-health",
    summary: "Mobile-first care coordination for distributed clinics.",
    description:
      "Pulse Health connects care teams with real-time patient context, streamlining intake, triage, and follow-ups.",
    category: "Mobile",
    year: "2024",
    role: "Design lead + Interaction",
    tags: ["React Native", "Accessibility", "Motion"],
    highlights: [
      "Designed a new triage flow reducing onboarding time by 40%.",
      "Created motion guidelines for micro-interactions.",
      "Collaborated with clinical partners on accessibility audits.",
    ],
    image: "/projects/pulse.svg",
  },
  {
    title: "Atlas Platform",
    slug: "atlas-platform",
    summary: "Enterprise workspace for strategic planning teams.",
    description:
      "Atlas brings together strategy, documentation, and analytics in one cohesive workspace with granular permissions and audit trails.",
    category: "Web Apps",
    year: "2023",
    role: "Frontend architecture",
    tags: ["TypeScript", "Performance", "Complex UI"],
    highlights: [
      "Optimized table rendering for 50k+ rows.",
      "Introduced virtualized navigation and command palette.",
      "Reduced bundle size by 35%.",
    ],
    image: "/projects/atlas.svg",
  },
  {
    title: "Lattice Design System",
    slug: "lattice-design-system",
    summary: "A modular design system for multi-brand SaaS products.",
    description:
      "Lattice provides a shared foundation of tokens, components, and usage guidelines across design and engineering teams.",
    category: "Design Systems",
    year: "2022",
    role: "Design systems lead",
    tags: ["Figma", "Tokens", "Documentation"],
    highlights: [
      "Unified three product lines under a single design language.",
      "Documented accessibility patterns and motion recipes.",
      "Supported engineers with Storybook-driven QA.",
    ],
    image: "/projects/lattice.svg",
  },
  {
    title: "Halo Assist",
    slug: "halo-assist",
    summary: "AI-powered support console for customer success teams.",
    description:
      "Halo Assist synthesizes customer history and drafts responses, helping teams resolve tickets faster while maintaining brand tone.",
    category: "AI Tools",
    year: "2024",
    role: "Product strategy + UI",
    tags: ["LLMs", "Workflow", "UX writing"],
    highlights: [
      "Designed the AI explainability model for support agents.",
      "Launched a feedback loop to improve responses over time.",
      "Reduced average response time by 22%.",
    ],
    image: "/projects/halo.svg",
  },
];
