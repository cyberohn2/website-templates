import type { Metadata } from "next";
import localFont from 'next/font/local'

export const myCustomFont = localFont({
  src: [
    { path: "../assets/fonts/ClashDisplay-Bold.otf", weight: "700", style: "normal" },
    { path: "../assets/fonts/ClashDisplay-Semibold.otf", weight: "600", style: "normal" },
    { path: "../assets/fonts/ClashDisplay-Medium.otf", weight: "500", style: "normal" },
    { path: "../assets/fonts/ClashDisplay-Regular.otf", weight: "400", style: "normal" },
    { path: "../assets/fonts/ClashDisplay-Light.otf", weight: "300", style: "normal" },
    { path: "../assets/fonts/ClashDisplay-Extralight.otf", weight: "200", style: "normal" },
  ], // Path relative to where localFont is called
  variable: "--font-custom", // (Optional) Define a CSS variable for Tailwind/global CSS
  display: "swap",
});

import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Graphical Ralph",
  description: "Creating designs that sells, speaks and structures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", myCustomFont.variable, myCustomFont.className, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col scroll-smooth">{children}</body>
    </html>
  );
}
