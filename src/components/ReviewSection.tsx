import { SITE_RATING, FEATURED_REVIEWS } from "@/lib/schema";

export function ReviewSection() {
  return (
    <section
      id="reviews"
      className="site-shell mx-auto max-w-6xl px-4 py-14 sm:px-6"
      itemScope
      itemType="https://schema.org/WebApplication"
    >
      <meta itemProp="name" content="Gold Calculator" />
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
          Reviews
        </p>
        <h2 className="brand-mark mt-2 text-3xl text-ink sm:text-4xl">
          Trusted gold calculator ratings
        </h2>
        <p className="mt-3 text-muted">
          Rated{" "}
          <span itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
            <strong className="text-ink" itemProp="ratingValue">
              {SITE_RATING.ratingValue}
            </strong>
            <meta itemProp="bestRating" content={SITE_RATING.bestRating} />
            <meta itemProp="worstRating" content={SITE_RATING.worstRating} />
            /5 from{" "}
            <span itemProp="ratingCount">
              {Number(SITE_RATING.ratingCount).toLocaleString("en-GB")}
            </span>{" "}
            ratings
          </span>
          . Free to use on any device.
        </p>
      </div>

      <ul className="mt-8 grid gap-4 md:grid-cols-3">
        {FEATURED_REVIEWS.map((review) => (
          <li
            key={review.author}
            className="panel p-5"
            itemProp="review"
            itemScope
            itemType="https://schema.org/Review"
          >
            <div
              itemProp="reviewRating"
              itemScope
              itemType="https://schema.org/Rating"
              className="flex items-center gap-2 text-gold-bright"
            >
              <meta itemProp="ratingValue" content={review.ratingValue} />
              <meta itemProp="bestRating" content="5" />
              <span aria-label={`${review.ratingValue} out of 5 stars`}>
                {"★".repeat(Number(review.ratingValue))}
                {"☆".repeat(5 - Number(review.ratingValue))}
              </span>
              <span className="text-sm text-ink-soft">{review.ratingValue}/5</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft" itemProp="reviewBody">
              {review.reviewBody}
            </p>
            <p className="mt-4 text-xs text-muted">
              <span itemProp="author" itemScope itemType="https://schema.org/Person">
                <span itemProp="name">{review.author}</span>
              </span>
              {" · "}
              <time itemProp="datePublished" dateTime={review.datePublished}>
                {new Date(review.datePublished).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </time>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
