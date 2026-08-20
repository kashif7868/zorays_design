import {
  ArrowRight,
  BatteryCharging,
  BadgeCheck,
  Check,
  Grid2X2,
  ShieldCheck,
  Sun,
  Zap,
} from "lucide-react";

import "../../../assets/css/netMetering/netMeteringSystems.css";

import {
  netMeteringSystemsData,
  netMeteringSystemTypes,
} from "../../../Data/NetMetering/netMeteringData";

const systemIconMap = {
  "on-grid": Grid2X2,
  hybrid: BatteryCharging,
};

const NetMeteringSystems = () => {
  return (
    <section className="nm-systems-section">
      <div className="nm-systems-container">

        {/* HEADER */}

        <div className="nm-systems-header">
          <span className="nm-systems-eyebrow">
            <Zap size={14} />
            {netMeteringSystemsData.eyebrow}
          </span>

          <h2>
            {netMeteringSystemsData.title}

            <span>
              {netMeteringSystemsData.highlightedTitle}
            </span>
          </h2>

          <p>{netMeteringSystemsData.description}</p>
        </div>


        {/* SYSTEM CARDS */}

        <div className="nm-systems-grid">
          {netMeteringSystemTypes.map((system) => {
            const Icon = systemIconMap[system.id as keyof typeof systemIconMap];

            return (
              <article
                className={`nm-system-card nm-system-card--${system.id}`}
                key={system.id}
              >
                <div className="nm-system-card-top">
                  <div className="nm-system-icon">
                    <Icon size={23} />
                  </div>

                  <div className="nm-system-heading">
                    <span>{system.shortLabel}</span>
                    <h3>{system.name}</h3>
                  </div>

                  <span className="nm-system-badge">
                    <BadgeCheck size={13} />
                    {system.badge}
                  </span>
                </div>

                <p className="nm-system-description">
                  {system.description}
                </p>


                {/* SIMPLE ENERGY FLOW */}

                <div className="nm-system-flow">
                  <div>
                    <span className="nm-system-flow-icon solar">
                      <Sun size={17} />
                    </span>

                    <small>Solar</small>
                  </div>

                  <ArrowRight size={15} />

                  <div>
                    <span className="nm-system-flow-icon property">
                      <Zap size={17} />
                    </span>

                    <small>Load</small>
                  </div>

                  {system.id === "hybrid" && (
                    <>
                      <ArrowRight size={15} />

                      <div>
                        <span className="nm-system-flow-icon battery">
                          <BatteryCharging size={17} />
                        </span>

                        <small>Battery</small>
                      </div>
                    </>
                  )}

                  <ArrowRight size={15} />

                  <div>
                    <span className="nm-system-flow-icon grid">
                      <Grid2X2 size={17} />
                    </span>

                    <small>Grid</small>
                  </div>
                </div>


                {/* IDEAL FOR */}

                <div className="nm-system-block">
                  <span className="nm-system-block-label">
                    Ideal For
                  </span>

                  <div className="nm-system-ideal-list">
                    {system.idealFor.map((item) => (
                      <div key={item}>
                        <ShieldCheck size={14} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>


                {/* FEATURES */}

                <div className="nm-system-block">
                  <span className="nm-system-block-label">
                    Key Features
                  </span>

                  <div className="nm-system-feature-list">
                    {system.features.map((feature) => (
                      <div key={feature}>
                        <span>
                          <Check size={12} />
                        </span>

                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>


                {/* NOTE */}

                <div className="nm-system-note">
                  <strong>Important</strong>
                  <p>{system.note}</p>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default NetMeteringSystems;