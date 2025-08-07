import AboutMeInfo from "../components/list/AboutMeInfo";
import MoreDetailsSection from "../components/sections/MoreDetailsSection";

const AboutMe = () => {
  return (
    <section className="mx-5 mt-14 md:mx-14 md:mt-20 lg:mx-36">
      <h1 className="text-xl font-semibold md:text-3xl">About Me</h1>
      <AboutMeInfo />

      <hr className="my-14 border-gray-300 md:my-24" />

      <MoreDetailsSection />
    </section>
  );
};

export default AboutMe;
