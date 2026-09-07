export type ShopHeroTrustItem = {
  id: string;
  label: string;
};

export type ShopHeroStat = {
  id: string;
  value: string;
  label: string;
};

export const shopHeroData = {
  eyebrow: "Pakistan Solar Trade Hub",

  title: "Source Solar Equipment.",

  highlightedTitle: "Compare. Buy. Build Better.",

  description:
    "Explore solar panels, hybrid inverters, lithium batteries, mounting systems, cables, protection equipment, and complete solar solutions for residential, commercial, industrial, and agricultural projects.",

  primaryButton: "Explore Products",

  secondaryButton: "Request a Quote",

  featuredCategory: {
    label: "Featured Category",
    title: "High-Efficiency Solar Panels",
    description:
      "Compare modern N-Type, TOPCon, bifacial, and high-wattage photovoltaic modules from leading solar brands.",
    priceLabel: "Market listings from",
    price: "Live Pricing",
  },

  batteryCard: {
    title: "Lithium Batteries",
    subtitle: "Energy storage solutions",
  },

  inverterCard: {
    title: "Hybrid Inverters",
    subtitle: "Solar + battery integration",
  },
};

export const shopHeroTrustItems: ShopHeroTrustItem[] = [
  {
    id: "verified",
    label: "Verified Solar Products",
  },
  {
    id: "engineering",
    label: "Engineering Support",
  },
  {
    id: "nationwide",
    label: "Nationwide Sourcing",
  },
];

export const shopHeroStats: ShopHeroStat[] = [
  {
    id: "categories",
    value: "6+",
    label: "Product Categories",
  },
  {
    id: "brands",
    value: "20+",
    label: "Solar Brands",
  },
  {
    id: "projects",
    value: "500+",
    label: "Project Experience",
  },
  {
    id: "coverage",
    value: "PK",
    label: "Nationwide Supply",
  },
];