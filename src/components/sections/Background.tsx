import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { personalInfo, certifications } from "@/data/personal";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import CertificateLightbox from "@/components/ui/CertificateLightbox";
import type { Certification } from "@/types";

const INITIAL_VISIBLE_COUNT = 6;

interface CertificateCardProps {
  cert: Certification;
  onClick: () => void;
  prefersReducedMotion: boolean;
}

function CertificateCard({ cert, onClick, prefersReducedMotion }: CertificateCardProps) {
  if (!cert.src) {
    return (
      <div
        className="flex h-24 w-24 flex-col items-center justify-center rounded-lg border border-dashed border-border bg-surface-elevated p-2 md:h-28 md:w-28"
        aria-label={`${cert.name} — coming soon`}
      >
        <svg
          className="mb-1 h-6 w-6 text-text-muted"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
          />
        </svg>
        <span className="text-[9px] text-text-muted">Coming soon</span>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-lg border border-border bg-surface-elevated transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label={`View ${cert.name} certificate from ${cert.issuer}`}
    >
      <motion.img
        layoutId={prefersReducedMotion ? undefined : `cert-img-${cert.name}`}
        src={cert.src}
        alt={cert.name}
        loading="lazy"
        className="h-24 w-24 object-contain p-2 transition-transform group-hover:scale-105 md:h-28 md:w-28"
      />
      <span className="absolute inset-x-0 bottom-0 bg-background/80 px-2 py-1 text-center text-[10px] leading-tight text-text-tertiary opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
        {cert.name}
      </span>
    </button>
  );
}

export default function Background() {
  const prefersReducedMotion = useReducedMotion();
  const { education } = personalInfo;
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [showAll, setShowAll] = useState(false);

  const hasMore = certifications.length > INITIAL_VISIBLE_COUNT;
  const visibleCerts = showAll
    ? certifications
    : certifications.slice(0, INITIAL_VISIBLE_COUNT);

  return (
    <section className="px-6 py-32 md:py-40" aria-label="Education and Certifications">
      <div className="mx-auto max-w-4xl">
        {/* Section heading */}
        <motion.h2
          className="font-display mb-4 text-3xl font-bold tracking-tight md:text-5xl"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Background
        </motion.h2>
        <motion.p
          className="mb-16 text-text-secondary"
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Education & Certifications
        </motion.p>

        <div className="grid gap-12">
          {/* Education card */}
          <motion.div
            className="rounded-xl border border-border bg-surface p-6 md:p-8"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10"
                aria-hidden="true"
              >
                <svg
                  className="h-5 w-5 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-text-primary">
                Education
              </h3>
            </div>

            <div className="space-y-3">
              <p className="text-base font-medium text-text-primary">
                {education.degree}
              </p>
              <p className="text-sm text-text-secondary">
                {education.institution}
              </p>
              {education.specialization && (
                <p className="text-sm text-text-tertiary">
                  Specialization: {education.specialization}
                </p>
              )}
              {education.award && (
                <div className="mt-4 inline-flex items-center gap-2 rounded-md border border-accent/20 bg-accent/5 px-3 py-1.5">
                  <svg
                    className="h-4 w-4 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.996.178-1.768.65-2.08 1.337-.311.687-.305 1.515.018 2.182.323.667.965 1.179 1.79 1.425M5.25 4.236V2.721m0 1.515a5.998 5.998 0 0 1 6.75 0M18.75 4.236c.996.178 1.768.65 2.08 1.337.311.687.305 1.515-.018 2.182-.323.667-.965 1.179-1.79 1.425M18.75 4.236V2.721m0 1.515a5.998 5.998 0 0 0-6.75 0m0 0v3.364"
                    />
                  </svg>
                  <span className="text-xs font-medium text-accent">
                    {education.award}
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="rounded-xl border border-border bg-surface p-6 md:p-8"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10"
                aria-hidden="true"
              >
                <svg
                  className="h-5 w-5 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-text-primary">
                Certifications
              </h3>
            </div>

            {/* Certifications grid */}
            <div className="flex flex-wrap items-center gap-4">
              <AnimatePresence mode="popLayout">
                {visibleCerts.map((cert) => (
                  <motion.div
                    key={cert.name}
                    layout={!prefersReducedMotion}
                    initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                  >
                    <CertificateCard
                      cert={cert}
                      onClick={() => setSelectedCert(cert)}
                      prefersReducedMotion={prefersReducedMotion}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Show more / Show less toggle */}
            {hasMore && (
              <motion.button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                className="mt-6 inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-accent/30 hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                initial={prefersReducedMotion ? {} : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                aria-expanded={showAll}
                aria-controls="certifications-grid"
              >
                {showAll ? (
                  <>
                    Show less
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                  </>
                ) : (
                  <>
                    Show all {certifications.length} certifications
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </>
                )}
              </motion.button>
            )}
          </motion.div>
        </div>
      </div>

      {/* Certificate lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <CertificateLightbox
            cert={selectedCert}
            onClose={() => setSelectedCert(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
