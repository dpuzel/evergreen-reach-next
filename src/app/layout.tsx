import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.evergreen-reach.com"),
  title: "Evergreen Reach • Digital Care for Small & Rural Businesses",
  description:
    "We're not another marketing agency. Evergreen Reach is the reliable digital caretaker for small and rural businesses — Google Business Profile, website care, and local visibility. Practical help from people who give a damn.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Evergreen Reach • Digital Care for Small & Rural Businesses",
    description:
      "Practical digital care for small and rural businesses. Google Business Profile, website upkeep, and getting more local eyes on you — no agency fluff.",
    url: "https://www.evergreen-reach.com/",
    siteName: "Evergreen Reach",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Evergreen Reach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evergreen Reach • Digital Care for Small & Rural Businesses",
    description:
      "Practical digital care for small and rural businesses. No agency fluff. Just reliable help that shows up.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/assets/logo-main.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${fraunces.variable} scroll-smooth`}
    >
      <body className="min-h-full bg-forest-950 font-sans text-cream antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
