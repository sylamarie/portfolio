export type ShowcaseImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type FreelanceProject = {
  title: string;
  platform: "WordPress" | "Systeme.io";
  techStack: string[];
  description: string;
  screenshot?: string;
  screenshots?: ShowcaseImage[];
  link?: string;
};

export type ShowcaseProject = {
  title: string;
  preview: string;
  screenshots: ShowcaseImage[];
};

export type FreelanceShowcase = Omit<FreelanceProject, "screenshot"> & {
  projects: ShowcaseProject[];
};

export const wordPressShowcase: FreelanceShowcase = {
  title: "WordPress Freelance Website Projects",
  platform: "WordPress",
  techStack: ["HTML", "CSS", "JavaScript"],
  description:
    "Customized and built WordPress-based websites for freelance projects using HTML, CSS, and JavaScript. Focused on layout adjustments, responsive design, visual improvements, and clean, user-friendly pages based on project needs.",
  projects: [
    {
      title: "WordPress Freelance Website Project 1",
      preview: "/projects/freelance/1 - WordPress/1.jpg",
      screenshots: [
        {
          src: "/projects/freelance/1 - WordPress/1.jpg",
          alt: "WordPress freelance website project 1 screenshot 1",
          width: 1717,
          height: 4096,
        },
        {
          src: "/projects/freelance/1 - WordPress/2.jpg",
          alt: "WordPress freelance website project 1 screenshot 2",
          width: 1920,
          height: 2799,
        },
      ],
    },
    {
      title: "WordPress Freelance Website Project 2",
      preview: "/projects/freelance/2 - WordPress/1.jpg",
      screenshots: [
        {
          src: "/projects/freelance/2 - WordPress/1.jpg",
          alt: "WordPress freelance website project 2 screenshot 1",
          width: 1367,
          height: 4096,
        },
        {
          src: "/projects/freelance/2 - WordPress/2.jpg",
          alt: "WordPress freelance website project 2 screenshot 2",
          width: 1920,
          height: 2940,
        },
      ],
    },
    {
      title: "WordPress Freelance Website Project 3",
      preview: "/projects/freelance/3 - WordPress/1.jpg",
      screenshots: [
        {
          src: "/projects/freelance/3 - WordPress/1.jpg",
          alt: "WordPress freelance website project 3 screenshot 1",
          width: 952,
          height: 4096,
        },
        {
          src: "/projects/freelance/3 - WordPress/2.jpg",
          alt: "WordPress freelance website project 3 screenshot 2",
          width: 1920,
          height: 3854,
        },
      ],
    },
    {
      title: "WordPress Freelance Website Project 4",
      preview: "/projects/freelance/4 - WordPress/1.jpg",
      screenshots: [
        {
          src: "/projects/freelance/4 - WordPress/1.jpg",
          alt: "WordPress freelance website project 4 screenshot 1",
          width: 1920,
          height: 2070,
        },
        {
          src: "/projects/freelance/4 - WordPress/2.jpg",
          alt: "WordPress freelance website project 4 screenshot 2",
          width: 1538,
          height: 4096,
        },
      ],
    },
  ],
};

export const freelanceProjects: FreelanceProject[] = [
  {
    title: "Systeme.io Freelance Website Customization",
    platform: "Systeme.io",
    techStack: ["HTML", "CSS", "JavaScript"],
    screenshot: "/projects/freelance/1 - systeme.io/1.png",
    screenshots: [
      {
        src: "/projects/freelance/1 - systeme.io/1.png",
        alt: "Systeme.io freelance website screenshot 1",
        width: 1897,
        height: 936,
      },
      {
        src: "/projects/freelance/1 - systeme.io/2.png",
        alt: "Systeme.io freelance website screenshot 2",
        width: 1894,
        height: 942,
      },
      {
        src: "/projects/freelance/1 - systeme.io/3.png",
        alt: "Systeme.io freelance website screenshot 3",
        width: 1905,
        height: 943,
      },
      {
        src: "/projects/freelance/1 - systeme.io/4.png",
        alt: "Systeme.io freelance website screenshot 4",
        width: 1900,
        height: 937,
      },
    ],
    description:
      "Built and customized a Systeme.io website using HTML, CSS, and JavaScript. Worked on page structure, styling, responsiveness, and custom design improvements across multiple website pages.",
  },
];
