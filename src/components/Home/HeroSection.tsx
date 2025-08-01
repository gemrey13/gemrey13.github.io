import GradPic from "../../assets/photos/Gem Grad Pic.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="grid md:grid-cols-2 min-h-screen">
      {/* Text Section */}
      <div className="h-[30vh] md:h-auto flex flex-col justify-center space-y-6 px-8 m-6 md:m-11">
        <h1 className="text-4xl font-bold">
          Hello, I'm Gem. <br /> Hire Me!
        </h1>
        <p>
          I'm a recent Bachelor in Information Technology graduate with a specialization in web
          development.
        </p>
        <p>Download My Résumé</p>
      </div>

      {/* Image Section */}
      <div className="h-[70vh] md:h-screen relative overflow-hidden">
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
