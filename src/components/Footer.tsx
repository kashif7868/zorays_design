import { useEffect, useState } from "react";
import "../assets/css/footer.css";
import aedbLogo from "../assets/images/AEDB-Zorays-Solar.png";

import {
  FaTwitter,
  FaFacebookF,
  FaVimeoV,
  FaPinterestP,
  FaLinkedinIn,
  FaYoutube,
  FaRss,
  FaGoogle,
  FaInstagram,
  FaSnapchatGhost,
  FaWhatsapp,
  FaFacebookMessenger,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronUp,
  FaHeadset,
  FaFileAlt,
} from "react-icons/fa";

const Footer = () => {
  const [showBackTop, setShowBackTop] = useState(false);

  const companyPhone = "+923111163264";
  const companyPhoneDisplay = "0311-1163264";
  const companyEmail = "info@zorays.com.pk";
  const whatsappNumber = "923111163264";

  const footerLinks = [
    { label: "News", href: "/news" },
    { label: "Careers", href: "/careers" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms and Conditions", href: "/terms-and-conditions" },
  ];

  const secondaryLinks = [
    { label: "Bijli Haazir", href: "/bijli-haazir" },
    { label: "Training", href: "/training" },
  ];

  const socialIcons = [
    { icon: <FaTwitter />, label: "Twitter", href: "#" },
    { icon: <FaFacebookF />, label: "Facebook", href: "#" },
    { icon: <FaVimeoV />, label: "Vimeo", href: "#" },
    { icon: <FaPinterestP />, label: "Pinterest", href: "#" },
    { icon: <FaLinkedinIn />, label: "LinkedIn", href: "#" },
    { icon: <FaYoutube />, label: "YouTube", href: "#" },
    { icon: <FaRss />, label: "RSS", href: "#" },
    { icon: <FaGoogle />, label: "Google", href: "#" },
    { icon: <FaInstagram />, label: "Instagram", href: "#" },
    { icon: <FaSnapchatGhost />, label: "Snapchat", href: "#" },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      href: `https://wa.me/${whatsappNumber}`,
      external: true,
    },
    { icon: <FaFacebookMessenger />, label: "Messenger", href: "#" },
    { icon: <FaPhoneAlt />, label: "Phone", href: `tel:${companyPhone}` },
    { icon: <FaEnvelope />, label: "Email", href: `mailto:${companyEmail}` },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      const isNearBottom = scrollPosition + windowHeight >= pageHeight - 500;
      setShowBackTop(isNearBottom);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="zorays-footer">
      <div className="footer-top-line" aria-hidden="true">
        <span></span>
      </div>

      <div className="footer-content">
        <h2 className="footer-title">
          Approved Vendor of AEDB for Net Metering
        </h2>

        <div className="footer-logo-wrap">
          <img src={aedbLogo} alt="Zorays Solar AEDB approved vendor logo" />
        </div>

        <span className="footer-center-dot" aria-hidden="true"></span>

        <section className="footer-support-card" aria-label="Customer support">
          <div className="footer-support-icon" aria-hidden="true">
            <FaHeadset />
          </div>

          <div className="footer-support-text">
            <h3>Need Solar Support?</h3>
            <p>
              For service complaints, warranty claims, inverter issues, battery
              support, or net metering assistance, our team is ready to help.
            </p>
          </div>

          <a href="/raise-support-ticket" className="footer-support-btn">
            <FaFileAlt aria-hidden="true" />
            <span>Raise Support Ticket</span>
          </a>
        </section>

        <nav className="footer-links" aria-label="Footer main links">
          {footerLinks.map((link, index) => (
            <a href={link.href} key={link.label}>
              <span className="footer-link-label">{link.label}</span>

              {index !== footerLinks.length - 1 && (
                <span className="footer-separator" aria-hidden="true">
                  |
                </span>
              )}
            </a>
          ))}
        </nav>

        <nav
          className="footer-links footer-links-secondary"
          aria-label="Footer secondary links"
        >
          {secondaryLinks.map((link, index) => (
            <a href={link.href} key={link.label}>
              <span className="footer-link-label">{link.label}</span>

              {index !== secondaryLinks.length - 1 && (
                <span className="footer-separator" aria-hidden="true">
                  |
                </span>
              )}
            </a>
          ))}
        </nav>

        <div className="footer-divider" aria-hidden="true">
          <span></span>
        </div>

        <p className="footer-contact-line">
          <a href={`tel:${companyPhone}`}>
            <FaPhoneAlt aria-hidden="true" />
            <span>{companyPhoneDisplay}</span>
          </a>

          <a href={`mailto:${companyEmail}`}>
            <FaEnvelope aria-hidden="true" />
            <span>{companyEmail}</span>
          </a>
        </p>

        <p className="footer-copy">
          © 2026 Zorays Solar Pakistan. A Plastic-Neutral Company
        </p>

        <div className="footer-socials" aria-label="Social media links">
          {socialIcons.map((item) => (
            <a
              href={item.href}
              className="footer-social-icon"
              key={item.label}
              aria-label={item.label}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-floating-actions">
        <a
          href={`https://wa.me/${whatsappNumber}`}
          className="footer-live-chat"
          aria-label="Talk to a solar consultant on WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp aria-hidden="true" />
          <span>Solar Consultant</span>
        </a>
      </div>

      <button
        type="button"
        className={`footer-back-top ${showBackTop ? "is-visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <FaChevronUp aria-hidden="true" />
      </button>
    </footer>
  );
};

export default Footer;