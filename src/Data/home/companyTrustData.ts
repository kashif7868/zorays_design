export type CompanyReviewData = {
  businessName: string;
  address: string;
  rating: number;
  reviewCount: number;
  reviewerName: string;
  reviewerImage: string;
  reviewAge: string;
  reviewText: string;
  reviewerRating: number;
};

export type ComplianceData = {
  secp: string;
  pec: string;
  countryCode: string;
  registrationLabel: string;
  description: string;
};

export type AnalyticsData = {
  propertyId: string;
  status: string;
  paymentPartner: string;
  paymentPhone: string;
  installmentLabel: string;
};

export type ContactItem = {
  id: string;
  icon: "phone" | "whatsapp" | "general" | "trade" | "service";
  title: string;
  text: string;
};

export type TrustStripItem = {
  id: string;
  icon: "shield" | "star" | "users" | "settings";
  text: string;
};


/* ============================================================
   GOOGLE REVIEWS
   ============================================================ */

export const companyReviewData: CompanyReviewData = {
  businessName: "Zorays Solar Pakistan",
  address: "44 T, Lahore",
  rating: 4.8,
  reviewCount: 67,

  reviewerName: "Muhammad Aqeel A",

  reviewerImage:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",

  reviewAge: "a year ago",

  reviewText:
    "Professional team, smooth process, and reliable solar solutions.",

  reviewerRating: 5,
};


/* ============================================================
   COMPLIANCE
   ============================================================ */

export const companyComplianceData: ComplianceData = {
  secp: "SECP INC 0090517",
  pec: "PEC 15212 C4/E",

  countryCode: "PK",

  registrationLabel: "Registered",

  description:
    "Registered and professionally aligned for trusted project delivery.",
};


/* ============================================================
   ANALYTICS / PAYMENT
   ============================================================ */

export const companyAnalyticsData: AnalyticsData = {
  propertyId: "289319621",

  status: "Loading live stats...",

  paymentPartner: "easypaisa",

  paymentPhone: "03248163264",

  installmentLabel: "Solar System on Installments",
};


/* ============================================================
   CONTACTS
   ============================================================ */

export const companyContactData: ContactItem[] = [
  {
    id: "phone",
    icon: "phone",
    title: "Phone",
    text: "0423 2030405 & 0423 2020320",
  },

  {
    id: "mega-watt",
    icon: "whatsapp",
    title: "Order Queries in Excess of 1 Mega Watt",
    text: "WA: 0300 8163264",
  },

  {
    id: "general",
    icon: "general",
    title: "General Enquiries",
    text: "Mob & WA: 0324 8163264 & 0332 8163264",
  },

  {
    id: "trade",
    icon: "trade",
    title: "Trade Enquiries",
    text: "Mob: 03111163264",
  },

  {
    id: "after-sales",
    icon: "service",
    title: "After-Sales Service",
    text: "Customers only with reference number | Mob & WA: 0320 8163264",
  },
];


/* ============================================================
   BOTTOM TRUST STRIP
   ============================================================ */

export const companyTrustStripData: TrustStripItem[] = [
  {
    id: "trusted-partner",
    icon: "shield",
    text: "Pakistan's Trusted Solar Energy Partner",
  },

  {
    id: "experience",
    icon: "star",
    text: "10+ Years of Excellence",
  },

  {
    id: "customers",
    icon: "users",
    text: "Thousands of Satisfied Customers",
  },

  {
    id: "installation",
    icon: "settings",
    text: "Premium Products Expert Installation",
  },

  {
    id: "after-sales",
    icon: "shield",
    text: "After Sales Support You Can Rely On",
  },
];


/* ============================================================
   SECTION COPY
   ============================================================ */

export const companyTrustContent = {
  eyebrow: "Trusted. Verified. Nationwide.",

  title: "Why Customers Trust",

  highlightedTitle: "Zorays Solar Pakistan",

  description:
    "Verified reviews, regulatory presence, live analytics, and nationwide support — all in one professional solar platform.",

  googleTitle: "Google Reviews",

  complianceTitle: "Registration & Compliance",

  analyticsTitle: "Zorays Realtime Analytics",

  paymentTitle: "Payment Gateway Partner",

  contactTitle: "Pakistan Wide Contact",
};