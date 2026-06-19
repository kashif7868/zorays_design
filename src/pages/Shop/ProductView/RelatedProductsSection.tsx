import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  ArrowRight,
  Eye,
  Minus,
  Plus,
  ShoppingCart,
  Star,
  Zap,
} from "lucide-react";
import {
  zoraysShopProductsData,
  type ZoraysShopProduct,
} from "../../../Data/shop/zoraysShopProductsData";
import { useAppDispatch, useAppSelector } from "../../../app/reduxHooks";
import { addToCart } from "../../../app/features/cart/cartSlice";
import "../../../assets/css/shop/productView/relatedProductsSection.css";

type RelatedProductsSectionProps = {
  product: ZoraysShopProduct;
};

const RelatedProductsSection = ({ product }: RelatedProductsSectionProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const cartItems = useAppSelector((state) => state.cart.items);

  const relatedProducts = useMemo(() => {
    const sameCategory = zoraysShopProductsData.filter(
      (item) => item.category === product.category && item.id !== product.id
    );

    const otherProducts = zoraysShopProductsData.filter(
      (item) => item.category !== product.category && item.id !== product.id
    );

    return [...sameCategory, ...otherProducts].slice(0, 4);
  }, [product]);

  const isProductAlreadyInCart = (productId: number) => {
    return cartItems.some((item) => item.id === productId);
  };

const handleViewProduct = (productId: number) => {
  navigate(`/zorays-shop/product/${productId}`);
};

  const handleAddToCart = (
    event: React.MouseEvent<HTMLButtonElement>,
    selectedProduct: ZoraysShopProduct
  ) => {
    event.stopPropagation();

    if (isProductAlreadyInCart(selectedProduct.id)) {
      toast.info("This product is already added to cart.");
      return;
    }

    dispatch(
      addToCart({
        product: selectedProduct,
        quantity: 1,
      })
    );

    toast.success("Product added to cart.");
  };

  const handleOrderNow = (
    event: React.MouseEvent<HTMLButtonElement>,
    selectedProduct: ZoraysShopProduct
  ) => {
    event.stopPropagation();

    if (!isProductAlreadyInCart(selectedProduct.id)) {
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
        <div className="zpr-header">
          <div>
            <span className="zpr-eyebrow">
              <Zap size={16} />
              Related Products
            </span>

            <h2>You May Also Need</h2>
          </div>

          <p>
            Related products are selected from the same or nearby solar product
            category.
          </p>
        </div>

        <div className="zpr-grid">
          {relatedProducts.map((item) => (
            <article
              className="zpr-card"
              key={item.id}
              onClick={() => handleViewProduct(item.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleViewProduct(item.id);
                }
              }}
            >
              <div className="zpr-image-wrap">
                <img src={item.image} alt={item.title} loading="lazy" />

                <span className="zpr-tag">{item.tag}</span>

                <button
                  type="button"
                  className="zpr-view-btn"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleViewProduct(item.id);
                  }}
                  aria-label={`View ${item.title}`}
                >
                  <Eye size={15} />
                </button>
              </div>

              <div className="zpr-content">
                <div className="zpr-meta">
                  <span>{item.brand}</span>

                  <div>
                    <Star size={13} fill="currentColor" />
                    <strong>{item.rating}</strong>
                  </div>
                </div>

                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                <div className="zpr-price-row">
                  <strong>{item.price}</strong>
                  <del>{item.oldPrice}</del>
                </div>

                <div className="zpr-actions">
                  <button
                    type="button"
                    className="zpr-cart-btn"
                    onClick={(event) => handleAddToCart(event, item)}
                  >
                    <ShoppingCart size={14} />
                    Add
                  </button>

                  <button
                    type="button"
                    className="zpr-order-btn"
                    onClick={(event) => handleOrderNow(event, item)}
                  >
                    Order
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProductsSection;