import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { projects, featuredProjects } from "@/data/projects";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { getPhotoUrl } from "@/utils/index";
import type { Project } from "@/types";

export default function ProjectShowcase() {
  const prefersReducedMotion = useReducedMotion();
  const otherProjects = projects.filter((p) => !p.featured);
  const primaryProject = featuredProjects[0];
  const secondaryFeatured = featuredProjects.slice(1);

  return (
    <section className="px-6 py-32" aria-label="Projects">
      <div className="mx-auto max-w-6xl">
        {/* Page Header */}
        <motion.h2
          className="font-display mb-4 text-3xl font-bold tracking-tight md:text-5xl"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          What I've Built
        </motion.h2>
        <motion.p
          className="mb-16 max-w-xl text-text-secondary"
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Real software, built for real problems.
        </motion.p>


        {/* Featured Projects — Bento Grid */}
        <div className="grid gap-4 md:grid-cols-2 md:grid-rows-2 md:gap-5 lg:gap-6 md:max-h-[680px]">
          {/* Primary featured project — spans 2 rows */}
          {primaryProject && (
            <PrimaryFeaturedCard
              project={primaryProject}
              reducedMotion={prefersReducedMotion}
            />
          )}

          {/* Secondary featured projects — stack in right column */}
          {secondaryFeatured.map((project, index) => (
            <SecondaryFeaturedCard
              key={project.id}
              project={project}
              index={index}
              reducedMotion={prefersReducedMotion}
            />
          ))}
        </div>

        {/* Other Projects Section */}
        <div className="mt-24">
          <motion.h3
            className="font-display mb-8 text-xl font-semibold text-text-secondary"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
          >
            Other Projects
          </motion.h3>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, index) => (
              <CompactProjectCard
                key={project.id}
                project={project}
                index={index}
                reducedMotion={prefersReducedMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Primary Featured Card (large, spans 2 rows) ─── */

function PrimaryFeaturedCard({
  project,
  reducedMotion,
}: {
  project: Project;
  reducedMotion: boolean;
}) {
  return (
    <motion.div
      className="md:row-span-2"
      initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:border-accent/30 hover:bg-surface-elevated"
      >
        {/* Image — ~30% of the card height */}
        {project.image && (
          <div className="relative aspect-[16/10] overflow-hidden bg-surface-elevated md:aspect-auto md:h-[30%] md:flex-none">
            {getPhotoUrl(project.image) ? (
              <img
                src={getPhotoUrl(project.image)}
                alt={`${project.title} preview`}
                className="h-full w-full object-fit transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-text-muted">
                <span className="text-sm">{project.title}</span>
              </div>
            )}
            {/* Gradient overlay for depth */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>
        )}

        {/* Content — takes the other half */}
        <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
          <div>
            <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
              Featured
            </span>

            <h3 className="font-display mt-3 text-2xl font-bold text-text-primary transition-colors group-hover:text-accent md:text-3xl">
              {project.title}
            </h3>

            <p className="mt-1.5 text-sm text-text-tertiary">
              {project.tagline}
            </p>

            <p className="mt-4 line-clamp-4 text-sm text-text-secondary leading-relaxed md:line-clamp-none">
              {project.description}
            </p>
          </div>

          <div className="mt-6">
            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-background px-2.5 py-0.5 text-xs text-text-tertiary"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-5 flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors group-hover:text-accent-hover">
                View Case Study
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
              </span>
              {project.links?.github && (
                <span
                  role="link"
                  tabIndex={0}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(
                      project.links!.github!,
                      "_blank",
                      "noopener,noreferrer",
                    );
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(
                        project.links!.github!,
                        "_blank",
                        "noopener,noreferrer",
                      );
                    }
                  }}
                  className="inline-flex cursor-pointer items-center gap-1 text-sm text-text-tertiary transition-colors hover:text-accent"
                >
                  Source
                  <span aria-hidden="true">&rarr;</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── Secondary Featured Card (balanced, right column) ─── */

interface CardProps {
  project: Project;
  index: number;
  reducedMotion: boolean;
}

function SecondaryFeaturedCard({ project, index, reducedMotion }: CardProps) {
  return (
    <motion.div
      initial={reducedMotion ? {} : { opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:border-accent/30 hover:bg-surface-elevated"
      >
        {/* Image — top portion, ~30% */}
        {project.image && (
          <div className="aspect-[16/7] overflow-hidden bg-surface-elevated">
            {getPhotoUrl(project.image) ? (
              <img
                src={getPhotoUrl(project.image)}
                alt={`${project.title} preview`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-text-muted">
                <span className="text-sm">{project.title}</span>
              </div>
            )}
          </div>
        )}

        {/* Content — bottom portion */}
        <div className="flex flex-1 flex-col justify-between p-5 md:p-6">
          <div>
            <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
              Featured
            </span>

            <h3 className="font-display mt-2.5 text-lg font-semibold text-text-primary transition-colors group-hover:text-accent md:text-xl">
              {project.title}
            </h3>

            <p className="mt-1 text-sm text-text-tertiary">
              {project.tagline}
            </p>
          </div>

          <div className="mt-4">
            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-background px-2 py-0.5 text-xs text-text-tertiary"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-4 flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors group-hover:text-accent-hover">
                View Case Study
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
              </span>
              {project.links?.live && (
                <span
                  role="link"
                  tabIndex={0}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(
                      project.links!.live!,
                      "_blank",
                      "noopener,noreferrer",
                    );
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(
                        project.links!.live!,
                        "_blank",
                        "noopener,noreferrer",
                      );
                    }
                  }}
                  className="inline-flex cursor-pointer items-center gap-1 text-sm text-text-tertiary transition-colors hover:text-accent"
                >
                  Live
                  <span aria-hidden="true">&rarr;</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── Compact Card (non-featured, visually secondary) ─── */

function CompactProjectCard({ project, index, reducedMotion }: CardProps) {
  return (
    <motion.div
      initial={reducedMotion ? {} : { opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="group flex h-full flex-col rounded-xl border border-border bg-surface p-5 transition-all hover:border-accent/30 hover:bg-surface-elevated md:p-6"
      >
        <div className="flex-1">
          <h3 className="font-display text-base font-semibold text-text-primary transition-colors group-hover:text-accent md:text-lg">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-text-tertiary">{project.tagline}</p>
          <p className="mt-3 line-clamp-3 text-sm text-text-secondary leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="mt-5">
          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded bg-background px-2 py-0.5 text-xs text-text-tertiary"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-4 flex items-center gap-3">
            <span className="inline-flex items-center gap-1 text-xs font-medium text-accent transition-colors group-hover:text-accent-hover">
              View Project
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5"
              >
                &rarr;
              </span>
            </span>
            {project.links?.github && (
              <span
                role="link"
                tabIndex={0}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(
                    project.links!.github!,
                    "_blank",
                    "noopener,noreferrer",
                  );
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(
                      project.links!.github!,
                      "_blank",
                      "noopener,noreferrer",
                    );
                  }
                }}
                className="inline-flex cursor-pointer items-center gap-1 text-xs text-text-tertiary transition-colors hover:text-accent"
              >
                Repo
                <span aria-hidden="true">&rarr;</span>
              </span>
            )}
            {project.links?.live && (
              <span
                role="link"
                tabIndex={0}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(
                    project.links!.live!,
                    "_blank",
                    "noopener,noreferrer",
                  );
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(
                      project.links!.live!,
                      "_blank",
                      "noopener,noreferrer",
                    );
                  }
                }}
                className="inline-flex cursor-pointer items-center gap-1 text-xs text-text-tertiary transition-colors hover:text-accent"
              >
                Live
                <span aria-hidden="true">&rarr;</span>
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
