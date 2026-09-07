import { Link } from "react-router-dom";

import {
  ArrowRight,
  BadgeCheck,
  BatteryCharging,
  Boxes,
  ShieldCheck,
  ShoppingBag,
  SolarPanel,
  Zap,
} from "lucide-react";

import "../../assets/css/shop/shopHero.css";

import {
  shopHeroData,
  shopHeroStats,
  shopHeroTrustItems,
} from "../../Data/shop/shopHeroData";

const ShopHero = () => {
  return (
    <section className="zs-hero-section">
      <div className="zs-hero-bg-orb zs-hero-bg-orb-one" />
      <div className="zs-hero-bg-orb zs-hero-bg-orb-two" />
      <div className="zs-hero-grid-pattern" />

      <div className="zs-shop-container">
        <div className="zs-hero-grid">

          {/* ==================================================
              LEFT CONTENT
              ================================================== */}

          <div className="zs-hero-content">
            <span className="zs-hero-eyebrow">
              <ShoppingBag size={15} />
              {shopHeroData.eyebrow}
            </span>

            <h1>
              {shopHeroData.title}

              <strong>
                {shopHeroData.highlightedTitle}
              </strong>
            </h1>

            <p className="zs-hero-description">
              {shopHeroData.description}
            </p>

            <div className="zs-hero-actions">
              <a
                href="#shop-products"
                className="zs-hero-primary-btn"
              >
                {shopHeroData.primaryButton}

                <ArrowRight size={17} />
              </a>

              <Link
                to="/quote"
                className="zs-hero-secondary-btn"
              >
                {shopHeroData.secondaryButton}
              </Link>
            </div>

            <div className="zs-hero-trust-row">
              {shopHeroTrustItems.map((item, index) => (
                <span key={item.id}>
                  {index === 0 && (
                    <BadgeCheck size={15} />
                  )}

                  {index === 1 && (
                    <ShieldCheck size={15} />
                  )}

                  {index === 2 && (
                    <Boxes size={15} />
                  )}

                  {item.label}
                </span>
              ))}
            </div>
          </div>


          {/* ==================================================
              RIGHT TRADE HUB VISUAL
              ================================================== */}

          <div className="zs-hero-visual">

            <div className="zs-hero-card zs-hero-card-main">
              <div className="zs-hero-card-top">
                <div className="zs-hero-card-icon">
                  <SolarPanel size={28} />
                </div>

                <span className="zs-hero-card-status">
                  Available
                </span>
              </div>

              <span className="zs-hero-card-label">
                {shopHeroData.featuredCategory.label}
              </span>

              <h3>
                {shopHeroData.featuredCategory.title}
              </h3>

              <p>
                {shopHeroData.featuredCategory.description}
              </p>

              <div className="zs-hero-card-price">
                <small>
                  {shopHeroData.featuredCategory.priceLabel}
                </small>

                <strong>
                  {shopHeroData.featuredCategory.price}
                </strong>
              </div>

              <a
                href="#shop-products"
                className="zs-hero-card-link"
              >
                Browse Panels
                <ArrowRight size={14} />
              </a>
            </div>


            {/* BATTERY */}

            <div className="zs-hero-floating-card zs-hero-floating-card-one">
              <span className="zs-hero-floating-icon">
                <BatteryCharging size={20} />
              </span>

              <div>
                <strong>
                  {shopHeroData.batteryCard.title}
                </strong>

                <span>
                  {shopHeroData.batteryCard.subtitle}
                </span>
              </div>
            </div>


            {/* INVERTER */}

            <div className="zs-hero-floating-card zs-hero-floating-card-two">
              <span className="zs-hero-floating-icon">
                <Zap size={20} />
              </span>

              <div>
                <strong>
                  {shopHeroData.inverterCard.title}
                </strong>

                <span>
                  {shopHeroData.inverterCard.subtitle}
                </span>
              </div>
            </div>


            {/* MARKETPLACE BADGE */}

            <div className="zs-hero-market-badge">
              <BadgeCheck size={15} />

              <div>
                <strong>Trade Hub</strong>
                <span>Products + Engineering</span>
              </div>
            </div>
          </div>
        </div>


        {/* ====================================================
            MARKETPLACE STATS
            ==================================================== */}

        <div className="zs-hero-stats">
          {shopHeroStats.map((item) => (
            <div
              className="zs-hero-stat"
              key={item.id}
            >
              <strong>
                {item.value}
              </strong>

              <span>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopHero;