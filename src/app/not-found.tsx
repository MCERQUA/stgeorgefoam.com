import Link from "next/link";
import { Home, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center py-32">
      <div className="container-x text-center">
        <span className="font-display text-[7rem] font-bold leading-none text-copper-700/25">404</span>
        <h1 className="mt-4 text-3xl font-bold text-ink">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-slatey">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on
          track toward a cooler, tighter Washington County home.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary"><Home className="h-4 w-4" /> Back home</Link>
          <a href={SITE.phoneHref} className="btn-outline"><Phone className="h-4 w-4 text-copper-700" /> {SITE.phone}</a>
        </div>
      </div>
    </section>
  );
}
