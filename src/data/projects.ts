import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "dll-alumni-portal",
    slug: "dll-alumni-portal",
    title: "DLL Alumni Portal",
    tagline:
      "Full-stack alumni management platform with tracer studies, job board, and real-time engagement",
    description:
      "A comprehensive alumni management system for Dalubhasaan ng Lungsod ng Lucena (DLL) featuring multi-step tracer study surveys for curriculum analysis, a moderated job board, event management, alumni directory, real-time notifications, an analytics dashboard, and audit logging — with role-based access for admins and alumni.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "shadcn/ui",
      "Zod",
      "React Hook Form",
      "Recharts",
      "Lucide React",
    ],
    links: {
      live: "https://dll-alumni.vercel.app/",
      github: "https://github.com/gemrey13/DLL-Alumni",
    },
    image: "dll-alumni-portal.png",
    featured: true,
    caseStudy: {
      problem:
        "Dalubhasaan ng Lungsod ng Lucena needed a centralized digital platform to track alumni career outcomes, facilitate graduate engagement, and gather structured data for curriculum analysis. The alumni office had no efficient way to conduct tracer studies, manage events, or connect graduates with job opportunities — all of which were handled through fragmented manual processes.",
      approach:
        "Built a full-stack web platform with role-based access (admin and alumni roles) using Next.js App Router with Server Components and Server Actions. The system provides admins with tools to conduct tracer surveys, moderate job postings, manage events and announcements, and view analytics — while alumni get a personalized dashboard, job board access, event participation, and a community directory. Real-time notifications keep users engaged without polling.",
      architecture:
        "Next.js 16 App Router with React 19 Server Components and Server Actions for the application layer. Supabase provides the backend infrastructure: PostgreSQL database, authentication with cookie-based sessions, Realtime subscriptions for instant notifications, and Storage for file uploads. Row Level Security (RLS) policies enforce data access at the database level. Middleware handles route protection based on user roles. The frontend uses shadcn/ui components, Zod for form validation, React Hook Form for multi-step form management, and Recharts for analytics visualizations.",
      challenges: [
        "Implementing real-time notifications using Supabase Realtime subscriptions with proper cleanup on unmount",
        "Designing Row Level Security policies across all tables to enforce role-based data access at the database level",
        "Building a multi-step tracer survey form with complex validation and conditional fields using React Hook Form and Zod",
        "Creating a job board moderation workflow with admin approval, status transitions, and alumni-facing visibility controls",
        "Implementing comprehensive audit logging to track all admin actions for accountability",
        "Managing incremental database migrations across enums, profiles, curricula, tracer data, job board, events, notifications, RLS policies, and indexes",
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "PostgreSQL",
        "shadcn/ui",
        "Zod",
        "React Hook Form",
        "Recharts",
        "Lucide React",
      ],
      result:
        "Deployed on Vercel and serving as the alumni office's digital platform for graduate tracking, job matching, event management, and community engagement at Dalubhasaan ng Lungsod ng Lucena. The system supports alumni registration with verification, tracer study data collection for curriculum improvement, a moderated job board, event participation, real-time notifications, and a full analytics dashboard for institutional insights.",
    },
  },
  {
    id: "gi-recon-pro",
    slug: "gi-recon-pro",
    title: "Gi-Recon PRO",
    tagline:
      "Automated transaction reconciliation for an 80+ branch restaurant chain",
    description:
      "A desktop reconciliation tool built for Giligan's restaurant chain to automate the matching of POS transactions against third-party delivery partner reports from Grab and Foodpanda. The finance team across 80+ branches nationwide generates hundreds of daily delivery orders — Gi-Recon eliminates manual comparison by automating transaction matching, flagging discrepancies, and producing actionable financial reports, reducing reconciliation time from days to minutes.",
    technologies: [
      "React",
      "TypeScript",
      "Electron",
      "Vite",
      "SQLite",
      "Node.js",
      "Worker Threads",
      "Tailwind CSS",
      "electron-builder",
      "electron-updater",
    ],
    links: {
      github: "https://github.com/gemrey13/Gi-Recon",
    },
    image: "recon-work.png",
    featured: true,
    caseStudy: {
      problem:
        "Giligan's restaurant chain operates 80+ branches nationwide, each generating hundreds of daily delivery orders across Grab and Foodpanda. The finance team manually compared POS records against partner statements — a process that was time-consuming, error-prone, and impossible to scale. Discrepancies in amounts, unmatched transactions, and inconsistent branch naming across platforms made reconciliation a multi-day ordeal.",
      approach:
        "Built a Windows desktop application using Electron with React and TypeScript that automates the entire reconciliation workflow. The system imports POS data from zipped DBF files and partner data from Excel reports, normalizes them into a unified SQLite database, then runs an intelligent matching algorithm based on amount (±0.05 tolerance), date, and branch location. Unmatched transactions are surfaced in a drag-and-drop manual matching workspace for the finance team to resolve. Comprehensive reports cover reconciliation summaries, discrepancy details, branch performance, and partner sales breakdowns.",
      architecture:
        "Electron 39 desktop app with a React 19 + TypeScript frontend built on electron-vite. The main process handles IPC, services layer, report generators, and worker threads for parallel data processing. The renderer process is fully context-isolated from Node.js APIs — all backend access goes through a secure preload bridge. SQLite with WAL mode provides local relational storage. Worker threads handle batch imports of large datasets without blocking the UI. The app ships as an NSIS installer with built-in auto-update via electron-updater checking GitHub releases.",
      challenges: [
        "Parsing legacy DBF files from a 32-bit FoxPro POS system alongside modern Excel formats from delivery partners",
        "Building an intelligent matching algorithm that handles amount tolerance (±0.05), date comparison, and branch name resolution across 80+ branch mappings",
        "Implementing parallel data processing with Node.js Worker Threads to keep the UI responsive during large batch imports",
        "Designing a configurable branch mapping system to resolve inconsistent naming between POS codes and partner store names",
        "Building a drag-and-drop manual matching workspace for finance teams to resolve unmatched transactions",
        "Implementing a comprehensive audit trail logging all reconciliation runs, data imports, and system events",
        "Shipping auto-updates via electron-updater for seamless version distribution across the organization",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Electron",
        "electron-vite",
        "Vite",
        "SQLite",
        "better-sqlite3",
        "Node.js",
        "Worker Threads",
        "Tailwind CSS",
        "electron-builder",
        "electron-updater",
        "xlsx",
        "dbffile",
        "adm-zip",
      ],
      result:
        "Deployed across Giligan's restaurant chain and used daily by finance teams to reconcile delivery platform transactions against POS records. Reduced reconciliation time from days to minutes. The system handles automated matching with configurable tolerance, surfaces discrepancies with quantified amount differences, and produces actionable reports including branch performance metrics, partner sales breakdowns, and daily trend analysis — all running locally with no external data transmission.",
    },
  },
  {
    id: "cbqp-inventory",
    slug: "cbqp-inventory",
    title: "CBQP FFE Inventory System",
    tagline: "Fixed Furniture and Equipment tracking for a cooperative bank",
    description:
      "An inventory management system developed for Cooperative Bank of Quezon Province to track Fixed Furniture and Equipment (FFE) within the organization.",
    technologies: ["Django", "PostgreSQL", "Tailwind CSS", "Python"],
    image: "inventory 1.png",
    // TODO: Gem — add actual GitHub repo URL
    links: {
      github: "https://github.com/gemrey13/ffe_inventory",
    },
    featured: true,
    caseStudy: {
      problem:
        "CBQP needed a centralized system to track and manage their fixed furniture and equipment across the organization.",
      approach:
        "Built a full-stack inventory management system using Django and PostgreSQL, with a modern Tailwind CSS frontend.",
      technologies: ["Django", "PostgreSQL", "Tailwind CSS", "Python"],
    },
  },
  {
    id: "bir-ejournal",
    slug: "bir-ejournal",
    title: "BIR eJournal",
    tagline:
      "Automated auditing trail generation from BIR receipt archives",
    description:
      "A desktop application for scanning, reconciling, and generating auditing trails from BIR (Bureau of Internal Revenue) Official Receipt (OR) and Senior Citizen (SR) files. The system recursively extracts receipt data from nested, password-protected ZIP archives, reconciles high-value and low-value records using a greedy pairing algorithm to reach target amounts, and produces organized output with optional PDF generation — all processed in background worker threads to keep the UI responsive.",
    technologies: [
      "React",
      "TypeScript",
      "Electron",
      "Vite",
      "SQLite",
      "Node.js",
      "Worker Threads",
      "Tailwind CSS",
      "PDFKit",
      "adm-zip",
      "electron-builder",
    ],
    links: {
      github: "https://github.com/gemrey13/bir-ejournal",
    },
    featured: false,
    caseStudy: {
      problem:
        "The finance team needed to process and reconcile BIR Official Receipt and Senior Citizen receipt files stored in deeply nested, password-protected ZIP archives organized by branch and year. Manually extracting, reading, and pairing receipt data to generate auditing trails was extremely time-consuming and error-prone — especially when dealing with hundreds of receipt files across multiple months and configurable value thresholds.",
      approach:
        "Built a Windows desktop application that automates the entire workflow: scan branch folder hierarchies to extract receipt metadata, store records in a local SQLite database, run an intelligent reconciliation engine that pairs high-value receipts with low-value receipts using a greedy algorithm to approach a target amount, then produce organized output files with original preservation and optional PDF generation. The reconciliation runs in a dedicated worker thread to keep the UI responsive during heavy processing.",
      architecture:
        "Electron 39 desktop app with React 19 + TypeScript frontend built on electron-vite. The main process handles IPC, ZIP scanning, and utility functions. A dedicated worker thread runs the reconciliation engine (pairing logic, file swapping, output generation) in isolation from the UI. SQLite via better-sqlite3 stores extracted receipt metadata (amounts, payment types, dates, branches). The preload bridge securely exposes IPC channels through contextBridge. PDF generation uses PDFKit for formatted A4 output. The app ships as an NSIS installer via electron-builder.",
      challenges: [
        "Recursively scanning nested, password-protected ZIP archives (outer ZIPs containing inner ZIPs with OR/SR receipt files) while handling decryption and extraction",
        "Parsing receipt text files to extract amounts using multiple fallback patterns (Total Charge, Net Sr. Citizen Bill, Total Bill, Total) and classifying payment types",
        "Implementing a greedy reconciliation algorithm that pairs high-value and low-value records with configurable thresholds, staged consumption order, and target amount matching",
        "Performing receipt body swapping — replacing high-value receipt bodies with low-value receipt content while preserving header/footer structure and maintaining -OLD originals for audit trail",
        "Running the entire reconciliation and output generation in a background worker thread without blocking the Electron renderer process",
        "Generating formatted A4 PDF documents from plain-text receipt files using PDFKit with Courier font for consistent formatting",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Electron",
        "electron-vite",
        "Vite",
        "SQLite",
        "better-sqlite3",
        "Node.js",
        "Worker Threads",
        "Tailwind CSS",
        "PDFKit",
        "adm-zip",
        "Lucide React",
        "electron-builder",
      ],
      result:
        "Delivered as a production Windows desktop application used by the finance team for BIR compliance workflows. The system processes entire branch folder hierarchies in a single operation, handles password-protected nested archives transparently, reconciles receipts against configurable target amounts with real-time progress feedback, and produces organized output with both modified files and preserved originals for complete audit trails. PDF output generation provides formatted documents ready for submission.",
    },
  },
  {
    id: "cbqp-voting",
    slug: "cbqp-voting",
    title: "CBQP Voting System",
    tagline: "Digital voting for cooperative decision-making",
    description:
      "A voting application designed for Cooperative Bank of Quezon Province to facilitate cooperative decision-making processes.",
    technologies: ["Django", "PostgreSQL", "Tailwind CSS", "Python"],
    image: "cbqp-voting 1.png",
    // TODO: Gem — add actual GitHub repo URL
    links: {
      github: "https://github.com/gemrey13/VS-2024",
    },
    featured: false,
    caseStudy: {
      problem:
        "CBQP needed a reliable digital voting system for their cooperative general assemblies and decision-making processes.",
      approach:
        "Developed a secure voting application that was deployed at the CBQP General Assembly 2024 on June 30, 2024.",
      technologies: ["Django", "PostgreSQL", "Tailwind CSS", "Python"],
    },
  },
  {
    id: "likhain",
    slug: "likhain",
    title: "Likhain Web Application",
    tagline: "Job matching for Quezonians and local freelance opportunities",
    description:
      "A job-matching platform designed to connect Quezonians with non-professional job and freelance opportunities, developed collaboratively with a software development team.",
    technologies: ["Django", "React", "PostgreSQL", "Tailwind CSS", "Python"],
    image: "cbqp-voting 1.png",
    links: {
      github: "https://github.com/gemrey13/Likhain01",
    },
    featured: false,
    caseStudy: {
      problem:
        "Many Quezonians looking for income opportunities face difficulty finding accessible local jobs and freelance work, especially for non-professional skills and services.",
      approach:
        "Collaborated with a software development team to build Likhain, a web-based job-matching platform that connects Quezonians with local non-professional job and freelance opportunities. The application was developed with Django for the backend and React for the frontend.",
      technologies: ["Django", "React", "PostgreSQL", "Tailwind CSS", "Python"],
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
