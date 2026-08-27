import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface PhoneMockupProps {
  /** "compact" for bento grid card, "large" for detail page hero */
  size?: "compact" | "large";
  className?: string;
}

/**
 * A realistic phone mockup displaying Outpace's GPS tracking UI.
 * Renders a dark phone frame with a HUD (distance, pace, time),
 * a mini map with SVG route, and play/pause controls.
 */
export default function PhoneMockup({
  size = "large",
  className = "",
}: PhoneMockupProps) {
  const prefersReducedMotion = useReducedMotion();

  const isCompact = size === "compact";

  // Scale classes based on size
  const frameScale = isCompact
    ? "w-[180px] md:w-[200px]"
    : "w-[240px] md:w-[280px]";

  return (
    <div
      className={`flex items-center justify-center ${className}`}
      role="img"
      aria-label="Outpace app running tracker shown in a phone mockup — displays distance, pace, elapsed time, a GPS route map, and playback controls"
    >
      {/* Phone frame */}
      <motion.div
        className={`relative ${frameScale}`}
        initial={prefersReducedMotion ? {} : { y: 10, opacity: 0 }}
        animate={prefersReducedMotion ? {} : { y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Phone outer shell */}
        <div className="relative rounded-[2.5rem] border-[3px] border-zinc-700 bg-zinc-900 p-2 shadow-2xl shadow-black/40">
          {/* Notch */}
          <div
            className="absolute top-0 left-1/2 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-zinc-900"
            aria-hidden="true"
          />

          {/* Screen */}
          <div className="relative overflow-hidden rounded-[2rem] bg-zinc-950">
            {/* Fake app content */}
            <div className="flex flex-col px-4 pt-8 pb-4">
              {/* Mini HUD */}
              <div className="mb-4 rounded-xl bg-zinc-900/80 p-3 backdrop-blur-sm" aria-hidden="true">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-lg font-bold leading-tight text-white md:text-xl">
                      3.24
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-zinc-500">
                      km
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-bold leading-tight text-white md:text-xl">
                      5:42
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-zinc-500">
                      pace
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-bold leading-tight text-white md:text-xl">
                      18:32
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-zinc-500">
                      time
                    </p>
                  </div>
                </div>
              </div>

              {/* Mini map placeholder */}
              <div
                className="relative mb-4 aspect-square overflow-hidden rounded-xl bg-zinc-900/60"
                aria-hidden="true"
              >
                {/* Route line */}
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 h-full w-full"
                  fill="none"
                >
                  {/* Grid lines for map feel */}
                  <line
                    x1="0"
                    y1="25"
                    x2="100"
                    y2="25"
                    stroke="rgba(63, 63, 70, 0.3)"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="0"
                    y1="50"
                    x2="100"
                    y2="50"
                    stroke="rgba(63, 63, 70, 0.3)"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="0"
                    y1="75"
                    x2="100"
                    y2="75"
                    stroke="rgba(63, 63, 70, 0.3)"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="25"
                    y1="0"
                    x2="25"
                    y2="100"
                    stroke="rgba(63, 63, 70, 0.3)"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="50"
                    y1="0"
                    x2="50"
                    y2="100"
                    stroke="rgba(63, 63, 70, 0.3)"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="75"
                    y1="0"
                    x2="75"
                    y2="100"
                    stroke="rgba(63, 63, 70, 0.3)"
                    strokeWidth="0.5"
                  />
                  {/* Route path */}
                  <path
                    d="M 20 80 C 25 65, 35 55, 40 45 S 55 30, 60 35 S 70 50, 75 40 S 80 25, 78 20"
                    stroke="url(#routeGradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="routeGradient"
                      x1="20"
                      y1="80"
                      x2="78"
                      y2="20"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#6366f1" stopOpacity="0.4" />
                      <stop offset="1" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                  {/* Current position dot */}
                  <circle cx="78" cy="20" r="3.5" fill="#6366f1" />
                  <circle cx="78" cy="20" r="6" fill="#6366f1" opacity="0.3">
                    {!prefersReducedMotion && (
                      <animate
                        attributeName="r"
                        values="5;8;5"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    )}
                    {!prefersReducedMotion && (
                      <animate
                        attributeName="opacity"
                        values="0.3;0.1;0.3"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    )}
                  </circle>
                  {/* Start marker */}
                  <circle
                    cx="20"
                    cy="80"
                    r="3"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              {/* Mini controls */}
              <div className="flex items-center justify-center" aria-hidden="true">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/30 md:h-12 md:w-12">
                  {/* Pause icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-white md:h-5 md:w-5"
                    fill="currentColor"
                  >
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
