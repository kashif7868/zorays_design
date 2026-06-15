import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  ArrowLeft,
  ArrowRight,
  ShoppingCart,
  Eye,
  Star,
  Heart,
  Zap,
  Plus,
  Minus,
} from "lucide-react";
import "../../assets/css/home/shopSection.css";
import { shopProductsData } from "../../Data/home/shopProductsData";
import { useAppDispatch, useAppSelector } from "../../app/reduxHooks";
import { addToCart } from "../../app/features/cart/cartSlice";

const ShopSection = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const cartItems = useAppSelector((state) => state.cart.items);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [quantities, setQuantities] = useState<Record<number, number>>(
    shopProductsData.reduce((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {} as Record<number, number>)
  );

  const increaseQuantity = (productId: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: prev[productId] + 1,
    }));
  };

  const decreaseQuantity = (productId: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, prev[productId] - 1),
    }));
  };

  const isProductAlreadyInCart = (productId: number) => {
    return cartItems.some((item) => item.id === productId);
  };

  const handleAddToCart = (productId: number) => {
    const product = shopProductsData.find((item) => item.id === productId);

    if (!product) return;

    if (isProductAlreadyInCart(productId)) {
      toast.info("This product is already added to cart.");
      return;
    }

    dispatch(
      addToCart({
        product,
        quantity: quantities[productId] || 1,
      })
    );

    toast.success("Product added to cart.");
  };

  const handleOrderNow = (productId: number) => {
    const product = shopProductsData.find((item) => item.id === productId);

    if (!product) return;

    if (!isProductAlreadyInCart(productId)) {
      dispatch(
        addToCart({
          product,
          quantity: quantities[productId] || 1,
        })
      );
    }

    navigate("/checkout");
  };

  const scrollToProduct = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.children[index] as HTMLElement;
    if (!card) return;

    container.scrollTo({
      left: card.offsetLeft - container.offsetLeft,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  const scrollProducts = (direction: "left" | "right") => {
    const nextIndex =
      direction === "right"
        ? Math.min(activeIndex + 1, shopProductsData.length - 1)
        : Math.max(activeIndex - 1, 0);

    scrollToProduct(nextIndex);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cards = Array.from(container.children) as HTMLElement[];
      const scrollLeft = container.scrollLeft;

      let currentIndex = 0;
      let closestDistance = Number.MAX_VALUE;

      cards.forEach((card, index) => {
        const distance = Math.abs(card.offsetLeft - scrollLeft);

        if (distance < closestDistance) {
          closestDistance = distance;
          currentIndex = index;
        }
      });

      setActiveIndex(currentIndex);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="shop-section">
      <div className="shop-bg-circle shop-bg-circle-one" />
      <div className="shop-bg-circle shop-bg-circle-two" />

      <div className="shop-container">
        <div className="shop-header">
          <div className="shop-header-content">
            <span className="shop-badge">
              <Zap size={15} />
              Zorays Solar Shop
            </span>
          </div>

          <div className="shop-header-actions">
            <div className="shop-header-left-actions">
              <button
                type="button"
                className="shop-slider-btn"
                onClick={() => scrollProducts("left")}
                aria-label="Scroll products left"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                type="button"
                className="shop-slider-btn"
                onClick={() => scrollProducts("right")}
                aria-label="Scroll products right"
              >
                <ArrowRight size={18} />
              </button>
            </div>

            <a href="/shop" className="shop-view-all">
              View All
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="shop-products-scroll" ref={scrollRef}>
          {shopProductsData.map((product) => (
            <div key={product.id} className="shop-product-card" tabIndex={0}>
              <div className="shop-product-image-wrap">
                <img
                  src={product.image}
                  alt={product.title}
                  className="shop-product-image"
                  loading="lazy"
                />

                <span className="shop-product-tag">{product.tag}</span>

                <div className="shop-quick-actions">
                  <a
                    href="/shop"
                    className="shop-icon-btn"
                    aria-label={`View ${product.title}`}
                  >
                    <Eye size={15} />
                  </a>

                  <button
                    type="button"
                    className="shop-icon-btn"
                    aria-label={`Save ${product.title}`}
                  >
                    <Heart size={15} />
                  </button>
                </div>

                <div className="shop-image-hover-content">
                  <h4>{product.title}</h4>
                  <p>{product.desc}</p>
                </div>
              </div>

              <div className="shop-product-content">
                <div className="shop-rating">
                  <Star size={13} fill="currentColor" />
                  <span>{product.rating}</span>
                  <small>Verified</small>
                </div>

                <div className="shop-price-row">
                  <strong>{product.price}</strong>
                  <del>{product.oldPrice}</del>
                </div>

                <div className="shop-quantity-row">
                  <span>Qty</span>

                  <div className="shop-quantity-control">
                    <button
                      type="button"
                      onClick={() => decreaseQuantity(product.id)}
                      aria-label={`Decrease ${product.title} quantity`}
                    >
                      <Minus size={13} />
                    </button>

                    <strong>{quantities[product.id]}</strong>

                    <button
                      type="button"
                      onClick={() => increaseQuantity(product.id)}
                      aria-label={`Increase ${product.title} quantity`}
                    >
                      <Plus size={13} />
                    </button>
                  </div>
                </div>

                <div className="shop-card-actions">
                  <button
                    type="button"
                    className="shop-cart-btn"
                    onClick={() => handleAddToCart(product.id)}
                  >
                    <ShoppingCart size={15} />
                    Add to Cart
                  </button>

                  <button
                    type="button"
                    className="shop-order-btn"
                    onClick={() => handleOrderNow(product.id)}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="shop-dots">
          {shopProductsData.map((product, index) => (
            <button
              key={product.id}
              type="button"
              className={`shop-dot ${activeIndex === index ? "active" : ""}`}
              onClick={() => scrollToProduct(index)}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>

        <a href="/shop" className="shop-mobile-view-all">
          View All Products
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
};

export default ShopSection;