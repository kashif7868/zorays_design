import { useState, useEffect, useRef } from "react";

// react-icons
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { MdPhone, MdEmail } from "react-icons/md";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaStar, FaSun } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import zoraysLogo from "../assets/images/logo.png";
import "../assets/css/navbar.css";

// ─── Logo Mark ───────────────────────────────────────────────────────────────
const ZoraysLogoMark = () => (
  <div className="zorays-logo-mark">
    <span className="logo-mark-z">Z</span>
  </div>
);

// ─── Nav Data ────────────────────────────────────────────────────────────────
const navLinks = [
  { label: "Solar Net Metering", href: "#multi-step-form" },
  { label: "Solar Backup",       href: "#" },
  { label: "Solar Financing",    href: "#" },
  { label: "Solar Tubewell",     href: "#" },
  { label: "Solar Clientele",    href: "#" },
  { label: "Solar Shop",         href: "#" },
  { label: "Solar Blog",         href: "#" },
  { label: "Zorays Pakistan",    href: "#" },
];

// ─── Component ───────────────────────────────────────────────────────────────
const Navbar = () => {
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [activeLink, setActiveLink]   = useState<string | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const toggleMobileMenu = () => setMobileOpen((v) => !v);
  const closeMobileMenu  = () => setMobileOpen(false);

  const handleNavClick = (label: string, href: string) => {
    setActiveLink(label);
    closeMobileMenu();
    // smooth scroll for hash links
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ─── TOP BAR ─────────────────────────────────────── */}
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
              <MdPhone />
              <span>+92 300 1234567</span>
            </a>
            <a href="mailto:info@zorays.com.pk" className="zr-topbar__contact">
              <MdEmail />
              <span>info@zorays.com.pk</span>
            </a>
          </div>

        </div>
      </div>

      {/* ─── MAIN NAVBAR ─────────────────────────────────── */}
      <nav className="zr-navbar" role="navigation" aria-label="Main navigation">
        <div className="zr-navbar__inner">

          {/* Logo */}
          <a href="/" className="zr-navbar__logo" aria-label="Zorays Home">
            <img src={zoraysLogo} alt="Zorays logo" className="zorays_logo" />
            <div className="zr-navbar__logo-text">
              <span className="logo-name">ZORAYS</span>
              <span className="logo-sub">SMC · PVT LTD</span>
            </div>
          </a>

          {/* Desktop Menu */}
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

          {/* Right Side */}
          <div className="zr-navbar__right">
            <a href="#quote" className="zr-cta">
              <FaSun className="zr-cta-icon" />
              Get Solar Quote
            </a>
            <button
              className={`zr-hamburger${mobileOpen ? " is-open" : ""}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <IoClose size={22} /> : <RiMenu3Line size={22} />}
            </button>
          </div>

        </div>
      </nav>

      {/* ─── MOBILE DRAWER ───────────────────────────────── */}
      <div
        className={`zr-mobile-overlay${mobileOpen ? " is-open" : ""}`}
        aria-hidden={!mobileOpen}
      >
        <div className="zr-mobile-backdrop" onClick={closeMobileMenu} />

        <div className="zr-mobile-drawer" ref={drawerRef} role="dialog" aria-modal="true">

          <div className="zr-mobile-header">
            <a href="/" className="zr-navbar__logo" onClick={closeMobileMenu}>
              <ZoraysLogoMark />
              <div className="zr-navbar__logo-text">
                <span className="logo-name">ZORAYS</span>
                <span className="logo-sub">SMC · PVT LTD</span>
              </div>
            </a>
            <button className="zr-mobile-close" onClick={closeMobileMenu} aria-label="Close">
              <IoClose size={20} />
            </button>
          </div>

          <ul className="zr-mobile-nav">
            {navLinks.map((item) => (
              <li key={item.label} className="zr-mobile-item">
                <a
                  href={item.href}
                  className={`zr-mobile-link${activeLink === item.label ? " is-active" : ""}`}
                  onClick={(e) => {
                    if (item.href.startsWith("#")) e.preventDefault();
                    handleNavClick(item.label, item.href);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

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

          <div className="zr-mobile-footer">
            <a href="#quote" className="zr-cta zr-cta--full" onClick={closeMobileMenu}>
              <FaSun className="zr-cta-icon" />
              Get Solar Quote
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;