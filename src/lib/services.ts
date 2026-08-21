import rawServices from "./data/services-data.json";

export type ServiceSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

export type Service = {
  slug: string;
  title: string;
  navTitle: string;
  eyebrow: string;
  icon: string; // lucide icon name
  image: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  intro: string[];
  benefits: string[];
  idealFor: string[];
  sections: ServiceSection[];
  priceFactors: { factor: string; detail: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const SERVICES: Service[] = rawServices as Service[];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
