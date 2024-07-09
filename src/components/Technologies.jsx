import { RiReactjsLine } from "react-icons/ri";
import { FaPython, FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoDjango } from "react-icons/bi";
import { SiPhp, SiMysql } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="https://react.dev/"
          target="_blank"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </a>
        <a
          href="https://nodejs.org/en"
          target="_blank"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-5xl text-green-500" />
        </a>
        <a
          href="https://www.python.org/"
          target="_blank"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaPython className="text-5xl text-violet-500" />
        </a>
        <a
          href="https://www.djangoproject.com/"
          target="_blank"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoDjango className="text-5xl text-amber-800" />
        </a>
        <a
          href="https://www.php.net/"
          target="_blank"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPhp className="text-5xl text-cyan-400" />
        </a>
        <a
          href="https://www.postgresql.org/"
          target="_blank"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoPostgresql className="text-5xl text-sky-700" />
        </a>
        <a
          href="https://www.mysql.com/"
          target="_blank"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-5xl text-cyan-400" />
        </a>
      </div>
    </div>
  );
};

export default Technologies;
