import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";

import { MotionProvider } from "@/components/providers/motion-provider";
import { site } from "@/lib/site";

import "./globals.css";

const display = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const title = `${site.name} — ${site.tagline}`;

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "budaya Indonesia",
    "peta budaya",
    "provinsi Indonesia",
    "cerita rakyat",
    "kuliner tradisional",
    "asisten AI budaya",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: site.name,
    title,
    description: site.description,
  },
  twitter: {
    card: "summary",
    title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#faf6f1",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${body.variable} h-full`}
    >
      <body className="flex min-h-dvh flex-col bg-canvas text-ink antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
