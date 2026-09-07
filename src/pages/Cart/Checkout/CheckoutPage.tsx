import { Link } from "react-router-dom";

import {
  ArrowRight,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingCart,
  Trash2,
} from "lucide-react";

import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/reduxHooks";

import {
  clearCart,
  decreaseCartQuantity,
  increaseCartQuantity,
  removeFromCart,
} from "../../../app/features/cart/cartSlice";

import "../../../assets/css/cart/checkout/checkoutPage.css";


const CHECKOUT_FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80";


const formatPrice = (amount: number) => {
  return `Rs. ${amount.toLocaleString("en-PK")}`;
};


const CheckoutPage = () => {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector(
    (state) => state.cart.items
  );


  /* ============================================================
     TOTALS
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
    <main className="checkout-page">
      <div className="checkout-container">

        {/* ======================================================
            HEADER
            ====================================================== */}

        <div className="checkout-header">
          <div>
            <span className="checkout-badge">
              <ShoppingCart size={15} />
              Solar Trade Hub Checkout
            </span>

            <h1>
              Review Your Order
            </h1>

            <p>
              Confirm selected solar equipment,
              quantities, and estimated totals before
              submitting the order requirement.
            </p>
          </div>

          <Link
            to="/zorays-shop"
            className="checkout-continue-link"
          >
            Continue Shopping
            <ArrowRight size={15} />
          </Link>
        </div>


        {/* ======================================================
            EMPTY STATE
            ====================================================== */}

        {cartItems.length === 0 ? (
          <div className="checkout-empty">
            <div className="checkout-empty-icon">
              <ShoppingCart size={32} />
            </div>

            <span className="checkout-empty-eyebrow">
              Solar Trade Hub
            </span>

            <h2>
              Your cart is empty
            </h2>

            <p>
              Add solar products to your cart
              before proceeding to checkout.
            </p>

            <Link to="/zorays-shop">
              Explore Solar Products
              <ArrowRight size={15} />
            </Link>
          </div>
        ) : (
          <div className="checkout-layout">

            {/* ==================================================
                ITEMS
                ================================================== */}

            <section className="checkout-items">

              <div className="checkout-items-header">
                <div>
                  <span>
                    Order Items
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
                    className="checkout-item"
                    key={item.id}
                  >

                    {/* IMAGE */}

                    <Link
                      to={`/zorays-shop/product/${item.id}`}
                      className="checkout-item-image"
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
                            CHECKOUT_FALLBACK_IMAGE;
                        }}
                      />

                      <span>
                        {item.tag}
                      </span>
                    </Link>


                    {/* CONTENT */}

                    <div className="checkout-item-content">

                      <div className="checkout-item-meta">
                        <span>
                          {item.brand}
                        </span>

                        <small>
                          Product #{item.id}
                        </small>
                      </div>

                      <Link
                        to={`/zorays-shop/product/${item.id}`}
                        className="checkout-item-title"
                      >
                        {item.title}
                      </Link>

                      <p>
                        {item.desc}
                      </p>

                      <div className="checkout-item-price">
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

                    <div className="checkout-item-actions">
                      <span className="checkout-item-actions-label">
                        Quantity
                      </span>

                      <div className="checkout-qty-control">
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
                        className="checkout-remove-btn"
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
            </section>


            {/* ==================================================
                SUMMARY
                ================================================== */}

            <aside className="checkout-summary">

              <div className="checkout-summary-top">
                <span>
                  <ShieldCheck size={15} />
                  Order Review
                </span>

                <h2>
                  Order Summary
                </h2>

                <p>
                  Final availability, delivery,
                  warranty, and technical compatibility
                  will be confirmed before order
                  processing.
                </p>
              </div>


              <div className="checkout-summary-details">

                <div className="checkout-summary-row">
                  <span>
                    Products
                  </span>

                  <strong>
                    {cartItems.length}
                  </strong>
                </div>

                <div className="checkout-summary-row">
                  <span>
                    Total Quantity
                  </span>

                  <strong>
                    {cartCount}
                  </strong>
                </div>

                <div className="checkout-summary-row">
                  <span>
                    Subtotal
                  </span>

                  <strong>
                    {formatPrice(subtotal)}
                  </strong>
                </div>

                <div className="checkout-summary-row">
                  <span>
                    Delivery
                  </span>

                  <strong>
                    To be confirmed
                  </strong>
                </div>

                <div className="checkout-summary-row">
                  <span>
                    Technical Review
                  </span>

                  <strong>
                    Included
                  </strong>
                </div>

              </div>


              <div className="checkout-total-row">
                <span>
                  Estimated Total
                </span>

                <strong>
                  {formatPrice(subtotal)}
                </strong>

                <small>
                  Before confirmed delivery or
                  project-specific charges
                </small>
              </div>


              <button
                type="button"
                className="checkout-submit-btn"
              >
                Submit Order Request
                <ArrowRight size={15} />
              </button>

              <Link
                to="/cart"
                className="checkout-back-cart"
              >
                Back to Cart
              </Link>

            </aside>
          </div>
        )}

      </div>
    </main>
  );
};

export default CheckoutPage;