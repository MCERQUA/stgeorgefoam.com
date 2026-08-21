import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Phone, Sun, CheckCircle2, Star, ShieldCheck, Gauge,
  ClipboardCheck, Wrench, BadgeCheck, MapPin,
} from "lucide-react";
import { SITE, STATS, SERVICE_AREAS } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceIcon } from "@/components/ServiceIcon";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Spray Foam Insulation St. George, UT | Residential & Commercial | St. George Foam",
  description: SITE.description,
  alternates: { canonical: "/" },
};

const HOME_FAQS = [
  {
    q: "Do you handle both residential and commercial spray foam projects?",
    a: "Yes — that's the core of how we're built. Most spray foam crews in Washington County focus on residential attics and walls and pass on commercial work, or they focus on commercial metal buildings and don't do homes. We run both sides of the business every week: single-family attics and crawl spaces on one truck, metal-building and shop condensation-control jobs on another. If it takes spray foam to solve, we quote it.",
  },
  {
    q: "Can you fix a spray foam job another contractor botched?",
    a: "Yes, and it's a bigger share of our work than most homeowners expect. Off-ratio foam, incomplete cavity fills, missing ignition barriers, and foam sprayed too thick in one pass are common failure points from crews that don't specialize. We assess what's there, remove what has to come out, and reinstall correctly — see our Spray Foam Removal & Correction service for what that process actually involves.",
  },
  {
    q: "Will spray foam insulation lower my Rocky Mountain Power or Dixie Power bill in July and August?",
    a: "For most homes, yes — particularly when the attic and roof deck are the target. Those two months are when Washington County's cooling load peaks, and a sealed, foam-insulated attic assembly means your AC system spends less time fighting radiant heat gain from a 130-150°F+ roof deck. Rocky Mountain Power customers may also qualify for Wattsmart Homes program incentives that help offset the upfront project cost.",
  },
  {
    q: "How much does spray foam insulation cost in St. George, Utah?",
    a: "Most residential projects run roughly $1.50 to $5.00 per square foot installed, with open-cell foam toward the lower end and closed-cell toward the higher end because of its denser chemistry and higher R-value per inch. Commercial and metal-building projects are priced by scope and square footage after a site walk. Because Washington County's climate is entirely cooling-driven, none of the cost drivers you'd see in a cold-climate market — ice-dam prevention, snow-load venting changes — apply here. We'll walk your specific property and give you a firm, itemized quote.",
  },
];

export default function HomePage() {
  const featured = SERVICES.slice(0, 6);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Spray Foam Insulation Contractor",
    provider: { "@type": "HomeAndConstructionBusiness", name: SITE.name, telephone: "+1-844-967-5247" },
    areaServed: "St. George, UT and Washington County",
    description:
      "Residential and commercial spray foam insulation in St. George, Utah — open-cell and closed-cell foam for attics, roof decks, walls, crawl spaces, garages, shops, and metal buildings, plus spray foam removal and correction for improperly installed prior jobs, built for a genuine hot-desert IECC Zone 3B climate.",
  };

  return (
    <>
      <JsonLd data={[faqSchema, serviceSchema]} />

      {/* ============ HERO ============ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <Image src="/images/hero-insulation.jpg" alt="Technician spray-applying closed-cell spray foam insulation into an attic roof deck in St. George, Utah" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-800/92 via-charcoal-800/75 to-charcoal-800/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800/70 via-transparent to-transparent" />

        <div className="container-x relative z-10 grid gap-12 pt-28 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <Reveal>
            <span className="eyebrow !text-copper-600">
              <Sun className="h-4 w-4" /> Washington County&apos;s Full-Service Spray Foam Company
            </span>
            <h1 className="mt-5 text-[clamp(2.6rem,6vw,4.4rem)] font-bold leading-[1.04] text-white">
              Homes. Shops. <span className="text-copper-600">Jobs done right.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
              Residential and commercial spray foam insulation, new installs and
              correction work for jobs other crews got wrong — all under one
              roof. Built for St. George, Utah&apos;s real hot-desert climate at
              2,860 feet, IECC Climate Zone 3B, serving St. George, Washington
              City, Hurricane, Santa Clara, and Ivins.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/quote" className="btn-primary bg-white !text-charcoal hover:!bg-sand" style={{ background: "white", color: "#2A211B" }}>
                Get a Free Insulation Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={SITE.phoneHref} className="btn-ghost-light">
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/80">
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-copper-600" /> Free assessments</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-copper-600" /> Local &amp; licensed</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-copper-600" /> Residential &amp; commercial</span>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-white/15 bg-white/95 p-7 shadow-lift backdrop-blur lg:ml-auto lg:max-w-sm">
              <div className="flex items-center gap-1 text-copper-700">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <h3 className="mt-4 text-xl font-bold text-ink">A cooler property, lower energy bills</h3>
              <p className="mt-3 text-sm leading-relaxed text-slatey">
                Tell us about your project — a hot upstairs by 4pm, a metal shop
                that sweats in the morning, a job another crew left unfinished
                — and we&apos;ll build a clear, no-pressure quote.
              </p>
              <ul className="mt-5 space-y-2.5 text-sm">
                {["Residential and commercial scopes", "Air-seal and insulate in one visit", "We correct other contractors' bad foam jobs"].map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-slatey">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-copper-700" /> {t}
                  </li>
                ))}
              </ul>
              <Link href="/quote" className="btn-primary mt-6 w-full">
                Start My Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="border-b border-stone-200 bg-sand py-10">
        <div className="container-x grid grid-cols-2 gap-6 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="card px-6 py-6 text-center">
                <div className="font-display text-2xl font-bold text-copper-700 sm:text-3xl">{s.value}</div>
                <div className="mt-1.5 text-sm text-slatey">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ INTRO / PILLAR COPY ============ */}
      <Section className="bg-sand">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow mb-4">Built for 2,860 feet</span>
            <h2 className="text-[clamp(1.9rem,3.4vw,2.9rem)] font-bold leading-[1.1] text-ink">
              One spray foam company for the whole job — not just the easy part.
            </h2>
            <div className="mt-6 space-y-4 text-slatey">
              <p>
                St. George sits at roughly 2,860 feet in the Utah desert, in
                IECC Climate Zone 3B — a genuine hot-desert climate with July
                highs of 104-106°F and August close behind, followed by a
                monsoon season that runs mid/late-July through early/mid-
                September. This is a cooling-load problem, not a heating one,
                and it applies just as much to a metal shop as it does to a
                three-bedroom house.
              </p>
              <p>
                Most spray foam crews in Washington County pick a lane —
                residential attics only, or commercial metal buildings only —
                and refer out anything else. We run both, plus the work most
                companies won&apos;t touch: removing and correcting spray foam
                a previous contractor installed wrong. Off-ratio mix, missing
                ignition barriers, and incomplete cavity fills don&apos;t fix
                themselves, and they don&apos;t pass inspection either.
              </p>
              <p>
                Whatever brought you here — a hot attic, a sweating metal roof,
                or a job that needs to be redone right —{" "}
                <Link href="/services" className="font-medium text-copper-700 underline decoration-copper-700/30 underline-offset-4 hover:decoration-copper-700">
                  we quote it the same way
                </Link>
                : a real site visit, an itemized number, and a crew that
                installs spray foam every single day.
              </p>
            </div>
            <Link href="/services" className="mt-8 inline-flex items-center gap-2 font-semibold text-copper-700 hover:text-copper-600 transition-colors">
              Explore all services <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-3xl border border-stone-200 shadow-soft">
              <Image src="/images/about-texture.jpg" alt="Close-up texture of cured spray foam insulation material" width={1024} height={768} className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ============ SERVICES GRID ============ */}
      <Section className="bg-topo">
        <SectionHeading
          eyebrow="Our Services"
          title="Complete spray foam insulation for homes, shops & commercial buildings"
          lede="From attic and roof-deck applications to metal-building condensation control and correcting a previous contractor's mistakes — click any service to see how it works, what it costs, and why it fits Washington County's desert climate."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.08}>
              <Link href={`/services/${s.slug}`} className="card card-hover group block h-full p-7">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-copper/10 text-copper-700">
                  <ServiceIcon name={s.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-ink">{s.navTitle}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slatey">{s.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-copper-700">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/services" className="btn-outline">
            View all {SERVICES.length} services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* ============ WHY FULL-SERVICE (inverted sage band) ============ */}
      <Section className="bg-sage-700 !py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            { icon: ShieldCheck, t: "Residential and commercial, one crew standard", d: "The same install discipline whether we're in a family attic or a 6,000 sq ft metal shop — no B-team for commercial work." },
            { icon: Gauge, t: "We fix what other crews got wrong", d: "Off-ratio foam, missed ignition barriers, incomplete fills — we diagnose, remove what has to go, and reinstall to code." },
            { icon: BadgeCheck, t: "Zone 3B-appropriate, every time", d: "We build to St. George's actual cooling-driven climate targets, not a generic statewide minimum or cold-climate assumption." },
          ].map((f) => (
            <Reveal key={f.t}>
              <div className="flex gap-4">
                <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-white/15 text-white">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{f.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/80">{f.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============ WHY SPRAY FOAM ============ */}
      <Section className="bg-sand">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-stone-200 shadow-soft">
              <Image src="/images/service-attic-roof-deck-spray-foam.jpg" alt="Technician spraying foam insulation onto an attic roof deck" width={1024} height={768} className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <span className="eyebrow mb-4">Why St. George chooses us</span>
            <h2 className="text-[clamp(1.9rem,3.4vw,2.9rem)] font-bold leading-[1.1] text-ink">
              Comfort and savings, built for Washington County summers.
            </h2>
            <div className="mt-8 space-y-6">
              {[
                { icon: ShieldCheck, t: "Full-service scope", d: "Attics, walls, crawl spaces, garages, shops, and metal buildings — spray foam is the only material we install, across every scope it applies to." },
                { icon: Gauge, t: "Zone 3B-appropriate R-values", d: "We build to St. George's actual code targets for a hot-desert climate — not a generic statewide minimum or a cold-climate assumption that doesn't apply here." },
                { icon: BadgeCheck, t: "Honest, right-sized advice", d: "We recommend open-cell, closed-cell, or a mix based on your property's actual needs — and we won't oversell heating-bill or ice-dam framing that has nothing to do with a St. George summer." },
              ].map((f) => (
                <div key={f.t} className="flex gap-4">
                  <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-copper/10 text-copper-700">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{f.t}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slatey">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ============ SERVICE AREAS ============ */}
      <Section className="bg-topo">
        <SectionHeading
          eyebrow="Service Areas"
          title="Proudly serving St. George & Washington County"
          lede="Local crews across St. George and the surrounding communities — residential and commercial — we know these buildings and this desert climate."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_AREAS.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 4) * 0.06}>
              <Link href="/service-areas" className="card card-hover group flex items-center gap-3 p-5">
                <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-copper/10 text-copper-700">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-ink">{a.name}, UT</div>
                  <div className="text-xs text-slatey/70">Spray foam insulation</div>
                </div>
              </Link>
            </Reveal>
          ))}
          <Reveal delay={0.24}>
            <Link href="/service-areas" className="flex h-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-copper-700/30 p-5 text-sm font-semibold text-copper-700 hover:bg-copper/5 transition-colors">
              View all areas <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* ============ PROCESS ============ */}
      <Section className="bg-sand">
        <SectionHeading eyebrow="How it works" title="From free assessment to a cooler, more efficient property" />
        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {[
            { icon: ClipboardCheck, title: "Free assessment", body: "We evaluate your home or building, talk through goals and budget, and give you a clear, itemized quote — including correction work if a prior job needs it." },
            { icon: Wrench, title: "Prep the space", body: "We prep the area, mask surfaces, and stage equipment — old or failed insulation removed first when needed." },
            { icon: Sun, title: "Spray-apply foam", body: "Open-cell or closed-cell foam is sprayed to your Zone 3B R-value target, sealing every gap, residential or commercial." },
            { icon: BadgeCheck, title: "Inspect & verify", body: "We inspect the finished application, confirm coverage and cure, and walk you through what to expect this summer." },
          ].map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="card relative h-full p-8">
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-copper/10 text-copper-700">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <span className="font-display text-5xl font-bold text-stone-200">0{i + 1}</span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slatey">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============ FAQ ============ */}
      <Section className="bg-topo">
        <SectionHeading eyebrow="Questions" title="St. George spray foam insulation FAQs" />
        <div className="mt-12">
          <FaqAccordion items={HOME_FAQS} />
        </div>
        <div className="mt-8 text-center">
          <Link href="/faq" className="btn-outline">
            See all FAQs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
