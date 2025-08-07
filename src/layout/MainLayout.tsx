import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import ScrollToTop from "../components/SEO/ScrollToTop";
import { Suspense } from "react";
import Loader from "../components/ui/Loader";

const MainLayout = () => {
  return (
    <div className="font-ubuntu">
      <ScrollToTop />

      <Navbar />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
