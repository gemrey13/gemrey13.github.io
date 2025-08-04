import { Link } from "react-router-dom";
import GradPic from "../../assets/photos/Gem Grad Pic.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp } from "react-icons/fa";

const HeroSection = () => {
  return (
      <section className="mt-20 md:mt-0 grid md:grid-cols-2 min-h-screen">

      {/* Text Section */}
      <div className="h-[10vh] md:h-auto flex flex-col justify-center space-y-6 ">
        <h1 className="text-3xl md:text-5xl font-bold">
          Hello, I'm Gem. <br /> Hire Me!
        </h1>

        <p className="text-secondary">
          I'm a recent Bachelor in Information Technology graduate with a specialization in web
          development.
        </p>
        <Link to="" target="_blank" rel="noopener noreferrer" className="text-link underline font-bold text-xl md:text-2xl">Download My Résumé</Link>
      </div>

      {/* Image Section */}
      <div className="h-[50vh] md:h-screen relative overflow-hidden">
        <img src={GradPic} alt="Gem graduation" className="h-full w-full object-cover" />

        {/* Social Icons */}
        <div className="absolute bottom-5 right-5 flex space-x-6 text-white text-2xl md:text-3xl">
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
