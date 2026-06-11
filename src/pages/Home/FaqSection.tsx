import { useState, type ReactNode } from "react";
import "../../assets/css/home/faqSection.css";

type FaqItem = {
  question: string;
  answer: ReactNode;
};

const faqs: FaqItem[] = [
  {
    question: "How much does a solar panel cost in Pakistan?",
    answer: (
      <>
        The cost of a solar panel in Pakistan depends on wattage, brand, panel
        technology, and market availability. A standard high-efficiency solar
        panel is usually priced according to its per-watt rate. For an accurate
        quotation, Zorays Solar Pakistan recommends checking the latest market
        rate before finalizing the system.
      </>
    ),
  },
  {
    question: "Which is the best solar system in Pakistan?",
    answer: (
      <>
        The best solar system depends on your electricity usage, daytime load,
        backup requirement, sanctioned load, and budget. For most homes, a
        properly designed on-grid or hybrid solar system with net metering gives
        the strongest long-term value.
      </>
    ),
  },
  {
    question: "How many solar panels are required for a 1.5 ton AC in Pakistan?",
    answer: (
      <>
        A 1.5 ton inverter AC normally requires a carefully sized solar setup
        based on running hours and load pattern. In practical residential use,
        the system is usually designed with extra capacity to support the AC
        along with household load.
      </>
    ),
  },
  {
    question: "What is the price of a 3000 watt solar panel in Pakistan?",
    answer: (
      <>
        Solar panels are not normally sold as a single 3000 watt panel. A 3000
        watt solar setup is created by combining multiple panels, such as 5 to 6
        high-wattage panels, depending on the selected panel rating.
      </>
    ),
  },
  {
    question: "What is the price of a 5 kW solar system in Pakistan in 2026?",
    answer: (
      <>
        A 5 kW solar system price depends on the inverter brand, panel brand,
        structure type, cable quality, protection equipment, and whether the
        system is on-grid or hybrid. Final pricing should always be quoted after
        checking the latest equipment rates and site conditions.
      </>
    ),
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="zorays-faq-section">
      <div className="zorays-faq-glow zorays-faq-glow-one" />
      <div className="zorays-faq-glow zorays-faq-glow-two" />

      <div className="zorays-faq-container">
        <div className="zorays-faq-header">
          <span className="zorays-faq-eyebrow">Solar Help Center</span>

          <div className="zorays-faq-title-wrap">
            <div>
              <h2>Frequently Asked Questions</h2>
              <p>
                Need more info? Check out the most frequently asked questions
                about solar panels, system sizing, pricing, and installation in
                Pakistan.
              </p>
            </div>

            <a className="zorays-faq-cta" href="#quote">
              Get Solar Quote
            </a>
          </div>
        </div>

        <div className="zorays-faq-layout">
          <div className="zorays-faq-side-card">
            <span className="zorays-faq-side-icon">?</span>
            <h3>Still confused about solar?</h3>
            <p>
              Share your monthly bill and our team can recommend the right solar
              size, inverter type, and backup option.
            </p>
            <a href="#quote">Request Free Assessment</a>
          </div>

          <div className="zorays-faq-list">
            {faqs.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <article
                  className={`zorays-faq-item ${isActive ? "active" : ""}`}
                  key={item.question}
                >
                  <button
                    type="button"
                    className="zorays-faq-question"
                    onClick={() => setActiveIndex(isActive ? -1 : index)}
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