import Link from "next/link";
import { SEO_PAGES } from "@/lib/seo-pages";

export function Footer() {
  return (
    <footer className="site-shell mt-auto border-t border-[rgba(242,238,230,0.1)] bg-[rgba(10,9,8,0.55)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="brand-mark text-2xl">
            <span className="gold-sheen">Gold</span> Calculator
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Free gold calculator, scrap gold calculator, and live gold price tools.
            Estimate melt value before you buy or sell — informational only.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">Calculators</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li>
              <Link href="/" className="hover:text-gold-deep">
                Gold calculator
              </Link>
            </li>
            {SEO_PAGES.slice(0, 5).map((page) => (
              <li key={page.slug}>
                <Link href={`/${page.slug}`} className="hover:text-gold-deep">
                  {page.h1}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">More tools</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            {SEO_PAGES.slice(5).map((page) => (
              <li key={page.slug}>
                <Link href={`/${page.slug}`} className="hover:text-gold-deep">
                  {page.h1}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/karat-guide" className="hover:text-gold-deep">
                Karat & purity guide
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gold-deep">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[rgba(242,238,230,0.08)] px-4 py-5 text-center text-xs text-muted sm:px-6">
        © {new Date().getFullYear()} Gold Calculator. Also known as gold calc /
        goldcalc tools for scrap gold prices and melt value.
      </div>
    </footer>
  );
}
