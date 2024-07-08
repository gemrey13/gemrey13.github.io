import { RiReactjsLine } from "react-icons/ri";
import { FaPython, FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoDjango } from "react-icons/bi";
import { SiPhp, SiMysql } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-5xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPython className="text-5xl text-violet-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoDjango className="text-5xl text-amber-800" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPhp className="text-5xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoPostgresql className="text-5xl text-sky-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-5xl text-cyan-400" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
