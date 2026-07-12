import type { Metadata } from "next";
import Link from "next/link";
import { KARATS } from "@/lib/gold";
import { formatPercent } from "@/lib/format";

export const metadata: Metadata = {
  title: "Karat & Purity Guide",
  description:
    "Understand gold karat markings, purity percentages, and how they affect scrap gold value in the gold calculator.",
};

export default function KaratGuidePage() {
  return (
    <div className="site-shell mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
        Reference
      </p>
      <h1 className="brand-mark mt-2 text-4xl text-ink sm:text-5xl">
        Karat & purity guide
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        Karat tells you how much of a piece is pure gold. 24K is essentially pure;
        18K is 75% gold; 14K is 58.3%. Lower karat alloys are harder and more
        common in everyday jewelry.
      </p>

      <div className="panel mt-10 overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead>
            <tr className="border-b border-[rgba(242,238,230,0.1)] bg-[rgba(212,168,75,0.12)] text-xs uppercase tracking-[0.1em] text-muted">
              <th className="px-4 py-3 font-semibold">Marking</th>
              <th className="px-4 py-3 font-semibold">Karat</th>
              <th className="px-4 py-3 font-semibold">Purity</th>
              <th className="px-4 py-3 font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody>
            {KARATS.map((k) => (
              <tr key={k.id} className="border-b border-[rgba(242,238,230,0.06)]">
                <td className="px-4 py-3 font-semibold text-ink">{k.label}</td>
                <td className="px-4 py-3 tabular-nums">{k.karat}</td>
                <td className="px-4 py-3 tabular-nums">{formatPercent(k.purity)}</td>
                <td className="px-4 py-3 text-muted">
                  {k.common ? "Common in jewelry" : "Regional / specialty"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <article className="panel p-6">
          <h2 className="text-lg font-semibold text-ink">Hallmarks to look for</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Stamps like 10K, 14K, 18K, 750, 585, or 417 indicate purity. Plated
            or filled pieces may say GP, GF, or HGE — those are not solid gold and
            have little melt value.
          </p>
        </article>
        <article className="panel p-6">
          <h2 className="text-lg font-semibold text-ink">Unmarked gold</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            If there is no stamp, use an acid test kit or XRF at a reputable
            jeweler before selling. Guessing karat can undervalue or overvalue a
            piece by a wide margin.
          </p>
        </article>
      </div>

      <Link href="/#calculator" className="btn-primary mt-10 inline-flex">
        Back to gold calculator
      </Link>
    </div>
  );
}
