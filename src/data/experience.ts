import type { WorkExperience } from "@/types";

export const workExperience: WorkExperience[] = [
  {
    id: "giligans",
    role: "Software Developer",
    company: "Giligans Holding Corporation",
    period: "October 2025 – Present",
    startDate: "2025-10",
    current: true,
    description:
      "Developing core internal programs for the company, including the Gi-Recon desktop application that automates reconciliation between third-party delivery partners and the restaurant POS system.",
    responsibilities: [
      "Developed Gi-Recon, a desktop application built with React, TypeScript, and Electron for automated reconciliation",
      "Automated matching of third-party data partners (Foodpanda, GrabFood) against restaurant POS system",
      "Built the system over four months for accounting and logistics departments",
      "Maintains and supports legacy 32-bit FoxPro POS system",
      "Learned the legacy codebase within one month",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Electron",
      "SQLite",
      "Node.js",
      "FoxPro",
    ],
    highlights: [
      "Gi-Recon PRO — automated reconciliation system used daily",
      "BIR eJournal — business compliance automation",
    ],
  },
  {
    id: "miru",
    role: "Canvassing and Consolidation Tech Support",
    company: "MIRU",
    period: "May 2025",
    startDate: "2025-05",
    endDate: "2025-05",
    current: false,
    description:
      "Provided technical support for the 2025 National and Local Elections as part of the CCS Technical Support team.",
    responsibilities: [
      "Assigned to Panukulan, Quezon Province for the 2025 National and Local Elections",
      "Part of the CCS (Canvassing and Consolidation System) Technical Support team",
      "Provided technical guidance while adhering to COMELEC no-touch policy",
      "Supported election technology operations without directly handling election data",
    ],
    technologies: [],
  },
  {
    id: "dll-intern",
    role: "Information Technology Intern",
    company: "Dalubhasaan ng Lungsod ng Lucena (DLL) — Alumni Office",
    period: "June 2025 – July 2025",
    startDate: "2025-06",
    endDate: "2025-07",
    current: false,
    description:
      "Deployed and maintained the DLL Alumni Portal — a capstone project built for the alumni office — ensuring the platform was production-ready and supporting the office in adopting the system for alumni tracking and engagement.",
    responsibilities: [
      "Deployed the DLL Alumni Portal to production on Vercel",
      "Maintained and supported the system post-deployment, resolving issues and applying updates",
      "Assisted the alumni office in using the platform for tracer studies, event management, and alumni engagement",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Vercel",
    ],
    highlights: [
      "DLL Alumni Portal — capstone project deployed and maintained for the alumni office",
    ],
  },
  {
    id: "cbqp",
    role: "Software Engineer Intern",
    company: "Cooperative Bank of Quezon Province",
    period: "March 2025 – June 2025",
    startDate: "2025-03",
    endDate: "2025-06",
    current: false,
    description:
      "Developed internal systems for the cooperative bank including an FFE Inventory System and a Voting System used at the General Assembly.",
    responsibilities: [
      "Developed the FFE Inventory System for tracking organizational assets",
      "Built the Voting System deployed at CBQP General Assembly 2024",
      "Hardware setup, cleaning, maintenance, and troubleshooting",
      "Network configurations and IT support",
    ],
    technologies: ["Django", "PostgreSQL", "Tailwind CSS", "Python"],
    highlights: [
      "Voting System deployed live at CBQP General Assembly",
      "FFE Inventory System adopted for organization-wide asset tracking",
    ],
  },
  {
    id: "freelance",
    role: "Freelance Software Developer",
    company: "Self-Employed",
    period: "November 2023 – Present",
    startDate: "2023-11",
    current: true,
    description:
      "Building custom applications for various clients while studying in college, supporting studies through freelance software development work.",
    responsibilities: [
      "Building custom applications for clients based on their requirements",
      "Managing project requirements and client communication",
      "Delivering software projects independently while balancing college studies",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "Python",
    ],
  },
];
