import type { ToolkitItem } from "@/types";

export const toolkit: ToolkitItem[] = [
  // Frontend
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Django", category: "backend" },
  { name: "Flask", category: "backend" },
  { name: "FastAPI", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "PHP", category: "backend" },

  // Database
  { name: "SQLite", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "MySQL", category: "database" },

  // Cloud
  { name: "Supabase", category: "cloud" },
  { name: "Firebase", category: "cloud" },
  { name: "AWS", category: "cloud" },
  { name: "Vercel", category: "cloud" },

  // Desktop
  { name: "Electron", category: "desktop" },

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
