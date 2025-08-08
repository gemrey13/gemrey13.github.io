import ProjectItems from "../components/list/ProjectItems";
import Head from "../components/SEO/Head";
import MeCoding from "../assets/photos/Gem Coding.png";

const Projects = () => {
  return (
    <>
      <Head
        title="Projects"
        description="Explore Gem Rey's portfolio projects — from cutting-edge web applications to full-stack solutions using React, TypeScript, Django, and more."
        keywords="Gem Rey projects, Gem projects, web development, software engineering, React, TypeScript, Django, Python, portfolio projects, coding"
        image={MeCoding}
      />
      <section className="mx-5 mt-14 md:mx-14 md:mt-36 lg:mx-36">
        <h1 className="text-xl font-semibold md:text-3xl">Projects</h1>
        <ProjectItems />
      </section>
    </>
  );
};

export default Projects;
