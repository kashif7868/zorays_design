import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BatteryCharging,
  ShieldCheck,
  ShoppingBag,
  SolarPanel,
  Zap,
} from "lucide-react";
import "../../assets/css/shop/shopHero.css";

const ShopHero = () => {
  return (
    <section className="zs-hero-section">
      <div className="zs-hero-bg-orb zs-hero-bg-orb-one" />
      <div className="zs-hero-bg-orb zs-hero-bg-orb-two" />

      <div className="zs-shop-container">
        <div className="zs-hero-grid">
          <div className="zs-hero-content">
            <span className="zs-hero-eyebrow">
              <ShoppingBag size={16} />
              Zorays Solar Shop
            </span>

            <h1>
              Buy Solar Products With <strong>Trusted Engineering Support</strong>
            </h1>

            <p>
              Explore solar panels, hybrid inverters, lithium batteries, cables,
              protection boxes, and complete solar accessories for residential,
              commercial, and agricultural projects.
            </p>

            <div className="zs-hero-actions">
              <a href="#shop-products" className="zs-hero-primary-btn">
                Explore Products
                <ArrowRight size={18} />
              </a>

              <Link to="/quote" className="zs-hero-secondary-btn">
                Get Solar Quote
              </Link>
            </div>

            <div className="zs-hero-trust-row">
              <span>
                <BadgeCheck size={16} />
                Verified Products
              </span>

              <span>
                <ShieldCheck size={16} />
                Zorays Support
              </span>

              <span>
                <Zap size={16} />
                Fast Inquiry
              </span>
            </div>
          </div>

          <div className="zs-hero-visual">
            <div className="zs-hero-card zs-hero-card-main">
              <div className="zs-hero-card-icon">
                <SolarPanel size={30} />
              </div>

              <span>Featured Category</span>
              <h3>Solar Panels</h3>
              <p>
                High-efficiency N-Type and bifacial modules for modern solar systems.
              </p>

              <div className="zs-hero-card-price">
                <small>Starting From</small>
                <strong>Rs. 29,915</strong>
              </div>
            </div>

            <div className="zs-hero-floating-card zs-hero-floating-card-one">
              <BatteryCharging size={22} />
              <div>
                <strong>Lithium Backup</strong>
                <span>Smart energy storage</span>
              </div>
            </div>

            <div className="zs-hero-floating-card zs-hero-floating-card-two">
              <Zap size={22} />
              <div>
                <strong>Hybrid Inverters</strong>
                <span>Backup + solar charging</span>
              </div>
            </div>
          </div>
        </div>

        <div className="zs-hero-stats">
          <div className="zs-hero-stat">
            <strong>10+</strong>
            <span>Years Experience</span>
          </div>

          <div className="zs-hero-stat">
            <strong>500+</strong>
            <span>Solar Projects</span>
          </div>

          <div className="zs-hero-stat">
            <strong>24/7</strong>
            <span>Sales Inquiry</span>
          </div>

          <div className="zs-hero-stat">
            <strong>PK</strong>
            <span>Nationwide Supply</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopHero;