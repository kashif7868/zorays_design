import type { LucideIcon } from "lucide-react";

import {
  BadgeCheck,
  ClipboardCheck,
  Headphones,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

export type ShopTrustCard = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ShopProcessStep = {
  id: string;
  count: string;
  title: string;
  description: string;
};

export type ShopMiniFeature = {
  id: string;
  label: string;
  icon: LucideIcon;
};

export const shopWhyZoraysData = {
  eyebrow: "Why Buy Through Zorays",

  title: "Solar Products With",

  highlightedTitle: "Technical Confidence",

  description:
    "The Solar Trade Hub combines product sourcing with practical engineering support so customers can select equipment that fits their system requirements.",

  processEyebrow: "Simple Buying Flow",

  processTitle:
    "From Product Selection to Technical Confirmation",

  processDescription:
    "Shortlist solar equipment online, review quantities, and submit your selection. Our team can then confirm availability, compatibility, delivery, and project requirements.",
};

export const shopTrustCards: ShopTrustCard[] = [
  {
    id: "verified-products",
    title: "Verified Product Selection",
    description:
      "Solar equipment is selected for practical use, compatibility, reliability, and project suitability.",
    icon: BadgeCheck,
  },

  {
    id: "engineering-support",
    title: "Engineering Support",
    description:
      "Get guidance on panels, inverter sizing, batteries, cables, protection equipment, and system integration.",
    icon: Wrench,
  },

  {
    id: "safe-planning",
    title: "System Compatibility",
    description:
      "Product selection can be reviewed for electrical compatibility, protection requirements, and installation planning.",
    icon: ShieldCheck,
  },

  {
    id: "sales-support",
    title: "Sales Assistance",
    description:
      "Confirm product details, availability, quantities, quotations, and delivery requirements before finalizing an order.",
    icon: Headphones,
  },
];

export const shopProcessSteps: ShopProcessStep[] = [
  {
    id: "select",
    count: "01",
    title: "Browse Products",
    description:
      "Explore panels, inverters, batteries, cables, protection equipment, and accessories.",
  },

  {
    id: "cart",
    count: "02",
    title: "Build Your Cart",
    description:
      "Select products and quantities according to your project requirement.",
  },

  {
    id: "checkout",
    count: "03",
    title: "Submit Requirement",
    description:
      "Proceed to checkout and send the selected equipment requirement for confirmation.",
  },

  {
    id: "confirmation",
    count: "04",
    title: "Technical Confirmation",
    description:
      "Zorays confirms availability, product fit, delivery details, and any required technical guidance.",
  },
];

export const shopMiniFeatures: ShopMiniFeature[] = [
  {
    id: "review",
    label: "Requirement Review",
    icon: ClipboardCheck,
  },

  {
    id: "delivery",
    label: "Delivery Confirmation",
    icon: Truck,
  },

  {
    id: "support",
    label: "Engineering Support",
    icon: ShieldCheck,
  },
];