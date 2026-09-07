import type { LeaderboardEntry } from "@/types/quiz";

/**
 * Normalize raw sheet data into sorted LeaderboardEntry[].
 * Sorting: score descending, then submittedAt ascending (earlier = higher rank).
 * Ranks are assigned after sorting.
 */
export function processLeaderboard(
  rawData: Array<{
    name: string;
    correct: number;
    score: number;
    submittedAt: string;
  }>
): LeaderboardEntry[] {
  const sorted = [...rawData].sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    // Earlier submission gets higher rank
    return a.submittedAt.localeCompare(b.submittedAt);
  });

  return sorted.map((entry, index) => ({
    rank: index + 1,
    name: entry.name,
    correct: entry.correct,
    score: entry.score,
    submittedAt: entry.submittedAt,
  }));
}
