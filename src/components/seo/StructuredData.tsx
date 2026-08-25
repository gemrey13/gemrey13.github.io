import { Helmet } from "react-helmet-async";
import { personalInfo } from "@/data/personal";

const BASE_URL = "https://codewithgem.is-a.dev";

/**
 * Person schema for the portfolio owner.
 * Applied on the home page.
 */
export function PersonSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.fullName,
    jobTitle: personalInfo.title,
    url: BASE_URL,
    email: personalInfo.emails[0],
    sameAs: personalInfo.socialLinks.map((l) => l.url),
    alumniOf: {
      "@type": "EducationalOrganization",
      name: personalInfo.education.institution,
    },
    knowsAbout: [
      "Software Development",
      "React",
      "TypeScript",
      "Electron",
      "Full-Stack Development",
      "Cloud Infrastructure",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

/**
 * WebSite schema for the portfolio.
 */
export function WebSiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Gem Rey Rañola — Portfolio",
    url: BASE_URL,
    description:
      "Personal portfolio of Gem Rey Rañola, a Software Developer focused on building responsive and scalable applications.",
    author: {
      "@type": "Person",
      name: personalInfo.fullName,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

/**
 * SoftwareApplication schema for project pages.
 */
export function ProjectSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    applicationCategory: "BusinessApplication",
    author: {
      "@type": "Person",
      name: personalInfo.fullName,
    },
    ...(url && { url }),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

/**
 * BreadcrumbList schema for navigation hierarchy.
 * Helps search engines understand page structure and display breadcrumbs in results.
 */
export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

/**
 * BlogPosting schema for individual blog posts.
 * Helps search engines display rich results for articles.
 */
export function BlogPostingSchema({
  title,
  excerpt,
  slug,
  datePublished,
  dateModified,
  tags,
}: {
  title: string;
  excerpt: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  tags?: string[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: excerpt,
    url: `${BASE_URL}/blog/${slug}`,
    datePublished,
    ...(dateModified && { dateModified }),
    author: {
      "@type": "Person",
      name: personalInfo.fullName,
      url: BASE_URL,
    },
    publisher: {
      "@type": "Person",
      name: personalInfo.fullName,
      url: BASE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${slug}`,
    },
    ...(tags && tags.length > 0 && { keywords: tags.join(", ") }),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}
