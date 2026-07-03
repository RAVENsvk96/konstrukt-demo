# Local Business Starter Kit

Next.js starter kit pre moderné weby lokálnych firiem.

Aktuálny demo variant: autoservis v Nitre.

## Cieľ projektu

Cieľom nie je vytvoriť iba jednu landing page, ale znovupoužiteľný základ pre weby lokálnych služieb, napríklad:

- autoservis
- pneuservis
- elektrikár
- inštalatér
- klimatizácie
- stolár
- záhradník

Pri novom klientovi by sa mali meniť hlavne dáta, branding a obrázky — nie komponenty.

## Technológie

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Resend
- Vercel

## Základná filozofia

1. Dáta patria do `data/`.
2. Komponenty majú riešiť UI, nie obsah.
3. Dizajn nemeníme počas refaktoru.
4. Jedna logická zmena = jeden commit.
5. Starter kit musí zostať jednoduchý.
6. Každá zmena má byť použiteľná aj pre ďalších klientov.

## Dôležité priečinky

```txt
app/
components/
data/
public/images/