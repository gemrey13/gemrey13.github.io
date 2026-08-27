import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { projects } from "@/data/projects";
import SEOHead from "@/components/seo/SEOHead";
import { ProjectSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import PageContainer from "@/components/layout/PageContainer";
import PhoneMockup from "@/components/ui/PhoneMockup";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const prefersReducedMotion = useReducedMotion();
  const project = projects.find((p) => p.slug === slug);
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject =
    projects[(projectIndex - 1 + projects.length) % projects.length];

  if (!project) {
    return (
      <PageContainer variant="narrow">
        <SEOHead
          title="Project Not Found"
          description="The project you're looking for doesn't exist."
          noIndex
        />
        <h1 className="font-display text-4xl font-bold">Project Not Found</h1>
        <Link
          to="/projects"
          className="mt-4 inline-block text-accent hover:text-accent-hover"
        >
          &larr; Back to Projects
        </Link>
      </PageContainer>
    );
  }

  const cs = project.caseStudy;

  return (
    <>
      <SEOHead
        title={`${project.title} — Gem Rey Rañola`}
        description={project.description}
        canonical={`/projects/${project.slug}`}
      />
      <ProjectSchema
        name={project.title}
        description={project.description}
        url={project.links?.live}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: project.title, path: `/projects/${project.slug}` },
        ]}
      />

      <PageContainer variant="wide">
        <article>
          {/* Back link */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            <span aria-hidden="true">&larr;</span> All Projects
          </Link>

          {/* Header */}
          <motion.header
            className="mt-8"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {project.featured && (
              <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                Featured Project
              </span>
            )}
            <h1 className="font-display mt-4 text-4xl font-bold md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-3 text-xl text-text-secondary">
              {project.tagline}
            </p>
          </motion.header>

          {/* Technologies */}
          <motion.div
            className="mt-8 flex flex-wrap gap-2"
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Links */}
          {project.links && (
            <div className="mt-6 flex gap-4">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
                >
                  View Live &rarr;
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:bg-surface-elevated"
                >
                  Source Code
                </a>
              )}
            </div>
          )}

          {/* Phone Mockup Hero — for projects with phone-mockup presentation */}
          {project.presentationType === "phone-mockup" && (
            <motion.section
              className="mt-16 overflow-hidden rounded-2xl border border-border bg-zinc-950 px-6 py-12 md:px-12 md:py-16"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12 lg:gap-16">
                {/* Text content */}
                <div className="flex-1 text-center md:text-left">
                  <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                    Built for your pocket
                  </h2>
                  <p className="mt-3 max-w-md text-text-secondary">
                    A fast, native-feeling PWA you can install and use without
                    an app store.
                  </p>
                </div>

                {/* Phone mockup */}
                <div className="relative flex-shrink-0">
                  <PhoneMockup size="large" />
                  {/* Background glow */}
                  <div
                    className="pointer-events-none absolute inset-0 -z-10 scale-150 bg-radial-[ellipse_at_center] from-indigo-500/15 via-transparent to-transparent blur-2xl"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </motion.section>
          )}

          {/* Case Study Content */}
          {cs && (
            <div className="mt-16 space-y-16">
              {cs.problem && (
                <CaseStudySection
                  title="The Problem"
                  content={cs.problem}
                  reducedMotion={prefersReducedMotion}
                />
              )}
              {cs.approach && (
                <CaseStudySection
                  title="The Approach"
                  content={cs.approach}
                  reducedMotion={prefersReducedMotion}
                />
              )}
              {cs.architecture && (
                <CaseStudySection
                  title="Architecture"
                  content={cs.architecture}
                  reducedMotion={prefersReducedMotion}
                />
              )}
              {cs.challenges && cs.challenges.length > 0 && (
                <motion.section
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="font-display text-2xl font-semibold">
                    Technical Challenges
                  </h2>
                  <ul className="mt-4 space-y-3" role="list">
                    {cs.challenges.map((challenge, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-text-secondary"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </motion.section>
              )}
              {cs.result && (
                <CaseStudySection
                  title="The Result"
                  content={cs.result}
                  reducedMotion={prefersReducedMotion}
                />
              )}
            </div>
          )}

          {/* Overview if no case study */}
          {!cs && (
            <div className="mt-16">
              <p className="text-lg text-text-secondary leading-relaxed">
                {project.description}
              </p>
            </div>
          )}

          {/* Project navigation */}
          <nav
            className="mt-24 flex items-center justify-between border-t border-border pt-8"
            aria-label="Project navigation"
          >
            {prevProject && (
              <Link
                to={`/projects/${prevProject.slug}`}
                className="group flex flex-col"
              >
                <span className="text-xs text-text-muted">Previous</span>
                <span className="font-display mt-1 text-sm font-medium text-text-secondary transition-colors group-hover:text-text-primary">
                  &larr; {prevProject.title}
                </span>
              </Link>
            )}
            {nextProject && (
              <Link
                to={`/projects/${nextProject.slug}`}
                className="group ml-auto flex flex-col items-end"
              >
                <span className="text-xs text-text-muted">Next</span>
                <span className="font-display mt-1 text-sm font-medium text-text-secondary transition-colors group-hover:text-text-primary">
                  {nextProject.title} &rarr;
                </span>
              </Link>
            )}
          </nav>
        </article>
      </PageContainer>
    </>
  );
}

function CaseStudySection({
  title,
  content,
  reducedMotion,
}: {
  title: string;
  content: string;
  reducedMotion: boolean;
}) {
  return (
    <motion.section
      initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="font-display text-2xl font-semibold">{title}</h2>
      <p className="mt-4 text-text-secondary leading-relaxed">{content}</p>
    </motion.section>
  );
}
