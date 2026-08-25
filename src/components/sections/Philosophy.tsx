import { motion } from "motion/react";
import { personalInfo } from "@/data/personal";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Philosophy() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="px-6 py-32 md:py-40" aria-label="Philosophy">
      <div className="mx-auto max-w-4xl">
        {/* Section heading */}
        <motion.h2
          className="font-display mb-16 text-3xl font-bold tracking-tight md:text-5xl"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          How I Work
        </motion.h2>

        {/* Philosophy quote block */}
        <motion.div
          className="relative"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {/* Accent border left */}
          <div
            className="absolute top-0 left-0 h-full w-px bg-linear-to-b from-accent via-accent/40 to-transparent"
            aria-hidden="true"
          />

          {/* Quote content */}
          <blockquote className="pl-8 md:pl-12">
            <p className="font-display text-xl leading-relaxed font-medium text-text-primary md:text-2xl lg:text-3xl lg:leading-relaxed">
              {personalInfo.philosophy}
            </p>
          </blockquote>

          {/* Decorative accent glow */}
          <div
            className="absolute -left-4 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-accent/6 blur-2xl"
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </section>
  );
}
