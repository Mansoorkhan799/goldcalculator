import Image from "next/image";
import Link from "next/link";
import { GoldCalculator } from "@/components/GoldCalculator";
import { HowItWorks } from "@/components/HowItWorks";
import { Faq } from "@/components/Faq";
import { HomeContent } from "@/components/HomeContent";
import { KeywordHub } from "@/components/KeywordHub";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Gold Calculator",
  alternateName: ["Gold Calc", "GoldCalc", "Goldcalculator"],
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Free gold calculator and scrap gold calculator with live gold prices. Estimate gold melt value, gold price per gram, and scrap gold prices by karat.",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section
        id="hero"
        className="relative isolate -mt-[4.25rem] min-h-[min(92vh,820px)] overflow-hidden"
      >
        <Image
          src="/images/hero-gold.jpg"
          alt="Gold bars and jewelry on stone — gold calculator visual"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(105deg,rgba(18,16,12,0.78)_0%,rgba(18,16,12,0.55)_42%,rgba(18,16,12,0.22)_100%)]"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex min-h-[min(92vh,820px)] max-w-6xl flex-col justify-start px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-40 lg:pt-44">
          <div className="fade-up max-w-3xl">
            <h1 className="brand-mark text-5xl leading-[0.95] tracking-tight text-[#fffcf6] sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="gold-sheen">Gold</span> Calculator
            </h1>
            <p className="mt-5 max-w-xl text-xl font-medium leading-snug text-[#f7f0df] sm:text-2xl">
              Know your gold value before you sell
            </p>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-[#e8e0d0] sm:text-lg">
              Live scrap gold calculator with real-time spot pricing — weight,
              karat, and melt value in seconds.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#calculator" className="btn-primary">
                Open gold calculator
              </Link>
              <Link
                href="/scrap-gold-calculator"
                className="btn-ghost !border-[rgba(255,252,246,0.35)] !text-[#fffcf6] hover:!bg-[rgba(255,252,246,0.1)]"
              >
                Scrap gold calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="pt-14">
        <GoldCalculator
          title="Gold calculator"
          blurb="The main gold calculator for live melt value — weight, karat, multi-piece lots, and buyer offer ranges in one place."
        />
      </div>
      <HowItWorks />
      <KeywordHub />
      <HomeContent />
      <Faq />

      <section className="site-shell relative mx-auto mb-20 max-w-6xl overflow-hidden px-4 sm:px-6">
        <div className="relative min-h-[280px] overflow-hidden rounded-[var(--radius)]">
          <Image
            src="/images/gold-bars.jpg"
            alt="Stacked gold bullion bars"
            fill
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,16,12,0.82)_0%,rgba(18,16,12,0.55)_55%,rgba(18,16,12,0.25)_100%)]"
            aria-hidden
          />
          <div className="relative z-10 flex min-h-[280px] flex-col items-start justify-center gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="max-w-xl">
              <h2 className="brand-mark text-2xl text-[#fffcf6] sm:text-3xl">
                Ready to check your gold value?
              </h2>
              <p className="mt-2 text-sm text-[#d9d0bc]">
                Use the live gold calculator, or open a focused scrap gold,
                14k, or gold gram calculator page.
              </p>
            </div>
            <Link href="#calculator" className="btn-primary shrink-0">
              Back to calculator
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
