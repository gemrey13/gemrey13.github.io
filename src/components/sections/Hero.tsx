import { lazy, Suspense, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "motion/react";
import { personalInfo } from "@/data/personal";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useTypewriter } from "@/hooks/useTypewriter";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";
import InteractivePhoto from "@/components/ui/InteractivePhoto";
import gemCoding from "@/assets/photos/Gem Coding.png";

// Lazy load 3D scene — only loads when needed (progressive enhancement)
const HeroScene = lazy(() => import("@/components/three/HeroScene"));

const socialIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Facebook: FaFacebook,
  Instagram: FaInstagram,
  TikTok: FaTiktok,
};

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const containerRef = useRef<HTMLElement>(null);

  // Track raw mouse position for 3D scene
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse tracking for 2D parallax + photo tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring-smoothed values for natural movement
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Parallax layers at different depths
  const layer1X = useSpring(
    useMotionValue(0),
    { stiffness: 50, damping: 20 },
  );
  const layer1Y = useSpring(
    useMotionValue(0),
    { stiffness: 50, damping: 20 },
  );
  const layer2X = useSpring(
    useMotionValue(0),
    { stiffness: 50, damping: 20 },
  );
  const layer2Y = useSpring(
    useMotionValue(0),
    { stiffness: 50, damping: 20 },
  );

  // Typewriter effect for role text
  const { text: typewriterText } = useTypewriter(personalInfo.subtitleRoles, {
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseDuration: 2000,
    pauseBeforeTyping: 500,
    disabled: prefersReducedMotion,
  });

  // Tagline cycling (separate rhythm from roles)
  const [taglineIndex, setTaglineIndex] = useState(0);
  const taglines = personalInfo.heroTaglines;

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [taglines.length, prefersReducedMotion]);

  // Mouse move handler — feeds 2D parallax, 3D scene, and photo tilt
  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    setMousePos({ x, y });

    // Update parallax layers
    layer1X.set(x * -30);
    layer1Y.set(y * -20);
    layer2X.set(x * -16);
    layer2Y.set(y * -10);
  };

  // Whether to show 3D (not on mobile, not reduced motion)
  const show3D = !prefersReducedMotion && !isMobile;

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20 md:pt-0"
      aria-label="Hero introduction"
    >
      {/* 3D Scene — progressive enhancement, lazy loaded */}
      {show3D && (
        <Suspense fallback={null}>
          <HeroScene mouseX={mousePos.x} mouseY={mousePos.y} />
        </Suspense>
      )}

      {/* 2D Background depth layers (visible on all devices) */}
      {!prefersReducedMotion && (
        <>
          {/* Grid layer - deepest */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{ x: layer1X, y: layer1Y }}
            aria-hidden="true"
          >
            <div className="absolute inset-0 opacity-[0.03]">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: "80px 80px",
                }}
              />
            </div>
          </motion.div>

          {/* Gradient orbs - middle depth */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{ x: layer2X, y: layer2Y }}
            aria-hidden="true"
          >
            <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
            <div className="absolute right-1/4 bottom-1/3 h-72 w-72 rounded-full bg-indigo-500/3 blur-3xl" />
          </motion.div>
        </>
      )}

      {/* Main content — split layout on desktop */}
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-6 md:flex-row md:items-center md:justify-between md:gap-16">
        {/* Left side — text content */}
        <div className="text-center md:text-left">
          {/* Full name — introduces the person */}
          <motion.p
            className="font-display text-sm tracking-[0.3em] text-text-secondary uppercase md:text-base"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {personalInfo.fullName}
          </motion.p>

          {/* Brand name — dominant */}
          <motion.h1
            className="font-display mt-2 text-[clamp(2.5rem,10vw,7rem)] leading-none font-bold tracking-tighter"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Code with Gem
          </motion.h1>

          {/* Role typewriter */}
          <motion.div
            className="mt-4 flex h-8 items-center overflow-hidden md:mt-6"
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="font-display text-lg tracking-widest text-text-secondary uppercase">
              {typewriterText}
              {!prefersReducedMotion && (
                <span className="animate-blink ml-0.5 inline-block text-accent">
                  |
                </span>
              )}
            </p>
          </motion.div>

          {/* Personal statement */}
          <motion.p
            className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-text-secondary md:mx-0 md:mt-8 md:text-lg"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            I build software that solves complicated problems.
            <br className="hidden sm:block" />
            Focused on performance, usability, and long-term impact.
          </motion.p>

          {/* CTA + Social */}
          <motion.div
            className="mt-6 flex flex-col items-center gap-6 sm:flex-row md:mt-10 md:justify-start"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <a
              href="/Gem - CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/80 px-6 py-3 text-sm font-medium text-text-primary backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-surface-elevated"
            >
              View CV
              <span aria-hidden="true">&darr;</span>
            </a>

            <div className="flex items-center gap-4">
              {personalInfo.socialLinks.map((link) => {
                const Icon = socialIcons[link.platform];
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-text-tertiary transition-colors hover:text-text-primary"
                  >
                    {Icon && <Icon size={18} />}
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Right side — photo with interactive tilt */}
        <div className="w-full max-w-[240px] shrink-0 sm:max-w-sm md:max-w-md">
          <InteractivePhoto
            src={gemCoding}
            alt="Gem coding at a desk"
            intensity={10}
            entranceStyle="cinematic"
            entranceDelay={1.0}
            interactive={!isMobile}
            externalMouse={
              !isMobile && !prefersReducedMotion
                ? { x: smoothX, y: smoothY }
                : undefined
            }
            loading="eager"
            animateOnMount
            className="aspect-4/5"
          />
        </div>
      </div>

      {/* Hero tagline — playful cycling text at the bottom */}
      <motion.div
        className="absolute bottom-20 left-1/2 h-6 -translate-x-1/2 overflow-hidden"
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        {prefersReducedMotion ? (
          <p className="text-xs italic text-text-muted">
            {taglines[0]}
          </p>
        ) : (
          <AnimatePresence mode="wait">
            <motion.p
              key={taglineIndex}
              className="text-xs italic text-text-muted"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              {taglines[taglineIndex]}
            </motion.p>
          </AnimatePresence>
        )}
      </motion.div>

      {/* Scroll indicator */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          aria-hidden="true"
        >
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <span className="text-xs tracking-widest text-text-muted uppercase">
              Scroll
            </span>
            <div className="h-6 w-px bg-linear-to-b from-text-muted to-transparent" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
