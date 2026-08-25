// ============================================================
// Core TypeScript interfaces for codewithgem portfolio
// ============================================================

export interface PersonalInfo {
  fullName: string;
  brand: string;
  title: string;
  subtitleRoles: string[];
  bio: string[];
  education: {
    degree: string;
    institution: string;
    award?: string;
    specialization?: string;
  };
  philosophy: string;
  heroTaglines: string[];
  socialLinks: SocialLink[];
  emails: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  links?: {
    live?: string;
    github?: string;
  };
  image?: string;
  featured: boolean;
  caseStudy?: CaseStudy;
}

export interface CaseStudy {
  problem?: string;
  approach?: string;
  architecture?: string;
  challenges?: string[];
  technologies?: string[];
  result?: string;
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  period: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
  highlights?: string[];
}

export interface Event {
  id: string;
  title: string;
  date?: string;
  location?: string;
  type: EventType;
  description: string;
  participation?: string;
  photo?: string;
  links?: { label: string; url: string }[];
  certificates?: string[];
}

export type EventType =
  | "conference"
  | "meetup"
  | "hackathon"
  | "workshop"
  | "summit"
  | "assembly"
  | "competition"
  | "training"
  | "other";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime?: string;
  tags: string[];
  content?: string;
  published: boolean;
}

export interface LabExperiment {
  id: string;
  title: string;
  description: string;
  date: string;
  technologies: string[];
  link?: string;
  image?: string;
  published: boolean;
}

export interface ToolkitItem {
  name: string;
  category: ToolkitCategory;
  icon?: string;
  projectSlugs?: string[];
}

export type ToolkitCategory =
  | "frontend"
  | "backend"
  | "database"
  | "cloud"
  | "desktop"
  | "mobile"
  | "tools"
  | "os";

export interface NavItem {
  label: string;
  path: string;
  external?: boolean;
}

export interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  keywords?: string;
  /** ISO date string for article:published_time (blog posts) */
  publishedTime?: string;
  /** ISO date string for article:modified_time (blog posts) */
  modifiedTime?: string;
  /** Article author name */
  articleAuthor?: string;
  /** Article section/category */
  articleSection?: string;
  /** Article tags for og:article:tag */
  articleTags?: string[];
}

export interface StorytellingBeat {
  text: string;
  emphasis?: boolean;
  detail?: string;
}

// Certification — local certificate images
export interface Certification {
  src: string;
  name: string;
  issuer: string;
  url?: string;
}
