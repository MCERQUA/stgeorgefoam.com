import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowRight, ArrowLeft } from "lucide-react";
import { POSTS, getPost, type BlogBlock } from "@/lib/blog";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaBand } from "@/components/CtaBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: {
      type: "article",
      title: p.metaTitle,
      description: p.metaDescription,
      url: `${SITE.url}/blog/${p.slug}`,
      images: [{ url: p.image, width: 1200, height: 672, alt: p.title }],
      publishedTime: p.date,
    },
  };
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-12 text-[clamp(1.5rem,2.6vw,2.1rem)] font-bold leading-tight text-ink">{block.text}</h2>;
    case "h3":
      return <h3 className="mt-8 text-xl font-semibold text-ink">{block.text}</h3>;
    case "p":
      return <p className="mt-4 leading-relaxed text-slatey">{block.text}</p>;
    case "ul":
      return (
        <ul className="mt-5 space-y-2.5">
          {block.items.map((it, i) => (
            <li key={i} className="flex items-start gap-2.5 text-slatey">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-copper-700" /> {it}
            </li>
          ))}
        </ul>
      );
    case "callout":
      return <div className="my-8 rounded-2xl border-l-4 border-copper-700 bg-sand p-6 text-ink">{block.text}</div>;
    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: `${SITE.url}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.url}/images/hero-insulation.jpg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.url}/blog/${post.slug}` },
  };
  const schemas: Record<string, unknown>[] = [articleSchema];
  if (post.faqs?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return (
    <>
      <JsonLd data={schemas} />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.category, href: "/blog" }]} />

      <article className="pb-10 pt-6">
        <div className="container-x max-w-3xl">
          <Reveal>
            <span className="eyebrow">{post.category}</span>
            <h1 className="mt-4 text-[clamp(2rem,4.2vw,3.1rem)] font-bold leading-[1.08] text-ink">{post.title}</h1>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slatey/70">
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {post.dateLabel}</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readingTime}</span>
            </div>
          </Reveal>
        </div>

        <div className="container-x mt-8 max-w-4xl">
          <Reveal>
            <div className="relative aspect-[16/8] overflow-hidden rounded-3xl border border-stone-200 shadow-soft">
              <Image src={post.image} alt={post.title} fill priority className="object-cover" />
            </div>
          </Reveal>
        </div>

        <div className="container-x mt-10 max-w-3xl">
          {post.blocks.map((b, i) => <Block key={i} block={b} />)}

          {post.faqs?.length ? (
            <div className="mt-14">
              <h2 className="text-[clamp(1.5rem,2.6vw,2.1rem)] font-bold text-ink">Frequently asked questions</h2>
              <div className="mt-6"><FaqAccordion items={post.faqs} /></div>
            </div>
          ) : null}

          <div className="mt-12 rounded-2xl border border-stone-200 bg-sand p-7 text-center">
            <h3 className="text-xl font-bold text-ink">Ready for a free quote?</h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-slatey">
              Tell us about your home and we&apos;ll build a clear, no-pressure quote.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/quote" className="btn-primary">Get a Free Quote <ArrowRight className="h-4 w-4" /></Link>
              <a href={SITE.phoneHref} className="btn-outline">{SITE.phone}</a>
            </div>
          </div>
        </div>
      </article>

      <section className="pb-4">
        <div className="container-x max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-slatey hover:text-copper-700">
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex gap-4 rounded-2xl border border-stone-200 bg-white p-4 shadow-card">
                <div className="relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-xl">
                  <Image src={p.image} alt={p.title} fill className="object-cover" />
                </div>
                <div>
                  <span className="text-xs text-copper-700">{p.category}</span>
                  <h4 className="mt-1 text-sm font-semibold leading-snug text-ink group-hover:text-copper-700 transition-colors">{p.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
