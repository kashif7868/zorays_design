import type { ReactNode } from "react";

export type FaqItem = {
  id: number;
  question: string;
  answer: ReactNode;
};

export const faqSectionData: FaqItem[] = [
  {
    id: 1,
    question: "How much does a solar panel cost in Pakistan?",
    answer:
      "The cost of a solar panel in Pakistan depends on wattage, brand, panel technology, and market availability. A standard high-efficiency solar panel is usually priced according to its current market rate. For an accurate quotation, Zorays Solar Pakistan recommends checking the latest equipment pricing before finalizing a system.",
  },
  {
    id: 2,
    question: "Which is the best solar system in Pakistan?",
    answer:
      "The best solar system depends on electricity usage, daytime load, backup requirements, sanctioned load, available roof space, and budget. For many homes and businesses, a properly designed on-grid or hybrid solar system can provide strong long-term value.",
  },
  {
    id: 3,
    question:
      "How many solar panels are required for a 1.5 ton AC in Pakistan?",
    answer:
      "A 1.5 ton inverter AC requires system sizing based on its running consumption, operating hours, and the other loads connected at the property. In practical residential installations, additional solar capacity is normally considered so the AC can operate alongside other household appliances.",
  },
  {
    id: 4,
    question:
      "What is the price of a 3000 watt solar system in Pakistan?",
    answer:
      "A 3000 watt solar setup is normally created by combining multiple photovoltaic modules. The exact number of panels depends on the selected module wattage, inverter configuration, roof conditions, and the intended system design.",
  },
  {
    id: 5,
    question:
      "What is the price of a 5 kW solar system in Pakistan in 2026?",
    answer:
      "The price of a 5 kW solar system depends on panel and inverter brands, mounting structure, cabling, protection equipment, installation requirements, and whether the system is on-grid or hybrid. Final pricing should be calculated using current equipment rates and site requirements.",
  },
  {
    id: 6,
    question: "What is net metering and how does it work?",
    answer:
      "Net metering allows an eligible solar consumer to export surplus electricity to the grid through an approved metering arrangement. The exact process depends on applicable utility requirements, system capacity, documentation, inspection, and approval.",
  },
  {
    id: 7,
    question: "Should I choose an on-grid or hybrid solar system?",
    answer:
      "An on-grid system is suitable when reducing grid electricity consumption is the main objective and battery backup is not required. A hybrid system adds battery storage capability and is generally preferred where backup during outages is important.",
  },
  {
    id: 8,
    question: "How long does a solar installation take?",
    answer:
      "Installation time depends on system size, structure type, electrical work, equipment availability, site access, and any utility-related requirements. Smaller residential systems are generally quicker to install than large commercial or industrial projects.",
  },
];