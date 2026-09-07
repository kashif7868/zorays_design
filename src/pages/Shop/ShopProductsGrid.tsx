import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Eye,
  Minus,
  PackageSearch,
  Plus,
  ShoppingCart,
  Star,
  Zap,
} from "lucide-react";

import {
  zoraysShopProductsData,
} from "../../Data/shop/zoraysShopProductsData";

import {
  useAppDispatch,
  useAppSelector,
} from "../../app/reduxHooks";

import {
  addToCart,
} from "../../app/features/cart/cartSlice";

import "../../assets/css/shop/shopProductsGrid.css";


type ShopProductsGridProps = {
  activeCategory: string;
  searchQuery: string;
  sortOption: string;
};


const PRODUCTS_PER_PAGE = 8;

const PRODUCT_FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80";


const ShopProductsGrid = ({
  activeCategory,
  searchQuery,
  sortOption,
}: ShopProductsGridProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const cartItems = useAppSelector(
    (state) => state.cart.items
  );

  const [currentPage, setCurrentPage] =
    useState(1);

  const [quantities, setQuantities] =
    useState<Record<number, number>>(() =>
      zoraysShopProductsData.reduce(
        (acc, product) => {
          acc[product.id] = 1;
          return acc;
        },
        {} as Record<number, number>
      )
    );


  /* ============================================================
     FILTER + SEARCH + SORT
     ============================================================ */

  const filteredProducts = useMemo(() => {
    const cleanSearch =
      searchQuery.trim().toLowerCase();

    const filtered =
      zoraysShopProductsData.filter(
        (product) => {
          const matchesCategory =
            activeCategory === "All" ||
            product.category ===
              activeCategory;

          const matchesSearch =
            !cleanSearch ||
            product.title
              .toLowerCase()
              .includes(cleanSearch) ||
            product.desc
              .toLowerCase()
              .includes(cleanSearch) ||
            product.brand
              .toLowerCase()
              .includes(cleanSearch) ||
            product.category
              .toLowerCase()
              .includes(cleanSearch);

          return (
            matchesCategory &&
            matchesSearch
          );
        }
      );

    if (
      sortOption === "price-low"
    ) {
      return [...filtered].sort(
        (a, b) =>
          a.priceAmount -
          b.priceAmount
      );
    }

    if (
      sortOption === "price-high"
    ) {
      return [...filtered].sort(
        (a, b) =>
          b.priceAmount -
          a.priceAmount
      );
    }

    if (
      sortOption === "rating"
    ) {
      return [...filtered].sort(
        (a, b) =>
          Number(b.rating) -
          Number(a.rating)
      );
    }

    return [...filtered].sort(
      (a, b) => {
        if (
          a.featured === b.featured
        ) {
          return a.id - b.id;
        }

        return a.featured
          ? -1
          : 1;
      }
    );
  }, [
    activeCategory,
    searchQuery,
    sortOption,
  ]);


  /* ============================================================
     PAGINATION
     ============================================================ */

  const totalProducts =
    filteredProducts.length;

  const totalPages = Math.max(
    1,
    Math.ceil(
      totalProducts /
        PRODUCTS_PER_PAGE
    )
  );

  const startIndex =
    (currentPage - 1) *
    PRODUCTS_PER_PAGE;

  const endIndex = Math.min(
    startIndex +
      PRODUCTS_PER_PAGE,
    totalProducts
  );

  const paginatedProducts =
    filteredProducts.slice(
      startIndex,
      endIndex
    );


  useEffect(() => {
    setCurrentPage(1);
  }, [
    activeCategory,
    searchQuery,
    sortOption,
  ]);


  /* ============================================================
     QUANTITY
     ============================================================ */

  const increaseQuantity = (
    productId: number
  ) => {
    setQuantities((prev) => ({
      ...prev,

      [productId]:
        (prev[productId] || 1) + 1,
    }));
  };


  const decreaseQuantity = (
    productId: number
  ) => {
    setQuantities((prev) => ({
      ...prev,

      [productId]: Math.max(
        1,
        (prev[productId] || 1) - 1
      ),
    }));
  };


  /* ============================================================
     CART CHECK
     ============================================================ */

  const isProductAlreadyInCart = (
    productId: number
  ) => {
    return cartItems.some(
      (item) =>
        item.id === productId
    );
  };


  /* ============================================================
     PRODUCT DETAIL
     ============================================================ */

  const handleViewProduct = (
    productId: number
  ) => {
    navigate(
      `/zorays-shop/product/${productId}`
    );
  };


  /* ============================================================
     ADD TO CART
     ============================================================ */

  const handleAddToCart = (
    productId: number
  ) => {
    const product =
      zoraysShopProductsData.find(
        (item) =>
          item.id === productId
      );

    if (!product) {
      return;
    }

    if (
      isProductAlreadyInCart(
        productId
      )
    ) {
      toast.info(
        "This product is already added to cart."
      );

      return;
    }

    dispatch(
      addToCart({
        product,

        quantity:
          quantities[productId] ||
          1,
      })
    );

    toast.success(
      "Product added to cart."
    );
  };


  /* ============================================================
     ORDER NOW
     ============================================================ */

  const handleOrderNow = (
    productId: number
  ) => {
    const product =
      zoraysShopProductsData.find(
        (item) =>
          item.id === productId
      );

    if (!product) {
      return;
    }

    if (
      !isProductAlreadyInCart(
        productId
      )
    ) {
      dispatch(
        addToCart({
          product,

          quantity:
            quantities[productId] ||
            1,
        })
      );
    }

    navigate("/checkout");
  };


  /* ============================================================
     PAGE CHANGE
     ============================================================ */

  const handlePageChange = (
    page: number
  ) => {
    if (
      page < 1 ||
      page > totalPages ||
      page === currentPage
    ) {
      return;
    }

    setCurrentPage(page);

    requestAnimationFrame(() => {
      document
        .getElementById(
          "shop-products-grid"
        )
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    });
  };


  const pageNumbers =
    Array.from(
      {
        length: totalPages,
      },
      (_, index) =>
        index + 1
    );


  return (
    <section
      className="zs-products-section"
      id="shop-products-grid"
    >
      <div className="zs-shop-container">

        {/* ====================================================
            HEADER
            ==================================================== */}

        <div className="zs-products-header">
          <div className="zs-products-heading">
            <span className="zs-products-eyebrow">
              <Zap size={15} />
              Solar Equipment Marketplace
            </span>

            <h2>
              Products Ready for
              Selection
            </h2>

            <p>
              Compare equipment,
              review specifications,
              adjust quantities and
              build your solar order.
            </p>
          </div>


          <div className="zs-products-result-box">
            <span>
              Showing
            </span>

            <strong>
              {totalProducts === 0
                ? "0"
                : `${startIndex + 1}-${endIndex}`}
            </strong>

            <span>
              of {totalProducts}{" "}
              {totalProducts === 1
                ? "product"
                : "products"}
            </span>
          </div>
        </div>


        {/* ====================================================
            EMPTY STATE
            ==================================================== */}

        {paginatedProducts.length ===
        0 ? (
          <div className="zs-products-empty">
            <span className="zs-products-empty-icon">
              <PackageSearch
                size={30}
              />
            </span>

            <h3>
              No products found
            </h3>

            <p>
              Try another category,
              search term, or sorting
              option.
            </p>
          </div>
        ) : (
          <>
            {/* =================================================
                PRODUCT GRID
                ================================================= */}

            <div className="zs-products-grid">
              {paginatedProducts.map(
                (product) => {
                  const quantity =
                    quantities[
                      product.id
                    ] || 1;

                  const inCart =
                    isProductAlreadyInCart(
                      product.id
                    );

                  return (
                    <article
                      className="zs-product-card"
                      key={product.id}
                      onClick={() =>
                        handleViewProduct(
                          product.id
                        )
                      }
                      role="link"
                      tabIndex={0}
                      aria-label={`View ${product.title}`}
                      onKeyDown={(
                        event
                      ) => {
                        if (
                          event.key ===
                            "Enter" ||
                          event.key === " "
                        ) {
                          event.preventDefault();

                          handleViewProduct(
                            product.id
                          );
                        }
                      }}
                    >

                      {/* IMAGE */}

                      <div className="zs-product-image-wrap">
                        <img
                          src={
                            product.image
                          }
                          alt={
                            product.title
                          }
                          loading="lazy"
                          onError={(
                            event
                          ) => {
                            event.currentTarget.onerror =
                              null;

                            event.currentTarget.src =
                              PRODUCT_FALLBACK_IMAGE;
                          }}
                        />

                        <div className="zs-product-image-shade" />

                        <div className="zs-product-badges">
                          <span className="zs-product-tag">
                            {
                              product.tag
                            }
                          </span>

                          {product.featured && (
                            <span className="zs-product-featured">
                              Featured
                            </span>
                          )}
                        </div>

                        <button
                          type="button"
                          className="zs-product-view-btn"
                          aria-label={`View ${product.title}`}
                          onClick={(
                            event
                          ) => {
                            event.stopPropagation();

                            handleViewProduct(
                              product.id
                            );
                          }}
                        >
                          <Eye
                            size={15}
                          />
                        </button>
                      </div>


                      {/* CONTENT */}

                      <div className="zs-product-content">

                        {/* META */}

                        <div className="zs-product-meta">
                          <span className="zs-product-brand">
                            {
                              product.brand
                            }
                          </span>

                          <span className="zs-product-rating">
                            <Star
                              size={12}
                              fill="currentColor"
                            />

                            <strong>
                              {
                                product.rating
                              }
                            </strong>
                          </span>
                        </div>


                        {/* TITLE */}

                        <h3>
                          {product.title}
                        </h3>


                        {/* DESCRIPTION */}

                        <p className="zs-product-description">
                          {product.desc}
                        </p>


                        {/* PRICE */}

                        <div className="zs-product-price-row">
                          <div>
                            <span>
                              Price
                            </span>

                            <strong>
                              {
                                product.price
                              }
                            </strong>
                          </div>

                          {product.oldPrice && (
                            <del>
                              {
                                product.oldPrice
                              }
                            </del>
                          )}
                        </div>


                        {/* QUANTITY */}

                        <div className="zs-product-qty-row">
                          <div>
                            <span>
                              Quantity
                            </span>

                            {inCart && (
                              <small>
                                Already in
                                cart
                              </small>
                            )}
                          </div>

                          <div className="zs-product-qty-control">
                            <button
                              type="button"
                              onClick={(
                                event
                              ) => {
                                event.stopPropagation();

                                decreaseQuantity(
                                  product.id
                                );
                              }}
                              aria-label={`Decrease ${product.title} quantity`}
                              disabled={
                                quantity ===
                                1
                              }
                            >
                              <Minus
                                size={13}
                              />
                            </button>

                            <strong>
                              {
                                quantity
                              }
                            </strong>

                            <button
                              type="button"
                              onClick={(
                                event
                              ) => {
                                event.stopPropagation();

                                increaseQuantity(
                                  product.id
                                );
                              }}
                              aria-label={`Increase ${product.title} quantity`}
                            >
                              <Plus
                                size={13}
                              />
                            </button>
                          </div>
                        </div>


                        {/* ACTIONS */}

                        <div className="zs-product-actions">
                          <button
                            type="button"
                            className={`zs-product-cart-btn${
                              inCart
                                ? " is-added"
                                : ""
                            }`}
                            onClick={(
                              event
                            ) => {
                              event.stopPropagation();

                              handleAddToCart(
                                product.id
                              );
                            }}
                          >
                            <ShoppingCart
                              size={14}
                            />

                            {inCart
                              ? "In Cart"
                              : "Add to Cart"}
                          </button>

                          <button
                            type="button"
                            className="zs-product-order-btn"
                            onClick={(
                              event
                            ) => {
                              event.stopPropagation();

                              handleOrderNow(
                                product.id
                              );
                            }}
                          >
                            Order Now

                            <ArrowRight
                              size={14}
                            />
                          </button>
                        </div>

                      </div>
                    </article>
                  );
                }
              )}
            </div>


            {/* =================================================
                PAGINATION
                ================================================= */}

            {totalPages > 1 && (
              <nav
                className="zs-products-pagination"
                aria-label="Product pages"
              >
                <button
                  type="button"
                  className="zs-page-btn zs-page-nav-btn"
                  onClick={() =>
                    handlePageChange(
                      currentPage - 1
                    )
                  }
                  disabled={
                    currentPage === 1
                  }
                  aria-label="Previous product page"
                >
                  <ChevronLeft
                    size={16}
                  />

                  <span>
                    Previous
                  </span>
                </button>


                <div className="zs-page-numbers">
                  {pageNumbers.map(
                    (page) => (
                      <button
                        key={page}
                        type="button"
                        className={`zs-page-number${
                          currentPage ===
                          page
                            ? " is-active"
                            : ""
                        }`}
                        onClick={() =>
                          handlePageChange(
                            page
                          )
                        }
                        aria-current={
                          currentPage ===
                          page
                            ? "page"
                            : undefined
                        }
                        aria-label={`Go to product page ${page}`}
                      >
                        {page}
                      </button>
                    )
                  )}
                </div>


                <button
                  type="button"
                  className="zs-page-btn zs-page-nav-btn"
                  onClick={() =>
                    handlePageChange(
                      currentPage + 1
                    )
                  }
                  disabled={
                    currentPage ===
                    totalPages
                  }
                  aria-label="Next product page"
                >
                  <span>
                    Next
                  </span>

                  <ChevronRight
                    size={16}
                  />
                </button>
              </nav>
            )}
          </>
        )}

      </div>
    </section>
  );
};

export default ShopProductsGrid;