import { useState, useEffect, useRef } from "react";

import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaStar, FaSun } from "react-icons/fa";
import { MdPhone, MdEmail } from "react-icons/md";
import { IoShieldCheckmark, IoClose, IoHomeOutline, IoHome, IoCallOutline, IoCall, IoSearchOutline, IoSearch } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import { PiSolarPanelLight } from "react-icons/pi";
import { MdOutlineElectricBolt, MdElectricBolt } from "react-icons/md";
import { BsShop, BsShopWindow } from "react-icons/bs";
import zoraysLogo from "../assets/images/logo.png";
import "../assets/css/navbar.css";

// ─── Logo Mark (used inside mobile drawer) ───────────────────────────────────
const ZoraysLogoMark = () => (
  <div className="zorays-logo-mark">
    <span className="logo-mark-z">Z</span>
  </div>
);

// ─── Desktop nav links ───────────────────────────────────────────────────────
const navLinks = [
  { label: "Solar Net Metering", href: "#multi-step-form" },
  { label: "Solar Backup",       href: "#" },
  { label: "Solar Financing",    href: "#" },
  { label: "Solar Tubewell",     href: "#" },
  { label: "Solar Clientele",    href: "#" },
  { label: "Solar Blog",         href: "#" },
  { label: "Zorays Pakistan",    href: "#" },
];

// ─── Mobile drawer links (includes Solar Shop) ───────────────────────────────
const drawerLinks = [
  { label: "Solar Net Metering", href: "#multi-step-form" },
  { label: "Solar Backup",       href: "#" },
  { label: "Solar Financing",    href: "#" },
  { label: "Solar Tubewell",     href: "#" },
  { label: "Solar Clientele",    href: "#" },
  { label: "Solar Shop",         href: "#", icon: <BsShop size={15} /> },
  { label: "Solar Blog",         href: "#" },
  { label: "Zorays Pakistan",    href: "#" },
];

// ─── Bottom Nav (mobile only) ─────────────────────────────────────────────────
const bottomNav = [
  { label: "Home",   href: "/",               icon: <IoHomeOutline size={22} />,        iconActive: <IoHome size={22} /> },
  { label: "Solar",  href: "#multi-step-form", icon: <PiSolarPanelLight size={22} />,   iconActive: <PiSolarPanelLight size={22} /> },
  { label: "Quote",  href: "#quote",           icon: <MdOutlineElectricBolt size={24} />, iconActive: <MdElectricBolt size={24} />, isCta: true },
  { label: "Shop",   href: "#",               icon: <BsShop size={20} />,               iconActive: <BsShopWindow size={20} /> },
  { label: "Search", href: "#",               icon: <IoSearchOutline size={22} />,      iconActive: <IoSearch size={22} />, isSearch: true },
];

// ─── Main Component ───────────────────────────────────────────────────────────
const Navbar = () => {
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [searchOpen,   setSearchOpen]   = useState(false);
  const [searchQuery,  setSearchQuery]  = useState("");
  const [activeLink,   setActiveLink]   = useState<string | null>(null);
  const [activeBottom, setActiveBottom] = useState<string>("Home");

  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchRowRef   = useRef<HTMLDivElement>(null);

  // Close drawer on desktop resize
  useEffect(() => {
    const fn = () => { if (window.innerWidth > 960) setMobileOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  // Scroll lock when drawer open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Focus input when desktop search opens
  useEffect(() => {
    if (searchOpen) setTimeout(() => searchInputRef.current?.focus(), 40);
  }, [searchOpen]);

  // Click outside search row → close
  useEffect(() => {
    if (!searchOpen) return;
    const fn = (e: MouseEvent) => {
      if (searchRowRef.current && !searchRowRef.current.contains(e.target as Node)) {
        closeSearch();
      }
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, [searchOpen]);

  // Escape → close search
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") closeSearch(); };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, []);

  const toggleMobile  = () => setMobileOpen(v => !v);
  const closeMobile   = () => setMobileOpen(false);
  const openSearch    = () => { setSearchOpen(true); closeMobile(); };
  const closeSearch   = () => { setSearchOpen(false); setSearchQuery(""); };
  const toggleSearch  = () => (searchOpen ? closeSearch() : openSearch());

  const handleNavClick = (label: string, href: string) => {
    setActiveLink(label);
    closeMobile();
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBottomClick = (item: typeof bottomNav[0]) => {
    if (item.isSearch) { toggleSearch(); return; }
    setActiveBottom(item.label);
    if (item.href.startsWith("#")) {
      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) console.log("Search:", searchQuery.trim());
  };

  return (
    <>
      {/* ════════════════ TOP BAR ════════════════ */}
      <div className="zr-topbar">
        <div className="zr-topbar__inner">

          <div className="zr-topbar__social">
            <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>

          <div className="zr-topbar__center">
            <span className="zr-topbar__badge">
              <IoShieldCheckmark className="badge-icon" />
              Pakistan's Trusted Solar Energy Partner
            </span>
            <span className="zr-topbar__badge">
              <FaStar className="badge-icon" />
              10+ Years of Excellence
            </span>
          </div>

          <div className="zr-topbar__right">
            <a href="tel:+923001234567" className="zr-topbar__contact">
              <MdPhone /><span>+92 300 1234567</span>
            </a>
            <a href="mailto:info@zorays.com.pk" className="zr-topbar__contact">
              <MdEmail /><span>info@zorays.com.pk</span>
            </a>
          </div>

        </div>
      </div>

      {/* ════════════════ MAIN NAVBAR ════════════════ */}
      <nav className="zr-navbar" role="navigation" aria-label="Main navigation">
        <div className="zr-navbar__inner">

          {/* Logo */}
          <a href="/" className="zr-navbar__logo" aria-label="Zorays Home">
            <img src={zoraysLogo} alt="Zorays Solar" className="zorays_logo" />
            <div className="zr-navbar__logo-text">
              <span className="logo-name">ZORAYS</span>
              <span className="logo-sub">SMC · PVT LTD</span>
            </div>
          </a>

          {/* ── DESKTOP: nav links (hidden on mobile) ── */}
          <ul className="zr-navbar__menu">
            {navLinks.map((item) => (
              <li key={item.label} className="zr-nav-item">
                <a
                  href={item.href}
                  className={`zr-nav-link${activeLink === item.label ? " is-active" : ""}`}
                  onClick={(e) => {
                    if (item.href.startsWith("#")) e.preventDefault();
                    handleNavClick(item.label, item.href);
                  }}
                >
                  {item.label}
                  {activeLink === item.label && <span className="zr-nav-active-bar" />}
                </a>
              </li>
            ))}
          </ul>

          {/* ── DESKTOP RIGHT: Shop + Search (inline, hidden on mobile) ── */}
          <div className="zr-navbar__right">

            {/* Shop icon button */}
            <a href="#" className="zr-icon-btn" aria-label="Solar Shop" title="Solar Shop">
              <BsShop size={18} />
            </a>

            {/*
              Search toggle + expandable input wrapper.
              The whole row is ref'd so outside-click works correctly.
            */}
            <div
              ref={searchRowRef}
              className={`zr-search-row${searchOpen ? " is-open" : ""}`}
            >
              {/* The input — expands from behind the icon */}
              <form
                onSubmit={handleSearchSubmit}
                className="zr-search-form"
                role="search"
              >
                <input
                  ref={searchInputRef}
                  type="search"
                  className="zr-search-input"
                  placeholder="Search solar solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search"
                  tabIndex={searchOpen ? 0 : -1}
                />
                {/* Clear text */}
                {searchQuery && (
                  <button
                    type="button"
                    className="zr-search-clear"
                    onClick={() => { setSearchQuery(""); searchInputRef.current?.focus(); }}
                    aria-label="Clear"
                  >
                    <IoClose size={14} />
                  </button>
                )}
              </form>

              {/* Search / Close toggle icon — sits at right edge */}
              <button
                className="zr-search-toggle"
                onClick={toggleSearch}
                aria-label={searchOpen ? "Close search" : "Open search"}
                aria-expanded={searchOpen}
                type="button"
              >
                {searchOpen ? <IoClose size={19} /> : <IoSearchOutline size={19} />}
              </button>
            </div>

            {/* CTA button — hidden when search is open */}
            <a
              href="#quote"
              className={`zr-cta${searchOpen ? " zr-cta--gone" : ""}`}
              aria-hidden={searchOpen}
              tabIndex={searchOpen ? -1 : 0}
            >
              <FaSun className="zr-cta-icon" />
              Get Solar Quote
            </a>

            {/* Hamburger — ONLY on mobile */}
            <button
              className={`zr-hamburger${mobileOpen ? " is-open" : ""}`}
              onClick={toggleMobile}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <IoClose size={22} /> : <RiMenu3Line size={22} />}
            </button>

          </div>

        </div>
      </nav>

      {/* ════════════════ MOBILE DRAWER ════════════════ */}
      <div
        className={`zr-mobile-overlay${mobileOpen ? " is-open" : ""}`}
        aria-hidden={!mobileOpen}
      >
        <div className="zr-mobile-backdrop" onClick={closeMobile} />

        <div className="zr-mobile-drawer" role="dialog" aria-modal="true">

          {/* Drawer header */}
          <div className="zr-mobile-header">
            <a href="/" className="zr-navbar__logo" onClick={closeMobile}>
              <ZoraysLogoMark />
              <div className="zr-navbar__logo-text">
                <span className="logo-name">ZORAYS</span>
                <span className="logo-sub">SMC · PVT LTD</span>
              </div>
            </a>
            <button className="zr-mobile-close" onClick={closeMobile} aria-label="Close menu">
              <IoClose size={20} />
            </button>
          </div>

          {/* Search box below logo in drawer */}
          <div className="zr-mobile-search-box">
            <form onSubmit={handleSearchSubmit} className="zr-drawer-search-form" role="search">
              <IoSearchOutline size={16} className="zr-drawer-search-icon" aria-hidden="true" />
              <input
                type="search"
                className="zr-drawer-search-input"
                placeholder="Search solar solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="zr-drawer-search-clear"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear"
                >
                  <IoClose size={14} />
                </button>
              )}
            </form>
          </div>

          {/* Nav links */}
          <ul className="zr-mobile-nav">
            {drawerLinks.map((item) => (
              <li key={item.label} className="zr-mobile-item">
                <a
                  href={item.href}
                  className={`zr-mobile-link${activeLink === item.label ? " is-active" : ""}`}
                  onClick={(e) => {
                    if (item.href.startsWith("#")) e.preventDefault();
                    handleNavClick(item.label, item.href);
                  }}
                >
                  {item.icon && (
                    <span className="zr-mobile-link__icon" aria-hidden="true">
                      {item.icon}
                    </span>
                  )}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Contacts */}
          <div className="zr-mobile-contacts">
            <a href="tel:+923001234567"><MdPhone size={15} />+92 300 1234567</a>
            <a href="mailto:info@zorays.com.pk"><MdEmail size={15} />info@zorays.com.pk</a>
          </div>

          {/* CTA */}
          <div className="zr-mobile-footer">
            <a href="#quote" className="zr-cta zr-cta--full" onClick={closeMobile}>
              <FaSun className="zr-cta-icon" />
              Get Solar Quote
            </a>
          </div>

        </div>
      </div>

      {/* ════════════════ BOTTOM NAV (mobile only) ════════════════ */}
      <nav className="zr-bottom-nav" aria-label="Bottom navigation">
        {bottomNav.map((item) => {
          const isActive = item.isSearch ? searchOpen : activeBottom === item.label;
          return (
            <a
              key={item.label}
              href={item.isSearch ? undefined : item.href}
              role={item.isSearch ? "button" : undefined}
              className={`zr-bottom-nav__item${isActive ? " is-active" : ""}${item.isCta ? " is-cta" : ""}`}
              aria-label={item.isSearch ? (searchOpen ? "Close search" : "Search") : item.label}
              onClick={(e) => { e.preventDefault(); handleBottomClick(item); }}
            >
              <span className="zr-bottom-nav__icon">
                {isActive ? item.iconActive : item.icon}
              </span>
              <span className="zr-bottom-nav__label">
                {item.isSearch && searchOpen ? "Close" : item.label}
              </span>
              {isActive && !item.isCta && <span className="zr-bottom-nav__dot" />}
            </a>
          );
        })}
      </nav>

      {/* ════════════════ MOBILE SEARCH OVERLAY ════════════════
          Triggered by bottom-nav Search tab on mobile            */}
      <div
        className={`zr-mob-search-overlay${searchOpen ? " is-open" : ""}`}
        onClick={closeSearch}
        aria-hidden={!searchOpen}
      >
        <div className="zr-mob-search-panel" onClick={(e) => e.stopPropagation()}>
          <form onSubmit={handleSearchSubmit} className="zr-mob-search-form" role="search">
            <IoSearchOutline size={20} className="zr-mob-search-icon" aria-hidden="true" />
            <input
              type="search"
              className="zr-mob-search-input"
              placeholder="Search solar solutions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              aria-label="Search"
            />
            <button type="button" className="zr-mob-search-close" onClick={closeSearch} aria-label="Close">
              <IoClose size={20} />
            </button>
          </form>
          <div className="zr-mob-search-tags">
            {["Solar Net Metering", "Solar Panels", "Solar Backup", "Solar Financing", "Solar Tubewell"].map(tag => (
              <button key={tag} type="button" className="zr-mob-search-tag" onClick={() => setSearchQuery(tag)}>
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