"use client";

import type { QuizResult } from "@/types/quiz";
import { getScoreLabel, getScoreColor } from "@/lib/getScoreLabel";

type ResultCardProps = {
  result: QuizResult;
};

/**
 * Score display card — large score number, label badge, motivational text.
 * Matches Stitch result page design.
 */
export default function ResultCard({ result }: ResultCardProps) {
  const label = getScoreLabel(result.score);
  const color = getScoreColor(result.score);

  return (
    <div className="bg-[#201f1f] p-6 lg:p-8 rounded-2xl shadow-[inset_0_2px_2px_rgba(255,255,255,0.06),0_18px_36px_rgba(0,0,0,0.85)] text-center">
      {/* Score Label Badge */}
      <div className="mb-2">
        <span className="font-['Quicksand'] font-bold text-xs text-[#E6C750] uppercase tracking-widest">
          PEROLEHAN NILAI AKHIR
        </span>
      </div>

      {/* Large Score */}
      <div className="flex items-baseline justify-center gap-1 mb-4">
        <span
          className="font-['Bricolage_Grotesque'] font-extrabold text-7xl lg:text-8xl"
          style={{
            color,
            textShadow: `0 6px 0 rgba(0,0,0,0.45), 0 12px 18px rgba(0,0,0,0.7)`,
          }}
        >
          {result.score}
        </span>
        <span className="font-['Bricolage_Grotesque'] font-bold text-2xl text-[#d1c6ac]">
          / 100
        </span>
      </div>

      {/* Score Total Label */}
      <p className="font-['Quicksand'] font-semibold text-sm text-[#999079] mb-4">
        SKOR TOTAL
      </p>

      {/* Achievement Badge */}
      <div
        className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-6"
        style={{
          backgroundColor: `${color}20`,
          border: `2px solid ${color}`,
          boxShadow: `0 0 12px ${color}40`,
        }}
      >
        <svg className="w-4 h-4" style={{ color }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        <span className="font-['Quicksand'] font-bold text-sm" style={{ color }}>
          {label.toUpperCase()}
        </span>
      </div>

      {/* Motivational Text */}
      <p className="font-['Quicksand'] font-semibold text-sm text-[#E6C750] italic max-w-md mx-auto">
        &ldquo;Pemahamanmu tentang teori penalaran moral Lawrence Kohlberg{" "}
        {result.score >= 80 ? "sangat memuaskan!" : "masih bisa ditingkatkan!"}&rdquo;
      </p>
    </div>
  );
}
