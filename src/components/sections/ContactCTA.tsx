import { motion } from "motion/react";
import { personalInfo } from "@/data/personal";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import ContactForm from "@/components/sections/ContactForm";
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

export default function ContactCTA() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-32 text-center"
      aria-label="Contact"
    >
      <motion.h2
        className="font-display text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl"
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        Have Something Worth Building?
      </motion.h2>

      <motion.p
        className="mt-4 text-lg text-text-secondary md:text-xl"
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Let's make it real.
      </motion.p>

      {/* Contact Form */}
      <motion.div
        className="mt-12 w-full"
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <ContactForm />
      </motion.div>

      {/* Social links */}
      <motion.div
        className="mt-12 flex items-center gap-5"
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {personalInfo.socialLinks.map((link) => {
          const Icon = socialIcons[link.platform];
          return (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-text-tertiary transition-colors hover:text-text-primary"
            >
              {Icon && <Icon size={20} />}
            </a>
          );
        })}
      </motion.div>

      {/* Emails */}
      <motion.div
        className="mt-6 flex flex-col items-center gap-1"
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.4 }}
      >
        {personalInfo.emails.map((email) => (
          <a
            key={email}
            href={`mailto:${email}`}
            className="text-sm text-text-tertiary transition-colors hover:text-text-primary"
          >
            {email}
          </a>
        ))}
      </motion.div>
    </section>
  );
}
