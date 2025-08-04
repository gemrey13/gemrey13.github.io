import { Link } from "react-router-dom";
import GradPic from "../../assets/photos/Gem Grad Pic.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="grid md:mt-0 md:grid-cols-2 h-screen">
      {/* Text Section */}
      <div className="flex flex-col justify-center space-y-6 mx-5 md:mx-14">
        <h1 className="text-3xl font-bold md:text-5xl">
          Hello, I'm Gem. <br /> Hire Me!
        </h1>

        <p className="text-secondary">
          I'm a recent Bachelor in Information Technology graduate with a
          specialization in web development.
        </p>
        <Link
          to="/Gem Rey Rañola.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link text-xl font-bold underline md:text-2xl"
        >
          Download My Résumé
        </Link>
      </div>

      {/* Image Section */}
      <div className="relative h-[50vh] overflow-hidden md:h-screen">
        <img
          src={GradPic}
          alt="Gem graduation"
          className="h-full w-full object-cover"
        />

        {/* Social Icons */}
        <div className="absolute right-5 bottom-5 flex space-x-6 text-2xl text-white md:text-3xl">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
          <FaTiktok />
          <FaWhatsapp />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
