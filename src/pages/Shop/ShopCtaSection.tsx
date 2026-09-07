import { Link } from "react-router-dom";

import {
  ArrowRight,
  ClipboardList,
  ShoppingCart,
  Sparkles,
} from "lucide-react";

import "../../assets/css/shop/shopCtaSection.css";

import {
  ShopCtaCheckIcon,
  shopContactItems,
  shopCtaData,
  shopCtaHighlights,
  shopMiniProducts,
} from "../../Data/shop/shopCtaData";

const ShopCtaSection = () => {
  return (
    <section className="zsc-section">
      <div className="zs-shop-container">
        <div className="zsc-panel">

          {/* LEFT */}

          <div className="zsc-content">
            <span className="zsc-eyebrow">
              <Sparkles size={15} />
              {shopCtaData.eyebrow}
            </span>

            <h2>
              {shopCtaData.title}

              <span>
                {shopCtaData.highlightedTitle}
              </span>
            </h2>

            <p>
              {shopCtaData.description}
            </p>

            <div className="zsc-highlights">
              {shopCtaHighlights.map((item) => (
                <span key={item.id}>
                  <ShopCtaCheckIcon size={15} />
                  {item.text}
                </span>
              ))}
            </div>

            <div className="zsc-actions">
              <Link
                to="/cart"
                className="zsc-primary-btn"
              >
                {shopCtaData.primaryButton}
                <ShoppingCart size={16} />
              </Link>

              <Link
                to="/quote"
                className="zsc-secondary-btn"
              >
                {shopCtaData.secondaryButton}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>


          {/* RIGHT */}

          <div className="zsc-side-card">
            <div className="zsc-side-card-top">
              <div className="zsc-side-icon">
                <ClipboardList size={25} />
              </div>

              <div>
                <span>
                  {shopCtaData.sideEyebrow}
                </span>

                <h3>
                  {shopCtaData.sideTitle}
                </h3>
              </div>
            </div>

            <p>
              {shopCtaData.sideDescription}
            </p>

            <div className="zsc-contact-list">
              {shopContactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    className="zsc-contact-item"
                    key={item.id}
                  >
                    <Icon size={17} />

                    <div>
                      <strong>
                        {item.title}
                      </strong>

                      <span>
                        {item.text}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="zsc-mini-products">
              {shopMiniProducts.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.id}>
                    <Icon size={17} />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ShopCtaSection;