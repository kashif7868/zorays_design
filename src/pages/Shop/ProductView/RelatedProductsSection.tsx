import { useMemo } from "react";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import {
  ArrowRight,
  Eye,
  ShoppingCart,
  Star,
  Zap,
} from "lucide-react";

import {
  zoraysShopProductsData,
  type ZoraysShopProduct,
} from "../../../Data/shop/zoraysShopProductsData";

import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/reduxHooks";

import {
  addToCart,
} from "../../../app/features/cart/cartSlice";

import "../../../assets/css/shop/productView/relatedProductsSection.css";


type RelatedProductsSectionProps = {
  product: ZoraysShopProduct;
};


const PRODUCT_FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80";


const RelatedProductsSection = ({
  product,
}: RelatedProductsSectionProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const cartItems = useAppSelector(
    (state) => state.cart.items
  );


  /* ============================================================
     RELATED PRODUCTS
     ============================================================ */

  const relatedProducts = useMemo(() => {
    const sameCategory =
      zoraysShopProductsData.filter(
        (item) =>
          item.category === product.category &&
          item.id !== product.id
      );

    const otherProducts =
      zoraysShopProductsData.filter(
        (item) =>
          item.category !== product.category &&
          item.id !== product.id
      );

    return [
      ...sameCategory,
      ...otherProducts,
    ].slice(0, 4);
  }, [product]);


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
     PRODUCT VIEW
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
    event: React.MouseEvent<HTMLButtonElement>,
    selectedProduct: ZoraysShopProduct
  ) => {
    event.stopPropagation();

    if (
      isProductAlreadyInCart(
        selectedProduct.id
      )
    ) {
      toast.info(
        "This product is already added to cart."
      );

      return;
    }

    dispatch(
      addToCart({
        product: selectedProduct,
        quantity: 1,
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
    event: React.MouseEvent<HTMLButtonElement>,
    selectedProduct: ZoraysShopProduct
  ) => {
    event.stopPropagation();

    if (
      !isProductAlreadyInCart(
        selectedProduct.id
      )
    ) {
      dispatch(
        addToCart({
          product: selectedProduct,
          quantity: 1,
        })
      );
    }

    navigate("/checkout");
  };


  if (relatedProducts.length === 0) {
    return null;
  }


  return (
    <section className="zpr-section">
      <div className="zpv-container">

        {/* ====================================================
            HEADER
            ==================================================== */}

        <div className="zpr-header">
          <div>
            <span className="zpr-eyebrow">
              <Zap size={15} />
              Related Solar Equipment
            </span>

            <h2>
              You May Also Need
            </h2>
          </div>

          <p>
            Recommended products from the same
            or complementary solar categories.
          </p>
        </div>


        {/* ====================================================
            PRODUCT GRID
            ==================================================== */}

        <div className="zpr-grid">
          {relatedProducts.map((item) => {
            const inCart =
              isProductAlreadyInCart(
                item.id
              );

            return (
              <article
                className="zpr-card"
                key={item.id}
                onClick={() =>
                  handleViewProduct(
                    item.id
                  )
                }
                role="link"
                tabIndex={0}
                aria-label={`View ${item.title}`}
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" ||
                    event.key === " "
                  ) {
                    event.preventDefault();

                    handleViewProduct(
                      item.id
                    );
                  }
                }}
              >

                {/* IMAGE */}

                <div className="zpr-image-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.onerror =
                        null;

                      event.currentTarget.src =
                        PRODUCT_FALLBACK_IMAGE;
                    }}
                  />

                  <div className="zpr-image-overlay" />

                  <div className="zpr-badges">
                    <span className="zpr-tag">
                      {item.tag}
                    </span>

                    {item.featured && (
                      <span className="zpr-featured">
                        Featured
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    className="zpr-view-btn"
                    onClick={(event) => {
                      event.stopPropagation();

                      handleViewProduct(
                        item.id
                      );
                    }}
                    aria-label={`View ${item.title}`}
                  >
                    <Eye size={15} />
                  </button>
                </div>


                {/* CONTENT */}

                <div className="zpr-content">

                  <div className="zpr-meta">
                    <span className="zpr-brand">
                      {item.brand}
                    </span>

                    <div className="zpr-rating">
                      <Star
                        size={12}
                        fill="currentColor"
                      />

                      <strong>
                        {item.rating}
                      </strong>
                    </div>
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.desc}
                  </p>

                  <div className="zpr-price-row">
                    <div>
                      <span>
                        Price
                      </span>

                      <strong>
                        {item.price}
                      </strong>
                    </div>

                    {item.oldPrice && (
                      <del>
                        {item.oldPrice}
                      </del>
                    )}
                  </div>


                  {/* ACTIONS */}

                  <div className="zpr-actions">
                    <button
                      type="button"
                      className={`zpr-cart-btn${
                        inCart
                          ? " is-added"
                          : ""
                      }`}
                      onClick={(event) =>
                        handleAddToCart(
                          event,
                          item
                        )
                      }
                    >
                      <ShoppingCart size={14} />

                      {inCart
                        ? "In Cart"
                        : "Add"}
                    </button>

                    <button
                      type="button"
                      className="zpr-order-btn"
                      onClick={(event) =>
                        handleOrderNow(
                          event,
                          item
                        )
                      }
                    >
                      Order

                      <ArrowRight size={14} />
                    </button>
                  </div>

                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedProductsSection;