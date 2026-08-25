import type { SEOConfig } from "@/types";

export const seoConfig = {
  home: {
    title: "Gem Rey Rañola — Software Developer",
    description:
      "Software Developer building responsive, scalable applications. Specializing in React, TypeScript, Electron, and full-stack development. More than just a developer.",
    canonical: "/",
    ogType: "website",
  },
  about: {
    title: "About — Gem Rey Rañola",
    description:
      "More than just a developer. Software engineer, community builder, hackathon competitor, volleyball player, and continuous learner.",
    canonical: "/about",
  },
  work: {
    title: "Work Experience — Gem Rey Rañola",
    description:
      "Professional journey from IT intern to Software Developer. Building reconciliation systems, desktop applications, and business automation tools.",
    canonical: "/work",
  },
  projects: {
    title: "Projects — Gem Rey Rañola",
    description:
      "Real-world software projects: reconciliation systems, business automation, alumni portals, inventory management, and cooperative voting systems.",
    canonical: "/projects",
  },
  events: {
    title: "Where I've Shown Up — Gem Rey Rañola",
    description:
      "Conferences, hackathons, meetups, and tech communities. From Microsoft Build to HackForGov, DICT training to Drupal meetups.",
    canonical: "/events",
  },
  blog: {
    title: "Things I've Learned the Hard Way — Gem Rey Rañola",
    description:
      "Real lessons from building software: Electron development, performance optimization, reconciliation systems, legacy systems, and debugging stories.",
    canonical: "/blog",
  },
  lab: {
    title: "The Lab — Gem Rey Rañola",
    description:
      "Experiments, prototypes, and things that probably shouldn't work. Exploring creative coding, AI, and new technologies.",
    canonical: "/lab",
  },
  contact: {
    title: "Let's Build Something — Gem Rey Rañola",
    description:
      "Have something worth building? Let's make it real. Get in touch to discuss software development, collaboration, or new opportunities.",
    canonical: "/contact",
  },
} as const satisfies Record<string, SEOConfig>;
