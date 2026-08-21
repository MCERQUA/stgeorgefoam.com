"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown, SprayCan } from "lucide-react";
import { SITE, MAIN_NAV } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-sand/90 backdrop-blur-xl border-b border-stone-200 shadow-sm"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container-x flex h-[70px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-copper-700 shadow-soft">
            <SprayCan className="h-5 w-5 text-white" />
          </span>
          <span className="font-display text-lg font-bold text-ink leading-none">
            St. George<span className="text-copper-700"> Foam</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          <div
            className="relative"
            onMouseEnter={() => setSvcOpen(true)}
            onMouseLeave={() => setSvcOpen(false)}
          >
            <Link
              href="/services"
              className="flex items-center gap-1 text-sm font-medium text-slatey hover:text-copper-700 transition-colors"
            >
              Services <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            {svcOpen && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-4">
                <div className="w-[560px] rounded-2xl border border-stone-200 bg-white p-3 shadow-lift grid grid-cols-2 gap-1">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="rounded-xl px-3 py-2.5 hover:bg-stone-100 transition-colors"
                    >
                      <div className="text-sm font-semibold text-ink">{s.navTitle}</div>
                      <div className="text-xs text-slatey/70">{s.eyebrow}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {MAIN_NAV.filter((n) => n.href !== "/services").map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-slatey hover:text-copper-700 transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href={SITE.phoneHref} className="flex items-center gap-2 text-sm font-semibold text-ink">
            <Phone className="h-4 w-4 text-copper-700" />
            {SITE.phone}
          </a>
          <Link href="/quote" className="btn-primary !py-2.5 !px-5">
            Free Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-ink p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-sand border-t border-stone-200">
          <div className="container-x py-5 flex flex-col gap-1">
            <Link href="/services" onClick={() => setOpen(false)} className="py-2.5 font-semibold text-ink">
              All Services
            </Link>
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                onClick={() => setOpen(false)}
                className="py-2 pl-4 text-sm text-slatey"
              >
                {s.navTitle}
              </Link>
            ))}
            {MAIN_NAV.filter((n) => n.href !== "/services").map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2.5 font-medium text-ink border-t border-stone-200"
              >
                {n.label}
              </Link>
            ))}
            <a href={SITE.phoneHref} className="mt-3 flex items-center gap-2 font-semibold text-ink">
              <Phone className="h-4 w-4 text-copper-700" /> {SITE.phone}
            </a>
            <Link href="/quote" onClick={() => setOpen(false)} className="btn-primary mt-3">
              Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
