"use client";

import type { PublicQuestion } from "@/types/quiz";

type QuestionCardProps = {
  question: PublicQuestion;
  currentIndex: number;
};

/**
 * Question display card matching the Stitch quiz page left panel.
 * Shows SOAL badge, question text, hint, and reference visual.
 */
export default function QuestionCard({
  question,
  currentIndex,
}: QuestionCardProps) {
  const displayNum = String(currentIndex + 1).padStart(2, "0");
  const tens = displayNum[0];
  const ones = displayNum[1];

  return (
    <div className="flex flex-col justify-between bg-[#201f1f] p-6 lg:p-8 rounded-2xl shadow-[inset_0_2px_2px_rgba(255,255,255,0.06),0_18px_36px_rgba(0,0,0,0.85)] relative overflow-hidden">
      {/* Background Ambient Blob */}
      <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-[#FFD22A]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* SOAL Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1c1b1b] shadow-[inset_0_2px_4px_rgba(0,0,0,0.7),0_3px_0_#0e0e0e] mb-6">
          <span className="font-['Bricolage_Grotesque'] font-bold text-lg text-[#FFD22A] tracking-wide uppercase">
            SOAL
          </span>
          <div className="flex items-center -space-x-1">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#ffb597] text-[#581d00] font-['Bricolage_Grotesque'] font-bold text-sm shadow-[inset_0_2px_1px_rgba(255,255,255,0.6),0_3px_0_#7d2d00] -rotate-6">
              {tens}
            </span>
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#edc212] text-[#231b00] font-['Bricolage_Grotesque'] font-bold text-sm shadow-[inset_0_2px_1px_rgba(255,255,255,0.7),0_3px_0_#564500] rotate-6">
              {ones}
            </span>
          </div>
        </div>

        {/* Question Text */}
        <h2 className="font-['Chunky'] font-extrabold text-2xl lg:text-4xl text-[#FFD22A] leading-tight tracking-tight">
          {question.question}
        </h2>

        {/* Hint */}
        {question.hint && (
          <div className="mt-6 pt-4 flex items-center gap-3">
            <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-[#353534] shadow-[0_6px_0_#0e0e0e,inset_0_2px_2px_rgba(255,255,255,0.1)] flex items-center justify-center">
              <svg
                className="w-10 h-10 text-[#a6c8ff]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-['Quicksand'] font-bold text-sm text-[#a6c8ff]">
                Referensi Visual Teori
              </span>
              <span className="font-['Quicksand'] font-semibold text-xs text-[#d1c6ac]">
                {question.hint}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
