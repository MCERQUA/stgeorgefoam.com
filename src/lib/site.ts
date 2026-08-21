export const SITE = {
  name: "St. George Foam",
  shortName: "St. George Foam",
  legalName: "St. George Foam",
  domain: "stgeorgefoam.com",
  url: "https://stgeorgefoam.com",
  phone: "844-967-5247",
  phoneHref: "tel:+18449675247",
  email: "josh@contractorschoiceagency.com",
  city: "St. George",
  region: "UT",
  regionName: "Utah",
  tagline: "Washington County's full-service spray foam insulation company — residential, commercial, new builds, and fixing the jobs other crews got wrong.",
  description:
    "St. George Foam installs open-cell and closed-cell spray foam insulation across Washington County, Utah — attics, roof decks, exterior walls, crawl spaces, garages, shops, and commercial/metal buildings — plus spray foam removal and correction for failed prior jobs. Built for a genuine hot-desert climate at 2,860 feet, IECC Zone 3B, serving St. George, Washington City, Hurricane, Santa Clara, and Ivins.",
  geo: { lat: 37.0965, lng: -113.5684 },
  elevation: "2,860 feet",
  climateZone: "IECC Climate Zone 3B",
};

export type NavItem = { label: string; href: string };

export const MAIN_NAV: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Commercial", href: "/services/commercial-metal-building-spray-foam" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { value: "R-6-7/in", label: "Closed-cell R-value per inch" },
  { value: "104-106°F", label: "Typical St. George July high" },
  { value: "Res. + Comm.", label: "Homes, shops, and metal buildings" },
  { value: "Full-Service", label: "New installs and failed-job correction" },
];

export type ServiceArea = {
  name: string;
  slug: string;
  distance: string;
  blurb: string;
};

export const SERVICE_AREAS: ServiceArea[] = [
  {
    name: "St. George",
    slug: "st-george",
    distance: "Home base",
    blurb:
      "Our home base in Washington County — hot-desert IECC Zone 3B at roughly 2,860 feet, where attic heat gain and cooling bills drive most of the calls we get. We work St. George neighborhoods block by block, from Bloomington and Dixie Downs to Desert Color and Washington Fields, on everything from single attics to full commercial shells.",
  },
  {
    name: "Washington City",
    slug: "washington-city",
    distance: "~7 miles",
    blurb:
      "New master-planned subdivisions going up fast along the St. George corridor, plus older homes built before spray foam was standard practice — both need the same attention to roof-deck sealing in a real Washington County summer.",
  },
  {
    name: "Hurricane",
    slug: "hurricane",
    distance: "~18 miles",
    blurb:
      "The gateway to Zion National Park and Sand Hollow, with a mix of established homes, new construction, and light commercial/shop buildings that all fight the same radiant desert heat gain through an uninsulated roof deck.",
  },
  {
    name: "Santa Clara",
    slug: "santa-clara",
    distance: "~8 miles",
    blurb:
      "Established and newer homes along the Santa Clara River corridor, many with west-facing exposure that takes the brunt of the afternoon desert sun straight through the attic.",
  },
  {
    name: "Ivins",
    slug: "ivins",
    distance: "~12 miles",
    blurb:
      "Red Mountain and Kayenta-area homes where high-end construction still loses the fight against attic heat gain without a correctly sealed and insulated roof deck.",
  },
];

export const SECONDARY_AREAS = ["LaVerkin", "Toquerville"];
