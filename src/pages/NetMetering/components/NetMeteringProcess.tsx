import {
  BadgeCheck,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Gauge,
  PenTool,
  Send,
  ShieldCheck,
  Zap,
} from "lucide-react";

import "../../../assets/css/netMetering/netMeteringProcess.css";

import {
  netMeteringProcessData,
  netMeteringProcessSteps,
} from "../../../Data/NetMetering/netMeteringData";

const processIconMap = {
  assessment: ClipboardCheck,
  design: PenTool,
  documents: FileText,
  submission: Send,
  inspection: ShieldCheck,
  meter: Gauge,
  commissioning: FileCheck2,
};

const NetMeteringProcess = () => {
  return (
    <section
      className="nm-process-section"
      id="net-metering-process"
    >
      <div className="nm-process-container">

        <div className="nm-process-header">
          <span className="nm-process-eyebrow">
            <Zap size={14} />
            {netMeteringProcessData.eyebrow}
          </span>

          <h2>
            {netMeteringProcessData.title}

            <span>
              {netMeteringProcessData.highlightedTitle}
            </span>
          </h2>

          <p>{netMeteringProcessData.description}</p>
        </div>


        <div className="nm-process-timeline">
          {netMeteringProcessSteps.map((step, index) => {
            const Icon =
              processIconMap[
                step.icon as keyof typeof processIconMap
              ];

            return (
              <article
                className="nm-process-step"
                key={step.id}
              >
                <div className="nm-process-step-head">
                  <span className="nm-process-step-number">
                    {step.number}
                  </span>

                  <div className="nm-process-step-icon">
                    <Icon size={20} />
                  </div>
                </div>

                <h3>{step.title}</h3>

                <p>{step.text}</p>

                {index <
                  netMeteringProcessSteps.length - 1 && (
                  <span className="nm-process-connector" />
                )}
              </article>
            );
          })}
        </div>


        <div className="nm-process-note">
          <BadgeCheck size={16} />

          <p>{netMeteringProcessData.note}</p>
        </div>

      </div>
    </section>
  );
};

export default NetMeteringProcess;