import AboutMeSection from "../components/sections/AboutMeSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import QuoteSection from "../components/sections/QuoteSection";
import Head from "../components/SEO/Head";
import MeCoding from "../assets/photos/Gem Coding.png";
import CredlySection from "../components/sections/CredlySection";

const Home = () => {
  return (
    <>
      <Head
        title="Code with Gem | Portfolio"
        description="Hi, I'm Gem Rey. I'm a Software Developer specializing in building scalable systems, automated pipelines, and responsive web applications."
        keywords="Gem Rey, software developer homepage, engineering portfolio, technical leader, system automation, cybersecurity audits, web development, custom tools"
        image={MeCoding}
      />

      <HeroSection />
      <AboutMeSection />
      <QuoteSection />
      <CredlySection />
      <ExperienceSection />
      <hr className="mx-5 mt-14 border-gray-300 md:mx-14 md:mt-24 lg:mx-36" />
      <ProjectsSection />
    </>
  );
};

export default Home;
