import {
  BadgeAlert,
  FileWarning,
  Gauge,
  HardHat,
  Network,
  PlugZap,
  ShieldAlert,
  Zap,
} from "lucide-react";

import "../../../assets/css/netMetering/netMeteringIssues.css";

import {
  netMeteringIssues,
  netMeteringIssuesData,
} from "../../../Data/NetMetering/netMeteringData";

const issueIconMap = {
  documents: FileWarning,
  load: PlugZap,
  technical: ShieldAlert,
  inspection: HardHat,
  meter: Gauge,
  coordination: Network,
};

const NetMeteringIssues = () => {
  return (
    <section className="nm-issues-section">
      <div className="nm-issues-container">
        <div className="nm-issues-header">
          <span className="nm-issues-eyebrow">
            <BadgeAlert size={14} />
            {netMeteringIssuesData.eyebrow}
          </span>

          <h2>
            {netMeteringIssuesData.title}

            <span>
              {netMeteringIssuesData.highlightedTitle}
            </span>
          </h2>

          <p>{netMeteringIssuesData.description}</p>
        </div>

        <div className="nm-issues-grid">
          {netMeteringIssues.map((item, index) => {
            const Icon =
              issueIconMap[
                item.icon as keyof typeof issueIconMap
              ];

            return (
              <article
                className="nm-issue-card"
                key={item.id}
              >
                <div className="nm-issue-card-top">
                  <span className="nm-issue-icon">
                    <Icon size={20} />
                  </span>

                  <span className="nm-issue-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            );
          })}
        </div>

        <div className="nm-issues-note">
          <Zap size={15} />

          <p>{netMeteringIssuesData.note}</p>
        </div>
      </div>
    </section>
  );
};

export default NetMeteringIssues;