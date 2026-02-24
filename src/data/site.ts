export type ProofStat = {
  label: string;
  value: string;
  context: string;
};

export type SiteCta = {
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

export type SiteData = {
  name: string;
  role: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  initials: string;
  tagline: string;
  shortPitch: string;
  availability: string;
  valueProps: string[];
  stats: ProofStat[];
  cta: SiteCta;
};

export const site: SiteData = {
  name: "Syla Marie Garzon Cumuyog",
  role: "Software Developer / Web Developer",
  location: "Philippines",
  email: "sylamariecumuyog@outlook.com",
  github: "https://github.com/sylamarie",
  linkedin: "https://www.linkedin.com/in/syla-marie-cumuyog-b11a62284/",
  initials: "SM",
  tagline: "Building practical software that feels clear, fast, and reliable.",
  shortPitch:
    "I build full-stack web products with React, Node.js, Express, and structured API workflows, with focus on clean UX and dependable delivery.",
  availability:
    "Open to remote junior software/web developer roles and freelance collaboration.",
  valueProps: [
    "Translate requirements into clean architecture and realistic delivery plans.",
    "Build responsive interfaces with maintainable component systems.",
    "Ship backend integrations with documented APIs and reliable data flow.",
  ],
  stats: [
    {
      label: "Portfolio projects",
      value: "3+",
      context: "Live or actively delivered web projects.",
    },
    {
      label: "Core stack",
      value: "6",
      context: "React, Next.js, Node.js, Express, SQL, MongoDB.",
    },
    {
      label: "Delivery workflow",
      value: "End-to-end",
      context: "Architecture, implementation, testing, deployment.",
    },
    {
      label: "Response time",
      value: "1-2 days",
      context: "Typical reply window for project inquiries.",
    },
  ],
  cta: {
    primaryLabel: "View projects",
    primaryHref: "/projects",
    secondaryLabel: "Start a conversation",
    secondaryHref: "/contact",
  },
};

export const skills = [
  "JavaScript (ES6+), Python, C#, SQL",
  "React.js and responsive web design",
  "Node.js, Express.js, RESTful APIs",
  "Swagger (OpenAPI) API documentation",
  "MongoDB, MySQL, PostgreSQL",
  "Object-oriented programming and data structures",
  "Software testing and QA fundamentals",
  "Shopify theme and e-commerce customization",
];

export const tools = [
  "React",
  "Node.js",
  "Express.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Swagger (OpenAPI)",
  "Postman",
  "Shopify",
  "Git",
  "GitHub",
  "Render",
  ".NET Fundamentals",
];

export const experience = [
  {
    period: "Sep 2024 - Sep 2025",
    title: "E-commerce Web Developer",
    company: "Freelance",
    summary:
      "Designed and shipped a Shopify e-commerce site, customized themes, structured product listings, and improved navigation and performance for consistent mobile and desktop UX.",
  },
  {
    period: "Nov 2021 - Apr 2023",
    title: "Full-Time Volunteer Representative",
    company: "Organization Volunteer Service",
    summary:
      "Handled daily communication with 50+ individuals, mentored new volunteers, and maintained consistent follow-up systems that improved team coordination.",
  },
];

export const education = [
  {
    degree: "Associate of Applied Science in Software Development",
    school: "Brigham Young University - Idaho",
    location: "Rexburg, Idaho",
    status: "Completed",
    diplomaPdf:
      "/certificates/associate-of-applied-science-in-software-development.pdf",
    diplomaImage:
      "/certificates/associate-of-applied-science-in-software-development-page-2.png",
  },
  {
    degree: "Bachelor of Science in Software Development",
    school: "Brigham Young University - Idaho",
    location: "Rexburg, Idaho",
    status: "Completed (diploma PDF not released yet)",
  },
];

export const certificates = [
  {
    title: "Web and Computer Programming Certificate",
    issuer: "Brigham Young University-Idaho",
    pdf: "/certificates/web-computer-programming.pdf",
    image: "/certificates/web-computer-programming.png",
  },
  {
    title: "Web Development Certificate",
    issuer: "Brigham Young University-Idaho",
    pdf: "/certificates/web-development.pdf",
    image: "/certificates/web-development.png",
  },
  {
    title: "Software Development Certificate",
    issuer: "Brigham Young University-Idaho",
    pdf: "/certificates/software-development.pdf",
    image: "/certificates/software-development.png",
  },
];
