import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { navItems } from "@/data/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Track scroll for backdrop effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-border-subtle bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <Link
          to="/"
          className="font-display text-xl font-bold tracking-tight text-text-primary transition-opacity hover:opacity-80 focus-visible:outline-offset-4"
          aria-label="Gem Rey Rañola — Home"
        >
          Code with Gem
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 md:flex" role="list">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-offset-2 ${
                  isActive(item.path)
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
                aria-current={isActive(item.path) ? "page" : undefined}
              >
                {item.label}
                {isActive(item.path) && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-3 right-3 h-px bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-md md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="flex flex-col gap-1.5">
            <motion.span
              className="block h-0.5 w-6 rounded-full bg-text-primary"
              animate={{
                rotate: mobileMenuOpen ? 45 : 0,
                y: mobileMenuOpen ? 4 : 0,
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-0.5 w-6 rounded-full bg-text-primary"
              animate={{
                rotate: mobileMenuOpen ? -45 : 0,
                y: mobileMenuOpen ? -4 : 0,
              }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 flex items-center justify-center bg-background/98 backdrop-blur-sm"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <nav aria-label="Mobile navigation">
                <ul className="flex flex-col items-center gap-6" role="list">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.path}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.04, duration: 0.3 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`font-display block rounded-md px-4 py-2 text-2xl font-medium transition-colors focus-visible:outline-offset-2 ${
                          isActive(item.path)
                            ? "text-text-primary"
                            : "text-text-secondary hover:text-text-primary"
                        }`}
                        aria-current={isActive(item.path) ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
