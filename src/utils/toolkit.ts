import { toolkit } from "@/data/toolkit";
import { projects } from "@/data/projects";
import type { ToolkitItem } from "@/types";

export interface ToolkitItemWithProjects extends ToolkitItem {
  projectSlugs: string[];
}

/**
 * Derives project associations for each toolkit item by performing
 * exact case-insensitive matching between toolkit names and project
 * technology arrays. No manual maintenance needed — add a technology
 * to a project and the toolkit reflects it automatically.
 */
export function getToolkitWithProjects(): ToolkitItemWithProjects[] {
  return toolkit.map((tool) => {
    const toolNameLower = tool.name.toLowerCase();

    const matchedSlugs = projects
      .filter((project) =>
        project.technologies.some(
          (tech) => tech.toLowerCase() === toolNameLower
        )
      )
      .map((project) => project.slug);

    return {
      ...tool,
      projectSlugs: matchedSlugs,
    };
  });
}
