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



export const metadata: Metadata = {
  title: "Luxury Car Website",
  description: "Created by Cyberohn using Next.js 13, Tailwind CSS, and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${myCustomFont.variable} ${myCustomFont.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
