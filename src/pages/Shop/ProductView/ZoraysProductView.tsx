import { useMemo } from "react";

import {
  Link,
  useParams,
} from "react-router-dom";

import {
  ArrowLeft,
  ChevronRight,
  PackageSearch,
  ShoppingBag,
} from "lucide-react";

import ProductViewSection from "./ProductViewSection";
import RelatedProductsSection from "./RelatedProductsSection";

import {
  zoraysShopProductsData,
} from "../../../Data/shop/zoraysShopProductsData";

import "../../../assets/css/shop/productView/zoraysPreductView.css";


const ZoraysProductView = () => {
  const { productId } = useParams<{
    productId: string;
  }>();


  /* ============================================================
     PRODUCT LOOKUP
     ============================================================ */

  const product = useMemo(() => {
    if (!productId) {
      return undefined;
    }

    return zoraysShopProductsData.find(
      (item) =>
        String(item.id) ===
        String(productId)
    );
  }, [productId]);


  /* ============================================================
     PRODUCT NOT FOUND
     ============================================================ */

  if (!product) {
    return (
      <main className="zpv-page">
        <section className="zpv-not-found">
          <div className="zpv-container">
            <div className="zpv-not-found-card">
              <span className="zpv-not-found-icon">
                <PackageSearch size={30} />
              </span>

              <span className="zpv-not-found-eyebrow">
                Solar Trade Hub
              </span>

              <h1>
                Product Not Found
              </h1>

              <p>
                This product is not currently available
                in the Zorays Solar Trade Hub catalogue,
                or the product link may no longer be valid.
              </p>

              <Link
                to="/zorays-shop"
                className="zpv-back-btn"
              >
                <ArrowLeft size={16} />
                Back to Solar Trade Hub
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }


  return (
    <main className="zpv-page">

      {/* ========================================================
          PRODUCT NAVIGATION
          ======================================================== */}

      <div className="zpv-product-nav">
        <div className="zpv-container">
          <div className="zpv-product-nav-inner">

            <Link
              to="/zorays-shop"
              className="zpv-product-back"
            >
              <ArrowLeft size={14} />
              Back to Shop
            </Link>


            <nav
              className="zpv-breadcrumb"
              aria-label="Product breadcrumb"
            >
              <Link to="/">
                Home
              </Link>

              <ChevronRight size={12} />

              <Link to="/zorays-shop">
                Solar Trade Hub
              </Link>

              <ChevronRight size={12} />

              <span>
                {product.category}
              </span>
            </nav>


            <span className="zpv-product-context">
              <ShoppingBag size={13} />
              Product #{product.id}
            </span>

          </div>
        </div>
      </div>


      {/* ========================================================
          MAIN PRODUCT
          ======================================================== */}

      <ProductViewSection
        product={product}
      />


      {/* ========================================================
          RELATED PRODUCTS
          ======================================================== */}

      <RelatedProductsSection
        product={product}
      />

    </main>
  );
};

export default ZoraysProductView;