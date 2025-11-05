import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ben Borla",
  initials: "BB",
  url: "https://benborla.dev",
  location: "Metro Manila, PH",
  locationLink: "https://www.google.com/maps/place/mandaluyong",
  description:
    "Fullstack Engineer, who loves bringing projects to market and helping others build their ideas.",
  summary:
    "Senior Full-Stack Engineer and Technical Leader with deep expertise in building impactful enterprise solutions. A driven innovator who consistently tackles complex challenges and pushes boundaries to achieve ambitious goals. Known for elegantly modernizing legacy systems and leading high-performing teams. Brings a creative problem-solving approach to engineering challenges across education, gaming, and real estate sectors, consistently delivering solutions that delight users and exceed expectations.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Docker",
    "Kubernetes",
    "PHP",
    "Laravel",
    "Symfony",
    "Rust",
    "Electron",
    "Tauri",
    "React Native",
    "Expo",
    "CapacitorJS",
    "Ionic Framework",
    "MySQL",
    "Postgres",
    "SQLite",
    "AWS EKS",
    "AWS EC2",
    "AWS Lambda+EventBridge",
    "Orchestration",
    "MCP",
    "CI/CD",
    "TailwindCSS",
    "CSS",
    "Storybook",
    "TDD",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: ["me@benborla.dev"],
    tel: "+639171503309",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://socials.benborla.dev/github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://socials.benborla.dev/linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://socials.benborla.dev/x",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:benborla@icloud.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "EDClass Ltd.",
      href: "https://www.edclass.com/",
      badges: [],
      location: "Remote",
      title: "Technical Consultant",
      logoUrl: "/edx.webp",
      start: "December 2023",
      end: "Now",
      description:
        "Tasked to recreate the app, api, admin platform, and the entire infrastructure orchestration. This app provides a real-time invigilation on candidate's taking online exam. Powered by AWS IVS",
    },
    {
      company: "Beating The Spread",
      href: "https://beatingthespreadguru.com/afl",
      badges: [],
      location: "Remote",
      title: "Tecnical Consultant",
      logoUrl: "/bts.png",
      start: "April 2025",
      end: "June 2025",
      description:
        "Converted a legacy polling system into a WebSocket-based real-time service, improving user retention, ensuring reliable data delivery, and reducing maintenance costs by offloading complex logic to a dedicated microservice.",
    },
    {
      company: "CloudGateway",
      href: "https://www.cloudgateway.co.uk/",
      badges: [],
      location: "Remote",
      title: "Fullstack Developer (Contractual)",
      logoUrl: "/cgw.jpeg",
      start: "January 2025",
      end: "March 2025",
      description:
        "Revamped the entire platform with a fresh UI based on the provided Figma design, building a scalable library of reusable components now powering every page. Integrated Storyblok to enable Content Managers to launch new pages instantly with the latest designs. Introduced Storybook to streamline component development and testing, and implemented a staging preview mode for seamless UAT prior to publishing.",
    },
    {
      company: "Melis Platform",
      badges: [],
      href: "https://www.melisplatform.com/en",
      location: "Remote",
      title: "Software Engineer/DevOps",
      logoUrl: "/melis.png",
      start: "August 2023",
      end: "April 2025",
      description:
        "Optimized system scalability and reliability by orchestrating services with Kubernetes and automating large data synchronization from APIs to Elasticsearch, ensuring a seamless, disruption-free user experience.",
    },
    {
      company: "Bally's Interactive",
      href: "https://www.ballys.com/home/default.aspx",
      badges: [],
      title: "Senior Fullstack Engineer/Project Manager",
      location: "Makati, Metro Manila",
      logoUrl: "/ballys.jpeg",
      start: "April 2021",
      end: "December 2023",
      description:
        "Led a cross-functional team to develop an enterprise-wide white-label templating system and modernize legacy applications. Migrated over 1M lines of PHP code from versions 5.6–7.4 to PHP 8.2 with Symfony 5.4+ and 6.0, while transforming monolithic systems into microservices that reduced maintenance overhead by 50%. Implemented GitLab CI/CD pipelines with SonarQube integration, achieving 95% test coverage, reducing deployment failures by 80%, and cutting system response times by 40% through performance optimizations.",
    },
    {
      company: "Lamudi",
      href: "https://www.lamudi.com.ph/",
      badges: [],
      title: "Senior Fullstack Engineer",
      location: "Makati, Metro Manila",
      logoUrl: "/lamudi.jpeg",
      start: "February 2019",
      end: "March 2021",
      description:
        "Designed and implemented a scalable automated payment system, replacing manual agent workflows with a self-service solution for listing credit purchases. Led the migration from a monolithic application to microservices, improving scalability, maintainability, and system efficiency. Integrated multiple country-specific payment gateways (Philippines, Mexico, Indonesia), expanding platform reach and revenue. Developed secure, reusable PHP packages for inter-service communication, while ensuring high system reliability through proactive maintenance, rapid hotfixes, and continuous feature delivery.",
    },
    {
      company: "Melis Technology",
      href: "https://www.melisplatform.com/en",
      badges: ["Startup"],
      location: "Cebu, Philippines",
      title: "Senior Fullstack Engineer/Team Lead",
      logoUrl: "/melis_legacy.png",
      start: "Novemeber 2024",
      end: "Feburary 2019",
      description:
        "Led an 8-member development team in building a comprehensive enterprise platform while managing concurrent client-specific projects. Developed a flexible modular infrastructure that enabled user-driven feature customization, and launched a marketplace platform for seamless third-party plugin integration, ensuring timely delivery and scalable growth.",
    },
  ],
  education: [
  ],
  projects: [
    {
      title: "Marks Today",
      href: "https://www.markstoday.com/",
      dates: "August 2025 - September 2025",
      active: true,
      description:
        "For people who want to build consistent habits and achieve their dreams Stay accountable and achieve your goals with our simple tracking system",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Paddle",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.markstoday.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/markstoday.png",
      video: "",
    },
    {
      title: "Crease",
      href: "https://finance.benborla.dev",
      dates: "September 2025 - Present",
      active: true,
      description:
        "A simple expense tracking app that lets users upload photos of their receipts, which are automatically converted into digital records. Each expense is stored with the original image and displayed in a user-friendly dashboard, complete with expense summaries, trends, and financial analytics.",
      technologies: [
        "Next.js",
        "Typescript",
        "Convex",
        "TailwindCSS",
        "Paddle",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://finance.benborla.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/crease.png",
      video: "",
    },
    {
      title: "MySQL MCP",
      href: "https://github.com/benborla/mcp-server-mysql",
      dates: "December 2024 - Now",
      active: true,
      description:
        "A Model Context Protocol server that provides access to MySQL databases through SSH tunnels. This server enables Claude and other LLMs to inspect database schemas and execute SQL queries securely.",
      technologies: [
        "Typescript",
        "NodeJS",
        "MCP",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/mysql_mcp.png",
      video: "",
    },
    {
      title: "Tailwind Snippets",
      href: "https://tailwind.benborla.dev/",
      dates: "April 2024 - Now",
      active: true,
      description:
        "A list of curated tailwind components",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://tailwind.benborla.dev/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/tailwind_snippets.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Neon OSS Starter Kit Challenge",
      dates: "August 21st - September 3rd, 2024",
      location: "Online",
      description:
        "Developed a Rust Microservices Starter Kit with Neon as the DB Provider",
      image:
        "/neon.webp",
      mlh: "https://dev.to/benborla/rust-microservice-starter-kit-powered-by-neon-11n7",
      links: [],
    },
    {
      title: "CSS Art: Space",
      dates: "September 4th - September 17th, 2024",
      location: "Online",
      description:
        "Developed a CSS-only animation of the moon-phase with random shooting stars",
      image: "/css_challenge.webp",
      mlh: "https://dev.to/benborla/moon-phases-css-art-space-lc7",
      links: [],
    },
  ],
} as const;
