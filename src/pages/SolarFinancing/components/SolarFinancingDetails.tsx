import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  FileCheck2,
  Landmark,
  ReceiptText,
  ShieldCheck,
  WalletCards,
} from "lucide-react";

import "../../../assets/css/solarFinancing/solarFinancingDetails.css";

import {
  solarFinancingDetailsData,
} from "../../../Data/SolarFinancing/solarFinancingData";

const detailIconMap = {
  equity: WalletCards,
  "vendor-commission": ReceiptText,
  "client-commission": Banknote,
  insurance: ShieldCheck,
  installments: Landmark,
  "due-diligence": FileCheck2,
};

const SolarFinancingDetails = () => {
  return (
    <section className="sf-details-section">
      <div className="sf-details-container">
        <div className="sf-details-header">
          <span className="sf-details-eyebrow">
            <BadgeCheck size={14} />
            {solarFinancingDetailsData.eyebrow}
          </span>

          <h2>
            {solarFinancingDetailsData.title}

            <span>
              {solarFinancingDetailsData.highlightedTitle}
            </span>
          </h2>

          <p>
            {solarFinancingDetailsData.description}
          </p>
        </div>

        <div className="sf-details-grid">
          {solarFinancingDetailsData.points.map((item) => {
            const Icon =
              detailIconMap[
                item.id as keyof typeof detailIconMap
              ];

            return (
              <article
                className="sf-details-card"
                key={item.id}
              >
                <div className="sf-details-icon">
                  <Icon size={20} />
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="sf-details-disclaimer">
          <ShieldCheck size={16} />

          <p>
            {solarFinancingDetailsData.disclaimer}
          </p>
        </div>

        <div className="sf-details-cta">
          <div>
            <span>Ready to move forward?</span>

            <h3>
              Discuss your solar financing requirement with our team.
            </h3>
          </div>

          <div className="sf-details-actions">
            <a
              href="#solar-financing-form"
              className="sf-details-primary"
            >
              {solarFinancingDetailsData.primaryButton}
              <ArrowRight size={15} />
            </a>

            <a
              href="/#multi-step-form"
              className="sf-details-secondary"
            >
              {solarFinancingDetailsData.secondaryButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarFinancingDetails;