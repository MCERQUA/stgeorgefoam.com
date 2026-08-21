import type { Metadata } from "next";
import { Space_Grotesk, Work_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/site";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const sans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Spray Foam Insulation St. George, UT | Residential & Commercial",
    template: "%s | St. George Foam",
  },
  description: SITE.description,
  keywords: [
    "spray foam insulation st george utah",
    "closed cell spray foam st george",
    "open cell spray foam washington county",
    "spray foam insulation cost st george",
    "commercial spray foam st george utah",
    "metal building spray foam insulation utah",
    "spray foam removal st george",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Spray Foam Insulation St. George, UT | Residential & Commercial",
    description: SITE.description,
    url: SITE.url,
    images: [{ url: "/images/hero-insulation.jpg", width: 1600, height: 896, alt: "Technician spray-applying closed-cell spray foam insulation into an attic roof deck in St. George, Utah" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spray Foam Insulation St. George, UT | St. George Foam",
    description: SITE.description,
    images: ["/images/hero-insulation.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    image: `${SITE.url}/images/hero-insulation.jpg`,
    url: SITE.url,
    telephone: "+1-844-967-5247",
    email: SITE.email,
    description: SITE.description,
    priceRange: "$$",
    areaServed: [
      "St. George, UT", "Washington City, UT", "Hurricane, UT", "Santa Clara, UT",
      "Ivins, UT", "LaVerkin, UT", "Toquerville, UT",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "St. George",
      addressRegion: "UT",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    knowsAbout: [
      "Open-Cell Spray Foam Insulation", "Closed-Cell Spray Foam Insulation",
      "Attic & Roof-Deck Spray Foam Insulation", "Exterior Wall Spray Foam Insulation",
      "Crawl Space Spray Foam Insulation", "Garage & Shop Spray Foam Insulation",
      "Commercial & Metal Building Spray Foam", "Spray Foam Removal & Correction",
    ],
  };

  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
