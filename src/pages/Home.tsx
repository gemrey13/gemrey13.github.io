import AboutMeSection from "../components/sections/AboutMeSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import QuoteSection from "../components/sections/QuoteSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <QuoteSection />
      <ExperienceSection />
      <hr className="mx-5 border-gray-300 md:mx-16" />
      <ProjectsSection />
    </>
  );
};

export default Home;
