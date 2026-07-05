// content/site.ts

export const variants = [
  "classic",
  "clinic",
] as const;

export type SiteVariant = (typeof variants)[number];

export const site = {
  variant: "clinic",
} satisfies {
  variant: SiteVariant;
};