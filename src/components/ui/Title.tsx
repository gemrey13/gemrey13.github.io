import { Link } from "react-router-dom";

interface TitleProps {
  header: string;
  linkTitle?: string;
  internalLink?: string;
}

const Title = ({ header, linkTitle, internalLink }: TitleProps) => {
  return (
    <div>
      <h2 className="text-lg md:text-3xl font-semibold">{header}</h2>
      {linkTitle && internalLink ? (
        <Link to={internalLink}>{linkTitle}</Link>
      ) : null}
    </div>
  );
};

export default Title;
