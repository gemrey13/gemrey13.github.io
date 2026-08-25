import { motion } from "motion/react";
import { useBackgroundMusic } from "@/hooks/useBackgroundMusic";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function MusicToggle() {
  const { isPlaying, toggle, hasTrack } = useBackgroundMusic();
  const reducedMotion = useReducedMotion();

  // Don't render anything if no track is configured
  if (!hasTrack) return null;

  return (
    <motion.button
      onClick={toggle}
      aria-label="Toggle background music"
      aria-pressed={isPlaying}
      title={isPlaying ? "Pause background music" : "Play background music"}
      className="fixed right-6 bottom-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle bg-surface shadow-lg transition-colors hover:bg-surface-hover focus-visible:outline-offset-4"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={
        isPlaying && !reducedMotion
          ? { rotate: 360 }
          : { rotate: 0 }
      }
      transition={
        isPlaying && !reducedMotion
          ? { rotate: { repeat: Infinity, duration: 3, ease: "linear" } }
          : { rotate: { duration: 0.3 } }
      }
    >
      {/* Vinyl disc visual */}
      <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#1a1a1a]">
        {/* Outer groove ring */}
        <div className="absolute inset-0 rounded-full border border-[#2a2a2a]" />

        {/* Middle groove ring */}
        <div className="absolute inset-1.5 rounded-full border border-[#222222]" />

        {/* Inner groove ring */}
        <div className="absolute inset-3 rounded-full border border-[#2a2a2a]" />

        {/* Center label */}
        <div
          className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
            isPlaying ? "bg-accent" : "bg-text-muted"
          }`}
        />

        {/* Subtle shine on the disc surface */}
        <div className="absolute inset-0 rounded-full bg-linear-to-br from-white/5 to-transparent" />
      </div>
    </motion.button>
  );
}
