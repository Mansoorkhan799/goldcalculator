import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Gold Calculator — Live Scrap Gold Value",
    template: "%s · Gold Calculator",
  },
  description:
    "Free gold calculator with live spot prices. Estimate gold value by weight and karat — grams, tolas, ounces, and more. Instant melt value for jewelry, coins, and scrap.",
  keywords: [
    "gold calculator",
    "scrap gold calculator",
    "gold price calculator",
    "gold scrap calculator",
    "gold value calculator",
    "gold melt calculator",
    "gold gram calculator",
    "scrap gold prices",
    "14k gold calculator",
    "10k gold price per gram",
    "gold weight calculator",
    "gold calc",
    "goldcalc",
    "live gold calculator",
  ],
  openGraph: {
    title: "Gold Calculator — Live Scrap Gold Value",
    description:
      "Estimate scrap gold melt value instantly with live troy-ounce pricing.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gold Calculator — Live Scrap Gold Value",
    description:
      "Estimate scrap gold melt value instantly with live troy-ounce pricing.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <Header />
        <main className="flex-1 pt-[4.25rem]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
