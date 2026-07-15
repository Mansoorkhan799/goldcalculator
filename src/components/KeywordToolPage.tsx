import Link from "next/link";
import type { Metadata } from "next";
import { GoldCalculator } from "@/components/GoldCalculator";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ReviewSection } from "@/components/ReviewSection";
import {
  SEO_PAGES,
  getSeoPageBySlugs,
  type SeoPage,
} from "@/lib/seo-pages";
import type { WeightUnit } from "@/lib/gold";
import {
  absoluteUrl,
  buildFaqSchema,
  buildWebApplicationSchema,
  buildWebPageSchema,
} from "@/lib/schema";

export function seoMetadata(page: SeoPage): Metadata {
  return {
    title: page.title,
    description: page.description,
    keywords: [
      page.primaryKeyword,
      ...page.related.map((slug) => slug.replace(/-/g, " ")),
    ],
    openGraph: {
      title: page.title,
      description: page.description,
      type: "website",
      url: absoluteUrl(`/${page.slug}`),
      siteName: "Gold Calculator",
      images: [
        {
          url: "/images/hero-gold.jpg",
          width: 1920,
          height: 1080,
          alt: `${page.h1} — Gold Calculator`,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: ["/images/hero-gold.jpg"],
    },
    alternates: {
      canonical: `/${page.slug}`,
    },
  };
}

function RelatedTools({ slugs, current }: { slugs: string[]; current: string }) {
  const pages = getSeoPageBySlugs(slugs.filter((s) => s !== current));
  if (!pages.length) return null;
  return (
    <section className="site-shell mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <h2 className="brand-mark text-2xl text-ink sm:text-3xl">Related calculators</h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {pages.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/${p.slug}`}
              className="panel block p-4 transition hover:border-[rgba(176,137,44,0.45)]"
            >
              <span className="font-semibold text-ink">{p.h1}</span>
              <span className="mt-1 block text-sm text-muted">{p.primaryKeyword}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function KeywordToolPage({ page }: { page: SeoPage }) {
  return (
    <>
      <JsonLd
        data={[
          buildWebApplicationSchema({
            name: page.h1,
            description: page.description,
            url: absoluteUrl(`/${page.slug}`),
          }),
          buildWebPageSchema({
            name: page.title,
            description: page.description,
            path: `/${page.slug}`,
          }),
          buildFaqSchema(page.faqs),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: page.h1, path: `/${page.slug}` },
        ]}
      />

      <section className="site-shell px-4 pb-8 pt-6 sm:px-6 sm:pt-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
            {page.eyebrow}
          </p>
          <h1 className="brand-mark mt-2 max-w-3xl text-4xl leading-tight text-ink sm:text-5xl">
            {page.h1}
          </h1>
          <div className="mt-4 max-w-3xl space-y-3 text-base leading-relaxed text-ink-soft">
            {page.intro.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">
            Also explore the main{" "}
            <Link href="/" className="font-medium text-gold-deep hover:underline">
              gold calculator
            </Link>{" "}
            for the full toolkit.
          </p>
        </div>
      </section>

      <GoldCalculator
        title={page.calculatorTitle}
        blurb={page.calculatorBlurb}
        defaultKaratId={page.defaultKaratId}
        defaultUnit={page.defaultUnit as WeightUnit | undefined}
      />

      <div className="site-shell mx-auto max-w-6xl px-4 py-14 sm:px-6">
        {page.sections.map((section) => (
          <section key={section.heading} className="mb-12 max-w-3xl">
            <h2 className="brand-mark text-3xl text-ink">{section.heading}</h2>
            <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-ink-soft sm:text-base">
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </section>
        ))}

        <section className="max-w-3xl">
          <h2 className="brand-mark text-3xl text-ink">FAQ</h2>
          <div className="mt-6 divide-y divide-[rgba(242,238,230,0.1)] border-y border-[rgba(242,238,230,0.1)]">
            {page.faqs.map((item) => (
              <details key={item.q} className="group py-4">
                <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {item.q}
                    <span className="text-gold-deep transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      <ReviewSection />
      <RelatedTools slugs={page.related} current={page.slug} />

      <section className="site-shell mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="panel p-5">
          <p className="text-sm font-semibold text-ink">All gold tools</p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-ink-soft">
            <li>
              <Link href="/" className="hover:text-gold-deep">
                Gold calculator
              </Link>
            </li>
            {SEO_PAGES.map((p) => (
              <li key={p.slug}>
                <Link href={`/${p.slug}`} className="hover:text-gold-deep">
                  {p.h1}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
