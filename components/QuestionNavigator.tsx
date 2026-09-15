"use client";

import type { QuizAnswers } from "@/types/quiz";

type QuestionNavigatorProps = {
  totalQuestions: number;
  currentIndex: number;
  answers: QuizAnswers;
  questionIds: number[];
  onNavigate?: (index: number) => void;
};

/**
 * Question number navigator strip — generates beads dynamically.
 * Shows answered, skipped, current, and upcoming states.
 * Backward navigation is locked to enforce linear progression.
 */
export default function QuestionNavigator({
  totalQuestions,
  currentIndex,
  answers,
  questionIds,
}: QuestionNavigatorProps) {
  const answeredCount = Object.values(answers).filter((val) => val && val.trim() !== "").length;
  const skippedCount = Object.keys(answers).filter(
    (k) => !answers[Number(k)] || answers[Number(k)].trim() === ""
  ).length;

  return (
    <div className="w-full bg-[#1c1b1b] p-4 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.7),0_8px_0_#090909] flex flex-col lg:flex-row items-center justify-between gap-4 select-none">
      {/* Label */}
      <div className="flex items-center gap-2">
        <svg className="w-4 h-4 text-[#999079]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
        <span className="font-['Quicksand'] font-bold text-xs text-[#999079] uppercase tracking-wider">
          STATUS SOAL:
        </span>
      </div>

      {/* Beads */}
      <div className="min-w-0 flex items-center flex-wrap justify-center gap-2 sm:gap-3">
        {Array.from({ length: totalQuestions }).map((_, index) => {
          const qId = questionIds[index];
          const hasAnswer = qId in answers && answers[qId] && answers[qId].trim() !== "";
          const isPassed = index < currentIndex;
          const isSkipped = isPassed && !hasAnswer;
          const isCurrent = index === currentIndex;
          const displayNum = String(index + 1).padStart(2, "0");

          if (isCurrent) {
            return (
              <div
                key={index}
                className="w-11 h-11 shrink-0 rounded-full bg-[#d4e3ff] text-[#00315f] font-['Bricolage_Grotesque'] font-bold text-sm flex items-center justify-center ring-2 ring-[#eff3ff] -translate-y-0.5 cursor-default"
                style={{
                  boxShadow: "inset 0 2px 2px #ffffff, 0 4px 0 #004786, 0 0 12px rgba(166,200,255,0.4)",
                }}
                title={`Soal ${index + 1} (Sedang Dikerjakan)`}
              >
                {displayNum}
              </div>
            );
          }

          if (hasAnswer) {
            // Answered bead
            const answeredColors = [
              { bg: "#c84d00", shadow: "#581d00", text: "#fffbff" },
              { bg: "#FFD22A", shadow: "#715a00", text: "#3c2f00" },
            ];
            const c = answeredColors[index % 2];
            return (
              <div
                key={index}
                className="w-11 h-11 shrink-0 rounded-full font-['Bricolage_Grotesque'] font-bold text-xs flex items-center justify-center opacity-85 cursor-default"
                style={{
                  backgroundColor: c.bg,
                  color: c.text,
                  boxShadow: `inset 0 1px 1px rgba(255,255,255,0.4), 0 3px 0 ${c.shadow}`,
                }}
                title={`Soal ${index + 1} (Sudah Terjawab)`}
              >
                {displayNum}
              </div>
            );
          }

          if (isSkipped) {
            // Skipped / expired bead
            return (
              <div
                key={index}
                className="w-11 h-11 shrink-0 rounded-full bg-[#262626] text-[#78716c] font-['Bricolage_Grotesque'] font-semibold text-xs flex items-center justify-center shadow-[inset_0_2px_3px_rgba(0,0,0,0.8),0_2px_0_#121212] border border-[#ff4a3d]/20 cursor-default"
                title={`Soal ${index + 1} (Dilewati / Waktu Habis)`}
              >
                {displayNum}
              </div>
            );
          }

          // Upcoming question
          return (
            <div
              key={index}
              className="w-11 h-11 shrink-0 rounded-full bg-[#353534] text-[#d1c6ac] font-['Bricolage_Grotesque'] font-bold text-xs flex items-center justify-center shadow-[inset_0_2px_3px_rgba(0,0,0,0.8),0_2px_0_#000000] opacity-60 cursor-default"
              title={`Soal ${index + 1} (Mendatang)`}
            >
              {displayNum}
            </div>
          );
        })}
      </div>

      {/* Status Counter */}
      <div className="flex items-center gap-3 text-[#999079] font-['Quicksand'] font-semibold text-xs">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#FFD22A]" />
          <span>{answeredCount} Terjawab</span>
        </div>
        {skippedCount > 0 && (
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#ffb597]" />
            <span>{skippedCount} Dilewati</span>
          </div>
        )}
      </div>
    </div>
  );
}
