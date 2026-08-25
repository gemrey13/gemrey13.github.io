import { motion } from "motion/react";
import SEOHead from "@/components/seo/SEOHead";
import { seoConfig } from "@/data/seo";
import { labExperiments } from "@/data/lab";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import PageContainer from "@/components/layout/PageContainer";

export default function Lab() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <SEOHead {...seoConfig.lab} />
      <PageContainer variant="wide">
        <section>
          <motion.h1
            className="font-display text-3xl font-bold tracking-tight md:text-5xl"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            The Lab
          </motion.h1>
          <motion.p
            className="mt-3 text-lg text-text-secondary"
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Experiments. Prototypes. Things that probably shouldn't work.
          </motion.p>

          {labExperiments.length === 0 ? (
            <motion.div
              className="mt-16 rounded-xl border border-border-subtle bg-surface p-12 text-center"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <p className="text-text-tertiary">Experiments coming soon.</p>
              <p className="mt-2 text-sm text-text-muted">
                Exploring creative coding, AI, WebGL, and interactive interfaces.
              </p>
            </motion.div>
          ) : (
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {labExperiments
                .filter((e) => e.published)
                .map((experiment) => (
                  <article
                    key={experiment.id}
                    className="rounded-xl border border-border bg-surface p-6 transition-all hover:border-accent/30 hover:bg-surface-elevated"
                  >
                    <h2 className="font-display text-lg font-semibold text-text-primary">
                      {experiment.title}
                    </h2>
                    <p className="mt-1 text-sm text-text-tertiary">
                      {experiment.date}
                    </p>
                    <p className="mt-3 text-sm text-text-secondary">
                      {experiment.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {experiment.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded bg-background px-2 py-0.5 text-xs text-text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
            </div>
          )}
        </section>
      </PageContainer>
    </>
  );
}
