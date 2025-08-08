import { FaLink } from "react-icons/fa";
import { motion } from "motion/react";

interface EventCardProps {
  image: string;
  title: string;
  mainLink?: string;
  description: string;
  links?: { label: string; url: string }[];
  alt?: string;
}

const EventCard = ({
  image,
  title,
  mainLink,
  description,
  links = [],
  alt,
}: EventCardProps) => {
  return (
    <motion.article
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-white transition-shadow duration-300 hover:shadow-xl"
    >
      <img
        src={image}
        alt={alt || title}
        className="h-60 w-full object-cover"
      />
      <div className="p-5">
        <h2 className="mb-2 text-lg font-semibold">
          {mainLink ? (
            <a
              href={mainLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between transition-all duration-200 hover:underline hover:underline-offset-4"
            >
              {title}
              <FaLink />
            </a>
          ) : (
            title
          )}
        </h2>
        <p className="text-secondary font-droid mb-3 text-sm/relaxed md:text-lg/relaxed">
          {description}
        </p>
        {links.length > 0 && (
          <div className="space-y-1">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="flex items-center gap-2 text-sm hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLink />
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
};

export default EventCard;
