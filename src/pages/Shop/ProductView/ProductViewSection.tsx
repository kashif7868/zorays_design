import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingCart,
  Star,
  Truck,
  Zap,
} from "lucide-react";
import type { ZoraysShopProduct } from "../../../Data/shop/zoraysShopProductsData";
import { useAppDispatch, useAppSelector } from "../../../app/reduxHooks";
import { addToCart } from "../../../app/features/cart/cartSlice";
import "../../../assets/css/shop/productView/productViewSection.css";

type ProductViewSectionProps = {
  product: ZoraysShopProduct;
};

const ProductViewSection = ({ product }: ProductViewSectionProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const cartItems = useAppSelector((state) => state.cart.items);

  const [quantity, setQuantity] = useState(1);

  const isAlreadyInCart = cartItems.some((item) => item.id === product.id);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleAddToCart = () => {
    if (isAlreadyInCart) {
      toast.info("This product is already added to cart.");
      return;
    }

    dispatch(
      addToCart({
        product,
        quantity,
      })
    );

    toast.success("Product added to cart.");
  };

  const handleOrderNow = () => {
    if (!isAlreadyInCart) {
      dispatch(
        addToCart({
          product,
          quantity,
        })
      );
    }

    navigate("/checkout");
  };

  return (
    <section className="zpv-detail-section">
      <div className="zpv-container">
        <div className="zpv-detail-top">
          <Link to="/zorays-shop" className="zpv-detail-back">
            <ArrowLeft size={17} />
            Back to Shop
          </Link>

          <span className="zpv-detail-status">
            <BadgeCheck size={16} />
            Available for Inquiry
          </span>
        </div>

        <div className="zpv-detail-grid">
          <div className="zpv-detail-image-card">
            <img src={product.image} alt={product.title} />

            <span className="zpv-detail-tag">{product.tag}</span>

            {product.featured && (
              <span className="zpv-detail-featured">Featured</span>
            )}
          </div>

          <div className="zpv-detail-content">
            <div className="zpv-detail-meta">
              <span>{product.brand}</span>

              <div>
                <Star size={15} fill="currentColor" />
                <strong>{product.rating}</strong>
                <small>Verified Rating</small>
              </div>
            </div>

            <h1>{product.title}</h1>

            <p>{product.desc}</p>

            <div className="zpv-detail-price-row">
              <strong>{product.price}</strong>
              <del>{product.oldPrice}</del>
            </div>

            <div className="zpv-detail-info-grid">
              <div>
                <ShieldCheck size={19} />
                <span>Technical Guidance</span>
              </div>

              <div>
                <Truck size={19} />
                <span>Delivery Confirmation</span>
              </div>

              <div>
                <Zap size={19} />
                <span>Solar Ready Product</span>
              </div>
            </div>

            <div className="zpv-detail-qty-row">
              <span>Quantity</span>

              <div className="zpv-detail-qty-control">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>

                <strong>{quantity}</strong>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <div className="zpv-detail-actions">
              <button
                type="button"
                className="zpv-detail-cart-btn"
                onClick={handleAddToCart}
              >
                <ShoppingCart size={16} />
                Add to Cart
              </button>

              <button
                type="button"
                className="zpv-detail-order-btn"
                onClick={handleOrderNow}
              >
                Order Now
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="zpv-detail-note">
              Final product availability, delivery charges, and technical fit
              will be confirmed by Zorays Solar before order processing.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductViewSection;