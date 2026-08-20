export type FinancingTag = {
  id: string;
  label: string;
};

export type FinancingRequirement = {
  id: string;
  label: string;
  name: string;
  type: "text" | "number" | "email" | "tel";
  required?: boolean;
  placeholder?: string;
};

export const solarFinancingOverviewData = {
  eyebrow: "Exclusive Solar Financing",

  title: "Solar Financing for",

  highlightedTitle: "Homes & Businesses",

  description:
    "Access structured solar financing options designed to make solar adoption easier for residential and commercial customers in Pakistan.",

  secondaryText:
    "Financing can help reduce the upfront burden of solar investment by spreading project cost across manageable installments, subject to bank approval and eligibility.",

  image:
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",

  imageAlt:
    "Solar financing consultation for residential and commercial solar systems",

  buttonText: "Apply for Solar Financing",
};

export const solarFinancingTags: FinancingTag[] = [
  { id: "finance", label: "Finance" },
  { id: "electricity", label: "Electricity" },
  { id: "solar", label: "Solar" },
  { id: "financing", label: "Financing" },
  { id: "electric", label: "Electric" },
  { id: "bank", label: "Bank" },
  { id: "solar-energy", label: "Solar Energy" },
  { id: "solar-power", label: "Solar Power" },
  { id: "banking", label: "Banking" },
];

export const solarFinancingFormData = {
  eyebrow: "Solar Financing Application",

  title: "Tell Us About Your",

  highlightedTitle: "Financing Requirement",

  description:
    "Share your basic profile, contact information, and installation address so our team can review your financing requirement.",

  financeNote:
    "Interested in solar financing? Loan terms and markup depend on the selected bank, applicant profile, project size, and current financing policy.",

  steps: [
    {
      id: "1",
      title: "Bank Financing",
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

export const solarFinancingRequirements: FinancingRequirement[] = [
  {
    id: "name",
    label: "Name",
    name: "name",
    type: "text",
    required: true,
    placeholder: "Enter your full name",
  },

  {
    id: "profession",
    label: "Profession",
    name: "profession",
    type: "text",
    required: true,
    placeholder: "Enter your profession",
  },

  {
    id: "income",
    label: "Average Monthly Income",
    name: "monthlyIncome",
    type: "number",
    required: true,
    placeholder: "Enter average monthly income",
  },

  {
    id: "email",
    label: "E-mail",
    name: "email",
    type: "email",
    required: true,
    placeholder: "Enter your email address",
  },

  {
    id: "cell",
    label: "Cell Number",
    name: "cellNumber",
    type: "tel",
    required: true,
    placeholder: "Enter mobile number",
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
];

export const solarFinancingDetailsData = {
  eyebrow: "Financing Guidance",

  title: "Important Solar Financing",

  highlightedTitle: "Considerations",

  description:
    "Solar financing terms can vary significantly between banks and customer profiles. Applicants should review markup, equity contribution, fees, collateral, insurance, and repayment structure before proceeding.",

  points: [
    {
      id: "equity",
      title: "Upfront Equity",
      text:
        "Some financing arrangements may require an upfront customer contribution depending on the bank and project profile.",
    },

    {
      id: "vendor-commission",
      title: "Vendor / Processing Charges",
      text:
        "Banks or financing partners may apply processing, vendor, documentation, or related administrative charges.",
    },

    {
      id: "client-commission",
      title: "Client Charges",
      text:
        "Additional application or service charges may apply depending on the selected financing structure.",
    },

    {
      id: "insurance",
      title: "Insurance",
      text:
        "Some financed solar systems may require insurance coverage as part of the financing arrangement.",
    },

    {
      id: "installments",
      title: "Installment Structure",
      text:
        "Monthly installments depend on project cost, financing tenure, markup rate, and approved facility amount.",
    },

    {
      id: "due-diligence",
      title: "Due Diligence",
      text:
        "Banks can require salary evidence, account history, business records, collateral, or additional documentation before approval.",
    },
  ],

  disclaimer:
    "Final financing eligibility, markup, tenure, collateral, and approval remain subject to the selected bank's current policies and credit assessment.",

  primaryButton: "Discuss Your Solar Project",

  secondaryButton: "Get Free Solar Quote",
};