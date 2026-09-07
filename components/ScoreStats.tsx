"use client";

import type { QuizResult } from "@/types/quiz";

type ScoreStatsProps = {
  result: QuizResult;
};

/**
 * Three stat cards: Jawaban Benar, Jawaban Salah, Total Soal.
 * Uses clay numbers matching Stitch result page.
 */
export default function ScoreStats({ result }: ScoreStatsProps) {
  const stats = [
    {
      label: "JAWABAN BENAR",
      value: result.correct,
      color: "#43DFA6",
      shadowColor: "#1E845F",
      badgeNum: "01",
      description: `Soal dijawab dengan analisa etika & moral yang tepat`,
    },
    {
      label: "JAWABAN SALAH",
      value: result.wrong,
      color: "#FF4A3D",
      shadowColor: "#A51C12",
      badgeNum: "02",
      description: `Perlu pemahaman lebih mendalam tentang teori moral`,
    },
    {
      label: "TOTAL SOAL",
      value: result.total,
      color: "#489BFF",
      shadowColor: "#0B5AC2",
      badgeNum: "03",
      description: `Seluruh pertanyaan telah dikerjakan`,
    },
  ];

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2 h-2 rounded-full bg-[#FFD22A]" />
        <h3 className="font-['Chunky'] font-bold text-lg text-[#FFF8E8]">
          RINCIAN JAWABAN KUIS
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-[#201f1f] p-5 rounded-2xl shadow-[inset_0_2px_2px_rgba(255,255,255,0.06),0_10px_0px_#090909,0_20px_30px_rgba(0,0,0,0.85)] text-center"
          >
            {/* Badge Number */}
            <div
              className="inline-flex items-center justify-center w-8 h-8 rounded-full font-['Bricolage_Grotesque'] font-bold text-xs mb-3"
              style={{
                backgroundColor: stat.color,
                color: "#000",
                boxShadow: `inset 0 2px 1px rgba(255,255,255,0.5), 0 3px 0 ${stat.shadowColor}`,
              }}
            >
              {stat.badgeNum}
            </div>

            {/* Label */}
            <p className="font-['Quicksand'] font-bold text-xs text-[#E6C750] uppercase tracking-wider mb-2">
              {stat.label}
            </p>

            {/* Value */}
            <p
              className="font-['Bricolage_Grotesque'] font-extrabold text-5xl mb-2"
              style={{
                color: stat.color,
                textShadow: `0 4px 0 rgba(0,0,0,0.4), 0 8px 12px rgba(0,0,0,0.6)`,
              }}
            >
              {stat.value}
            </p>

            {/* Description */}
            <p className="font-['Quicksand'] font-medium text-xs text-[#999079]">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
