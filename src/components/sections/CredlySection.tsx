import CredlyEmbedBadge from "../ui/CredlyBadge";
import { motion } from "motion/react";

const CredlySection = () => {
  return (
    <section className="mx-5 mt-14 h-auto md:mx-14 md:mt-32 lg:mx-36">
      <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 max-w-4xl mx-auto"
        >
          
          {/* Badge Card 1 */}
          <div className="w-full sm:w-auto transition-all duration-300 transform hover:-translate-y-1 flex justify-center min-w-[200px]">
            <CredlyEmbedBadge badgeId="cf7c65e2-f170-40d4-a26e-fc70c51cb612" />
          </div>

          {/* Badge Card 2 */}
          <div className="w-full sm:w-auto transition-all duration-300 transform hover:-translate-y-1 flex justify-center min-w-[200px]">
            <CredlyEmbedBadge badgeId="e79a7b25-5c2f-4ecf-8769-d4ba497fa0a9" />
          </div>

        </motion.div>
    </section>
  );
};

export default CredlySection;
