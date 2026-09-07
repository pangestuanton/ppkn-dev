type MixedFontTextProps = { text: string };

/** Kapital memakai Joshico, sedangkan huruf kecil memakai Arimo. */
export default function MixedFontText({ text }: MixedFontTextProps) {
  return <>{Array.from(text).map((character, index) => {
    const uppercase = character !== character.toLowerCase() && character === character.toUpperCase();
    return <span key={`${character}-${index}`} className={uppercase ? "font-joshico" : "font-arimo"}>{character}</span>;
  })}</>;
}
