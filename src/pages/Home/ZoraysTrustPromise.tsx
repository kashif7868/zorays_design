import {
  ShieldCheck,
  Handshake,
  BadgeDollarSign,
  RefreshCcw,
  Users,
  Headphones,
  ClipboardCheck,
  PenTool,
  CheckCircle2,
  Settings,
  Zap,
  BarChart3,
  FileCheck,
} from "lucide-react";
import "../../assets/css/home/ZoraysTrustPromise.css";

type TrustPromise = {
  icon: React.ElementType;
  title: string;
  text: string;
};

type ProcessStep = {
  number: string;
  title: string;
  icon: React.ElementType;
};

const trustPromises: TrustPromise[] = [
  {
    icon: ShieldCheck,
    title: "Unmatched Quality",
    text: "We deliver only premium equipment — no cheap wires, no fake breakers, and no shortcuts.",
  },
  {
    icon: Handshake,
    title: "Trusted Tier-2 Resellers",
    text: "As reliable Tier-2 resellers, we maintain an intact supply chain, strengthened by strategic partnerships with top manufacturers.",
  },
  {
    icon: BadgeDollarSign,
    title: "Price Match Guarantee",
    text: "Found a better price? We’ll match it so you never have to go elsewhere.",
  },
  {
    icon: RefreshCcw,
    title: "Hassle-Free Replacements",
    text: "If something fails, we replace it for free — no excuses, no delays.",
  },
  {
    icon: Users,
    title: "Earn While You Refer",
    text: "Refer friends and family, and get rewarded — every single time.",
  },
  {
    icon: Headphones,
    title: "Reliability You Can Trust",
    text: "One call, and we’re there. Your peace of mind is our unwavering promise.",
  },
];

const processSteps: ProcessStep[] = [
  { number: "1", title: "Site Assessment", icon: ClipboardCheck },
  { number: "2", title: "System Design", icon: PenTool },
  { number: "3", title: "System Approval", icon: CheckCircle2 },
  { number: "4", title: "System Installation", icon: Settings },
  { number: "5", title: "Commissioning", icon: Zap },
  { number: "6", title: "Net Metering", icon: FileCheck },
  { number: "7", title: "Performance Assurance", icon: BarChart3 },
];

const ZoraysTrustPromise = () => {
  return (
    <section className="ztp-section">
      <div className="ztp-container">
        <div className="ztp-header">
          <span className="ztp-eyebrow">The Zorays Trust Promise</span>

          <h2 className="ztp-heading">
            Premium Solar. <span>No Shortcuts.</span>
          </h2>

          <p className="ztp-description">
            Reliable equipment, fair pricing, trusted supply, and after-sales
            support that stays with you.
          </p>
        </div>

        <div className="ztp-main-grid">
          <div className="ztp-video-card">
            <div className="ztp-video-frame">
              <iframe
                src="https://www.youtube.com/embed/Mti18r6fUzo"
                title="Renergy Talk Episode 8 with Zorays Energy"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <div className="ztp-promise-grid">
            {trustPromises.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="ztp-promise-card" key={index}>
                  <div className="ztp-promise-icon">
                    <Icon size={22} />
                  </div>

                  <div className="ztp-promise-content">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="ztp-process-timeline">
          <div className="ztp-process-start">Start</div>

          <div className="ztp-process-track">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isTop = index % 2 !== 0;

              return (
                <article
                  className={`ztp-process-node ${
                    isTop ? "ztp-process-node-top" : "ztp-process-node-bottom"
                  }`}
                  key={step.number}
                >
                  <div className="ztp-process-content">
                    <div className="ztp-process-icon">
                      <Icon size={34} />
                    </div>

                    <h4 className="ztp-process-title">{step.title}</h4>
                  </div>

                  <span className="ztp-process-number">{step.number}</span>
                </article>
              );
            })}
          </div>

          <div className="ztp-process-finish">Finish</div>
        </div>
      </div>
    </section>
  );
};

export default ZoraysTrustPromise;