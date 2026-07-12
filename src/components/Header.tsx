"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/#calculator", label: "Gold Calculator" },
  { href: "/scrap-gold-calculator", label: "Scrap Gold" },
  { href: "/gold-price-calculator", label: "Gold Price" },
  { href: "/14k-gold-calculator", label: "14K" },
  { href: "/karat-guide", label: "Karat Guide" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter,box-shadow] duration-300 ${
        transparent
          ? "border-b border-transparent bg-transparent"
          : "border-b border-[rgba(242,238,230,0.1)] bg-[rgba(18,16,12,0.92)] shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <Link
          href="/"
          className="brand-mark text-xl tracking-tight text-[#fffcf6] sm:text-2xl"
        >
          <span className="gold-sheen">Gold</span> Calculator
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-[#f0e8d8] transition hover:bg-[rgba(255,252,246,0.1)] hover:text-[#fffcf6]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/#calculator" className="btn-primary !px-4 !py-2 text-sm">
          Calculate
        </Link>
      </div>
    </header>
  );
}
