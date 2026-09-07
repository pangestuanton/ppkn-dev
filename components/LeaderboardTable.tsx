"use client";

import type { LeaderboardEntry } from "@/types/quiz";

type LeaderboardTableProps = {
  entries: LeaderboardEntry[];
};

/**
 * Ranked list of all leaderboard entries.
 * Matches Stitch leaderboard page list section.
 */
export default function LeaderboardTable({ entries }: LeaderboardTableProps) {
  if (entries.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="font-['Quicksand'] font-semibold text-lg text-[#999079]">
          Belum ada data peserta.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2 h-2 rounded-full bg-[#a6c8ff]" />
        <h3 className="font-['Chunky'] font-bold text-lg text-[#FFF8E8]">
          DAFTAR PERINGKAT KELAS
        </h3>
      </div>

      <div className="flex flex-col gap-3">
        {entries.map((entry) => (
          <div
            key={`${entry.rank}-${entry.name}`}
            className="grid grid-cols-[auto_minmax(0,1fr)] sm:flex items-center gap-x-3 gap-y-2 sm:gap-4 bg-[#201f1f] px-3 sm:px-5 py-4 rounded-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_4px_0_#0c0c0c,0_8px_12px_rgba(0,0,0,0.5)]"
          >
            {/* Rank Number */}
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center font-['Bricolage_Grotesque'] font-bold text-sm shrink-0"
              style={{
                backgroundColor:
                  entry.rank <= 3
                    ? entry.rank === 1
                      ? "#FFD22A"
                      : entry.rank === 2
                      ? "#C0C0C0"
                      : "#CD7F32"
                    : "#353534",
                color: entry.rank <= 3 ? "#111" : "#d1c6ac",
                boxShadow: entry.rank <= 3
                  ? `inset 0 2px 1px rgba(255,255,255,0.5), 0 3px 0 ${
                      entry.rank === 1
                        ? "#a07400"
                        : entry.rank === 2
                        ? "#888"
                        : "#8B5E20"
                    }`
                  : "inset 0 2px 3px rgba(0,0,0,0.8)",
              }}
            >
              {String(entry.rank).padStart(2, "0")}
            </div>

            {/* Name & Time */}
            <div className="flex-1 min-w-0">
              <p className="font-['Quicksand'] font-bold text-sm sm:text-base text-[#FFF8E8]">
                {entry.name}
              </p>
              <p className="font-['Quicksand'] font-medium text-xs text-[#999079]">
                {entry.submittedAt}
              </p>
            </div>

            {/* Score Bar */}
            <div className="col-start-2 w-full sm:w-32 shrink-0 flex items-center gap-2">
              <div className="flex-1 h-2 rounded-full bg-[#353534] overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${entry.score}%`,
                    background:
                      entry.score >= 90
                        ? "#43DFA6"
                        : entry.score >= 80
                        ? "#489BFF"
                        : entry.score >= 70
                        ? "#FFD22A"
                        : "#FF4A3D",
                  }}
                />
              </div>
              <span className="font-['Bricolage_Grotesque'] font-bold text-sm text-[#FFF8E8] w-8 text-right">
                {entry.score}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
