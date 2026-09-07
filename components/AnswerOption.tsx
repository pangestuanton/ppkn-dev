"use client";

import { optionBadgeColors } from "@/config/theme";
import { Check } from "lucide-react";

type AnswerOptionProps = {
  letter: "A" | "B" | "C" | "D";
  text: string;
  isSelected: boolean;
  onSelect: () => void;
};

/**
 * Single answer option button — matching Stitch quiz page design.
 * Clay badge with letter, text, radio indicator with checkmark when selected.
 */
export default function AnswerOption({
  letter,
  text,
  isSelected,
  onSelect,
}: AnswerOptionProps) {
  const colors = optionBadgeColors[letter];

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isSelected}
      className={`group text-left w-full min-h-16 gap-3 p-3 sm:p-4 rounded-2xl transition-all flex items-center justify-between
        ${
          isSelected
            ? "bg-[#2a2a2a] shadow-[inset_0_2px_2px_rgba(255,210,42,0.4),0_6px_0_#715a00,0_12px_20px_rgba(255,210,42,0.15)] ring-2 ring-[#FFD22A]"
            : "bg-[#1c1b1b] hover:bg-[#201f1f] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_6px_0_#0c0c0c,0_10px_14px_rgba(0,0,0,0.6)]"
        }
        active:translate-y-1 active:shadow-[0_2px_0_#0c0c0c]`}
    >
      <div className="min-w-0 flex items-center gap-3 sm:gap-4">
        {/* Clay Badge Letter */}
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center font-['Bricolage_Grotesque'] font-bold text-lg select-none shrink-0"
          style={{
            backgroundColor: colors.bg,
            color: colors.text,
            boxShadow: `inset 0 3px 2px rgba(255,255,255,0.6), inset 0 -3px 3px rgba(0,0,0,0.3), 0 4px 0 ${colors.shadow}`,
          }}
        >
          {letter}
        </div>
        <span
          className={`font-['Quicksand'] font-bold text-base sm:text-lg leading-relaxed ${
            isSelected
              ? "text-[#FFD22A]"
              : "text-[#e5e2e1] group-hover:text-[#FFD22A]"
          }`}
        >
          {text}
        </span>
      </div>

      {/* Radio Indicator */}
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
          isSelected
            ? "bg-[#edc212] text-[#3c2f00] shadow-[inset_0_2px_2px_rgba(255,255,255,0.7),0_2px_0_#725c00]"
            : "bg-[#353534] shadow-[inset_0_2px_3px_rgba(0,0,0,0.8)]"
        }`}
      >
        {isSelected && <Check size={14} strokeWidth={3} />}
      </div>
    </button>
  );
}
