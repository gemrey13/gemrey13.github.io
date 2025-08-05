import AboutMeSection from "../components/sections/AboutMeSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import HeroSection from "../components/sections/HeroSection";
import QuoteSection from "../components/sections/QuoteSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="mx-5 md:mx-16">
        <AboutMeSection />
      </div>
      <QuoteSection />
      <ExperienceSection />
    </>
  );
};

export default Home;
