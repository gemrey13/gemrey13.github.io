import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
      className={
        internalLink && linkTitle ? "flex items-baseline justify-between" : ""
      }
    >
      <h2 className="text-xl font-semibold md:text-3xl">{header}</h2>
      {linkTitle && internalLink ? (
        <Link to={internalLink} className="text-sm underline md:text-base">
          {linkTitle}
        </Link>
      ) : null}
    </motion.div>
  );
};

export default Title;
