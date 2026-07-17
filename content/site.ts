// content/site.ts

const variants = [
  "classic",
  "clinic",
  "barber",
  "beauty",
  "construction",
] as const;

export type SiteVariant = (typeof variants)[number];

type SiteConfig = {
  variant: SiteVariant;

  seo: {
    title: string;
    description: string;
    keywords: string[];
  };

  cta: {
    label: string;
    href: string;
  };

  locale: string;
  language: string;
  themeColor: string;
};

/**
 * Aktívny variant Starter Kitu.
 *
 * Pri vytváraní konkrétneho webu meníš iba túto hodnotu.
 */
const activeVariant: SiteVariant = "construction";

const sites = {
  classic: {
    variant: "classic",

    seo: {
      title: "Autoservis Nitra | Rýchly a spoľahlivý servis vozidiel",
      description:
        "Spoľahlivý autoservis v Nitre. Diagnostika, pravidelný servis, opravy vozidiel, pneuservis a profesionálna starostlivosť o vaše auto.",
      keywords: [
        "autoservis Nitra",
        "oprava auta Nitra",
        "servis vozidiel",
        "diagnostika auta",
        "pneuservis Nitra",
      ],
    },

    cta: {
      label: "Objednať servis",
      href: "#kontakt",
    },

    locale: "sk_SK",
    language: "sk",
    themeColor: "#111827",
  },

  clinic: {
    variant: "clinic",

    seo: {
      title: "Zubná ambulancia Nitra | Starostlivosť pre celú rodinu",
      description:
        "Moderná zubná ambulancia v Nitre poskytujúca preventívnu, konzervačnú a estetickú stomatologickú starostlivosť pre deti aj dospelých.",
      keywords: [
        "zubná ambulancia Nitra",
        "zubár Nitra",
        "zubná starostlivosť",
        "dentálna hygiena Nitra",
        "stomatológ Nitra",
      ],
    },

    cta: {
      label: "Objednať termín",
      href: "#kontakt",
    },

    locale: "sk_SK",
    language: "sk",
    themeColor: "#0F766E",
  },

  barber: {
    variant: "barber",

    seo: {
      title: "NORTH Barber Bratislava | Strih, ktorý sedí vášmu štýlu",
      description:
        "Moderný barbershop v Bratislave. Pánske strihy, úprava brady, holenie a profesionálna starostlivosť prispôsobená vášmu štýlu.",
      keywords: [
        "barber Bratislava",
        "barbershop Bratislava",
        "pánsky strih Bratislava",
        "úprava brady",
        "NORTH barber",
      ],
    },

    cta: {
      label: "Rezervovať termín",
      href: "#kontakt",
    },

    locale: "sk_SK",
    language: "sk",
    themeColor: "#171717",
  },

  beauty: {
    variant: "beauty",

    seo: {
      title: "Bloom Beauty Studio Nitra | Profesionálna starostlivosť o krásu",
      description:
        "Moderné beauty štúdio v Nitre. Kozmetické ošetrenia, laminácia obočia, lash lifting, manikúra a profesionálna starostlivosť.",
      keywords: [
        "beauty studio Nitra",
        "kozmetika Nitra",
        "laminácia obočia Nitra",
        "lash lifting Nitra",
        "manikúra Nitra",
      ],
    },

    cta: {
      label: "Rezervovať termín",
      href: "#kontakt",
    },

    locale: "sk_SK",
    language: "sk",
    themeColor: "#BE7C7C",
  },

  construction: {
    variant: "construction",

    seo: {
      title: "Konstrukt | Výstavba a rekonštrukcie v Nitre",
      description:
        "Profesionálna stavebná firma zameraná na výstavbu rodinných domov, rekonštrukcie, hrubé stavby a realizáciu komerčných priestorov.",
      keywords: [
        "stavebná firma Nitra",
        "výstavba rodinných domov",
        "rekonštrukcie Nitra",
        "hrubé stavby",
        "Konstrukt",
      ],
    },

    cta: {
      label: "Vyžiadať ponuku",
      href: "#kontakt",
    },

    locale: "sk_SK",
    language: "sk",
    themeColor: "#D97706",
  },
} satisfies Record<SiteVariant, SiteConfig>;

export const site: SiteConfig = sites[activeVariant];