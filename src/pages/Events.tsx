import SEOHead from "@/components/seo/SEOHead";
import { seoConfig } from "@/data/seo";
import EventsGallery from "@/components/sections/EventsGallery";
import PageContainer from "@/components/layout/PageContainer";

export default function Events() {
  return (
    <>
      <SEOHead {...seoConfig.events} />
      <PageContainer variant="narrow">
        <EventsGallery standalone />
      </PageContainer>
    </>
  );
}
