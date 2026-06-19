import type { CartProduct } from "../../app/features/cart/cartSlice";

export type ProductSpecification = {
  label: string;
  value: string;
};

export type ZoraysShopProduct = CartProduct & {
  category: string;
  brand: string;
  model?: string;
  sku?: string;
  featured?: boolean;
  stockStatus: string;
  warranty: string;
  productOverview: string;
  keyFeatures: string[];
  specifications: ProductSpecification[];
  bestFor: string[];
  relatedProductIds: number[];
};

export const zoraysShopProductsData: ZoraysShopProduct[] = [
  {
    id: 1,
    title: "Canadian Solar 620W N-Type Bifacial Panel",
    desc: "High-efficiency N-Type bifacial solar panel for residential and commercial solar systems.",
    price: "Rs. 29,915",
    oldPrice: "Rs. 31,500",
    priceAmount: 29915,
    oldPriceAmount: 31500,
    tag: "Solar Panel",
    category: "Solar Panel",
    brand: "Canadian",
    model: "620W N-Type Bifacial",
    sku: "ZS-CAN-620-NTYPE",
    rating: "4.9",
    featured: true,
    stockStatus: "Available for Inquiry",
    warranty: "Brand warranty as per official policy",
    productOverview:
      "Canadian Solar 620W N-Type bifacial panel is suitable for reliable solar generation in residential, commercial, and net-metering projects. It is selected for strong output, better low-light response, and long-term system performance.",
    keyFeatures: [
      "N-Type high-efficiency solar module",
      "Bifacial power generation support",
      "Suitable for net-metering systems",
      "Reliable performance for rooftop and commercial projects",
    ],
    specifications: [
      { label: "Panel Capacity", value: "620W" },
      { label: "Technology", value: "N-Type Bifacial" },
      { label: "Application", value: "Residential / Commercial" },
      { label: "System Type", value: "On-grid / Hybrid Compatible" },
    ],
    bestFor: [
      "Residential solar systems",
      "Commercial rooftop systems",
      "Net-metering projects",
    ],
    relatedProductIds: [2, 3, 8, 9],
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Jinko 725W N-Type Solar Panel",
    desc: "Premium high-wattage N-Type module for large residential, commercial, and industrial systems.",
    price: "Rs. 37,156",
    oldPrice: "Rs. 39,500",
    priceAmount: 37156,
    oldPriceAmount: 39500,
    tag: "Solar Panel",
    category: "Solar Panel",
    brand: "Jinko",
    model: "725W N-Type",
    sku: "ZS-JIN-725-NTYPE",
    rating: "4.9",
    featured: true,
    stockStatus: "Available for Inquiry",
    warranty: "Brand warranty as per official policy",
    productOverview:
      "Jinko 725W N-Type solar panel is designed for high-output solar installations where maximum generation per panel is required. It is suitable for large rooftops, commercial sites, and industrial solar projects.",
    keyFeatures: [
      "High-wattage 725W solar module",
      "N-Type cell technology",
      "Good option for large-capacity systems",
      "Designed for high energy yield",
    ],
    specifications: [
      { label: "Panel Capacity", value: "725W" },
      { label: "Technology", value: "N-Type" },
      { label: "Application", value: "Commercial / Industrial" },
      { label: "System Type", value: "On-grid / Hybrid Compatible" },
    ],
    bestFor: [
      "Commercial solar projects",
      "Industrial rooftop systems",
      "Large residential installations",
    ],
    relatedProductIds: [1, 4, 8, 9],
    image:
      "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Solis 6kW Hybrid Inverter",
    desc: "Smart hybrid inverter for solar charging, battery backup, and load management.",
    price: "Rs. 265,000",
    oldPrice: "Rs. 285,000",
    priceAmount: 265000,
    oldPriceAmount: 285000,
    tag: "Hybrid Inverter",
    category: "Hybrid Inverter",
    brand: "Solis",
    model: "6kW Hybrid",
    sku: "ZS-SOLIS-6KW-HYB",
    rating: "4.8",
    featured: true,
    stockStatus: "Available for Inquiry",
    warranty: "Brand warranty as per official policy",
    productOverview:
      "Solis 6kW Hybrid Inverter is suitable for solar systems where backup support and battery integration are required. It helps manage solar generation, battery charging, and household load more efficiently.",
    keyFeatures: [
      "Hybrid solar inverter",
      "Battery backup support",
      "Smart solar charging",
      "Suitable for residential backup systems",
    ],
    specifications: [
      { label: "Inverter Capacity", value: "6kW" },
      { label: "Type", value: "Hybrid Inverter" },
      { label: "Use Case", value: "Solar + Battery Backup" },
      { label: "Application", value: "Residential" },
    ],
    bestFor: [
      "Home solar backup",
      "Hybrid solar systems",
      "Battery-based solar installations",
    ],
    relatedProductIds: [5, 6, 1, 8],
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "GoodWe 8kW Hybrid Inverter",
    desc: "Premium hybrid inverter for efficient backup and advanced solar applications.",
    price: "Rs. 360,000",
    oldPrice: "Rs. 385,000",
    priceAmount: 360000,
    oldPriceAmount: 385000,
    tag: "Hybrid Inverter",
    category: "Hybrid Inverter",
    brand: "GoodWe",
    model: "8kW Hybrid",
    sku: "ZS-GOODWE-8KW-HYB",
    rating: "4.8",
    featured: false,
    stockStatus: "Available for Inquiry",
    warranty: "Brand warranty as per official policy",
    productOverview:
      "GoodWe 8kW Hybrid Inverter is a premium option for customers who need higher backup capacity, efficient solar charging, and reliable inverter performance for larger loads.",
    keyFeatures: [
      "8kW hybrid inverter capacity",
      "Battery integration support",
      "Efficient solar power conversion",
      "Suitable for higher residential and light commercial loads",
    ],
    specifications: [
      { label: "Inverter Capacity", value: "8kW" },
      { label: "Type", value: "Hybrid Inverter" },
      { label: "Use Case", value: "Solar + Battery Backup" },
      { label: "Application", value: "Residential / Light Commercial" },
    ],
    bestFor: [
      "Large home backup systems",
      "Premium hybrid solar systems",
      "Light commercial solar backup",
    ],
    relatedProductIds: [3, 5, 6, 2],
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "SES 314Ah Lithium Battery",
    desc: "Long-life LiFePO₄ battery for stable backup and solar energy storage.",
    price: "Rs. 475,000",
    oldPrice: "Rs. 505,000",
    priceAmount: 475000,
    oldPriceAmount: 505000,
    tag: "Lithium Battery",
    category: "Lithium Battery",
    brand: "SES",
    model: "314Ah LiFePO₄",
    sku: "ZS-SES-314AH-LFP",
    rating: "4.9",
    featured: true,
    stockStatus: "Available for Inquiry",
    warranty: "Brand warranty as per official policy",
    productOverview:
      "SES 314Ah Lithium Battery is designed for stable backup and long-cycle solar energy storage. It is suitable for hybrid solar systems where reliable night-time or outage backup is required.",
    keyFeatures: [
      "LiFePO₄ lithium battery chemistry",
      "High storage capacity",
      "Long cycle life",
      "Suitable for hybrid solar backup",
    ],
    specifications: [
      { label: "Battery Type", value: "LiFePO₄ Lithium" },
      { label: "Capacity", value: "314Ah" },
      { label: "Application", value: "Solar Backup / Energy Storage" },
      { label: "Compatibility", value: "Hybrid Inverter Systems" },
    ],
    bestFor: [
      "Solar backup systems",
      "Night-time power support",
      "Hybrid inverter installations",
    ],
    relatedProductIds: [6, 3, 4, 8],
    image:
      "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "KNOX Powerbase 16.0 Lithium Battery",
    desc: "High-capacity 51.2V lithium storage solution for solar backup and hybrid systems.",
    price: "Rs. 598,000",
    oldPrice: "Rs. 635,000",
    priceAmount: 598000,
    oldPriceAmount: 635000,
    tag: "Lithium Battery",
    category: "Lithium Battery",
    brand: "KNOX",
    model: "Powerbase 16.0",
    sku: "ZS-KNOX-PB-16",
    rating: "4.8",
    featured: false,
    stockStatus: "Available for Inquiry",
    warranty: "Brand warranty as per official policy",
    productOverview:
      "KNOX Powerbase 16.0 is a high-capacity lithium battery solution for hybrid solar systems. It is suitable for customers needing stronger backup capacity and stable energy storage.",
    keyFeatures: [
      "51.2V lithium battery platform",
      "High-capacity solar storage",
      "Suitable for residential and light commercial backup",
      "Designed for hybrid inverter systems",
    ],
    specifications: [
      { label: "Battery Type", value: "Lithium / LiFePO₄" },
      { label: "Nominal Voltage", value: "51.2V" },
      { label: "Model", value: "Powerbase 16.0" },
      { label: "Application", value: "Solar Energy Storage" },
    ],
    bestFor: [
      "Hybrid solar systems",
      "High backup requirement",
      "Residential and light commercial storage",
    ],
    relatedProductIds: [5, 3, 4, 8],
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "DC Protection Box",
    desc: "Solar protection accessories including breakers, fuses, SPD, and isolators.",
    price: "Rs. 5,000",
    oldPrice: "Rs. 6,500",
    priceAmount: 5000,
    oldPriceAmount: 6500,
    tag: "Protection",
    category: "Protection",
    brand: "Zorays",
    model: "DC Protection Box",
    sku: "ZS-DC-PROTECTION",
    rating: "4.7",
    featured: false,
    stockStatus: "Available for Inquiry",
    warranty: "Warranty as per item condition and brand policy",
    productOverview:
      "DC Protection Box helps improve safety in solar DC wiring by supporting protection components such as breakers, SPD, fuses, and isolators. It is recommended for safer solar installation planning.",
    keyFeatures: [
      "Solar DC protection support",
      "Breaker and SPD installation support",
      "Improves wiring safety",
      "Suitable for rooftop solar systems",
    ],
    specifications: [
      { label: "Product Type", value: "Protection Box" },
      { label: "Use Side", value: "DC Side" },
      { label: "Application", value: "Solar Protection" },
      { label: "Recommended For", value: "Panels / Strings / Inverter DC Input" },
    ],
    bestFor: [
      "Solar DC protection",
      "Safe rooftop wiring",
      "System safety improvement",
    ],
    relatedProductIds: [8, 9, 1, 2],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Solar DC Cable 6mm",
    desc: "Durable solar cable for safe DC wiring and reliable rooftop installations.",
    price: "Rs. 180 / meter",
    oldPrice: "Rs. 220 / meter",
    priceAmount: 180,
    oldPriceAmount: 220,
    tag: "Cable",
    category: "Cable",
    brand: "Zorays",
    model: "6mm Solar DC Cable",
    sku: "ZS-DC-CABLE-6MM",
    rating: "4.6",
    featured: false,
    stockStatus: "Available for Inquiry",
    warranty: "Warranty as per item condition and brand policy",
    productOverview:
      "Solar DC Cable 6mm is used for safe DC wiring between solar panels, strings, protection boxes, and inverters. Proper cable selection is important for voltage drop control and installation safety.",
    keyFeatures: [
      "6mm solar DC cable",
      "Suitable for rooftop solar wiring",
      "Used between panels and inverter DC side",
      "Supports safe solar installation practice",
    ],
    specifications: [
      { label: "Cable Size", value: "6mm" },
      { label: "Cable Type", value: "Solar DC Cable" },
      { label: "Application", value: "Solar DC Wiring" },
      { label: "Selling Unit", value: "Per meter" },
    ],
    bestFor: [
      "Solar panel wiring",
      "DC string connection",
      "Residential and commercial solar installations",
    ],
    relatedProductIds: [7, 9, 1, 2],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "MC4 Connector Set",
    desc: "Reliable solar connector set for safe module-to-module and string connections.",
    price: "Rs. 550",
    oldPrice: "Rs. 700",
    priceAmount: 550,
    oldPriceAmount: 700,
    tag: "Accessories",
    category: "Accessories",
    brand: "Zorays",
    model: "MC4 Connector Set",
    sku: "ZS-MC4-CONNECTOR",
    rating: "4.7",
    featured: false,
    stockStatus: "Available for Inquiry",
    warranty: "Warranty as per item condition and brand policy",
    productOverview:
      "MC4 Connector Set is used for reliable solar panel connections and DC string wiring. It is a basic but important accessory for safe module-to-module connectivity.",
    keyFeatures: [
      "Solar MC4 connector pair",
      "Suitable for solar DC wiring",
      "Used for panel and string connections",
      "Supports clean and safe installation",
    ],
    specifications: [
      { label: "Product Type", value: "MC4 Connector Set" },
      { label: "Application", value: "Solar DC Connection" },
      { label: "Use Case", value: "Panel / String Wiring" },
      { label: "Category", value: "Solar Accessory" },
    ],
    bestFor: [
      "Solar panel connections",
      "String wiring",
      "Solar installation accessories",
    ],
    relatedProductIds: [8, 7, 1, 2],
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=900&auto=format&fit=crop",
  },
];