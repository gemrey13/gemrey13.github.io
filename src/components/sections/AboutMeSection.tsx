import Title from "../ui/Title";
import AboutMeInfo from "../list/AboutMeInfo";

const AboutMeSection = () => {
  return (
    <section className="mx-5 mt-14 h-auto md:mx-14 md:mt-32 lg:mx-36">
      <Title
        header="About Me"
        linkTitle="Get to know me more"
        internalLink="/about-me"
      />
      <AboutMeInfo />
    </section>
  );
};

export default AboutMeSection;
