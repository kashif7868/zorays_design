import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  ArrowRight,
  Eye,
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Star,
  Zap,
} from "lucide-react";
import { zoraysShopProductsData } from "../../Data/shop/zoraysShopProductsData";
import { useAppDispatch, useAppSelector } from "../../app/reduxHooks";
import { addToCart } from "../../app/features/cart/cartSlice";
import "../../assets/css/shop/shopProductsGrid.css";

type ShopProductsGridProps = {
  activeCategory: string;
  searchQuery: string;
  sortOption: string;
};

const ShopProductsGrid = ({
  activeCategory,
  searchQuery,
  sortOption,
}: ShopProductsGridProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const cartItems = useAppSelector((state) => state.cart.items);

  const [quantities, setQuantities] = useState<Record<number, number>>(
    zoraysShopProductsData.reduce((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {} as Record<number, number>)
  );

  const filteredProducts = useMemo(() => {
    const cleanSearch = searchQuery.trim().toLowerCase();

    const filtered = zoraysShopProductsData.filter((product) => {
      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;

      const matchesSearch =
        !cleanSearch ||
        product.title.toLowerCase().includes(cleanSearch) ||
        product.desc.toLowerCase().includes(cleanSearch) ||
        product.brand.toLowerCase().includes(cleanSearch) ||
        product.category.toLowerCase().includes(cleanSearch);

      return matchesCategory && matchesSearch;
    });

    if (sortOption === "price-low") {
      return [...filtered].sort((a, b) => a.priceAmount - b.priceAmount);
    }

    if (sortOption === "price-high") {
      return [...filtered].sort((a, b) => b.priceAmount - a.priceAmount);
    }

    if (sortOption === "rating") {
      return [...filtered].sort((a, b) => Number(b.rating) - Number(a.rating));
    }

    return [...filtered].sort((a, b) => {
      if (a.featured === b.featured) return a.id - b.id;
      return a.featured ? -1 : 1;
    });
  }, [activeCategory, searchQuery, sortOption]);

  const increaseQuantity = (productId: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 1) + 1,
    }));
  };

  const decreaseQuantity = (productId: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) - 1),
    }));
  };

  const isProductAlreadyInCart = (productId: number) => {
    return cartItems.some((item) => item.id === productId);
  };

  const handleAddToCart = (productId: number) => {
    const product = zoraysShopProductsData.find((item) => item.id === productId);

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
    const product = zoraysShopProductsData.find((item) => item.id === productId);

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

  return (
    <section className="zs-products-section">
      <div className="zs-shop-container">
        <div className="zs-products-header">
          <div>
            <span className="zs-products-eyebrow">
              <Zap size={16} />
              Product Catalogue
            </span>

            <h2>Solar Products Ready for Inquiry</h2>
          </div>

          <p>
            Showing <strong>{filteredProducts.length}</strong> product
            {filteredProducts.length === 1 ? "" : "s"}.
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="zs-products-empty">
            <ShoppingCart size={42} />
            <h3>No products found</h3>
            <p>Try another category, search term, or sorting option.</p>
          </div>
        ) : (
          <div className="zs-products-grid">
            {filteredProducts.map((product) => (
              <article className="zs-product-card" key={product.id}>
                <div className="zs-product-image-wrap">
                  <img src={product.image} alt={product.title} loading="lazy" />

                  <span className="zs-product-tag">{product.tag}</span>

                  {product.featured && (
                    <span className="zs-product-featured">Featured</span>
                  )}

                  <div className="zs-product-quick-actions">
                    <button
                      type="button"
                      aria-label={`View ${product.title}`}
                    >
                      <Eye size={15} />
                    </button>

                    <button
                      type="button"
                      aria-label={`Save ${product.title}`}
                    >
                      <Heart size={15} />
                    </button>
                  </div>
                </div>

                <div className="zs-product-content">
                  <div className="zs-product-meta">
                    <span>{product.brand}</span>

                    <div>
                      <Star size={13} fill="currentColor" />
                      <strong>{product.rating}</strong>
                    </div>
                  </div>

                  <h3>{product.title}</h3>
                  <p>{product.desc}</p>

                  <div className="zs-product-price-row">
                    <strong>{product.price}</strong>
                    <del>{product.oldPrice}</del>
                  </div>

                  <div className="zs-product-qty-row">
                    <span>Qty</span>

                    <div className="zs-product-qty-control">
                      <button
                        type="button"
                        onClick={() => decreaseQuantity(product.id)}
                        aria-label={`Decrease ${product.title} quantity`}
                      >
                        <Minus size={13} />
                      </button>

                      <strong>{quantities[product.id] || 1}</strong>

                      <button
                        type="button"
                        onClick={() => increaseQuantity(product.id)}
                        aria-label={`Increase ${product.title} quantity`}
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                  </div>

                  <div className="zs-product-actions">
                    <button
                      type="button"
                      className="zs-product-cart-btn"
                      onClick={() => handleAddToCart(product.id)}
                    >
                      <ShoppingCart size={15} />
                      Add to Cart
                    </button>

                    <button
                      type="button"
                      className="zs-product-order-btn"
                      onClick={() => handleOrderNow(product.id)}
                    >
                      Order Now
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ShopProductsGrid;