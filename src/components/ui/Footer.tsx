import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="mt-14 bg-[#2E2E2E] px-5 py-10 text-white md:px-14 md:mt-32 lg:px-36">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
        {/* About Me */}
        <div>
          <h3 className="mb-3 font-bold uppercase">About Me</h3>
          <p className="mb-4 text-sm text-gray-300">
            Recently graduated in Information Technology. Currently looking for
            opportunities in web and software development.
          </p>
          <h4 className="font-droid text-xl font-bold">Code with Gem</h4>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="mb-3 font-bold uppercase">Navigation</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Home</li>
            <li>About Me</li>
            <li>Experience</li>
            <li>Résumé</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h3 className="mb-3 font-bold uppercase">Contacts</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <MdEmail /> gemreyranola@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MdEmail /> gemreybandol@gmail.com
            </li>
            <li>
              <a href="#" className="text-white underline hover:text-gray-300">
                Connect on LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Me */}
        <div>
          <h3 className="mb-3 font-bold uppercase">Follow Me Here</h3>
          <div className="flex gap-4 text-lg text-white">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaTiktok />
            <FaWhatsapp />
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
        <a href="#" className="mt-2 text-white underline md:mt-0">
          Connect on <strong>LinkedIn</strong>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
