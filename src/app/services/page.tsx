import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceIcon } from "@/components/ServiceIcon";
import { CtaBand } from "@/components/CtaBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Spray Foam Insulation Services in St. George, UT — Attic, Wall, Crawl Space & More",
  description:
    "Explore every spray foam insulation service we offer in St. George and Washington County: open-cell, closed-cell, attic/roof-deck, wall, crawl space, garage, rim joist, and new construction.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndexPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />

      <section className="pt-10 pb-6">
        <div className="container-x max-w-3xl">
          <Reveal>
            <span className="eyebrow">Our Services</span>
            <h1 className="mt-4 text-[clamp(2.2rem,4.6vw,3.6rem)] font-bold leading-[1.05] text-ink">
              Complete spray foam insulation for St. George&apos;s real desert summers
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slatey">
              We&apos;re not a general insulation company that also happens to offer spray foam —
              spray foam is the only thing we install, which is why we do it better than anyone
              else in Washington County. But we don&apos;t narrow the scope to match: residential
              and commercial, new construction and correction of prior spray foam work, all under
              one crew. Whether it&apos;s a 130°F+ attic pushing your AC into overdrive, an
              uninsulated crawl space, a metal-building shell, or a new build to St. George&apos;s
              Zone 3B code, every project starts with a free, no-pressure assessment.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/quote" className="btn-primary">Get a Free Quote <ArrowRight className="h-4 w-4" /></Link>
              <a href={SITE.phoneHref} className="btn-outline"><Phone className="h-4 w-4 text-copper-700" /> {SITE.phone}</a>
            </div>
          </Reveal>
        </div>
      </section>

      <Section className="!pt-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.07}>
              <Link href={`/services/${s.slug}`} className="card card-hover group flex h-full flex-col p-7">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-copper/10 text-copper-700">
                  <ServiceIcon name={s.icon} className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-xl font-bold text-ink">{s.navTitle}</h2>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slatey">{s.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-copper-700">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
