export type Project = {
  title: string;
  slug: string;
  summary: string;
  description: string;
  impact?: string;
  problem?: string;
  solution?: string;
  outcome?: string;
  category: "Web Apps" | "Coming Soon";
  year: string;
  role: string;
  tags: string[];
  highlights: string[];
  link?: string;
  repo?: string;
  image: string;
  imageFit?: "cover" | "contain";
  imagePosition?: "center" | "top";
};

export const projectFilters = ["All", "Web Apps", "Coming Soon"] as const;

export const projects: Project[] = [
  {
    title: "LifeBudget",
    slug: "lifebudget",
    summary:
      "A budgeting web app for planning expenses and tracking financial goals.",
    description:
      "LifeBudget is a budgeting web app focused on clear expense tracking and practical financial planning workflows.",
    impact: "Helps users make faster daily budget decisions with clearer spending visibility.",
    problem:
      "Manual expense tracking often feels fragmented and inconsistent across devices.",
    solution:
      "Built a focused budgeting workflow with clear categories, responsive layouts, and centralized data.",
    outcome:
      "Delivered a live app with stable budgeting flows that works across desktop and mobile screens.",
    category: "Web Apps",
    year: "2026",
    role: "Web developer",
    tags: ["React", "MongoDB", "Render"],
    highlights: [
      "Designed and deployed a working budgeting workflow for daily use.",
      "Connected app screens with clean data flow.",
      "Stored budget and expense records using MongoDB.",
      "Implemented responsive pages for mobile and desktop screens.",
    ],
    link: "https://lifebudget-4oje.onrender.com/",
    image: "/projects/lifebudget.jpg",
    imageFit: "cover",
    imagePosition: "top",
  },
  {
    title: "Lunch Mate",
    slug: "lunch-mate",
    summary:
      "A meal planning and discovery web app with a straightforward user flow.",
    description:
      "Lunch Mate helps users browse meal options, manage selections, and interact with a clean and accessible interface.",
    impact: "Improves meal planning speed with a simple browse-and-select experience.",
    problem:
      "Meal discovery and selection can be slow when users navigate unclear interfaces.",
    solution:
      "Created a straightforward UI flow with dynamic rendering and responsive components.",
    outcome:
      "Published a production-ready project with practical data handling and clean navigation.",
    category: "Web Apps",
    year: "2026",
    role: "Web developer",
    tags: ["React", "Express", "MongoDB"],
    highlights: [
      "Built a practical meal browsing and selection experience.",
      "Implemented dynamic data rendering and interactions.",
      "Used MongoDB for menu, user, and order-related data.",
      "Published project on Render with responsive layout support.",
    ],
    link: "https://cse325-visioncoders-ytz0.onrender.com/",
    image: "/projects/lunch-mate-dashboard.png",
    imageFit: "contain",
    imagePosition: "top",
  },
  {
    title: "More Projects Coming Soon",
    slug: "more-projects-coming-soon",
    summary:
      "Additional projects will be added here soon as they are finalized and published.",
    description:
      "I am currently preparing more portfolio projects. This section will be updated with new work and live links soon.",
    impact: "Signals ongoing execution and continuous project delivery.",
    problem:
      "Not all completed work is published in a portfolio-ready format yet.",
    solution:
      "Track and package upcoming builds with clear demos and technical writeups.",
    outcome:
      "Planned updates will add more domain coverage and implementation depth.",
    category: "Coming Soon",
    year: "2026",
    role: "In progress",
    tags: ["Upcoming", "Portfolio Update"],
    highlights: [
      "New projects are currently being finalized.",
      "Live demos and technical breakdowns will be added soon.",
      "Project details will be published once ready.",
      "Thank you for checking back soon.",
    ],
    image: "/projects/aurora.svg",
    imageFit: "contain",
    imagePosition: "top",
  },
];
