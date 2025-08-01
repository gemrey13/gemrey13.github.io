import { Link } from "react-router-dom";
import FigmaIcon from "../../assets/icon/Figma Icon.png"

const Navbar = () => {
  return (
    <nav className="sticky top-0 mt-5 z-50 w-[30%] mx-auto rounded-full border-secondary border font-semibold">
      <div className="flex justify-between mx-3 items-center h-12 my-1">
        <Link to="/" className="rounded-full bg-[#572F2F] h-10 w-10 text-white  flex items-center justify-center">
          GR.
        </Link>
        <ul className="flex space-x-10 text-gray-700">
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
        <Link to="https://www.figma.com/proto/rFT0FwQwJBW9WQf64oAmJc/E-Portfolio?node-id=74-156&p=f&t=qaIetIH43a5PPoTj-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" className="rounded-full bg-gray-300 h-10 w-10 text-white flex items-center justify-center">
          <img src={FigmaIcon} alt="Figma icon with colors" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
