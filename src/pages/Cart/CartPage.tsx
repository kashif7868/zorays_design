import { Link } from "react-router-dom";

import {
  ArrowRight,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Trash2,
} from "lucide-react";

import {
  useAppDispatch,
  useAppSelector,
} from "../../app/reduxHooks";

import {
  clearCart,
  decreaseCartQuantity,
  increaseCartQuantity,
  removeFromCart,
} from "../../app/features/cart/cartSlice";

import "../../assets/css/cart/cartPage.css";


const CART_FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80";


const formatPrice = (amount: number) => {
  return `Rs. ${amount.toLocaleString("en-PK")}`;
};


const CartPage = () => {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector(
    (state) => state.cart.items
  );


  /* ============================================================
     CART TOTALS
     ============================================================ */

  const cartCount = cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  const subtotal = cartItems.reduce(
    (total, item) =>
      total +
      item.priceAmount *
        item.quantity,
    0
  );


  return (
    <main className="zr-cart-page">

      {/* ========================================================
          HERO
          ======================================================== */}

      <section className="zr-cart-hero">
        <div className="zr-cart-container">
          <div className="zr-cart-hero-inner">

            <div className="zr-cart-hero-content">
              <span className="zr-cart-eyebrow">
                <ShoppingCart size={15} />
                Solar Trade Hub Cart
              </span>

              <h1>
                Review Your Solar Equipment
              </h1>

              <p>
                Check product quantities, review
                estimated totals, and proceed when
                your solar equipment selection is ready.
              </p>
            </div>

            <Link
              to="/zorays-shop"
              className="zr-cart-continue-btn"
            >
              Continue Shopping
              <ArrowRight size={16} />
            </Link>

          </div>
        </div>
      </section>


      {/* ========================================================
          CART BODY
          ======================================================== */}

      <section className="zr-cart-body">
        <div className="zr-cart-container">

          {cartItems.length === 0 ? (
            <div className="zr-cart-empty">

              <div className="zr-cart-empty-icon">
                <ShoppingBag size={34} />
              </div>

              <span className="zr-cart-empty-eyebrow">
                Solar Trade Hub
              </span>

              <h2>
                Your cart is empty
              </h2>

              <p>
                Browse solar panels, inverters,
                lithium batteries, cables,
                protection equipment, and
                accessories before checkout.
              </p>

              <Link
                to="/zorays-shop"
                className="zr-cart-empty-btn"
              >
                Explore Solar Products
                <ArrowRight size={16} />
              </Link>

            </div>
          ) : (
            <div className="zr-cart-grid">

              {/* =================================================
                  PRODUCT LIST
                  ================================================= */}

              <div className="zr-cart-list">

                <div className="zr-cart-list-header">
                  <div>
                    <span>
                      Selected Equipment
                    </span>

                    <strong>
                      {cartItems.length}{" "}
                      {cartItems.length === 1
                        ? "product"
                        : "products"}
                    </strong>
                  </div>

                  <button
                    type="button"
                    className="zr-cart-clear-inline"
                    onClick={() =>
                      dispatch(clearCart())
                    }
                  >
                    Clear all
                  </button>
                </div>


                {cartItems.map((item) => {
                  const itemTotal =
                    item.priceAmount *
                    item.quantity;

                  return (
                    <article
                      className="zr-cart-item"
                      key={item.id}
                    >

                      {/* IMAGE */}

                      <Link
                        to={`/zorays-shop/product/${item.id}`}
                        className="zr-cart-item-image-wrap"
                        aria-label={`View ${item.title}`}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          onError={(event) => {
                            event.currentTarget.onerror =
                              null;

                            event.currentTarget.src =
                              CART_FALLBACK_IMAGE;
                          }}
                        />

                        <span>
                          {item.tag}
                        </span>
                      </Link>


                      {/* CONTENT */}

                      <div className="zr-cart-item-content">

                        <div className="zr-cart-item-meta">
                          <span>
                            {item.brand}
                          </span>

                          <small>
                            Product #{item.id}
                          </small>
                        </div>

                        <Link
                          to={`/zorays-shop/product/${item.id}`}
                          className="zr-cart-item-title"
                        >
                          {item.title}
                        </Link>

                        <p>
                          {item.desc}
                        </p>

                        <div className="zr-cart-price-row">
                          <div>
                            <span>
                              Unit Price
                            </span>

                            <strong>
                              {formatPrice(
                                item.priceAmount
                              )}
                            </strong>
                          </div>

                          <div>
                            <span>
                              Item Total
                            </span>

                            <strong>
                              {formatPrice(
                                itemTotal
                              )}
                            </strong>
                          </div>
                        </div>
                      </div>


                      {/* ACTIONS */}

                      <div className="zr-cart-actions">

                        <div className="zr-cart-actions-label">
                          Quantity
                        </div>

                        <div className="zr-cart-qty">
                          <button
                            type="button"
                            onClick={() =>
                              dispatch(
                                decreaseCartQuantity(
                                  item.id
                                )
                              )
                            }
                            disabled={
                              item.quantity <= 1
                            }
                            aria-label={`Decrease ${item.title}`}
                          >
                            <Minus size={13} />
                          </button>

                          <strong>
                            {item.quantity}
                          </strong>

                          <button
                            type="button"
                            onClick={() =>
                              dispatch(
                                increaseCartQuantity(
                                  item.id
                                )
                              )
                            }
                            aria-label={`Increase ${item.title}`}
                          >
                            <Plus size={13} />
                          </button>
                        </div>

                        <button
                          type="button"
                          className="zr-cart-remove"
                          onClick={() =>
                            dispatch(
                              removeFromCart(
                                item.id
                              )
                            )
                          }
                          aria-label={`Remove ${item.title}`}
                        >
                          <Trash2 size={14} />
                          Remove
                        </button>

                      </div>
                    </article>
                  );
                })}
              </div>


              {/* =================================================
                  CART SUMMARY
                  ================================================= */}

              <aside className="zr-cart-summary">

                <div className="zr-cart-summary-top">
                  <span>
                    <ShieldCheck size={16} />
                    Order Review
                  </span>

                  <h2>
                    Cart Summary
                  </h2>

                  <p>
                    Final availability, delivery,
                    warranty, and technical compatibility
                    will be confirmed before order
                    processing.
                  </p>
                </div>


                <div className="zr-cart-summary-details">

                  <div className="zr-cart-summary-row">
                    <span>
                      Products
                    </span>

                    <strong>
                      {cartItems.length}
                    </strong>
                  </div>

                  <div className="zr-cart-summary-row">
                    <span>
                      Total Quantity
                    </span>

                    <strong>
                      {cartCount}
                    </strong>
                  </div>

                  <div className="zr-cart-summary-row">
                    <span>
                      Delivery
                    </span>

                    <strong>
                      To be confirmed
                    </strong>
                  </div>

                  <div className="zr-cart-summary-row">
                    <span>
                      Technical Review
                    </span>

                    <strong>
                      Included
                    </strong>
                  </div>

                </div>


                <div className="zr-cart-total-row">
                  <span>
                    Estimated Total
                  </span>

                  <strong>
                    {formatPrice(subtotal)}
                  </strong>

                  <small>
                    Before confirmed delivery
                    or project-specific charges
                  </small>
                </div>


                <Link
                  to="/checkout"
                  className="zr-cart-checkout-btn"
                >
                  Proceed to Checkout
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/zorays-shop"
                  className="zr-cart-summary-shop-link"
                >
                  Continue Shopping
                </Link>

              </aside>
            </div>
          )}

        </div>
      </section>

    </main>
  );
};

export default CartPage;