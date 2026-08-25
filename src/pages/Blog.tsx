import { Link } from "react-router-dom";
import { motion } from "motion/react";
import SEOHead from "@/components/seo/SEOHead";
import { seoConfig } from "@/data/seo";
import { blogPosts } from "@/data/blog";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import PageContainer from "@/components/layout/PageContainer";

export default function Blog() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <SEOHead {...seoConfig.blog} />
      <PageContainer variant="wide">
        <section>
          <motion.h1
            className="font-display text-3xl font-bold tracking-tight md:text-5xl"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Things I've Learned the Hard Way
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-text-secondary"
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Real lessons from building software — not generic tutorials.
          </motion.p>

          {blogPosts.length === 0 ? (
            <motion.div
              className="mt-16 rounded-xl border border-border-subtle bg-surface p-12 text-center"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <p className="text-text-tertiary">Articles coming soon.</p>
              <p className="mt-2 text-sm text-text-muted">
                Topics will include Electron development, reconciliation systems,
                performance optimization, legacy systems, and lessons from real
                projects.
              </p>
            </motion.div>
          ) : (
            <div className="mt-12 space-y-8">
              {blogPosts
                .filter((p) => p.published)
                .map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="group block rounded-xl border border-border bg-surface p-6 transition-all hover:border-accent/30 hover:bg-surface-elevated"
                  >
                    <h2 className="font-display text-xl font-semibold text-text-primary transition-colors group-hover:text-accent">
                      {post.title}
                    </h2>
                    <p className="mt-1 text-sm text-text-tertiary">
                      {post.date}
                      {post.readTime && ` · ${post.readTime}`}
                    </p>
                    <p className="mt-3 text-text-secondary">{post.excerpt}</p>
                    {post.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded bg-background px-2 py-0.5 text-xs text-text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                ))}
            </div>
          )}
        </section>
      </PageContainer>
    </>
  );
}
