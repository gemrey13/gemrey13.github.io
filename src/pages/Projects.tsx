import SEOHead from "@/components/seo/SEOHead";
import { seoConfig } from "@/data/seo";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import PageContainer from "@/components/layout/PageContainer";

export default function Projects() {
  return (
    <>
      <SEOHead {...seoConfig.projects} />
      <PageContainer variant="narrow">
        <ProjectShowcase standalone />
      </PageContainer>
    </>
  );
}
