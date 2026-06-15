import React from "react";
import "../../assets/css/home/servicesoverview.css";
import { servicesOverviewData } from "../../Data/home/servicesOverviewData";

const Servicesoverview: React.FC = () => {
  return (
    <section className="services-overview-section">
      <div className="services-overview-container">
        <div className="services-overview-heading">
          <span>Solar Solutions Tailored For You</span>

          <h2>
            Choose Your <strong>Solar Solution</strong>
          </h2>
        </div>

        <div className="services-overview-grid">
          {servicesOverviewData.map((card) => (
            <article className="services-overview-card" key={card.id}>
              <a href={card.link} className="services-overview-card-link">
                <div className="services-overview-image-wrap">
                  <img src={card.image} alt={card.title} loading="lazy" />
                  <div className="services-overview-icon">{card.icon}</div>
                </div>

                <div className="services-overview-content">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <span className="services-overview-arrow">→</span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicesoverview;