import {
  BadgeCheck,
  BarChart3,
  Phone,
  Settings,
  ShieldCheck,
  Star,
  Users,
  MessageCircle,
  Wrench,
  BriefcaseBusiness,
} from "lucide-react";

import "../../assets/css/home/companyTrustSection.css";

import {
  companyReviewData,
  companyComplianceData,
  companyAnalyticsData,
  companyContactData,
  companyTrustStripData,
  companyTrustContent,
} from "../../Data/home/companyTrustData";


// ============================================================
// SMALL UI COMPONENTS
// ============================================================

const GoogleIcon = () => (
  <span className="company-google-icon">G</span>
);

const LogoMark = () => (
  <span className="company-zorays-mark" aria-hidden="true">
    <span />
    <span />
    <span />
  </span>
);

const MiniLineChart = () => (
  <div className="company-mini-chart">
    <span className="chart-dot dot-one" />
    <span className="chart-dot dot-two" />
    <span className="chart-dot dot-three" />
    <span className="chart-dot dot-four" />
    <span className="chart-dot dot-five" />

    <svg
      viewBox="0 0 260 90"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M15 62 L70 58 L118 42 L165 53 L212 35 L245 25" />
    </svg>
  </div>
);


// ============================================================
// CONTACT ICON MAPPING
// ============================================================

const contactIconMap = {
  phone: Phone,
  whatsapp: MessageCircle,
  general: Users,
  trade: BriefcaseBusiness,
  service: Wrench,
};


// ============================================================
// TRUST STRIP ICON MAPPING
// ============================================================

const trustIconMap = {
  shield: ShieldCheck,
  star: Star,
  users: Users,
  settings: Settings,
};


// ============================================================
// CONTACT ROW
// ============================================================

const ContactRow = ({
  icon,
  title,
  text,
}: {
  icon: keyof typeof contactIconMap;
  title: string;
  text: string;
}) => {
  const Icon = contactIconMap[icon];

  return (
    <div className="company-contact-row">
      <span className="company-contact-icon">
        <Icon size={16} />
      </span>

      <p>
        <strong>{title}</strong>
        <span>{text}</span>
      </p>
    </div>
  );
};


// ============================================================
// MAIN COMPONENT
// ============================================================

const CompanyTrustSection = () => {
  return (
    <section className="company-trust-section">
      <div className="company-trust-sun" />
      <div className="company-trust-panel-bg" />

      <div className="company-trust-container">

        {/* ================================================== */}
        {/* HEADER */}
        {/* ================================================== */}

        <div className="company-trust-header">
          <div className="company-trust-eyebrow">
            <span>
              <ShieldCheck size={15} />
            </span>

            {companyTrustContent.eyebrow}
          </div>

          <h2>
            {companyTrustContent.title}

            <strong>
              {" "}
              {companyTrustContent.highlightedTitle}
            </strong>
          </h2>

          <p>
            {companyTrustContent.description}
          </p>
        </div>


        {/* ================================================== */}
        {/* TRUST CARDS */}
        {/* ================================================== */}

        <div className="company-trust-grid">

          {/* GOOGLE REVIEWS */}

          <article className="company-trust-card google-card">
            <div className="company-card-title">
              <GoogleIcon />

              <h3>
                {companyTrustContent.googleTitle}
              </h3>
            </div>

            <div className="company-google-business">
              <LogoMark />

              <div>
                <h4>
                  {companyReviewData.businessName}
                </h4>

                <p>
                  {companyReviewData.address}
                </p>
              </div>
            </div>

            <div className="company-review-rating">
              <strong>
                {companyReviewData.rating}
              </strong>

              <div>
                <div className="company-stars">
                  {Array.from({ length: 5 }).map(
                    (_, index) => (
                      <Star
                        key={index}
                        size={15}
                        fill="currentColor"
                      />
                    )
                  )}
                </div>

                <span>
                  {companyReviewData.reviewCount} reviews
                </span>
              </div>
            </div>

            <div className="company-review-person">
              <img
                src={
                  companyReviewData.reviewerImage
                }
                alt={
                  companyReviewData.reviewerName
                }
                loading="lazy"
              />

              <div>
                <h5>
                  {companyReviewData.reviewerName}
                </h5>

                <div className="company-stars small">
                  {Array.from({
                    length:
                      companyReviewData.reviewerRating,
                  }).map((_, index) => (
                    <Star
                      key={index}
                      size={12}
                      fill="currentColor"
                    />
                  ))}
                </div>

                <p>
                  {companyReviewData.reviewAge}
                </p>
              </div>
            </div>

            <blockquote>
              {companyReviewData.reviewText}
            </blockquote>
          </article>


          {/* COMPLIANCE */}

          <article className="company-trust-card compliance-card">
            <div className="company-card-title">
              <span className="company-title-icon">
                <ShieldCheck size={17} />
              </span>

              <h3>
                {companyTrustContent.complianceTitle}
              </h3>
            </div>

            <h4>
              {companyComplianceData.secp}
            </h4>

            <div className="company-compliance-badge">
              <div className="badge-laurel left" />

              <div className="badge-main">
                <span>★</span>

                <div className="badge-circle">
                  <small>
                    {companyComplianceData.countryCode}
                  </small>

                  <strong>SECP</strong>

                  <em>
                    {
                      companyComplianceData.registrationLabel
                    }
                  </em>
                </div>
              </div>

              <div className="badge-laurel right" />
            </div>

            <div className="company-pec-line">
              {companyComplianceData.pec}
            </div>

            <p>
              {companyComplianceData.description}
            </p>
          </article>


          {/* ANALYTICS */}

          <article className="company-trust-card analytics-card">
            <div className="company-card-title analytics-title">
              <span className="company-title-icon">
                <BarChart3 size={17} />
              </span>

              <h3>
                {companyTrustContent.analyticsTitle}
              </h3>
            </div>

            <p className="analytics-property">
              GA4 Property:{" "}
              <strong>
                {companyAnalyticsData.propertyId}
              </strong>
            </p>

            <p className="analytics-loading">
              {companyAnalyticsData.status}
            </p>

            <MiniLineChart />

            <div className="payment-box">
              <span className="payment-icon">
                <BadgeCheck size={17} />
              </span>

              <div>
                <h4>
                  {companyTrustContent.paymentTitle}
                </h4>

                <p>
                  Call to Request:{" "}
                  <strong>
                    {
                      companyAnalyticsData.paymentPhone
                    }
                  </strong>
                </p>
              </div>
            </div>

            <div className="easypaisa-box">
              <span>e</span>

              <strong>
                {companyAnalyticsData.paymentPartner}
              </strong>
            </div>

            <div className="installment-pill">
              {companyAnalyticsData.installmentLabel}
            </div>
          </article>


          {/* CONTACT */}

          <article className="company-trust-card contact-card">
            <div className="company-card-title">
              <span className="company-title-icon phone">
                <Phone size={17} />
              </span>

              <h3>
                {companyTrustContent.contactTitle}
              </h3>
            </div>

            <div className="company-contact-list">
              {companyContactData.map((item) => (
                <ContactRow
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  text={item.text}
                />
              ))}
            </div>
          </article>
        </div>


        {/* ================================================== */}
        {/* BOTTOM TRUST STRIP */}
        {/* ================================================== */}

        <div className="company-trust-strip">
          {companyTrustStripData.map((item) => {
            const Icon =
              trustIconMap[item.icon];

            return (
              <div
                key={item.id}
                className="company-trust-strip-item"
              >
                <span className="company-trust-strip-icon">
                  <Icon size={17} />
                </span>

                <span>{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompanyTrustSection;