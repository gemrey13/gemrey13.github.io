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
        title="About Me"
        description="Learn more about Gem Rey — a passionate software engineer specializing in web development, React, TypeScript, Django, and creating innovative digital solutions."
        keywords="Gem Rey, about Gem Rey, about Gem, about me, software engineer, web developer, React, TypeScript, Django, portfolio, coding, software development, Python"
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
