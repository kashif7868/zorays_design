import {
  BatteryCharging,
  Boxes,
  Cable,
  Grid3X3,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  SolarPanel,
  Zap,
} from "lucide-react";
import "../../assets/css/shop/shopCategoryFilter.css";

type ShopCategoryFilterProps = {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortOption: string;
  onSortChange: (option: string) => void;
};

const categories = [
  {
    label: "All",
    value: "All",
    icon: <Grid3X3 size={17} />,
  },
  {
    label: "Solar Panels",
    value: "Solar Panel",
    icon: <SolarPanel size={17} />,
  },
  {
    label: "Hybrid Inverters",
    value: "Hybrid Inverter",
    icon: <Zap size={17} />,
  },
  {
    label: "Lithium Batteries",
    value: "Lithium Battery",
    icon: <BatteryCharging size={17} />,
  },
  {
    label: "Protection",
    value: "Protection",
    icon: <ShieldCheck size={17} />,
  },
  {
    label: "Cables",
    value: "Cable",
    icon: <Cable size={17} />,
  },
  {
    label: "Accessories",
    value: "Accessories",
    icon: <Boxes size={17} />,
  },
];

const ShopCategoryFilter = ({
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  sortOption,
  onSortChange,
}: ShopCategoryFilterProps) => {
  return (
    <section className="zs-filter-section" id="shop-products">
      <div className="zs-shop-container">
        <div className="zs-filter-panel">
          <div className="zs-filter-top">
            <div className="zs-filter-heading">
              <span>
                <SlidersHorizontal size={16} />
                Shop Filters
              </span>

              <h2>Find the Right Solar Product</h2>

              <p>
                Search by product name, filter by category, and sort products
                for faster selection.
              </p>
            </div>

            <div className="zs-filter-controls">
              <div className="zs-shop-search">
                <Search size={18} />
                <input
                  type="search"
                  placeholder="Search panels, inverters, batteries..."
                  value={searchQuery}
                  onChange={(event) => onSearchChange(event.target.value)}
                  aria-label="Search shop products"
                />
              </div>

              <select
                className="zs-shop-sort"
                value={sortOption}
                onChange={(event) => onSortChange(event.target.value)}
                aria-label="Sort products"
              >
                <option value="featured">Featured Products</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          <div className="zs-category-row">
            {categories.map((category) => (
              <button
                key={category.value}
                type="button"
                className={`zs-category-pill${
                  activeCategory === category.value ? " is-active" : ""
                }`}
                onClick={() => onCategoryChange(category.value)}
              >
                <span className="zs-category-icon">{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          <div className="zs-filter-note">
            <span>Tip:</span> Choose “Order Now” for direct checkout or “Add to
            Cart” to save products before final review.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopCategoryFilter;