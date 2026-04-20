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
  tagline: "Software developer building clear, responsive, and dependable web apps.",
  shortPitch:
    "I bring live project work, freelance delivery experience, and a practical approach to software and web development roles.",
  availability:
    "Open to remote software/web developer roles and freelance collaboration.",
  valueProps: [
    "Build responsive interfaces with clean structure and practical user flows.",
    "Work through implementation, documentation, testing, and deployment with consistency.",
    "Communicate clearly and stay organized across collaborative project work.",
  ],
  stats: [
    {
      label: "Live projects",
      value: "5",
      context: "Published projects with working demos and portfolio-ready case studies.",
    },
    {
      label: "Build range",
      value: "Frontend + backend",
      context: "Web interfaces, practical data handling, API workflows, and deployment.",
    },
    {
      label: "Freelance work",
      value: "1 year",
      context: "Delivered Shopify and web development work for a live client site.",
    },
    {
      label: "Availability",
      value: "Open now",
      context: "Remote software/web developer roles and select freelance projects.",
    },
  ],
  cta: {
    primaryLabel: "View projects",
    primaryHref: "/#projects",
    secondaryLabel: "Start a conversation",
    secondaryHref: "/#contact",
  },
};

export const skills = [
  "Responsive frontend implementation",
  "JavaScript-based web development",
  "REST API integration and backend workflows",
  "Database modeling and query fundamentals",
  "Technical documentation and API specs",
  "E-commerce site customization",
  "Testing and QA fundamentals",
  "Structured implementation and deployment workflow",
];

export const tools = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Next.js",
  "Python",
  "C#",
  ".NET",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Shopify",
  "Git",
  "GitHub",
];

export const workflowTools = [
  "Swagger (OpenAPI)",
  "Postman",
  "Canva",
  "Trello",
  "Vercel",
  "Netlify",
  "Render",
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
    degree: "Bachelor of Applied Science in Software Development",
    school: "BYU-Idaho + BYU-Pathway",
    location: "Rexburg, Idaho",
    status: "Completed",
    overview:
      "Prepared in software development with emphasis in web development, including programming, application development, and practical software delivery across multiple domains.",
    outcomes: [
      "Develop software to accomplish meaningful tasks across different domains, languages, and platforms.",
      "Build dynamic, data-driven applications that are visually appealing and aligned with industry standards.",
      "Contribute to planning, design, development, and testing across the software lifecycle.",
      "Evaluate the tradeoffs of alternative technical solutions systematically.",
      "Learn and apply new technologies, languages, and platforms independently.",
      "Work effectively as part of a team.",
      "Demonstrate practical job-readiness skills for software development roles.",
    ],
    careerPaths: [
      "Software architect",
      "Software engineer",
      "Security software developer",
      "Computer systems analyst",
      "Web programmer",
      "Full-stack developer",
      "Network administrator",
    ],
    diplomaImage: "/certificates/bachelor-of-science-in-software-development.png",
  },
  {
    degree: "Associate of Applied Science in Software Development",
    school: "BYU-Idaho + BYU-Pathway",
    location: "Rexburg, Idaho",
    status: "Completed",
    overview:
      "Prepared with foundational skills in programming and web development, with training in software development, web development, databases, networking, and practical problem-solving.",
    outcomes: [
      "Design websites that are visually appealing and follow industry standards.",
      "Develop applications in a variety of languages and platforms.",
      "Develop dynamic, data-driven web applications using both relational and NoSQL databases.",
      "Demonstrate the traits of an effective team member.",
    ],
    careerPaths: ["Web development roles", "Software development roles"],
    diplomaPdf:
      "/certificates/associate-of-applied-science-in-software-development.pdf",
    diplomaImage:
      "/certificates/associate-of-applied-science-in-software-development-page-2.png",
  },
];

export const certificates = [
  {
    title: "Web and Computer Programming",
    issuer: "BYU-Idaho + BYU-Pathway",
    credits: "12 credits",
    level: "Introductory certificate",
    overview:
      "Built foundational programming and web development skills for contributing to software and web development teams.",
    careerPaths: [
      "Junior programmer",
      "Software quality assurance tester",
      "Web frontend developer",
      "Web content developer",
      "Junior JavaScript developer",
    ],
    outcomes: [
      "Write programs to accomplish meaningful tasks in a variety of domains.",
      "Design websites that are visually appealing and effective.",
      "Develop dynamic webpages that follow industry standards and best practices.",
      "Learn and apply new technology and techniques in future programming.",
    ],
    pdf: "/certificates/web-computer-programming.pdf",
    image: "/certificates/web-computer-programming.png",
  },
  {
    title: "Web Development",
    issuer: "BYU-Idaho + BYU-Pathway",
    credits: "15 credits",
    level: "Advanced certificate",
    overview:
      "Developed practical web development skills for entry-level work and internship preparation across frontend, backend, database, and full-stack development.",
    careerPaths: ["General programmer", "Web developer"],
    outcomes: [
      "Learn the basics of web development.",
      "Demonstrate skills in HTML, CSS, JavaScript, databases, and server-side development.",
      "Write operational code to pass and obtain data from a server.",
      "Inject data into the DOM for dynamic website applications.",
      "Show skill with relational and NoSQL database servers and tools.",
      "Demonstrate proficiency in SQL and CRUD workflows through a web interface.",
      "Use code to solve problems.",
    ],
    pdf: "/certificates/web-development.pdf",
    image: "/certificates/web-development.png",
  },
  {
    title: "Software Development",
    issuer: "BYU-Idaho + BYU-Pathway",
    credits: "14 credits",
    level: "Advanced certificate",
    overview:
      "Strengthened software development skills through applied programming, software testing, engineering principles, and professional readiness.",
    careerPaths: ["Technology-related software and development roles"],
    outcomes: [
      "Develop software to solve meaningful problems in a variety of domains.",
      "Systematically evaluate the pros and cons of alternative solutions.",
      "Prepare and execute software test plans.",
      "Be self-reliant learners.",
      "Demonstrate effective skills related to getting a job as a software developer.",
      "Demonstrate the traits of an effective team member.",
    ],
    pdf: "/certificates/software-development.pdf",
    image: "/certificates/software-development.png",
  },
];
