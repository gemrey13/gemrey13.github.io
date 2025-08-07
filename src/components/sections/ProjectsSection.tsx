import Title from "../ui/Title";
import DLLAlumni from "../../assets/photos/dll-alumni 1.png";
import Inventory from "../../assets/photos/inventory 1.png";
import Voting from "../../assets/photos/cbqp-voting 1.png";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  return (
    <section className="mx-5 mt-14 md:mx-14 md:mt-20 lg:mx-36">
      <Title
        header="Projects"
        linkTitle="Explore my work"
        internalLink="/projects"
      />

      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 overflow-hidden md:overflow-visible">
        {/* DLL Alumni Card */}
        <motion.article
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 0 }}
          className="overflow-hidden bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
        >
          <img
            src={DLLAlumni}
            alt="DLL Alumni Portal"
            className="h-60 w-full object-cover"
          />
          <div className="p-5">
            <h2 className="mb-2 text-xl font-semibold">
              DLL Alumni Portal Web App
            </h2>
            <p className="text-secondary font-droid mb-3 text-sm">
              An online portal for alumni in DLL featuring tracer study and
              curriculum analysis.
            </p>
            <p className="text-sm text-blue-600">
              Test Domain: <br />
              <a
                href="https://dll-alumni.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                https://dll-alumni.vercel.app/
              </a>
            </p>
          </div>
        </motion.article>

        {/* Inventory Card */}
        <motion.article
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="overflow-hidden bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
        >
          <img
            src={Inventory}
            alt="CBQP Inventory System"
            className="h-60 w-full object-cover"
          />
          <div className="p-5">
            <h2 className="mb-2 text-xl font-semibold">
              CBQP FFE Inventory System
            </h2>
            <p className="text-secondary font-droid text-sm">
              An inventory management system developed for Cooperative Bank of
              Quezon Province to track Fixed Furniture and Equipment (FFE)
              within the organization.
            </p>
          </div>
        </motion.article>

        {/* Voting System Card */}
        <motion.article
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="overflow-hidden bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
        >
          <img
            src={Voting}
            alt="CBQP Voting System"
            className="h-60 w-full object-cover"
          />
          <div className="p-5">
            <h2 className="mb-2 text-xl font-semibold">CBQP Voting System</h2>
            <p className="text-secondary font-droid text-sm">
              A voting application designed for Cooperative Bank of Quezon
              Province to facilitate cooperative decision-making processes.
            </p>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default ProjectsSection;
