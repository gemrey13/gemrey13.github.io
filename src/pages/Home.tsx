import SEOHead from "@/components/seo/SEOHead";
import { PersonSchema, WebSiteSchema } from "@/components/seo/StructuredData";
import { seoConfig } from "@/data/seo";
import Hero from "@/components/sections/Hero";
import AboutStorytelling from "@/components/sections/AboutStorytelling";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import Philosophy from "@/components/sections/Philosophy";
import Background from "@/components/sections/Background";
import EventsGallery from "@/components/sections/EventsGallery";
import ToolkitGrid from "@/components/sections/ToolkitGrid";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <SEOHead {...seoConfig.home} />
      <PersonSchema />
      <WebSiteSchema />

      {/* Story Arc: WHO AM I? */}
      <Hero />

      {/* Story Arc: MORE THAN JUST A DEVELOPER */}
      <AboutStorytelling />

      {/* Story Arc: WHAT HAVE I BUILT? */}
      <ProjectShowcase />

      {/* Story Arc: WHERE HAVE I WORKED? */}
      <ExperienceTimeline />

      {/* Story Arc: HOW I WORK */}
      <Philosophy />

      {/* Story Arc: EDUCATION & CERTIFICATIONS */}
      <Background />

      {/* Story Arc: WHERE HAVE I SHOWN UP? */}
      <EventsGallery />

      {/* Story Arc: WHAT DO I USE? */}
      <ToolkitGrid />

      {/* Story Arc: LET'S BUILD SOMETHING */}
      <ContactCTA />
    </>
  );
}
