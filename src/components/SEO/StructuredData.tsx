import { Helmet } from "react-helmet-async";
import { personalInfo } from "@/data/personal";

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
    url: "https://codewithgem.is-a.dev",
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
    url: "https://codewithgem.is-a.dev",
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
