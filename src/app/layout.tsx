import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
// 1. IMPORT THE FOOTER COMPONENT
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Société de Sapiens",
  description: "A digital renaissance for the contemplative mind.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${merriweather.variable} font-sans bg-paper text-ink antialiased`}
      >
        <Navbar />
        {/* The Page Content (Home, Blog Post, etc.) renders here */}
        {children}

        {/* 2. RENDER THE FOOTER AT THE BOTTOM OF EVERY PAGE */}
        <Footer />
      </body>
    </html>
  );
}
