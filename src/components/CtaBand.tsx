import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { Reveal } from "./ui/Reveal";

export function CtaBand({
  heading = "Get your free spray foam quote",
  sub = "Tell us about your home and we'll put together a clear, no-pressure spray foam insulation quote — built for St. George's real summers.",
}: {
  heading?: string;
  sub?: string;
}) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-charcoal-800 bg-canyon-grid px-8 py-14 text-center sm:px-16">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-copper/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-copper-700/30 blur-3xl" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-[clamp(1.7rem,3vw,2.5rem)] font-bold leading-tight text-white">
                {heading}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/80">{sub}</p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/quote" className="btn-primary w-full sm:w-auto" style={{ background: "white", color: "#2A211B" }}>
                  Get My Free Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={SITE.phoneHref} className="btn-ghost-light w-full sm:w-auto">
                  <Phone className="h-4 w-4" /> {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
