import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import NotFound from "./NotFound";

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* 404 - Page Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}