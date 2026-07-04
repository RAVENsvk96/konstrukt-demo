# Starter Kit v2

## Vízia

Starter Kit v2 nie je jedna šablóna.

Je to systém skladania moderných prezentačných webov pomocou zameniteľných dizajnových variantov pri zachovaní rovnakej architektúry.

---

# Ciele

- Zachovať jednotnú architektúru projektu.
- Zachovať rovnaké SEO.
- Zachovať content-driven prístup.
- Zachovať typovú bezpečnosť.
- Umožniť vytvárať vizuálne odlišné weby bez refaktoringu.

---

# Architektúra

app/

components/

content/

types/

lib/

hooks/

docs/

---

# Design Variants

components/

variants/

classic/

clinic/

minimal/

luxury/

agency/

---

Každý variant obsahuje vlastné implementácie sekcií.

Hero

Services

WhyUs

Reviews

CTA

Footer

---

# Content

Všetky varianty používajú rovnaké content súbory.

company.ts

hero.ts

services.ts

reviews.ts

faq.ts

contact.ts

---

# Theme

Každý variant používa rovnaké CSS premenné.

primary

primary-hover

surface

surface-dark

border

muted

success

danger

warning

---

# Page

page.tsx vyberá iba variant.

import Hero from "@/components/variants/classic/Hero"

---

# Pravidlá

Business logika nikdy nepatrí do variantov.

Variant rieši iba UI.

Content nikdy nie je hardcoded.

Farby vždy používajú Theme System.

---

# Budúce varianty

Classic

Clinic

Luxury

Minimal

Agency

Restaurant

Construction

Real Estate

Law

Barber

Fitness