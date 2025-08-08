import AboutMeSection from "../components/sections/AboutMeSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import QuoteSection from "../components/sections/QuoteSection";
import Head from "../components/SEO/Head";
import MeCoding from "../assets/photos/Gem Coding.png";

const Home = () => {
  return (
    <>
      <Head
        title="Home"
        description="Gem Rey's official portfolio — showcasing innovative web development projects, software engineering skills, and creative coding solutions."
        keywords="Gem Rey, Gem, software engineer, web developer, React, JavaScript, TypeScript, portfolio, projects, Django, Python, web design, coding, software development"
        image={MeCoding}
      />

      <HeroSection />
      <AboutMeSection />
      <QuoteSection />
      <ExperienceSection />
      <hr className="mx-5 mt-14 border-gray-300 md:mx-14 md:mt-24 lg:mx-36" />
      <ProjectsSection />
    </>
  );
};

export default Home;
