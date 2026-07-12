"use client";

import { useMemo, useState } from "react";
import {
  KARATS,
  WEIGHT_UNITS,
  calculateGoldValue,
  createPiece,
  type GoldPiece,
  type WeightUnit,
} from "@/lib/gold";
import { formatGrams, formatPercent, formatUsd } from "@/lib/format";
import { PriceBoard } from "@/components/PriceBoard";

const COMMON = KARATS.filter((k) => k.common);
const MORE = KARATS.filter((k) => !k.common);

function PieceRow({
  piece,
  index,
  canRemove,
  onChange,
  onRemove,
}: {
  piece: GoldPiece;
  index: number;
  canRemove: boolean;
  onChange: (id: string, patch: Partial<GoldPiece>) => void;
  onRemove: (id: string) => void;
}) {
  const [showMore, setShowMore] = useState(
    !COMMON.some((k) => k.id === piece.karatId),
  );

  return (
    <div className="rounded-2xl border border-[rgba(242,238,230,0.1)] bg-[var(--surface-raised)] p-4 sm:p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-ink">
          Piece {index + 1}
          {piece.label ? ` · ${piece.label}` : ""}
        </p>
        {canRemove ? (
          <button
            type="button"
            className="text-xs font-medium text-muted hover:text-[var(--danger)]"
            onClick={() => onRemove(piece.id)}
          >
            Remove
          </button>
        ) : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-[1.2fr_1fr]">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.1em] text-muted">
            Weight
          </label>
          <div className="flex gap-2">
            <input
              className="input-field"
              type="number"
              min={0}
              step="any"
              placeholder="e.g. 12.5"
              value={piece.weight}
              onChange={(e) => onChange(piece.id, { weight: e.target.value })}
              aria-label={`Weight for piece ${index + 1}`}
            />
            <select
              className="input-field max-w-[9.5rem]"
              value={piece.unit}
              onChange={(e) =>
                onChange(piece.id, { unit: e.target.value as WeightUnit })
              }
              aria-label={`Unit for piece ${index + 1}`}
            >
              {WEIGHT_UNITS.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.short}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.1em] text-muted">
            Label (optional)
          </label>
          <input
            className="input-field"
            type="text"
            placeholder="Ring, chain…"
            value={piece.label}
            onChange={(e) => onChange(piece.id, { label: e.target.value })}
          />
        </div>
      </div>

      <div className="mt-4">
        <div className="mb-2 flex items-center justify-between">
          <label className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
            Purity
          </label>
          <button
            type="button"
            className="text-xs font-medium text-gold-deep hover:underline"
            onClick={() => setShowMore((v) => !v)}
          >
            {showMore ? "Show common only" : "All karats"}
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {(showMore ? [...COMMON, ...MORE] : COMMON).map((k) => (
            <button
              key={k.id}
              type="button"
              className="karat-chip"
              data-active={piece.karatId === k.id}
              onClick={() => onChange(piece.id, { karatId: k.id })}
            >
              {k.label.split(" · ")[0]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function GoldCalculator({
  title = "Scrap gold calculator",
  blurb = "Enter weight and karat — melt value updates live. Add multiple pieces, switch units, and see realistic buyer offer ranges.",
  defaultKaratId = "18k",
  defaultUnit = "gram",
}: {
  title?: string;
  blurb?: string;
  defaultKaratId?: string;
  defaultUnit?: WeightUnit;
} = {}) {
  const [pieces, setPieces] = useState<GoldPiece[]>([
    createPiece({ karatId: defaultKaratId, unit: defaultUnit }),
  ]);
  const [spot, setSpot] = useState(4119.24);
  const [copied, setCopied] = useState(false);

  const results = useMemo(() => {
    return pieces.map((piece) => {
      const weight = Number(piece.weight);
      const result = calculateGoldValue({
        weight,
        unit: piece.unit,
        karatId: piece.karatId,
        spotPerTroyOz: spot,
      });
      return { piece, result };
    });
  }, [pieces, spot]);

  const totals = useMemo(() => {
    const valid = results.filter((r) => r.result);
    if (!valid.length) return null;
    return valid.reduce(
      (acc, { result }) => ({
        meltValue: acc.meltValue + result!.meltValue,
        fineGoldGrams: acc.fineGoldGrams + result!.fineGoldGrams,
        weightGrams: acc.weightGrams + result!.weightGrams,
        offerLow: acc.offerLow + result!.offerLow,
        offerMid: acc.offerMid + result!.offerMid,
        offerHigh: acc.offerHigh + result!.offerHigh,
      }),
      {
        meltValue: 0,
        fineGoldGrams: 0,
        weightGrams: 0,
        offerLow: 0,
        offerMid: 0,
        offerHigh: 0,
      },
    );
  }, [results]);

  function updatePiece(id: string, patch: Partial<GoldPiece>) {
    setPieces((prev) => prev.map((p) => (p.id === id ? { ...p, ...patch } : p)));
  }

  function removePiece(id: string) {
    setPieces((prev) => (prev.length <= 1 ? prev : prev.filter((p) => p.id !== id)));
  }

  async function copySummary() {
    if (!totals) return;
    const lines = [
      "Gold Calculator — scrap value estimate",
      `Spot: ${formatUsd(spot)} / troy oz`,
      `Gross weight: ${formatGrams(totals.weightGrams)}`,
      `Fine gold: ${formatGrams(totals.fineGoldGrams)}`,
      `Melt value: ${formatUsd(totals.meltValue)}`,
      `Likely offers: ${formatUsd(totals.offerLow)} – ${formatUsd(totals.offerHigh)}`,
      "",
      ...results
        .filter((r) => r.result)
        .map(
          ({ piece, result }, i) =>
            `${i + 1}. ${piece.label || "Piece"} · ${piece.weight} ${piece.unit} · ${piece.karatId} → ${formatUsd(result!.meltValue)}`,
        ),
    ];
    await navigator.clipboard.writeText(lines.join("\n"));
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section id="calculator" className="site-shell scroll-mt-24">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.35fr_0.9fr]">
        <div className="panel fade-up p-5 sm:p-7">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
              Instant melt estimate
            </p>
            <h2 className="brand-mark mt-2 text-3xl text-ink sm:text-4xl">
              {title}
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              {blurb}
            </p>
          </div>

          <div className="space-y-4">
            {pieces.map((piece, index) => (
              <PieceRow
                key={piece.id}
                piece={piece}
                index={index}
                canRemove={pieces.length > 1}
                onChange={updatePiece}
                onRemove={removePiece}
              />
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              className="btn-ghost"
              onClick={() =>
                setPieces((prev) => [
                  ...prev,
                  createPiece({ karatId: defaultKaratId, unit: defaultUnit }),
                ])
              }
            >
              + Add another piece
            </button>
            <button
              type="button"
              className="btn-ghost"
              onClick={() =>
                setPieces([
                  createPiece({ karatId: defaultKaratId, unit: defaultUnit }),
                ])
              }
            >
              Reset
            </button>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-[rgba(201,163,69,0.35)] bg-[linear-gradient(160deg,rgba(138,106,26,0.35),rgba(36,32,26,0.95)_42%)] p-5 sm:p-6">
            {totals ? (
              <>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-deep">
                  Estimated melt value
                </p>
                <p className="brand-mark mt-1 text-4xl tabular-nums text-ink sm:text-5xl">
                  {formatUsd(totals.meltValue)}
                </p>
                <p className="mt-2 text-sm text-muted">
                  Based on {formatGrams(totals.fineGoldGrams)} fine gold from{" "}
                  {formatGrams(totals.weightGrams)} gross weight at{" "}
                  {formatUsd(spot)}/oz.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl bg-[rgba(18,16,12,0.45)] p-3">
                    <p className="text-[11px] uppercase tracking-[0.12em] text-muted">
                      Pawn / local (~70%)
                    </p>
                    <p className="mt-1 text-lg font-semibold tabular-nums">
                      {formatUsd(totals.offerLow)}
                    </p>
                  </div>
                  <div className="rounded-xl bg-[rgba(18,16,12,0.45)] p-3">
                    <p className="text-[11px] uppercase tracking-[0.12em] text-muted">
                      Typical (~85%)
                    </p>
                    <p className="mt-1 text-lg font-semibold tabular-nums">
                      {formatUsd(totals.offerMid)}
                    </p>
                  </div>
                  <div className="rounded-xl bg-[rgba(18,16,12,0.45)] p-3">
                    <p className="text-[11px] uppercase tracking-[0.12em] text-muted">
                      Strong (~95%)
                    </p>
                    <p className="mt-1 text-lg font-semibold tabular-nums">
                      {formatUsd(totals.offerHigh)}
                    </p>
                  </div>
                </div>

                <button type="button" className="btn-primary mt-5" onClick={() => void copySummary()}>
                  {copied ? "Copied summary" : "Copy result summary"}
                </button>
              </>
            ) : (
              <div>
                <p className="brand-mark text-2xl text-ink">Enter a weight to begin</p>
                <p className="mt-2 text-sm text-muted">
                  Tip: kitchen scales work in grams; jewelry buyers often quote in
                  DWT or troy ounces.
                </p>
              </div>
            )}
          </div>

          {totals && results.some((r) => r.result) ? (
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead>
                  <tr className="border-b border-[rgba(242,238,230,0.1)] text-xs uppercase tracking-[0.1em] text-muted">
                    <th className="py-2 pr-3 font-semibold">Piece</th>
                    <th className="py-2 pr-3 font-semibold">Fine Au</th>
                    <th className="py-2 pr-3 font-semibold">Purity</th>
                    <th className="py-2 font-semibold">Melt</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map(({ piece, result }, i) =>
                    result ? (
                      <tr
                        key={piece.id}
                        className="border-b border-[rgba(242,238,230,0.06)]"
                      >
                        <td className="py-2.5 pr-3 text-ink-soft">
                          {piece.label || `Piece ${i + 1}`} · {piece.karatId}
                        </td>
                        <td className="py-2.5 pr-3 tabular-nums">
                          {formatGrams(result.fineGoldGrams)}
                        </td>
                        <td className="py-2.5 pr-3 tabular-nums">
                          {formatPercent(result.purity)}
                        </td>
                        <td className="py-2.5 font-semibold tabular-nums">
                          {formatUsd(result.meltValue)}
                        </td>
                      </tr>
                    ) : null,
                  )}
                </tbody>
              </table>
            </div>
          ) : null}
        </div>

        <PriceBoard spot={spot} onSpotChange={setSpot} />
      </div>
    </section>
  );
}
