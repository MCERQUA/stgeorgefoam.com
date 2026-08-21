import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaBand } from "@/components/CtaBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import faqData from "@/lib/data/faq-data.json";

export const metadata: Metadata = {
  title: "Spray Foam Insulation FAQ | St. George, UT Hot-Climate Answers",
  description:
    "Answers to common spray foam insulation questions for St. George — cost, R-value, cooling-load reduction in a hot desert climate, open-cell vs closed-cell, and residential vs commercial spray foam.",
  alternates: { canonical: "/faq" },
};

type QA = { q: string; a: string };
const allItems = faqData as QA[];

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allItems.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[{ label: "FAQ", href: "/faq" }]} />

      <section className="pb-8 pt-8">
        <div className="container-x max-w-3xl">
          <span className="eyebrow">FAQ</span>
          <h1 className="mt-4 text-[clamp(2.1rem,4.4vw,3.4rem)] font-bold leading-[1.05] text-ink">
            Spray foam insulation questions, answered for St. George
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slatey">
            {allItems.length} of the questions we hear most — on cost, cooling-load reduction,
            residential vs. commercial scope, and installing spray foam in Washington
            County&apos;s hot desert climate. Don&apos;t see yours? Call us at 844-967-5247.
          </p>
        </div>
      </section>

      <Section className="!py-10">
        <div className="mt-2"><FaqAccordion items={allItems} /></div>
      </Section>

      <CtaBand />
    </>
  );
}
