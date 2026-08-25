import SEOHead from "@/components/seo/SEOHead";
import { seoConfig } from "@/data/seo";
import ProjectShowcase from "@/components/sections/ProjectShowcase";

export default function Projects() {
  return (
    <>
      <SEOHead {...seoConfig.projects} />
      <div className="pt-20">
        <ProjectShowcase />
      </div>
    </>
  );
}
