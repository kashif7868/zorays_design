import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Home from "../pages/Home/Home";
import NetMetering from "../pages/NetMetering/NetMetering";
import SolarBackup from "../pages/SolarBackup/SolarBackup";
import SolarFinancing from "../pages/SolarFinancing/SolarFinancing";
import SolarAgriculture from "../pages/SolarAgriculture/SolarAgriculture";

import CartPage from "../pages/Cart/CartPage";
import CheckoutPage from "../pages/Cart/Checkout/CheckoutPage";

import ZoraysShop from "../pages/Shop/ZoraysShop";
import ZoraysProductView from "../pages/Shop/ProductView/ZoraysProductView";

import NotFound from "./NotFound";

const Pages = () => {
  return (
    <Routes>
      {/* =====================================================
          MAIN WEBSITE
          ===================================================== */}

      <Route
        path="/"
        element={<Home />}
      />


      {/* =====================================================
          SOLAR PAGES
          ===================================================== */}

      <Route
        path="/solar-net-metering"
        element={<NetMetering />}
      />

      <Route
        path="/solar-backup"
        element={<SolarBackup />}
      />

      <Route
        path="/solar-financing"
        element={<SolarFinancing />}
      />

      <Route
        path="/solar-agricultural-solutions"
        element={<SolarAgriculture />}
      />


      {/* =====================================================
          CART / CHECKOUT
          ===================================================== */}

      <Route
        path="/cart"
        element={<CartPage />}
      />

      <Route
        path="/checkout"
        element={<CheckoutPage />}
      />


      {/* =====================================================
          ZORAYS SHOP
          ===================================================== */}

      <Route
        path="/zorays-shop"
        element={<ZoraysShop />}
      />

      <Route
        path="/zorays-shop/product/:productId"
        element={<ZoraysProductView />}
      />


      {/* =====================================================
          LEGACY SHOP ROUTES
          ===================================================== */}

      <Route
        path="/shop"
        element={
          <Navigate
            to="/zorays-shop"
            replace
          />
        }
      />

      <Route
        path="/shop/product/:productId"
        element={<ZoraysProductView />}
      />


      {/* =====================================================
          OLD INCORRECT ROUTE
          ===================================================== */}

      <Route
        path="/preduct-view"
        element={
          <Navigate
            to="/zorays-shop"
            replace
          />
        }
      />


      {/* =====================================================
          404
          ===================================================== */}

      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
};

export default Pages;