import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, Clock, MapPin, MessageSquare } from "lucide-react";
import { SITE } from "@/lib/site";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact Us — St. George Foam",
  description:
    "Get in touch with Washington County's full-service spray foam company — residential, commercial, new installs, and correction work. Call 844-967-5247 or email josh@contractorschoiceagency.com. Serving St. George, Washington City, Hurricane, Santa Clara & Ivins.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

      <section className="pb-20 pt-8">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Contact</span>
            <h1 className="mt-4 text-[clamp(2.1rem,4.2vw,3.2rem)] font-bold leading-[1.06] text-ink">
              Let&apos;s talk about your spray foam project
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slatey">
              Questions about attic, wall, or crawl space spray foam? Reach out and a local
              specialist will get right back to you. Serving St. George and Washington County at
              2,860 feet.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <div className="space-y-4">
                <a href={SITE.phoneHref} className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-card transition hover:border-copper-700/40">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-copper-700 text-white"><Phone className="h-6 w-6" /></span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-slatey/70">Call us</span>
                    <span className="block text-lg font-bold text-ink">{SITE.phone}</span>
                  </span>
                </a>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-card transition hover:border-copper-700/40">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-copper-700 text-white"><Mail className="h-6 w-6" /></span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-slatey/70">Email us</span>
                    <span className="block truncate text-lg font-bold text-ink">{SITE.email}</span>
                  </span>
                </a>
                <div className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-card">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-copper-700 text-white"><MapPin className="h-6 w-6" /></span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-slatey/70">Service area</span>
                    <span className="block text-lg font-bold text-ink">St. George &amp; Washington County</span>
                  </span>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-card">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-copper-700 text-white"><Clock className="h-6 w-6" /></span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-slatey/70">Hours</span>
                    <span className="block text-lg font-bold text-ink">Mon–Sat, 7am–6pm</span>
                  </span>
                </div>
                <div className="relative mt-2 overflow-hidden rounded-2xl border border-stone-200 shadow-soft">
                  <Image src="/images/about-crew.jpg" alt="St. George Foam insulation crew" width={1200} height={800} className="h-52 w-full object-cover" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div>
                <h2 className="mb-5 flex items-center gap-2 text-xl font-bold text-ink">
                  <MessageSquare className="h-5 w-5 text-copper-700" /> Send us a message
                </h2>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
