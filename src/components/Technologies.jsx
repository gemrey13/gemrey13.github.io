import { RiReactjsLine } from "react-icons/ri";
import { FaPython, FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoDjango } from "react-icons/bi";
import { SiPhp, SiMysql } from "react-icons/si";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.a
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          href="https://react.dev/"
          target="_blank"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </motion.a>
        <motion.a
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          href="https://nodejs.org/en"
          target="_blank"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-5xl text-green-500" />
        </motion.a>
        <motion.a
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          href="https://www.python.org/"
          target="_blank"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaPython className="text-5xl text-violet-500" />
        </motion.a>
        <motion.a
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          href="https://www.djangoproject.com/"
          target="_blank"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoDjango className="text-5xl text-amber-800" />
        </motion.a>
        <motion.a
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          href="https://www.php.net/"
          target="_blank"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPhp className="text-5xl text-cyan-400" />
        </motion.a>
        <motion.a
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          href="https://www.postgresql.org/"
          target="_blank"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoPostgresql className="text-5xl text-sky-700" />
        </motion.a>
        <motion.a
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          href="https://www.mysql.com/"
          target="_blank"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-5xl text-cyan-400" />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Technologies;
