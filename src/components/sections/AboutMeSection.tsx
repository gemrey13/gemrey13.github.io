import Title from "../ui/Title";
import CodingPic from "../../assets/photos/Gem Coding.png";
import { motion } from "framer-motion";

const AboutMeSection = () => {
  return (
    <section className="mx-5 mt-14 h-auto md:mx-14 md:mt-32 lg:mx-36">
      <Title
        header="About Me"
        linkTitle="Get to know me more"
        internalLink="asdas"
      />
      <div className="font-droid text-secondary my-6 flex flex-col-reverse items-center justify-center md:my-20 md:flex-row md:space-x-24">
        <motion.img
          src={CodingPic}
          alt="Gem Coding in a desktop environment"
          className="h-auto w-fit object-scale-down md:h-[40em]"
          whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
        />
        <article className="flex flex-col space-y-5 md:w-[40%] md:text-lg/8 overflow-hidden">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
          >
            I'm a <span className="font-bold">full-stack web developer</span>,
            focused on building responsive and user-friendly applications. I
            started with a love for coding and grew curious about how tech
            solves real-world problems. That curiosity led me to explore both
            frontend and backend development, where I found my passion for
            building efficient and scalable systems.
          </motion.p>

          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
          >
            I see myself as a{" "}
            <span className="font-bold">developer-leader hybrid</span>. I
            founded a student organization that trains others in tech and event
            support. I've also represented my region in national hackathons. I'm
            passionate about creating tools that make an impact—and always eager
            to learn, grow, and build meaningful projects.
          </motion.p>

          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="pb-4 md:pb-0"
          >
            My educational background includes a Bachelor of Science in
            Information Technology from Dalubhasaan ng Lungsod ng Lucena, where
            I was recognized as the{" "}
            <span className="font-bold">Most Promising IT Practitioner</span>.
            The experience allowed me to turn concepts learned in the comlabs
            into real technical skills, building a strong foundation in web
            development and problem-solving.
          </motion.p>
        </article>
      </div>
    </section>
  );
};

export default AboutMeSection;
