import Link from "next/link";
import { Phone, Mail, SprayCan, ArrowUpRight, MapPin } from "lucide-react";
import { SITE, SERVICE_AREAS } from "@/lib/site";
import { SERVICES } from "@/lib/services";

export function Footer() {
  const year = 2026;
  return (
    <footer className="bg-charcoal bg-canyon-grid text-white/70">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-copper-600">
                <SprayCan className="h-5 w-5 text-white" />
              </span>
              <span className="font-display text-lg font-bold text-white">
                St. George<span className="text-copper-600"> Foam</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Washington County&apos;s full-service spray foam company — residential and
              commercial, open-cell and closed-cell spray foam for attics, roof decks, walls,
              crawl spaces, garages, metal buildings, new installs, and correction of failed
              prior work. Not a general insulation shop — spray foam is the only thing we do.
            </p>
            <div className="mt-6 space-y-2.5">
              <a href={SITE.phoneHref} className="flex items-center gap-2.5 text-sm font-semibold text-white">
                <Phone className="h-4 w-4 text-copper-600" /> {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-copper-600" /> {SITE.email}
              </a>
              <p className="flex items-center gap-2.5 text-sm text-white/70">
                <MapPin className="h-4 w-4 text-copper-600" /> Serving St. George &amp; Washington County, Utah
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-white/60 hover:text-white transition-colors">
                    {s.navTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Service Areas</h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              {SERVICE_AREAS.map((a) => (
                <li key={a.slug}>
                  <Link href="/service-areas" className="text-white/60 hover:text-white transition-colors">
                    {a.name}, UT
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li><Link href="/about" className="text-white/60 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/faq" className="text-white/60 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/blog" className="text-white/60 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-white transition-colors">Contact</Link></li>
              <li>
                <Link href="/quote" className="inline-flex items-center gap-1 font-semibold text-copper-600 hover:text-white transition-colors">
                  Free Quote <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE.name}. Serving St. George &amp; Washington County, Utah. All rights reserved.</p>
          <p>Open-Cell &amp; Closed-Cell Spray Foam — Residential &amp; Commercial</p>
        </div>
      </div>
    </footer>
  );
}
