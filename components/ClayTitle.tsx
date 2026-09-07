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
  const words = text.split(" ");

  const sizeClasses = {
    lg: "w-14 h-16 sm:w-20 sm:h-24 md:w-24 md:h-28 lg:w-28 lg:h-32 rounded-2xl sm:rounded-3xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl",
    md: "w-9 h-11 sm:w-12 sm:h-16 md:w-16 md:h-20 lg:w-[4.5rem] lg:h-[5.5rem] rounded-xl sm:rounded-2xl text-lg sm:text-2xl md:text-3xl lg:text-4xl",
    sm: "w-7 h-9 sm:w-10 sm:h-12 md:w-12 md:h-14 rounded-lg sm:rounded-xl text-sm sm:text-xl md:text-2xl",
  };

  let globalIndex = 0;

  return (
    <div className={`flex flex-col items-center gap-1 sm:gap-2 ${className}`}>
      {words.map((word, wordIndex) => (
        <div
          key={wordIndex}
          className={`flex items-center justify-center flex-wrap ${
            size === "lg"
              ? "gap-1.5 sm:gap-3 md:gap-4 lg:gap-5"
              : size === "md"
              ? "gap-1 sm:gap-1.5 md:gap-2 lg:gap-2.5"
              : "gap-0.5 sm:gap-1 md:gap-1.5"
          }`}
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
                className={`group relative transition-transform duration-100 hover:-translate-y-2 active:translate-y-1`}
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                <div
                  className={`${sizeClasses[size]} font-['Chunky'] font-extrabold flex items-center justify-center select-none`}
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
