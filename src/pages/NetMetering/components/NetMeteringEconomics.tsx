import {
  ArrowDownLeft,
  ArrowUpRight,
  BarChart3,
  BadgeCheck,
  CircleDollarSign,
  Gauge,
  Zap,
} from "lucide-react";

import "../../../assets/css/netMetering/netMeteringEconomics.css";

import {
  netMeteringEconomicsData,
  netMeteringEconomicsFactors,
  netMeteringEconomicsItems,
} from "../../../Data/NetMetering/netMeteringData";

const economicsIconMap = {
  "self-consumption": Zap,
  "grid-import": ArrowDownLeft,
  "surplus-export": ArrowUpRight,
  "system-performance": Gauge,
};

const NetMeteringEconomics = () => {
  return (
    <section className="nm-economics-section">
      <div className="nm-economics-container">
        <div className="nm-economics-layout">
          <div className="nm-economics-content">
            <span className="nm-economics-eyebrow">
              <CircleDollarSign size={14} />
              {netMeteringEconomicsData.eyebrow}
            </span>

            <h2>
              {netMeteringEconomicsData.title}
              <span>
                {netMeteringEconomicsData.highlightedTitle}
              </span>
            </h2>

            <p className="nm-economics-description">
              {netMeteringEconomicsData.description}
            </p>

            <div className="nm-economics-factors">
              <span className="nm-economics-factors-title">
                What influences project economics?
              </span>

              <div className="nm-economics-factor-grid">
                {netMeteringEconomicsFactors.map((item) => (
                  <div key={item}>
                    <BadgeCheck size={14} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="nm-economics-note">
              <BarChart3 size={17} />

              <p>{netMeteringEconomicsData.note}</p>
            </div>
          </div>

          <div className="nm-economics-cards">
            {netMeteringEconomicsItems.map((item) => {
              const Icon =
                economicsIconMap[
                  item.id as keyof typeof economicsIconMap
                ];

              return (
                <article
                  className="nm-economics-card"
                  key={item.id}
                >
                  <div className="nm-economics-card-top">
                    <span className="nm-economics-card-icon">
                      <Icon size={19} />
                    </span>

                    <span className="nm-economics-value">
                      {item.value}
                    </span>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetMeteringEconomics;