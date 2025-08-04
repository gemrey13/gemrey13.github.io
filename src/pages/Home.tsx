import AboutMeSection from "../components/sections/AboutMeSection";
import HeroSection from "../components/sections/HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="mx-5 md:mx-14">
        <AboutMeSection />
      </div>
    </>
  );
};

export default Home;
