import { Link } from "react-router-dom";
import GradPic from "../../assets/photos/Gem Grad Pic.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import SocialIconLink from "../SEO/SocialIconLink";

const HeroSection = () => {
  return (
    <section className="grid h-screen md:mt-0 md:grid-cols-2">
      {/* Text Section */}
      <div className="mx-5 flex flex-col justify-center space-y-6 md:mx-14">
        <h1 className="text-2xl font-semibold md:text-5xl">
          Hello, I'm Gem. <br /> Hire Me!
        </h1>

        <p className="text-secondary text-sm md:text-lg">
          I'm a recent Bachelor in Information Technology <br />
          graduate with a specialization in web development.
        </p>
        <Link
          to="/Gem Rey Rañola.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link text-lg font-semibold underline md:text-2xl"
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
          <SocialIconLink
            href="https://facebook.com/codewgem"
            label="Visit my Facebook profile"
            title="Facebook"
          >
            <FaFacebook />
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
            <FaLinkedin />
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
    </section>
  );
};

export default HeroSection;
