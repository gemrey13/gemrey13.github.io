import { Link } from "react-router-dom";
import NavItemLink from "./NavItemLink";

const Navbar = () => {
  return (
    <nav className="border-secondary/20 sticky top-2 z-50 mx-auto w-[90%] rounded-full border bg-white/70 text-sm font-semibold shadow-md backdrop-blur backdrop-saturate-150 md:fixed md:top-4 md:left-1/2 md:w-1/2 md:-translate-x-1/2 md:transform md:text-base lg:w-[23%]">
      <div className="mx-4 my-1 flex h-11 items-center justify-around lg:justify-between md:mx-5">
        <Link
          to="/"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#572F2F] text-white"
        >
          GR.
        </Link>

        <ul className="flex space-x-5 text-gray-700 md:space-x-10">
          <li>
            <NavItemLink to="/projects" label="Projects" />
          </li>
          <li>
            <NavItemLink to="/about-me" label="About" />
          </li>
          <li>
            <NavItemLink
              to="/Gem - CV.pdf"
              label="Résumé"
              isExternal={true}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
