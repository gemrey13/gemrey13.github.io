import { useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

interface UseScrollProgressReturn {
  ref: React.RefObject<HTMLElement | null>;
  progress: MotionValue<number>;
  opacity: MotionValue<number>;
}

export function useScrollProgress(): UseScrollProgressReturn {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return { ref, progress: scrollYProgress, opacity };
}
