# Deploy Guide

Tento dokument popisuje postup nasadenia projektu **Local Business Starter Kit** na Vercel.

---

# 1. Pred deployom

Spusti lokálny vývojový server:

```bash
npm run dev
```

Skontroluj:

- Homepage
- Navigáciu
- Hero sekciu
- CTA tlačidlá
- Kontakt
- Mobilné menu
- Responzivitu

---

# 2. Kontrola projektu

Pred každým deployom spusti:

```bash
npm run build
npm run lint
```

Build aj lint musia prejsť bez chýb.

---

# 3. Environment Variables

Vo Verceli otvor:

**Project → Settings → Environment Variables**

Projekt používa:

```env
RESEND_API_KEY=
CONTACT_EMAIL=
```

Po zmene Environment Variables vytvor nový deployment (Redeploy alebo nový `git push`).

---

# 4. Deploy

Odošli zmeny na GitHub:

```bash
git add .
git commit -m "feat: create client website"
git push
```

Vercel automaticky vytvorí nový deployment.

---

# 5. Kontrola po deployi

Skontroluj produkčný web:

- stránka sa načíta
- logo sa zobrazuje správne
- hero obrázok sa načíta
- všetky obrázky fungujú
- CTA tlačidlá fungujú
- telefónny odkaz funguje
- emailový odkaz funguje
- kontaktný formulár funguje
- mobilné menu funguje
- Open Graph obrázok funguje
- favicon sa zobrazuje
- deployment vo Verceli je úspešný

Odporúča sa spustiť aj Lighthouse na produkčnej URL.

---

# 6. Najčastejšie problémy

## Obrázky sa nezobrazujú

Skontroluj:

```text
public/images/
```

a správne cesty v:

```text
content/company.ts
```

Príklad:

```ts
heroImage: "/images/hero.jpg",
logo: "/images/logo.png",
ogImage: "/images/og-image.jpg",
```

Skontroluj aj veľké a malé písmená v názvoch súborov.

---

## Formulár neposiela email

Skontroluj:

- `RESEND_API_KEY`
- `CONTACT_EMAIL`
- či bol po zmene Environment Variables vytvorený nový deployment

---

## Build zlyhá na Resend

Skontroluj, či sa `Resend` inicializuje až po overení, že existuje `RESEND_API_KEY`.

---

## Vercel nezobrazuje posledné zmeny

Skontroluj:

```bash
git status
git push
```

Prípadne spusti nový deployment cez **Redeploy**.

---

# Hotovo ✅

Ak všetky body prešli úspešne, web je pripravený na odovzdanie klientovi.