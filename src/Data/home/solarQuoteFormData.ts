// src/Data/home/solarQuoteFormData.ts

// ======================================================
// STEPS
// ======================================================

export const SOLAR_QUOTE_STEPS = [
  {
    id: 1,
    key: "purpose",
    label: "Purpose",
  },
  {
    id: 2,
    key: "load",
    label: "Load",
  },
  {
    id: 3,
    key: "panels",
    label: "Panels",
  },
  {
    id: 4,
    key: "inverters",
    label: "Inverters",
  },
  {
    id: 5,
    key: "address",
    label: "Address",
  },
  {
    id: 6,
    key: "contact",
    label: "Contact",
  },
  {
    id: 7,
    key: "introduction",
    label: "Introduction",
    final: true,
  },
] as const;


// ======================================================
// STEP 1 — PURPOSE
// ======================================================

export const APPLICATION_TYPES = [
  {
    id: "residential",
    label: "Residential",
  },
  {
    id: "corporate",
    label: "Corporate",
  },
  {
    id: "industrial",
    label: "Industrial",
  },
  {
    id: "agricultural",
    label: "Agricultural",
  },
] as const;


export const STRUCTURE_TYPES = [
  {
    id: "ground-mounted",
    label: "Ground-mounted (for flat roofs)",
  },
  {
    id: "hi-rise",
    label: "Hi-rise (for shade mitigation)",
  },
  {
    id: "carport",
    label: "Carport (for parking sheds)",
  },
  {
    id: "grouted",
    label: "Grouted (for corrugated turfs)",
  },
] as const;


// ======================================================
// STEP 2 — LOAD / CONNECTION TYPE
// ======================================================

export const SYSTEM_TYPES = [
  {
    id: "on-grid",
    label: "On-Grid",
  },
  {
    id: "hybrid",
    label: "Hybrid",
  },
] as const;


export const BATTERY_BANKS = [
  {
    id: "ses-16kwh",
    brand: "SES",
    label: "SES 51.2V 314Ah — 16 kWh, IP54, 10-Year Warranty",
  },
  {
    id: "knox-5-1kwh",
    brand: "Knox",
    label: "Knox 51.1V 100Ah — 5.1 kWh Wall Mounted Smart Battery",
  },
  {
    id: "ses-5kwh",
    brand: "SES",
    label:
      "SES 51.2V 100Ah — 5 kWh Smart Battery, WiFi, 6000 Cycles @100% DoD",
  },
  {
    id: "easun-5kwh",
    brand: "EASun",
    label:
      "EASun 48V 100Ah — 5 kWh Smart Battery, REPT Cells, 6000 Cycles",
  },
  {
    id: "dyness-5kwh-ip20",
    brand: "Dyness",
    label: "Dyness 5 kWh IP20 — 7-Year Warranty Lithium-Ion",
  },
  {
    id: "didu-15kwh",
    brand: "Didu",
    label:
      "Didu 51.2V 280Ah — 15 kWh Removable Battery, 5-Year Warranty",
  },
  {
    id: "narada-7-5kwh",
    brand: "Narada",
    label:
      "Narada 48V 150Ah — 7.5 kWh Rack/Floor Type, 7500 Cycles",
  },
  {
    id: "easun-2-56kwh",
    brand: "EASun",
    label:
      "EASun 25.6V 100Ah — 2.56 kWh Entry-Level Lithium Backup",
  },
  {
    id: "goodwe-5kwh",
    brand: "GoodWe",
    label: "GoodWe 5 kWh — Premium Ecosystem",
  },
  {
    id: "dyness-popular-5kwh",
    brand: "Dyness",
    label: "Dyness 5kWh — Popular Lithium Choice",
  },
  {
    id: "inverex-known-5kwh",
    brand: "Inverex",
    label: "Inverex 5kWh — Known Local Brand",
  },
  {
    id: "itel-5kwh",
    brand: "Itel",
    label:
      "Itel 5kWh — Fresh Market Option (Chosen by Freelancers)",
  },
  {
    id: "inverex-10kwh-ip65",
    brand: "Inverex",
    label:
      "Inverex 10kWh IP65 — Strong Weather-Protected Backup",
  },
  {
    id: "pylontech-5kwh",
    brand: "PylonTech",
    label:
      "PylonTech UF5000/Fidus 5kWh — Reliable Modular Storage",
  },
  {
    id: "pylontech-16kwh",
    brand: "PylonTech",
    label:
      "PylonTech Fidus 16kWh IP65 — Premium Heavy Back",
  },
  {
    id: "sunwoda-25kwh",
    brand: "Sunwoda",
    label: "Sunwoda 25kWh — Commercial ESS Starter",
  },
  {
    id: "sunwoda-40kwh",
    brand: "Sunwoda",
    label: "Sunwoda 40kWh — Commercial ESS Plus",
  },
  {
    id: "sunwoda-50kwh",
    brand: "Sunwoda",
    label: "Sunwoda 50kWh — Large Commercial ESS",
  },
] as const;


// ======================================================
// STEP 3 — PV PANELS
// ======================================================

export const PV_BRANDS = [
  {
    id: "longi",
    name: "Longi",
    note: "Consumer Choice",
  },
  {
    id: "trina-solar",
    name: "Trina Solar",
  },
  {
    id: "jinko-solar",
    name: "Jinko Solar",
  },
  {
    id: "ja-solar",
    name: "JA Solar",
  },
  {
    id: "canadian-solar",
    name: "Canadian Solar",
    note: "Employees' Choice",
  },
  {
    id: "astroenergy",
    name: "Astroenergy",
    note: "Chint Group",
  },
  {
    id: "yingli-solar",
    name: "Yingli Solar",
    note: "CEO's Choice",
  },
  {
    id: "zn-shine",
    name: "ZN Shine",
  },
  {
    id: "akcome",
    name: "Akcome",
  },
  {
    id: "sunova",
    name: "Sunova",
  },
  {
    id: "osda",
    name: "OSDA",
  },
  {
    id: "leapton",
    name: "Leapton",
  },
  {
    id: "aiko",
    name: "Aiko",
  },
  {
    id: "piemar",
    name: "Piemar",
    note: "Italian - Exclusive Industrialist Choice",
  },
] as const;


export const PV_BRAND_NOTE =
  "We will employ the most suitable nominal wattage panel as per the technical design. Our preference may supersede your selection subject to the availability of panels in stock or better versions.";


// ======================================================
// STEP 4 — INVERTERS
// ======================================================

export const THREE_PHASE_INVERTER_BRANDS = [
  {
    id: "huawei",
    name: "Huawei",
    country: "China",
  },
  {
    id: "sungrow",
    name: "Sungrow",
    country: "China",
  },
  {
    id: "sma",
    name: "SMA",
    country: "Germany",
  },
  {
    id: "goodwe",
    name: "GoodWe",
    country: "China",
  },
  {
    id: "growatt",
    name: "Growatt",
    country: "China",
  },
  {
    id: "solis",
    name: "Solis",
    country: "China",
  },
  {
    id: "sofar",
    name: "Sofar",
    country: "China",
  },
  {
    id: "sunways",
    name: "Sunways",
    country: "China",
  },
  {
    id: "kstar",
    name: "K-STAR",
    note: "CEO's Choice",
  },
  {
    id: "photon",
    name: "Photon",
    note: "Hypnotech - Introductory Prices",
  },
  {
    id: "knox",
    name: "Knox",
    note: "Aieswei SMA China",
  },
  {
    id: "voltas",
    name: "Voltas",
    country: "China",
  },
  {
    id: "max-power",
    name: "Max Power",
    country: "China",
  },
  {
    id: "matrix",
    name: "Matrix",
    country: "China",
  },
  {
    id: "sineng",
    name: "Sineng",
    country: "China",
  },
  {
    id: "solar-max",
    name: "Solar Max",
    country: "China",
  },
] as const;


// ======================================================
// STEP 5 — ADDRESS
// ======================================================

export const ADDRESS_FIELDS = {
  city: {
    label: "Address (City)",
    placeholder: "e.g. Lahore",
    required: true,
  },
} as const;


// ======================================================
// STEP 6 — CONTACT
// ======================================================

export const CONTACT_FIELDS = {
  email: {
    label: "E-mail",
    placeholder: "example@email.com",
    required: true,
  },

  whatsapp: {
    label: "WhatsApp",
    placeholder: "+92 300 1234567",
    required: true,
  },
} as const;


export const CONTACT_ACCEPTANCE_TEXT =
  "I would like to receive occasional E-mail, WhatsApp or SMS";


export const CONTACT_HELP_TEXT =
  "The more accurate contact details you share the sooner response you shall get.";


// ======================================================
// STEP 7 — INTRODUCTION
// ======================================================

export const INTRODUCTION_FIELDS = {
  name: {
    label: "Name",
    placeholder: "Enter your full name",
    required: true,
  },

  timeline: {
    label: "How soon (in number of weeks) you want to get it done?",
    placeholder: "e.g. 4",
    required: false,
  },

  specialRequirements: {
    label: "Special Requirements",
    placeholder: "Tell us anything specific about your solar requirements",
    required: false,
  },
} as const;


export const QUOTE_STATUS_OPTIONS = [
  {
    value: "",
    label: "Do you already have a quote?",
    disabled: true,
  },
  {
    value: "no",
    label: "No, I do not have a quote",
  },
  {
    value: "yes-one",
    label: "Yes, I already have one quote",
  },
  {
    value: "yes-multiple",
    label: "Yes, I am comparing multiple quotations",
  },
  {
    value: "finalizing",
    label: "Yes, I am close to finalizing",
  },
] as const;


export const REMARK_OPTIONS = [
  {
    id: "change-name-on-bill",
    label: "Change of Name on Bill Desired",
  },
  {
    id: "extension-of-load",
    label: "Extension of Load Desired",
  },
] as const;


// ======================================================
// FORM COPY
// ======================================================

export const FORM_TEXT = {
  purposeTitle: "System Design",
  loadTitle: "Connection Type",
  panelsTitle: "PV Brands",
  inverterTitle: "Inverter Brands",
  inverterSubtitle: "3-Phase Inverters",
  addressTitle: "Installation Address",
  contactTitle: "Ways to Contact in Future",
  introductionTitle:
    "Commercial, Residential and Industrial Solar Systems",

  previousButton: "Previous Step",
  nextButton: "Next Step",
  showSummaryButton: "Show Summary",
  submitButton: "Submit",
} as const;


// ======================================================
// INITIAL FORM STATE
// ======================================================

export interface SolarQuoteFormState {
  application: string;
  structureType: string;

  load: string;
  systemType: string;
  batteryBank: string;

  pvBrands: string[];
  inverterBrands: string[];

  city: string;

  email: string;
  whatsapp: string;
  marketingConsent: boolean;

  name: string;
  existingQuote: string;
  projectTimelineWeeks: string;

  remarks: string[];
  specialRequirements: string;
}


export const INITIAL_SOLAR_QUOTE_FORM: SolarQuoteFormState = {
  application: "",
  structureType: "",

  load: "",
  systemType: "",
  batteryBank: "",

  pvBrands: [],
  inverterBrands: [],

  city: "",

  email: "",
  whatsapp: "",
  marketingConsent: false,

  name: "",
  existingQuote: "",
  projectTimelineWeeks: "",

  remarks: [],
  specialRequirements: "",
};