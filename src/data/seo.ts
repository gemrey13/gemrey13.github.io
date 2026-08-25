import type { SEOConfig } from "@/types";

/**
 * Base URL used for canonical links and OG URLs.
 * All other domains (e.g. codewithgem.vercel.app) redirect here via vercel.json.
 */
export const SEO_BASE_URL = "https://codewithgem.is-a.dev";

/**
 * Default OG image path (relative to public/).
 * TODO: Create a 1200x630 OG image and place it at public/og-image.png
 * Once created, uncomment ogImage fields below to enable rich social previews.
 */
export const DEFAULT_OG_IMAGE = `${SEO_BASE_URL}/og-image.png`;

export const seoConfig = {
  home: {
    title: "Gem Rey Rañola — Software Developer",
    description:
      "Software Developer building responsive, scalable applications. Specializing in React, TypeScript, Electron, and full-stack development. More than just a developer.",
    canonical: "/",
    ogType: "website",
    // ogImage: DEFAULT_OG_IMAGE, // TODO: uncomment once og-image.png exists
    keywords:
      "Software Developer, React Developer, TypeScript, Electron, Full-Stack Developer, Gem Rey Rañola, Portfolio, Web Developer, Philippines",
  },
  about: {
    title: "About — Gem Rey Rañola",
    description:
      "More than just a developer. Software engineer, community builder, hackathon competitor, volleyball player, and continuous learner.",
    canonical: "/about",
    // ogImage: DEFAULT_OG_IMAGE,
    keywords:
      "About Gem Rey Rañola, Software Engineer, Community Builder, Hackathon, IT Practitioner, Developer Story",
  },
  work: {
    title: "Work Experience — Gem Rey Rañola",
    description:
      "Professional journey from IT intern to Software Developer. Building reconciliation systems, desktop applications, and business automation tools.",
    canonical: "/work",
    // ogImage: DEFAULT_OG_IMAGE,
    keywords:
      "Work Experience, Software Developer Career, Reconciliation Systems, Desktop Applications, Business Automation, Freelance Developer",
  },
  projects: {
    title: "Projects — Gem Rey Rañola",
    description:
      "Real-world software projects: reconciliation systems, business automation, alumni portals, inventory management, and cooperative voting systems.",
    canonical: "/projects",
    // ogImage: DEFAULT_OG_IMAGE,
    keywords:
      "Software Projects, Reconciliation System, Business Automation, Alumni Portal, Inventory Management, Case Studies",
  },
  events: {
    title: "Where I've Shown Up — Gem Rey Rañola",
    description:
      "Conferences, hackathons, meetups, and tech communities. From Microsoft Build to HackForGov, DICT training to Drupal meetups.",
    canonical: "/events",
    // ogImage: DEFAULT_OG_IMAGE,
    keywords:
      "Tech Events, Conferences, Hackathons, Microsoft Build, HackForGov, DICT, Drupal, Developer Community, Philippines",
  },
  blog: {
    title: "Things I've Learned the Hard Way — Gem Rey Rañola",
    description:
      "Real lessons from building software: Electron development, performance optimization, reconciliation systems, legacy systems, and debugging stories.",
    canonical: "/blog",
    ogType: "website",
    // ogImage: DEFAULT_OG_IMAGE,
    keywords:
      "Software Development Blog, Electron, Performance Optimization, Debugging, Developer Lessons, TypeScript, React",
  },
  lab: {
    title: "The Lab — Gem Rey Rañola",
    description:
      "Experiments, prototypes, and things that probably shouldn't work. Exploring creative coding, AI, and new technologies.",
    canonical: "/lab",
    // ogImage: DEFAULT_OG_IMAGE,
    keywords:
      "Creative Coding, Experiments, Prototypes, AI, WebGL, Three.js, Developer Lab, Technology Exploration",
  },
  contact: {
    title: "Let's Build Something — Gem Rey Rañola",
    description:
      "Have something worth building? Let's make it real. Get in touch to discuss software development, collaboration, or new opportunities.",
    canonical: "/contact",
    // ogImage: DEFAULT_OG_IMAGE,
    keywords:
      "Contact Developer, Hire Software Developer, Freelance Developer, Collaboration, Software Development Services",
  },
} as const satisfies Record<string, SEOConfig>;
