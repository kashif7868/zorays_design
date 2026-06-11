import React from "react";
import "../../assets/css/home/heroSection.css";

type ZspHeroTrustCard = {
  id: number;
  icon: React.ReactNode;
  title: string;
  text: string;
};

const zspHeroTrustCards: ZspHeroTrustCard[] = [
  {
    id: 1,
    icon: <span className="zsp-home-hero-trust-badge-text">10+</span>,
    title: "10+ Years Experience",
    text: "Proven track record of quality & reliability",
  },
  {
    id: 2,
    icon: "⌁",
    title: "Net Metering Support",
    text: "Maximize savings with Net Metering solutions",
  },
  {
    id: 3,
    icon: "⚡",
    title: "Hybrid Backup Solutions",
    text: "Uninterrupted power with smart hybrid systems",
  },
  {
    id: 4,
    icon: "▥",
    title: "Commercial & Residential Solar",
    text: "Tailored solar solutions for every need",
  },
];

const zspHeroBg =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=90";

const HeroSection: React.FC = () => {
  return (
    <section className="zsp-home-hero-section">
      <div
        className="zsp-home-hero-bg"
        style={{ backgroundImage: `url(${zspHeroBg})` }}
      >
        <div className="zsp-home-hero-overlay" />

        <div className="zsp-home-hero-container">
          <div className="zsp-home-hero-content">
            <div className="zsp-home-hero-badge">
              <span className="zsp-home-hero-badge-icon">☀</span>
              Smart Solar For A Brighter Pakistan
            </div>

            <h1 className="zsp-home-hero-title">
              Power Your Home
              <br />
              With <span>Smart Solar Energy</span>
            </h1>

            <p className="zsp-home-hero-description">
              Premium solar, hybrid backup, and net metering solutions
              engineered for Pakistan&apos;s power environment.
            </p>

            <div className="zsp-home-hero-actions">
              <a
                href="/contact"
                className="zsp-home-hero-btn zsp-home-hero-btn-primary"
              >
                <span>▣</span>
                Get Free Solar Assessment
              </a>

              <a
                href="/solar-packages"
                className="zsp-home-hero-btn zsp-home-hero-btn-secondary"
              >
                <span>▣</span>
                View Solar Packages
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="zsp-home-hero-trust-wrapper">
        <div className="zsp-home-hero-trust-card">
          {zspHeroTrustCards.map((card) => (
            <div className="zsp-home-hero-trust-item" key={card.id}>
              <div className="zsp-home-hero-trust-icon">{card.icon}</div>

              <div className="zsp-home-hero-trust-content">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;