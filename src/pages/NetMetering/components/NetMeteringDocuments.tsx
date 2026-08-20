import {
  BadgeCheck,
  FileText,
  Home,
  PlugZap,
  ShieldCheck,
  UserRound,
  Zap,
} from "lucide-react";

import "../../../assets/css/netMetering/netMeteringDocuments.css";

import {
  netMeteringDocumentGroups,
  netMeteringDocumentsData,
} from "../../../Data/NetMetering/netMeteringData";

const documentIconMap = {
  customer: UserRound,
  connection: PlugZap,
  technical: FileText,
};

const NetMeteringDocuments = () => {
  return (
    <section className="nm-documents-section">
      <div className="nm-documents-container">
        <div className="nm-documents-header">
          <span className="nm-documents-eyebrow">
            <Zap size={14} />
            {netMeteringDocumentsData.eyebrow}
          </span>

          <h2>
            {netMeteringDocumentsData.title}
            <span>
              {netMeteringDocumentsData.highlightedTitle}
            </span>
          </h2>

          <p>{netMeteringDocumentsData.description}</p>
        </div>

        <div className="nm-documents-grid">
          {netMeteringDocumentGroups.map((group) => {
            const Icon =
              documentIconMap[
                group.icon as keyof typeof documentIconMap
              ];

            return (
              <article
                className="nm-document-card"
                key={group.id}
              >
                <div className="nm-document-card-head">
                  <span className="nm-document-card-icon">
                    <Icon size={20} />
                  </span>

                  <h3>{group.title}</h3>
                </div>

                <div className="nm-document-list">
                  {group.items.map((item) => (
                    <div
                      className="nm-document-item"
                      key={item.id}
                    >
                      <span className="nm-document-check">
                        <BadgeCheck size={15} />
                      </span>

                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="nm-documents-note">
          <ShieldCheck size={17} />

          <div>
            <strong>Documentation Check</strong>
            <p>{netMeteringDocumentsData.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetMeteringDocuments;