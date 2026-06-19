import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
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

const PRODUCTS_PER_PAGE = 8;

const ShopProductsGrid = ({
  activeCategory,
  searchQuery,
  sortOption,
}: ShopProductsGridProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const cartItems = useAppSelector((state) => state.cart.items);

  const [currentPage, setCurrentPage] = useState(1);

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

  const totalProducts = filteredProducts.length;
  const totalPages = Math.max(1, Math.ceil(totalProducts / PRODUCTS_PER_PAGE));
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = Math.min(startIndex + PRODUCTS_PER_PAGE, totalProducts);

  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
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

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    const productsSection = document.getElementById("shop-products-grid");
    productsSection?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <section className="zs-products-section" id="shop-products-grid">
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
            Showing{" "}
            <strong>
              {totalProducts === 0 ? 0 : startIndex + 1}-{endIndex}
            </strong>{" "}
            of <strong>{totalProducts}</strong> product
            {totalProducts === 1 ? "" : "s"}.
          </p>
        </div>

        {paginatedProducts.length === 0 ? (
          <div className="zs-products-empty">
            <ShoppingCart size={42} />
            <h3>No products found</h3>
            <p>Try another category, search term, or sorting option.</p>
          </div>
        ) : (
          <>
            <div className="zs-products-grid">
              {paginatedProducts.map((product) => (
                <article className="zs-product-card" key={product.id}>
                  <div className="zs-product-image-wrap">
                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                    />

                    <span className="zs-product-tag">{product.tag}</span>

                    {product.featured && (
                      <span className="zs-product-featured">Featured</span>
                    )}

                    <div className="zs-product-quick-actions">
                      <button type="button" aria-label={`View ${product.title}`}>
                        <Eye size={15} />
                      </button>

                      <button type="button" aria-label={`Save ${product.title}`}>
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

            {totalPages > 1 && (
              <div className="zs-products-pagination">
                <button
                  type="button"
                  className="zs-page-btn zs-page-nav-btn"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft size={17} />
                  Prev
                </button>

                <div className="zs-page-numbers">
                  {pageNumbers.map((page) => (
                    <button
                      key={page}
                      type="button"
                      className={`zs-page-number${
                        currentPage === page ? " is-active" : ""
                      }`}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  className="zs-page-btn zs-page-nav-btn"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                  <ChevronRight size={17} />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default ShopProductsGrid;