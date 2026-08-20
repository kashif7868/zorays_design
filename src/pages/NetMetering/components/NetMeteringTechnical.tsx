import {
  BadgeCheck,
  CircuitBoard,
  FileText,
  PlugZap,
  ShieldCheck,
  TestTube2,
  Unplug,
  Zap,
} from "lucide-react";

import "../../../assets/css/netMetering/netMeteringTechnical.css";

import {
  netMeteringTechnicalData,
  netMeteringTechnicalItems,
} from "../../../Data/NetMetering/netMeteringData";

const technicalIconMap = {
  inverter: CircuitBoard,
  protection: ShieldCheck,
  earthing: PlugZap,
  sld: FileText,
  "anti-islanding": Unplug,
  commissioning: TestTube2,
};

const NetMeteringTechnical = () => {
  return (
    <section className="nm-technical-section">
      <div className="nm-technical-container">
        <div className="nm-technical-header">
          <span className="nm-technical-eyebrow">
            <Zap size={14} />
            {netMeteringTechnicalData.eyebrow}
          </span>

          <h2>
            {netMeteringTechnicalData.title}

            <span>
              {netMeteringTechnicalData.highlightedTitle}
            </span>
          </h2>

          <p>{netMeteringTechnicalData.description}</p>
        </div>

        <div className="nm-technical-grid">
          {netMeteringTechnicalItems.map((item) => {
            const Icon =
              technicalIconMap[
                item.icon as keyof typeof technicalIconMap
              ];

            return (
              <article
                className="nm-technical-card"
                key={item.id}
              >
                <div className="nm-technical-icon">
                  <Icon size={20} />
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

                <span className="nm-technical-check">
                  <BadgeCheck size={14} />
                </span>
              </article>
            );
          })}
        </div>

        <div className="nm-technical-note">
          <ShieldCheck size={16} />

          <p>{netMeteringTechnicalData.note}</p>
        </div>
      </div>
    </section>
  );
};

export default NetMeteringTechnical