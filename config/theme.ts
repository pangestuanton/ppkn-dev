/**
 * Clay color palette from the Stitch Design System (Claymation Noir).
 * These are design tokens — NOT runtime data.
 */
export const clayColors = {
  blue: "#489BFF",
  aqua: "#54CED7",
  mint: "#43DFA6",
  lime: "#91CE3E",
  yellow: "#FFD22A",
  orange: "#FF742F",
  red: "#FF4A3D",
  purple: "#BC68DF",
  pink: "#F571B8",
} as const;

/** Darker shade for clay extrusion shadows */
export const clayShadowColors = {
  blue: "#0B5AC2",
  aqua: "#238691",
  mint: "#1E845F",
  lime: "#4F7B13",
  yellow: "#A07400",
  orange: "#A73900",
  red: "#A51C12",
  purple: "#6A2685",
  pink: "#9C1C64",
} as const;

/** Dark text on top of clay colors */
export const clayTextColors = {
  blue: "#002654",
  aqua: "#003940",
  mint: "#003926",
  lime: "#223903",
  yellow: "#423300",
  orange: "#431400",
  red: "#480904",
  purple: "#340746",
  pink: "#4A0A2E",
} as const;

/**
 * Option badge color mapping (design system constant).
 * Maps option letters A-D to clay color names.
 */
export const optionBadgeColors = {
  A: { bg: clayColors.orange, shadow: clayShadowColors.orange, text: "#FFF8E8" },
  B: { bg: clayColors.blue, shadow: clayShadowColors.blue, text: "#FFF8E8" },
  C: { bg: clayColors.yellow, shadow: clayShadowColors.yellow, text: clayTextColors.yellow },
  D: { bg: clayColors.lime, shadow: clayShadowColors.lime, text: clayTextColors.lime },
} as const;

/**
 * Clay letter color assignments for title text.
 * Cycles through these colors for each letter.
 */
export const titleLetterColors = [
  { bg: clayColors.aqua, shadow: clayShadowColors.aqua, text: clayTextColors.aqua },
  { bg: clayColors.orange, shadow: clayShadowColors.orange, text: clayTextColors.orange },
  { bg: clayColors.yellow, shadow: clayShadowColors.yellow, text: clayTextColors.yellow },
  { bg: clayColors.mint, shadow: clayShadowColors.mint, text: clayTextColors.mint },
  { bg: clayColors.purple, shadow: clayShadowColors.purple, text: clayTextColors.purple },
  { bg: clayColors.blue, shadow: clayShadowColors.blue, text: clayTextColors.blue },
  { bg: clayColors.pink, shadow: clayShadowColors.pink, text: clayTextColors.pink },
  { bg: clayColors.lime, shadow: clayShadowColors.lime, text: clayTextColors.lime },
  { bg: clayColors.red, shadow: clayShadowColors.red, text: clayTextColors.red },
] as const;

/** Small rotation values for clay letter wobble (design constant) */
export const letterRotations = [-3, 3, -2, 4, -3, 2, -3, 3, -2, 2, 3, -3] as const;
