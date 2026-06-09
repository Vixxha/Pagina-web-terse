import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Terse Limitada | Ropa Corporativa, Chaquetas, Micropolares, Parkas, Pantalones y Poleras",
  description: "Ofrecemos las mejores prendas corporativas: chaquetas, micropolares, parkas, pantalones y poleras con excelente durabilidad, confección a medida y de primera calidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
