// content/site.ts

export const variants = [
  "classic",
  "clinic",
  "barber",
  "beauty",
] as const;

export type SiteVariant = (typeof variants)[number];

export const site = {
  variant: "beauty",
} satisfies {
  variant: SiteVariant;
};