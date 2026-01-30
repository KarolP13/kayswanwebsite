import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kayswan | Music Marketing Agency",
  description:
    "Digital marketing agency specializing in Twitter/X campaigns for artists, labels, and the music industry. Building culture through strategic marketing.",
  keywords: [
    "music marketing",
    "twitter marketing",
    "X marketing",
    "artist promotion",
    "record label marketing",
    "hip hop marketing",
    "influencer marketing",
    "digital marketing agency",
  ],
  authors: [{ name: "Kayswan LLC" }],
  icons: {
    icon: "/logo/kayswan-logo.png",
    apple: "/logo/kayswan-logo.png",
  },
  openGraph: {
    title: "Kayswan | Music Marketing Agency",
    description:
      "Twitter/X campaigns for artists, labels, and the music industry.",
    url: "https://kayswan.xyz",
    siteName: "Kayswan",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kayswan | Music Marketing Agency",
    description:
      "Twitter/X campaigns for artists, labels, and the music industry.",
    creator: "@Kayswan__",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased">
        <Navbar transparent />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
