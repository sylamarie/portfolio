import type { Metadata, Viewport } from "next";
import "./globals.css";

import { CinematicBackground } from "@/components/motion/cinematic-background";
import { PageTransition } from "@/components/motion/page-transition";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://sylamariecumuyog-portfolio.onrender.com"),
  icons: {
    icon: "/favicon-syla.svg",
    shortcut: "/favicon-syla.svg",
    apple: "/favicon-syla.svg",
  },
  title: {
    default: "Syla Marie Garzon Cumuyog - Software Developer",
    template: "%s - Syla Marie Garzon Cumuyog",
  },
  description:
    "Portfolio of Syla Marie Garzon Cumuyog, featuring software development, web engineering, e-commerce work, and academic full-stack projects.",
  keywords: [
    "Software developer",
    "Web developer",
    "Full-stack",
    "React",
    "Node.js",
    "Shopify",
    "Portfolio",
  ],
  openGraph: {
    title: "Syla Marie Garzon Cumuyog - Software Developer",
    description:
      "Software development portfolio featuring full-stack, backend API, and e-commerce project experience.",
    type: "website",
    url: "https://sylamariecumuyog-portfolio.onrender.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syla Marie Garzon Cumuyog - Software Developer",
    description:
      "Software development portfolio featuring full-stack, backend API, and e-commerce project experience.",
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
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
        <CinematicBackground />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus-ring rounded-full bg-white px-4 py-2 text-sm shadow"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="content" className="min-h-screen">
          <PageTransition>{children}</PageTransition>
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
