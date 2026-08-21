export type ClientCity = {
  id: string;
  city: string;
  image: string;
  projectImage: string;
};

export type ClientRecord = {
  id: string;
  year: string;
  date: string;
  clientName: string;
  licenseTitle: string;
};

export const solarClienteleData = {
  eyebrow: "Solar Clientele",

  title: "Trusted Solar Projects",

  highlightedTitle: "Across Pakistan",

  description:
    "A selection of solar installations, project references, and client records representing Zorays Solar's work across multiple cities in Pakistan.",

  note:
    "Client and project references are presented for portfolio purposes. Sensitive customer information should remain limited to approved public details.",

  primaryButton: "Discuss Your Solar Project",

  secondaryButton: "Get Free Solar Quote",
};

export const solarClientCities: ClientCity[] = [
  {
    id: "lahore",
    city: "Lahore",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=700&q=80",
    projectImage:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=700&q=80",
  },

  {
    id: "islamabad",
    city: "Islamabad",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=700&q=80",
    projectImage:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=700&q=80",
  },

  {
    id: "peshawar",
    city: "Peshawar",
    image:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=700&q=80",
    projectImage:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=700&q=80",
  },

  {
    id: "multan",
    city: "Multan",
    image:
      "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?auto=format&fit=crop&w=700&q=80",
    projectImage:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=700&q=80",
  },

  {
    id: "quetta",
    city: "Quetta",
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=700&q=80",
    projectImage:
      "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=700&q=80",
  },

  {
    id: "karachi",
    city: "Karachi",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=700&q=80",
    projectImage:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=700&q=80",
  },
];

export const solarClientRecords: ClientRecord[] = [
  {
    id: "client-1",
    year: "2021",
    date: "03/2021",
    clientName: "Residential Solar Client",
    licenseTitle: "Generation License / Net Metering Application",
  },

  {
    id: "client-2",
    year: "2021",
    date: "07/2021",
    clientName: "Commercial Solar Client",
    licenseTitle: "Generation License / Net Metering Application",
  },

  {
    id: "client-3",
    year: "2022",
    date: "03/2022",
    clientName: "Industrial Solar Client",
    licenseTitle: "Generation License / Net Metering Application",
  },
];