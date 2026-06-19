import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import CartPage from "../pages/Cart/CartPage";
import CheckoutPage from "../pages/Cart/Checkout/CheckoutPage";
import ZoraysShop from "../pages/Shop/ZoraysShop";
import ZoraysProductView from "../pages/Shop/ProductView/ZoraysProductView";
import NotFound from "./NotFound";

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />

      {/* Zorays Shop */}
      <Route path="/zorays-shop" element={<ZoraysShop />} />
      <Route
        path="/zorays-shop/product/:productId"
        element={<ZoraysProductView />}
      />

      {/* Old shop routes support */}
      <Route path="/shop" element={<Navigate to="/zorays-shop" replace />} />
      <Route path="/shop/product/:productId" element={<ZoraysProductView />} />

      {/* Old wrong route redirect */}
      <Route
        path="/preduct-view"
        element={<Navigate to="/zorays-shop" replace />}
      />

      {/* 404 - Page Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}