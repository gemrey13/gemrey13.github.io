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
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Direction = number;

const texts = [
  "Nice to meet you!",
  "Powered by Chocolate ☕.",
  "Hire me, please 🙏!",
  "Full-Stack Developer 🧑‍💻.",
  "Code. Sleep. Repeat.",
  "I Break, Then Fix.",
  "Code > Sleep!",
];

const variants = {
  enter: (direction: Direction) => {
    direction;
    return {
      y: -20,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
  },
  exit: (direction: Direction) => {
    direction;
    return {
      zIndex: 0,
      opacity: 0,
    };
  },
};

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      let next = index + 1;
      if (next === texts.length) {
        next = 0;
      }
      setIndex(next);
    }, 3 * 1000);
  }, [index, setIndex]);

  return (
    <section className="grid mt-4 h-[80%] md:mt-0 md:grid-cols-2">
      {/* Text Section */}
      <div className="mx-5 my-8 flex flex-col justify-center space-y-6 md:mx-14 lg:ml-24">
        <h1 className="relative pb-8 text-2xl font-semibold md:pb-12 md:text-3xl lg:text-5xl">
          Hello, I'm Gem. <br />
          <AnimatePresence>
            <motion.span
              className="absolute"
              variants={variants}
              key={index}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                y: { type: "keyframes", stiffness: 300, damping: 200 },
                opacity: { duration: 0.1 },
              }}
            >
              {texts[index]}
            </motion.span>
          </AnimatePresence>
        </h1>

        <p className="text-secondary text-sm md:text-md lg:text-lg">
          I'm a recent Bachelor in Information Technology <br />
          graduate with a specialization in web development.
        </p>
        <Link
          to="/Gem Rey Rañola.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link w-fit text-lg font-semibold underline md:text-lg lg:text-2xl"
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
        <div className="absolute right-5 bottom-5 flex space-x-3 text-2xl text-white md:text-3xl">
          <SocialIconLink
            href="https://facebook.com/codewgem"
            label="Visit my Facebook profile"
            title="Facebook"
          >
            <FaFacebook className="text-xl md:text-3xl"/>
          </SocialIconLink>

          <SocialIconLink
            href="https://instagram.com/codewgem"
            label="Visit my Instagram profile"
            title="Instagram"
          >
            <FaInstagram className="text-xl md:text-3xl" />
          </SocialIconLink>

          <SocialIconLink
            href="https://linkedin.com/in/codewgem"
            label="Visit my LinkedIn profile"
            title="LinkedIn"
          >
            <FaLinkedin className="text-xl md:text-3xl" />
          </SocialIconLink>

          <SocialIconLink
            href="https://tiktok.com/@codewgem"
            label="Visit my TikTok profile"
            title="TikTok"
          >
            <FaTiktok className="text-xl md:text-3xl" />
          </SocialIconLink>

          <SocialIconLink
            href="/"
            label="Chat with me on WhatsApp"
            title="WhatsApp"
          >
            <FaWhatsapp className="text-xl md:text-3xl" />
          </SocialIconLink>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
