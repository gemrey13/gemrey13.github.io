import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import ScrollToTop from "../components/SEO/ScrollToTop";


const MainLayout = () => {
  return (
    <div className="font-ubuntu">
    <ScrollToTop />
      
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
