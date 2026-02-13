import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { redirect } from 'next/navigation';
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
  title: "Parfum House - Boutique de Parfums de Luxe au Maroc",
  description: "Découvrez notre collection exclusive de parfums d'exception. Plus de 500 références des plus grandes maisons de parfumerie. Livraison rapide au Maroc.",
  keywords: "parfum, parfum luxe, parfum maroc, boutique parfum, parfum homme, parfum femme, parfum unisex",
  openGraph: {
    title: "Parfum House - Boutique de Parfums de Luxe",
    description: "Découvrez notre collection exclusive de parfums d'exception",
    url: "https://parfumhouse.ma",
    siteName: "Parfum House",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Parfum House - Boutique de Parfums de Luxe",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parfum House - Boutique de Parfums de Luxe",
    description: "Découvrez notre collection exclusive de parfums d'exception",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://parfumhouse.ma",
    languages: {
      "fr-MA": "https://parfumhouse.ma/fr",
      "ar-MA": "https://parfumhouse.ma/ar",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
