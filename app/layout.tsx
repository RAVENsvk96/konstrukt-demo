import { company } from "@/content/company";
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

export const metadata: Metadata = {
  metadataBase: new URL(company.website),

  title: {
    default: `${company.name} | Beauty štúdio v ${company.city}`,
    template: `%s | ${company.name}`,
  },

  description: company.description,

  keywords: [
    "beauty štúdio Nitra",
    "kozmetické ošetrenia Nitra",
    "lash lifting Nitra",
    "laminácia obočia Nitra",
    "manikúra Nitra",
    "profesionálny make-up Nitra",
  ],

  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,

  alternates: {
    canonical: company.website,
  },

  openGraph: {
    title: `${company.name} | Beauty štúdio v ${company.city}`,
    description: company.description,
    url: company.website,
    siteName: company.name,
    images: [
      {
        url: company.ogImage,
        width: 1200,
        height: 630,
        alt: `${company.name} – beauty štúdio v ${company.city}`,
      },
    ],
    locale: "sk_SK",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Beauty štúdio v ${company.city}`,
    description: company.description,
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
  themeColor: "#fffaf8",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sk"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}