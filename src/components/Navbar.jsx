import logo from "../assets/nameLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="hidden lg:flex flex-shrink-0 items-center">
        <img className="mx-2 w-48" src={logo} alt="logo" />
      </div>
      <div className="sm:hidden flex flex-shrink-0 items-center">
        <h2 className="text-2xl font-semibold">GG</h2>
      </div>
      <div className="flex items-center justify-center gap-4 m-8 text-xl">
        <a href="https://www.facebook.com/Gem.Rey13" target="_blank">
          <FaFacebook />
        </a>
        <a href="https://github.com/gemrey13" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/gem-rey-ra%C3%B1ola-99a61b2a9/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://www.tiktok.com/@codewgem" target="_blank">
          <FaTiktok />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
