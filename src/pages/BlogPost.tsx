import { useParams, Link } from "react-router-dom";
import Markdown from "react-markdown";
import { blogPosts } from "@/data/blog";
import SEOHead from "@/components/seo/SEOHead";
import { BreadcrumbSchema, BlogPostingSchema } from "@/components/seo/StructuredData";
import PageContainer from "@/components/layout/PageContainer";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <PageContainer variant="narrow">
        <h1 className="font-display text-4xl font-bold">Post Not Found</h1>
        <Link to="/blog" className="mt-4 inline-block text-accent hover:text-accent-hover">
          &larr; Back to Blog
        </Link>
      </PageContainer>
    );
  }

  return (
    <>
      <SEOHead
        title={`${post.title} — Gem Rey Rañola`}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        ogType="article"
        publishedTime={new Date(post.date).toISOString()}
        articleAuthor="Gem Rey Rañola"
        articleSection="Software Development"
        articleTags={post.tags}
        keywords={post.tags.join(", ")}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <BlogPostingSchema
        title={post.title}
        excerpt={post.excerpt}
        slug={post.slug}
        datePublished={new Date(post.date).toISOString()}
        tags={post.tags}
      />
      <PageContainer variant="reading">
        <article>
          <Link
            to="/blog"
            className="text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            &larr; Back to Blog
          </Link>
          <h1 className="font-display mt-6 text-3xl font-bold md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-text-tertiary">{post.date}</p>
          {post.content && (
            <div className="prose prose-invert mt-8">
              <Markdown>{post.content}</Markdown>
            </div>
          )}
        </article>
      </PageContainer>
    </>
  );
}
