import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { Certification } from "@/types";

interface CertificateLightboxProps {
  cert: Certification;
  onClose: () => void;
}

export default function CertificateLightbox({ cert, onClose }: CertificateLightboxProps) {
  const prefersReducedMotion = useReducedMotion();
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Trap focus inside the lightbox & restore on close
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    overlayRef.current?.focus();

    return () => {
      previouslyFocused?.focus();
    };
  }, []);

  // Prevent body scroll while open
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  return (
    <motion.div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${cert.name} certificate from ${cert.issuer}`}
      tabIndex={-1}
      onClick={onClose}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-background/90 backdrop-blur-sm"
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
        transition={{ duration: 0.2 }}
        aria-hidden="true"
      />

      {/* Content container */}
      <div
        className="relative flex max-h-[90vh] max-w-3xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Animated image — uses layoutId for shared layout animation */}
        <motion.img
          layoutId={prefersReducedMotion ? undefined : `cert-img-${cert.name}`}
          src={cert.src}
          alt={cert.name}
          className="max-h-[75vh] w-auto rounded-lg object-contain shadow-2xl shadow-black/50"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        {/* Certificate info */}
        <motion.div
          className="mt-4 text-center"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.15, duration: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-text-primary">{cert.name}</h3>
          <p className="text-sm text-text-secondary">{cert.issuer}</p>
        </motion.div>

        {/* Close button */}
        <motion.button
          className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-text-secondary transition-colors hover:bg-surface-elevated hover:text-text-primary"
          onClick={onClose}
          aria-label="Close certificate view"
          initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.1, duration: 0.2 }}
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
}
