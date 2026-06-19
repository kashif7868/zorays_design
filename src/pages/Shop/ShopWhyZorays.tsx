import {
  BadgeCheck,
  ClipboardCheck,
  Headphones,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  Wrench,
} from "lucide-react";
import "../../assets/css/shop/shopWhyZorays.css";

const whyCards = [
  {
    icon: <BadgeCheck size={24} />,
    title: "Verified Product Selection",
    desc: "Products are selected for practical solar use, inverter compatibility, and long-term system reliability.",
  },
  {
    icon: <Wrench size={24} />,
    title: "Engineering Support",
    desc: "Our team can guide you on panels, inverter sizing, battery backup, cable selection, and protection accessories.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Safe System Planning",
    desc: "We focus on correct product matching, protection equipment, wiring safety, and installation-ready planning.",
  },
  {
    icon: <Headphones size={24} />,
    title: "Fast Sales Assistance",
    desc: "Get product information, availability confirmation, and quotation support before placing a final order.",
  },
];

const processSteps = [
  {
    count: "01",
    title: "Select Product",
    desc: "Choose panels, inverters, batteries, cables, or accessories.",
  },
  {
    count: "02",
    title: "Add to Cart",
    desc: "Review quantity and product selection before checkout.",
  },
  {
    count: "03",
    title: "Send Inquiry",
    desc: "Submit your order request for confirmation and final pricing.",
  },
  {
    count: "04",
    title: "Zorays Support",
    desc: "Our team confirms product availability, delivery, and technical fit.",
  },
];

const ShopWhyZorays = () => {
  return (
    <section className="zsw-section">
      <div className="zsw-bg-orb zsw-bg-orb-one" />
      <div className="zsw-bg-orb zsw-bg-orb-two" />

      <div className="zs-shop-container">
        <div className="zsw-header">
          <div>
            <span className="zsw-eyebrow">
              <Sparkles size={16} />
              Why Shop With Zorays
            </span>

            <h2>More Than Products — Complete Solar Guidance</h2>
          </div>

          <p>
            Zorays Solar shop is designed for customers who need reliable solar
            products with proper technical guidance before purchase.
          </p>
        </div>

        <div className="zsw-grid">
          {whyCards.map((card) => (
            <article className="zsw-card" key={card.title}>
              <div className="zsw-card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </article>
          ))}
        </div>

        <div className="zsw-process-panel">
          <div className="zsw-process-content">
            <span className="zsw-process-badge">
              <ShoppingBag size={16} />
              Simple Buying Flow
            </span>

            <h3>From Product Selection to Technical Confirmation</h3>

            <p>
              The shop helps customers shortlist products quickly, while Zorays
              Solar verifies the technical requirements before final delivery or
              installation.
            </p>

            <div className="zsw-mini-features">
              <span>
                <ClipboardCheck size={15} />
                Requirement Review
              </span>

              <span>
                <Truck size={15} />
                Delivery Confirmation
              </span>

              <span>
                <ShieldCheck size={15} />
                Safety Focused
              </span>
            </div>
          </div>

          <div className="zsw-steps">
            {processSteps.map((step) => (
              <div className="zsw-step" key={step.count}>
                <strong>{step.count}</strong>

                <div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopWhyZorays;