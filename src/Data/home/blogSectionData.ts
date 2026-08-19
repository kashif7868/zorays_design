export type BlogPostItem = {
  id: number;
  title: string;
  category: string;
  meta: string;
  image: string;
  excerpt: string;
  link: string;
};

export const blogSectionData: BlogPostItem[] = [
  {
    id: 1,
    title: "Net Metering in Pakistan: What Homeowners Should Know",
    category: "Net Metering",
    meta: "Solar Guide",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
    excerpt:
      "Understand how net metering works, what documents are required, and how it helps reduce electricity bills.",
    link: "/blog/net-metering-pakistan",
  },
  {
    id: 2,
    title: "Hybrid Solar Backup: A Smarter Way to Handle Loadshedding",
    category: "Hybrid Backup",
    meta: "Energy Backup",
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=900&q=80",
    excerpt:
      "Hybrid solar systems combine panels, inverters, and batteries to keep essential loads running during outages.",
    link: "/blog/hybrid-solar-backup",
  },
  {
    id: 3,
    title: "How to Choose the Right Solar System Size for Your Home",
    category: "Solar Planning",
    meta: "Residential Solar",
    image:
      "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=900&q=80",
    excerpt:
      "A practical guide to selecting system size based on your load, roof space, sanctioned load, and future usage.",
    link: "/blog/solar-system-size",
  },
];