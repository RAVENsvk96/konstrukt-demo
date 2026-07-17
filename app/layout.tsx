import { company } from "@/content/company";
import { site } from "@/content/site";
import { themes } from "@/styles/themes";
import { themeToCssVariables } from "@/styles/themes/to-css-variables";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const theme = themes[site.variant];

if (!theme) {
  throw new Error(`Missing theme for variant: ${site.variant}`);
}

export const metadata: Metadata = {
  metadataBase: new URL(company.website),

  title: {
    default: site.seo.title,
    template: `%s | ${company.name}`,
  },

  description: site.seo.description,
  keywords: site.seo.keywords,

  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,

  alternates: {
    canonical: company.website,
  },

  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    url: company.website,
    siteName: company.name,
    images: [
      {
        url: company.ogImage,
        width: 1200,
        height: 630,
        alt: `${company.name} – ${company.slogan}`,
      },
    ],
    locale: site.locale,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: [company.ogImage],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: theme.colors.background,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={site.language}
      data-variant={site.variant}
      style={themeToCssVariables(theme)}
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}