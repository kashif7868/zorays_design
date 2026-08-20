export type NetMeteringHeroTrustPoint = {
  id: string;
  text: string;
};

export type NetMeteringStat = {
  id: string;
  value: string;
  label: string;
};

export type NetMeteringIntroPoint = {
  id: string;
  title: string;
  text: string;
};


/* ============================================================
   HERO
   ============================================================ */

export const netMeteringHeroData = {
  eyebrow: "Solar Net Metering Pakistan",

  title: "Generate Solar Power.",

  highlightedTitle: "Use More. Export the Surplus.",

  description:
    "A professionally designed grid-connected solar system can reduce your dependence on utility electricity while allowing eligible surplus solar generation to be accounted for through an approved net metering arrangement.",

  primaryCta: "Get Free Solar Assessment",

  secondaryCta: "How Net Metering Works",

  image:
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=85",

  imageAlt:
    "Grid-connected solar photovoltaic system designed for net metering in Pakistan",

  imageLabelTitle: "Professionally Engineered",

  imageLabelText: "Solar + Grid Integration",

  meterTitle: "Bi-Directional Metering",

  meterImportLabel: "Import",

  meterExportLabel: "Export",

  energyFlow: {
    solar: "Solar",
    property: "Property",
    grid: "Grid",
  },
};


export const netMeteringHeroTrustPoints: NetMeteringHeroTrustPoint[] = [
  {
    id: "applications",
    text: "Residential, Commercial & Industrial",
  },

  {
    id: "technical-support",
    text: "System Design & Technical Support",
  },

  {
    id: "documentation",
    text: "Application & Documentation Assistance",
  },
];


export const netMeteringStats: NetMeteringStat[] = [
  {
    id: "grid",
    value: "Grid Connected",
    label: "Solar Energy System",
  },

  {
    id: "meter",
    value: "Bi-Directional",
    label: "Import & Export Metering",
  },

  {
    id: "design",
    value: "Engineered",
    label: "System Sizing & Protection",
  },

  {
    id: "support",
    value: "End-to-End",
    label: "Application Support",
  },
];


/* ============================================================
   INTRO — WHAT IS NET METERING?
   ============================================================ */

export const netMeteringIntroData = {
  eyebrow: "How Net Metering Works",

  title: "What Is Net Metering?",

  highlightedTitle: "Solar Power That Works With the Grid",

  description:
    "Net metering is a grid-connected energy arrangement where your solar system first supports your own electricity demand. When solar generation exceeds your immediate consumption, eligible surplus energy can be exported through an approved bi-directional metering setup.",

  secondaryText:
    "When your property needs more electricity than the solar system is producing, power is imported from the utility grid. The meter records both directions so electricity drawn from and supplied to the grid can be accounted for under the applicable billing arrangement.",

  image:
    "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=85",

  imageAlt:
    "Grid-connected rooftop solar system explaining how net metering works",

  diagram: {
    solar: "Solar Generation",
    property: "Home / Business",
    grid: "Utility Grid",
    exportLabel: "Surplus Export",
    importLabel: "Grid Import",
  },
};


export const netMeteringIntroPoints: NetMeteringIntroPoint[] = [
  {
    id: "self-consumption",
    title: "Use Solar First",
    text: "Solar generation is used to support the property's active electricity demand before surplus energy is considered for export.",
  },

  {
    id: "export",
    title: "Export Eligible Surplus",
    text: "When generation exceeds consumption, eligible surplus electricity can flow toward the utility grid through the approved metering arrangement.",
  },

  {
    id: "import",
    title: "Import When Required",
    text: "At night or during periods of low solar production, the property can continue drawing electricity from the utility grid.",
  },
];
export type NetMeteringSystemType = {
  id: string;
  name: string;
  shortLabel: string;
  badge: string;
  description: string;
  idealFor: string[];
  features: string[];
  note: string;
};

export const netMeteringSystemsData = {
  eyebrow: "Choose the Right Configuration",

  title: "On-Grid or Hybrid?",

  highlightedTitle: "Understand the Difference",

  description:
    "Both system types can use solar generation to reduce grid electricity usage, but their operating philosophy is different. The right choice depends on whether your priority is maximum daytime savings, backup during outages, or a combination of both.",

  comparisonLabel: "System Comparison",
};

export const netMeteringSystemTypes: NetMeteringSystemType[] = [
  {
    id: "on-grid",

    name: "On-Grid Solar System",

    shortLabel: "Grid-Tied",

    badge: "Best for Energy Savings",

    description:
      "An on-grid solar system operates alongside the utility grid. Solar energy first supports the property's live electrical demand, while eligible surplus generation can be exported through an approved net metering arrangement.",

    idealFor: [
      "Homes with strong daytime electricity consumption",
      "Commercial buildings and offices",
      "Businesses focused on reducing grid energy use",
    ],

    features: [
      "Grid-connected operation",
      "No battery bank required",
      "Lower system complexity",
      "Suitable for net metering",
      "Strong daytime energy utilization",
    ],

    note:
      "A standard on-grid system normally depends on the utility grid for operation and does not provide conventional battery backup during a grid outage.",
  },

  {
    id: "hybrid",

    name: "Hybrid Solar System",

    shortLabel: "Solar + Battery",

    badge: "Best for Savings + Backup",

    description:
      "A hybrid solar system combines solar generation with battery storage and grid connectivity. Depending on the system configuration, solar energy can support loads, charge batteries, and interact with the utility grid.",

    idealFor: [
      "Homes requiring backup during outages",
      "Businesses with critical electrical loads",
      "Users wanting battery storage with solar",
    ],

    features: [
      "Solar + battery integration",
      "Backup for selected loads",
      "Grid-connected capability",
      "Energy storage management",
      "Flexible operating modes",
    ],

    note:
      "Hybrid design requires careful inverter selection, battery sizing, protection coordination, and compatibility with the applicable utility requirements.",
  },
];
export type NetMeteringBenefit = {
  id: string;
  icon: "savings" | "export" | "roi" | "clean" | "control" | "support";
  title: string;
  text: string;
};

export const netMeteringBenefitsData = {
  eyebrow: "Why Net Metering",

  title: "Make Better Use of",

  highlightedTitle: "Your Solar Generation",

  description:
    "A properly designed net metering system can help reduce grid dependence, improve daytime solar utilization, and create a more efficient relationship between your property and the utility grid.",
};

export const netMeteringBenefits: NetMeteringBenefit[] = [
  {
    id: "reduce-grid-use",
    icon: "savings",
    title: "Reduce Grid Electricity Use",
    text: "Solar generation can directly support active loads during the day, reducing the amount of electricity your property needs to import from the grid.",
  },

  {
    id: "surplus-export",
    icon: "export",
    title: "Utilize Surplus Generation",
    text: "Eligible surplus solar generation can be exported through an approved bi-directional metering arrangement instead of remaining unused.",
  },

  {
    id: "better-roi",
    icon: "roi",
    title: "Improve Solar Utilization",
    text: "Using solar for self-consumption and managing eligible surplus generation can improve how effectively the installed solar capacity is utilized.",
  },

  {
    id: "clean-energy",
    icon: "clean",
    title: "Generate Clean Energy",
    text: "Solar photovoltaic systems generate electricity without fuel combustion at the point of use, helping reduce dependence on conventional grid energy.",
  },

  {
    id: "energy-control",
    icon: "control",
    title: "Better Energy Visibility",
    text: "Modern inverters and monitoring systems can help users understand generation, consumption, grid interaction, and overall system performance.",
  },

  {
    id: "professional-support",
    icon: "support",
    title: "Professional Project Support",
    text: "A complete net metering project involves system design, electrical protection, installation, documentation, inspection, and commissioning support.",
  },
];

export type NetMeteringEconomicsItem = {
  id: string;
  title: string;
  value: string;
  text: string;
};

export const netMeteringEconomicsData = {
  eyebrow: "Energy Economics",

  title: "Understand the",

  highlightedTitle: "Import, Export & Savings Logic",

  description:
    "The economics of a net metering system depend on how much solar energy is consumed directly, how much electricity is imported from the grid, how much eligible surplus is exported, and the applicable utility billing rules.",

  note:
    "Actual financial performance varies by tariff structure, system size, load profile, solar generation, equipment cost, operating conditions, and current regulatory treatment.",
};

export const netMeteringEconomicsItems: NetMeteringEconomicsItem[] = [
  {
    id: "self-consumption",
    title: "Self-Consumption",
    value: "Solar → Load",
    text: "Electricity generated and consumed directly at the property can reduce the amount of grid electricity required during solar production hours.",
  },

  {
    id: "grid-import",
    title: "Grid Import",
    value: "Grid → Property",
    text: "When solar generation is lower than the property's electricity demand, the remaining requirement is supplied by the utility grid.",
  },

  {
    id: "surplus-export",
    title: "Surplus Export",
    value: "Solar → Grid",
    text: "When eligible solar generation exceeds immediate consumption, surplus electricity may be exported through the approved metering arrangement.",
  },

  {
    id: "system-performance",
    title: "System Performance",
    value: "Design Matters",
    text: "Panel orientation, shading, inverter sizing, electrical losses, maintenance, and actual load behavior influence how much useful solar energy the system delivers.",
  },
];

export const netMeteringEconomicsFactors = [
  "Daytime electricity consumption",
  "Solar system size and generation",
  "Applicable import and export treatment",
  "Equipment and installation cost",
  "Roof orientation, shading and losses",
  "Future changes in electricity usage",
];

export type NetMeteringProcessStep = {
  id: string;
  number: string;
  title: string;
  text: string;
  icon:
    | "assessment"
    | "design"
    | "documents"
    | "submission"
    | "inspection"
    | "meter"
    | "commissioning";
};

export const netMeteringProcessData = {
  eyebrow: "Application & Approval Journey",

  title: "From Site Assessment to",

  highlightedTitle: "Net Metering Commissioning",

  description:
    "A professional net metering project follows a sequence of technical, documentation, approval, inspection, metering, and commissioning activities.",

  note:
    "Actual processing sequence and timelines can vary depending on the relevant utility, site conditions, documentation status, inspection requirements, and current regulatory procedures.",
};

export const netMeteringProcessSteps: NetMeteringProcessStep[] = [
  {
    id: "assessment",
    number: "01",
    title: "Site & Load Assessment",
    text: "Electricity usage, sanctioned load, available roof space, connection type, and site conditions are reviewed before system sizing.",
    icon: "assessment",
  },

  {
    id: "design",
    number: "02",
    title: "Technical System Design",
    text: "Solar capacity, inverter selection, protection equipment, cabling, structure, and electrical integration are designed according to project requirements.",
    icon: "design",
  },

  {
    id: "documents",
    number: "03",
    title: "Documentation Preparation",
    text: "Required customer, connection, technical, and project documents are organized for the applicable net metering process.",
    icon: "documents",
  },

  {
    id: "submission",
    number: "04",
    title: "Application Submission",
    text: "The application package is submitted through the applicable utility or regulatory workflow for review and processing.",
    icon: "submission",
  },

  {
    id: "inspection",
    number: "05",
    title: "Inspection & Verification",
    text: "The installed system and associated electrical arrangements may be inspected and verified against applicable technical requirements.",
    icon: "inspection",
  },

  {
    id: "meter",
    number: "06",
    title: "Metering Arrangement",
    text: "The approved import-export metering arrangement is completed according to the applicable utility requirements.",
    icon: "meter",
  },

  {
    id: "commissioning",
    number: "07",
    title: "Commissioning & Handover",
    text: "The system is commissioned, operating parameters are checked, and the customer is briefed on monitoring and system operation.",
    icon: "commissioning",
  },
];
export type NetMeteringDocumentItem = {
  id: string;
  title: string;
  text: string;
};

export type NetMeteringDocumentGroup = {
  id: string;
  title: string;
  icon: "customer" | "connection" | "technical";
  items: NetMeteringDocumentItem[];
};

export const netMeteringDocumentsData = {
  eyebrow: "Required Documentation",

  title: "Prepare the Right",

  highlightedTitle: "Net Metering Documents",

  description:
    "A complete application depends on accurate customer, electricity connection, and technical project information. Missing or inconsistent documents can delay processing.",

  note:
    "Exact documentation can vary depending on the relevant utility, connection category, system size, ownership status, and current application requirements.",
};

export const netMeteringDocumentGroups: NetMeteringDocumentGroup[] = [
  {
    id: "customer",
    title: "Customer & Ownership Details",
    icon: "customer",

    items: [
      {
        id: "cnic",
        title: "Applicant Identification",
        text: "Valid applicant identity information is normally required as part of the application package.",
      },

      {
        id: "ownership",
        title: "Property / Ownership Information",
        text: "Ownership or authorized occupancy information may be required depending on the connection and applicant status.",
      },

      {
        id: "contact",
        title: "Contact Details",
        text: "Current phone, email, and communication details should be provided for application coordination.",
      },
    ],
  },

  {
    id: "connection",
    title: "Electricity Connection Documents",
    icon: "connection",

    items: [
      {
        id: "bill",
        title: "Recent Electricity Bill",
        text: "A recent electricity bill helps verify the consumer reference, tariff category, sanctioned load, and connection information.",
      },

      {
        id: "sanctioned-load",
        title: "Sanctioned Load Details",
        text: "The approved electrical load is reviewed during system sizing and eligibility assessment.",
      },

      {
        id: "meter-details",
        title: "Existing Meter Information",
        text: "Existing meter and connection details may be reviewed before the import-export metering arrangement is finalized.",
      },
    ],
  },

  {
    id: "technical",
    title: "Technical Project Documents",
    icon: "technical",

    items: [
      {
        id: "single-line-diagram",
        title: "Single Line Diagram",
        text: "A technical single line diagram shows the electrical integration, protection devices, inverter, grid connection, and system arrangement.",
      },

      {
        id: "equipment",
        title: "Equipment Details",
        text: "Solar modules, inverter, protection equipment, and other relevant system components should be documented.",
      },

      {
        id: "site-information",
        title: "Site & Installation Information",
        text: "Project location, installation configuration, system capacity, and relevant technical site details are included in the application record.",
      },
    ],
  },
];
export type NetMeteringDiscoItem = {
  id: string;
  name: string;
  shortName: string;
  region: string;
};

export const netMeteringDiscosData = {
  eyebrow: "Utility Coordination",

  title: "Net Metering Across",

  highlightedTitle: "Pakistan’s Utility Regions",

  description:
    "Net metering applications are processed according to the consumer’s electricity utility, connection jurisdiction, applicable technical requirements, and current regulatory procedures.",

  supportTitle: "How Zorays Supports the Process",

  supportText:
    "Our project workflow can include connection review, technical documentation, application coordination, installation readiness, inspection preparation, and commissioning support.",

  disclaimer:
    "Utility requirements, eligibility, forms, timelines, metering procedures, and regulatory treatment may change. Final requirements should always be confirmed for the relevant consumer connection.",
};

export const netMeteringDiscos: NetMeteringDiscoItem[] = [
  {
    id: "lesco",
    name: "Lahore Electric Supply Company",
    shortName: "LESCO",
    region: "Lahore Region",
  },

  {
    id: "gepco",
    name: "Gujranwala Electric Power Company",
    shortName: "GEPCO",
    region: "Gujranwala Region",
  },

  {
    id: "fesco",
    name: "Faisalabad Electric Supply Company",
    shortName: "FESCO",
    region: "Faisalabad Region",
  },

  {
    id: "iesco",
    name: "Islamabad Electric Supply Company",
    shortName: "IESCO",
    region: "Islamabad Region",
  },

  {
    id: "mepco",
    name: "Multan Electric Power Company",
    shortName: "MEPCO",
    region: "Multan Region",
  },

  {
    id: "pesco",
    name: "Peshawar Electric Supply Company",
    shortName: "PESCO",
    region: "Peshawar Region",
  },

  {
    id: "hesco",
    name: "Hyderabad Electric Supply Company",
    shortName: "HESCO",
    region: "Hyderabad Region",
  },

  {
    id: "sepco",
    name: "Sukkur Electric Power Company",
    shortName: "SEPCO",
    region: "Sukkur Region",
  },

  {
    id: "qesco",
    name: "Quetta Electric Supply Company",
    shortName: "QESCO",
    region: "Quetta Region",
  },

  {
    id: "tesco",
    name: "Tribal Electric Supply Company",
    shortName: "TESCO",
    region: "Relevant Service Territory",
  },

  {
    id: "ke",
    name: "K-Electric",
    shortName: "KE",
    region: "Karachi Region",
  },
];

export const netMeteringDiscoSupportPoints = [
  "Consumer connection review",
  "Sanctioned load verification",
  "Technical document preparation",
  "Application coordination",
  "Inspection readiness",
  "Metering & commissioning support",
];
export type NetMeteringIssueItem = {
  id: string;
  title: string;
  text: string;
  icon:
    | "documents"
    | "load"
    | "technical"
    | "inspection"
    | "meter"
    | "coordination";
};

export const netMeteringIssuesData = {
  eyebrow: "Avoid Common Delays",

  title: "Common Net Metering",

  highlightedTitle: "Application Issues",

  description:
    "Delays often happen because of incomplete documentation, technical mismatches, connection limitations, or installation readiness issues. A structured project workflow helps reduce avoidable rework.",

  note:
    "The exact cause of a delay or objection depends on the relevant utility, application stage, site conditions, and current technical requirements.",
};

export const netMeteringIssues: NetMeteringIssueItem[] = [
  {
    id: "documents",
    title: "Incomplete Documentation",
    text: "Missing, outdated, inconsistent, or incorrectly prepared documents can slow down application review and require resubmission.",
    icon: "documents",
  },

  {
    id: "load",
    title: "Connection & Load Mismatch",
    text: "The proposed solar system should be reviewed against the consumer connection, sanctioned load, and applicable eligibility limits.",
    icon: "load",
  },

  {
    id: "technical",
    title: "Technical Design Issues",
    text: "Incorrect inverter configuration, protection design, wiring arrangement, or system documentation can create technical objections.",
    icon: "technical",
  },

  {
    id: "inspection",
    title: "Site Not Inspection Ready",
    text: "Poor labeling, incomplete protection, unfinished wiring, earthing concerns, or installation defects can affect inspection readiness.",
    icon: "inspection",
  },

  {
    id: "meter",
    title: "Metering Coordination",
    text: "Import-export metering depends on the applicable utility process, availability, approvals, and correct connection configuration.",
    icon: "meter",
  },

  {
    id: "coordination",
    title: "Poor Process Coordination",
    text: "Applications can become delayed when customer documents, technical teams, installers, and utility requirements are not coordinated properly.",
    icon: "coordination",
  },
];
export type NetMeteringTechnicalItem = {
  id: string;
  title: string;
  text: string;
  icon:
    | "inverter"
    | "protection"
    | "earthing"
    | "sld"
    | "anti-islanding"
    | "commissioning";
};

export const netMeteringTechnicalData = {
  eyebrow: "Technical Readiness",

  title: "Engineering Standards",

  highlightedTitle: "That Support a Reliable System",

  description:
    "A net metering project is not only about solar panels. Inverter configuration, protection, earthing, documentation, anti-islanding behavior, and commissioning quality all matter.",

  note:
    "Final technical requirements depend on the installed equipment, system capacity, utility requirements, and current applicable standards.",
};

export const netMeteringTechnicalItems: NetMeteringTechnicalItem[] = [
  {
    id: "inverter",
    title: "Inverter Integration",
    text: "The inverter should be configured correctly for grid-connected operation, system capacity, voltage conditions, and the intended operating mode.",
    icon: "inverter",
  },

  {
    id: "protection",
    title: "Electrical Protection",
    text: "Proper AC and DC protection, isolation, surge protection, breakers, and coordinated protective devices help improve system safety and reliability.",
    icon: "protection",
  },

  {
    id: "earthing",
    title: "Earthing & Bonding",
    text: "Effective earthing and bonding are important for equipment protection, fault current paths, surge performance, and overall electrical safety.",
    icon: "earthing",
  },

  {
    id: "sld",
    title: "Single Line Diagram",
    text: "A clear single line diagram documents the electrical architecture, inverter connection, protection devices, meter interface, and grid integration.",
    icon: "sld",
  },

  {
    id: "anti-islanding",
    title: "Anti-Islanding Protection",
    text: "Grid-connected systems require appropriate anti-islanding behavior so the inverter does not unintentionally energize the utility network during a grid outage.",
    icon: "anti-islanding",
  },

  {
    id: "commissioning",
    title: "Testing & Commissioning",
    text: "Voltage, polarity, protection operation, inverter parameters, monitoring, and operating behavior should be checked before final handover.",
    icon: "commissioning",
  },
];
export type NetMeteringFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const netMeteringFaqData = {
  eyebrow: "Common Questions",

  title: "Net Metering",

  highlightedTitle: "Frequently Asked Questions",

  description:
    "Quick answers to common questions about system eligibility, metering, on-grid and hybrid configurations, documentation, and project timelines.",
};

export const netMeteringFaqs: NetMeteringFaqItem[] = [
  {
    id: "what-is-net-metering",
    question: "What is solar net metering?",
    answer:
      "Net metering is a grid-connected energy arrangement where solar generation can support local electricity demand and eligible surplus generation can be exported through an approved import-export metering setup.",
  },

  {
    id: "on-grid-vs-hybrid",
    question: "What is the difference between on-grid and hybrid solar?",
    answer:
      "An on-grid system mainly operates with the utility grid and normally does not include battery backup. A hybrid system combines solar generation with battery storage and grid connectivity.",
  },

  {
    id: "battery-required",
    question: "Do I need batteries for net metering?",
    answer:
      "A standard on-grid net metering system does not normally require batteries. Batteries are typically used when backup power or energy storage is also required.",
  },

  {
    id: "system-size",
    question: "How is the solar system size decided?",
    answer:
      "System sizing should consider electricity consumption, daytime load, sanctioned load, roof space, solar exposure, system objectives, and applicable utility requirements.",
  },

  {
    id: "documents",
    question: "What documents are required for net metering?",
    answer:
      "The application normally requires customer identification, electricity connection information, recent billing details, sanctioned load information, and relevant technical project documents.",
  },

  {
    id: "meter",
    question: "What does a bi-directional meter do?",
    answer:
      "A bi-directional meter records electricity flowing in both directions, including electricity imported from the utility grid and eligible surplus electricity exported by the solar system.",
  },

  {
    id: "timeline",
    question: "How long does net metering approval take?",
    answer:
      "Processing time varies depending on documentation readiness, utility procedures, inspection requirements, metering arrangements, and the status of the application.",
  },

  {
    id: "existing-system",
    question: "Can an existing solar system be converted for net metering?",
    answer:
      "An existing system may require technical review of the inverter, protection, electrical integration, documentation, system capacity, and compatibility with current utility requirements.",
  },
];

export const netMeteringCtaData = {
  eyebrow: "Ready to Start?",

  title: "Plan Your",

  highlightedTitle: "Net Metering Solar System",

  description:
    "Share your electricity load, city, roof type, and system requirements. Our team can help you understand the right solar configuration and next steps for your project.",

  primaryButton: "Get Free Solar Assessment",

  secondaryButton: "Call Our Solar Team",

  phone: "+92 300 1234567",

  phoneHref: "tel:+923001234567",

  trustPoints: [
    "System sizing support",
    "Technical design guidance",
    "Documentation assistance",
    "Installation & commissioning support",
  ],
};