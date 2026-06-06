import React from "react";
import "../../assets/css/home/servicesoverview.css";

type ServiceCard = {
  id: number;
  image: string;
  title: string;
  text: string;
  icon: string;
  link: string;
};

const serviceCards: ServiceCard[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=700&q=80",
    title: "Solar Net Metering",
    text: "Generate your own electricity and reduce your monthly bills.",
    icon: "☀️",
    link: "/solar-net-metering",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=700&q=80",
    title: "Solar Backup",
    text: "Reliable power backup for homes and businesses.",
    icon: "🔋",
    link: "/solar-backup",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80",
    title: "Solar Tubewell",
    text: "Efficient solar water pumping for agriculture & farms.",
    icon: "🚰",
    link: "/solar-tubewell",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1584276433295-4b49a252e5ee?auto=format&fit=crop&w=700&q=80",
    title: "Commercial Solar",
    text: "Scalable solar solutions for industries & commercial setups.",
    icon: "🏢",
    link: "/commercial-solar",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&w=700&q=80",
    title: "Solar Shop",
    text: "Shop premium solar products at the best prices.",
    icon: "🛒",
    link: "/solar-shop",
  },
];

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
          {serviceCards.map((card) => (
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