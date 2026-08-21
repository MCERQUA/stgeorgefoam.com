import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { SITE, SERVICE_AREAS, SECONDARY_AREAS } from "@/lib/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Service Areas — Spray Foam Insulation in Washington County, UT",
  description:
    "Spray foam insulation across St. George and Washington County — Washington City, Hurricane, Santa Clara, and Ivins. Free on-site quotes for a genuine hot-desert climate.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Service Areas", href: "/service-areas" }]} />

      <section className="pt-10 pb-6">
        <div className="container-x grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">
              <MapPin className="h-4 w-4" /> Serving St. George &amp; Washington County
            </span>
            <h1 className="mt-4 text-[clamp(2.1rem,4.4vw,3.4rem)] font-bold leading-[1.05] text-ink">
              Spray foam, tuned to every corner of the desert
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slatey">
              We&apos;re based in St. George and work the whole Washington County corridor, from
              Washington City and Hurricane out to Santa Clara and Ivins. Sun exposure, roof
              design, and the age of the housing stock all shift from town to town out here — so
              does the right spray foam spec for keeping a home&apos;s cooling bill under control.
              Here&apos;s where we work, and what we watch for in each one.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/quote" className="btn-primary">
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={SITE.phoneHref} className="btn-outline">
                <Phone className="h-4 w-4 text-copper-700" /> {SITE.phone}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative overflow-hidden rounded-3xl border border-stone-200 shadow-soft">
              <Image
                src="/images/service-areas-redrock.jpg"
                alt="Red rock desert landscape surrounding homes near St. George, Utah"
                width={1200}
                height={672}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Section className="bg-topo !pt-14">
        <SectionHeading
          eyebrow="Where we work"
          title="Towns we serve"
          lede="Click through to a free on-site quote for your home, addition, or new-construction project anywhere in Washington County."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_AREAS.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 0.07}>
              <div className="card card-hover flex h-full flex-col p-7">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-copper/10 text-copper-700">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <h2 className="text-xl font-bold text-ink">{a.name}, UT</h2>
                  </div>
                  <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-wide text-slatey/70">
                    {a.distance}
                  </span>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slatey">{a.blurb}</p>
                <Link
                  href="/quote"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-copper-700"
                >
                  Free quote in {a.name} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 rounded-2xl border border-stone-200 bg-white/70 p-6 text-center text-sm text-slatey shadow-card sm:text-base">
            We also take on jobs a little farther out along the Hurricane Valley corridor —{" "}
            <span className="font-semibold text-ink">{SECONDARY_AREAS.join(", ")}</span>. If
            you&apos;re in one of these towns, call and ask — we&apos;ll tell you plainly whether
            the drive makes sense for your project.
          </div>
        </Reveal>
      </Section>

      <Section className="bg-sand">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-[clamp(1.7rem,3vw,2.4rem)] font-bold text-ink">
              Why a local, full-service spray foam crew matters out here
            </h2>
            <div className="mt-6 space-y-4 text-slatey">
              <p>
                St. George and the rest of Washington County sit at roughly {SITE.elevation} in{" "}
                {SITE.climateZone} — a genuine hot-desert climate where the summer AC bill, not
                the winter heat bill, is what actually hurts. With July highs running 104-106°F,
                the priority here isn&apos;t a heating-load, ice-dam-first playbook — it&apos;s
                keeping radiant attic heat and roof-deck gain out of the living space, cavity by
                cavity, with the right spray foam for the application.
              </p>
              <p>
                That distinction changes the spec town to town. Washington City&apos;s newer
                master-planned subdivisions are often under-insulated for a real Washington
                County summer straight out of the builder&apos;s spec sheet; Hurricane&apos;s mix
                of older homes and new construction near Sand Hollow all fight the same radiant
                heat gain through the roof deck; Santa Clara and Ivins see a lot of west-facing
                exposure that takes the brunt of the punishing afternoon sun. We tune every job to
                the town — and the orientation of the house — not just the zip code.
              </p>
              <p>
                Wherever you are — St. George proper, Washington City, Hurricane, Santa Clara, or
                Ivins — you get the same thing: a straight assessment of what your home or
                building actually needs, a firm on-site quote, and a clean spray foam installation
                from a crew whose only material is spray foam, whether it&apos;s a residential
                attic, a commercial shell, or a correction job on someone else&apos;s prior
                install.
              </p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Local crews who know these towns and their homes",
                "Climate-appropriate R-values for genuine desert heat, not a statewide template",
                "West-facing-wall and roof-deck expertise for St. George's toughest exposures",
                "Free, no-pressure on-site quotes across Washington County",
              ].map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-2.5 rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-slatey shadow-card"
                >
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-copper-700" /> {b}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
