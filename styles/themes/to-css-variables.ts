import type { CSSProperties } from "react";

import type { Theme } from "./types";

type ThemeCssVariables = CSSProperties &
  Record<`--${string}`, string>;

export function themeToCssVariables(
  theme: Theme
): ThemeCssVariables {
  return {
    "--background": theme.colors.background,
    "--foreground": theme.colors.foreground,
    "--surface": theme.colors.surface,
    "--muted": theme.colors.muted,
    "--border": theme.colors.border,
    "--primary": theme.colors.primary,
    "--primary-hover": theme.colors.primaryHover,
    "--primary-foreground": theme.colors.primaryForeground,
    "--radius-button": theme.radius.button,
    "--radius-card": theme.radius.card,
    "--surface-foreground": theme.colors.surfaceForeground,
  };
}