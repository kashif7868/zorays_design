export type AgricultureFormField = {
  id: string;
  label: string;
  name: string;
  type: "text" | "email" | "tel";
  required?: boolean;
  placeholder?: string;
};

export type AgricultureArticle = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  link: string;
};

export const solarAgricultureOverviewData = {
  eyebrow: "Solar Agricultural Solutions",

  title: "Powering Agriculture with",

  highlightedTitle: "Reliable Solar Energy",

  description:
    "Zorays Solar provides solar solutions for agricultural irrigation, landscape irrigation, water pumping, and other energy-intensive farming applications across Pakistan.",

  secondaryText:
    "Solar-powered tubewells can help reduce dependence on grid electricity and diesel while providing a cleaner and more predictable energy source for agricultural operations.",

  primaryButton: "Get Tubewell Assessment",

  steps: [
    {
      id: "1",
      title: "Project Details",
    },
    {
      id: "2",
      title: "Purpose Definition",
    },
    {
      id: "3",
      title: "Product Selection",
    },
  ],
};

export const solarAgricultureFormFields: AgricultureFormField[] = [
  {
    id: "name",
    label: "Name",
    name: "name",
    type: "text",
    required: true,
    placeholder: "Enter your full name",
  },

  {
    id: "email",
    label: "E-mail",
    name: "email",
    type: "email",
    placeholder: "Enter your email address",
  },

  {
    id: "cell",
    label: "Cell Number",
    name: "cellNumber",
    type: "tel",
    required: true,
    placeholder: "Enter your mobile number",
  },

  {
    id: "telephone",
    label: "Telephone",
    name: "telephone",
    type: "tel",
    placeholder: "Optional telephone number",
  },

  {
    id: "address",
    label: "Installation Address",
    name: "address",
    type: "text",
    required: true,
    placeholder: "Enter installation address",
  },

  {
    id: "city",
    label: "City",
    name: "city",
    type: "text",
    required: true,
    placeholder: "Enter city",
  },
];

export const solarAgricultureVideoData = {
  eyebrow: "On-Farm Water Management",

  title: "Solar Tubewell",

  highlightedTitle: "Project Experience",

  description:
    "See how solar pumping systems are being applied to agricultural water management and irrigation projects.",

  youtubeUrl:
    "https://www.youtube.com/embed/2slU5fzB4hE",

  youtubeTitle:
    "Solar agricultural water pumping and on-farm water management",
};

export const solarAgricultureArticlesData = {
  eyebrow: "Related Insights",

  title: "Agriculture, Energy &",

  highlightedTitle: "Sustainability",

  description:
    "Explore selected content around renewable energy, agricultural applications, environmental challenges, and related projects.",
};

export const solarAgricultureArticles: AgricultureArticle[] = [
  {
    id: "biogas",
    title:
      "Biogas & Solar Thermal Energy in Pakistan: Turning Waste into Wealth",
    date: "December 23, 2025",
    excerpt:
      "A practical look at renewable energy applications involving biogas, solar thermal systems, and agricultural energy opportunities.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
    link: "/solar-blog",
  },

  {
    id: "water-management",
    title:
      "Solar Water Pumping for Agricultural Irrigation",
    date: "Solar Agriculture",
    excerpt:
      "How solar-powered water pumping can support irrigation requirements while reducing dependence on conventional energy sources.",
    image:
      "https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?auto=format&fit=crop&w=900&q=80",
    link: "/solar-blog",
  },

  {
    id: "smog",
    title:
      "Smog, Energy and Sustainable Development in Pakistan",
    date: "Environmental Insight",
    excerpt:
      "Understanding how cleaner energy systems can support broader environmental and sustainability objectives.",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=900&q=80",
    link: "/solar-blog",
  },
];