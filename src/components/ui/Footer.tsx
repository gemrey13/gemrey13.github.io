import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import SocialIconLink from "../SEO/SocialIconLink";

const Footer = () => {
  return (
    <footer className="mt-14 bg-[#2E2E2E] px-5 py-10 text-white md:mt-28 md:px-14 lg:px-36">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
        {/* About Me */}
        <div>
          <h3 className="mb-3 font-bold uppercase">About Me</h3>
          <p className="text-footer mb-4 text-sm/relaxed">
            Recently graduated in Information Technology. Currently looking for
            opportunities in web and software development.
          </p>
          <h4 className="font-droid text-xl font-bold">Code with Gem</h4>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="mb-3 font-bold uppercase">Navigation</h3>
          <ul className="text-footer flex flex-col space-y-3 text-sm">
            <Link
              to="/"
              className="transition-colors duration-300 hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              to="/"
              className="transition-colors duration-300 hover:text-gray-300"
            >
              About Me
            </Link>
            <HashLink
            smooth
              to="/#experience"
              className="transition-colors duration-300 hover:text-gray-300"
            >
              Experience
            </HashLink>
            <Link
              to="/Gem Rey Rañola.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-gray-300"
            >
              Résumé
            </Link>
            <Link
              to="/"
              className="transition-colors duration-300 hover:text-gray-300"
            >
              Blog
            </Link>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h3 className="mb-3 font-bold uppercase">Contacts</h3>
          <ul className="text-footer space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MdEmail /> gemreyranola@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MdEmail /> gemreybandol@gmail.com
            </li>
            <li>
              <Link
                to="https://linkedin.com/in/codewgem"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="Visit my LinkedIn profile"
                className="text-white underline hover:text-gray-300"
              >
                Connect on LinkedIn
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Me */}
        <div>
          <h3 className="mb-3 font-bold uppercase">Follow Me Here</h3>
          <div className="flex gap-4 text-lg text-white">
            <SocialIconLink
              href="https://facebook.com/codewgem"
              label="Visit my Facebook profile"
              title="Facebook"
            >
              <FaFacebookF />
            </SocialIconLink>

            <SocialIconLink
              href="https://instagram.com/codewgem"
              label="Visit my Instagram profile"
              title="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>

            <SocialIconLink
              href="https://linkedin.com/in/codewgem"
              label="Visit my LinkedIn profile"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </SocialIconLink>

            <SocialIconLink
              href="https://tiktok.com/@codewgem"
              label="Visit my TikTok profile"
              title="TikTok"
            >
              <FaTiktok />
            </SocialIconLink>

            <SocialIconLink
              href="/"
              label="Chat with me on WhatsApp"
              title="WhatsApp"
            >
              <FaWhatsapp />
            </SocialIconLink>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 flex flex-col items-center justify-between border-t border-gray-600 pt-4 text-sm text-gray-400 md:flex-row">
        <p>
          Coded & designed by{" "}
          <span className="font-semibold text-white">Gem Rey Rañola</span> | ©
          2025
        </p>
        <Link
          to="https://linkedin.com/in/codewgem"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="Visit my LinkedIn profile"
          className="mt-2 text-white underline md:mt-0"
        >
          Connect on <strong>LinkedIn</strong>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
