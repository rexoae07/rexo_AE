/**
 * Formats a 0–1 progress value as a video-timecode-style string,
 * e.g. 0.4231 -> "00:42:31". Purely cosmetic — echoes the editing
 * timeline motif used throughout the site (nav scrubber, process steps).
 */
export function formatTimecode(progress) {
  const totalUnits = Math.max(0, Math.min(999999, Math.round(progress * 999999)));
  const mm = String(Math.floor(totalUnits / 10000)).padStart(2, '0');
  const ss = String(Math.floor((totalUnits % 10000) / 100)).padStart(2, '0');
  const ff = String(totalUnits % 100).padStart(2, '0');
  return `${mm}:${ss}:${ff}`;
}

export function padIndex(n) {
  return String(n).padStart(2, '0');
}
