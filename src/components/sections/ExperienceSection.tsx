import Title from "../ui/Title";
import GemMiru from "../../assets/photos/Gem Miru Pic.png";
import SystemDemo from "../../assets/photos/System Demo Pic.png";
import SystemPresentation from "../../assets/photos/System Presentation Pic.png";
import { motion } from "motion/react";

const ExperienceSection = () => {
  return (
    <section className="mx-5 mt-14 md:mx-14 md:mt-32 lg:mx-36" id="experience">
      <Title header="Experience" />

      <article className="my-6 flex flex-col-reverse items-center justify-between overflow-hidden md:mx-auto md:my-14 md:flex-row md:space-x-10">
        <img src={GemMiru} alt="Grid Picture of Gem Working onsite." />
        <motion.aside
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="pb-3 text-lg font-semibold md:text-2xl">
            <h3 className="">Canvassing and Consolidation Tech Support</h3>
            <h3>MIRU</h3>
            <h6 className="font-normal md:text-lg">
              <em>May 2025</em>
            </h6>
          </div>

          <div className="font-droid text-secondary flex flex-col space-y-3 pb-3 md:text-lg/8">
            <p>
              In the 2025 National and Local Elections, I was assigned to
              Panukulan, Quezon Province as part of the Canvassing and
              Consolidation System (CCS) Technical Support team. My role focused
              on ensuring a smooth, secure, and compliant canvassing process at
              the municipal level.
            </p>
            <p>
              Following COMELEC's strict no-touch policy, I provided technical
              guidance and real-time monitoring support without directly
              handling any election data or equipment. I assisted election
              officials by helping interpret system prompts, verifying that CCS
              equipment was correctly set up, and coordinating with central IT
              teams to report system statuses or potential issues.
            </p>
            <p>
              This experience sharpened my skills in technical coordination,
              clear communication, and working under pressure in a
              mission-critical environment. It also gave me a deep appreciation
              for the role of technology in supporting transparent and efficient
              democratic processes.
            </p>
          </div>
        </motion.aside>
      </article>

      <article className="my-10 flex flex-col-reverse items-center justify-between overflow-hidden md:mx-auto md:my-14 md:flex-row-reverse md:space-x-10">
        {/* Image Section */}
        <div className="mx-auto flex flex-col items-end md:w-1/2">
          <img
            src={SystemDemo}
            alt="Grid Picture of Gem Working onsite."
            className="w-full max-w-md object-contain"
          />
          <img
            src={SystemPresentation}
            alt="Grid Picture of Gem Working onsite."
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* Text Section */}
        <motion.aside
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between md:w-1/2"
        >
          <div className="pb-3 text-lg font-semibold md:text-2xl">
            <h3>Information Technology Intern</h3>
            <h3>Cooperative Bank of Quezon Province</h3>
            <h6 className="font-normal md:text-lg">
              <em>March 2025 - June 2025</em>
            </h6>
          </div>

          <div className="font-droid text-secondary flex flex-col space-y-3 pb-3 md:text-lg/8">
            <p>
              I developed a Fixed Furniture and Equipment (FFE) Inventory System
              and a Voting System tailored for cooperative governance. These
              projects helped improve internal processes by making asset
              tracking easier and enabling secure, organized voting. I handled
              both front-end and back-end tasks using Django, PostgreSQL, and
              Tailwind CSS. I also worked closely with stakeholders to
              understand requirements and plan the deployment. This experience
              really strengthened my skills in building real-world systems and
              collaborating across different teams.
            </p>

            <p>
              Beyond software development, I was also involved in hardware
              setup, cleaning, maintenance, and troubleshooting. I provided
              technical support for workstations, network devices, and
              peripherals, including setting up network configurations to ensure
              stable connectivity. These tasks helped minimize downtime and
              maintain consistent operational efficiency. This experience
              strengthened my ability to deliver end-to-end solutions and
              deepened my understanding of both software systems and IT
              infrastructure in a real-world organizational setting.
            </p>
          </div>
        </motion.aside>
      </article>
    </section>
  );
};

export default ExperienceSection;
