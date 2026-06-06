import React from "react";
import "../../assets/css/home/heroSection.css";

type TrustCard = {
  id: number;
  icon: React.ReactNode;
  title: string;
  text: string;
};

const trustCards: TrustCard[] = [
  {
    id: 1,
    icon: <span className="trust-badge-text">10+</span>,
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

const heroBg =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=90";

const HeroSection: React.FC = () => {
  return (
    <section className="zorays-hero-section">
      <div
        className="zorays-hero-bg"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="zorays-hero-green-overlay" />

        <div className="zorays-hero-container">
          <div className="zorays-hero-content">
            <div className="zorays-hero-badge">
              <span>☀</span>
              Smart Solar For A Brighter Pakistan
            </div>

            <h1>
              Power Your Home
              <br />
              With <span>Smart Solar Energy</span>
            </h1>

            <p>
              Premium solar, hybrid backup, and net metering solutions
              engineered for Pakistan&apos;s power environment.
            </p>

            <div className="zorays-hero-buttons">
              <a href="/contact" className="hero-btn hero-btn-primary">
                <span>▣</span>
                Get Free Solar Assessment
              </a>

              <a href="/solar-packages" className="hero-btn hero-btn-secondary">
                <span>▣</span>
                View Solar Packages
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="zorays-trust-wrapper">
        <div className="zorays-trust-card">
          {trustCards.map((card) => (
            <div className="zorays-trust-item" key={card.id}>
              <div className="zorays-trust-icon">{card.icon}</div>

              <div className="zorays-trust-text">
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