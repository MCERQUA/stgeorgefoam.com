import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Clock, Award, Sun, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/site";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Get a Free Spray Foam Insulation Quote in St. George, UT",
  description:
    "Request a free, no-obligation spray foam insulation quote for your St. George, Washington City, or Washington County home. Tell us about your project and we'll build a clear quote. 844-967-5247.",
  alternates: { canonical: "/quote" },
};

const TRUST = [
  { icon: Clock, t: "Fast response", d: "We'll reach out quickly to schedule your free assessment." },
  { icon: ShieldCheck, t: "Residential & commercial", d: "One crew for new spray foam installs and correction work — homes, shops, and metal buildings alike." },
  { icon: Award, t: "Built for 2,860 ft", d: "R-values sized for real Washington County summers, IECC Zone 3B — not a statewide guess." },
  { icon: Sun, t: "No pressure", d: "A quote is just a quote — no obligation, ever." },
];

export default function QuotePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Get a Free Quote", href: "/quote" }]} />

      <section className="pb-20 pt-8">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-28">
            <span className="eyebrow">Free quote</span>
            <h1 className="mt-4 text-[clamp(2.1rem,4.2vw,3.2rem)] font-bold leading-[1.06] text-ink">
              Tell us about your spray foam project
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slatey">
              A few quick details is all we need. Tell us about your home and a local specialist
              will put together a clear quote — built for St. George&apos;s real desert heat at
              2,860 feet.
            </p>

            <a href={SITE.phoneHref} className="mt-8 flex items-center gap-3 rounded-2xl border border-stone-200 bg-white px-5 py-4 shadow-card">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-copper-700 text-white"><Phone className="h-5 w-5" /></span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-slatey/70">Prefer to talk?</span>
                <span className="block text-lg font-bold text-ink">{SITE.phone}</span>
              </span>
            </a>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {TRUST.map((t) => (
                <div key={t.t} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-card">
                  <t.icon className="h-6 w-6 text-copper-700" />
                  <h3 className="mt-3 font-semibold text-ink">{t.t}</h3>
                  <p className="mt-1 text-sm text-slatey/80">{t.d}</p>
                </div>
              ))}
            </div>

            <div className="relative mt-6 overflow-hidden rounded-2xl border border-stone-200 shadow-soft">
              <Image src="/images/quote-texture.jpg" alt="Close-up of cured spray foam insulation texture" width={1024} height={768} className="h-48 w-full object-cover" />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
