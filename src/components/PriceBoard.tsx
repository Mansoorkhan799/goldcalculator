"use client";

import { useEffect, useState } from "react";
import { karatPricePerGram } from "@/lib/gold";
import { formatDateTime, formatUsd } from "@/lib/format";

type PricePayload = {
  pricePerTroyOz: number;
  updatedAt: string;
  source: string;
};

const BOARD = [
  { label: "24K pure", karat: 24 },
  { label: "22K", karat: 22 },
  { label: "18K", karat: 18 },
  { label: "14K", karat: 14 },
  { label: "10K", karat: 10 },
];

type Props = {
  spot: number;
  onSpotChange: (value: number) => void;
};

export function PriceBoard({ spot, onSpotChange }: Props) {
  const [meta, setMeta] = useState<{ updatedAt: string; source: string } | null>(
    null,
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchSpot() {
      try {
        const res = await fetch("/api/gold-price", { cache: "no-store" });
        if (!res.ok) throw new Error("Could not load spot price");
        const data = (await res.json()) as PricePayload;
        if (cancelled) return;
        onSpotChange(data.pricePerTroyOz);
        setMeta({ updatedAt: data.updatedAt, source: data.source });
      } catch {
        /* keep fallback spot from parent */
      }
    }

    void fetchSpot();
    return () => {
      cancelled = true;
    };
  }, [onSpotChange]);

  async function loadPrice() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/gold-price", { cache: "no-store" });
      if (!res.ok) throw new Error("Could not load spot price");
      const data = (await res.json()) as PricePayload;
      onSpotChange(data.pricePerTroyOz);
      setMeta({ updatedAt: data.updatedAt, source: data.source });
    } catch {
      setError("Refresh failed — enter spot manually.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <aside id="prices" className="panel fade-up-delay p-5 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold-deep">
            <span className="live-dot" aria-hidden />
            Live scrap prices
          </div>
          <h2 className="brand-mark mt-2 text-2xl text-ink">Per gram today</h2>
        </div>
        <button
          type="button"
          className="btn-ghost !px-3 !py-1.5 text-xs"
          onClick={() => void loadPrice()}
          disabled={loading}
        >
          {loading ? "Updating…" : "Refresh"}
        </button>
      </div>

      <ul className="mt-5 divide-y divide-[rgba(242,238,230,0.08)]">
        {BOARD.map((row) => (
          <li key={row.karat} className="flex items-center justify-between py-2.5 text-sm">
            <span className="text-ink-soft">{row.label}</span>
            <span className="font-semibold tabular-nums text-ink">
              {formatUsd(karatPricePerGram(spot, row.karat))}/g
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-5 rounded-2xl border border-[rgba(176,137,44,0.25)] bg-[rgba(212,168,75,0.08)] p-4">
        <label className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-deep">
          Spot · USD / troy oz
        </label>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-muted">$</span>
          <input
            className="input-field !py-2.5 font-semibold tabular-nums"
            type="number"
            min={0}
            step={0.01}
            value={Number.isFinite(spot) ? spot : ""}
            onChange={(e) => onSpotChange(Number(e.target.value))}
            aria-label="Gold spot price per troy ounce"
          />
        </div>
        <p className="mt-2 text-xs leading-relaxed text-muted">
          {meta
            ? `Updated ${formatDateTime(meta.updatedAt)} · ${meta.source}`
            : "Loading live gold price…"}
          {error ? ` ${error}` : ""}
        </p>
      </div>
    </aside>
  );
}
