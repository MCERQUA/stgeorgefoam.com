# stgeorgesprayfoam.com — SEO Keyword Research

**Domain:** stgeorgesprayfoam.com
**Vertical:** Spray foam insulation SPECIALIST contractor (open-cell + closed-cell ONLY) — a narrower, dedicated-specialist positioning. **NOT insurance. NOT a general insulation contractor.**
**Service area:** St. George, UT + Washington County — Washington City, Hurricane, Ivins, Santa Clara, La Verkin, Toquerville; Cedar City (Iron County) as a secondary/outlier city.
**Climate:** Hot desert (northern Mojave Desert fringe), **IECC Climate Zone 3B**, elevation ~2,860 ft, average July high 100–105°F+, brief but intense July–August monsoon season, ~8 in/yr rainfall, very low humidity outside monsoon bursts, large day/night temperature swings. **This is a heat-REJECTION market, the functional opposite of a cold-climate/ice-dam site** — every keyword, PAA answer, and content angle below should be read through a cooling-cost/AC-savings/heat-mitigation lens, never a heat-retention/ice-dam lens.
**Sibling site distinction:** `southernutahinsulation.com` already exists as the GENERAL insulation contractor for this exact market (spray foam + blown-in + batt + air sealing + insulation removal). This site must read as a **spray-foam-only specialist shop** — think "spray foam applicator" vs. "full-service insulation contractor," the same relationship showlowsprayfoam.com has to showlowinsulation.com. Keyword targeting and content should lean hard into spray-foam-specific vocabulary (open-cell, closed-cell, foam kits, foam R-value, foam vs. fiberglass, foam roofing) rather than general "insulation," "blown-in," or "batt" category terms that belong to the sibling.
**Data source:** DataForSEO API via the social-dashboard gateway (`172.18.0.1:6350`, tenant `josh`, `client_tag=stgeorgesprayfoam`). All calls returned `status_code: 20000` — no auth failures, no empty-result gotchas hit.
**Date pulled:** 2026-07-31

---

## 1. Top Keywords — Volume + Difficulty

### 1a. Utah state-level volume (best available quantitative proxy — foam-specific terms only)

St. George / Washington County is too small a market for Google Ads to report city-level search volume for spray-foam terms (see §2 — every city-modified query returned `null`, not zero). Utah is a small, relatively consolidated ad market (unlike fragmented multi-metro states), so **state-level volume is usable here** — same finding as the `southernutahinsulation.com` sibling research.

| Keyword | UT Volume/mo | Competition | CPC | KD (national) |
|---|---|---|---|---|
| spray foam insulation | 720 | HIGH | $4.52 | 31 |
| spray foam insulation kit | 140 | HIGH | $3.14 | 14 |
| closed cell spray foam insulation | 170 | HIGH | $5.01 | 17 |
| closed cell spray foam | 140 | HIGH | $2.95 | 0 |
| open cell spray foam insulation | 90 | HIGH | $0.44 | 0 |
| open cell spray foam | 90 | HIGH | $0.44 | 0 |
| spray foam insulation near me | 90 | LOW | $12.92 | 0 |
| diy spray foam insulation | 70 | HIGH | $1.25 | — |
| spray foam insulation cost | 50 | HIGH | $6.56 | 0 |
| spray foam insulation contractor | 40 | LOW | — | 3 |
| spray foam attic insulation | 40 | HIGH | $25.51 | 0 |
| spray foam insulation installers | 40 | LOW | — | 0 |
| radiant barrier insulation | 40 | HIGH | $2.07 | — |
| spray foam insulation for walls | 40 | HIGH | $1.94 | 14 |
| spray foam insulation r value | 30 | MEDIUM | $0.41 | 0 |
| garage spray foam insulation | 20 | MEDIUM | $12.85 | 0 |
| rim joist spray foam | 20 | HIGH | $0.56 | — |
| open cell vs closed cell spray foam | 20 | LOW | — | 0 |
| spray foam insulation contractor near me | 10 | MEDIUM | — | — |
| spray foam insulation company | 10 | MEDIUM | — | 0 |
| crawl space spray foam insulation | 10 | HIGH | $2.31 | 0 |
| spray foam roofing | 10 | MEDIUM | — | 0 |
| spray foam insulation vs fiberglass | 10 | MEDIUM | — | 0 |
| how much does spray foam insulation cost | 10 | LOW | $3.80 | — |

**Read:** Difficulty is remarkably low across almost every foam-specific term — most sit at KD 0, and only the bare-root "spray foam insulation" (31) and "spray foam insulation for walls" (14) / "spray foam insulation kit" (14) / "closed cell spray foam insulation" (17) break into moderate territory. **"Spray foam attic insulation" carries the standout CPC in Utah at $25.51** — the single highest-value commercial-intent term in this batch and a strong candidate for its own dedicated, well-built service page. "Spray foam insulation near me" ($12.92 CPC, LOW competition) and "garage spray foam insulation" ($12.85 CPC) are the next-best local-intent commercial targets. LOW competition on "spray foam insulation contractor" / "spray foam insulation installers" / "spray foam insulation contractor near me" makes these easy, high-priority money pages for a brand-new specialist site.

### 1b. National keyword-suggestion volumes (market-shape signal — foam-specific seed)

Pulled via `keyword_suggestions` + `keyword_ideas` on seeds "spray foam insulation" / "closed cell spray foam" / "open cell spray foam," filtered to the foam-specific subset. National volume isn't directly usable for a single-county market but confirms real search *behavior patterns* worth building pages and content around (DIY/kit searches, cost-by-project-size, R-value comparisons, near-me commercial intent):

| Keyword pattern | National Vol/mo | CPC | KD |
|---|---|---|---|
| spray foam insulation (+ variants: spray in foam, foam spray, insulation spray foam) | 90,500 | $4.14 | 31 |
| spray foam insulation kit(s) | 22,200 | $2.45 | 14 |
| closed cell / closed-cell spray foam insulation | 18,100 | $3.84 | 17 |
| spray foam insulation near me | 14,800 | $17.94 | 0 |
| spray foam insulation diy kit(s) | 9,900 | $1.77 | 0–1 |
| spray foam insulation price/cost (all cost-phrasing variants) | 8,100 | $6.70 | 0 |
| spray foam insulation contractor(s) / installers | 8,100 | $14.52 | 0–3 |
| spray foam insulation for attics / in attic / attic insulation foam spray | 6,600 | $9.01 | 0 |
| spray foam insulation for walls | 4,400 | $2.41 | 14 |
| spray foam insulation r value | 2,400 | $2.29 | 0 |
| spray foam insulation cost per square foot | 2,400 | $4.77 | 0 |
| closed cell spray foam insulation r value | 2,400 | $2.60 | 0 |
| open cell vs closed cell spray foam / open vs closed cell foam | 2,400 | $2.76–$3.42 | 0 |
| spray foam insulation kits 1000 sq ft | 1,600 | $2.49 | 0 |
| spray foam insulation cost calculator | 1,300 | $6.97 | 0 |
| open cell spray foam r-value | 880 | $2.23 | 0 |
| spray foam insulation vs fiberglass | 880 | $4.54 | 0 |
| best spray foam insulation kit | 720 | $2.72 | 0 |
| spray foam insulation cost vs fiberglass | 210 | $3.79 | 0 |
| attic spray foam insulation near me | 70 | $15.74 | 0 |
| spray foam insulation kit for metal buildings | 40 | $2.09 | 0 |
| residential spray foam insulation near me | 40 | $17.97 | 0 |

**Strategic note:** "Cost per square foot / cost calculator / cost by project size" is a dominant, low-difficulty national search pattern — a strong opportunity for a cost calculator/estimator page or interactive cost table broken out by project type (attic, garage, crawl space, rim joist, metal building). This pattern repeats heavily in the PAA data below.

### 1c. Keyword Difficulty spot-check (bulk_keyword_difficulty, national)

| Keyword | KD |
|---|---|
| crawl space spray foam insulation | 0 |
| garage spray foam insulation | 0 |
| spray foam insulation near me | 0 |
| spray foam insulation utah | 0 |
| spray foam roof insulation | 0 |
| spray foam vs fiberglass insulation | 0 |
| spray foam insulation cost per square foot | 0 |

City/state-modified long-tail terms ("spray foam insulation st george ut," "closed cell spray foam st george," "attic insulation st george utah," "spray foam contractors utah," "insulation contractor st george utah") returned **no KD score at all (null)** — no data because they carry no measurable national search volume to score, not a scoring failure. Treat as zero-competition, build-it-anyway pages, per §2.

---

## 2. Geo-Modified Local Keywords — St. George & Washington County

Ran direct Google Ads search-volume checks for hyper-local, city-modified terms at both national and St. George-specific location scope. **Every single one returned `null`** (no measurable volume, not zero) — consistent with the `southernutahinsulation.com` sibling finding for the same market. Washington County (~190K population) is simply below Google Ads' measurement floor for keyword-level city volume.

Queried (all null): "spray foam insulation st george ut," "spray foam insulation st george utah," "closed cell spray foam st george," "open cell spray foam utah," "attic insulation st george utah," "spray foam insulation cost st george," "spray foam contractors utah," "spray foam insulation washington county utah," "spray foam insulation cedar city," "spray foam insulation hurricane utah," "best insulation for hot climate," "spray foam insulation st george," "insulation contractor st george utah," "spray foam insulation southern utah," "attic insulation cost utah," "blown in insulation st george utah," "insulation companies st george utah," "residential spray foam insulation."

**Recommended geo-targeted page/URL set** (build these as real pages regardless of zero measured volume — they capture near-me/voice-search/Maps traffic that Ads volume tools simply don't surface for a market this size):
- St. George, UT (primary/home base)
- Washington City, UT
- Hurricane, UT
- Ivins, UT
- Santa Clara, UT
- La Verkin / Toquerville, UT (can be combined into one smaller-town page)
- Cedar City, UT (secondary — see climate caveat in §4; higher elevation, meaningfully cooler, different messaging)
- "Washington County, UT" as a regional umbrella/hub page

---

## 3. Related & Long-Tail Keywords (Spray-Foam-Specific)

Grouped by theme, pulled from `related_keywords` (depth 2) and `keyword_suggestions`/`keyword_ideas` on foam-specific seeds:

**Cost / project-size long-tail:**
- spray foam insulation cost per square foot
- spray foam insulation cost calculator / cost per sq ft calculator
- spray foam insulation cost vs fiberglass
- spray foam insulation kits 1000 sq ft (and 500 / 400 / 2000 sq ft variants — DIY-kit intent, redirect to "hire a pro")
- cost to spray foam a 2000 sq ft home / 40x60 or 30x40 building / 20x20 garage

**Technical / comparison long-tail:**
- open cell vs closed cell spray foam insulation (also phrased "difference between open cell and closed cell spray foam")
- spray foam insulation r value (+ r value chart, r value calculator, r value per inch)
- closed cell spray foam insulation r value / closed-cell spray foam r-value chart
- open cell spray foam r-value
- r-value of spray foam vs fiberglass
- spray foam insulation vs fiberglass insulation (comparison/blog anchor)

**Application-specific long-tail:**
- spray foam attic insulation / spray foam insulation for attics / spray foam insulation in the attic
- spray foam insulation for walls
- rim joist spray foam
- crawl space spray foam insulation
- garage spray foam insulation
- spray foam roofing / foam roof coating (adjacent service — highest CPC in the national batch, worth a dedicated page)

**DIY-vs-pro long-tail (positions the "hire a specialist" pitch):**
- diy spray foam insulation (kit)
- spray foam insulation diy kits / professional spray foam insulation kit
- best spray foam insulation kit
- spray foam insulation contractor / installers / company near me
- residential spray foam insulation near me

**Local/regional page-title variants (not measured volume, build anyway — see §2):**
- spray foam insulation St. George UT
- spray foam insulation Washington City UT
- spray foam insulation Hurricane UT
- closed cell spray foam St. George UT
- spray foam insulation Washington County UT
- spray foam insulation Cedar City UT (different framing — see §4)

---

## 4. People Also Ask (PAA) Questions — FAQ Content Bank

Pulled from 4 live SERP queries ("spray foam insulation cost" @ St. George location, "spray foam insulation attic heat," "open cell vs closed cell spray foam," "spray foam insulation safety" @ national). Deduplicated, **18 unique questions**, grouped by theme:

**Cost / value:**
1. How much does it cost to spray foam for 1000 square feet?
2. How much does it cost to spray foam a 20x20 garage?
3. How much does it cost to spray foam a 40x60 building?
4. How much does it cost to spray foam a 2000 sq ft home?
5. How much would it cost to spray foam insulate a 2000 sq ft attic? *(DataForSEO's expanded answer: "Insulating a 2,000 sq ft house typically costs $3,000–$8,000... attic-only insulation runs $2,500–$4,500...")*
6. Is spray foam insulation worth the money?
7. Is it cheaper to spray foam or install [batt/blown-in] insulation?
8. What is the cheapest but most effective insulation?

**Attic heat / cooling performance (directly supports the desert-heat framing — highest-priority content cluster for this site):**
9. Does spray foam help with heat in the attic? *(expanded answer: "By stopping both heat loss and moisture buildup, closed-cell spray foam creates a reliable, energy-efficient enclosure that helps keep your roof temperature stable...")* — reframe explicitly around **keeping heat OUT** and cutting AC runtime for a St. George summer, not the heat-loss framing the raw snippet defaults to.
10. What are the biggest problems with spray foam insulation in attics?
11. Is spray foaming your attic a good idea?

**Objection / "red flag" cluster (recurring nationally — real trust-building opportunity):**
12. Why are people removing spray foam insulation?
13. Why is it hard to sell a house with spray foam insulation?
14. Why is spray foam insulation now a red flag?
15. Why don't insurance companies like spray foam?
16. What is the downside of spray foam insulation?
17. Do mice chew through closed cell spray foam?
18. Can mold grow on open cell foam?

**Safety / installation logistics:**
19. Are there health risks with spray foam insulation?
20. Is it safe to be in the house during spray foam insulation?
21. How long to stay out of house after spray foam insulation?
22. How can I tell if I have open or closed cell spray foam?

**FAQ-build guidance:** Questions #12–17 (the "spray foam is a red flag / insurers don't like it / mice / mold" objection cluster) show up repeatedly across every SERP pulled, exactly like the cluster the `showlowsprayfoam.com` research documented for a cold-climate market — this is a nationally dominant consumer-anxiety pattern, not climate-specific. **This site needs a dedicated, myth-busting FAQ/blog section addressing it head-on** (proper installation avoids mold/rodent/resale issues; explain vapor permeability and correct venting practice; note that hot, dry Southern Utah summers are actually a *lower-moisture-risk* environment for spray foam than humid climates — a genuine desert-market talking point). Cost-by-project-size questions (#1–5) support a dedicated cost-estimator/cost-table page broken out by project type, echoing the national pattern in §1b. **Questions #9–11 are the single best-fit content cluster for this specific market** — build a flagship "does spray foam actually lower my AC bill in a St. George summer" page/blog post; no cold-climate competitor content can credibly compete on this angle.

---

## 5. Hot-Desert Climate Framing (verified — reused from `southernutahinsulation.com` sibling research, not re-derived)

- St. George / Washington County sits at **~2,860 ft elevation** on the northern edge of the Mojave Desert — **IECC Climate Zone 3B**, a genuine hot-desert climate. **NOT a cold/heating-dominated climate** — the opposite framing from a mountain-town site.
- Average July high **~102°F**, with **110°F+ days common** in peak summer; ~255 sunny days/yr; **~8 in/yr rainfall**; very low humidity outside a brief July–August monsoon burst; large day/night temperature swings.
- **Messaging implication:** every page, headline, and CTA should lead with **cooling-cost savings, attic-heat rejection, AC-runtime reduction, and monsoon-season moisture/dust resistance** — closed-cell foam's air-sealing properties and high R-value-per-inch are the natural sales hook here. **Do NOT use cold-climate/heat-retention/ice-dam language anywhere** — that framing is for a completely different region (e.g. the showlowsprayfoam.com/Show Low AZ sibling site, which sits at 6,400 ft in a genuine four-season climate).
- Cedar City (Iron County, ~30 min north of St. George, ~5,800 ft elevation) is meaningfully cooler with real winter cold — if included as a service-area city, its page should soften the pure-heat-rejection pitch to a dual "keeps heat out in summer AND in during winter" framing, unlike St. George/Hurricane/Washington City/Ivins/Santa Clara which can go all-in on cooling-cost messaging.
- Open-cell vs. closed-cell framing for this climate: closed-cell's higher R-value per inch and superior air-sealing (vs. moisture-barrier framing, which matters more in humid climates) is the legitimate technical hook for hot, dry Washington County — monsoon-season dust infiltration through poorly-sealed attics/walls is a real, locally-specific pain point worth its own content angle.

**Utility/rebate context (reused from sibling research — verify before publishing specific dollar claims):** St. George/Washington County splits across **three electric providers** (St. George City municipal power north of the Virgin River, Dixie Power cooperative south of the river and rural county, Rocky Mountain Power elsewhere/Cedar City-Iron County). Rocky Mountain Power's **Wattsmart Home insulation rebate** ($0.10/sq ft attic, $0.65/sq ft wall electric-heat, etc.) is the one concrete dollar-amount program found, but only applies to RMP customers — stronger fit for Cedar City pages than core St. George/Hurricane pages. Federal HOMES/HEEHR (Inflation Reduction Act) programs also cover insulation and are rolling out via Utah Clean Energy. Frame conservatively; confirm per-address utility before promising a rebate to a lead.

Sources (from sibling research, reused): [St. George Metro Area, UT Climate — BestPlaces](https://www.bestplaces.net/climate/metro/utah/st._george), [climate-data.org St. George](https://en.climate-data.org/north-america/united-states-of-america/utah/st-george-1442/t/july-7/), [Wattsmart Home Insulation UT](https://wattsmarthomes.com/rebates/insulation-ut/), [Dixie Power Rebates](https://www.dixiepower.com/services/rebates/), [Utah Energy Hub](https://hub.utahcleanenergy.org/energy-efficiency/energy-efficiency-incentives/).

---

## 6. Notes & Recommendations

- **Naming/positioning reminder:** every page should use "spray foam" / "open-cell" / "closed-cell" as the primary vocabulary, not generic "insulation." Where a page must reference general insulation types for comparison (e.g., "spray foam vs. fiberglass"), frame it from the foam specialist's point of view — do not position the site as offering blown-in/batt/general insulation services; that's `southernutahinsulation.com`'s lane.
- **KD data is essentially a green light** — nearly every foam-specific keyword scores KD 0–17 nationally; only the bare-root "spray foam insulation" (31) breaks meaningfully higher. A new, well-built specialist site can realistically compete for most of this list within a normal on-page + local SEO + GBP campaign timeline.
- **Biggest identified content gap/opportunity:** the "spray foam red flag / insurance / resale / mold / mice" objection cluster (PAA #12–17) is a recurring, high-frequency national anxiety pattern with no evidence local competitors address it directly — a well-written, technically credible FAQ/blog cluster here is a genuine trust-building differentiator, not filler.
- **Second-biggest opportunity, and the one truly unique to this market:** the attic-heat/cooling-bill PAA cluster (#9–11) combined with the desert-climate framing in §5 — a flagship page proving "spray foam cuts your AC bill in a 105°F St. George summer" (ideally with a simple before/after attic-temperature or utility-bill framing) is the strongest single differentiator against any cold-climate competitor content that might get scraped into this niche's SERPs.
- **Cost-calculator/estimator page** is the other clear opportunity — the "cost by project size/square footage" PAA and long-tail cluster (§1b, §4) is large and consistent across every SERP pulled.
- Utah state-level Google Ads volume was measurable for foam-specific terms (unlike some fragmented multi-metro states), but St. George/Washington County city-level combinations still return no measurable volume — expected for a market this size and treated as a zero-competition opportunity, not a data-quality problem, exactly as documented in the `southernutahinsulation.com` sibling research.

---

## Summary

This niche is exceptionally winnable on pure SEO difficulty — nearly every foam-specific keyword scores KD 0–17, with only the bare "spray foam insulation" root term (31) and a couple of comparison terms (14–17) reaching moderate territory, while CPCs run $2–26 (spray foam attic insulation hits $25.51 at the Utah state level). The site should be structured around: (1) foam-specific head-term hub pages (spray foam insulation, closed-cell spray foam, open-cell spray foam, spray foam attic insulation, spray foam roofing), (2) individual city pages for St. George, Washington City, Hurricane, Ivins, Santa Clara, and Cedar City — with Cedar City using a softened dual heat-in/heat-out framing unlike the others, (3) a cost/pricing hub answering the extensive "how much does spray foam cost" PAA cluster, and (4) a hot-desert-specific content layer leading with cooling-bill savings, attic-heat rejection, and monsoon-dust sealing — the functional opposite of a cold-climate/ice-dam site, and a clear differentiator from the `southernutahinsulation.com` general-contractor sibling and from any cold-climate spray foam competitor content.
