import { useCallback, useEffect, useRef, useState } from "react";

interface TypewriterOptions {
  /** Milliseconds per character when typing (default: 80) */
  typingSpeed?: number;
  /** Milliseconds per character when deleting (default: 40) */
  deletingSpeed?: number;
  /** Milliseconds to pause after typing completes (default: 2000) */
  pauseDuration?: number;
  /** Milliseconds to pause after deleting before typing next (default: 500) */
  pauseBeforeTyping?: number;
  /** When true, disables animation and returns the first word statically */
  disabled?: boolean;
}

type Phase = "typing" | "pausing" | "deleting" | "pauseBeforeNext";

interface TypewriterReturn {
  /** The currently displayed text */
  text: string;
  /** Whether the hook is in the typing phase */
  isTyping: boolean;
  /** Whether the hook is in the deleting phase */
  isDeleting: boolean;
  /** Whether the hook is paused (between typing and deleting, or between words) */
  isPaused: boolean;
}

export function useTypewriter(
  words: string[],
  options: TypewriterOptions = {},
): TypewriterReturn {
  const {
    typingSpeed = 80,
    deletingSpeed = 40,
    pauseDuration = 2000,
    pauseBeforeTyping = 500,
    disabled = false,
  } = options;

  const [text, setText] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");
  const [wordIndex, setWordIndex] = useState(0);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const charIndexRef = useRef(0);

  const clearTimer = useCallback(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    // If disabled or no words, show static text
    if (disabled || words.length === 0) {
      setText(words[0] || "");
      return;
    }

    const currentWord = words[wordIndex];
    if (!currentWord) return;

    switch (phase) {
      case "typing": {
        if (charIndexRef.current < currentWord.length) {
          timeoutRef.current = setTimeout(() => {
            charIndexRef.current += 1;
            setText(currentWord.slice(0, charIndexRef.current));
          }, typingSpeed);
        } else {
          // Finished typing — move to pause
          setPhase("pausing");
        }
        break;
      }

      case "pausing": {
        timeoutRef.current = setTimeout(() => {
          setPhase("deleting");
        }, pauseDuration);
        break;
      }

      case "deleting": {
        if (charIndexRef.current > 0) {
          timeoutRef.current = setTimeout(() => {
            charIndexRef.current -= 1;
            setText(currentWord.slice(0, charIndexRef.current));
          }, deletingSpeed);
        } else {
          // Finished deleting — pause before next word
          setPhase("pauseBeforeNext");
        }
        break;
      }

      case "pauseBeforeNext": {
        timeoutRef.current = setTimeout(() => {
          const nextIndex = (wordIndex + 1) % words.length;
          setWordIndex(nextIndex);
          charIndexRef.current = 0;
          setText("");
          setPhase("typing");
        }, pauseBeforeTyping);
        break;
      }
    }

    return clearTimer;
  }, [
    phase,
    text,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    pauseBeforeTyping,
    disabled,
    clearTimer,
  ]);

  // Cleanup on unmount
  useEffect(() => {
    return clearTimer;
  }, [clearTimer]);

  // When disabled, return static values
  if (disabled) {
    return {
      text: words[0] || "",
      isTyping: false,
      isDeleting: false,
      isPaused: true,
    };
  }

  return {
    text,
    isTyping: phase === "typing",
    isDeleting: phase === "deleting",
    isPaused: phase === "pausing" || phase === "pauseBeforeNext",
  };
}
