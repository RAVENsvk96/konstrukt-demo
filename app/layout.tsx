import { site } from "@/content/site";
import { themes } from "@/styles/themes";
import { themeToCssVariables } from "@/styles/themes/to-css-variables";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const theme = themes[site.variant];
const siteUrl = "https://konstrukt-demo.vercel.app";

if (!theme) throw new Error(`Missing theme for variant: ${site.variant}`);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Konstrukt — demo web | Samuel Zelíska", template: "%s | Demo web Samuela Zelísku" },
  description: "Samostatne vytvorený ukážkový koncept webovej stránky pre stavebnú firmu. Nejde o skutočnú spoločnosť ani ponuku stavebných služieb.",
  applicationName: "Konstrukt — demo projekt",
  category: "Portfolio demo",
  authors: [{ name: "Samuel Zelíska", url: "https://www.samuelzeliska.sk" }],
  openGraph: {
    title: "Konstrukt — ukážkový webový koncept",
    description: "Demo projekt vytvorený na prezentáciu webového dizajnu a vývoja. Nejde o skutočnú stavebnú firmu.",
    url: siteUrl,
    siteName: "Portfolio demo Samuela Zelísku",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Ukážkový koncept webu stavebnej firmy" }],
    locale: "sk_SK",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Konstrukt — ukážkový webový koncept", description: "Demo projekt Samuela Zelísku. Nejde o skutočnú stavebnú firmu.", images: ["/images/og-image.png"] },
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export const viewport: Viewport = { themeColor: theme.colors.background, colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="sk" data-variant={site.variant} style={themeToCssVariables(theme)} className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}><body className="flex min-h-full flex-col bg-background text-foreground">{children}</body></html>;
}
