import { site } from "@/content/site";
import type { Company } from "@/types/company";

const companies = {
  classic: {
    // Branding
    name: "Autoservis",
    slogan: "Opravíme vaše auto rýchlo, férovo a spoľahlivo.",
    description:
      "Spoľahlivý autoservis v Nitre. Poskytujeme pravidelný servis, diagnostiku, opravy vozidiel, výmenu pneumatík a profesionálnu starostlivosť o vaše auto.",

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
    website: "https://autoservis-demo.vercel.app",
    mapUrl:
      "https://www.google.com/maps?q=Nitra%2C%20Slovensko&output=embed",

    // Images
    heroImage: "/images/classic-hero.jpg",
    logo: "/images/logo-navbar.png",
    ogImage: "/images/og-image.png",

    // SEO
    priceRange: "€€",

    // Social media
    socialLinks: [],
  },

  clinic: {
    // Branding
    name: "Zubná Ambulancia",
    slogan: "Moderná zubná starostlivosť pre celú rodinu.",
    description:
      "Moderná zubná ambulancia v Nitre poskytujúca preventívnu, konzervačnú a estetickú stomatologickú starostlivosť pre deti aj dospelých.",

    // Location
    city: "Nitra",
    address: "Nitra, Slovensko",
    areaServed: "Nitra a okolie",

    // Contact
    phone: "+421 900 123 456",
    email: "info@zubnaambulancia.sk",

    // Opening hours
    openingHours: "Po – Pia • 08:00 – 17:00",
    openingHoursSchema: ["Mo-Fr 08:00-17:00"],

    // Web
    website: "https://zubna-ambulancia-demo.vercel.app",
    mapUrl:
      "https://www.google.com/maps?q=Nitra%2C%20Slovensko&output=embed",

    // Images
    heroImage: "/images/clinic-hero.jpg",
    logo: "/images/logo-navbar.png",
    ogImage: "/images/og-image.png",

    // SEO
    priceRange: "€€",

    // Social media
    socialLinks: [],
  },

  barber: {
    // Branding
    name: "NORTH",
    slogan: "Strih, ktorý sedí vášmu štýlu.",
    description:
      "Moderné barbershop štúdio v Bratislave. Ponúkame pánske strihy, úpravu brady, holenie a profesionálnu starostlivosť prispôsobenú vášmu štýlu.",

    // Location
    city: "Bratislava",
    address: "Bratislava, Slovensko",
    areaServed: "Bratislava a okolie",

    // Contact
    phone: "+421 900 123 456",
    email: "hello@northbarber.demo",

    // Opening hours
    openingHours: "Po – So • 09:00 – 19:00",
    openingHoursSchema: ["Mo-Sa 09:00-19:00"],

    // Web
    website: "https://north-barber-demo.vercel.app",
    mapUrl:
      "https://www.google.com/maps?q=Bratislava%2C%20Slovensko&output=embed",

    // Images
    heroImage: "/images/barber-hero.jpg",
    logo: "/images/logo-navbar.png",
    ogImage: "/images/og-image.png",

    // SEO
    priceRange: "€€",

    // Social media
    socialLinks: [],
  },

  beauty: {
    // Branding
    name: "Bloom Beauty Studio",
    slogan: "Krása, ktorá zvýrazní vaše sebavedomie.",
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
    mapUrl:
      "https://www.google.com/maps?q=Nitra%2C%20Slovensko&output=embed",

    // Images
    heroImage: "/images/beauty-hero.jpg",
    logo: "/images/logo-navbar.png",
    ogImage: "/images/og-image.png",

    // SEO
    priceRange: "€€",

    // Social media
    socialLinks: [],
  },

  construction: {
    // Branding
    name: "Konstrukt",
    slogan: "Staviame na kvalite.",
    description:
      "Profesionálna stavebná firma zameraná na výstavbu rodinných domov, rekonštrukcie, hrubé stavby a realizáciu komerčných priestorov.",

    // Location
    city: "Nitra",
    address: "Nitra, Slovensko",
    areaServed: "Nitra, Nitriansky kraj a celé Slovensko",

    // Contact
    phone: "+421 900 123 456",
    email: "info@konstrukt.sk",

    // Opening hours
    openingHours: "Po – Pia • 07:00 – 17:00",
    openingHoursSchema: ["Mo-Fr 07:00-17:00"],

    // Web
    website: "https://konstrukt-demo.vercel.app",
    mapUrl:
      "https://www.google.com/maps?q=Nitra%2C%20Slovensko&output=embed",

    // Images
    heroImage: "/images/construction-hero.jpg",
    logo: "/images/logo-navbar.png",
    ogImage: "/images/og-image.png",

    // SEO
    priceRange: "€€€",

    // Social media
    socialLinks: [],
  },
} satisfies Record<string, Company>;

type CompanyVariant = keyof typeof companies;

function isCompanyVariant(value: string): value is CompanyVariant {
  return value in companies;
}

if (!isCompanyVariant(site.variant)) {
  throw new Error(
    `Variant "${site.variant}" nemá firemné údaje v content/company.ts.`,
  );
}

export const company: Company = companies[site.variant];