"use client";

import type { QuizAnswers } from "@/types/quiz";

type QuestionNavigatorProps = {
  totalQuestions: number;
  currentIndex: number;
  answers: QuizAnswers;
  questionIds: number[];
  onNavigate: (index: number) => void;
};

/**
 * Question number navigator strip — generates beads dynamically.
 * Shows answered, current, and unanswered states using different clay styles.
 */
export default function QuestionNavigator({
  totalQuestions,
  currentIndex,
  answers,
  questionIds,
  onNavigate,
}: QuestionNavigatorProps) {
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="w-full bg-[#1c1b1b] p-4 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.7),0_8px_0_#090909] flex flex-col lg:flex-row items-center justify-between gap-4">
      {/* Label */}
      <div className="flex items-center gap-2">
        <svg className="w-4 h-4 text-[#999079]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
        <span className="font-['Quicksand'] font-bold text-xs text-[#999079] uppercase tracking-wider">
          NAVIGASI SOAL:
        </span>
      </div>

      {/* Beads */}
      <div className="min-w-0 flex items-center flex-wrap justify-center gap-2 sm:gap-3">
        {Array.from({ length: totalQuestions }).map((_, index) => {
          const qId = questionIds[index];
          const isAnswered = qId in answers;
          const isCurrent = index === currentIndex;
          const displayNum = String(index + 1).padStart(2, "0");

          if (isCurrent) {
            return (
              <button
                key={index}
                type="button"
                onClick={() => onNavigate(index)}
                className="w-11 h-11 shrink-0 rounded-full bg-[#d4e3ff] text-[#00315f] font-['Bricolage_Grotesque'] font-bold text-sm flex items-center justify-center ring-2 ring-[#eff3ff] -translate-y-0.5"
                style={{
                  boxShadow: "inset 0 2px 2px #ffffff, 0 4px 0 #004786, 0 0 12px rgba(166,200,255,0.4)",
                }}
                title={`Soal ${index + 1} (Sedang Dikerjakan)`}
              >
                {displayNum}
              </button>
            );
          }

          if (isAnswered) {
            // Alternate colors for answered beads
            const answeredColors = [
              { bg: "#c84d00", shadow: "#581d00", text: "#fffbff" },
              { bg: "#FFD22A", shadow: "#715a00", text: "#3c2f00" },
            ];
            const c = answeredColors[index % 2];
            return (
              <button
                key={index}
                type="button"
                onClick={() => onNavigate(index)}
                className="w-11 h-11 shrink-0 rounded-full font-['Bricolage_Grotesque'] font-bold text-xs flex items-center justify-center hover:scale-105 transition-transform"
                style={{
                  backgroundColor: c.bg,
                  color: c.text,
                  boxShadow: `inset 0 1px 1px rgba(255,255,255,0.4), 0 3px 0 ${c.shadow}`,
                }}
                title={`Soal ${index + 1} (Terjawab)`}
              >
                {displayNum}
              </button>
            );
          }

          return (
            <button
              key={index}
              type="button"
              onClick={() => onNavigate(index)}
              className="w-11 h-11 shrink-0 rounded-full bg-[#353534] text-[#d1c6ac] font-['Bricolage_Grotesque'] font-bold text-xs flex items-center justify-center shadow-[inset_0_2px_3px_rgba(0,0,0,0.8),0_2px_0_#000000] hover:text-[#FFD22A] transition-colors"
              title={`Soal ${index + 1}`}
            >
              {displayNum}
            </button>
          );
        })}
      </div>

      {/* Status Counter */}
      <div className="flex items-center gap-2 text-[#999079] font-['Quicksand'] font-semibold text-xs">
        <span className="w-2 h-2 rounded-full bg-[#FFD22A]" />
        <span>
          {answeredCount} dari {totalQuestions} Diisi
        </span>
      </div>
    </div>
  );
}
