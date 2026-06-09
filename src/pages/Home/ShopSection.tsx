import { useEffect, useRef, useState } from "react";
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

const products = [
  {
    id: 1,
    title: "Canadian Solar 620W N-Type",
    desc: "High-efficiency bifacial solar panel for residential and commercial solar systems.",
    price: "Rs. 29,915",
    oldPrice: "Rs. 31,500",
    tag: "Solar Panel",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Solis 6kW Hybrid Inverter",
    desc: "Smart hybrid inverter for solar charging, battery backup, and load management.",
    price: "Rs. 265,000",
    oldPrice: "Rs. 285,000",
    tag: "Hybrid Inverter",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "SES 314Ah Lithium Battery",
    desc: "Long-life LiFePO₄ battery for stable backup and solar energy storage.",
    price: "Rs. 475,000",
    oldPrice: "Rs. 505,000",
    tag: "Lithium Battery",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "GoodWe 8kW Hybrid Inverter",
    desc: "Premium hybrid inverter for efficient backup and three-phase solar applications.",
    price: "Rs. 360,000",
    oldPrice: "Rs. 385,000",
    tag: "GoodWe",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "DC Protection Box",
    desc: "Solar protection accessories including breakers, fuses, SPD, and isolators.",
    price: "Rs. 5,000",
    oldPrice: "Rs. 6,500",
    tag: "Accessories",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Solar DC Cable 6mm",
    desc: "Durable solar cable for safe DC wiring and reliable rooftop installations.",
    price: "Rs. 180 / meter",
    oldPrice: "Rs. 220 / meter",
    tag: "Cable",
    rating: "4.6",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=700&auto=format&fit=crop",
  },
];

const ShopSection = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [quantities, setQuantities] = useState<Record<number, number>>(
    products.reduce((acc, product) => {
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
        ? Math.min(activeIndex + 1, products.length - 1)
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

            <h2>Solar Products</h2>

            <p>
              Browse solar panels, hybrid inverters, lithium batteries, and
              accessories selected for Pakistan’s residential, commercial, and
              industrial power needs.
            </p>
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
          {products.map((product) => (
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
                  <button type="button" className="shop-cart-btn">
                    <ShoppingCart size={15} />
                    Add to Cart
                  </button>

                  <a href="/shop" className="shop-order-btn">
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="shop-dots">
          {products.map((product, index) => (
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