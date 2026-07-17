import type { Theme } from "./types";

export const classicTheme = {
  colors: {
    background: "#09090b",
    foreground: "#f4f4f5",
    surface: "#18181b",
    surfaceForeground: "#f4f4f5",
    muted: "#a1a1aa",
    border: "#27272a",
    primary: "#f97316",
    primaryHover: "#ea580c",
    primaryForeground: "#ffffff",
  },

  radius: {
    button: "0.75rem",
    card: "1.5rem",
  },
} satisfies Theme;