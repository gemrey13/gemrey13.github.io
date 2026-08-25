import { personalInfo } from "@/data/personal";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

const socialIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Facebook: FaFacebook,
  Instagram: FaInstagram,
  TikTok: FaTiktok,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border-subtle px-6 py-8"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        {/* Copyright and tech note */}
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <p className="text-sm text-text-tertiary">
            &copy; {currentYear} {personalInfo.fullName}
          </p>
          <p className="text-xs text-text-muted">
            Built with Love and Care
          </p>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {personalInfo.socialLinks.map((link) => {
            const Icon = socialIcons[link.platform];
            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 text-text-tertiary transition-colors hover:text-text-primary focus-visible:outline-offset-2"
                aria-label={link.label}
              >
                {Icon && <Icon size={16} />}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
