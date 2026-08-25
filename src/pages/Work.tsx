import SEOHead from "@/components/seo/SEOHead";
import { seoConfig } from "@/data/seo";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";

export default function Work() {
  return (
    <>
      <SEOHead {...seoConfig.work} />
      <div className="pt-20">
        <ExperienceTimeline />
      </div>
    </>
  );
}
