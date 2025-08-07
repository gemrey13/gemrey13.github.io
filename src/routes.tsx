import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import Projects from "./pages/Projects";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
    </>
  )
);
