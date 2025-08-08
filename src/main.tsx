import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about-me" element={<AboutMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </HelmetProvider>,
);
