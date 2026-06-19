import { Link } from "react-router-dom";
import {
  ArrowRight,
  BatteryCharging,
  CheckCircle2,
  ClipboardList,
  MessageCircle,
  PhoneCall,
  ShoppingCart,
  Sparkles,
  Zap,
} from "lucide-react";
import "../../assets/css/shop/shopCtaSection.css";

const ctaHighlights = [
  "Product availability confirmation",
  "Solar system compatibility guidance",
  "Delivery and installation discussion",
];

const ShopCtaSection = () => {
  return (
    <section className="zsc-section">
      <div className="zsc-bg-shape zsc-bg-shape-one" />
      <div className="zsc-bg-shape zsc-bg-shape-two" />

      <div className="zs-shop-container">
        <div className="zsc-panel">
          <div className="zsc-content">
            <span className="zsc-eyebrow">
              <Sparkles size={16} />
              Need Help Choosing?
            </span>

            <h2>Get the Right Solar Product Before You Buy</h2>

            <p>
              Not sure which inverter, battery, panel, cable, or protection item
              fits your requirement? Send your inquiry and Zorays Solar will help
              you select the correct product combination.
            </p>

            <div className="zsc-highlights">
              {ctaHighlights.map((item) => (
                <span key={item}>
                  <CheckCircle2 size={16} />
                  {item}
                </span>
              ))}
            </div>

            <div className="zsc-actions">
              <Link to="/cart" className="zsc-primary-btn">
                View Cart
                <ShoppingCart size={17} />
              </Link>

              <Link to="/quote" className="zsc-secondary-btn">
                Request Quote
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          <div className="zsc-side-card">
            <div className="zsc-side-card-top">
              <div className="zsc-side-icon">
                <ClipboardList size={28} />
              </div>

              <div>
                <span>Order Support</span>
                <h3>Send Product Inquiry</h3>
              </div>
            </div>

            <p>
              Add products to cart, review quantity, and proceed to checkout for
              final order request confirmation.
            </p>

            <div className="zsc-contact-list">
              <div className="zsc-contact-item">
                <PhoneCall size={18} />
                <div>
                  <strong>Sales Call</strong>
                  <span>Discuss requirement with Zorays team</span>
                </div>
              </div>

              <div className="zsc-contact-item">
                <MessageCircle size={18} />
                <div>
                  <strong>Quick Inquiry</strong>
                  <span>Confirm product availability and pricing</span>
                </div>
              </div>
            </div>

            <div className="zsc-mini-products">
              <div>
                <Zap size={18} />
                <span>Inverters</span>
              </div>

              <div>
                <BatteryCharging size={18} />
                <span>Batteries</span>
              </div>

              <div>
                <ShoppingCart size={18} />
                <span>Cart Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopCtaSection;