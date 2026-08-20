import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Gauge,
  ShieldCheck,
  Zap,
} from "lucide-react";

import "../../../assets/css/NetMetering/netMeteringHero.css";

import {
  netMeteringHeroData,
  netMeteringHeroTrustPoints,
  netMeteringStats,
} from "../../../Data/NetMetering/netMeteringData";

const NetMeteringHero = () => {
  return (
    <section className="nm-hero-section">
      {/* =====================================================
          BACKGROUND DECORATION
          ===================================================== */}

      <div className="nm-hero-glow nm-hero-glow-left" />
      <div className="nm-hero-glow nm-hero-glow-right" />
      <div className="nm-hero-grid-pattern" />

      {/* =====================================================
          MAIN CONTAINER
          ===================================================== */}

      <div className="nm-hero-container">
        <div className="nm-hero-layout">
          {/* =================================================
              LEFT CONTENT
              ================================================= */}

          <div className="nm-hero-content">
            <span className="nm-hero-eyebrow">
              <Zap size={14} />
              {netMeteringHeroData.eyebrow}
            </span>

            <h1 className="nm-hero-title">
              {netMeteringHeroData.title}

              <span>{netMeteringHeroData.highlightedTitle}</span>
            </h1>

            <p className="nm-hero-description">
              {netMeteringHeroData.description}
            </p>

            {/* =================================================
                CTA BUTTONS
                ================================================= */}

            <div className="nm-hero-actions">
              <a
                href="/#multi-step-form"
                className="nm-hero-primary-btn"
              >
                {netMeteringHeroData.primaryCta}
                <ArrowRight size={16} />
              </a>

              <a
                href="#net-metering-intro"
                className="nm-hero-secondary-btn"
              >
                {netMeteringHeroData.secondaryCta}
                <ArrowDown size={15} />
              </a>
            </div>

            {/* =================================================
                TRUST POINTS
                ================================================= */}

            <div className="nm-hero-trust-list">
              {netMeteringHeroTrustPoints.map((item) => (
                <div
                  className="nm-hero-trust-item"
                  key={item.id}
                >
                  <span>
                    <BadgeCheck size={15} />
                  </span>

                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
              RIGHT VISUAL
              ================================================= */}

          <div className="nm-hero-visual">
            <div className="nm-hero-image-frame">
              <img
                src={netMeteringHeroData.image}
                alt={netMeteringHeroData.imageAlt}
                loading="eager"
              />

              <div className="nm-hero-image-overlay" />

              {/* =============================================
                  IMAGE LABEL
                  ============================================= */}

              <div className="nm-hero-image-label">
                <ShieldCheck size={16} />

                <div>
                  <strong>
                    {netMeteringHeroData.imageLabelTitle}
                  </strong>

                  <span>
                    {netMeteringHeroData.imageLabelText}
                  </span>
                </div>
              </div>
            </div>

            {/* =================================================
                FLOATING IMPORT / EXPORT CARD
                ================================================= */}

            <div className="nm-meter-card">
              <div className="nm-meter-card-icon">
                <Gauge size={21} />
              </div>

              <div className="nm-meter-card-copy">
                <span>{netMeteringHeroData.meterTitle}</span>

                <strong>
                  {netMeteringHeroData.meterImportLabel}

                  <b>↔</b>

                  {netMeteringHeroData.meterExportLabel}
                </strong>
              </div>
            </div>

            {/* =================================================
                ENERGY FLOW MINI CARD
                ================================================= */}

            <div className="nm-energy-flow-card">
              <div>
                <span className="nm-energy-dot solar" />

                <small>
                  {netMeteringHeroData.energyFlow.solar}
                </small>
              </div>

              <span className="nm-energy-flow-line">
                →
              </span>

              <div>
                <span className="nm-energy-dot home" />

                <small>
                  {netMeteringHeroData.energyFlow.property}
                </small>
              </div>

              <span className="nm-energy-flow-line">
                ↔
              </span>

              <div>
                <span className="nm-energy-dot grid" />

                <small>
                  {netMeteringHeroData.energyFlow.grid}
                </small>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATS
            ===================================================== */}

        <div className="nm-hero-stats">
          {netMeteringStats.map((item) => (
            <article
              className="nm-hero-stat"
              key={item.id}
            >
              <strong>{item.value}</strong>

              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetMeteringHero;