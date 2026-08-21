import rawPosts from "./data/blog-data.json";

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  image: string;
  date: string;
  dateLabel: string;
  readingTime: string;
  category: string;
  keywords: string[];
  blocks: BlogBlock[];
  faqs?: { q: string; a: string }[];
};

type RawPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  publishDate: string;
  author: string;
  readingTime: string;
  excerpt: string;
  category: string;
  content: string[];
  faqs?: { q: string; a: string }[];
};

function formatDateLabel(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  } catch {
    return iso;
  }
}

export const POSTS: BlogPost[] = (rawPosts as RawPost[]).map((p) => ({
  slug: p.slug,
  title: p.title,
  metaTitle: p.metaTitle,
  metaDescription: p.metaDescription,
  excerpt: p.excerpt,
  image: p.image,
  date: p.publishDate,
  dateLabel: formatDateLabel(p.publishDate),
  readingTime: p.readingTime,
  category: p.category,
  keywords: [p.category, "spray foam insulation", "St. George Utah"],
  blocks: p.content.map((paragraph) => ({ type: "p" as const, text: paragraph })),
  faqs: p.faqs,
}));

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}
