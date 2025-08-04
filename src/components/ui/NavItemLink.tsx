import { Link } from "react-router-dom";

interface NavItemLinkProps {
  to: string;
  label: string;
  isExternal?: boolean;
  className?: string;
}

const NavItemLink = ({
  to,
  label,
  isExternal = false,
  className = "",
}: NavItemLinkProps) => {
  if (isExternal) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`hover:text-blue-500 transition-colors duration-300 ${className}`}
      >
        {label}
      </a>
    );
  }

  return (
    <Link to={to} className={`hover:text-blue-500 transition-colors duration-300 ${className}`}>
      {label}
    </Link>
  );
};

export default NavItemLink;
