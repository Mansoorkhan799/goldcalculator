import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Gold Calculator — a modern scrap gold value tool with live spot pricing.",
};

export default function AboutPage() {
  return (
    <div className="site-shell mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
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
          Content on this page is placeholder-ready — swap in your own tips,
          affiliate resources, and brand story when your domain is ready.
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
  );
}
