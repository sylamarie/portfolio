import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Newsreader, Sora } from "next/font/google";
import "./globals.css";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const sans = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Syla Marie Garzon Cumuyog — Web Developer",
    template: "%s — Syla Marie Garzon Cumuyog",
  },
  description:
    "Premium personal portfolio showcasing selected projects, design systems, and product thinking.",
  keywords: [
    "Product designer",
    "Frontend engineer",
    "UI UX",
    "Portfolio",
    "Next.js",
  ],
  openGraph: {
    title: "Syla Marie Garzon Cumuyog — Web Developer",
    description:
      "Premium personal portfolio showcasing selected projects, design systems, and product thinking.",
    type: "website",
    url: "https://example.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syla Marie Garzon Cumuyog — Web Developer",
    description:
      "Premium personal portfolio showcasing selected projects, design systems, and product thinking.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f7fb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${serif.variable} ${mono.variable} min-h-screen bg-background font-sans text-foreground`}
      >
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus-ring rounded-full bg-white px-4 py-2 text-sm shadow"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="content" className="min-h-screen">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
