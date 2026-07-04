export const variants = {
  classic: "classic",
  clinic: "clinic",
} as const;

export type Variant = keyof typeof variants;