import AboutMeInfo from "../components/list/AboutMeInfo";
import GuitarArtSection from "../components/sections/GuitarArtSection";
import VolleyballSection from "../components/sections/VolleyballSection";
import Title from "../components/ui/Title";

const AboutMe = () => {
  return (
    <section className="mx-5 mt-14 md:mx-14 md:mt-20 lg:mx-36 overflow-x-hidden">
      <h1 className="text-xl font-semibold md:text-3xl">About Me</h1>
      <AboutMeInfo />

      <hr className="my-14 border-gray-300 md:my-24" />

      <Title header="More Than Just a Developer." />
      <VolleyballSection />

      <GuitarArtSection />

      <hr className="my-14 border-gray-300 md:my-24" />

    </section>
  );
};

export default AboutMe;
