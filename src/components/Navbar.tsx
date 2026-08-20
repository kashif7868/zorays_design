import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaStar,
  FaSun,
} from "react-icons/fa";

import {
  MdPhone,
  MdEmail,
  MdOutlineElectricBolt,
  MdElectricBolt,
} from "react-icons/md";

import {
  IoShieldCheckmark,
  IoClose,
  IoHomeOutline,
  IoHome,
  IoSearchOutline,
  IoSearch,
} from "react-icons/io5";

import { RiMenu3Line } from "react-icons/ri";
import { PiSolarPanelLight } from "react-icons/pi";
import { BsShop, BsShopWindow } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi2";

import { useAppSelector } from "../app/reduxHooks";

import zoraysLogo from "../assets/images/logo.png";

import "../assets/css/navbar.css";


/* ============================================================
   ROUTES
   ============================================================ */

const NET_METERING_ROUTE = "/solar-net-metering";
const SOLAR_FORM_HASH = "#multi-step-form";


/* ============================================================
   DESKTOP NAVIGATION
   ============================================================ */

const navLinks = [
  {
    label: "Solar Net Metering",
    href: NET_METERING_ROUTE,
  },

  {
    label: "Solar Backup",
    href: "/solar-backup",
  },

  {
    label: "Solar Financing",
    href: "/solar-financing",
  },

  {
    label: "Solar Tubewell",
    href: "/solar-agricultural-solutions",
  },

  {
    label: "Solar Clientele",
    href: "/solar-clientele",
  },

  {
    label: "Solar Blog",
    href: "/solar-blog",
  },

  {
    label: "Zorays Pakistan",
    href: "/zorays-pakistan",
  },
];


/* ============================================================
   MOBILE DRAWER NAVIGATION
   ============================================================ */

const drawerLinks = [
  {
    label: "Solar Net Metering",
    href: NET_METERING_ROUTE,
  },

  {
    label: "Solar Backup",
    href: "/solar-backup",
  },

  {
    label: "Solar Financing",
    href: "/solar-financing",
  },

  {
    label: "Solar Tubewell",
    href: "/solar-tubewell",
  },

  {
    label: "Solar Clientele",
    href: "/solar-clientele",
  },

  {
    label: "Zorays Shop",
    href: "/zorays-shop",
    icon: <BsShop size={15} />,
    hasCartBadge: true,
  },

  {
    label: "Solar Blog",
    href: "/solar-blog",
  },

  {
    label: "Zorays Pakistan",
    href: "/zorays-pakistan",
  },
];


/* ============================================================
   MOBILE BOTTOM NAVIGATION
   ============================================================ */

const bottomNav = [
  {
    label: "Home",
    href: "/",
    icon: <IoHomeOutline size={22} />,
    iconActive: <IoHome size={22} />,
  },

  {
    label: "Solar",
    href: NET_METERING_ROUTE,
    icon: <PiSolarPanelLight size={22} />,
    iconActive: <PiSolarPanelLight size={22} />,
  },

  {
    label: "Quote",
    href: "/quote",
    icon: <MdOutlineElectricBolt size={24} />,
    iconActive: <MdElectricBolt size={24} />,
    isCta: true,
  },

  {
    label: "Shop",
    href: "/zorays-shop",
    icon: <BsShop size={20} />,
    iconActive: <BsShopWindow size={20} />,
    hasCartBadge: true,
  },

  {
    label: "Search",
    href: "#",
    icon: <IoSearchOutline size={22} />,
    iconActive: <IoSearch size={22} />,
    isSearch: true,
  },
];


const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const cartCount = useAppSelector((state) =>
    state.cart.items.reduce(
      (total, item) => total + item.quantity,
      0
    )
  );

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [searchOpen, setSearchOpen] =
    useState(false);

  const [searchQuery, setSearchQuery] =
    useState("");

  const [activeLink, setActiveLink] =
    useState<string | null>(null);

  const [activeBottom, setActiveBottom] =
    useState<string>("Home");

  const searchInputRef =
    useRef<HTMLInputElement>(null);

  const searchRowRef =
    useRef<HTMLDivElement>(null);


  /* ============================================================
     ACTIVE ROUTE STATE
     ============================================================ */

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveBottom("Home");
      setActiveLink(null);
      return;
    }

    if (
      location.pathname.startsWith(
        NET_METERING_ROUTE
      )
    ) {
      setActiveBottom("Solar");
      setActiveLink(
        "Solar Net Metering"
      );
      return;
    }

    if (
      location.pathname.startsWith(
        "/zorays-shop"
      )
    ) {
      setActiveBottom("Shop");
      setActiveLink("Zorays Shop");
      return;
    }

    if (
      location.pathname.startsWith(
        "/quote"
      )
    ) {
      setActiveBottom("Quote");
      setActiveLink(null);
      return;
    }

    const matchedLink = navLinks.find(
      (item) =>
        location.pathname.startsWith(
          item.href
        )
    );

    setActiveLink(
      matchedLink
        ? matchedLink.label
        : null
    );

    setActiveBottom("");
  }, [location.pathname]);


  /* ============================================================
     CLOSE MOBILE ON DESKTOP
     ============================================================ */

  useEffect(() => {
    const fn = () => {
      if (window.innerWidth > 960) {
        setMobileOpen(false);
      }
    };

    window.addEventListener(
      "resize",
      fn
    );

    return () =>
      window.removeEventListener(
        "resize",
        fn
      );
  }, []);


  /* ============================================================
     BODY SCROLL LOCK
     ============================================================ */

  useEffect(() => {
    document.body.style.overflow =
      mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);


  /* ============================================================
     SEARCH AUTO FOCUS
     ============================================================ */

  useEffect(() => {
    if (searchOpen) {
      setTimeout(
        () =>
          searchInputRef.current?.focus(),
        40
      );
    }
  }, [searchOpen]);


  /* ============================================================
     SEARCH OUTSIDE CLICK
     ============================================================ */

  useEffect(() => {
    if (!searchOpen) return;

    const fn = (e: MouseEvent) => {
      if (
        searchRowRef.current &&
        !searchRowRef.current.contains(
          e.target as Node
        )
      ) {
        closeSearch();
      }
    };

    document.addEventListener(
      "mousedown",
      fn
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        fn
      );
  }, [searchOpen]);


  /* ============================================================
     ESCAPE SEARCH
     ============================================================ */

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeSearch();
      }
    };

    document.addEventListener(
      "keydown",
      fn
    );

    return () =>
      document.removeEventListener(
        "keydown",
        fn
      );
  }, []);


  /* ============================================================
     MOBILE
     ============================================================ */

  const toggleMobile = () =>
    setMobileOpen((value) => !value);

  const closeMobile = () =>
    setMobileOpen(false);


  /* ============================================================
     SEARCH
     ============================================================ */

  const openSearch = () => {
    setSearchOpen(true);
    closeMobile();
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  const toggleSearch = () => {
    if (searchOpen) {
      closeSearch();
    } else {
      openSearch();
    }
  };


  /* ============================================================
     SCROLL HELPER
     ============================================================ */

  const scrollToSection = (
    href: string
  ) => {
    if (!href.startsWith("#")) {
      return;
    }

    const target =
      document.querySelector(href);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


  /* ============================================================
     SOLAR NET METERING SPECIAL ROUTING

     HOME
     Solar Net Metering
     -> #multi-step-form

     ANY OTHER PAGE
     Solar Net Metering
     -> /solar-net-metering
     ============================================================ */

  const handleNetMeteringNavigation =
    () => {
      closeMobile();

      setActiveLink(
        "Solar Net Metering"
      );

      setActiveBottom("Solar");

      /*
       * User is currently on HOME.
       * Go to the solar assessment form.
       */
      if (location.pathname === "/") {
        const formSection =
          document.querySelector(
            SOLAR_FORM_HASH
          );

        if (formSection) {
          formSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }

        return;
      }

      /*
       * User is on any other page.
       * Open dedicated Net Metering page.
       */
      navigate(NET_METERING_ROUTE);
    };


  /* ============================================================
     GENERIC ROUTING
     ============================================================ */

  const goToLink = (
    href: string
  ) => {
    if (href.startsWith("#")) {
      if (location.pathname === "/") {
        scrollToSection(href);
        return;
      }

      navigate("/");

      setTimeout(() => {
        scrollToSection(href);
      }, 150);

      return;
    }

    navigate(href);
  };


  /* ============================================================
     DESKTOP / DRAWER CLICK
     ============================================================ */

  const handleNavClick = (
    label: string,
    href: string
  ) => {
    /*
     * Solar Net Metering has
     * special route behaviour.
     */
    if (
      label === "Solar Net Metering"
    ) {
      handleNetMeteringNavigation();
      return;
    }

    setActiveLink(label);

    closeMobile();

    goToLink(href);
  };


  /* ============================================================
     MOBILE BOTTOM NAV CLICK
     ============================================================ */

  const handleBottomClick = (
    item: (typeof bottomNav)[0]
  ) => {
    if (item.isSearch) {
      toggleSearch();
      return;
    }

    /*
     * Same Solar behaviour
     * as desktop navbar.
     */
    if (item.label === "Solar") {
      handleNetMeteringNavigation();
      return;
    }

    setActiveBottom(item.label);

    goToLink(item.href);
  };


  /* ============================================================
     SEARCH SUBMIT
     ============================================================ */

  const handleSearchSubmit = (
    e: FormEvent
  ) => {
    e.preventDefault();

    const cleanQuery =
      searchQuery.trim();

    if (!cleanQuery) return;

    navigate(
      `/zorays-shop?search=${encodeURIComponent(
        cleanQuery
      )}`
    );

    closeSearch();
    closeMobile();
  };


  /* ============================================================
     ACTIVE DESKTOP / DRAWER NAV
     ============================================================ */

  const isNavItemActive = (
    label: string,
    href: string
  ) => {
    if (
      label ===
      "Solar Net Metering"
    ) {
      return location.pathname.startsWith(
        NET_METERING_ROUTE
      );
    }

    if (
      href === "/zorays-shop" &&
      location.pathname.startsWith(
        "/zorays-shop"
      )
    ) {
      return true;
    }

    return (
      location.pathname === href
    );
  };


  return (
    <>
      {/* ======================================================
          TOP BAR
          ====================================================== */}

      <div className="zr-topbar">
        <div className="zr-topbar__inner">

          <div className="zr-topbar__social">
            <a
              href="https://wa.me/923001234567"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://facebook.com/zorays"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com/zoraysinc"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com/company/zorays"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://youtube.com/@zorays"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>


          <div className="zr-topbar__center">
            <span className="zr-topbar__badge">
              <IoShieldCheckmark className="badge-icon" />

              Pakistan&apos;s Trusted
              Solar Energy Partner
            </span>

            <span className="zr-topbar__badge">
              <FaStar className="badge-icon" />

              10+ Years of Excellence
            </span>
          </div>


          <div className="zr-topbar__right">

            <a
              href="tel:+923001234567"
              className="zr-topbar__contact"
            >
              <MdPhone />

              <span>
                +92 300 1234567
              </span>
            </a>


            <a
              href="mailto:info@zorays.com.pk"
              className="zr-topbar__contact"
            >
              <MdEmail />

              <span>
                info@zorays.com.pk
              </span>
            </a>

          </div>
        </div>
      </div>


      {/* ======================================================
          MAIN NAVBAR
          ====================================================== */}

      <nav
        className="zr-navbar"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="zr-navbar__inner">

          {/* LOGO */}

          <Link
            to="/"
            className="zr-navbar__logo"
            aria-label="Zorays Home"
          >
            <img
              src={zoraysLogo}
              alt="Zorays Solar"
              className="zorays_logo"
            />

            <div className="zr-navbar__logo-text">
              <span className="logo-name">
                ZORAYS
              </span>

              <span className="logo-sub">
                SMC · PVT LTD
              </span>
            </div>
          </Link>


          {/* DESKTOP MENU */}

          <ul className="zr-navbar__menu">

            {navLinks.map((item) => {
              const isActive =
                isNavItemActive(
                  item.label,
                  item.href
                );

              return (
                <li
                  key={item.label}
                  className="zr-nav-item"
                >
                  <a
                    href={item.href}
                    className={`zr-nav-link${
                      isActive
                        ? " is-active"
                        : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();

                      handleNavClick(
                        item.label,
                        item.href
                      );
                    }}
                  >
                    {item.label}

                    {isActive && (
                      <span className="zr-nav-active-bar" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>


          {/* RIGHT ACTIONS */}

          <div className="zr-navbar__right">

            <Link
              to="/zorays-shop"
              className="zr-shop-quick-link"
              aria-label="Zorays Shop"
              title="Zorays Shop"
            >
              <BsShop size={17} />
            </Link>


            <Link
              to="/cart"
              className="zr-icon-btn zr-cart-link"
              aria-label={`Cart ${cartCount} items`}
              title="Cart"
            >
              <HiOutlineShoppingBag
                size={21}
              />

              {cartCount > 0 && (
                <span className="zr-cart-badge">
                  {cartCount}
                </span>
              )}
            </Link>


            {/* SEARCH */}

            <div
              ref={searchRowRef}
              className={`zr-search-row${
                searchOpen
                  ? " is-open"
                  : ""
              }`}
            >
              <form
                onSubmit={
                  handleSearchSubmit
                }
                className="zr-search-form"
                role="search"
              >
                <input
                  ref={searchInputRef}
                  type="search"
                  className="zr-search-input"
                  placeholder="Search solar solutions..."
                  value={searchQuery}
                  onChange={(e) =>
                    setSearchQuery(
                      e.target.value
                    )
                  }
                  aria-label="Search"
                  tabIndex={
                    searchOpen
                      ? 0
                      : -1
                  }
                />

                {searchQuery && (
                  <button
                    type="button"
                    className="zr-search-clear"
                    onClick={() => {
                      setSearchQuery("");

                      searchInputRef.current?.focus();
                    }}
                    aria-label="Clear"
                  >
                    <IoClose size={14} />
                  </button>
                )}
              </form>


              <button
                className="zr-search-toggle"
                onClick={toggleSearch}
                aria-label={
                  searchOpen
                    ? "Close search"
                    : "Open search"
                }
                aria-expanded={
                  searchOpen
                }
                type="button"
              >
                {searchOpen ? (
                  <IoClose size={19} />
                ) : (
                  <IoSearchOutline
                    size={19}
                  />
                )}
              </button>
            </div>


            {/* QUOTE CTA */}

            <Link
              to="/quote"
              className={`zr-cta${
                searchOpen
                  ? " zr-cta--gone"
                  : ""
              }`}
              aria-hidden={
                searchOpen
              }
              tabIndex={
                searchOpen
                  ? -1
                  : 0
              }
            >
              <FaSun className="zr-cta-icon" />

              Get Solar Quote
            </Link>


            {/* HAMBURGER */}

            <button
              className={`zr-hamburger${
                mobileOpen
                  ? " is-open"
                  : ""
              }`}
              onClick={toggleMobile}
              aria-label="Toggle menu"
              aria-expanded={
                mobileOpen
              }
              type="button"
            >
              {mobileOpen ? (
                <IoClose size={22} />
              ) : (
                <RiMenu3Line
                  size={22}
                />
              )}
            </button>
          </div>
        </div>
      </nav>


      {/* ======================================================
          MOBILE DRAWER
          ====================================================== */}

      <div
        className={`zr-mobile-overlay${
          mobileOpen
            ? " is-open"
            : ""
        }`}
        aria-hidden={!mobileOpen}
      >
        <div
          className="zr-mobile-backdrop"
          onClick={closeMobile}
        />


        <div
          className="zr-mobile-drawer"
          role="dialog"
          aria-modal="true"
        >

          <div className="zr-mobile-header">

            <Link
              to="/"
              className="zr-navbar__logo"
              onClick={closeMobile}
            >
              <img
                src={zoraysLogo}
                alt="Zorays Solar"
                className="zorays_logo zorays_logo--drawer"
              />

              <div className="zr-navbar__logo-text">
                <span className="logo-name">
                  ZORAYS
                </span>

                <span className="logo-sub">
                  SMC · PVT LTD
                </span>
              </div>
            </Link>


            <button
              className="zr-mobile-close"
              onClick={closeMobile}
              aria-label="Close menu"
              type="button"
            >
              <IoClose size={20} />
            </button>

          </div>


          {/* MOBILE SEARCH */}

          <div className="zr-mobile-search-box">

            <form
              onSubmit={
                handleSearchSubmit
              }
              className="zr-drawer-search-form"
              role="search"
            >
              <IoSearchOutline
                size={16}
                className="zr-drawer-search-icon"
                aria-hidden="true"
              />

              <input
                type="search"
                className="zr-drawer-search-input"
                placeholder="Search solar solutions..."
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(
                    e.target.value
                  )
                }
                aria-label="Search"
              />

              {searchQuery && (
                <button
                  type="button"
                  className="zr-drawer-search-clear"
                  onClick={() =>
                    setSearchQuery("")
                  }
                  aria-label="Clear"
                >
                  <IoClose size={14} />
                </button>
              )}
            </form>

          </div>


          {/* MOBILE LINKS */}

          <ul className="zr-mobile-nav">

            {drawerLinks.map(
              (item) => {
                const isActive =
                  isNavItemActive(
                    item.label,
                    item.href
                  );

                return (
                  <li
                    key={item.label}
                    className="zr-mobile-item"
                  >
                    <a
                      href={item.href}
                      className={`zr-mobile-link${
                        isActive
                          ? " is-active"
                          : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();

                        handleNavClick(
                          item.label,
                          item.href
                        );
                      }}
                    >

                      {item.icon && (
                        <span
                          className="zr-mobile-link__icon"
                          aria-hidden="true"
                        >
                          {item.icon}
                        </span>
                      )}


                      <span className="zr-mobile-link__text">
                        {item.label}
                      </span>


                      {item.hasCartBadge &&
                        cartCount > 0 && (
                          <span className="zr-mobile-cart-badge">
                            {cartCount}
                          </span>
                        )}
                    </a>
                  </li>
                );
              }
            )}
          </ul>


          {/* CONTACTS */}

          <div className="zr-mobile-contacts">

            <a href="tel:+923001234567">
              <MdPhone size={15} />

              +92 300 1234567
            </a>

            <a href="mailto:info@zorays.com.pk">
              <MdEmail size={15} />

              info@zorays.com.pk
            </a>

          </div>


          {/* MOBILE CTA */}

          <div className="zr-mobile-footer">

            <Link
              to="/quote"
              className="zr-cta zr-cta--full"
              onClick={closeMobile}
            >
              <FaSun className="zr-cta-icon" />

              Get Solar Quote
            </Link>

          </div>
        </div>
      </div>


      {/* ======================================================
          MOBILE BOTTOM NAV
          ====================================================== */}

      <nav
        className="zr-bottom-nav"
        aria-label="Bottom navigation"
      >
        {bottomNav.map((item) => {
          const isActive =
            item.isSearch
              ? searchOpen
              : activeBottom ===
                item.label;

          return (
            <a
              key={item.label}
              href={
                item.isSearch
                  ? "#"
                  : item.href
              }
              role={
                item.isSearch
                  ? "button"
                  : undefined
              }
              className={`zr-bottom-nav__item${
                isActive
                  ? " is-active"
                  : ""
              }${
                item.isCta
                  ? " is-cta"
                  : ""
              }`}
              aria-label={
                item.isSearch
                  ? searchOpen
                    ? "Close search"
                    : "Search"
                  : item.label
              }
              onClick={(e) => {
                e.preventDefault();

                handleBottomClick(
                  item
                );
              }}
            >

              <span className="zr-bottom-nav__icon">

                {isActive
                  ? item.iconActive
                  : item.icon}


                {item.hasCartBadge &&
                  cartCount > 0 && (
                    <span className="zr-bottom-cart-badge">
                      {cartCount}
                    </span>
                  )}

              </span>


              <span className="zr-bottom-nav__label">

                {item.isSearch &&
                searchOpen
                  ? "Close"
                  : item.label}

              </span>


              {isActive &&
                !item.isCta && (
                  <span className="zr-bottom-nav__dot" />
                )}

            </a>
          );
        })}
      </nav>


      {/* ======================================================
          MOBILE SEARCH OVERLAY
          ====================================================== */}

      <div
        className={`zr-mob-search-overlay${
          searchOpen
            ? " is-open"
            : ""
        }`}
        onClick={closeSearch}
        aria-hidden={!searchOpen}
      >

        <div
          className="zr-mob-search-panel"
          onClick={(e) =>
            e.stopPropagation()
          }
        >

          <form
            onSubmit={
              handleSearchSubmit
            }
            className="zr-mob-search-form"
            role="search"
          >

            <IoSearchOutline
              size={20}
              className="zr-mob-search-icon"
              aria-hidden="true"
            />


            <input
              type="search"
              className="zr-mob-search-input"
              placeholder="Search solar solutions..."
              value={searchQuery}
              onChange={(e) =>
                setSearchQuery(
                  e.target.value
                )
              }
              autoFocus
              aria-label="Search"
            />


            <button
              type="button"
              className="zr-mob-search-close"
              onClick={closeSearch}
              aria-label="Close"
            >
              <IoClose size={20} />
            </button>

          </form>


          <div className="zr-mob-search-tags">

            {[
              "Solar Net Metering",
              "Solar Panels",
              "Solar Backup",
              "Solar Financing",
              "Solar Tubewell",
            ].map((tag) => (
              <button
                key={tag}
                type="button"
                className="zr-mob-search-tag"
                onClick={() =>
                  setSearchQuery(tag)
                }
              >
                {tag}
              </button>
            ))}

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;