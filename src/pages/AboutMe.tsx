import AboutMeInfo from "../components/list/AboutMeInfo";
import EventsSection from "../components/sections/EventsSection";
import GuitarArtSection from "../components/sections/GuitarArtSection";
import VolleyballSection from "../components/sections/VolleyballSection";
import Title from "../components/ui/Title";
import MeCoding from "../assets/photos/Gem Coding.png";
import Head from "../components/SEO/Head";

const AboutMe = () => {
  return (
    <>
      <Head
        title="About Code with Gem"
        description="Portfolio of Gem Rey: A Software Developer specializing in application development, web security audits, and full-stack engineering."
        keywords="Gem Rey, Gem, software engineer, Software Developer, React, JavaScript, TypeScript, portfolio, projects, Django, Python, web design, coding, software development"
        image={MeCoding}
      />


      <section className="mx-5 mt-14 overflow-x-hidden md:mx-14 md:mt-36 lg:mx-36">
        <h1 className="text-xl font-semibold md:text-3xl">About Me</h1>
        <AboutMeInfo />

        <hr className="my-14 border-gray-300 md:my-24" />

        <Title header="More Than Just a Developer." />
        <VolleyballSection />

        <GuitarArtSection />

        <hr className="my-14 border-gray-300 md:my-24" />

        <EventsSection />
      </section>
    </>
  );
};

export default AboutMe;
