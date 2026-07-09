import type { Company } from "@/types/company";

export const company: Company = {
  // Branding
  name: "AutoServis",
  slogan: "Moderný autoservis v Nitre",
  description:
    "Moderný autoservis v Nitre. Výmena oleja, brzdy, pneuservis, diagnostika a ďalšie služby.",

  // Location
  city: "Nitra",
  address: "Nitra, Slovensko",
  areaServed: "Nitra a okolie",

  // Contact
  phone: "+421 900 123 456",
  email: "info@autoservis.sk",

  // Opening hours
  openingHours: "Po – Pia • 08:00 – 17:00",
  openingHoursSchema: ["Mo-Fr 08:00-17:00"],

  // Web
  website: "https://autoservis-demo-beryl.vercel.app",
  mapUrl: "https://www.google.com/maps?q=Nitra&output=embed",

  // Images
  heroImage: "/images/hero.jpg",
  logo: "/images/logo-navbar.png",
  ogImage: "/images/og-image.png",

  // SEO
  priceRange: "€€",

  socialLinks: [],
};