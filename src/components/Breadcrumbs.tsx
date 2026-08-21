import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { JsonLd } from "./JsonLd";

export type Crumb = { label: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ label: "Home", href: "/" }, ...items].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${SITE.url}${c.href === "/" ? "" : c.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="container-x pt-28 sm:pt-32">
      <JsonLd data={schema} />
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slatey/80">
        <li>
          <Link href="/" className="hover:text-copper-700 transition-colors">
            Home
          </Link>
        </li>
        {items.map((c, i) => (
          <li key={c.href} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-stone-200" />
            {i === items.length - 1 ? (
              <span className="text-ink font-medium">{c.label}</span>
            ) : (
              <Link href={c.href} className="hover:text-copper-700 transition-colors">
                {c.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
