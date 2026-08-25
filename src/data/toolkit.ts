import type { ToolkitItem } from "@/types";

export const toolkit: ToolkitItem[] = [
  // Frontend
  { name: "React", category: "frontend", projectSlugs: ["gi-recon-pro", "bir-ejournal", "dll-alumni-portal", "likhain"] },
  { name: "TypeScript", category: "frontend", projectSlugs: ["gi-recon-pro", "bir-ejournal", "dll-alumni-portal"] },
  { name: "JavaScript", category: "frontend" },
  { name: "Next.js", category: "frontend", projectSlugs: ["dll-alumni-portal"] },
  { name: "Tailwind CSS", category: "frontend", projectSlugs: ["gi-recon-pro", "bir-ejournal", "dll-alumni-portal", "cbqp-inventory", "cbqp-voting"] },

  // Backend
  { name: "Node.js", category: "backend", projectSlugs: ["gi-recon-pro", "bir-ejournal"] },
  { name: "Python", category: "backend", projectSlugs: ["cbqp-inventory", "cbqp-voting", "likhain"] },
  { name: "Django", category: "backend", projectSlugs: ["cbqp-inventory", "cbqp-voting", "likhain"] },
  { name: "Flask", category: "backend" },
  { name: "FastAPI", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "PHP", category: "backend" },

  // Database
  { name: "SQLite", category: "database", projectSlugs: ["gi-recon-pro", "bir-ejournal"] },
  { name: "PostgreSQL", category: "database", projectSlugs: ["dll-alumni-portal", "cbqp-inventory", "cbqp-voting", "likhain"] },
  { name: "MySQL", category: "database" },

  // Cloud
  { name: "Supabase", category: "cloud", projectSlugs: ["dll-alumni-portal"] },
  { name: "Firebase", category: "cloud" },
  { name: "AWS", category: "cloud" },
  { name: "Vercel", category: "cloud", projectSlugs: ["dll-alumni-portal"] },

  // Desktop
  { name: "Electron", category: "desktop", projectSlugs: ["gi-recon-pro", "bir-ejournal"] },

  // Mobile
  { name: "React Native", category: "mobile" },

  // Tools & Dev Environment
  { name: "Visual Studio Code", category: "tools" },
  { name: "Claude Code", category: "tools" },
  { name: "Kiro", category: "tools" },
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },

  // OS
  { name: "Ubuntu", category: "os" },
  { name: "Kali Linux", category: "os" },
];

export const toolkitCategories = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "cloud", label: "Cloud" },
  { id: "desktop", label: "Desktop" },
  { id: "mobile", label: "Mobile" },
  { id: "tools", label: "Tools" },
  { id: "os", label: "OS" },
] as const;
