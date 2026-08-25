import SEOHead from "@/components/seo/SEOHead";
import { seoConfig } from "@/data/seo";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import PageContainer from "@/components/layout/PageContainer";

export default function Work() {
  return (
    <>
      <SEOHead {...seoConfig.work} />
      <PageContainer variant="narrow">
        <ExperienceTimeline standalone />
      </PageContainer>
    </>
  );
}
