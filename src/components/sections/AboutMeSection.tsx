import Title from "../ui/Title";
import CodingPic from "../../assets/photos/Gem Coding.png";

const AboutMeSection = () => {
  return (
    <section className="mt-14 h-auto">
      <Title
        header="About Me"
        linkTitle="Get to know me more"
        internalLink="asdas"
      />
      <div className="font-droid text-secondary my-6 flex flex-col-reverse md:mx-4 md:my-10 md:flex-row justify-center items-center md:space-x-24">
          <img
            src={CodingPic}
            alt="Gem Coding in a desktop environment"
            className="h-auto w-80"
          />
        <article className="flex flex-col space-y-5 md:w-[40%] md:text-lg/8">
          <p>
            I'm a <span className="font-bold">full-stack web developer</span>,
            focused on building responsive and user-friendly applications. I
            started with a love for coding and grew curious about how tech
            solves real-world problems. That curiosity led me to explore both
            frontend and backend development, where I found my passion for
            building efficient and scalable systems.
          </p>

          <p>
            I see myself as a{" "}
            <span className="font-bold">developer-leader hybrid</span>. I
            founded a student organization that trains others in tech and event
            support. I've also represented my region in national hackathons. I'm
            passionate about creating tools that make an impact—and always eager
            to learn, grow, and build meaningful projects.
          </p>

          <p className="mb-6">
            My educational background includes a Bachelor of Science in
            Information Technology from Dalubhasaan ng Lungsod ng Lucena, where
            I was recognized as the{" "}
            <span className="font-bold">Most Promising IT Practitioner</span>.
            The experience allowed me to turn concepts learned in the comlabs
            into real technical skills, building a strong foundation in web
            development and problem-solving.
          </p>
        </article>
      </div>
    </section>
  );
};

export default AboutMeSection;
