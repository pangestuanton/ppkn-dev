"use client";

type ProgressBarProps = {
  current: number;
  total: number;
};

/**
 * Clay-style segmented progress bar with gradient fill and clay node stopper.
 * Matches the Stitch quiz page progress bar.
 */
export default function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="w-full h-5 rounded-full bg-[#0e0e0e] p-1 shadow-[inset_0_3px_6px_rgba(0,0,0,0.9)] flex items-center relative">
      {/* Filled Track */}
      <div
        className="h-full rounded-full relative flex items-center justify-end transition-all duration-300"
        style={{
          width: `${Math.max(progress, 5)}%`,
          background:
            "linear-gradient(to right, #c84d00, #FFD22A, #a6c8ff)",
        }}
      >
        {/* Highlight overlay */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow:
              "inset 0 2px 1px rgba(255,255,255,0.45), 0 2px 4px rgba(0,0,0,0.6)",
          }}
        />
        {/* Clay Node Stopper */}
        <div
          className="w-5 h-5 rounded-full bg-[#c1d8ff] -mr-1.5 transform hover:scale-110 transition-transform relative z-10"
          style={{
            boxShadow:
              "inset 0 2px 2px #ffffff, 0 3px 0 #004786, 0 6px 10px rgba(0,0,0,0.5)",
          }}
        />
      </div>

      {/* Slot indicators */}
      <div className="absolute inset-0 flex justify-between px-3 items-center pointer-events-none">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={`w-1.5 h-1.5 rounded-full bg-[#353534] ${
              i < current ? "opacity-0" : "opacity-40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
