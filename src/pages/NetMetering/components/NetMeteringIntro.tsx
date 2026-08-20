import {
  ArrowDownLeft,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Grid3X3,
  Sun,
} from "lucide-react";

import "../../../assets/css/NetMetering/netMeteringIntro.css";

import {
  netMeteringIntroData,
  netMeteringIntroPoints,
} from "../../../Data/NetMetering/netMeteringData";

const NetMeteringIntro = () => {
  return (
    <section
      className="nm-intro-section"
      id="net-metering-intro"
    >
      <div className="nm-intro-container">
        <div className="nm-intro-layout">
          <div className="nm-intro-visual">
            <div className="nm-intro-image-wrap">
              <img
                src={netMeteringIntroData.image}
                alt={netMeteringIntroData.imageAlt}
                loading="lazy"
              />

              <div className="nm-intro-image-overlay" />
            </div>

            <div className="nm-intro-flow-card">
              <div className="nm-intro-flow-node">
                <span className="nm-intro-flow-icon solar">
                  <Sun size={18} />
                </span>

                <small>
                  {netMeteringIntroData.diagram.solar}
                </small>
              </div>

              <ArrowUpRight
                size={17}
                className="nm-intro-flow-arrow"
              />

              <div className="nm-intro-flow-node">
                <span className="nm-intro-flow-icon property">
                  <Building2 size={18} />
                </span>

                <small>
                  {netMeteringIntroData.diagram.property}
                </small>
              </div>

              <div className="nm-intro-flow-split">
                <div>
                  <ArrowUpRight size={14} />
                  <span>
                    {netMeteringIntroData.diagram.exportLabel}
                  </span>
                </div>

                <div>
                  <ArrowDownLeft size={14} />
                  <span>
                    {netMeteringIntroData.diagram.importLabel}
                  </span>
                </div>
              </div>

              <div className="nm-intro-flow-node">
                <span className="nm-intro-flow-icon grid">
                  <Grid3X3 size={18} />
                </span>

                <small>
                  {netMeteringIntroData.diagram.grid}
                </small>
              </div>
            </div>
          </div>

          <div className="nm-intro-content">
            <span className="nm-intro-eyebrow">
              <BadgeCheck size={14} />
              {netMeteringIntroData.eyebrow}
            </span>

            <h2>
              {netMeteringIntroData.title}
              <span>
                {netMeteringIntroData.highlightedTitle}
              </span>
            </h2>

            <p className="nm-intro-lead">
              {netMeteringIntroData.description}
            </p>

            <p className="nm-intro-secondary">
              {netMeteringIntroData.secondaryText}
            </p>

            <div className="nm-intro-points">
              {netMeteringIntroPoints.map((item) => (
                <article
                  className="nm-intro-point"
                  key={item.id}
                >
                  <span className="nm-intro-point-check">
                    <BadgeCheck size={15} />
                  </span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetMeteringIntro;