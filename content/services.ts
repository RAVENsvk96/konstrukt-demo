import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    title: "Výmena oleja a filtrov",
    description:
      "Používame kvalitné oleje a filtre podľa odporúčania výrobcu.",
    price: "od 59 €",
    icon: "wrench",
  },
  {
    title: "Brzdy a podvozok",
    description:
      "Kontrola a oprava bŕzd, tlmičov a podvozka.",
    price: "od 79 €",
    icon: "disc",
  },
  {
    title: "Pneuservis",
    description:
      "Prezutie, vyváženie a uskladnenie pneumatík.",
    price: "od 25 €",
    icon: "circle-dot",
  },
  {
    title: "Diagnostika vozidla",
    description:
      "Kompletná diagnostika riadiacich jednotiek.",
    price: "od 30 €",
    icon: "scan-search",
  },
];