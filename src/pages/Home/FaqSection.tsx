import { useState } from "react";
import { ArrowRight, CircleHelp } from "lucide-react";

import "../../assets/css/home/faqSection.css";
import { faqSectionData } from "../../Data/home/faqSectionData";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="zorays-faq-section">
      <div className="zorays-faq-glow zorays-faq-glow-one" />
      <div className="zorays-faq-glow zorays-faq-glow-two" />

      <div className="zorays-faq-container">
        <div className="zorays-faq-header">
          <span className="zorays-faq-eyebrow">
            <CircleHelp size={14} />
            Solar Help Center
          </span>

          <div className="zorays-faq-title-wrap">
            <div>
              <h2>
                Frequently Asked <span>Questions</span>
              </h2>

              <p>
                Answers to common questions about solar systems,
                net metering, system sizing, backup and installation
                in Pakistan.
              </p>
            </div>

            <a
              className="zorays-faq-cta"
              href="#multi-step-form"
            >
              Get Solar Quote
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        <div className="zorays-faq-layout">
          <aside className="zorays-faq-side-card">
            <div className="zorays-faq-side-icon">
              <CircleHelp size={24} />
            </div>

            <h3>Still confused about solar?</h3>

            <p>
              Share your load and requirements and our team can
              help identify a suitable solar system, inverter and
              backup configuration.
            </p>

            <a href="#multi-step-form">
              Request Free Assessment
              <ArrowRight size={14} />
            </a>
          </aside>

          <div className="zorays-faq-list">
            {faqSectionData.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <article
                  className={`zorays-faq-item ${
                    isActive ? "active" : ""
                  }`}
                  key={item.id}
                >
                  <button
                    type="button"
                    className="zorays-faq-question"
                    onClick={() =>
                      setActiveIndex(
                        isActive ? -1 : index
                      )
                    }
                    aria-expanded={isActive}
                  >
                    <span>{item.question}</span>

                    <span className="zorays-faq-toggle">
                      {isActive ? "−" : "+"}
                    </span>
                  </button>

                  <div className="zorays-faq-answer-wrap">
                    <div className="zorays-faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;