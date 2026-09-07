"use client";

import type { LeaderboardEntry } from "@/types/quiz";

type LeaderboardPodiumProps = {
  entries: LeaderboardEntry[];
};

/**
 * Top 3 podium display with trophy icons and clay cards.
 * Matches Stitch leaderboard page podium section.
 */
export default function LeaderboardPodium({ entries }: LeaderboardPodiumProps) {
  if (entries.length === 0) return null;

  const top3 = entries.slice(0, 3);
  const trophyColors = ["#FFD22A", "#C0C0C0", "#CD7F32"];
  const trophyShadows = ["#a07400", "#888888", "#8B5E20"];

  // Reorder for podium: [2nd, 1st, 3rd]
  const podiumOrder = top3.length >= 3
    ? [top3[1], top3[0], top3[2]]
    : top3.length === 2
    ? [top3[1], top3[0]]
    : [top3[0]];

  const podiumHeights = ["h-24 sm:h-36", "h-20 sm:h-28", "h-16 sm:h-24"];
  const podiumIndexMap = top3.length >= 3 ? [1, 0, 2] : top3.length === 2 ? [1, 0] : [0];

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-6">
        <span className="w-2 h-2 rounded-full bg-[#FFD22A]" />
        <h3 className="font-['Chunky'] font-bold text-lg text-[#FFF8E8]">
          PODIUM TERTINGGI
        </h3>
      </div>

      <div className="flex items-end justify-center gap-2 sm:gap-4 mb-8">
        {podiumOrder.map((entry, i) => {
          const originalIndex = podiumIndexMap[i];
          const tColor = trophyColors[originalIndex];
          const tShadow = trophyShadows[originalIndex];
          const height = podiumHeights[originalIndex] || "h-24";

          return (
            <div key={entry.rank} className="flex flex-col items-center gap-2 min-w-0 flex-1 max-w-[200px]">
              {/* Trophy Icon */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-1"
                style={{
                  backgroundColor: tColor,
                  boxShadow: `inset 0 2px 2px rgba(255,255,255,0.6), 0 4px 0 ${tShadow}, 0 8px 16px rgba(0,0,0,0.6)`,
                }}
              >
                <svg className="w-5 h-5" fill="#111" viewBox="0 0 24 24">
                  <path d="M5 3h14l-1.5 2H20a2 2 0 012 2v2a4 4 0 01-4 4h-.28A8 8 0 0112 18.87 8 8 0 016.28 13H6a4 4 0 01-4-4V7a2 2 0 012-2h1.5L4 3h1zm1 4H4v2a2 2 0 002 2h.28A8 8 0 016 7zm12 0v4h.28A2 2 0 0020 9V7h-2zM12 20l-2 3h4l-2-3z" />
                </svg>
              </div>

              {/* Name */}
              <span className="font-['Quicksand'] font-bold text-xs sm:text-sm text-[#FFF8E8] text-center w-full">
                {entry.name}
              </span>

              {/* Score */}
              <span
                className="font-['Bricolage_Grotesque'] font-extrabold text-2xl"
                style={{ color: tColor }}
              >
                {entry.score}
              </span>

              {/* Podium Block */}
              <div
                className={`w-full ${height} rounded-t-2xl flex items-start justify-center pt-3`}
                style={{
                  backgroundColor: `${tColor}15`,
                  border: `2px solid ${tColor}30`,
                  borderBottom: "none",
                }}
              >
                <span
                  className="font-['Bricolage_Grotesque'] font-extrabold text-3xl"
                  style={{ color: tColor, opacity: 0.5 }}
                >
                  {originalIndex + 1}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
