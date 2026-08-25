import { Link } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="404 — Page Not Found"
        description="The page you're looking for doesn't exist."
        noIndex
      />
      <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display text-6xl font-bold md:text-8xl">404</h1>
        <p className="mt-4 text-lg text-text-secondary">
          This page doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-hover"
        >
          Back to Home
        </Link>
      </section>
    </>
  );
}
