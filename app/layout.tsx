import { company } from "@/data/company";
import type { Metadata } from "next";
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
    default: `${company.name} | ${company.city}`,
    template: `%s | ${company.name}`,
  },

  description: company.description,

  keywords: [
    "autoservis",
    "autoservis Nitra",
    "diagnostika auta",
    "pneuservis",
    "výmena oleja",
    "brzdy",
    "oprava auta",
  ],

  authors: [{ name: company.name }],

  openGraph: {
    title: `${company.name} | ${company.city}`,
    description: company.description,
    url: company.website,
    siteName: company.name,
    images: [
      {
        url: company.ogImage,
        width: 1200,
        height: 630,
        alt: company.name,
      },
    ],
    locale: "sk_SK",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: `${company.name} | ${company.city}`,
    description: company.description,
    images: [company.ogImage],
  },

  robots: {
    index: true,
    follow: true,
  },
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
      <body className="flex min-h-full flex-col bg-zinc-950 text-white">
        {children}
      </body>
    </html>
  );
}