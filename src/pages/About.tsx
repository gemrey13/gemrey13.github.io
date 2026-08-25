import SEOHead from "@/components/seo/SEOHead";
import { seoConfig } from "@/data/seo";
import AboutStorytelling from "@/components/sections/AboutStorytelling";

export default function About() {
  return (
    <>
      <SEOHead {...seoConfig.about} />
      <AboutStorytelling />
    </>
  );
}
