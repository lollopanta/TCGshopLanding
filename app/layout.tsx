import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./fireflies.css";
import { Fireflies } from "@/components/shop/Fireflies";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OnlineTCGShop: Carte da collezione Pokémon, One Piece e altro",
  description:
    "Carte TCG selezionate, prodotti sigillati live opening su TikTok e una community carica di hype. OnlineTCGShop: dove ogni carta è una storia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it-IT"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full scroll-smooth`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet" />
      </head>
      <body className="max-w-screen overflow-x-clip bg-black bg-grid py-4 text-white relative lg:py-8">
        <Fireflies />
        {children}
      </body>
    </html>
  );
}
