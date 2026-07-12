const faqs = [
  {
    q: "How does this gold calculator work?",
    a: "It converts your weight into grams, multiplies by karat purity (karat ÷ 24), then multiplies by the live gold price per gram derived from the USD troy-ounce spot.",
  },
  {
    q: "Will a buyer pay full melt value?",
    a: "Usually not. Melt value is the theoretical metal value. Pawn shops, jewelers, and mail-in buyers typically offer a percentage after refining costs, risk, and profit.",
  },
  {
    q: "Which units can I use?",
    a: "Grams, kilograms, milligrams, tola, bhori, Thai baht, pennyweight (DWT), grains, avoirdupois ounces, and troy ounces — covering common global and South Asian measurements.",
  },
  {
    q: "What karat is most jewelry?",
    a: "In the US, 10K, 14K, and 18K are common. In many other markets, 18K, 21K, and 22K jewelry is more typical.",
  },
  {
    q: "Is the gold price live?",
    a: "Spot is fetched from public market sources and cached for about five minutes. You can also override the troy-ounce price manually.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="site-shell mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
          FAQ
        </p>
        <h2 className="brand-mark mt-2 text-3xl text-ink sm:text-4xl">
          Gold calculator questions
        </h2>
      </div>
      <div className="mt-8 divide-y divide-[rgba(242,238,230,0.1)] border-y border-[rgba(242,238,230,0.1)]">
        {faqs.map((item) => (
          <details key={item.q} className="group py-4">
            <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-4">
                {item.q}
                <span className="text-gold-deep transition group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
