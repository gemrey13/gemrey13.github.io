import SEOHead from "@/components/seo/SEOHead";
import { seoConfig } from "@/data/seo";
import ContactCTA from "@/components/sections/ContactCTA";
import PageContainer from "@/components/layout/PageContainer";

export default function Contact() {
  return (
    <>
      <SEOHead {...seoConfig.contact} />
      <PageContainer variant="full">
        <ContactCTA standalone />
      </PageContainer>
    </>
  );
}
