import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

interface TitleProps {
  header: string;
  linkTitle?: string;
  internalLink?: string;
}

const Title = ({ header, linkTitle, internalLink }: TitleProps) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={
        internalLink && linkTitle ? "flex items-baseline justify-between" : ""
      }
    >
      <h2 className="text-xl font-semibold md:text-3xl">{header}</h2>
      {linkTitle && internalLink ? (
        <Link
          to={internalLink}
          className="hover:text-secondary flex items-center gap-1 text-sm transition-colors duration-300 md:text-base"
        >
          {linkTitle}
          <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      ) : null}
    </motion.div>
  );
};

export default Title;
