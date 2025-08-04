import { Link } from "react-router-dom";
import FigmaIcon from "../../assets/icon/Figma Icon.png";

const Navbar = () => {
  return (
    <nav className=" border-secondary/20 bg-white/70  shadow-md backdrop-blur backdrop-saturate-150 sticky top-2 z-50 mx-auto w-[90%] rounded-full border  text-sm font-semibold md:fixed md:top-4 md:left-1/2 md:w-1/2 md:-translate-x-1/2 md:transform md:text-base lg:w-[30%]">
      <div className="mx-4 my-1 flex h-11 items-center justify-between md:mx-5">
        <Link
          to="/"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#572F2F] text-white"
        >
          GR.
        </Link>

        <ul className="flex space-x-5 text-gray-700 md:space-x-10">
          <li>
            <Link to="#" className="hover:text-blue-600">
              Projects
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-blue-600">
              Résumé
            </Link>
          </li>
        </ul>

        <Link
          to="https://www.figma.com/proto/rFT0FwQwJBW9WQf64oAmJc/E-Portfolio?node-id=74-156&p=f&t=qaIetIH43a5PPoTj-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-300 md:h-8 md:w-8 lg:h-9 lg:w-9"
        >
          <img
            src={FigmaIcon}
            alt="Figma icon"
            className="h-9 w-9 md:h-8 md:w-8 lg:h-9 lg:w-9"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
