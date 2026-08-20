import {
  ArrowUpRight,
  BarChart3,
  BadgeCheck,
  CircleDollarSign,
  Gauge,
  Leaf,
  ShieldCheck,
  Zap,
} from "lucide-react";

import "../../../assets/css/netMetering/netMeteringBenefits.css";

import {
  netMeteringBenefits,
  netMeteringBenefitsData,
} from "../../../Data/NetMetering/netMeteringData";

const benefitIconMap = {
  savings: CircleDollarSign,
  export: ArrowUpRight,
  roi: BarChart3,
  clean: Leaf,
  control: Gauge,
  support: ShieldCheck,
};

const NetMeteringBenefits = () => {
  return (
    <section className="nm-benefits-section">
      <div className="nm-benefits-container">
        <div className="nm-benefits-header">
          <span className="nm-benefits-eyebrow">
            <Zap size={14} />
            {netMeteringBenefitsData.eyebrow}
          </span>

          <h2>
            {netMeteringBenefitsData.title}

            <span>
              {netMeteringBenefitsData.highlightedTitle}
            </span>
          </h2>

          <p>{netMeteringBenefitsData.description}</p>
        </div>

        <div className="nm-benefits-grid">
          {netMeteringBenefits.map((item, index) => {
            const Icon =
              benefitIconMap[
                item.icon as keyof typeof benefitIconMap
              ];

            return (
              <article
                key={item.id}
                className="nm-benefit-card"
              >
                <div className="nm-benefit-top">
                  <div className="nm-benefit-icon">
                    <Icon size={21} />
                  </div>

                  <span className="nm-benefit-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <div className="nm-benefit-footer">
                  <BadgeCheck size={14} />
                  <span>Net Metering Advantage</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NetMeteringBenefits;