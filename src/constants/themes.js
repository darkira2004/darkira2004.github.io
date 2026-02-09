/** Temas oscuros sólidos (estilo Cursor y variantes) */
export const THEMES = [
  { id: "black", bg: "#000000d9" }, // Pure OLED
  { id: "cursor", bg: "#161616" }, // VS Code / Cursor dark
  { id: "claude", bg: "#222222ff" }, // Claude AI Dark
  { id: "aqua", bg: "#1e293b" }, // Slate-800
  { id: "obsidian", bg: "#0b0c10" }, // Deepest clean dark
  { id: "charcoal", bg: "#121212" }, // Material Dark
  { id: "gunmetal", bg: "#1a1d23" }, // Technical dark grey
  { id: "midnight", bg: "#0f172a" }, // Deep Slate 900
  { id: "deep-ocean", bg: "#020617" }, // Almost black blue
  { id: "coffee", bg: "#1c1917ca" }, // Stone 900 (Warm dark)
  { id: "nebula", bg: "#18181b" }, // Zinc 900 (Neutral)
  { id: "eclipse", bg: "#0d1117" }, // GitHub Dimmed style
];

const STORAGE_KEY = "themeId";

export function getThemeFromStorageOrValue(valueHex) {
  const stored = localStorage.getItem(STORAGE_KEY);
  const byId = THEMES.find((t) => t.id === stored);
  if (byId) return byId;
  const hex = (valueHex || "").toLowerCase().slice(0, 7);
  const byHex = THEMES.find((t) => t.bg.toLowerCase() === hex);
  return byHex || THEMES[1];
}

export { STORAGE_KEY };
