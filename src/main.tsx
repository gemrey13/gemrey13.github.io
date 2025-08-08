import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./assets/css/index.css";
import AppRouter from "./AppRouter";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <AppRouter />
  </HelmetProvider>,
);
