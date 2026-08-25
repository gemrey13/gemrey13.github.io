import { motion } from "motion/react";
import { workExperience } from "@/data/experience";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { WorkExperience } from "@/types";

interface ExperienceTimelineProps {
  standalone?: boolean;
}

export default function ExperienceTimeline({ standalone }: ExperienceTimelineProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className={standalone ? "py-32" : "px-6 py-32"} aria-label="Work experience">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="font-display mb-16 text-3xl font-bold tracking-tight md:text-5xl"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute top-0 bottom-0 left-0 w-px bg-linear-to-b from-accent/50 via-border to-transparent md:left-8"
            aria-hidden="true"
          />

          {/* Experience entries */}
          <div className="space-y-16">
            {workExperience.map((exp, index) => (
              <ExperienceEntry
                key={exp.id}
                experience={exp}
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

interface ExperienceEntryProps {
  experience: WorkExperience;
  index: number;
  reducedMotion: boolean;
}

function ExperienceEntry({
  experience,
  index,
  reducedMotion,
}: ExperienceEntryProps) {
  return (
    <motion.article
      className="relative pl-8 md:pl-20"
      initial={reducedMotion ? {} : { opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline dot */}
      <div
        className="absolute top-2 left-0 md:left-8"
        aria-hidden="true"
      >
        <div
          className={`h-3 w-3 -translate-x-1/2 rounded-full border-2 ${
            experience.current
              ? "border-accent bg-accent/30"
              : "border-border bg-surface"
          }`}
        />
      </div>

      {/* Content */}
      <div>
        {/* Period */}
        <span className="text-sm font-medium text-text-tertiary">
          {experience.period}
          {experience.current && (
            <span className="ml-2 inline-flex items-center rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent">
              Current
            </span>
          )}
        </span>

        {/* Role & Company */}
        <h3 className="font-display mt-2 text-xl font-semibold text-text-primary md:text-2xl">
          {experience.role}
        </h3>
        <p className="mt-1 text-base text-text-secondary">
          {experience.company}
        </p>

        {/* Description */}
        <p className="mt-4 max-w-2xl text-text-secondary leading-relaxed">
          {experience.description}
        </p>

        {/* Responsibilities */}
        <ul className="mt-4 space-y-2" role="list">
          {experience.responsibilities.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm text-text-tertiary"
            >
              <span
                className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/60"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>

        {/* Technologies */}
        {experience.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-surface-elevated px-2.5 py-1 text-xs font-medium text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
