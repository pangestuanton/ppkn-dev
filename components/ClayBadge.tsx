import type { ReactNode } from "react";

type ClayBadgeProps = {
  icon: ReactNode;
  title: string;
  subtitle: string;
  color: string;
  shadowColor: string;
  textColor?: string;
  rotation?: number;
};

/**
 * Clay feature badge — used on landing page for quiz info cards.
 * Matches the Stitch landing page badge design.
 */
export default function ClayBadge({
  icon,
  title,
  subtitle,
  color,
  shadowColor,
  textColor = "#003926",
  rotation = 0,
}: ClayBadgeProps) {
  return (
    <div
      className="flex items-center gap-3 bg-[#1c1b1b] px-4 py-3 rounded-2xl
        shadow-[inset_0_2px_1px_rgba(255,255,255,0.08),0_6px_0px_#090909,0_12px_16px_rgba(0,0,0,0.7)]
        hover:-translate-y-1 transition-transform cursor-default"
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{
          backgroundColor: color,
          color: textColor,
          boxShadow: `inset 0 2px 2px rgba(255,255,255,0.5), 0 3px 0px ${shadowColor}`,
          transform: `rotate(${rotation}deg)`,
        }}
      >
        {icon}
      </div>
      <div className="flex flex-col text-left">
        <span className="font-['Bricolage_Grotesque'] font-bold text-lg text-[#FFF8E8]">
          {title}
        </span>
        <span className="font-['Quicksand'] font-semibold text-xs text-[#E6C750]">
          {subtitle}
        </span>
      </div>
    </div>
  );
}
