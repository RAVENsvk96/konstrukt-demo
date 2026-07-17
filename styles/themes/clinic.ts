import type { Theme } from "./types";

export const clinicTheme = {
  colors: {
    background: "#0b1220",
    foreground: "#f8fafc",
    surface: "#111827",
    surfaceForeground: "#f8fafc",
    muted: "#cbd5e1",
    border: "#334155",
    primary: "#38bdf8",
    primaryHover: "#0ea5e9",
    primaryForeground: "#082f49",
  },

  radius: {
    button: "0.75rem",
    card: "1.5rem",
  },
} satisfies Theme;