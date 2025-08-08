import DLLAlumni from "../../assets/photos/dll-alumni 1.png";
import Inventory from "../../assets/photos/inventory 1.png";
import Voting from "../../assets/photos/cbqp-voting 1.png";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const ProjectItems = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768); // md breakpoint
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    {
      img: DLLAlumni,
      alt: "DLL Alumni Portal",
      title: "DLL Alumni Portal Web App",
      desc: "An online portal for alumni in DLL featuring tracer study and curriculum analysis.",
      link: "https://dll-alumni.vercel.app/",
    },
    {
      img: Inventory,
      alt: "CBQP Inventory System",
      title: "CBQP FFE Inventory System",
      desc: "An inventory management system developed for Cooperative Bank of Quezon Province to track Fixed Furniture and Equipment (FFE) within the organization.",
    },
    {
      img: Voting,
      alt: "CBQP Voting System",
      title: "CBQP Voting System",
      desc: "A voting application designed for Cooperative Bank of Quezon Province to facilitate cooperative decision-making processes.",
    },
  ];

  return (
    <div className="mt-8 grid gap-8 overflow-x-hidden py-6 md:grid-cols-2 md:overflow-visible lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.article
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.2,
            delay: isDesktop ? 0.2 * ((index % 3) + 1) : 0.2,
          }}
          viewport={{ once: true }}
          className="bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
        >
          <img
            src={project.img}
            alt={project.alt}
            className="h-60 w-full object-cover"
          />
          <div className="p-5">
            <h2 className="mb-2 text-xl font-semibold">{project.title}</h2>
            <p className="text-secondary font-droid mb-3 text-sm/relaxed">
              {project.desc}
            </p>
            {project.link && (
              <p className="text-sm text-blue-600">
                Test Domain: <br />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {project.link}
                </a>
              </p>
            )}
          </div>
        </motion.article>
      ))}
    </div>
  );
};

export default ProjectItems;
