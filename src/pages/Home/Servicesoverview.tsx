import React from "react";
import { Link } from "react-router-dom";

import "../../assets/css/home/servicesoverview.css";
import { servicesOverviewData } from "../../Data/home/servicesOverviewData";

const Servicesoverview: React.FC = () => {
  return (
    <section className="services-overview-section">
      <div className="services-overview-container">

        <div className="services-overview-heading">
          <span className="services-overview-eyebrow">
            Solar Solutions Tailored For You
          </span>

          <h2>
            Choose Your <strong>Solar Solution</strong>
          </h2>

          <p>
            Explore practical solar solutions designed for homes,
            businesses, agriculture and commercial applications.
          </p>
        </div>

        <div className="services-overview-grid">
          {servicesOverviewData.map((card) => (
            <article
              className="services-overview-card"
              key={card.id}
            >
              <Link
                to={card.link}
                className="services-overview-card-link"
                aria-label={`Explore ${card.title}`}
              >
                <div className="services-overview-image-wrap">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                  />

                  <div className="services-overview-image-overlay" />

                  {card.badge && (
                    <span className="services-overview-badge">
                      {card.badge}
                    </span>
                  )}

                  <div className="services-overview-icon">
                    {card.icon}
                  </div>
                </div>

                <div className="services-overview-content">
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>

                  <div className="services-overview-footer">
                    <span>Explore Solution</span>

                    <span className="services-overview-arrow">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicesoverview;