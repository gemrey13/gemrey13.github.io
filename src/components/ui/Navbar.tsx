import { Link } from "react-router-dom";
import FigmaIcon from "../../assets/icon/Figma Icon.png";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-1/2 lg:w-[30%] rounded-full border border-secondary bg-white font-semibold text-sm md:text-base">
      <div className="flex justify-between items-center mx-4 md:mx-5 h-11 my-1">
        <Link
          to="/"
          className="rounded-full bg-[#572F2F] h-9 w-9 text-white flex items-center justify-center">
          GR.
        </Link>

        <ul className="flex space-x-5 md:space-x-10 text-gray-700">
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
          className="rounded-full bg-gray-300 h-9 w-9 md:h-8 md:w-8 lg:h-9 lg:w-9 flex items-center justify-center">
          <img src={FigmaIcon} alt="Figma icon" className="h-9 w-9 md:h-8 md:w-8 lg:h-9 lg:w-9" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
