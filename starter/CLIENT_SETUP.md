# Client Setup Checklist

Tento dokument popisuje kompletný postup vytvorenia nového webu pomocou **Local Business Starter Kitu**.

---

# 1. Firemné údaje

Uprav:

```txt
data/company.ts
```

Vyplň:

- názov firmy
- slogan
- mesto
- webová adresa
- popis firmy
- telefón
- email
- adresa
- otváracie hodiny
- Google Maps URL
- logo
- full logo
- Open Graph obrázok

---

# 2. Branding

Nahraj obrázky do:

```txt
public/images/
```

Odporúčané názvy:

```txt
logo-navbar.png
logo-full.png
hero.jpg
og-image.png
```

Skontroluj, že sa správne zobrazujú:

- Navbar
- Footer
- Open Graph Preview

---

# 3. Služby

Uprav:

```txt
data/services.ts
```

Pre každú službu skontroluj:

- názov
- popis
- cena
- ikona

---

# 4. Sekcia Prečo my

Uprav:

```txt
data/whyUs.ts
```

Skontroluj:

- badge
- nadpis
- všetky dôvody

---

# 5. Recenzie

Uprav:

```txt
data/reviews.ts
```

Použi:

- reálne recenzie klienta

alebo

- kvalitné placeholdery (neskôr ich nahraď)

---

# 6. Štatistiky

Uprav:

```txt
data/stats.ts
```

Skontroluj:

- počet zákazníkov
- počet opravených áut
- počet rokov skúseností
- ostatné štatistiky

Používaj iba reálne alebo realistické údaje.

---

# 7. FAQ

Uprav:

```txt
data/faq.ts
```

FAQ sa používa aj v SEO Structured Data.

Odpovede musia byť:

- pravdivé
- stručné
- prirodzené

---

# 8. Navigácia

Uprav:

```txt
data/navigation.ts
```

Skontroluj:

- názvy položiek
- správne href odkazy

---

# 9. Hero Features

Uprav:

```txt
data/heroFeatures.ts
```

Vyber iba výhody, ktoré klient skutočne ponúka.

---

# 10. Kontakt

Skontroluj:

- telefón
- email
- adresa
- Google Maps
- otváracie hodiny

---

# 11. Kontakt formulár

Skontroluj:

```txt
app/api/contact/route.ts
```

Environment Variables:

```env
RESEND_API_KEY=
CONTACT_EMAIL=
```

Premenné musia byť nastavené:

- lokálne
- vo Verceli

---

# 12. SEO

Skontroluj:

- app/layout.tsx
- app/sitemap.ts
- app/robots.ts
- components/seo/StructuredData.tsx

Over:

- názov firmy
- popis
- URL
- Open Graph
- FAQ Schema
- LocalBusiness Schema

---

# 13. Lokálne testovanie

Spusti:

```bash
npm run dev
```

Skontroluj:

- Hero
- Navbar
- Services
- Why Us
- Reviews
- Stats
- FAQ
- CTA
- Contact
- Footer

Potom skontroluj:

- Desktop
- Tablet
- Mobil

---

# 14. Produkčný build

Pred každým deployom:

```bash
npm run build
```

Build musí prejsť bez chýb.

---

# 15. Deploy

```bash
git add .
git commit -m "feat: create client website"
git push origin main
```

Počkajte na úspešný deployment vo Verceli.

---

# 16. Finálna kontrola

Skontroluj produkčný web:

- logo
- favicon
- Open Graph Preview
- kontaktný formulár
- telefón
- email
- Google Maps
- všetky CTA tlačidlá
- mobilné menu
- responzivitu
- konzolu prehliadača
- Vercel deployment
- Lighthouse

---

# Hotovo ✅

Ak všetky body prešli bez problémov, web je pripravený na odovzdanie klientovi.