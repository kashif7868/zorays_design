import {
  ShoppingBag,
  Sparkles,
} from "lucide-react";

import "../../assets/css/shop/shopWhyZorays.css";

import {
  shopMiniFeatures,
  shopProcessSteps,
  shopTrustCards,
  shopWhyZoraysData,
} from "../../Data/shop/shopWhyZoraysData";

const ShopWhyZorays = () => {
  return (
    <section className="zsw-section">
      <div className="zs-shop-container">

        {/* ====================================================
            HEADER
            ==================================================== */}

        <div className="zsw-header">
          <div className="zsw-header-copy">
            <span className="zsw-eyebrow">
              <Sparkles size={15} />
              {shopWhyZoraysData.eyebrow}
            </span>

            <h2>
              {shopWhyZoraysData.title}

              <span>
                {shopWhyZoraysData.highlightedTitle}
              </span>
            </h2>
          </div>

          <p>
            {shopWhyZoraysData.description}
          </p>
        </div>


        {/* ====================================================
            TRUST CARDS
            ==================================================== */}

        <div className="zsw-grid">
          {shopTrustCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                className="zsw-card"
                key={card.id}
              >
                <div className="zsw-card-icon">
                  <Icon size={21} />
                </div>

                <h3>
                  {card.title}
                </h3>

                <p>
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>


        {/* ====================================================
            BUYING PROCESS
            ==================================================== */}

        <div className="zsw-process-panel">

          <div className="zsw-process-content">
            <span className="zsw-process-badge">
              <ShoppingBag size={15} />
              {shopWhyZoraysData.processEyebrow}
            </span>

            <h3>
              {shopWhyZoraysData.processTitle}
            </h3>

            <p>
              {shopWhyZoraysData.processDescription}
            </p>

            <div className="zsw-mini-features">
              {shopMiniFeatures.map((item) => {
                const Icon = item.icon;

                return (
                  <span key={item.id}>
                    <Icon size={14} />
                    {item.label}
                  </span>
                );
              })}
            </div>
          </div>


          {/* ==================================================
              STEPS
              ================================================== */}

          <div className="zsw-steps">
            {shopProcessSteps.map((step) => (
              <div
                className="zsw-step"
                key={step.id}
              >
                <strong>
                  {step.count}
                </strong>

                <div>
                  <h4>
                    {step.title}
                  </h4>

                  <p>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ShopWhyZorays;