import type { LucideIcon } from "lucide-react";

import {
  BatteryCharging,
  CheckCircle2,
  MessageCircle,
  PhoneCall,
  ShoppingCart,
  Zap,
} from "lucide-react";

export type ShopCtaHighlight = {
  id: string;
  text: string;
};

export type ShopContactItem = {
  id: string;
  title: string;
  text: string;
  icon: LucideIcon;
};

export type ShopMiniProduct = {
  id: string;
  label: string;
  icon: LucideIcon;
};

export const shopCtaData = {
  eyebrow: "Need Help Choosing?",

  title: "Get the Right Solar Equipment",

  highlightedTitle: "Before You Buy",

  description:
    "Not sure which panel, inverter, battery, cable, protection item, or accessory fits your project? Share your requirement and Zorays can help review the product combination before final confirmation.",

  primaryButton: "View Cart",

  secondaryButton: "Request Quote",

  sideEyebrow: "Order Support",

  sideTitle: "Send Product Requirement",

  sideDescription:
    "Add products to cart, review quantities, and proceed to checkout for final product availability, pricing, and order confirmation.",
};

export const shopCtaHighlights: ShopCtaHighlight[] = [
  {
    id: "availability",
    text: "Product availability confirmation",
  },
  {
    id: "compatibility",
    text: "Solar system compatibility guidance",
  },
  {
    id: "delivery",
    text: "Delivery and installation discussion",
  },
];

export const shopContactItems: ShopContactItem[] = [
  {
    id: "sales",
    title: "Sales Support",
    text: "Discuss your requirement with the Zorays team",
    icon: PhoneCall,
  },
  {
    id: "inquiry",
    title: "Product Inquiry",
    text: "Confirm equipment availability and current pricing",
    icon: MessageCircle,
  },
];

export const shopMiniProducts: ShopMiniProduct[] = [
  {
    id: "inverters",
    label: "Inverters",
    icon: Zap,
  },
  {
    id: "batteries",
    label: "Batteries",
    icon: BatteryCharging,
  },
  {
    id: "cart",
    label: "Cart Ready",
    icon: ShoppingCart,
  },
];

export const ShopCtaCheckIcon = CheckCircle2;