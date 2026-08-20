import { useState } from "react";

import {
  HelpCircle,
  MessageCircleQuestion,
  Plus,
  Minus,
  Zap,
} from "lucide-react";

import "../../../assets/css/netMetering/netMeteringFaq.css";

import {
  netMeteringFaqData,
  netMeteringFaqs,
} from "../../../Data/NetMetering/netMeteringData";

const NetMeteringFaq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="nm-faq-section">
      <div className="nm-faq-container">

        <div className="nm-faq-header">
          <span className="nm-faq-eyebrow">
            <Zap size={14} />
            {netMeteringFaqData.eyebrow}
          </span>

          <h2>
            {netMeteringFaqData.title}

            <span>
              {netMeteringFaqData.highlightedTitle}
            </span>
          </h2>

          <p>
            {netMeteringFaqData.description}
          </p>
        </div>

        <div className="nm-faq-layout">
          <aside className="nm-faq-side-card">
            <span className="nm-faq-side-icon">
              <MessageCircleQuestion size={24} />
            </span>

            <h3>
              Still have a net metering question?
            </h3>

            <p>
              Share your electricity connection details,
              system requirement, and city with our team.
            </p>

            <a href="/#multi-step-form">
              Get Solar Assessment
            </a>
          </aside>

          <div className="nm-faq-list">
            {netMeteringFaqs.map((item, index) => {
              const isActive =
                activeIndex === index;

              return (
                <article
                  className={`nm-faq-item ${
                    isActive ? "active" : ""
                  }`}
                  key={item.id}
                >
                  <button
                    type="button"
                    className="nm-faq-question"
                    onClick={() =>
                      setActiveIndex(
                        isActive ? -1 : index
                      )
                    }
                    aria-expanded={isActive}
                  >
                    <span>
                      {item.question}
                    </span>

                    <span className="nm-faq-toggle">
                      {isActive ? (
                        <Minus size={17} />
                      ) : (
                        <Plus size={17} />
                      )}
                    </span>
                  </button>

                  <div className="nm-faq-answer-wrap">
                    <div className="nm-faq-answer">
                      <p>
                        {item.answer}
                      </p>
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

export default NetMeteringFaq;