import { useState } from "react";
import ShopHero from "./ShopHero";
import ShopCategoryFilter from "./ShopCategoryFilter";
import ShopProductsGrid from "./ShopProductsGrid";
import ShopWhyZorays from "./ShopWhyZorays";
import ShopCtaSection from "./ShopCtaSection";
import "../../assets/css/shop/zoraysShop.css";

const ZoraysShop = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("featured");

  return (
    <main className="zorays-shop-page">
      <ShopHero />

      <ShopCategoryFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortOption={sortOption}
        onSortChange={setSortOption}
      />

      <ShopProductsGrid
        activeCategory={activeCategory}
        searchQuery={searchQuery}
        sortOption={sortOption}
      />

      <ShopWhyZorays />
      <ShopCtaSection />
    </main>
  );
};

export default ZoraysShop;