import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ProductViewSection from "./ProductViewSection";
import RelatedProductsSection from "./RelatedProductsSection";
import { zoraysShopProductsData } from "../../../Data/shop/zoraysShopProductsData";
import "../../../assets/css/shop/productView/zoraysPreductView.css";

const ZoraysProductView = () => {
  const { productId } = useParams();

  const product = useMemo(() => {
    return zoraysShopProductsData.find(
      (item) => String(item.id) === String(productId)
    );
  }, [productId]);

  if (!product) {
    return (
      <main className="zpv-page">
        <section className="zpv-not-found">
          <div className="zpv-container">
            <div className="zpv-not-found-card">
              <h1>Product Not Found</h1>
              <p>
                This product is not available or may have been removed from the
                shop catalogue.
              </p>

              <Link to="/zorays-shop" className="zpv-back-btn">
                <ArrowLeft size={17} />
                Back to Shop
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="zpv-page">
      <ProductViewSection product={product} />
      <RelatedProductsSection product={product} />
    </main>
  );
};

export default ZoraysProductView;