import Link from "next/link";
import { SEO_PAGES } from "@/lib/seo-pages";

export function KeywordHub() {
  return (
    <section className="site-shell mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
          Popular tools
        </p>
        <h2 className="brand-mark mt-2 text-3xl text-ink sm:text-4xl">
          Gold calculator pages for every search
        </h2>
        <p className="mt-3 text-muted">
          Jump to focused tools for scrap gold, live gold price, melt value, per-gram
          rates, 14k, 10k, and gold weight conversion — all powered by the same live
          gold calculator engine.
        </p>
      </div>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {SEO_PAGES.map((page) => (
          <li key={page.slug}>
            <Link
              href={`/${page.slug}`}
              className="panel block h-full p-5 transition hover:border-[rgba(176,137,44,0.45)]"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-deep">
                {page.primaryKeyword}
              </span>
              <span className="mt-2 block font-semibold text-ink">{page.h1}</span>
              <span className="mt-1 block text-sm text-muted line-clamp-2">
                {page.description}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
