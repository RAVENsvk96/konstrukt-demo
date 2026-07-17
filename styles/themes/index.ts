import type { SiteVariant } from "@/content/site";

import { barberTheme } from "./barber";
import { beautyTheme } from "./beauty";
import { classicTheme } from "./classic";
import { clinicTheme } from "./clinic";
import { constructionTheme } from "./construction";
import type { Theme } from "./types";

export const themes = {
  classic: classicTheme,
  clinic: clinicTheme,
  barber: barberTheme,
  beauty: beautyTheme,
  construction: constructionTheme,
} satisfies Record<SiteVariant, Theme>;