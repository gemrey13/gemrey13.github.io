/**
 * Generate a URL-friendly slug from a string.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Get photo asset URL by filename.
 * Uses Vite's import.meta.glob for static asset resolution.
 */
const photoModules = import.meta.glob<{ default: string }>(
  "../assets/photos/*",
  { eager: true },
);

const photoMap: Record<string, string> = {};
for (const [path, module] of Object.entries(photoModules)) {
  const filename = path.split("/").pop();
  if (filename) {
    photoMap[filename] = module.default;
  }
}

export function getPhotoUrl(filename: string): string | undefined {
  return photoMap[filename];
}

/**
 * Format a date string for display.
 */
export function formatDate(date: string): string {
  return date;
}
