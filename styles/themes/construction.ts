import type { Theme } from "./types";

export const constructionTheme = {
  colors: {
    background: "#f8f7f4",
    foreground: "#171717",
    surface: "#ffffff",
    surfaceForeground: "#171717",
    muted: "#6b6b66",
    border: "#e4e1da",
    primary: "#c2410c",
    primaryHover: "#9a3412",
    primaryForeground: "#ffffff",
  },

  radius: {
    button: "0.5rem",
    card: "1rem",
  },
} satisfies Theme;