import type { ReactNode } from "react";

type BulletSection = {
  title: string;
  intro?: string;
  items: string[];
};

function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="brand-mark mt-2 text-3xl text-ink sm:text-4xl">{title}</h2>
      {children}
    </div>
  );
}

function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-soft sm:text-base">
      {children}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-4">
      {items.map((item) => (
        <li
          key={item.slice(0, 48)}
          className="relative pl-5 text-[15px] leading-relaxed text-ink-soft before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-gold sm:text-base"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function FeatureGrid({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <article key={item.title} className="panel p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
        </article>
      ))}
    </div>
  );
}

const howItWorksBullets = [
  "First, the calculator accesses live gold price data from recognized global exchanges such as the London Bullion Market Association, COMEX, or regional gold markets. The gold price today can vary by the minute, especially during trading hours, so real-time connectivity is important. This ensures that your calculation reflects current market conditions rather than outdated information.",
  "Next, the system performs gold purity calculation. Gold purity is typically expressed in karats (K) or as a percentage. For instance, 24-karat gold is 99.9% pure, while 22-karat gold is 91.67% pure and 18-karat gold is 75% pure. The calculator adjusts the base gold price according to the purity level you input. This step is crucial because the value of your gold directly correlates with how much pure gold content it contains.",
  "The third component involves gold weight conversion. Gold can be measured in various units including grams, kilograms, tolas, ounces, and even traditional units like bhori depending on the region. The calculator converts your input weight into a standard unit, typically grams or ounces, before performing the valuation calculation.",
  "Finally, the calculator multiplies the weight of pure gold content by the current market price, often allowing for currency conversion to display the result in your preferred monetary unit.",
];

const features = [
  {
    title: "Multi-currency gold calculator",
    body: "View gold values in your local currency. Whether you are in the United States looking at dollar values, in Pakistan checking rupee prices, or in Europe viewing euro prices, this tool adapts to your needs. This feature is particularly valuable for international traders and investors who deal with cross-border transactions.",
  },
  {
    title: "Gold unit converter",
    body: "Translate seamlessly between grams, tolas, ounces, kilograms, and other regional units so you can work with the measurements you are most comfortable with or that are standard in your region.",
  },
  {
    title: "Global gold rates",
    body: "Compare prices across different markets and countries. This transparency helps you understand regional price differences and make more strategic decisions about where and when to buy or sell gold.",
  },
  {
    title: "Live gold price updates",
    body: "Gold prices fluctuate constantly during market hours, influenced by currency movements and geopolitical events. Updated gold rates ensure your calculations reflect true market value at any given moment.",
  },
  {
    title: "Calculate by purity (24k, 22k, 18k, 14k)",
    body: "Karat-wise gold calculation lets you input your specific gold purity and receive a price that reflects actual gold content. A 24k result shows pure gold value, while 22k, 18k, or 14k adjust proportionally.",
  },
  {
    title: "Multi-unit gold weight converter",
    body: "Convert gram to tola for South Asian markets, tola to ounce for international comparisons, and work with grams, ounces, kilograms, tolas, bhori, baht, and more without manual conversion errors.",
  },
  {
    title: "Multi-country gold rate context",
    body: "International gold rates recognize that prices vary by country due to import duties, local taxes, currency exchange rates, and market demand — useful for travelers, investors, and cross-border purchases.",
  },
  {
    title: "Historical prices and trend insight",
    body: "Gold price history turns valuation into analysis. Charts and patterns over time help you identify cycles, compare current levels to historical highs and lows, and time purchases or sales more strategically.",
  },
];

const guideSteps = [
  {
    title: "Select your gold purity",
    body: "Begin by identifying the karat rating of your gold. This is usually stamped on jewelry pieces such as 24k, 22k, 18k, 14k, and more. If you are unsure, a jeweler can test your gold to find its purity. Select the appropriate purity level from the calculator’s menu.",
  },
  {
    title: "Enter weight and purity",
    body: "Input the weight of your gold and select the correct unit of measurement — grams, tolas, ounces, or another supported unit. Accuracy is crucial, so use a precise scale if possible. The calculator automatically adjusts for the purity level you selected.",
  },
  {
    title: "Choose your currency and location",
    body: "Select your preferred currency for the valuation and, when available, your country or region. This helps the calculation reflect local market conditions and pricing.",
  },
  {
    title: "Get gold value instantly",
    body: "The tool immediately displays your gold’s current market value, along with helpful context such as price per gram and comparative values at different purities. The entire process typically takes less than a minute.",
  },
];

const whyUse: BulletSection = {
  title: "Why use a gold price calculator?",
  intro:
    "The advantages of using a gold price calculator extend far beyond simple convenience. These tools offer accurate gold value assessments that eliminate uncertainty and speculation from the gold valuation process.",
  items: [
    "Real-time gold estimation is perhaps the most significant benefit. Unlike traditional methods where you might rely on outdated newspaper listings or word-of-mouth prices, a quality calculator provides current market values. This timeliness is crucial in a market where prices can change significantly within hours.",
    "The ability to perform gold price comparison across different purities, weights, and even locations empowers you to make informed decisions. You can quickly determine whether that 22k gold necklace is a better value than an 18k alternative, or whether waiting for a price dip might be advantageous. Instant gold worth estimates help you evaluate multiple scenarios quickly.",
    "These tools also provide transparency in an industry that has historically been opaque for consumers. By knowing the actual gold value before entering a jewelry store or meeting a gold dealer, you are better equipped to negotiate and avoid overpaying.",
  ],
};

const whoShould: BulletSection = {
  title: "Who should use this gold rate calculator?",
  intro:
    "The versatility of gold rate calculators makes them valuable for a diverse range of users, each with unique needs and objectives.",
  items: [
    "Gold buyers represent a primary user group, whether they are purchasing gold jewelry for personal use, buying gold coins for investment, or acquiring gold bars for wealth preservation. The calculator helps them verify that they are paying fair prices and not being overcharged.",
    "Gold sellers benefit equally, using the calculator to understand the true value of their gold before selling. This knowledge prevents them from accepting lowball offers and helps them identify the best time to sell based on market conditions.",
    "Jewelers and jewelry retailers use these tools for inventory valuation, pricing decisions, and customer transparency. By showing customers live calculations, they build trust and demonstrate fair pricing practices.",
    "Investors who hold gold as part of their portfolio use calculators to track the value of their holdings, calculate returns, and make rebalancing decisions. Historical context is particularly valuable for investment analysis and strategy development.",
    "Gold traders who actively buy and sell gold in various forms rely on real-time calculators to identify arbitrage opportunities, manage risk, and execute timely transactions. For this group, even small price discrepancies can represent significant profit opportunities.",
  ],
};

const factors: BulletSection = {
  title: "Factors that affect gold prices worldwide",
  intro:
    "Understanding gold market trends helps you interpret calculator results in proper context and make more strategic decisions about gold transactions.",
  items: [
    "The global gold price is influenced by many factors. Currency values, particularly the US dollar, have an inverse relationship with gold prices. When the dollar weakens, gold typically becomes more expensive, and vice versa. This dynamic makes gold an effective hedge against currency devaluation.",
    "Various economic factors play crucial roles in gold pricing. Inflation rates, interest rates set by central banks, and overall economic growth all impact gold demand and pricing. During periods of economic uncertainty or high inflation, gold often serves as a safe haven that drives prices higher.",
    "Geopolitical tensions, trade disputes, and international conflicts create uncertainty that typically increases gold’s appeal as a stable store of value. Gold price fluctuations often correlate with global news events, making gold a barometer of world stability.",
    "Supply and demand fundamentals also matter. Gold mining production, central bank purchases or sales, jewelry demand from countries like India and China, and industrial use all affect the overall supply-demand balance. Seasonal patterns also exist, with certain times of year traditionally seeing higher demand, particularly during wedding seasons in key markets.",
  ],
};

const historicalWhy: BulletSection = {
  title: "Why historical graphs matter for gold buyers",
  intro:
    "The gold trend graph feature is more than a visual representation of past prices — it is a powerful analytical tool that can significantly improve your decision-making process.",
  items: [
    "A gold rate pattern viewed over multiple time frames reveals important insights about market cycles. Gold prices tend to move in long-term trends, and recognizing whether you are in an uptrend, downtrend, or consolidation phase can inform your buying or selling strategy. Short-term changes become less concerning when viewed against long-term trends.",
    "Understanding gold price movement through historical analysis helps you identify better entry and exit points. If prices are near historical highs, you might choose to wait for a pullback before buying. Conversely, if prices are near historical support levels, it might represent a buying opportunity.",
    "For investment decision making, historical graphs provide crucial context. They help answer questions like: What has been gold’s average annual return? How long did previous markets last? How has gold price been compared to other investment options? This information is essential for better risk management.",
    "Historical data also helps you understand seasonality and cyclical patterns. Recognizing that gold prices often rise during certain months or in response to specific economic conditions allows you to plan purchases strategically rather than emotionally.",
    "Historical graphs also show the value of gold at various points in history — during market shutdowns, wars, and other major disruptions — so you can study how long prices fluctuated and when they recovered.",
  ],
};

const tips: BulletSection = {
  title: "Tips for making better gold buying decisions",
  intro:
    "With a gold calculator and market knowledge, you can use these gold buying tips to improve your gold transactions.",
  items: [
    "First, develop a clear gold investment strategy aligned with your financial goals. Are you buying gold for jewelry, investment, or as a passion? Each purpose may suggest different timing and forms — coins, bars, or jewelry — for your purchase.",
    "Always choose the best gold rate by comparing prices across multiple dealers and locations. Your calculator helps you verify that quoted prices align with current market rates. Do not hesitate to walk away if prices seem inflated beyond reasonable levels.",
    "Compare gold prices at different purity levels to understand the trade-offs. Higher purity gold (24k) carries premium prices but offers maximum gold content. Lower purity options like 18k or 14k may offer better value for jewelry intended for daily wear due to increased durability.",
    "Time your purchases strategically. Monitor trends using historical graphs and consider dollar-cost averaging — buying smaller amounts regularly rather than one large purchase. This approach reduces the risk of buying at a market peak.",
    "Verify authenticity through proper certification, especially for large purchases. Use your calculator to ensure the weight, purity, and price all align before completing any transaction.",
    "Consider total costs including making charges for jewelry, storage costs for investment gold, and selling costs. Your calculator shows gold value, but these additional factors affect your actual returns.",
    "Stay informed about market conditions, economic indicators, and global events that influence gold prices. The more knowledgeable you are, the better positioned you will be to make profitable decisions.",
  ],
};

export function HomeContent() {
  return (
    <div className="site-shell">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading eyebrow="Overview" title="Introduction to the gold calculator tool">
          <Prose>
            <p>
              In today&apos;s dynamic precious metals market, knowing the exact
              value of your gold has never been more important. Whether you are
              a seasoned investor, a jewelry lover, or someone looking to sell
              inherited gold pieces, having access to accurate information is
              important. This is where a gold calculator becomes a crucial tool
              in your financial toolkit.
            </p>
            <p>
              This gold price calculator is a modern yet user-friendly online
              tool that helps you know the current market value of your gold
              holdings instantly. This online gold value tool provides the
              accuracy and convenience you need to make informed decisions. It
              offers real-time gold rates from international markets, ensuring
              that you always have access to the most current pricing
              information.
            </p>
            <p>
              The beauty of this gold rate calculator lies in its simplicity and
              accessibility. Gone are the days when you had to visit multiple
              jewelry shops or wait for newspaper updates to know gold prices.
              Today, with just a few clicks, you can access a complete gold
              valuation tool that considers multiple factors including purity,
              weight, and location. Whether you are checking prices before
              making a purchase, evaluating your investment, or simply curious
              about your jewelry&apos;s worth, this tool provides instant and
              reliable information.
            </p>
          </Prose>
        </SectionHeading>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <SectionHeading title="What is a gold calculator?">
          <Prose>
            <p>
              A gold calculator is a specialized digital tool designed to find
              the monetary value of gold based on several key parameters. At its
              core, a gold calculator takes into account the weight of your
              gold, its purity level, and the current market price to provide
              you an accurate valuation. Think of it as your personal gold
              appraiser, available 24/7 at your fingertips.
            </p>
            <p>
              The gold value calculator functions as a bridge between complex
              market data and practical information. It eliminates the
              guesswork and human error that comes with manual calculations.
              When you want to know &quot;my gold price&quot; or need to
              calculate gold worth for any purpose, this tool provides
              transparent and exact results based on current market conditions.
            </p>
            <p>
              What makes this calculator particularly valuable is its ability to
              standardize gold valuation across different measurement systems
              and purity levels. Whether you have a 22-karat gold necklace
              weighing 50 grams or an 18-karat bracelet measured in tolas, the
              calculator seamlessly converts and finds the value. This
              standardization is essential in a global market where gold is
              traded using various units of measurement and purity standards.
            </p>
            <p>
              Modern gold calculators have evolved beyond simple multiplication
              tools. They now incorporate modern algorithms that account for
              regional price differences, include historical data for trend
              analysis, and even factor in making charges or fees in some cases.
              This complete approach ensures that you receive not just a number
              but meaningful insights into your gold&apos;s value.
            </p>
          </Prose>
        </SectionHeading>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <SectionHeading title="How a gold price calculator works">
          <Prose>
            <p>
              Understanding how a gold price calculator operates helps you
              appreciate the accuracy and reliability of the results it
              provides. The process involves several interconnected steps that
              work together to give you precise valuations.
            </p>
          </Prose>
          <BulletList items={howItWorksBullets} />
        </SectionHeading>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <SectionHeading
          eyebrow="Features"
          title="Main features of the gold rate calculator tool"
        >
          <Prose>
            <p>
              This complete gold rate calculator offers numerous features that
              make it an essential tool for anyone dealing with gold. These
              features transform a simple calculation tool into a complete gold
              management platform.
            </p>
          </Prose>
        </SectionHeading>
        <FeatureGrid items={features} />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <SectionHeading
          eyebrow="Guide"
          title="Step-by-step: how to use the gold calculator"
        >
          <Prose>
            <p>
              Learning to use gold calculator tools effectively is
              straightforward even for first-time users. Here is a complete
              guide to help you calculate gold price accurately.
            </p>
          </Prose>
        </SectionHeading>
        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {guideSteps.map((step, i) => (
            <li key={step.title} className="panel p-5 sm:p-6">
              <span className="brand-mark text-3xl text-gold-bright">
                {`0${i + 1}`}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <SectionHeading title={whyUse.title}>
          <Prose>
            <p>{whyUse.intro}</p>
          </Prose>
          <BulletList items={whyUse.items} />
        </SectionHeading>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <SectionHeading title={whoShould.title}>
          <Prose>
            <p>{whoShould.intro}</p>
          </Prose>
          <BulletList items={whoShould.items} />
        </SectionHeading>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <SectionHeading title={factors.title}>
          <Prose>
            <p>{factors.intro}</p>
          </Prose>
          <BulletList items={factors.items} />
        </SectionHeading>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <SectionHeading title={historicalWhy.title}>
          <Prose>
            <p>{historicalWhy.intro}</p>
          </Prose>
          <BulletList items={historicalWhy.items} />
        </SectionHeading>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <SectionHeading title={tips.title}>
          <Prose>
            <p>{tips.intro}</p>
          </Prose>
          <BulletList items={tips.items} />
        </SectionHeading>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="panel p-6 sm:p-8">
          <h2 className="brand-mark text-3xl text-ink sm:text-4xl">Conclusion</h2>
          <Prose>
            <p>
              A modern gold calculator is a simple online tool that makes it
              easy for anyone to check accurate gold prices and calculate values
              without expert help or special connections. This free tool updates
              with real-time gold prices, lets you convert between units like
              grams, ounces, or tola, adjusts for different purity levels such
              as 24K, 22K, or 18K, and even supports historical trend insight to
              help you understand market changes. You can quickly figure out the
              value of your jewelry, coins, or bars and get fair estimates for
              buying or selling, avoid overpaying or underselling, and track how
              your investments are doing over time. Next time you are thinking
              about gold, open this gold calculator. It is fast, reliable, and
              acts like your own personal advisor to give you the confidence to
              make smarter decisions in the gold market.
            </p>
          </Prose>
        </div>
      </section>
    </div>
  );
}
