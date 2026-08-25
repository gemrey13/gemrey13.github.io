import SEOHead from "@/components/seo/SEOHead";
import { seoConfig } from "@/data/seo";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Contact() {
  return (
    <>
      <SEOHead {...seoConfig.contact} />
      <ContactCTA />
    </>
  );
}
