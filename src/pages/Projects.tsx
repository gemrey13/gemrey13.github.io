import ProjectItems from "../components/list/ProjectItems";
import Head from "../components/SEO/Head";
import MeCoding from "../assets/photos/Gem Coding.png";

const Projects = () => {
  return (
    <>
      <Head
        title="Featured Projects | Code with Gem"
        description="A showcase of full-stack and systems engineering projects by Gem Rey, bridging robust backend automation with responsive, cloud-ready user interfaces."
        keywords="Gem Rey, full-stack projects, software development showcase, Python automation, React components, developer tools, web security audits, database schemas"
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
