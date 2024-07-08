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
        <FaFacebook />
        <FaGithub />
        <FaLinkedin />
        <FaTiktok />
      </div>
    </nav>
  );
};

export default Navbar;
