import SEOHead from "@/components/seo/SEOHead";
import { seoConfig } from "@/data/seo";
import AboutStorytelling from "@/components/sections/AboutStorytelling";
import PageContainer from "@/components/layout/PageContainer";

export default function About() {
  return (
    <>
      <SEOHead {...seoConfig.about} />
      <PageContainer variant="full">
        <AboutStorytelling standalone />
      </PageContainer>
    </>
  );
}
