import SEOHead from "@/components/seo/SEOHead";
import { seoConfig } from "@/data/seo";
import EventsGallery from "@/components/sections/EventsGallery";

export default function Events() {
  return (
    <>
      <SEOHead {...seoConfig.events} />
      <div className="pt-20">
        <EventsGallery />
      </div>
    </>
  );
}
