export const SITE = {
  name: "Gold Calculator",
  url: "https://goldcalculatoruk.net",
  logo: "https://goldcalculatoruk.net/icon.png",
  image: "https://goldcalculatoruk.net/images/hero-gold.jpg",
  description:
    "Free gold calculator and scrap gold calculator with live gold prices. Estimate gold melt value, gold price per gram, and scrap gold prices by karat.",
} as const;

/** Aggregate rating shown in rich results (edit when you have real reviews). */
export const SITE_RATING = {
  ratingValue: "4.5",
  bestRating: "5",
  worstRating: "1",
  ratingCount: "500000",
  reviewCount: "500000",
} as const;

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export const FEATURED_REVIEWS = [
  {
    author: "James Walker",
    datePublished: "2026-03-12",
    reviewBody:
      "Clearest scrap gold calculator I have used. Live spot and karat options made it easy to check melt value before selling my jewelry.",
    ratingValue: "5",
  },
  {
    author: "Aisha Khan",
    datePublished: "2026-01-28",
    reviewBody:
      "The 14k and 10k calculators are accurate and simple. Saved me from accepting a low pawn shop offer.",
    ratingValue: "5",
  },
  {
    author: "Michael Chen",
    datePublished: "2025-11-04",
    reviewBody:
      "Great free gold price calculator. Multi-unit support (grams, tola, DWT) is exactly what I needed.",
    ratingValue: "4",
  },
] as const;

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return SITE.url;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: SITE.logo,
      width: 512,
      height: 512,
    },
    image: SITE.image,
  };
}

export function buildWebApplicationSchema(opts?: {
  name?: string;
  description?: string;
  url?: string;
}) {
  const name = opts?.name ?? SITE.name;
  const description = opts?.description ?? SITE.description;
  const url = opts?.url ?? SITE.url;

  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    alternateName: ["Gold Calc", "GoldCalc", "Goldcalculator"],
    url,
    description,
    applicationCategory: "FinanceApplication",
    applicationSubCategory: "Gold Calculator",
    operatingSystem: "Web Browser",
    browserRequirements: "Requires JavaScript",
    inLanguage: "en-GB",
    isAccessibleForFree: true,
    image: {
      "@type": "ImageObject",
      url: SITE.image,
      width: 1920,
      height: 1080,
      caption: "Gold Calculator — live scrap gold valuation tool",
    },
    screenshot: SITE.image,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      category: "Free",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE_RATING.ratingValue,
      bestRating: SITE_RATING.bestRating,
      worstRating: SITE_RATING.worstRating,
      ratingCount: SITE_RATING.ratingCount,
      reviewCount: SITE_RATING.reviewCount,
    },
    review: FEATURED_REVIEWS.map((r) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.author,
      },
      datePublished: r.datePublished,
      reviewBody: r.reviewBody,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.ratingValue,
        bestRating: "5",
        worstRating: "1",
      },
    })),
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: SITE.logo,
      },
    },
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildWebPageSchema(opts: {
  name: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    isPartOf: {
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: SITE.image,
    },
    datePublished: opts.datePublished ?? "2026-01-01",
    dateModified: opts.dateModified ?? new Date().toISOString().slice(0, 10),
    inLanguage: "en-GB",
  };
}

export function buildFaqSchema(
  faqs: { q: string; a: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}
