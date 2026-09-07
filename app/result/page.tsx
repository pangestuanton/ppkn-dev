"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import type { QuizResult } from "@/types/quiz";
import ClayTitle from "@/components/ClayTitle";
import ResultCard from "@/components/ResultCard";
import ScoreStats from "@/components/ScoreStats";
import LoadingState from "@/components/LoadingState";

export default function ResultPage() {
  const router = useRouter();
  const [result, setResult] = useState<QuizResult | null>(null);

  useEffect(() => {
    const storedResult = sessionStorage.getItem("quizResult");
    if (!storedResult) {
      router.replace("/");
      return;
    }
    try {
      setResult(JSON.parse(storedResult));
    } catch {
      router.replace("/");
    }
  }, [router]);

  if (!result) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] flex items-center justify-center">
        <LoadingState message="MEMUAT HASIL..." />
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-6 sm:py-8 flex flex-col items-center gap-6 sm:gap-8 select-none relative">
      {/* Ambient Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[300px] bg-[#FFD22A]/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Header Info */}
      <div className="flex items-center gap-2 text-center">
        <span className="w-3 h-3 rounded-full bg-[#43DFA6] shadow-[0_0_8px_#43DFA6]" />
        <span className="font-['Quicksand'] font-bold text-xs text-[#E6C750] uppercase tracking-widest">
          HASIL KUIS • EVALUASI MODUL
        </span>
      </div>

      {/* Clay Title */}
      <ClayTitle text="HASIL KUIS" size="md" />

      {/* Participant Info */}
      <div className="max-w-full flex flex-wrap justify-center items-center gap-2 text-center">
        <span className="w-2.5 h-2.5 rounded-full bg-[#54CED7] shadow-[0_0_6px_#54CED7]" />
        <span className="font-['Quicksand'] font-bold text-base text-[#FFF8E8]">
          {result.name}
        </span>
        <span className="font-['Quicksand'] font-semibold text-sm text-[#999079]">
          / Mahasiswa Program Studi PPKn
        </span>
      </div>

      {/* Score Card */}
      <div className="w-full max-w-2xl">
        <ResultCard result={result} />
      </div>

      {/* Score Stats */}
      <div className="w-full max-w-3xl">
        <ScoreStats result={result} />
      </div>

      {/* CTA Buttons */}
      <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-4 mb-8">
        <button
          type="button"
          onClick={() => router.push("/leaderboard")}
          className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-4 sm:px-8 py-4 rounded-full bg-[#201f1f] text-[#FFF8E8] font-['Bricolage_Grotesque'] font-bold text-sm uppercase
            shadow-[inset_0_2px_2px_rgba(255,255,255,0.08),0_5px_0_#0c0c0c,0_10px_16px_rgba(0,0,0,0.7)]
            hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_1px_0_#0c0c0c]
            transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          LIHAT PAPAN PERINGKAT
        </button>

        <button
          type="button"
          onClick={() => {
            sessionStorage.removeItem("quizResult");
            sessionStorage.removeItem("participantName");
            router.push("/");
          }}
          className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-4 sm:px-8 py-4 rounded-full bg-[#FFD22A] text-[#3c2f00] font-['Bricolage_Grotesque'] font-bold text-sm uppercase
            shadow-[inset_0_3px_2px_rgba(255,255,255,0.6),0_6px_0_#a07400,0_12px_20px_rgba(0,0,0,0.6)]
            hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_#a07400]
            transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          KEMBALI KE BERANDA
        </button>
      </div>
    </div>
  );
}
