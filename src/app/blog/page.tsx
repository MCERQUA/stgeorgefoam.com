import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { POSTS } from "@/lib/blog";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Spray Foam Insulation Blog — St. George Cost, R-Value & Desert Climate Guides",
  description:
    "Practical spray foam insulation guides for St. George, Utah and Washington County: cost breakdowns, open-cell vs closed-cell, why attic heat gain drives summer cooling bills, and how a hot-desert IECC Zone 3B climate changes the numbers.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const [featured, ...rest] = POSTS;

  return (
    <>
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />

      <section className="pb-8 pt-8">
        <div className="container-x max-w-3xl">
          <span className="eyebrow">Blog</span>
          <h1 className="mt-4 text-[clamp(2.1rem,4.4vw,3.4rem)] font-bold leading-[1.05] text-ink">
            Spray foam, explained for St. George homeowners
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slatey">
            Straight-talking guides on what spray foam insulation costs, how open-cell and
            closed-cell foam differ, why St. George&apos;s hot-desert IECC Zone 3B climate
            changes the numbers, and how much you can actually save on summer cooling —
            written for Washington County, not a generic climate.
          </p>
        </div>
      </section>

      <section className="pb-6">
        <div className="container-x">
          <Reveal>
            <Link href={`/blog/${featured.slug}`} className="group grid gap-8 overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-card lg:grid-cols-2">
              <div className="relative min-h-[280px] overflow-hidden">
                <Image src={featured.image} alt={featured.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute left-5 top-5 rounded-full bg-copper-700 px-3 py-1 text-xs font-semibold text-white">Flagship Guide</span>
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-10">
                <div className="flex items-center gap-4 text-xs text-slatey/70">
                  <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {featured.dateLabel}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {featured.readingTime}</span>
                </div>
                <h2 className="mt-4 text-2xl font-bold leading-tight text-ink sm:text-3xl">{featured.title}</h2>
                <p className="mt-4 leading-relaxed text-slatey">{featured.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-copper-700">
                  Read the guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-card">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-charcoal backdrop-blur">{p.category}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs text-slatey/70">
                      <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {p.readingTime}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-bold leading-snug text-ink">{p.title}</h3>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slatey">{p.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-copper-700">
                      Read more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
