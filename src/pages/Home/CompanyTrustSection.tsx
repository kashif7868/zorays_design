import "../../assets/css/home/companyTrustSection.css";

const StarIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.8l2.8 5.8 6.4.9-4.6 4.5 1.1 6.3L12 17.3l-5.7 3 1.1-6.3-4.6-4.5 6.4-.9L12 2.8Z" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3 20 6.2v5.7c0 5-3.4 8.4-8 10.1-4.6-1.7-8-5.1-8-10.1V6.2L12 3Z" />
    <path d="m8.8 12 2 2 4.6-5" />
  </svg>
);

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 19V5" />
    <path d="M4 19h16" />
    <path d="m7 15 3.2-3.1 3.2 2 4.6-6" />
    <circle cx="7" cy="15" r="1" />
    <circle cx="10.2" cy="11.9" r="1" />
    <circle cx="13.4" cy="13.9" r="1" />
    <circle cx="18" cy="7.9" r="1" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8.4 4.6 10 8.3 8.1 10c1.2 2.5 3.2 4.5 5.8 5.8l1.7-1.9 3.8 1.6-.5 3.5c-.1.8-.8 1.4-1.6 1.4C9.5 20.4 3.6 14.5 3.6 6.7c0-.8.6-1.5 1.4-1.6l3.4-.5Z" />
  </svg>
);

const GoogleIcon = () => <span className="company-google-icon">G</span>;

const LogoMark = () => (
  <span className="company-zorays-mark">
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
    <svg viewBox="0 0 260 90" preserveAspectRatio="none" aria-hidden="true">
      <path d="M15 62 L70 58 L118 42 L165 53 L212 35 L245 25" />
    </svg>
  </div>
);

const ContactRow = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: React.ReactNode;
}) => (
  <div className="company-contact-row">
    <span className="company-contact-icon">{icon}</span>
    <p>{text}</p>
  </div>
);

const CompanyTrustSection = () => {
  return (
    <section className="company-trust-section">
      <div className="company-trust-sun" />
      <div className="company-trust-panel-bg" />

      <div className="company-trust-container">
        <div className="company-trust-header">
          <div className="company-trust-eyebrow">
            <span>
              <ShieldIcon />
            </span>
            Trusted. Verified. Nationwide.
          </div>

          <h2>
            Why Customers Trust
            <strong> Zorays Solar Pakistan</strong>
          </h2>

          <p>
            Verified reviews, regulatory presence, live analytics, and
            nationwide support — all in one professional solar platform.
          </p>
        </div>

        <div className="company-trust-grid">
          <article className="company-trust-card google-card">
            <div className="company-card-title">
              <GoogleIcon />
              <h3>Google Reviews</h3>
            </div>

            <div className="company-google-business">
              <LogoMark />
              <div>
                <h4>Zorays Solar Pakistan</h4>
                <p>44 T, Lahore</p>
              </div>
            </div>

            <div className="company-review-rating">
              <strong>4.8</strong>
              <div>
                <div className="company-stars">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <span>67 reviews</span>
              </div>
            </div>

            <div className="company-review-person">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
                alt="Google reviewer"
              />

              <div>
                <h5>Muhammad Aqeel A</h5>
                <div className="company-stars small">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <p>a year ago</p>
              </div>
            </div>

            <blockquote>
              Professional team, smooth process, and reliable solar solutions.
            </blockquote>
          </article>

          <article className="company-trust-card compliance-card">
            <div className="company-card-title">
              <span className="company-title-icon">
                <ShieldIcon />
              </span>
              <h3>Registration & Compliance</h3>
            </div>

            <h4>SECP INC 0090517</h4>

            <div className="company-compliance-badge">
              <div className="badge-laurel left" />
              <div className="badge-main">
                <span>★</span>
                <div className="badge-circle">
                  <small>PK</small>
                  <strong>SECP</strong>
                  <em>Registered</em>
                </div>
              </div>
              <div className="badge-laurel right" />
            </div>

            <div className="company-pec-line">PEC 15212 C4/E</div>

            <p>
              Registered and professionally aligned for trusted project
              delivery.
            </p>
          </article>

          <article className="company-trust-card analytics-card">
            <div className="company-card-title analytics-title">
              <span className="company-title-icon">
                <ChartIcon />
              </span>
              <h3>Zorays Realtime Analytics</h3>
            </div>

            <p className="analytics-property">
              GA4 Property: <strong>289319621</strong>
            </p>

            <p className="analytics-loading">Loading live stats...</p>

            <MiniLineChart />

            <div className="payment-box">
              <span className="payment-icon">▣</span>
              <div>
                <h4>Payment Gateway Partner</h4>
                <p>
                  Call to Request: <strong>03248163264</strong>
                </p>
              </div>
            </div>

            <div className="easypaisa-box">
              <span>e</span>
              <strong>easypaisa</strong>
            </div>

            <div className="installment-pill">Solar System on Installments</div>
          </article>

          <article className="company-trust-card contact-card">
            <div className="company-card-title">
              <span className="company-title-icon phone">
                <PhoneIcon />
              </span>
              <h3>Pakistan Wide Contact</h3>
            </div>

            <ContactRow
              icon={<PhoneIcon />}
              text={
                <>
                  <strong>Ph:</strong> 0423 2030405 & 0423 2020320
                </>
              }
            />

            <ContactRow
              icon="WA"
              text={
                <>
                  <strong>Order Queries in Excess of 1 Mega Watt</strong> | WA:
                  0300 8163264
                </>
              }
            />

            <ContactRow
              icon="GE"
              text={
                <>
                  <strong>General Enquiries</strong> | Mob & WA: 0324 8163264 &
                  0332 8163264
                </>
              }
            />

            <ContactRow
              icon="TE"
              text={
                <>
                  <strong>Trade Enquiries</strong> | Mob: 03111163264
                </>
              }
            />

            <ContactRow
              icon="AS"
              text={
                <>
                  <strong>After-Sales Service</strong> Customers only with
                  reference number | Mob & WA: 0320 8163264
                </>
              }
            />
          </article>
        </div>

        <div className="company-trust-strip">
          <div>
            <ShieldIcon />
            <span>Pakistan&apos;s Trusted Solar Energy Partner</span>
          </div>

          <div>
            <StarIcon />
            <span>10+ Years of Excellence</span>
          </div>

          <div>
            <span className="strip-text-icon">👥</span>
            <span>Thousands of Satisfied Customers</span>
          </div>

          <div>
            <span className="strip-text-icon">⚙</span>
            <span>Premium Products Expert Installation</span>
          </div>

          <div>
            <ShieldIcon />
            <span>After Sales Support You Can Rely On</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTrustSection;