import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import {
  buildBreadcrumbSchema,
  type BreadcrumbItem,
} from "@/lib/schema";

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const trail =
    items[0]?.path === "/"
      ? items
      : [{ name: "Home", path: "/" }, ...items];

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(trail)} />
      <nav
        aria-label="Breadcrumb"
        className="site-shell mx-auto max-w-6xl px-4 pt-4 sm:px-6"
      >
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
          {trail.map((item, index) => {
            const isLast = index === trail.length - 1;
            return (
              <li key={`${item.path}-${item.name}`} className="flex items-center gap-1.5">
                {index > 0 ? (
                  <span className="text-muted/70" aria-hidden>
                    ›
                  </span>
                ) : null}
                {isLast ? (
                  <span className="font-medium text-ink-soft" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className="transition hover:text-gold-deep"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
