import React from "react";

interface SocialIconLinkProps {
  href: string;
  label: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}

const SocialIconLink = ({
  href,
  label,
  title,
  className = "",
  children,
}: SocialIconLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={title}
      title={label}
      className={`transition-colors duration-300 hover:text-gray-300 ${className}`}
    >
      {children}
    </a>
  );
};

export default SocialIconLink;
