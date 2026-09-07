"use client";

import { useState, useEffect, useCallback } from "react";
import type { LeaderboardEntry } from "@/types/quiz";
import ClayTitle from "@/components/ClayTitle";
import LeaderboardPodium from "@/components/LeaderboardPodium";
import LeaderboardTable from "@/components/LeaderboardTable";
import LoadingState from "@/components/LoadingState";
import ErrorState from "@/components/ErrorState";

export default function LeaderboardPage() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchLeaderboard = useCallback(async () => {
    setIsLoading(true);
    setError("");
    try {
      const res = await fetch("/api/leaderboard");
      if (!res.ok) throw new Error("Gagal memuat papan peringkat");
      const data = await res.json();
      setEntries(data.entries);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal memuat papan peringkat");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLeaderboard();
  }, [fetchLeaderboard]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-6 sm:py-8 flex flex-col items-center gap-6 sm:gap-8 select-none relative">
      {/* Ambient Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[300px] bg-[#a6c8ff]/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-2 text-center">
        <span className="w-3 h-3 rounded-full bg-[#a6c8ff] shadow-[0_0_8px_#a6c8ff]" />
        <span className="font-['Quicksand'] font-bold text-xs text-[#E6C750] uppercase tracking-widest">
          PERKEMBANGAN MORAL
        </span>
      </div>

      {/* Clay Title */}
      <ClayTitle text="PAPAN PERINGKAT" size="md" />

      {/* Subtitle */}
      <p className="font-['Quicksand'] font-semibold text-sm sm:text-base text-[#d1c6ac] text-center">
        Moral Development Quiz • Peringkat Nilai Mahasiswa
      </p>

      {/* Content */}
      {isLoading ? (
        <LoadingState message="MEMUAT PERINGKAT..." />
      ) : error ? (
        <ErrorState message={error} onRetry={fetchLeaderboard} />
      ) : (
        <div className="w-full max-w-3xl flex flex-col gap-8">
          {/* Title Card */}
          <div className="bg-[#201f1f] p-4 sm:p-6 rounded-2xl shadow-[inset_0_2px_2px_rgba(255,255,255,0.06),0_10px_0_#090909,0_20px_30px_rgba(0,0,0,0.85)] text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <ClayTitle text="PRINSIP UTAMA" size="sm" />
            </div>
            <p className="font-['Quicksand'] font-bold text-sm text-[#FFF8E8] mt-4">
              Peringkat Kehormatan Karakter Bangsa
            </p>
            <p className="font-['Quicksand'] font-semibold text-xs text-[#999079] mt-1">
              {entries.length} Mahasiswa • Nilai / 100
            </p>
          </div>

          {/* Podium */}
          <LeaderboardPodium entries={entries} />

          {/* Full List */}
          <LeaderboardTable entries={entries} />

          {/* Tombol Muat Ulang */}
          <div className="flex justify-center mt-4 mb-8">
            <button
              type="button"
              onClick={fetchLeaderboard}
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-4 sm:px-8 py-4 rounded-full bg-[#201f1f] text-[#FFF8E8] font-['Bricolage_Grotesque'] font-bold text-sm uppercase
                shadow-[inset_0_2px_2px_rgba(255,255,255,0.08),0_5px_0_#0c0c0c,0_10px_16px_rgba(0,0,0,0.7)]
                hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_1px_0_#0c0c0c]
                transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              MUAT ULANG PERINGKAT
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
