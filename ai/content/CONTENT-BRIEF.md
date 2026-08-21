# Content Brief — stgeorgesprayfoam.com

## ⚠️ SPECIALIST DIFFERENTIATION RULE — READ FIRST

This is a spray-foam-ONLY insulation specialist contractor. A sibling site, southernutahinsulation.com,
already covers general insulation (spray foam + blown-in + attic + crawl space + removal + new
construction + commercial + energy audits + garage) for St. George AND Cedar City. Our site is
deliberately narrower: **spray foam only, Washington County only** (never mention Cedar City, Enoch,
or Iron County). Weave this positioning line naturally into copy wherever it fits:

> "We're not a general insulation company that also does spray foam — spray foam is the only thing
> we do, which is why we do it better than anyone else in Washington County."

Do NOT write content that reads like a general insulation company (no blown-in, no batts, no energy
audits/rebates as a standalone service, no insulation-removal as a standalone service — those belong
to the sibling).

## ⚠️ CLIMATE FRAMING RULE — READ FIRST

St. George, UT is a genuine **hot desert** climate: elevation ~2,860 ft, IECC Climate Zone 3B,
cooling-load-dominated. Summer highs run ~104-106°F in July, ~102°F in August, with multi-week
100°F+ stretches normal mid-June through early September. Monsoon season (mid/late-July through
early/mid-September) brings humidity spikes and flash-flood/moisture-intrusion risk. Dark roof decks
in direct desert sun push attic/roof-deck temps to 130-150°F+, radiating heat into ductwork and
ceiling assemblies and driving AC runtime May-September.

**Every page must frame value around cooling-load reduction and AC-bill savings — NEVER heating
savings, ice dams, snow load, or cold-climate framing.** This is the opposite framing from our
cold-climate spray foam sites (Flagstaff, Show Low) — do not default to that pattern here.

Utilities: Rocky Mountain Power (Wattsmart Homes rebate program) and Dixie Power — correctly
attribute both, never invent a third utility.

## Canonical facts

- Phone: 844-967-5247 (tel:+18449675247)
- Email: josh@contractorschoiceagency.com
- City: St. George, UT. Service area: St. George, Washington City, Hurricane, Santa Clara, Ivins,
  plus a lighter secondary mention of LaVerkin/Toquerville.
- R-value targets (2021 IECC Zone 3B): attic R-38 to R-49 (confirm per local code amendments —
  treat R-49 as the safe recommended target used elsewhere on the site), walls R-13 to R-21 depending
  on assembly, crawl space per local code.
- Closed-cell spray foam: ~R-6 to R-7 per inch. Open-cell: ~R-3.5 to R-3.7 per inch.
- Cost range: roughly $1.50-$5.00 per sq ft installed (open-cell lower end, closed-cell higher end) —
  same general range used fleet-wide, confirm this reads naturally for a desert market (no snow-related
  cost drivers).
- No testimonials. No fake street address — city/region only.
- No insurance language anywhere.

## Service pages (8 total — write EXACTLY these, no more, no fewer)

1. `open-cell-spray-foam` — Open-Cell Spray Foam Insulation. Economical air-sealing option for
   interior walls and non-roof-deck attic work; dry desert climate means low moisture resistance is
   rarely a liability. ~R-3.5-3.7/inch.
2. `closed-cell-spray-foam` — Closed-Cell Spray Foam Insulation. High-density, high-R-value option
   for roof decks, rim joists, exterior-adjacent assemblies taking direct desert heat load; structural
   rigidity, monsoon moisture resistance. ~R-6-7/inch.
3. `attic-spray-foam-insulation` — Attic & Roof-Deck Spray Foam Insulation. **FLAGSHIP PAGE.**
   Converts a vented attic into a sealed conditioned assembly, stopping 130-150°F+ hot-roof-deck heat
   from radiating into ductwork/drywall. Address the "hot roof deck problem," foam-vs-radiant-barrier,
   tie to lower Rocky Mountain Power/Dixie Power summer bills.
4. `wall-spray-foam-insulation` — Wall Cavity Spray Foam Insulation. West/south-facing wall heat gain,
   old fiberglass batt failure, "why does my west-facing bedroom stay hot all evening" angle.
5. `crawl-space-spray-foam` — Crawl Space Spray Foam Insulation. Ground-radiated summer heat +
   monsoon-season moisture intrusion. Spray-foam-application only (not vapor-barrier-and-batt work).
6. `garage-spray-foam-insulation` — Garage Spray Foam Insulation. Garages exceeding 120-130°F in
   summer, heat radiating into adjacent living space, usable-garage-space angle.
7. `new-construction-spray-foam` — New Construction Spray Foam Insulation. Builder/GC-facing,
   St. George growth corridor (Washington Fields, Little Valley, Desert Color, Hurricane), hitting/
   exceeding 2021 IECC Zone 3B code minimums in one trade visit.
8. `rim-joist-band-joist-spray-foam` — Rim Joist / Band Joist Spray Foam Insulation. Chronic
   air-leak point at the foundation perimeter; stops hot-air infiltration and monsoon dust/debris
   infiltration; easy upsell/add-on to attic or crawl-space jobs.

Each service: 1,500-2,000 words, unique metaTitle/metaDescription, intro, 4-6 benefits, idealFor list,
3-5 sections with headings/body/optional bullets, 3-4 priceFactors, 3-5 service-specific FAQs, and a
`related` array of 2-3 other service slugs from the list above.

## Blog posts (4 total)

1. **FLAGSHIP (2,500+ words):** slug `spray-foam-insulation-cost-st-george-utah-2026-guide` —
   "How Much Does Spray Foam Insulation Cost in St. George, UT? The Complete 2026 Pricing Guide."
   Per-sq-ft pricing by type and application area, cost drivers, realistic total-job ranges, ROI framed
   around AC-bill reduction (NOT heating). Internal links to all 8 service pages.
2. slug `why-st-george-attics-get-so-hot-spray-foam-solution` — "Why Your St. George Attic Hits 150°F
   in July — and How Spray Foam Stops It." Building-science explainer, ties to attic-spray-foam-insulation
   flagship service page.
3. slug `open-cell-vs-closed-cell-spray-foam-st-george` — "Open-Cell vs. Closed-Cell Spray Foam: Which
   Is Right for Your St. George Home?" Head-to-head comparison with a decision framework by application.
4. slug `spray-foam-specialist-vs-general-insulation-contractor` — "Why a Spray-Foam-Only Contractor
   Beats a General Insulation Company in St. George." Uses the positioning line verbatim. Keep neutral/
   informational — do not name or disparage southernutahinsulation.com.

Each blog post: metaTitle/metaDescription, excerpt, dateLabel "2026" era date, readingTime, category,
keywords array, blocks array (p/h2/h3/ul/callout types), optional faqs array (2-4 Qs for supporting
posts, more for the flagship).

## FAQ (write faq-data.json directly — 24 questions across 7 categories, see topical-map.md section 3
for the exact question list). Format: `{"categories": [{"name": "...", "questions": [{"q":"...","a":"..."}]}]}`.

## JSON schema (TypeScript shape, for reference)

```ts
type Service = {
  slug: string; title: string; navTitle: string; eyebrow: string; icon: string; image: string;
  metaTitle: string; metaDescription: string; summary: string; intro: string[];
  benefits: string[]; idealFor: string[];
  sections: { heading: string; body: string[]; bullets?: string[] }[];
  priceFactors: { factor: string; detail: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
};

type BlogPost = {
  slug: string; title: string; metaTitle: string; metaDescription: string; excerpt: string;
  image: string; date: string; dateLabel: string; readingTime: string; category: string;
  keywords: string[];
  blocks: ({type:"p",text:string}|{type:"h2",text:string}|{type:"h3",text:string}|{type:"ul",items:string[]}|{type:"callout",text:string})[];
  faqs?: { q: string; a: string }[];
};
```

## Image field values (use exactly these — images are already planned/generated to match)

- Services: `/images/service-open-cell-spray-foam.webp`, `/images/service-closed-cell-spray-foam.webp`,
  `/images/service-attic-spray-foam-insulation.webp`, `/images/service-wall-spray-foam-insulation.webp`,
  `/images/service-crawl-space-spray-foam.webp`, `/images/service-garage-spray-foam-insulation.webp`,
  `/images/service-new-construction-spray-foam.webp`, `/images/service-rim-joist-band-joist-spray-foam.webp`
- Blog: `/images/blog-cost-guide.webp`, `/images/blog-hot-attic.webp`, `/images/blog-open-vs-closed-cell.webp`,
  `/images/blog-specialist-vs-generalist.webp`

## Icons (lucide-react names — pick one per service)

Options: SprayCan, Home, ShieldCheck, Layers, Gauge, Wind, Warehouse, Hammer, ThermometerSun, Sun, Flame
