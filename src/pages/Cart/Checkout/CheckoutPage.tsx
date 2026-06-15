import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../../app/reduxHooks";
import {
  clearCart,
  decreaseCartQuantity,
  increaseCartQuantity,
  removeFromCart,
} from "../../../app/features/cart/cartSlice";
import "../../../assets/css/cart/checkout/checkoutPage.css";

const formatPrice = (amount: number) => {
  return `Rs. ${amount.toLocaleString("en-PK")}`;
};

const CheckoutPage = () => {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.priceAmount * item.quantity,
    0
  );

  return (
    <main className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-header">
          <div>
            <span className="checkout-badge">
              <ShoppingCart size={16} />
              Zorays Solar Cart
            </span>

            <h1>Checkout</h1>
            <p>Review your selected solar products before submitting your order.</p>
          </div>

          <Link to="/shop" className="checkout-continue-link">
            Continue Shopping
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <div className="checkout-empty">
            <ShoppingCart size={42} />
            <h2>Your cart is empty</h2>
            <p>Add solar products to cart before checkout.</p>
            <Link to="/shop">Go to Shop</Link>
          </div>
        ) : (
          <div className="checkout-layout">
            <section className="checkout-items">
              {cartItems.map((item) => {
                const itemTotal = item.priceAmount * item.quantity;

                return (
                  <article className="checkout-item" key={item.id}>
                    <img src={item.image} alt={item.title} />

                    <div className="checkout-item-content">
                      <span>{item.tag}</span>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>

                      <div className="checkout-item-price">
                        <strong>{formatPrice(item.priceAmount)}</strong>
                        <small>Total: {formatPrice(itemTotal)}</small>
                      </div>
                    </div>

                    <div className="checkout-item-actions">
                      <div className="checkout-qty-control">
                        <button
                          type="button"
                          onClick={() => dispatch(decreaseCartQuantity(item.id))}
                          aria-label={`Decrease ${item.title}`}
                        >
                          <Minus size={14} />
                        </button>

                        <strong>{item.quantity}</strong>

                        <button
                          type="button"
                          onClick={() => dispatch(increaseCartQuantity(item.id))}
                          aria-label={`Increase ${item.title}`}
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <button
                        type="button"
                        className="checkout-remove-btn"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        <Trash2 size={15} />
                        Remove
                      </button>
                    </div>
                  </article>
                );
              })}
            </section>

            <aside className="checkout-summary">
              <h2>Order Summary</h2>

              <div className="checkout-summary-row">
                <span>Total Items</span>
                <strong>{cartCount}</strong>
              </div>

              <div className="checkout-summary-row">
                <span>Subtotal</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>

              <div className="checkout-summary-row">
                <span>Delivery</span>
                <strong>To be confirmed</strong>
              </div>

              <div className="checkout-total-row">
                <span>Estimated Total</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>

              <button type="button" className="checkout-submit-btn">
                Submit Order Request
              </button>

              <button
                type="button"
                className="checkout-clear-btn"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
};

export default CheckoutPage;