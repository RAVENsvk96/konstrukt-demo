// content/site.ts

export const variants = [
  "classic",
  "clinic",
  "barber",
] as const;

export type SiteVariant = (typeof variants)[number];

export const site = {
  variant: "barber",
} satisfies {
  variant: SiteVariant;
};