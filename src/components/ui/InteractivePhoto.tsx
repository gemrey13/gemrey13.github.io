import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface InteractivePhotoProps {
  src: string;
  alt: string;
  /** Tilt intensity in degrees (default: 10 for medium) */
  intensity?: number;
  /** Entrance animation style */
  entranceStyle?: "cinematic" | "fade";
  /** Delay before entrance animation starts (seconds) */
  entranceDelay?: number;
  /** Whether the photo responds to mouse interaction */
  interactive?: boolean;
  /** External mouse position values (normalized -0.5 to 0.5) */
  externalMouse?: { x: MotionValue<number>; y: MotionValue<number> };
  /** Additional CSS classes */
  className?: string;
  /** Image loading strategy */
  loading?: "eager" | "lazy";
  /** Animate on mount instead of waiting for viewport intersection (use for above-fold content) */
  animateOnMount?: boolean;
}

/**
 * InteractivePhoto — an animated photo component with cinematic entrance,
 * interactive 3D tilt, dynamic lighting, and accent glow.
 *
 * Supports both self-tracked mouse (hover on container) and externally
 * provided mouse values for integration with parent tracking.
 *
 * Respects prefers-reduced-motion: renders a static photo with no animation.
 */
export default function InteractivePhoto({
  src,
  alt,
  intensity = 10,
  entranceStyle = "cinematic",
  entranceDelay = 0,
  interactive = true,
  externalMouse,
  className = "",
  loading = "lazy",
  animateOnMount = false,
}: InteractivePhotoProps) {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Self-tracked mouse values (used when no external mouse is provided)
  const selfMouseX = useMotionValue(0);
  const selfMouseY = useMotionValue(0);

  // Choose which mouse source to use
  const mouseX = externalMouse?.x ?? selfMouseX;
  const mouseY = externalMouse?.y ?? selfMouseY;

  // Spring-smoothed for natural movement
  const springConfig = { stiffness: 150, damping: 20 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Transform mouse position to rotation (medium intensity: 8-12 degrees)
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-intensity, intensity]);
  const rotateX = useTransform(
    smoothY,
    [-0.5, 0.5],
    [intensity * 0.8, -intensity * 0.8],
  );

  // Dynamic lighting — gradient position shifts with tilt
  const lightX = useTransform(smoothX, [-0.5, 0.5], [30, 70]);
  const lightY = useTransform(smoothY, [-0.5, 0.5], [30, 70]);

  // Glow shadow offset
  const glowX = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], [-6, 6]);

  // Dynamic lighting background (combine lightX and lightY)
  const lightingBackground = useTransform(
    [lightX, lightY] as MotionValue[],
    ([x, y]: number[]) => {
      const px = x ?? 50;
      const py = y ?? 50;
      return `radial-gradient(ellipse at ${px}% ${py}%, rgba(99, 102, 241, 0.12) 0%, transparent 60%)`;
    },
  );

  // Edge highlight box-shadow
  const edgeHighlight = useTransform(
    [smoothX, smoothY] as MotionValue[],
    ([x, y]: number[]) => {
      const offsetX = (x ?? 0) * 4;
      const offsetY = (y ?? 0) * 4;
      return `inset ${offsetX}px ${offsetY}px 20px rgba(99, 102, 241, 0.06)`;
    },
  );

  // Handle self-tracked mouse movement
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!interactive || externalMouse || prefersReducedMotion) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    selfMouseX.set(x);
    selfMouseY.set(y);
  };

  const handleMouseLeave = () => {
    if (!interactive || externalMouse) return;
    selfMouseX.set(0);
    selfMouseY.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    if (!interactive || externalMouse) return;
    setIsHovered(true);
  };

  // Reduced motion — render static photo
  if (prefersReducedMotion) {
    return (
      <div className={`relative ${className}`}>
        <div className="overflow-hidden rounded-lg border border-border">
          <img
            src={src}
            alt={alt}
            loading={loading}
            className="block h-full w-full object-cover"
          />
        </div>
      </div>
    );
  }

  // Entrance animation variants
  const cinematicEntrance = {
    initial: {
      clipPath: "inset(100% 0 0 0)",
      opacity: 0,
      scale: 1.05,
    },
    animate: {
      clipPath: "inset(0% 0 0 0)",
      opacity: 1,
      scale: 1,
    },
  };

  const fadeEntrance = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const entrance =
    entranceStyle === "cinematic" ? cinematicEntrance : fadeEntrance;

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Accent glow behind the photo */}
      <motion.div
        className="absolute -inset-3 rounded-xl bg-accent/10 blur-2xl"
        style={{
          x: glowX,
          y: glowY,
        }}
        animate={{
          opacity: isHovered || externalMouse ? 0.6 : 0.3,
        }}
        transition={{ duration: 0.3 }}
        aria-hidden="true"
      />

      {/* Main photo container with 3D tilt */}
      <motion.div
        className="relative overflow-hidden rounded-lg border border-border/50"
        style={
          interactive
            ? {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }
            : undefined
        }
        initial={entrance.initial}
        {...(animateOnMount
          ? { animate: entrance.animate }
          : { whileInView: entrance.animate, viewport: { once: true, margin: "-50px" } }
        )}
        transition={{
          duration: entranceStyle === "cinematic" ? 1.0 : 0.6,
          delay: entranceDelay,
          ease: [0.25, 0.46, 0.45, 0.94],
          clipPath: {
            duration: 1.2,
            delay: entranceDelay,
            ease: [0.77, 0, 0.175, 1],
          },
        }}
      >
        {/* The actual image */}
        <img
          src={src}
          alt={alt}
          loading={loading}
          className="block h-full w-full object-cover"
          draggable={false}
        />

        {/* Dynamic lighting overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{ background: lightingBackground }}
          aria-hidden="true"
        />

        {/* Edge highlight that shifts with tilt */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-lg"
          style={{ boxShadow: edgeHighlight }}
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
}
