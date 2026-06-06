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
} from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    "News",
    "Careers",
    "Privacy Policy",
    "Terms and Conditions",
  ];

  const secondaryLinks = ["Bijli Haazir", "Training"];

  const socialIcons = [
    <FaTwitter />,
    <FaFacebookF />,
    <FaVimeoV />,
    <FaPinterestP />,
    <FaLinkedinIn />,
    <FaYoutube />,
    <FaRss />,
    <FaGoogle />,
    <FaInstagram />,
    <FaSnapchatGhost />,
    <FaWhatsapp />,
    <FaFacebookMessenger />,
    <FaPhoneAlt />,
    <FaEnvelope />,
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="zorays-footer">
      <div className="footer-top-line">
        <span></span>
      </div>

      <div className="footer-content">
        <h2 className="footer-title">
          Approved Vendor of AEDB for Net Metering
        </h2>

        <div className="footer-logo-wrap">
          <img src={aedbLogo} alt="AEDB approved vendor logo" />
        </div>

        <span className="footer-center-dot"></span>

        <nav className="footer-links" aria-label="Footer main links">
          {footerLinks.map((link, index) => (
            <a href="#" key={link}>
              {link}
              {index !== footerLinks.length - 1 && <span>|</span>}
            </a>
          ))}
        </nav>

        <nav className="footer-links footer-links-secondary" aria-label="Footer secondary links">
          {secondaryLinks.map((link, index) => (
            <a href="#" key={link}>
              {link}
              {index !== secondaryLinks.length - 1 && <span>|</span>}
            </a>
          ))}
        </nav>

        <div className="footer-divider">
          <span></span>
        </div>

        <p className="footer-copy">
          © 2026 Zorays Solar Pakistan. A Plastic-Neutral Company
        </p>

        <div className="footer-socials" aria-label="Social media links">
          {socialIcons.map((icon, index) => (
            <a href="#" className="footer-social-icon" key={index}>
              {icon}
            </a>
          ))}
        </div>
      </div>

      <a
        href="https://wa.me/"
        className="footer-live-chat"
        aria-label="Talk live to the agent"
      >
        <FaWhatsapp />
        <span>Talk live to the agent</span>
      </a>

      <button
        type="button"
        className="footer-back-top"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <FaChevronUp />
      </button>
    </footer>
  );
};

export default Footer;