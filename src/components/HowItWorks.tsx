import Image from "next/image";

const steps = [
  {
    title: "Select purity",
    body: "Choose 24k, 22k, 18k, 14k, or another karat stamped on your jewelry. Unsure? Have a jeweler test it first.",
    image: "/images/karat-stamp.jpg",
    alt: "Close-up of a 14K gold karat hallmark stamp",
  },
  {
    title: "Enter weight",
    body: "Add weight in grams, tolas, ounces, kilograms, or other supported units. Use a precise scale when you can.",
    image: "/images/weigh-gold.jpg",
    alt: "Digital gram scale weighing scrap gold jewelry",
  },
  {
    title: "Confirm spot price",
    body: "Live gold rates load automatically. Override the troy-ounce spot if you want to model a specific quote.",
    image: "/images/gold-bars.jpg",
    alt: "Stacked gold bars representing live bullion spot value",
  },
  {
    title: "Get value instantly",
    body: "See melt value, fine-gold weight, and realistic buyer offer ranges in under a minute — no page reload.",
    image: "/images/hero-gold.jpg",
    alt: "Gold bars and jewelry ready for valuation",
  },
];

export function HowItWorks() {
  return (
    <section className="site-shell mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
          How to use
        </p>
        <h2 className="brand-mark mt-2 text-3xl text-ink sm:text-4xl">
          Step-by-step gold calculator guide
        </h2>
        <p className="mt-3 text-muted">
          Learning to use this gold calculator is straightforward even for
          first-time users — calculate gold price accurately in four quick steps.
        </p>
      </div>
      <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <li key={step.title} className="panel overflow-hidden">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={step.image}
                alt={step.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-500 hover:scale-[1.03]"
              />
            </div>
            <div className="p-5">
              <span className="brand-mark text-3xl text-gold-bright">{`0${i + 1}`}</span>
              <h3 className="mt-2 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
