import logo from "../assets/nameLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-48" src={logo} alt="logo" />
      </div>
      <div className="flex items-center justify-center gap-4 m-8 text-xl">
        <a href="https://www.facebook.com/Gem.Rey13" target="_blank">
          <FaFacebook />
        </a>
        <a href="https://github.com/gemrey13" target="_blank">
          <FaGithub />
        </a>
        <FaLinkedin />
        <FaTiktok />
      </div>
    </nav>
  );
};

export default Navbar;
