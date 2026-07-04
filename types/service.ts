export type ServiceIcon =
  | "wrench"
  | "disc"
  | "circle-dot"
  | "scan-search";

export interface Service {
  title: string;
  description: string;

  icon: ServiceIcon;

  price?: string;

  href?: string;

  featured?: boolean;
}