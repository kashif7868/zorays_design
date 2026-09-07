import type { LucideIcon } from "lucide-react";

import {
  BatteryCharging,
  Boxes,
  Cable,
  Grid3X3,
  ShieldCheck,
  SolarPanel,
  Zap,
} from "lucide-react";

export type ShopCategory = {
  id: string;
  label: string;
  value: string;
  icon: LucideIcon;
};

export const shopCategories: ShopCategory[] = [
  {
    id: "all",
    label: "All Products",
    value: "All",
    icon: Grid3X3,
  },
  {
    id: "solar-panels",
    label: "Solar Panels",
    value: "Solar Panel",
    icon: SolarPanel,
  },
  {
    id: "hybrid-inverters",
    label: "Hybrid Inverters",
    value: "Hybrid Inverter",
    icon: Zap,
  },
  {
    id: "lithium-batteries",
    label: "Lithium Batteries",
    value: "Lithium Battery",
    icon: BatteryCharging,
  },
  {
    id: "protection",
    label: "Protection",
    value: "Protection",
    icon: ShieldCheck,
  },
  {
    id: "cables",
    label: "Cables",
    value: "Cable",
    icon: Cable,
  },
  {
    id: "accessories",
    label: "Accessories",
    value: "Accessories",
    icon: Boxes,
  },
];

export const shopSortOptions = [
  {
    value: "featured",
    label: "Featured",
  },
  {
    value: "price-low",
    label: "Price: Low to High",
  },
  {
    value: "price-high",
    label: "Price: High to Low",
  },
  {
    value: "rating",
    label: "Highest Rated",
  },
];