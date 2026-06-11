import { useState } from "react";
import "../../assets//css/home/solarSectorAccordion.css";

type AccordionItem = {
  title: string;
  text: React.ReactNode;
  icon: React.ReactNode;
};

const SolarIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
  </svg>
);

const NetworkIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="5" r="2.4" />
    <circle cx="6" cy="17" r="2.4" />
    <circle cx="18" cy="17" r="2.4" />
    <path d="M11 7.2 7.2 14.8M13 7.2l3.8 7.6M8.5 17h7" />
  </svg>
);

const ProductIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
    <path d="M4 7.5v9L12 21l8-4.5v-9" />
    <path d="M12 12v9" />
  </svg>
);

const RoofIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 13 12 5l9 8" />
    <path d="M6 12.5V20h12v-7.5" />
    <path d="M9 16h6M9 18h6M9 14h6" />
  </svg>
);

const LeafIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 4c-7.5.4-12.8 4.2-14 10.5C11.5 15.2 17.7 11.4 20 4Z" />
    <path d="M6 14.5C4.2 16 3.4 18 3 21" />
    <path d="M7 13c2.7 2.8 6.2 4 10 3" />
  </svg>
);

const accordionItems: AccordionItem[] = [
  {
    title: "Solar Energy Sector in Pakistan",
    icon: <SolarIcon />,
    text: (
      <>
        Zorays Solar Pakistan is connecting Pakistani people to their energy
        environment. As a solar solutions company, we take pride in educating
        people about net metering in Pakistan and how it works. As a local
        specialist in energy management and automation, we provide connected
        technologies that will reshape{" "}
        <strong>industries</strong>, transform cities, and enrich the lives of
        Pakistani people.
      </>
    ),
  },
  {
    title: "Our Network of Solar Systems",
    icon: <NetworkIcon />,
    text: (
      <>
        Our solar network is built for homes, businesses, industries, and farms
        that need reliable energy performance with professional engineering and
        long-term system support.
      </>
    ),
  },
  {
    title: "State-of-the-art Products",
    icon: <ProductIcon />,
    text: (
      <>
        We use reliable solar panels, hybrid inverters, batteries, mounting
        structures, and protection equipment selected according to Pakistan’s
        climate and power conditions.
      </>
    ),
  },
  {
    title: "A Promise of 1000 Solar Roof Tops",
    icon: <RoofIcon />,
    text: (
      <>
        Our mission is to make solar power easier, cleaner, and more accessible
        across Pakistan through professionally designed rooftop solar systems.
      </>
    ),
  },
  {
    title: "The Next Generation of Solar Energy",
    icon: <LeafIcon />,
    text: (
      <>
        We are moving solar beyond panels by combining energy management, smart
        monitoring, backup power, and net metering support into one complete
        solution.
      </>
    ),
  },
];

const SolarSectorAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="solar-sector-section">
      <div className="solar-sector-bg solar-sector-bg-left" />
      <div className="solar-sector-bg solar-sector-bg-right" />

      <div className="solar-sector-container">
        <div className="solar-sector-heading">
          <span>Energy Intelligence</span>
          <h2>Solar Energy Solutions for Pakistan</h2>
          <p>
            Smarter solar, hybrid backup, and net metering support designed for
            Pakistani homes and businesses.
          </p>
        </div>

        <div className="solar-accordion">
          {accordionItems.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <article
                className={`solar-accordion-card ${
                  isActive ? "is-active" : ""
                }`}
                key={item.title}
              >
                <button
                  className="solar-accordion-trigger"
                  type="button"
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                  aria-expanded={isActive}
                >
                  <span className="solar-accordion-left">
                    <span className="solar-accordion-icon">{item.icon}</span>
                    <span className="solar-accordion-title">{item.title}</span>
                  </span>

                  <span className="solar-accordion-toggle">
                    {isActive ? "−" : "+"}
                  </span>
                </button>

                {isActive && (
                  <div className="solar-accordion-content">
                    <span className="solar-yellow-line" />

                    <div className="solar-accordion-copy">
                      <p>{item.text}</p>
                    </div>

                    <div className="solar-panel-visual">
                      <img
                        src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80"
                        alt="Solar panels installed in an open green field"
                      />
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolarSectorAccordion;