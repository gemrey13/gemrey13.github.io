import { useCallback, useEffect, useRef, useState } from "react";
import { getActiveTrack } from "@/data/music";

const STORAGE_KEY = "bgm-enabled";

function getStoredPreference(): boolean {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    // Default to true (on) if no preference has been saved
    if (stored === null) return true;
    return stored === "true";
  } catch {
    return true;
  }
}

function setStoredPreference(enabled: boolean): void {
  try {
    localStorage.setItem(STORAGE_KEY, String(enabled));
  } catch {
    // localStorage unavailable — silently ignore
  }
}

export interface BackgroundMusicState {
  /** Whether audio is currently playing (or will play on first interaction) */
  isPlaying: boolean;
  /** Toggle audio on/off and persist the preference */
  toggle: () => void;
  /** Whether a track is configured (false = no mp3 files added yet) */
  hasTrack: boolean;
}

export function useBackgroundMusic(): BackgroundMusicState {
  const track = getActiveTrack();
  const [isPlaying, setIsPlaying] = useState(() => getStoredPreference());

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasInteractedRef = useRef(false);
  const isPlayingRef = useRef(isPlaying);

  // Keep the ref in sync with state so the interaction listener has access
  // to the latest value without needing to re-register.
  isPlayingRef.current = isPlaying;

  // Initialize the audio element once
  useEffect(() => {
    if (!track) return;

    const audio = new Audio(track.src);
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, [track]);

  // Register a one-time interaction listener to unlock autoplay
  useEffect(() => {
    if (!track) return;

    const unlock = () => {
      hasInteractedRef.current = true;

      // Only auto-play if the user hasn't toggled off before interacting
      if (isPlayingRef.current && audioRef.current) {
        audioRef.current.play().catch(() => {
          // Browser still blocked it — nothing we can do
        });
      }

      // Remove all listeners after the first interaction
      document.removeEventListener("click", unlock);
      document.removeEventListener("touchstart", unlock);
      document.removeEventListener("keydown", unlock);
    };

    document.addEventListener("click", unlock, { once: true });
    document.addEventListener("touchstart", unlock, { once: true });
    document.addEventListener("keydown", unlock, { once: true });

    return () => {
      document.removeEventListener("click", unlock);
      document.removeEventListener("touchstart", unlock);
      document.removeEventListener("keydown", unlock);
    };
  }, [track]);

  // Sync play/pause state whenever isPlaying changes (after first interaction)
  useEffect(() => {
    if (!audioRef.current || !hasInteractedRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const toggle = useCallback(() => {
    setIsPlaying((prev) => {
      const next = !prev;
      setStoredPreference(next);
      return next;
    });
  }, []);

  return {
    isPlaying,
    toggle,
    hasTrack: track !== null,
  };
}
