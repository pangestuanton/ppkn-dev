/**
 * Returns a human-readable label for a given score.
 * Can be imported from both client and server.
 */
export function getScoreLabel(score: number): string {
  if (score >= 90) return "Sangat Baik";
  if (score >= 80) return "Baik";
  if (score >= 70) return "Cukup";
  return "Perlu Belajar Lagi";
}

/**
 * Returns a clay color class name based on the score label.
 */
export function getScoreColor(score: number): string {
  if (score >= 90) return "#43DFA6"; // Mint
  if (score >= 80) return "#489BFF"; // Blue
  if (score >= 70) return "#FFD22A"; // Yellow
  return "#FF4A3D"; // Red
}
