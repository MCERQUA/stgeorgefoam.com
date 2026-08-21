import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Phone, CheckCircle2, Users, TrendingUp } from "lucide-react";
import { SERVICES, getService } from "@/lib/services";
import { SITE, SERVICE_AREAS, SECONDARY_AREAS } from "@/lib/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceIcon } from "@/components/ServiceIcon";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaBand } from "@/components/CtaBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      url: `${SITE.url}/services/${s.slug}`,
      images: [{ url: s.image, width: 1200, height: 672, alt: s.title }],
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const related = s.related.map((r) => getService(r)).filter(Boolean);
  const allAreas = [...SERVICE_AREAS.map((a) => `${a.name}, UT`), ...SECONDARY_AREAS.map((a) => `${a}, UT`)];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: s.title,
    provider: { "@type": "HomeAndConstructionBusiness", name: SITE.name, telephone: "+1-844-967-5247" },
    areaServed: allAreas,
    description: s.metaDescription,
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={[serviceSchema, faqSchema]} />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: s.navTitle, href: `/services/${s.slug}` }]} />

      {/* HERO */}
      <section className="pt-10 pb-16 sm:pb-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">
              <ServiceIcon name={s.icon} className="h-4 w-4" /> {s.eyebrow}
            </span>
            <h1 className="mt-5 text-[clamp(2.1rem,4.4vw,3.4rem)] font-bold leading-[1.05] text-ink">{s.title}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slatey">{s.summary}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/quote" className="btn-primary">Get a Free Quote <ArrowRight className="h-4 w-4" /></Link>
              <a href={SITE.phoneHref} className="btn-outline"><Phone className="h-4 w-4 text-copper-700" /> {SITE.phone}</a>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative overflow-hidden rounded-3xl border border-stone-200 shadow-soft">
              <Image src={s.image} alt={s.title} width={1200} height={672} className="h-full w-full object-cover" priority />
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRO + BENEFITS */}
      <Section className="bg-topo !pt-14">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="space-y-5 text-slatey">
              {s.intro.map((p, i) => (
                <p key={i} className={i === 0 ? "text-lg leading-relaxed" : "leading-relaxed"}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="card p-7">
              <h3 className="flex items-center gap-2 text-lg font-bold text-ink">
                <CheckCircle2 className="h-5 w-5 text-copper-700" /> Why homeowners choose it
              </h3>
              <ul className="mt-5 space-y-3">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-slatey">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-copper-700" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* DETAIL SECTIONS */}
      <Section>
        <div className="mx-auto max-w-4xl space-y-14">
          {s.sections.map((sec, i) => (
            <Reveal key={i}>
              <div>
                <h2 className="text-[clamp(1.5rem,2.6vw,2.1rem)] font-bold leading-tight text-ink">{sec.heading}</h2>
                <div className="mt-5 space-y-4 text-slatey">
                  {sec.body.map((p, j) => <p key={j} className="leading-relaxed">{p}</p>)}
                </div>
                {sec.bullets && (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {sec.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-slatey shadow-card">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-copper-700" /> {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* IDEAL FOR + PRICE FACTORS */}
      <Section className="bg-topo">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full p-8">
              <h3 className="flex items-center gap-2 text-xl font-bold text-ink">
                <Users className="h-5 w-5 text-copper-700" /> Ideal for
              </h3>
              <ul className="mt-6 space-y-3">
                {s.idealFor.map((w) => (
                  <li key={w} className="flex items-start gap-2.5 text-slatey">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-copper-700" /> {w}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card h-full p-8">
              <h3 className="flex items-center gap-2 text-xl font-bold text-ink">
                <TrendingUp className="h-5 w-5 text-copper-700" /> What affects the cost
              </h3>
              <div className="mt-6 divide-y divide-stone-200">
                {s.priceFactors.map((f) => (
                  <div key={f.factor} className="py-3.5">
                    <div className="font-semibold text-ink">{f.factor}</div>
                    <div className="mt-1 text-sm text-slatey/80">{f.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading eyebrow="FAQs" title={`${s.navTitle} questions, answered`} />
        <div className="mt-12"><FaqAccordion items={s.faqs} /></div>
      </Section>

      {/* WHY US / PROCESS (contextual) */}
      <Section className="bg-topo">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-[clamp(1.5rem,2.6vw,2.1rem)] font-bold leading-tight text-ink">
              {s.navTitle} done right, by a local Washington County crew
            </h2>
            <div className="mt-5 space-y-4 text-slatey">
              <p>
                We&apos;re a full-service spray foam company — not a general insulation
                contractor that also offers spray foam as one option among many. Spray foam is
                the only material we install, but we don&apos;t limit the scope: residential and
                commercial, new construction, and correction of prior spray foam jobs other
                crews got wrong. {s.navTitle} isn&apos;t a commodity, and the result depends
                entirely on how carefully it&apos;s scoped and installed for your specific
                building in a genuine hot-desert climate. We assess what your property actually
                needs, prep and air-seal properly, and install to your elevation-appropriate,
                IECC Zone 3B R-value target, so the work delivers the cooling-bill relief
                it&apos;s supposed to.
              </p>
              <p>
                We serve St. George, Washington City, Hurricane, Santa Clara, Ivins, LaVerkin, and
                Toquerville. St. George&apos;s summers are the whole story here — dark roof decks
                push attic temperatures to 130-150°F+ from May through September, and that heat
                radiates straight down into living space and forces your AC to run nearly
                nonstop. We scope every job around that cooling load, not around a heating-season
                assumption borrowed from a colder climate. Every job starts with a free,
                no-pressure quote.
              </p>
              <p>
                Just as important, we treat your home like the system it is. Insulation, air
                sealing, and ventilation all interact, and getting one right while ignoring the
                others leaves comfort and savings on the table. When we scope your{" "}
                {s.navTitle.toLowerCase()}, we look at how it fits the whole picture — so the
                finished result performs the way it should, holds up through a genuine St. George
                summer, and actually lowers the AC bills you feel every month, whether
                you&apos;re served by Rocky Mountain Power (including its Wattsmart Homes program)
                or Dixie Power.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { n: "1", t: "Free assessment", d: "We evaluate your home and give you a clear, itemized quote." },
                { n: "2", t: "Expert install", d: `We prep, air seal, and install your ${s.navTitle.toLowerCase()} to spec — clean and on schedule.` },
                { n: "3", t: "Savings you can feel", d: "A cooler home, lower AC bills, and honest advice about what your home needs." },
              ].map((step) => (
                <div key={step.n} className="card p-6">
                  <div className="font-display text-2xl font-bold text-copper-700">{step.n}</div>
                  <h3 className="mt-2 font-semibold text-ink">{step.t}</h3>
                  <p className="mt-1.5 text-sm text-slatey/85">{step.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* RELATED */}
      {related.length > 0 && (
        <Section className="!py-16">
          <SectionHeading eyebrow="Build the whole system" title="Related services" align="left" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <Link key={r!.slug} href={`/services/${r!.slug}`} className="card card-hover group p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-copper/10 text-copper-700">
                  <ServiceIcon name={r!.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-bold text-ink">{r!.navTitle}</h3>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-copper-700">
                  Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CtaBand heading={`Ready for a free ${s.navTitle.toLowerCase()} quote?`} />
    </>
  );
}
