import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MusicToggle from "../ui/MusicToggle";
import ScrollToTop from "@/components/seo/ScrollToTop";

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Skip to main content — accessibility */}
      <a
        href="#main-content"
        className="fixed top-0 left-0 z-100 -translate-y-full rounded-br-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-transform focus:translate-y-0"
      >
        Skip to main content
      </a>

      <ScrollToTop />
      <Navbar />

      <main id="main-content" className="flex-1" role="main">
        <Outlet />
      </main>

      <Footer />
      <MusicToggle />
    </div>
  );
}
