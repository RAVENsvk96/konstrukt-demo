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

# 2. Produkčný build

Pred každým deployom vždy spusti:

```bash
npm run build
```

Build musí prejsť bez chýb.

---

# 3. Environment Variables

Vo Verceli otvor:

Project → Settings → Environment Variables

Momentálne projekt používa:

```env
RESEND_API_KEY=
```

Po zmene Environment Variables vytvor nový deployment (Redeploy alebo nový `git push`).

---

# 4. Deploy

Odošli zmeny na GitHub:

```bash
git add .
git commit -m "feat: create client website"
git push origin main
```

Vercel automaticky vytvorí nový deployment.

---

# 5. Kontrola po deployi

Skontroluj produkčný web:

- stránka sa načíta
- logo sa zobrazuje
- hero obrázok sa zobrazuje
- všetky obrázky sa načítajú
- CTA tlačidlá fungujú
- telefónny odkaz funguje
- emailový odkaz funguje
- kontaktný formulár funguje
- mobilné menu funguje
- Open Graph obrázok funguje
- favicon sa zobrazuje
- deployment vo Verceli je úspešný

---

# 6. Najčastejšie problémy

## Obrázky sa nezobrazujú

Skontroluj:

```txt
public/images/
```

a správne cesty v `data/company.ts`.

Príklad:

```ts
heroImage: "/images/hero.jpg",
logo: "/images/logo-navbar.png",
logoFull: "/images/logo-full.png",
ogImage: "/images/og-image.png",
```

Skontroluj aj veľké a malé písmená v názvoch súborov.

---

## Formulár neposiela email

Skontroluj:

- `RESEND_API_KEY` vo Verceli
- či bol po zmene premenných vytvorený nový deployment

---

## Vercel nezobrazuje posledné zmeny

Skontroluj:

```bash
git status
git push origin main
```

Prípadne spusti nový deployment cez **Redeploy**.

---

# Hotovo ✅

Ak všetky body prešli úspešne, web je pripravený na odovzdanie klientovi.