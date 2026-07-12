import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KeywordToolPage, seoMetadata } from "@/components/KeywordToolPage";
import { getSeoPage } from "@/lib/seo-pages";

const SLUG = "gold-gram-calculator";

export function generateMetadata(): Metadata {
  const page = getSeoPage(SLUG);
  if (!page) return {};
  return seoMetadata(page);
}

export default function Page() {
  const page = getSeoPage(SLUG);
  if (!page) notFound();
  return <KeywordToolPage page={page} />;
}
