import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mrgeek.pl"),
  title: {
    default: "MrGeek Kraków – Serwis laptopów, komputerów i tworzenie stron internetowych",
    template: "%s | MrGeek Kraków",
  },
  description:
    "MrGeek Kraków – serwis laptopów i komputerów PC, budowa komputerów na zamówienie, tworzenie stron internetowych oraz konfiguracja sieci. Szybka pomoc IT w Krakowie.",
  keywords: [
    "MrGeek Kraków",
    "serwis laptopów Kraków",
    "serwis komputerów Kraków",
    "naprawa laptopów Kraków",
    "naprawa komputerów Kraków",
    "serwis PC Kraków",
    "budowa komputerów Kraków",
    "komputery na zamówienie Kraków",
    "tworzenie stron internetowych Kraków",
    "wsparcie IT Kraków",
    "naprawa Apple Kraków",
  ],
  authors: [{ name: "MRGEEK" }],
  creator: "MRGEEK",
  publisher: "MRGEEK",
  alternates: {
    canonical: "/",
    languages: {
      "pl-PL": "/",
      "en-GB": "/?lang=en",
    },
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    alternateLocale: "en_GB",
    url: "https://mrgeek.pl",
    siteName: "MRGEEK",
    title: "MrGeek Kraków – Serwis laptopów, komputerów i tworzenie stron internetowych",
    description:
      "Serwis laptopów i komputerów PC w Krakowie, budowa komputerów na zamówienie, strony internetowe i wsparcie IT.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MRGEEK Kraków - serwis laptopów i komputerów",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MrGeek Kraków – Serwis laptopów, komputerów i tworzenie stron internetowych",
    description:
      "Serwis laptopów i komputerów PC w Krakowie, budowa komputerów na zamówienie, strony internetowe i wsparcie IT.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
  icon: [
    { url: "/favicon.ico" },
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
  ],
  apple: "/apple-touch-icon.png",
  manifest: "/site.webmanifest",
},

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}

