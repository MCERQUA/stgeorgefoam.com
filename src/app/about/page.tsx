import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame, BadgeCheck, ShieldCheck, HeartHandshake } from "lucide-react";
import { SITE } from "@/lib/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Us — Washington County's Full-Service Spray Foam Company",
  description:
    "St. George Foam is Washington County's full-service spray foam company — residential and commercial, new installs and correction of failed prior work. Never fiberglass, never blown-in, just spray foam done right.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    icon: Flame,
    t: "One material, full scope",
    d: "We don't split our attention across batts, blown-in cellulose, and foam — spray foam is the only material we install. But we don't limit the scope: homes, commercial buildings, metal shops, new installs, and fixing jobs other crews got wrong all come through the same crew.",
  },
  {
    icon: BadgeCheck,
    t: "Climate-first, not statewide",
    d: `We spec every job for St. George's real ${SITE.climateZone} conditions at ${SITE.elevation} — a genuine hot-desert climate where the summer AC bill, not the winter heat bill, is the real enemy.`,
  },
  {
    icon: ShieldCheck,
    t: "Application-correct material",
    d: "Closed-cell where roof decks and rim joists take the brunt of radiant heat and need a vapor-tight seal, open-cell where wall cavities and budget call for it. We match the foam to the cavity, not the cavity to whatever's on the truck.",
  },
  {
    icon: HeartHandshake,
    t: "Straight talk",
    d: "Honest, on-site assessments and firm quotes. We tell you what your building actually needs — never an upsell, never a downsell to protect a margin, and an honest answer if a prior install needs to come out before we can do it right.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />

      <section className="pb-16 pt-8">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow">About us</span>
            <h1 className="mt-4 text-[clamp(2.1rem,4.4vw,3.4rem)] font-bold leading-[1.05] text-ink">
              Washington County&apos;s full-service spray foam company.
            </h1>
            <div className="mt-6 space-y-4 text-slatey">
              <p className="text-lg leading-relaxed">
                St. George Foam exists to do one thing exceptionally well, for every kind of
                building that needs it: spray foam insulation for homes, additions, new
                construction, and commercial and metal-building shells across Washington County,
                installed the right way for the real hot-desert conditions we have at{" "}
                {SITE.elevation}.
              </p>
              <p>
                We started this company because homeowners and shop owners in Washington County
                kept running into the same gap — one contractor for a residential attic, a
                different one for a commercial pole barn, and nobody willing to touch a job where
                somebody else&apos;s spray foam had already gone in wrong. We built St. George
                Foam to close that gap: one crew for new spray foam installs and one crew for
                correcting failed prior work, residential or commercial, under the same roof. No
                fiberglass batts, no blown-in cellulose — spray foam is the only material we
                install, applied correctly, every time.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative overflow-hidden rounded-3xl border border-stone-200 shadow-soft">
              <Image
                src="/images/about-crew.jpg"
                alt="Spray foam insulation crew at a home in St. George, Utah"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Section className="bg-topo">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-[clamp(1.7rem,3vw,2.4rem)] font-bold text-ink">
              Built for a real St. George summer
            </h2>
            <div className="mt-6 space-y-4 text-slatey">
              <p>
                St. George sits at roughly {SITE.elevation} in Washington County, in{" "}
                {SITE.climateZone} — a genuine hot-desert climate where summer is the whole
                story, not winter. Highs run {"104-106°F"} through the peak of the season, and
                the fight in almost every home is the same: radiant heat pouring through the
                attic and roof deck all afternoon, then baking the living space long after
                sundown. It&apos;s the mirror image of a cold-climate insulation job — we&apos;re
                not stopping heat from escaping, we&apos;re stopping it from getting in, and
                slowing the transfer of already-hot attic air into conditioned space.
              </p>
              <p>
                Mid-to-late July through early-to-mid September brings monsoon season — sudden
                humidity spikes and storm cells that test roof penetrations and rim joists in a
                way the rest of the year doesn&apos;t. A properly sealed building envelope handles
                both extremes: months of baking dry heat, and the occasional monsoon downpour,
                without letting moisture or humidity work its way into the assembly.
              </p>
              <p>
                Utilities here run on Rocky Mountain Power — with its Wattsmart Homes rebate
                program — and Dixie Power, not a single statewide grid. Cutting a real cooling
                bill on either utility starts with the same fix: a sealed, correctly insulated
                envelope. Spray foam is the one material that insulates and air-seals in a single
                pass, which is exactly why it&apos;s the only one we install.
              </p>
              <p>
                Material focus is the whole business. A crew that also hangs batts and blows in
                cellulose is, by definition, spreading its expertise across three trades. We put
                all of ours into one — open-cell and closed-cell spray foam, specified correctly
                for attics, roof decks, walls, crawl spaces, rim joists, garages, commercial and
                metal-building shells, and new construction across St. George, Washington City,
                Hurricane, Santa Clara, and Ivins. What we don&apos;t narrow is who we&apos;ll
                take on: residential and commercial, new builds and the correction jobs other
                contractors walk away from.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="relative overflow-hidden rounded-3xl border border-stone-200 shadow-soft">
                <Image
                  src="/images/about-texture.jpg"
                  alt="Close-up texture of cured spray foam insulation applied to a wall cavity"
                  width={900}
                  height={700}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-[clamp(1.7rem,3vw,2.4rem)] font-bold text-ink">
                  Why we&apos;re built full-service
                </h2>
                <div className="mt-6 space-y-4 text-slatey">
                  <p>
                    Spray foam is a different trade from batts and blown-in — different rigs,
                    different chemistry, different failure modes if it&apos;s applied wrong. A
                    shop that treats it as one more line item on a general insulation menu isn&apos;t
                    wrong to offer it, but they&apos;re rarely the crew that&apos;s spent years
                    getting the ratios, the pass thickness, and the cure times right when a roof
                    deck is already pushing 140°F in the July sun — and even fewer of them will
                    show up to strip out a bad prior spray foam job before starting over.
                  </p>
                  <p>
                    We went a different direction: no batts, no blown-in, no unrelated
                    insulation menu — but also no artificial limit on the buildings we&apos;ll
                    work on. Every truck and every crew member does spray foam and only spray
                    foam, open-cell and closed-cell, applied correctly for the cavity in front of
                    us, whether that cavity is in a starter home, a metal shop, or a commercial
                    building where a previous contractor&apos;s foam has to come out first. One
                    material we know cold, applied across every job a Washington County property
                    owner throws at us.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-sand">
        <SectionHeading eyebrow="How we work" title="What you can expect from us" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {VALUES.map((v, i) => (
            <Reveal key={v.t} delay={(i % 2) * 0.1}>
              <div className="card flex h-full gap-5 p-7">
                <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-copper/10 text-copper-700">
                  <v.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink">{v.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slatey">{v.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/services" className="btn-outline">
            See what we do <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
