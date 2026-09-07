import { titleLetterColors, letterRotations } from "@/config/theme";

type ClayTitleProps = {
  /** The text to render as clay letters. Can be a single word or multi-word. */
  text: string;
  /** Size variant */
  size?: "lg" | "md" | "sm";
  /** Additional CSS classes */
  className?: string;
};

/**
 * Renders each character as an individual clay block with assigned colors,
 * slight rotations, and extruded 3D shadows — matching the Stitch design.
 */
export default function ClayTitle({
  text,
  size = "lg",
  className = "",
}: ClayTitleProps) {
  const words = text.trim().split(/\s+/).filter(Boolean);

  const sizeClasses = {
    lg: "[--tile:3.5rem] sm:[--tile:5rem] md:[--tile:6rem] lg:[--tile:7rem] [--gap:0.375rem] sm:[--gap:0.75rem] md:[--gap:1rem] lg:[--gap:1.25rem]",
    md: "[--tile:2.25rem] sm:[--tile:3rem] md:[--tile:4rem] lg:[--tile:4.5rem] [--gap:0.125rem] sm:[--gap:0.375rem] md:[--gap:0.5rem] lg:[--gap:0.625rem]",
    sm: "[--tile:1.75rem] sm:[--tile:2.5rem] md:[--tile:3rem] [--gap:0.125rem] sm:[--gap:0.25rem] md:[--gap:0.375rem]",
  };

  let globalIndex = 0;

  return (
    <div role="img" aria-label={text} className={`w-full min-w-0 flex flex-col items-center gap-3 sm:gap-4 ${sizeClasses[size]} ${className}`}>
      {words.map((word, wordIndex) => (
        <div
          key={wordIndex}
          aria-hidden="true"
          className="grid w-full gap-[var(--gap)]"
          style={{
            gridTemplateColumns: `repeat(${word.length}, minmax(0, 1fr))`,
            maxWidth: `calc(${word.length} * var(--tile) + ${Math.max(0, word.length - 1)} * var(--gap))`,
          }}
        >
          {word.split("").map((letter) => {
            if (letter === " ") {
              globalIndex++;
              return null;
            }
            const colorIndex = globalIndex % titleLetterColors.length;
            const rotIndex = globalIndex % letterRotations.length;
            const color = titleLetterColors[colorIndex];
            const rotation = letterRotations[rotIndex];
            globalIndex++;

            return (
              <div
                key={`${wordIndex}-${globalIndex}`}
                className="@container min-w-0 group relative transition-transform duration-100 hover:-translate-y-2 active:translate-y-1"
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                <div
                  className={`w-full ${size === "lg" ? "aspect-[7/8]" : "aspect-[9/11]"} rounded-[22%] text-[55cqw] font-['Chunky'] font-extrabold flex items-center justify-center select-none`}
                  style={{
                    backgroundColor: color.bg,
                    color: color.text,
                    boxShadow: `inset 0 ${size === "lg" ? "4px 3px" : "3px 2px"} rgba(255,255,255,0.6), inset 0 ${size === "lg" ? "-5px 6px" : "-4px 4px"} rgba(0,0,0,0.35), 0 ${size === "lg" ? "8px" : size === "md" ? "5px" : "4px"} 0px ${color.shadow}, 0 ${size === "lg" ? "20px 25px" : "14px 18px"} rgba(0,0,0,0.85)`,
                  }}
                >
                  {letter.toUpperCase()}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
