export type SeoPage = {
  slug: string;
  /** Primary target keyword (H1 / title focus) */
  primaryKeyword: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string[];
  sections: { heading: string; paragraphs: string[] }[];
  faqs: { q: string; a: string }[];
  related: string[];
  defaultKaratId?: string;
  defaultUnit?: "gram" | "tola" | "troy_oz" | "dwt";
  calculatorTitle: string;
  calculatorBlurb: string;
  priority: number;
};

/**
 * High-volume keyword clusters (US). Brand aliases (gold calc, goldcalc)
 * stay on the homepage to avoid thin duplicate pages.
 */
export const SEO_PAGES: SeoPage[] = [
  {
    slug: "scrap-gold-calculator",
    primaryKeyword: "scrap gold calculator",
    title: "Scrap Gold Calculator — Live Melt Value by Karat & Weight",
    description:
      "Free scrap gold calculator with live spot prices. Estimate scrap gold melt value by karat, grams, DWT, or tola — plus typical pawn and buyer offer ranges.",
    h1: "Scrap Gold Calculator",
    eyebrow: "Live scrap gold value",
    intro: [
      "Use this scrap gold calculator to estimate melt value before you sell jewelry, broken chains, or mixed karat lots. Enter weight and purity, and get an instant scrap gold price based on today’s live spot.",
      "Whether you searched for a gold scrap calculator, scrap calculator, or scrap gold calc, this tool covers grams, DWT, tolas, and more — so you can compare pawn shop and jeweler offers with confidence.",
    ],
    sections: [
      {
        heading: "How the scrap gold calculator works",
        paragraphs: [
          "Scrap gold value depends on three inputs: weight, karat (purity), and the live gold price per troy ounce. The calculator converts your weight to grams, multiplies by purity (karat ÷ 24), then multiplies by the pure-gold price per gram.",
          "Melt value is the theoretical metal value — not a guaranteed payout. Local buyers, mail-in services, and pawn shops usually offer a percentage of melt after refining costs and profit.",
        ],
      },
      {
        heading: "Scrap gold vs jewelry retail price",
        paragraphs: [
          "Retail jewelry prices include design, labor, and brand markup. Scrap gold prices track the metal only. That is why a scrap gold calculator is essential before you accept any buy offer.",
          "Get multiple quotes. Online auctions sometimes reach higher percentages of melt value, while convenience buyers may bid lower.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is a scrap gold calculator?",
        a: "It is a tool that estimates the melt value of gold jewelry or scrap using weight, karat, and the current gold spot price.",
      },
      {
        q: "Will a pawn shop pay full scrap gold value?",
        a: "Usually not. Many pawn shops offer roughly 70–85% of melt value. Use this scrap gold calculator to know the ceiling before you negotiate.",
      },
    ],
    related: [
      "scrap-gold-prices",
      "gold-value-calculator",
      "14k-gold-calculator",
      "10k-gold-calculator",
    ],
    calculatorTitle: "Scrap gold calculator",
    calculatorBlurb:
      "Estimate scrap gold melt value instantly — ideal for jewelry lots, broken pieces, and mixed karats.",
    priority: 0.95,
  },
  {
    slug: "gold-price-calculator",
    primaryKeyword: "gold price calculator",
    title: "Gold Price Calculator — Live Gold Price Today by Weight & Karat",
    description:
      "Gold price calculator with live market rates. Calculate gold price today by gram, karat, and unit — a live gold calculator for jewelry, coins, and bars.",
    h1: "Gold Price Calculator",
    eyebrow: "Live gold price today",
    intro: [
      "This gold price calculator turns today’s spot rate into a clear dollar value for your gold. Adjust purity and weight to see gold calculator price results instantly — no outdated newspaper listings.",
      "It also works as a live gold calculator and gold price today calculator: spot updates regularly, and you can override the troy-ounce price to model a dealer quote or gold cost calculator scenario.",
    ],
    sections: [
      {
        heading: "Why use a gold price calculator?",
        paragraphs: [
          "Gold prices move during market hours. A gold price calculator connected to live spot helps buyers verify fair prices and helps sellers avoid lowball offers.",
          "Compare results across 24k, 22k, 18k, 14k, and 10k to understand how purity changes total gold calculator price for the same weight.",
        ],
      },
      {
        heading: "Gold price today vs what you receive",
        paragraphs: [
          "Spot is the wholesale benchmark for pure gold. Jewelry with making charges, taxes, or lower karat will not match pure spot gram-for-gram. Use the calculator for metal value, then factor fees separately.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is this a live gold calculator?",
        a: "Yes. Spot is fetched from public market sources and refreshed about every five minutes. You can also enter a custom troy-ounce price.",
      },
      {
        q: "Can I use it as a gold cost calculator?",
        a: "Yes for metal cost estimates. Add making charges, taxes, and dealer premiums separately when budgeting a purchase.",
      },
    ],
    related: [
      "gold-gram-calculator",
      "scrap-gold-prices",
      "gold-value-calculator",
      "14k-gold-calculator",
    ],
    calculatorTitle: "Gold price calculator",
    calculatorBlurb:
      "Convert live gold price today into an instant value by weight and karat.",
    priority: 0.94,
  },
  {
    slug: "scrap-gold-prices",
    primaryKeyword: "scrap gold prices",
    title: "Scrap Gold Prices Today — Per Gram by Karat (Live)",
    description:
      "Check scrap gold prices today with live spot. See scrap gold price per gram for 24k, 22k, 18k, 14k, and 10k, plus pawn shop offer context.",
    h1: "Scrap Gold Prices Today",
    eyebrow: "Live scrap gold price board",
    intro: [
      "Track scrap gold prices and gold scrap price per gram using today’s live spot. The price board updates with the market so you can check scrap gold price today before visiting a jeweler or pawn shop.",
      "Looking for scrap gold price at pawn shop today? Start with melt value here, then expect a typical offer band below full melt — use the calculator to model your exact weight.",
    ],
    sections: [
      {
        heading: "How scrap gold prices are set",
        paragraphs: [
          "Scrap gold prices per gram are derived from the USD troy-ounce spot divided by 31.1034768, then multiplied by purity. That is why 14k scrap gold price is lower per gram than 22k or 24k.",
          "Published scrap gold prices are guidelines. Actual bids vary by refining fees, minimums, and how urgently a buyer wants inventory.",
        ],
      },
      {
        heading: "Pawn shop scrap gold price today",
        paragraphs: [
          "Pawn shops often quote quickly but may sit toward the lower end of melt percentages. Bring your own weight and karat estimate from this page so you can compare scrap gold price calculator results with their offer.",
        ],
      },
    ],
    faqs: [
      {
        q: "Where do scrap gold prices come from?",
        a: "They are calculated from the live gold spot price and each karat’s purity percentage — not from a separate “scrap exchange.”",
      },
      {
        q: "Why do scrap gold prices per gram differ by karat?",
        a: "Lower karat gold contains less pure gold per gram, so scrap gold prices scale down with purity.",
      },
    ],
    related: [
      "scrap-gold-calculator",
      "14k-gold-calculator",
      "10k-gold-calculator",
      "gold-price-calculator",
    ],
    calculatorTitle: "Scrap gold price calculator",
    calculatorBlurb:
      "Turn today’s scrap gold prices into a value for your exact weight and karat.",
    priority: 0.92,
  },
  {
    slug: "gold-value-calculator",
    primaryKeyword: "gold value calculator",
    title: "Gold Value Calculator & Gold Melt Value Calculator",
    description:
      "Free gold value calculator and gold melt calculator. Estimate gold melt value from weight and karat using live spot prices.",
    h1: "Gold Value Calculator",
    eyebrow: "Melt value estimates",
    intro: [
      "This gold value calculator estimates what your gold is worth as metal — also called gold melt value. It doubles as a gold melt calculator and gold melt value calculator for jewelry, coins, and scrap.",
      "Enter weight and karat to see melt value instantly, plus typical buyer ranges so you understand gold melt value versus real-world offers.",
    ],
    sections: [
      {
        heading: "Gold melt value explained",
        paragraphs: [
          "Gold melt value is the market value of the pure gold content inside an item. A gold melt calculator multiplies fine gold grams by the pure price per gram from live spot.",
          "Coins and bars near 24k track melt closely. Fashion jewelry at 10k or 14k has less fine gold per gram, so melt value is lower even at the same gross weight.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is melt value the same as resale value?",
        a: "Not always. Melt value is the metal ceiling. Resale depends on buyer type, condition, and whether the piece has design premium.",
      },
      {
        q: "What does a gold melt value calculator need?",
        a: "Accurate weight, correct karat, and a current gold spot price. This tool supplies live spot and does the math for you.",
      },
    ],
    related: [
      "scrap-gold-calculator",
      "gold-price-calculator",
      "gold-gram-calculator",
      "gold-weight-calculator",
    ],
    calculatorTitle: "Gold value & melt calculator",
    calculatorBlurb:
      "Calculate gold melt value and total gold value from live spot, weight, and purity.",
    priority: 0.9,
  },
  {
    slug: "gold-gram-calculator",
    primaryKeyword: "gold gram calculator",
    title: "Gold Gram Calculator — Price Per Gram by Karat",
    description:
      "Gold gram calculator and gold calculator in grams. Find gold price per gram calculator results for 24k–10k with live spot rates.",
    h1: "Gold Gram Calculator",
    eyebrow: "Per-gram gold pricing",
    intro: [
      "This gold gram calculator focuses on gram-based valuation — perfect if you searched for a gold calculator in grams, gold calculator per gram, or gold price per gram calculator.",
      "Default unit is grams so you can run a gold calculator (gram) workflow quickly: weigh on a digital scale, pick karat, and see live value.",
    ],
    sections: [
      {
        heading: "Why calculate gold in grams?",
        paragraphs: [
          "Most digital scales and jewelry dens report weight in grams. A gold calculator in grams avoids conversion errors from tolas or ounces when you only need a quick per-gram check.",
          "Price per gram of pure gold equals spot ÷ 31.1034768. Lower karats multiply that rate by their purity fraction.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I use a gold calculator per gram?",
        a: "Keep the unit on grams, enter your weight, select karat, and read the melt value. The live board also shows per-gram rates by karat.",
      },
      {
        q: "Is gram pricing the same worldwide?",
        a: "The pure gram rate tracks global spot, but local taxes, premiums, and scrap discounts change what you pay or receive.",
      },
    ],
    related: [
      "gold-price-calculator",
      "14k-gold-calculator",
      "10k-gold-calculator",
      "gold-weight-calculator",
    ],
    defaultUnit: "gram",
    calculatorTitle: "Gold gram calculator",
    calculatorBlurb:
      "Gold calculator in grams — live price per gram adjusted for karat purity.",
    priority: 0.88,
  },
  {
    slug: "14k-gold-calculator",
    primaryKeyword: "14k gold calculator",
    title: "14K Gold Calculator — Price Today Per Gram & Scrap Value",
    description:
      "14k gold calculator with live rates. Check gold price today per gram 14k, 14k scrap gold price, and 14 karat gold price today before you buy or sell.",
    h1: "14K Gold Calculator",
    eyebrow: "14 karat · ~58.3% pure",
    intro: [
      "This 14k gold calculator is built for one of the most searched US jewelry purities. See gold price today per gram 14k, model scrap weight, and estimate 14k gold scrap price per gram from live spot.",
      "Whether you need a gold calculator 14k, 14 karat gold price today, gold price today 14k, or 14 k gold per gram, start here with 14K pre-selected.",
    ],
    sections: [
      {
        heading: "14k gold price today explained",
        paragraphs: [
          "14K gold is 14 parts gold out of 24 — about 58.3% pure. So 14k gold price per gram is roughly 58.3% of the pure (24k) gram rate derived from spot.",
          "Use this page for 14k scrap gold price checks and a 14k gold price per gram calculator workflow before pawn shops or jewelers quote you.",
        ],
      },
      {
        heading: "14k scrap gold price tips",
        paragraphs: [
          "Confirm hallmarks (14K, 585). Weigh without stones when possible. Stones and clasps can skew scrap offers if included in gross weight.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is 14k gold purity?",
        a: "About 58.3% pure gold (14 ÷ 24). The rest is alloy metals that add strength for everyday jewelry.",
      },
      {
        q: "How is 14k gold scrap price per gram calculated?",
        a: "Take the pure gold price per gram from spot, then multiply by 0.583 (or 14/24).",
      },
    ],
    related: [
      "10k-gold-calculator",
      "scrap-gold-calculator",
      "scrap-gold-prices",
      "gold-gram-calculator",
    ],
    defaultKaratId: "14k",
    calculatorTitle: "14k gold calculator",
    calculatorBlurb:
      "Pre-set to 14K — check gold price today per gram 14k and scrap melt value.",
    priority: 0.93,
  },
  {
    slug: "10k-gold-calculator",
    primaryKeyword: "10k gold price per gram",
    title: "10K Gold Calculator — Price Per Gram & Scrap Value",
    description:
      "10k gold calculator for price per gram and scrap. Check 10k gold price per gram, 10k scrap gold price, and 10 k gold per gram with live spot.",
    h1: "10K Gold Calculator",
    eyebrow: "10 karat · ~41.7% pure",
    intro: [
      "10k gold price per gram is one of the highest-volume karat searches in the US. This 10K gold calculator pre-selects 10K so you can price jewelry or check 10k scrap gold price per gram in seconds.",
      "Use it for 10k scrap gold price estimates and 10 k gold per gram comparisons against 14k and 18k before you buy or sell.",
    ],
    sections: [
      {
        heading: "Understanding 10k gold price per gram",
        paragraphs: [
          "10K is about 41.7% pure gold (10 ÷ 24). That means 10k gold price per gram is lower than 14k or 18k for the same gross weight — but 10K jewelry is common and durable for daily wear.",
          "Scrap buyers price the fine gold content. Always verify stamps (10K, 417) before accepting a 10k scrap gold price.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is 10K real gold?",
        a: "Yes. In the US, 10K is the minimum karat that can be sold as gold jewelry. It contains about 41.7% pure gold.",
      },
      {
        q: "How do I estimate 10k scrap gold price per gram?",
        a: "Multiply the live pure-gold gram price by 10/24 (~0.417), then multiply by your weight in grams.",
      },
    ],
    related: [
      "14k-gold-calculator",
      "scrap-gold-calculator",
      "scrap-gold-prices",
      "gold-gram-calculator",
    ],
    defaultKaratId: "10k",
    calculatorTitle: "10k gold calculator",
    calculatorBlurb:
      "Pre-set to 10K — calculate 10k gold price per gram and scrap melt value.",
    priority: 0.93,
  },
  {
    slug: "gold-weight-calculator",
    primaryKeyword: "gold weight calculator",
    title: "Gold Weight Calculator & Gold Converter (g, Tola, oz, DWT)",
    description:
      "Gold weight calculator and gold converter. Convert grams, tolas, ounces, DWT, and more, then calculate value with live gold prices.",
    h1: "Gold Weight Calculator",
    eyebrow: "Weight + unit converter",
    intro: [
      "This gold weight calculator helps you convert and value gold across units — a practical gold converter for grams, kilograms, tolas, bhori, baht, DWT, grains, and troy ounces.",
      "If you know gold weight but not the unit your buyer uses, convert first, then calculate melt value with live spot in the same tool.",
    ],
    sections: [
      {
        heading: "Common gold weight units",
        paragraphs: [
          "Grams dominate digital scales. Tola is common in South Asia (~11.66 g). Troy ounces are used in bullion markets (31.1034768 g). Pennyweight (DWT) appears in US scrap quotes.",
          "A reliable gold converter prevents costly mistakes when dealers switch units mid-conversation.",
        ],
      },
    ],
    faqs: [
      {
        q: "What does a gold weight calculator do?",
        a: "It converts between gold weight units and can combine conversion with live price math so you see value in one place.",
      },
      {
        q: "Is this also a gold converter?",
        a: "Yes. Change the unit dropdown to convert how weight is interpreted, then read fine-gold grams and melt value.",
      },
    ],
    related: [
      "gold-gram-calculator",
      "gold-price-calculator",
      "scrap-gold-calculator",
      "gold-value-calculator",
    ],
    calculatorTitle: "Gold weight calculator",
    calculatorBlurb:
      "Convert gold weight across units, then calculate live value — your all-in-one gold converter.",
    priority: 0.87,
  },
  {
    slug: "gold-jewelry-calculator",
    primaryKeyword: "gold jewelry calculator",
    title: "Gold Jewelry Calculator — Value Jewelry by Weight & Karat",
    description:
      "Gold jewelry calculator to estimate melt value of rings, chains, and bracelets by karat and weight with live gold prices.",
    h1: "Gold Jewelry Calculator",
    eyebrow: "Rings · chains · bracelets",
    intro: [
      "This gold jewelry calculator helps you estimate the metal value of rings, chains, earrings, and bracelets before you buy, insure, or sell.",
      "Add multiple pieces, set each karat, and see a combined melt estimate — useful when sorting a jewelry box or inherited collection.",
    ],
    sections: [
      {
        heading: "Jewelry value vs melt value",
        paragraphs: [
          "Designer or gemstone jewelry may sell above melt. Plain broken chains often trade near scrap. Use the gold jewelry calculator for the metal floor, then adjust for stones and brand separately.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should I include gemstones in the weight?",
        a: "For melt estimates, weigh metal only when possible. Stones are usually removed or discounted by scrap buyers.",
      },
    ],
    related: [
      "scrap-gold-calculator",
      "14k-gold-calculator",
      "10k-gold-calculator",
      "gold-value-calculator",
    ],
    calculatorTitle: "Gold jewelry calculator",
    calculatorBlurb:
      "Value one piece or a whole jewelry lot with multi-piece live calculations.",
    priority: 0.8,
  },
];

export function getSeoPage(slug: string): SeoPage | undefined {
  return SEO_PAGES.find((p) => p.slug === slug);
}

export function getSeoPageBySlugs(slugs: string[]): SeoPage[] {
  return slugs
    .map((slug) => getSeoPage(slug))
    .filter((p): p is SeoPage => Boolean(p));
}
