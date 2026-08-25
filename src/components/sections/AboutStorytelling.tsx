import { useRef, lazy, Suspense, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";
import { storytellingBeats, personalInfo } from "@/data/personal";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import gemGrad from "@/assets/photos/Gem Grad Pic.png";

// Lazy load the 3D scene — only loaded on desktop with motion enabled
const StorytellingScene = lazy(
  () => import("@/components/three/StorytellingScene"),
);

// ─── Constants ───
const SCROLL_HEIGHT_PER_BEAT_VH = 70; // ~70vh per beat → medium pacing
const BEATS_COUNT = storytellingBeats.length;

export default function AboutStorytelling({ standalone }: { standalone?: boolean }) {
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Outer scroll runway ref (creates the tall scrollable area)
  const runwayRef = useRef<HTMLDivElement>(null);

  // Track whether the sticky section is visible (for pausing 3D rendering)
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  useEffect(() => {
    const el = runwayRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) setIsSectionVisible(entry.isIntersecting);
      },
      { rootMargin: "100px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Scroll progress for the entire storytelling runway (0→1)
  const { scrollYProgress } = useScroll({
    target: runwayRef,
    offset: ["start start", "end end"],
  });

  // Ref-based scroll progress for the 3D scene (avoids re-renders)
  const scrollProgressRef = useRef(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    scrollProgressRef.current = v;
  });

  const show3D = !isMobile && !prefersReducedMotion;

  // ─── Reduced Motion: Static vertical list ───
  if (prefersReducedMotion) {
    return (
      <section
        className={`relative px-6 ${standalone ? "pb-32 md:pb-48" : "py-32 md:py-48"}`}
        aria-label="More than just a developer"
      >
        <div className="mx-auto max-w-6xl">
          <SectionIntro reducedMotion />
          <ReducedMotionBeats />
        </div>
      </section>
    );
  }

  // ─── Mobile: Vertical sticky-stack ───
  if (isMobile) {
    return (
      <section
        className={`relative px-6 ${standalone ? "pb-20" : "py-20"}`}
        aria-label="More than just a developer"
      >
        <div className="mx-auto max-w-6xl">
          <SectionIntro reducedMotion={false} />
          <MobileStickyStack />
        </div>
      </section>
    );
  }

  // ─── Desktop: Sticky horizontal scroll storytelling ───
  return (
    <section
      className={`relative px-6 ${standalone ? "" : "pt-32 md:pt-48"}`}
      aria-label="More than just a developer"
    >
      <div className="mx-auto max-w-6xl">
        <SectionIntro reducedMotion={false} />
      </div>

      {/* Scroll runway — tall container that creates the scroll distance */}
      <div
        ref={runwayRef}
        className="relative"
        style={{ height: `${BEATS_COUNT * SCROLL_HEIGHT_PER_BEAT_VH}vh` }}
      >
        {/* Sticky inner container — locked to viewport */}
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          {/* 3D Background layer — subtle parallax */}
          {show3D && (
            <div
              className="pointer-events-none absolute inset-0 z-0"
              aria-hidden="true"
            >
              <Suspense fallback={null}>
                <StorytellingScene
                  scrollProgressRef={scrollProgressRef}
                  isVisible={isSectionVisible}
                />
              </Suspense>
            </div>
          )}

          {/* Subtle background gradient that shifts with scroll */}
          <ScrollGradient scrollYProgress={scrollYProgress} />

          {/* Content layer — horizontal sliding beats */}
          <div className="relative z-10 flex h-full w-full items-center justify-center">
            {storytellingBeats.map((beat, index) => (
              <HorizontalBeat
                key={index}
                index={index}
                text={beat.text}
                detail={beat.detail}
                emphasis={beat.emphasis}
                totalBeats={BEATS_COUNT}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          {/* Scroll progress indicator */}
          <ScrollIndicator scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION INTRO — heading + bio + grad photo (shared across all modes)
   ═══════════════════════════════════════════════════════════════════════════ */

function SectionIntro({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <>
      {/* Section heading */}
      <motion.h2
        className="font-display mb-24 text-3xl font-bold tracking-tight text-text-primary md:text-5xl"
        initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        More Than Just a Developer.
      </motion.h2>

      {/* Bio intro + Grad photo */}
      <div className="mb-20 flex flex-col gap-12 md:mb-28 md:flex-row md:items-start md:gap-16 lg:gap-20">
        {/* Bio text */}
        <div className="max-w-3xl flex-1 space-y-6">
          {personalInfo.bio.map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-base leading-relaxed text-text-secondary md:text-lg"
              initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Gem grad photo */}
        <motion.div
          className="mx-auto w-64 shrink-0 md:mx-0 md:w-60 lg:w-72"
          initial={reducedMotion ? {} : { opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-2xl bg-accent/8 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-xl border border-border/40">
              <img
                src={gemGrad}
                alt="Gem at graduation ceremony"
                loading="lazy"
                className="block aspect-3/4 w-full object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/30 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
            <p className="mt-4 text-center text-xs tracking-widest text-text-muted uppercase">
              More than code.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   HORIZONTAL BEAT — single beat in the sticky horizontal scroll (Desktop)
   ═══════════════════════════════════════════════════════════════════════════ */

interface HorizontalBeatProps {
  index: number;
  text: string;
  detail?: string;
  emphasis?: boolean;
  totalBeats: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}

function HorizontalBeat({
  index,
  text,
  detail,
  emphasis,
  totalBeats,
  scrollYProgress,
}: HorizontalBeatProps) {
  const isFirst = index === 0;
  const isLast = index === totalBeats - 1;

  // Each beat gets an equal segment of the total scroll progress
  const segmentSize = 1 / totalBeats;
  const segmentStart = index * segmentSize;
  const segmentEnd = (index + 1) * segmentSize;

  // Subdivide the segment: enter (0-25%), rest (25-70%), exit (70-100%)
  // Slightly more rest time for comfortable reading
  const enterEnd = segmentStart + segmentSize * 0.25;
  const exitStart = segmentStart + segmentSize * 0.7;

  // ─── Text horizontal position ───
  // First beat starts centered; last beat stays centered (doesn't exit)
  const textXInputRange = isFirst
    ? [segmentStart, exitStart, segmentEnd]
    : isLast
      ? [segmentStart, enterEnd, segmentEnd]
      : [segmentStart, enterEnd, exitStart, segmentEnd];

  const textXOutputRange = isFirst
    ? ["0%", "0%", "-120%"]
    : isLast
      ? ["100%", "0%", "0%"] // last beat arrives and stays
      : ["100%", "0%", "0%", "-120%"];

  const textX = useTransform(scrollYProgress, textXInputRange, textXOutputRange);

  // ─── Subtle vertical float (micro-parallax while at rest) ───
  // Each beat has a slight Y offset that shifts during its segment for depth
  const textY = useTransform(
    scrollYProgress,
    isFirst
      ? [segmentStart, exitStart, segmentEnd]
      : [segmentStart, enterEnd, exitStart, segmentEnd],
    isFirst
      ? ["0px", "-4px", "-8px"]
      : ["8px", "0px", "-4px", "-8px"],
  );

  // ─── Opacity ───
  const opacityInputRange = isFirst
    ? [segmentStart, exitStart, segmentEnd]
    : isLast
      ? [segmentStart, enterEnd, segmentEnd]
      : [segmentStart, enterEnd, exitStart, segmentEnd];

  const opacityOutputRange = isFirst
    ? [1, 1, 0]
    : isLast
      ? [0, 1, 1] // last beat fades in and stays
      : [0, 1, 1, 0];

  const textOpacity = useTransform(
    scrollYProgress,
    opacityInputRange,
    opacityOutputRange,
  );

  // ─── Scale: subtle zoom (0.96 → 1.0 → 0.96) ───
  const scaleInputRange = isFirst
    ? [segmentStart, exitStart, segmentEnd]
    : isLast
      ? [segmentStart, enterEnd, segmentEnd]
      : [segmentStart, enterEnd, exitStart, segmentEnd];

  const scaleOutputRange = isFirst
    ? [1, 1, 0.96]
    : isLast
      ? [0.96, 1, 1]
      : [0.96, 1, 1, 0.96];

  const textScale = useTransform(
    scrollYProgress,
    scaleInputRange,
    scaleOutputRange,
  );

  // ─── Detail text opacity (fades in after main text settles) ───
  const detailOpacity = useTransform(
    scrollYProgress,
    isFirst
      ? [segmentStart, segmentStart + segmentSize * 0.12, exitStart, segmentEnd]
      : isLast
        ? [enterEnd, enterEnd + segmentSize * 0.12, segmentEnd]
        : [enterEnd, enterEnd + segmentSize * 0.12, exitStart, segmentEnd],
    isFirst
      ? [0, 1, 1, 0]
      : isLast
        ? [0, 1, 1]
        : [0, 1, 1, 0],
  );

  return (
    <>
      {/* Text layer */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center px-8"
        style={{
          x: textX,
          y: textY,
          opacity: textOpacity,
          scale: textScale,
        }}
      >
        <p
          className={`font-display max-w-4xl text-center leading-tight font-medium ${
            emphasis
              ? "text-4xl text-text-primary md:text-6xl lg:text-7xl"
              : "text-3xl text-text-secondary md:text-5xl lg:text-6xl"
          }`}
        >
          {text}
        </p>
        {detail && (
          <motion.p
            className="mx-auto mt-6 max-w-xl text-center text-base text-text-tertiary md:text-lg"
            style={{ opacity: detailOpacity }}
          >
            {detail}
          </motion.p>
        )}
      </motion.div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SCROLL GRADIENT — subtle background gradient that shifts with scroll
   ═══════════════════════════════════════════════════════════════════════════ */

function ScrollGradient({
  scrollYProgress,
}: {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  // Primary gradient layer — moves at ~30% speed (slow depth)
  const gradientOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0.2, 0.4, 0.5, 0.4, 0.2],
  );

  const gradientX = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const gradientY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  // Secondary gradient layer — moves opposite direction for depth
  const secondaryX = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const secondaryOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.15, 0.3, 0.3, 0.15],
  );

  return (
    <>
      {/* Primary gradient orbs */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ opacity: gradientOpacity, x: gradientX, y: gradientY }}
        aria-hidden="true"
      >
        <div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 h-80 w-80 rounded-full bg-indigo-500/4 blur-3xl" />
      </motion.div>

      {/* Secondary gradient layer — slower, opposite direction */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ opacity: secondaryOpacity, x: secondaryX }}
        aria-hidden="true"
      >
        <div className="absolute right-1/3 top-1/2 h-64 w-64 rounded-full bg-purple-500/3 blur-3xl" />
      </motion.div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SCROLL INDICATOR — subtle progress bar at the bottom
   ═══════════════════════════════════════════════════════════════════════════ */

function ScrollIndicator({
  scrollYProgress,
}: {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
      {/* Beat dots */}
      <div className="mb-3 flex items-center justify-center gap-2">
        {storytellingBeats.map((_, index) => (
          <BeatDot
            key={index}
            index={index}
            totalBeats={BEATS_COUNT}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="h-px w-48 rounded-full bg-border/30">
        <motion.div
          className="h-full origin-left rounded-full bg-accent/60"
          style={{ scaleX }}
        />
      </div>
    </div>
  );
}

/** Individual beat dot that lights up when its beat is active */
function BeatDot({
  index,
  totalBeats,
  scrollYProgress,
}: {
  index: number;
  totalBeats: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const segmentSize = 1 / totalBeats;
  const segmentStart = index * segmentSize;
  const segmentEnd = (index + 1) * segmentSize;

  // Clamp offsets to [0, 1] — Web Animations API requires this
  const fadeIn = Math.max(0, segmentStart);
  const activeStart = Math.min(1, segmentStart + segmentSize * 0.15);
  const activeEnd = Math.max(activeStart, Math.min(1, segmentEnd - segmentSize * 0.15));
  const fadeOut = Math.min(1, segmentEnd);

  // Dot is active (bright) when scroll is within this beat's segment
  const dotOpacity = useTransform(
    scrollYProgress,
    [fadeIn, activeStart, activeEnd, fadeOut],
    [0.3, 1, 1, 0.3],
  );

  const dotScale = useTransform(
    scrollYProgress,
    [fadeIn, activeStart, activeEnd, fadeOut],
    [0.6, 1, 1, 0.6],
  );

  return (
    <motion.div
      className="h-1.5 w-1.5 rounded-full bg-accent"
      style={{ opacity: dotOpacity, scale: dotScale }}
    />
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   MOBILE STICKY STACK — vertical transitions for mobile
   ═══════════════════════════════════════════════════════════════════════════ */

function MobileStickyStack() {
  const runwayRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: runwayRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={runwayRef}
      className="relative"
      style={{ height: `${BEATS_COUNT * 55}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {storytellingBeats.map((beat, index) => (
          <MobileBeat
            key={index}
            index={index}
            text={beat.text}
            detail={beat.detail}
            emphasis={beat.emphasis}
            totalBeats={BEATS_COUNT}
            scrollYProgress={scrollYProgress}
          />
        ))}

        {/* Scroll indicator for mobile */}
        <ScrollIndicator scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}

/* ─── Single mobile beat ─── */

interface MobileBeatProps {
  index: number;
  text: string;
  detail?: string;
  emphasis?: boolean;
  totalBeats: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}

function MobileBeat({
  index,
  text,
  detail,
  emphasis,
  totalBeats,
  scrollYProgress,
}: MobileBeatProps) {
  const segmentSize = 1 / totalBeats;
  const segmentStart = index * segmentSize;
  const segmentEnd = (index + 1) * segmentSize;
  const enterEnd = segmentStart + segmentSize * 0.3;
  const exitStart = segmentStart + segmentSize * 0.7;

  // Vertical slide: enters from below, exits upward
  const yInputRange =
    index === 0
      ? [segmentStart, exitStart, segmentEnd]
      : [segmentStart, enterEnd, exitStart, segmentEnd];

  const yOutputRange =
    index === 0 ? ["0%", "0%", "-80%"] : ["60%", "0%", "0%", "-80%"];

  const y = useTransform(scrollYProgress, yInputRange, yOutputRange);

  const opacityInputRange =
    index === 0
      ? [segmentStart, exitStart, segmentEnd]
      : [segmentStart, enterEnd, exitStart, segmentEnd];

  const opacityOutputRange =
    index === 0 ? [1, 1, 0] : [0, 1, 1, 0];

  const opacity = useTransform(scrollYProgress, opacityInputRange, opacityOutputRange);

  const scale = useTransform(
    scrollYProgress,
    index === 0
      ? [segmentStart, exitStart, segmentEnd]
      : [segmentStart, enterEnd, exitStart, segmentEnd],
    index === 0 ? [1, 1, 0.95] : [0.95, 1, 1, 0.95],
  );

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center gap-8 px-6"
      style={{ y, opacity, scale }}
    >
      <p
        className={`font-display max-w-md text-center leading-tight font-medium ${
          emphasis
            ? "text-3xl text-text-primary"
            : "text-2xl text-text-secondary"
        }`}
      >
        {text}
      </p>
      {detail && (
        <p className="mx-auto max-w-sm text-center text-sm text-text-tertiary">
          {detail}
        </p>
      )}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   REDUCED MOTION BEATS — static vertical list (no animation)
   ═══════════════════════════════════════════════════════════════════════════ */

function ReducedMotionBeats() {
  return (
    <div className="mx-auto max-w-3xl space-y-12 text-center">
      {storytellingBeats.map((beat, index) => (
        <div key={index} className="py-4">
          <p
            className={`font-display leading-tight font-medium ${
              beat.emphasis
                ? "text-3xl text-text-primary md:text-5xl lg:text-6xl"
                : "text-2xl text-text-secondary md:text-4xl lg:text-5xl"
            }`}
          >
            {beat.text}
          </p>
          {beat.detail && (
            <p className="mx-auto mt-4 max-w-lg text-base text-text-tertiary md:text-lg">
              {beat.detail}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
