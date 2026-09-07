/**
 * Clay-themed loading state with stop-motion animation.
 */
export default function LoadingState({ message = "MENGHITUNG NILAI..." }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-16">
      {/* Spinning Clay Orb */}
      <div className="relative">
        <div
          className="w-16 h-16 rounded-full bg-[#FFD22A] animate-clay-spin"
          style={{
            boxShadow:
              "inset 0 3px 2px rgba(255,255,255,0.6), 0 6px 0 #a07400, 0 12px 20px rgba(0,0,0,0.7)",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#0e0e0e]" />
      </div>

      {/* Text */}
      <p className="font-['Bricolage_Grotesque'] font-bold text-lg text-[#E6C750] tracking-wider animate-clay-pulse">
        {message}
      </p>

      {/* Clay dots */}
      <div className="flex items-center gap-2">
        {["#FF742F", "#FFD22A", "#43DFA6"].map((color, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full animate-clay-bounce"
            style={{
              backgroundColor: color,
              boxShadow: `0 2px 0 rgba(0,0,0,0.3)`,
              animationDelay: `${i * 200}ms`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
