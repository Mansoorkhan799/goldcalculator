import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { buildWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Gold Calculator — a modern scrap gold value tool with live spot pricing.",
  openGraph: {
    title: "About · Gold Calculator",
    description:
      "About Gold Calculator — a modern scrap gold value tool with live spot pricing.",
    images: [
      {
        url: "/images/hero-gold.jpg",
        width: 1920,
        height: 1080,
        alt: "About Gold Calculator",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={buildWebPageSchema({
          name: "About Gold Calculator",
          description:
            "About Gold Calculator — a modern scrap gold value tool with live spot pricing.",
          path: "/about",
        })}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      <div className="site-shell mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
          About
        </p>
        <h1 className="brand-mark mt-2 text-4xl text-ink sm:text-5xl">
          Built to beat outdated gold calculators
        </h1>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
          <p>
            Most scrap gold sites still use 2010-era forms that reload a page for
            every estimate. This gold calculator updates instantly, supports
            multiple pieces, more weight units, and shows realistic buyer offer
            ranges next to melt value.
          </p>
          <p>
            Use it free on the web to check scrap gold prices, melt value, and
            karat-based estimates before you buy or sell.
          </p>
          <p className="rounded-2xl border border-[rgba(176,137,44,0.25)] bg-[rgba(212,168,75,0.08)] p-4 text-sm text-muted">
            Disclaimer: figures are informational estimates only. Spot markets move
            continuously. Always verify weight, purity, and buyer reputation before
            selling.
          </p>
        </div>
        <Link href="/#calculator" className="btn-primary mt-8 inline-flex">
          Try the calculator
        </Link>
      </div>
    </>
  );
}
