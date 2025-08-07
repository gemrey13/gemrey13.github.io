import Title from "../ui/Title";
import ProjectItems from "../list/ProjectItems";

const ProjectsSection = () => {
  return (
    <section className="mx-5 mt-14 md:mx-14 md:mt-20 lg:mx-36">
      <Title
        header="Projects"
        linkTitle="Explore my work"
        internalLink="/projects"
      />

      <ProjectItems />
    </section>
  );
};

export default ProjectsSection;
