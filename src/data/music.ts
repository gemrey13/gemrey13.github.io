// ============================================================
// Background Music Configuration
// ============================================================
// To change the site's background music, update `activeTrackId`
// to match the `id` of whichever track fits your current mood.
//
// To add a new track:
// 1. Drop the .mp3 file into src/assets/audio/
// 2. Import it below
// 3. Add an entry to the `tracks` array
// ============================================================

// TODO: Replace these placeholder imports with your actual mp3 files
// Example:
import japan from '@/assets/audio/japan.mp3';
import coding from '@/assets/audio/coding-night.mp3';
// import night from '@/assets/audio/night.mp3';

export interface Track {
  id: string;
  /** Human-readable name (for your reference only, not shown to visitors) */
  name: string;
  /** Imported audio source URL (resolved by Vite) */
  src: string;
}

// TODO: Update imports and entries when you add your mp3 files
export const tracks: Track[] = [
  { id: 'japan', name: 'Chill Japanese', src: japan },
  { id: 'coding', name: 'Coding Night', src: coding },
  // { id: 'lofi', name: 'Lofi Night', src: lofi },
  // { id: 'night', name: 'Late Night Coding', src: night },
];

// ─── CHANGE THIS TO SWITCH THE MOOD ────────────────────────
export const activeTrackId = "coding";
// ────────────────────────────────────────────────────────────

export function getActiveTrack(): Track | null {
  if (tracks.length === 0) return null;
  return tracks.find((t) => t.id === activeTrackId) ?? tracks[0] ?? null;
}
