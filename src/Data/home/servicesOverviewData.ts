export type ServiceOverviewItem = {
  id: number;
  image: string;
  title: string;
  text: string;
  icon: string;
  link: string;
  badge?: string;
};

export const servicesOverviewData: ServiceOverviewItem[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85",
    title: "Solar Net Metering",
    text: "Lower your electricity bills by generating and exporting clean solar energy.",
    icon: "☀️",
    link: "/solar-net-metering",
    badge: "Popular",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=900&q=85",
    title: "Solar Backup",
    text: "Reliable hybrid solar and battery backup for homes and businesses.",
    icon: "🔋",
    link: "/solar-backup",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=85",
    title: "Solar Tubewell",
    text: "Efficient solar-powered water pumping for farms and agriculture.",
    icon: "🚰",
    link: "/solar-tubewell",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1584276433295-4b49a252e5ee?auto=format&fit=crop&w=900&q=85",
    title: "Commercial Solar",
    text: "Scalable solar solutions for offices, factories and commercial facilities.",
    icon: "🏢",
    link: "/commercial-solar",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&w=900&q=85",
    title: "Solar Shop",
    text: "Explore selected solar panels, inverters, batteries and accessories.",
    icon: "🛒",
    link: "/solar-shop",
  },
];