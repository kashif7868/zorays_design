import {
  ArrowDown,
  ArrowRight,
  BadgeDollarSign,
  BadgeCheck,
} from "lucide-react";

import "../../../assets/css/solarFinancing/solarFinancingOverview.css";

import {
  solarFinancingOverviewData,
  solarFinancingTags,
} from "../../../Data/SolarFinancing/solarFinancingData";

const SolarFinancingOverview = () => {
  return (
    <section className="sf-overview-section">
      <div className="sf-overview-container">
        <div className="sf-overview-layout">
          <div className="sf-overview-visual">
            <img
              src={solarFinancingOverviewData.image}
              alt={solarFinancingOverviewData.imageAlt}
              loading="eager"
            />

            <div className="sf-overview-overlay" />

            <div className="sf-overview-badge">
              <BadgeDollarSign size={20} />

              <div>
                <strong>Exclusive Financing</strong>
                <span>Solar made more accessible</span>
              </div>
            </div>

            <a
              href="#solar-financing-form"
              className="sf-overview-scroll"
              aria-label="Scroll to financing application"
            >
              <ArrowDown size={18} />
            </a>
          </div>

          <div className="sf-overview-content">
            <span className="sf-overview-eyebrow">
              <BadgeCheck size={14} />
              {solarFinancingOverviewData.eyebrow}
            </span>

            <h1>
              {solarFinancingOverviewData.title}

              <span>
                {solarFinancingOverviewData.highlightedTitle}
              </span>
            </h1>

            <p className="sf-overview-description">
              {solarFinancingOverviewData.description}
            </p>

            <p className="sf-overview-secondary">
              {solarFinancingOverviewData.secondaryText}
            </p>

            <div className="sf-overview-tags">
              {solarFinancingTags.map((tag) => (
                <span key={tag.id}>
                  {tag.label}
                </span>
              ))}
            </div>

            <a
              href="#solar-financing-form"
              className="sf-overview-primary"
            >
              {solarFinancingOverviewData.buttonText}
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarFinancingOverview;