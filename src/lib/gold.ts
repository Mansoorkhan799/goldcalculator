/** Troy ounce to grams (industry standard). */
export const TROY_OZ_GRAMS = 31.1034768;

export type WeightUnit =
  | "gram"
  | "kilogram"
  | "milligram"
  | "tola"
  | "bhori"
  | "baht"
  | "dwt"
  | "grain"
  | "ounce"
  | "troy_oz";

export type KaratOption = {
  id: string;
  label: string;
  karat: number;
  purity: number;
  common?: boolean;
};

export const WEIGHT_UNITS: { id: WeightUnit; label: string; short: string }[] = [
  { id: "gram", label: "Grams", short: "g" },
  { id: "kilogram", label: "Kilograms", short: "kg" },
  { id: "milligram", label: "Milligrams", short: "mg" },
  { id: "tola", label: "Tola", short: "tola" },
  { id: "bhori", label: "Bhori", short: "bhori" },
  { id: "baht", label: "Baht (Thai)", short: "baht" },
  { id: "dwt", label: "Pennyweight (DWT)", short: "dwt" },
  { id: "grain", label: "Grains", short: "gr" },
  { id: "ounce", label: "Ounces (avoirdupois)", short: "oz" },
  { id: "troy_oz", label: "Troy ounces", short: "ozt" },
];

export const KARATS: KaratOption[] = [
  { id: "24k", label: "24K · .999+", karat: 24, purity: 0.999, common: true },
  { id: "23k", label: "23K", karat: 23, purity: 23 / 24 },
  { id: "22k", label: "22K", karat: 22, purity: 22 / 24, common: true },
  { id: "21.6k", label: "21.6K", karat: 21.6, purity: 21.6 / 24 },
  { id: "21k", label: "21K", karat: 21, purity: 21 / 24 },
  { id: "20k", label: "20K", karat: 20, purity: 20 / 24 },
  { id: "19k", label: "19K", karat: 19, purity: 19 / 24 },
  { id: "18k", label: "18K", karat: 18, purity: 18 / 24, common: true },
  { id: "16k", label: "16K", karat: 16, purity: 16 / 24 },
  { id: "15k", label: "15K", karat: 15, purity: 15 / 24 },
  { id: "14k", label: "14K", karat: 14, purity: 14 / 24, common: true },
  { id: "12k", label: "12K", karat: 12, purity: 12 / 24 },
  { id: "10k", label: "10K", karat: 10, purity: 10 / 24, common: true },
  { id: "9k", label: "9K", karat: 9, purity: 9 / 24 },
  { id: "8k", label: "8K", karat: 8, purity: 8 / 24 },
];

/** Standard South Asian tola ≈ 11.6638 g; Thai baht gold bar unit ≈ 15.244 g. */
const TO_GRAMS: Record<WeightUnit, number> = {
  gram: 1,
  kilogram: 1000,
  milligram: 0.001,
  tola: 11.6638038,
  bhori: 11.6638038,
  baht: 15.244,
  dwt: TROY_OZ_GRAMS / 20,
  grain: TROY_OZ_GRAMS / 480,
  ounce: 28.349523125,
  troy_oz: TROY_OZ_GRAMS,
};

export function toGrams(weight: number, unit: WeightUnit): number {
  return weight * TO_GRAMS[unit];
}

export function fromGrams(grams: number, unit: WeightUnit): number {
  return grams / TO_GRAMS[unit];
}

export function findKarat(id: string): KaratOption {
  return KARATS.find((k) => k.id === id) ?? KARATS.find((k) => k.id === "18k")!;
}

export type CalcInput = {
  weight: number;
  unit: WeightUnit;
  karatId: string;
  spotPerTroyOz: number;
};

export type CalcResult = {
  weightGrams: number;
  fineGoldGrams: number;
  purity: number;
  karat: number;
  pricePerGramPure: number;
  meltValue: number;
  offerLow: number;
  offerMid: number;
  offerHigh: number;
};

/** Typical scrap buyer offer bands as % of melt value. */
export const OFFER_BANDS = {
  low: 0.7,
  mid: 0.85,
  high: 0.95,
} as const;

export function calculateGoldValue(input: CalcInput): CalcResult | null {
  if (!Number.isFinite(input.weight) || input.weight <= 0) return null;
  if (!Number.isFinite(input.spotPerTroyOz) || input.spotPerTroyOz <= 0) return null;

  const karat = findKarat(input.karatId);
  const weightGrams = toGrams(input.weight, input.unit);
  const fineGoldGrams = weightGrams * karat.purity;
  const pricePerGramPure = input.spotPerTroyOz / TROY_OZ_GRAMS;
  const meltValue = fineGoldGrams * pricePerGramPure;

  return {
    weightGrams,
    fineGoldGrams,
    purity: karat.purity,
    karat: karat.karat,
    pricePerGramPure,
    meltValue,
    offerLow: meltValue * OFFER_BANDS.low,
    offerMid: meltValue * OFFER_BANDS.mid,
    offerHigh: meltValue * OFFER_BANDS.high,
  };
}

export function karatPricePerGram(spotPerTroyOz: number, karat: number): number {
  return (spotPerTroyOz / TROY_OZ_GRAMS) * (karat / 24);
}

export type GoldPiece = {
  id: string;
  label: string;
  weight: string;
  unit: WeightUnit;
  karatId: string;
};

export function createPiece(partial?: Partial<GoldPiece>): GoldPiece {
  return {
    id: crypto.randomUUID(),
    label: "",
    weight: "",
    unit: "gram",
    karatId: "18k",
    ...partial,
  };
}
