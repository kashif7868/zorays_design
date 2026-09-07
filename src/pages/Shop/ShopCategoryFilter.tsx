import {
  Search,
  SlidersHorizontal,
} from "lucide-react";

import "../../assets/css/shop/shopCategoryFilter.css";

import {
  shopCategories,
  shopSortOptions,
} from "../../Data/shop/shopCategoryData";

type ShopCategoryFilterProps = {
  activeCategory: string;

  onCategoryChange: (
    category: string
  ) => void;

  searchQuery: string;

  onSearchChange: (
    query: string
  ) => void;

  sortOption: string;

  onSortChange: (
    option: string
  ) => void;
};

const ShopCategoryFilter = ({
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  sortOption,
  onSortChange,
}: ShopCategoryFilterProps) => {
  return (
    <section
      className="zs-filter-section"
      id="shop-products"
    >
      <div className="zs-shop-container">
        <div className="zs-filter-panel">

          <div className="zs-filter-top">
            <div className="zs-filter-heading">
              <span className="zs-filter-eyebrow">
                <SlidersHorizontal size={15} />
                Solar Trade Hub
              </span>

              <h2>
                Browse Solar Equipment
              </h2>

              <p>
                Search products, select a category,
                and sort listings to find the right
                equipment faster.
              </p>
            </div>

            <div className="zs-filter-controls">

              <label className="zs-shop-search">
                <Search size={17} />

                <input
                  type="search"
                  placeholder="Search solar products..."
                  value={searchQuery}
                  onChange={(event) =>
                    onSearchChange(
                      event.target.value
                    )
                  }
                  aria-label="Search shop products"
                />
              </label>

              <label className="zs-shop-sort-wrap">
                <span>
                  Sort by
                </span>

                <select
                  className="zs-shop-sort"
                  value={sortOption}
                  onChange={(event) =>
                    onSortChange(
                      event.target.value
                    )
                  }
                  aria-label="Sort products"
                >
                  {shopSortOptions.map(
                    (option) => (
                      <option
                        value={option.value}
                        key={option.value}
                      >
                        {option.label}
                      </option>
                    )
                  )}
                </select>
              </label>

            </div>
          </div>

          <div
            className="zs-category-row"
            role="group"
            aria-label="Product categories"
          >
            {shopCategories.map(
              (category) => {
                const Icon =
                  category.icon;

                const isActive =
                  activeCategory ===
                  category.value;

                return (
                  <button
                    key={category.id}
                    type="button"
                    className={`zs-category-pill${
                      isActive
                        ? " is-active"
                        : ""
                    }`}
                    onClick={() =>
                      onCategoryChange(
                        category.value
                      )
                    }
                    aria-pressed={
                      isActive
                    }
                  >
                    <span className="zs-category-icon">
                      <Icon size={16} />
                    </span>

                    <span>
                      {category.label}
                    </span>
                  </button>
                );
              }
            )}
          </div>

          <div className="zs-filter-note">
            <strong>
              Buying tip:
            </strong>

            <span>
              Compare products first, add preferred
              items to cart, then proceed to checkout
              when your equipment selection is ready.
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ShopCategoryFilter;