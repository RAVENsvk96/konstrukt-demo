import type { Company } from "@/types/company";

export const company: Company = {
  // Branding
  name: "Bloom Beauty Studio",
  slogan: "Krása, ktorá rozkvitá",
  description:
    "Moderné beauty štúdio v Nitre. Kozmetické ošetrenia, laminácia obočia, lash lifting, manikúra a profesionálna starostlivosť o vašu krásu.",

  // Location
  city: "Nitra",
  address: "Nitra, Slovensko",
  areaServed: "Nitra a okolie",

  // Contact
  phone: "+421 900 123 456",
  email: "info@bloombeauty.sk",

  // Opening hours
  openingHours: "Po – So • 09:00 – 19:00",
  openingHoursSchema: ["Mo-Sa 09:00-19:00"],

  // Web
  website: "https://bloom-beauty-demo.vercel.app",
  mapUrl: "https://www.google.com/maps?q=Nitra&output=embed",

  // Images
  heroImage: "/images/beauty-hero.jpg",
  logo: "/images/logo-navbar.png",
  ogImage: "/images/og-image.png",

  // SEO
  priceRange: "€€",

  socialLinks: [],
};