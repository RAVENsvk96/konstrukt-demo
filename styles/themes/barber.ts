import type { Theme } from "./types";

export const barberTheme = {
  colors: {
    background: "#F7F3ED",
    foreground: "#111111",
    surface: "#FFFFFF",
    surfaceForeground: "#111111",
    muted: "#666666",
    border: "#E6DED2",
    primary: "#A7865A",
    primaryHover: "#8F7048",
    primaryForeground: "#FFFFFF",
  },

  radius: {
    button: "0.75rem",
    card: "2rem",
  },
} satisfies Theme;