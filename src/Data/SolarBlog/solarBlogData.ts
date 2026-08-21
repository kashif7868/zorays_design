export type SolarBlogPost = {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  link: string;
};

export const solarBlogPageData = {
  eyebrow: "Latest Solar Energy Technology Research & News",

  title: "Solar Energy",

  highlightedTitle: "Insights & Updates",

  description:
    "Explore solar energy research, technology updates, market insights, project experiences, energy efficiency ideas, and sustainability content from Zorays Solar Pakistan.",
};

export const solarBlogPosts: SolarBlogPost[] = [
  {
    id: "air-conditioning-market",

    title:
      "Pakistan’s Cooling Market Is No Longer About Comfort; It Is About Survival, Bills, and Trust",

    category: "Energy Efficiency",

    date: "Latest Insight",

    excerpt:
      "Pakistan’s air conditioner market is changing quickly as electricity costs, energy efficiency, and consumer trust become increasingly important.",

    image:
      "https://images.unsplash.com/photo-1581276879432-15a67c9c4e9b?auto=format&fit=crop&w=1200&q=82",

    imageAlt:
      "Modern air conditioning unit installed inside a residential room",

    link: "/solar-blog/pakistan-cooling-market",
  },

  {
    id: "solar-home-design",

    title:
      "How Solar System Design Is Changing for Pakistani Homes",

    category: "Residential Solar",

    date: "Solar Guide",

    excerpt:
      "Modern residential solar design now needs to consider daytime consumption, backup loads, battery storage, inverter capacity, and future expansion.",

    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=82",

    imageAlt:
      "Solar panels installed on the roof of a residential building",

    link: "/solar-blog/home-solar-system-design",
  },

  {
    id: "net-metering-guide",

    title:
      "Net Metering in Pakistan: What Solar Consumers Should Understand",

    category: "Net Metering",

    date: "Solar Policy",

    excerpt:
      "A practical overview of grid-connected solar, import-export metering, documentation, technical requirements, and consumer planning.",

    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=82",

    imageAlt:
      "Large solar photovoltaic array generating electricity",

    link: "/solar-blog/net-metering-pakistan",
  },

  {
    id: "hybrid-backup",

    title:
      "Hybrid Solar Backup Is Becoming a Core Requirement for Reliable Power",

    category: "Hybrid Solar",

    date: "Energy Backup",

    excerpt:
      "Hybrid solar combines generation, battery storage, and grid support to keep essential electrical loads operational during power interruptions.",

    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=82",

    imageAlt:
      "Solar photovoltaic panels used in a hybrid energy system",

    link: "/solar-blog/hybrid-solar-backup",
  },

  {
    id: "lithium-battery",

    title:
      "Lithium Batteries Are Changing the Economics of Solar Backup",

    category: "Battery Storage",

    date: "Energy Storage",

    excerpt:
      "Lithium battery systems offer deeper usable capacity, faster charging, longer cycle life, and improved energy management compared with traditional backup solutions.",

    image:
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=1200&q=82",

    imageAlt:
      "Modern battery energy storage system for renewable energy",

    link: "/solar-blog/lithium-battery-solar-backup",
  },

  {
    id: "solar-agriculture",

    title:
      "Solar Tubewells Can Transform Agricultural Energy Costs",

    category: "Solar Agriculture",

    date: "Agriculture",

    excerpt:
      "Solar water pumping can reduce dependence on diesel and grid electricity while supporting irrigation and agricultural water management.",

    image:
      "https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?auto=format&fit=crop&w=1200&q=82",

    imageAlt:
      "Agricultural field supported by solar-powered irrigation",

    link: "/solar-blog/solar-tubewell-agriculture",
  },

  {
    id: "commercial-solar",

    title:
      "Why Commercial Solar Projects Need Better Load Profiling Before Installation",

    category: "Commercial Solar",

    date: "Engineering",

    excerpt:
      "Commercial solar performance depends heavily on load timing, sanctioned load, inverter configuration, protection systems, and operational patterns.",

    image:
      "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1200&q=82",

    imageAlt:
      "Commercial rooftop solar panel installation",

    link: "/solar-blog/commercial-solar-load-profiling",
  },

  {
    id: "solar-financing",

    title:
      "Solar Financing Can Reduce Upfront Cost, but Consumers Must Understand the Fine Print",

    category: "Solar Financing",

    date: "Finance",

    excerpt:
      "Markup, equity contribution, processing charges, insurance, collateral, and repayment tenure all affect the real cost of financed solar systems.",

    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=82",

    imageAlt:
      "Business professionals discussing financing and investment",

    link: "/solar-blog/solar-financing-pakistan",
  },

  {
    id: "industrial-solar",

    title:
      "Industrial Solar Needs Engineering Discipline, Not Just More Panels",

    category: "Industrial Solar",

    date: "Technical Insight",

    excerpt:
      "Industrial systems require careful protection coordination, cable sizing, earthing, inverter planning, monitoring, and operational integration.",

    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=82",

    imageAlt:
      "Industrial renewable energy and solar infrastructure",

    link: "/solar-blog/industrial-solar-engineering",
  },

  {
    id: "future-energy",

    title:
      "The Future of Solar Is Energy Management, Storage, and Smarter Consumption",

    category: "Future Energy",

    date: "Energy Technology",

    excerpt:
      "The next generation of solar systems will increasingly combine generation, battery storage, automation, monitoring, and intelligent load management.",

    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=82",

    imageAlt:
      "Renewable energy infrastructure representing the future of smart energy",

    link: "/solar-blog/future-of-solar-energy",
  },
];