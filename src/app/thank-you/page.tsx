import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Home, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You — St. George Foam",
  description: "Thanks for reaching out to St. George Foam. We'll be in touch shortly.",
  alternates: { canonical: "/thank-you" },
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center py-32">
      <div className="container-x text-center">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-copper/10">
          <CheckCircle2 className="h-11 w-11 text-copper-700" />
        </div>
        <h1 className="mt-6 text-3xl font-bold text-ink">Thank you</h1>
        <p className="mx-auto mt-4 max-w-md text-slatey">
          We&apos;ve received your request and will call you within one business day to talk
          through your project and get a spray foam quote scheduled. For anything urgent, call
          us directly.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary"><Home className="h-4 w-4" /> Back home</Link>
          <a href={SITE.phoneHref} className="btn-outline"><Phone className="h-4 w-4 text-copper-700" /> {SITE.phone}</a>
        </div>
      </div>
    </section>
  );
}
