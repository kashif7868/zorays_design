import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import {
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

import type {
  ZoraysShopProduct,
} from "../../../Data/shop/zoraysShopProductsData";

import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/reduxHooks";

import {
  addToCart,
} from "../../../app/features/cart/cartSlice";

import "../../../assets/css/shop/productView/productViewSection.css";


type ProductViewSectionProps = {
  product: ZoraysShopProduct;
};


const PRODUCT_FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80";


const ProductViewSection = ({
  product,
}: ProductViewSectionProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const cartItems = useAppSelector(
    (state) => state.cart.items
  );

  const [quantity, setQuantity] =
    useState(1);


  /* ============================================================
     CART STATE
     ============================================================ */

  const isAlreadyInCart =
    cartItems.some(
      (item) =>
        item.id === product.id
    );


  /* ============================================================
     QUANTITY
     ============================================================ */

  const increaseQuantity = () => {
    setQuantity(
      (prev) => prev + 1
    );
  };


  const decreaseQuantity = () => {
    setQuantity(
      (prev) =>
        Math.max(1, prev - 1)
    );
  };


  /* ============================================================
     ADD TO CART
     ============================================================ */

  const handleAddToCart = () => {
    if (isAlreadyInCart) {
      toast.info(
        "This product is already added to cart."
      );

      return;
    }

    dispatch(
      addToCart({
        product,
        quantity,
      })
    );

    toast.success(
      "Product added to cart."
    );
  };


  /* ============================================================
     ORDER NOW
     ============================================================ */

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

        {/* ====================================================
            TOP STATUS
            ==================================================== */}

        <div className="zpv-detail-top">
          <div className="zpv-detail-product-code">
            <span>
              Product
            </span>

            <strong>
              #{product.id}
            </strong>
          </div>

          <span className="zpv-detail-status">
            <BadgeCheck size={15} />
            Available for Inquiry
          </span>
        </div>


        {/* ====================================================
            MAIN GRID
            ==================================================== */}

        <div className="zpv-detail-grid">

          {/* ==================================================
              PRODUCT IMAGE
              ================================================== */}

          <div className="zpv-detail-image-column">
            <div className="zpv-detail-image-card">
              <img
                src={product.image}
                alt={product.title}
                loading="eager"
                onError={(event) => {
                  event.currentTarget.onerror =
                    null;

                  event.currentTarget.src =
                    PRODUCT_FALLBACK_IMAGE;
                }}
              />

              <div className="zpv-detail-image-overlay" />

              <div className="zpv-detail-badges">
                <span className="zpv-detail-tag">
                  {product.tag}
                </span>

                {product.featured && (
                  <span className="zpv-detail-featured">
                    Featured
                  </span>
                )}
              </div>
            </div>

            <div className="zpv-detail-image-note">
              <ShieldCheck size={14} />

              <span>
                Product image is for catalogue
                reference. Final model and
                specifications should be confirmed
                before order processing.
              </span>
            </div>
          </div>


          {/* ==================================================
              PRODUCT CONTENT
              ================================================== */}

          <div className="zpv-detail-content">

            {/* BRAND + RATING */}

            <div className="zpv-detail-meta">
              <span className="zpv-detail-brand">
                {product.brand}
              </span>

              <div className="zpv-detail-rating">
                <Star
                  size={14}
                  fill="currentColor"
                />

                <strong>
                  {product.rating}
                </strong>

                <small>
                  Product Rating
                </small>
              </div>
            </div>


            {/* TITLE */}

            <h1>
              {product.title}
            </h1>


            {/* DESCRIPTION */}

            <p className="zpv-detail-description">
              {product.desc}
            </p>


            {/* PRICE */}

            <div className="zpv-detail-price-row">
              <div>
                <span>
                  Current Price
                </span>

                <strong>
                  {product.price}
                </strong>
              </div>

              {product.oldPrice && (
                <del>
                  {product.oldPrice}
                </del>
              )}
            </div>


            {/* =================================================
                TRUST FEATURES
                ================================================= */}

            <div className="zpv-detail-info-grid">
              <div>
                <span className="zpv-detail-info-icon">
                  <ShieldCheck size={18} />
                </span>

                <div>
                  <strong>
                    Technical Guidance
                  </strong>

                  <small>
                    Product compatibility support
                  </small>
                </div>
              </div>

              <div>
                <span className="zpv-detail-info-icon">
                  <Truck size={18} />
                </span>

                <div>
                  <strong>
                    Delivery Confirmation
                  </strong>

                  <small>
                    Final delivery details confirmed
                  </small>
                </div>
              </div>

              <div>
                <span className="zpv-detail-info-icon">
                  <Zap size={18} />
                </span>

                <div>
                  <strong>
                    Solar Ready
                  </strong>

                  <small>
                    Selected for solar applications
                  </small>
                </div>
              </div>
            </div>


            {/* =================================================
                QUANTITY
                ================================================= */}

            <div className="zpv-detail-purchase-panel">
              <div className="zpv-detail-qty-row">
                <div>
                  <span>
                    Quantity
                  </span>

                  {isAlreadyInCart && (
                    <small>
                      Product already in cart
                    </small>
                  )}
                </div>

                <div className="zpv-detail-qty-control">
                  <button
                    type="button"
                    onClick={
                      decreaseQuantity
                    }
                    disabled={
                      quantity === 1
                    }
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>

                  <strong>
                    {quantity}
                  </strong>

                  <button
                    type="button"
                    onClick={
                      increaseQuantity
                    }
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>


              {/* ===============================================
                  ACTIONS
                  =============================================== */}

              <div className="zpv-detail-actions">
                <button
                  type="button"
                  className={`zpv-detail-cart-btn${
                    isAlreadyInCart
                      ? " is-added"
                      : ""
                  }`}
                  onClick={
                    handleAddToCart
                  }
                >
                  <ShoppingCart
                    size={16}
                  />

                  {isAlreadyInCart
                    ? "Already in Cart"
                    : "Add to Cart"}
                </button>

                <button
                  type="button"
                  className="zpv-detail-order-btn"
                  onClick={
                    handleOrderNow
                  }
                >
                  Order Now

                  <ArrowRight
                    size={16}
                  />
                </button>
              </div>
            </div>


            {/* =================================================
                ORDER NOTE
                ================================================= */}

            <div className="zpv-detail-note">
              <BadgeCheck size={14} />

              <span>
                Final product availability,
                specifications, pricing, delivery
                charges, warranty terms, and technical
                compatibility will be confirmed before
                order processing.
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductViewSection;