import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { homeUrl, shareImage } from "@/lib/site";
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
  title: {
    default: "Evergreen Reach • Digital Care for Small & Rural Businesses",
    template: "%s • Evergreen Reach",
  },
  description:
    "We're not another marketing agency. Evergreen Reach is the reliable digital caretaker for small and rural businesses — Google Business Profile, website care, and local visibility. Practical help from people who show up.",
  applicationName: "Evergreen Reach",
  authors: [{ name: "Evergreen Reach", url: homeUrl }],
  creator: "Evergreen Reach",
  publisher: "Evergreen Reach",
  category: "business",
  keywords: [
    "Google Business Profile management",
    "website maintenance",
    "local SEO",
    "rural business marketing",
    "small business digital care",
    "Evergreen Reach",
    "Field Notes",
    "Google Business Profile for rural businesses",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Evergreen Reach • Digital Care for Small & Rural Businesses",
    description:
      "Practical digital care for small and rural businesses. Google Business Profile, website upkeep, and getting more local eyes on you — no agency fluff.",
    url: homeUrl,
    siteName: "Evergreen Reach",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: shareImage.path,
        width: shareImage.width,
        height: shareImage.height,
        alt: shareImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evergreen Reach • Digital Care for Small & Rural Businesses",
    description:
      "Practical digital care for small and rural businesses. No agency fluff. Just reliable help that shows up.",
    images: [shareImage.path],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
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
