import type { LabExperiment } from "@/types";

export const labExperiments: LabExperiment[] = [
  {
    id: "gem-lang",
    title: "Gem Lang",
    description:
      "A custom programming language built from scratch with C++. Exploring language design, writing a lexer and recursive descent parser, building an AST, and eventually targeting LLVM IR for compilation. The goal: understand what happens between source code and machine execution.",
    date: "2025",
    technologies: ["C++", "LLVM"],
    // TODO: Gem — add link to GitHub repo once public
    // TODO: Gem — add screenshot/image of the language in action
    published: true,
  },
  {
    id: "particle-field",
    title: "Particle Field",
    description:
      "An interactive particle system rendered on a canvas that responds to mouse movement and touch input. Thousands of particles form patterns, scatter on interaction, and reassemble into shapes. A creative coding experiment exploring emergent behavior from simple rules.",
    date: "2025",
    technologies: ["TypeScript", "WebGL", "Canvas API"],
    // TODO: Gem — add live demo link
    // TODO: Gem — add preview image
    published: true,
  },
  {
    id: "motion-playground",
    title: "Motion Playground",
    description:
      "Exploring spring physics, gesture-driven animations, and layout transitions. A sandbox for testing animation ideas — drag interactions, magnetic snapping, fluid card transitions, and physics-based throws. Built as a reference for animation patterns used across the portfolio.",
    date: "2024",
    technologies: ["React", "Motion", "TypeScript"],
    // TODO: Gem — add live demo link
    // TODO: Gem — add preview image
    published: true,
  },
];
