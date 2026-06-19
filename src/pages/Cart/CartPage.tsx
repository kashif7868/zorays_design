import { Link } from "react-router-dom";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingCart,
  ArrowRight,
  ShoppingBag,
  ShieldCheck,
} from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../app/reduxHooks";
import {
  clearCart,
  decreaseCartQuantity,
  increaseCartQuantity,
  removeFromCart,
} from "../../app/features/cart/cartSlice";
import "../../assets/css/cart/cartPage.css";

const formatPrice = (amount: number) => {
  return `Rs. ${amount.toLocaleString("en-PK")}`;
};

const CartPage = () => {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.priceAmount * item.quantity,
    0
  );

  return (
    <main className="zr-cart-page">
      <section className="zr-cart-hero">
        <div className="zr-cart-container">
          <div className="zr-cart-hero-content">
            <span className="zr-cart-eyebrow">
              <ShoppingCart size={16} />
              Zorays Solar Cart
            </span>

            <h1>Your Solar Cart</h1>

            <p>
              Review selected solar products, update quantities, and proceed to
              checkout when ready.
            </p>
          </div>

          <Link to="/zorays-shop" className="zr-cart-continue-btn">
            Continue Shopping
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="zr-cart-body">
        <div className="zr-cart-container">
          {cartItems.length === 0 ? (
            <div className="zr-cart-empty">
              <div className="zr-cart-empty-icon">
                <ShoppingBag size={44} />
              </div>

              <h2>Your cart is empty</h2>

              <p>
                Add solar panels, inverters, batteries, and accessories before
                checkout.
              </p>

              <Link to="/zorays-shop" className="zr-cart-empty-btn">
                Explore Solar Shop
                <ArrowRight size={17} />
              </Link>
            </div>
          ) : (
            <div className="zr-cart-grid">
              <div className="zr-cart-list">
                {cartItems.map((item) => {
                  const itemTotal = item.priceAmount * item.quantity;

                  return (
                    <article className="zr-cart-item" key={item.id}>
                      <div className="zr-cart-item-image-wrap">
                        <img src={item.image} alt={item.title} />
                        <span>{item.tag}</span>
                      </div>

                      <div className="zr-cart-item-content">
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>

                        <div className="zr-cart-price-row">
                          <strong>{formatPrice(item.priceAmount)}</strong>
                          <small>Item total: {formatPrice(itemTotal)}</small>
                        </div>
                      </div>

                      <div className="zr-cart-actions">
                        <div className="zr-cart-qty">
                          <button
                            type="button"
                            onClick={() =>
                              dispatch(decreaseCartQuantity(item.id))
                            }
                            aria-label={`Decrease ${item.title}`}
                          >
                            <Minus size={14} />
                          </button>

                          <strong>{item.quantity}</strong>

                          <button
                            type="button"
                            onClick={() =>
                              dispatch(increaseCartQuantity(item.id))
                            }
                            aria-label={`Increase ${item.title}`}
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <button
                          type="button"
                          className="zr-cart-remove"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          <Trash2 size={15} />
                          Remove
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>

              <aside className="zr-cart-summary">
                <div className="zr-cart-summary-top">
                  <span>
                    <ShieldCheck size={17} />
                    Secure Order Request
                  </span>

                  <h2>Cart Summary</h2>
                </div>

                <div className="zr-cart-summary-row">
                  <span>Total Products</span>
                  <strong>{cartItems.length}</strong>
                </div>

                <div className="zr-cart-summary-row">
                  <span>Total Quantity</span>
                  <strong>{cartCount}</strong>
                </div>

                <div className="zr-cart-summary-row">
                  <span>Delivery</span>
                  <strong>To be confirmed</strong>
                </div>

                <div className="zr-cart-total-row">
                  <span>Estimated Total</span>
                  <strong>{formatPrice(subtotal)}</strong>
                </div>

                <Link to="/checkout" className="zr-cart-checkout-btn">
                  Proceed to Checkout
                  <ArrowRight size={17} />
                </Link>

                <button
                  type="button"
                  className="zr-cart-clear-btn"
                  onClick={() => dispatch(clearCart())}
                >
                  Clear Cart
                </button>
              </aside>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default CartPage;