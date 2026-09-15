"use client";

import { Timer } from "lucide-react";

type QuizTimerProps = {
  timeLeft: number;
  totalDuration?: number;
};

export default function QuizTimer({
  timeLeft,
  totalDuration = 30,
}: QuizTimerProps) {
  const percentage = Math.max(0, Math.min(100, (timeLeft / totalDuration) * 100));
  const isUrgent = timeLeft <= 5;
  const isWarning = timeLeft <= 10 && !isUrgent;

  // Determine colors based on remaining time
  const textColor = isUrgent
    ? "text-[#FF4A3D]"
    : isWarning
    ? "text-[#ffb597]"
    : "text-[#a6c8ff]";

  const progressBg = isUrgent
    ? "bg-[#FF4A3D]"
    : isWarning
    ? "bg-[#ff9248]"
    : "bg-gradient-to-r from-[#60a5fa] to-[#a6c8ff]";

  const glowShadow = isUrgent
    ? "shadow-[0_0_12px_rgba(255,74,61,0.5)]"
    : isWarning
    ? "shadow-[0_0_10px_rgba(255,146,72,0.4)]"
    : "shadow-[0_0_8px_rgba(166,200,255,0.2)]";

  return (
    <div
      className={`flex items-center gap-2.5 sm:gap-3 bg-[#1c1b1b] px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-[inset_0_3px_5px_rgba(0,0,0,0.8),0_4px_0_#0e0e0e] border transition-all ${
        isUrgent
          ? "border-[#FF4A3D]/60 animate-pulse"
          : isWarning
          ? "border-[#ff9248]/40"
          : "border-[#353534]/50"
      }`}
    >
      <div
        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
          isUrgent
            ? "bg-[#FF4A3D]/20 text-[#FF4A3D]"
            : isWarning
            ? "bg-[#ff9248]/20 text-[#ff9248]"
            : "bg-[#2a2a2a] text-[#a6c8ff]"
        }`}
      >
        <Timer className={`w-4 h-4 sm:w-4.5 sm:h-4.5 ${isUrgent ? "animate-spin" : ""}`} style={{ animationDuration: "2s" }} />
      </div>

      <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
          <span
            className={`font-['Bricolage_Grotesque'] font-extrabold text-lg sm:text-2xl leading-none tabular-nums transition-colors ${textColor}`}
            style={{ filter: isUrgent ? "drop-shadow(0 2px 0 #7d1500)" : undefined }}
          >
            {String(timeLeft).padStart(2, "0")}
          </span>
          <span className="font-['Quicksand'] font-bold text-xs text-[#999079]">
            dtk
          </span>
        </div>
        {/* Tiny Progress Track */}
        <div className="w-16 sm:w-20 h-1.5 rounded-full bg-[#2a2a2a] overflow-hidden mt-1 shadow-inner">
          <div
            className={`h-full rounded-full transition-all duration-300 ease-linear ${progressBg} ${glowShadow}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
