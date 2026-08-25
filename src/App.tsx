import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Loader from "./components/ui/Loader";

// Lazy-loaded pages for code splitting
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Work = lazy(() => import("./pages/Work"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Events = lazy(() => import("./pages/Events"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Lab = lazy(() => import("./pages/Lab"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="work"
          element={
            <Suspense fallback={<Loader />}>
              <Work />
            </Suspense>
          }
        />
        <Route
          path="projects"
          element={
            <Suspense fallback={<Loader />}>
              <Projects />
            </Suspense>
          }
        />
        <Route
          path="projects/:slug"
          element={
            <Suspense fallback={<Loader />}>
              <ProjectDetail />
            </Suspense>
          }
        />
        <Route
          path="events"
          element={
            <Suspense fallback={<Loader />}>
              <Events />
            </Suspense>
          }
        />
        <Route
          path="blog"
          element={
            <Suspense fallback={<Loader />}>
              <Blog />
            </Suspense>
          }
        />
        <Route
          path="blog/:slug"
          element={
            <Suspense fallback={<Loader />}>
              <BlogPost />
            </Suspense>
          }
        />
        <Route
          path="lab"
          element={
            <Suspense fallback={<Loader />}>
              <Lab />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<Loader />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
