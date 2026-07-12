import { NextResponse } from "next/server";

export const revalidate = 300;

type GoldPriceResponse = {
  pricePerTroyOz: number;
  currency: string;
  updatedAt: string;
  source: string;
};

const FALLBACK_PRICE = 4119.24;

async function fetchFromGoldApi(): Promise<number | null> {
  const res = await fetch("https://api.gold-api.com/price/XAU", {
    next: { revalidate: 300 },
    headers: { Accept: "application/json" },
  });
  if (!res.ok) return null;
  const data = (await res.json()) as { price?: number };
  return typeof data.price === "number" && data.price > 0 ? data.price : null;
}

async function fetchFromSwissquote(): Promise<number | null> {
  const res = await fetch(
    "https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XAU/USD",
    {
      next: { revalidate: 300 },
      headers: { Accept: "application/json" },
    },
  );
  if (!res.ok) return null;
  const data = (await res.json()) as {
    spreadProfilePrices?: { bid?: number; ask?: number }[];
  }[];
  const mid = data?.[0]?.spreadProfilePrices?.[0];
  if (!mid?.bid || !mid?.ask) return null;
  const price = (mid.bid + mid.ask) / 2;
  return price > 0 ? price : null;
}

export async function GET() {
  let price: number | null = null;
  let source = "fallback";

  try {
    price = await fetchFromGoldApi();
    if (price) source = "gold-api.com";
  } catch {
    /* try next */
  }

  if (!price) {
    try {
      price = await fetchFromSwissquote();
      if (price) source = "swissquote";
    } catch {
      /* fallback */
    }
  }

  const body: GoldPriceResponse = {
    pricePerTroyOz: price ?? FALLBACK_PRICE,
    currency: "USD",
    updatedAt: new Date().toISOString(),
    source: price ? source : "fallback",
  };

  return NextResponse.json(body, {
    headers: {
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=60",
    },
  });
}
