import type { Company } from "@/types/company";

export const company: Company = {
  name: "NORTH",

  slogan: "Crafted for modern gentlemen",

  city: "Bratislava",

  website: "https://barber-demo.vercel.app",

  heroImage: "/images/barber-hero.jpg",
  logo: "/images/logo.png",
  ogImage: "/images/og-image.jpg",

  description:
    "Moderné pánske kaderníctvo zamerané na precízne strihy, úpravu brady a kvalitný servis v pokojnej atmosfére.",

  phone: "+421 900 123 456",

  email: "hello@northbarber.demo",

  address: "Bratislava, Slovensko",

  openingHours: "Po – Pia • 09:00 – 19:00",

  openingHoursSchema: ["Mo-Fr 09:00-19:00"],

  mapUrl: "https://www.google.com/maps?q=Bratislava&output=embed",

  areaServed: "Bratislava a okolie",

  priceRange: "€€",

  socialLinks: [
    {
      platform: "instagram",
      label: "Instagram",
      href: "https://instagram.com/north.barberstudio",
    },
  ],
};