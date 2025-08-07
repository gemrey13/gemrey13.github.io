import { FaLink } from "react-icons/fa";

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
    <article className="bg-white transition-shadow duration-300 hover:shadow-xl">
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
    </article>
  );
};

export default EventCard;
