import {
  ArrowRight,
  BadgeCheck,
  Building2,
  MapPin,
  Network,
  ShieldCheck,
  Zap,
} from "lucide-react";

import "../../../assets/css/netMetering/netMeteringDiscos.css";

import {
  netMeteringDiscos,
  netMeteringDiscosData,
  netMeteringDiscoSupportPoints,
} from "../../../Data/NetMetering/netMeteringData";

const NetMeteringDiscos = () => {
  return (
    <section className="nm-discos-section">
      <div className="nm-discos-container">

        {/* HEADER */}

        <div className="nm-discos-header">
          <span className="nm-discos-eyebrow">
            <Network size={14} />
            {netMeteringDiscosData.eyebrow}
          </span>

          <h2>
            {netMeteringDiscosData.title}

            <span>
              {netMeteringDiscosData.highlightedTitle}
            </span>
          </h2>

          <p>
            {netMeteringDiscosData.description}
          </p>
        </div>


        {/* MAIN LAYOUT */}

        <div className="nm-discos-layout">

          {/* UTILITY LIST */}

          <div className="nm-discos-grid">
            {netMeteringDiscos.map((disco) => (
              <article
                className="nm-disco-card"
                key={disco.id}
              >
                <div className="nm-disco-card-top">
                  <span className="nm-disco-icon">
                    <Building2 size={18} />
                  </span>

                  <strong>
                    {disco.shortName}
                  </strong>
                </div>

                <h3>{disco.name}</h3>

                <div className="nm-disco-region">
                  <MapPin size={13} />
                  <span>{disco.region}</span>
                </div>
              </article>
            ))}
          </div>


          {/* SUPPORT PANEL */}

          <aside className="nm-discos-support">
            <div className="nm-discos-support-icon">
              <ShieldCheck size={24} />
            </div>

            <span className="nm-discos-support-label">
              Project Support
            </span>

            <h3>
              {netMeteringDiscosData.supportTitle}
            </h3>

            <p>
              {netMeteringDiscosData.supportText}
            </p>

            <div className="nm-discos-support-list">
              {netMeteringDiscoSupportPoints.map((item) => (
                <div key={item}>
                  <BadgeCheck size={14} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="/#multi-step-form"
              className="nm-discos-support-link"
            >
              Start Solar Assessment
              <ArrowRight size={14} />
            </a>
          </aside>
        </div>


        {/* DISCLAIMER */}

        <div className="nm-discos-disclaimer">
          <Zap size={15} />

          <p>
            {netMeteringDiscosData.disclaimer}
          </p>
        </div>

      </div>
    </section>
  );
};

export default NetMeteringDiscos;