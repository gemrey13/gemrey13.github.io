import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { toolkitCategories } from "@/data/toolkit";
import { getToolkitWithProjects } from "@/utils/toolkit";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function ToolkitGrid() {
  const prefersReducedMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toolkit = useMemo(() => getToolkitWithProjects(), []);

  const filteredTools = activeCategory
    ? toolkit.filter((t) => t.category === activeCategory)
    : toolkit;

  return (
    <section className="px-6 py-32" aria-label="Toolkit">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="font-display mb-4 text-3xl font-bold tracking-tight md:text-5xl"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Toolkit
        </motion.h2>
        <motion.p
          className="mb-12 text-text-secondary"
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Tools I use to build things.
        </motion.p>

        {/* Category filters */}
        <div
          className="mb-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter by category"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all ${
              activeCategory === null
                ? "bg-accent text-white"
                : "bg-surface text-text-secondary hover:bg-surface-elevated hover:text-text-primary"
            }`}
            role="tab"
            aria-selected={activeCategory === null}
          >
            All
          </button>
          {toolkitCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-accent text-white"
                  : "bg-surface text-text-secondary hover:bg-surface-elevated hover:text-text-primary"
              }`}
              role="tab"
              aria-selected={activeCategory === cat.id}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tools grid */}
        <motion.div
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
          layout
        >
          {filteredTools.map((tool) => (
            <motion.div
              key={tool.name}
              layout
              initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="group flex items-center gap-3 rounded-lg border border-border bg-surface p-3 transition-all hover:border-accent/30 hover:bg-surface-elevated"
            >
              <span className="text-sm font-medium text-text-primary">
                {tool.name}
              </span>
              {tool.projectSlugs && tool.projectSlugs.length > 0 && (
                <span className="ml-auto text-xs text-text-muted">
                  {tool.projectSlugs.length}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
