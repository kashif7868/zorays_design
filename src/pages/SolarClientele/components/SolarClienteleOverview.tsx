import {
  ArrowRight,
  BadgeCheck,
  MapPin,
  ShieldCheck,
} from "lucide-react";

import "../../../assets/css/solarClientele/solarClienteleOverview.css";

import {
  solarClientCities,
  solarClientRecords,
  solarClienteleData,
} from "../../../Data/SolarClientele/solarClienteleData";

const SolarClienteleOverview = () => {
  return (
    <section className="sc-overview-section">
      <div className="sc-overview-container">

        <div className="sc-overview-header">
          <span className="sc-overview-eyebrow">
            <BadgeCheck size={14} />
            {solarClienteleData.eyebrow}
          </span>

          <h1>
            {solarClienteleData.title}

            <span>
              {solarClienteleData.highlightedTitle}
            </span>
          </h1>

          <p>
            {solarClienteleData.description}
          </p>
        </div>

        <div className="sc-overview-grid">
          {solarClientCities.map((item) => (
            <article
              className="sc-city-card"
              key={item.id}
            >
              <div className="sc-city-main">
                <img
                  src={item.image}
                  alt={`${item.city} solar clientele`}
                  loading="lazy"
                />

                <div className="sc-city-overlay" />

                <div className="sc-city-label">
                  <MapPin size={15} />
                  <span>{item.city}</span>
                </div>
              </div>

              <div className="sc-city-project">
                <img
                  src={item.projectImage}
                  alt={`${item.city} solar installation`}
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>

        <div className="sc-overview-note">
          <ShieldCheck size={16} />

          <p>
            {solarClienteleData.note}
          </p>
        </div>

        <div className="sc-overview-table-wrap">
          <table className="sc-overview-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Date</th>
                <th>Client Name</th>
                <th>License / Reference</th>
              </tr>
            </thead>

            <tbody>
              {solarClientRecords.map((item) => (
                <tr key={item.id}>
                  <td>{item.year}</td>
                  <td>{item.date}</td>
                  <td>{item.clientName}</td>
                  <td>{item.licenseTitle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="sc-overview-actions">
          <a
            href="/#multi-step-form"
            className="sc-overview-primary"
          >
            {solarClienteleData.primaryButton}
            <ArrowRight size={15} />
          </a>

          <a
            href="/#multi-step-form"
            className="sc-overview-secondary"
          >
            {solarClienteleData.secondaryButton}
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolarClienteleOverview;