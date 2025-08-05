import { Link } from "react-router-dom";

interface TitleProps {
  header: string;
  linkTitle?: string;
  internalLink?: string;
}

const Title = ({ header, linkTitle, internalLink }: TitleProps) => {
  return (
    <div className={internalLink && linkTitle ? "flex items-baseline justify-between" : ""}>
      <h2 className="text-xl md:text-3xl font-semibold">{header}</h2>
      {linkTitle && internalLink ? (
        <Link to={internalLink} className="underline text-sm md:text-base">{linkTitle}</Link>
      ) : null}
    </div>
  );
};

export default Title;
