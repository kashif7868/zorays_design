import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import CartPage from "../pages/Cart/CartPage";
import CheckoutPage from "../pages/Cart/Checkout/CheckoutPage";
import ZoraysShop from "../pages/Shop/ZoraysShop";
import NotFound from "./NotFound";

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/shop" element={<ZoraysShop />} />
      {/* 404 - Page Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}