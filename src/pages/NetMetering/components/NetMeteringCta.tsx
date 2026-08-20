import {
  ArrowRight,
  BadgeCheck,
  Phone,
  ShieldCheck,
  Sun,
} from "lucide-react";

import "../../../assets/css/netMetering/netMeteringCta.css";

import {
  netMeteringCtaData,
} from "../../../Data/NetMetering/netMeteringData";

const NetMeteringCta = () => {
  return (
    <section className="nm-cta-section">
      <div className="nm-cta-container">
        <div className="nm-cta-card">

          <div className="nm-cta-decoration nm-cta-decoration-one" />
          <div className="nm-cta-decoration nm-cta-decoration-two" />

          <div className="nm-cta-content">

            <span className="nm-cta-eyebrow">
              <Sun size={14} />
              {netMeteringCtaData.eyebrow}
            </span>

            <h2>
              {netMeteringCtaData.title}

              <span>
                {netMeteringCtaData.highlightedTitle}
              </span>
            </h2>

            <p>
              {netMeteringCtaData.description}
            </p>

            <div className="nm-cta-trust-list">
              {netMeteringCtaData.trustPoints.map((item) => (
                <div key={item}>
                  <BadgeCheck size={14} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>

          <div className="nm-cta-actions">

            <div className="nm-cta-shield">
              <ShieldCheck size={25} />

              <div>
                <strong>Professional Solar Support</strong>
                <span>
                  From assessment to commissioning
                </span>
              </div>
            </div>

            <a
              href="/#multi-step-form"
              className="nm-cta-primary"
            >
              {netMeteringCtaData.primaryButton}
              <ArrowRight size={16} />
            </a>

            <a
              href={netMeteringCtaData.phoneHref}
              className="nm-cta-secondary"
            >
              <Phone size={15} />

              <div>
                <span>
                  {netMeteringCtaData.secondaryButton}
                </span>

                <strong>
                  {netMeteringCtaData.phone}
                </strong>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default NetMeteringCta;