import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Navbar";

const MainLayout = () => {
  return (
    <div className="font-ubuntu">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
