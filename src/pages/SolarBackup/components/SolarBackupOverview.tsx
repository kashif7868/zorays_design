import {
  ArrowRight,
  BatteryCharging,
  CheckCircle2,
  Zap,
} from "lucide-react";

import "../../../assets/css/solarBackup/solarBackupOverview.css";

import {
  solarBackupData,
} from "../../../Data/SolarBackup/solarBackupData";

const SolarBackupOverview = () => {
  return (
    <section className="sb-overview-section">
      <div className="sb-overview-container">
        <div className="sb-overview-card">

          <div className="sb-overview-content">
            <span className="sb-overview-eyebrow">
              <Zap size={14} />
              {solarBackupData.eyebrow}
            </span>

            <h1>
              {solarBackupData.title}

              <span>
                {solarBackupData.highlightedTitle}
              </span>
            </h1>

            <p className="sb-overview-description">
              {solarBackupData.description}
            </p>

            <div className="sb-overview-points">
              {solarBackupData.points.map((item) => (
                <div key={item}>
                  <CheckCircle2 size={15} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="sb-overview-actions">
              <a
                href="/#multi-step-form"
                className="sb-overview-primary"
              >
                {solarBackupData.primaryButton}
                <ArrowRight size={15} />
              </a>

              <a
                href="/zorays-shop"
                className="sb-overview-secondary"
              >
                {solarBackupData.secondaryButton}
              </a>
            </div>
          </div>

          <div className="sb-overview-visual">
            <img
              src={solarBackupData.image}
              alt={solarBackupData.imageAlt}
              loading="eager"
            />

            <div className="sb-overview-battery-card">
              <BatteryCharging size={20} />

              <div>
                <strong>Solar + Battery</strong>
                <span>Backup when you need it</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolarBackupOverview;