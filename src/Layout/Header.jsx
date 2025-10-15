import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button, Offcanvas, Dropdown } from "react-bootstrap";
import { motion } from "framer-motion";
import { useLanguage } from "../context/language";
import { FaBars, FaTimes, FaGlobe, FaChevronDown, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#about", labelEn: "About", labelHi: "परिचय" },
    { href: "#gallery", labelEn: "Gallery", labelHi: "गैलरी" },
    { href: "#testimonials", labelEn: "Testimonials", labelHi: "प्रशंसापत्र" },
    { href: "#contact", labelEn: "Contact", labelHi: "संपर्क" },
  ];

  const getTextColor = (isActive = false) => (isActive ? "#B7935B" : "#FFFFFF");

  return (
    <>
      <Navbar
        expand="lg"
        sticky="top"
        className={`py-3 transition-all ${scrolled ? "shadow-sm" : ""}`}
        style={{
          backgroundColor: "#1A237E",
          transition: "all 0.4s ease",
          borderBottom: "1px solid rgba(179,147,91,0.3)",
        }}
      >
        <Container fluid="xl" className="d-flex align-items-center justify-content-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="fw-bold fs-2 text-decoration-none"
            style={{ color: "#FFFFFF" }}
            whileHover={{ scale: 1.05 }}
          >
            {t?.name || "MyBrand"}
          </motion.a>

          {/* Desktop Nav */}
          <Nav className="d-none d-lg-flex align-items-center gap-3">
            {links.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ scale: 1.05, color: "#B7935B" }}
                className="fw-semibold text-decoration-none position-relative"
                style={{ color: getTextColor(activeNav === link.href.slice(1)) }}
              >
                {lang === "en" ? link.labelEn : link.labelHi}
                {activeNav === link.href.slice(1) && (
                  <motion.div
                    layoutId="underline"
                    className="position-absolute"
                    style={{
                      bottom: -3,
                      left: "50%",
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      backgroundColor: "#B7935B",
                      transform: "translateX(-50%)",
                    }}
                  />
                )}
              </motion.a>
            ))}

            {/* Language Dropdown */}
            <Dropdown align="end">
              <Dropdown.Toggle
                variant="outline"
                className="border-1 fw-semibold d-flex align-items-center gap-2"
                style={{
                  color: "#FFFFFF",
                  borderColor: "#B7935B",
                  backgroundColor: "transparent",
                }}
              >
                <FaGlobe size={14} /> {lang === "en" ? "EN" : "HI"} <FaChevronDown size={10} />
              </Dropdown.Toggle>

              <Dropdown.Menu className="border-0 shadow-lg" style={{ backgroundColor: "#1A237E" }}>
                <Dropdown.Item
                  onClick={() => setLang("en")}
                  className="fw-semibold text-white"
                  style={{ backgroundColor: "transparent" }}
                >
                  English
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setLang("hi")}
                  className="fw-semibold text-white"
                  style={{ backgroundColor: "transparent" }}
                >
                  हिंदी
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* CTA */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                variant="primary"
                className="fw-bold ms-2 px-3 py-2"
                style={{
                  backgroundColor: "#880E4F",
                  borderColor: "#880E4F",
                  borderRadius: "8px",
                }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                {lang === "en" ? "Book Now" : "बुक करें"}
              </Button>
            </motion.div>
          </Nav>

          {/* Mobile Menu Button */}
          <Button
            variant="outline-light"
            className="d-lg-none border-0"
            style={{ color: "#FFFFFF" }}
            onClick={() => setShowOffcanvas(true)}
          >
            <FaBars size={22} />
          </Button>
        </Container>
      </Navbar>

      {/* Half-width Offcanvas */}
      <Offcanvas
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
        placement="end"
        style={{
          width: "50%", // 👈 Only half the screen width
          backgroundColor: "#1A237E",
          color: "#FFFFFF",
        }}
      >
        <Offcanvas.Header className="border-bottom border-secondary">
          <Offcanvas.Title className="fw-bold fs-3 text-white">{t?.name || "MyBrand"}</Offcanvas.Title>
          <Button variant="outline-light" className="border-0" onClick={() => setShowOffcanvas(false)}>
            <FaTimes size={20} />
          </Button>
        </Offcanvas.Header>

         <Button
              variant="outline-light"
              size="sm"
              className="fw-bold"
              style={{
                borderRadius: "6px",
                borderColor: "#B7935B",
                color: "#FFFFFF",
              }}
              onClick={() => setLang(lang === "en" ? "hi" : "en")}
            >
              <FaGlobe className="me-2" />
              {lang === "en" ? "हिंदी में बदलें" : "Switch to English"}
            </Button>

        <Offcanvas.Body className="d-flex flex-column">
          {links.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="fw-semibold py-3 border-bottom border-secondary text-white text-decoration-none"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setShowOffcanvas(false)}
            >
              {lang === "en" ? link.labelEn : link.labelHi}
            </motion.a>
          ))}

          <div className="mt-auto pt-4 border-top border-secondary text-center">
            <div className="mb-3">
              <h6 className="fw-bold mb-3" style={{ color: "#B7935B" }}>
                {lang === "en" ? "Follow Me" : "फॉलो करें"}
              </h6>
              <div className="d-flex justify-content-center gap-3">
                {[FaInstagram, FaFacebook, FaYoutube].map((Icon, i) => (
                  <motion.div key={i} whileHover={{ scale: 1.2, color: "#B7935B" }}>
                    <Icon size={20} style={{ cursor: "pointer", color: "white" }} />
                  </motion.div>
                ))}
              </div>
            </div>

            <Button
              variant="primary"
              size="lg"
              className="w-100 fw-bold py-2 mb-3"
              style={{
                backgroundColor: "#880E4F",
                borderColor: "#880E4F",
                borderRadius: "8px",
              }}
              onClick={() => {
                setShowOffcanvas(false);
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {lang === "en" ? "Book Session" : "सत्र बुक करें"}
            </Button>

           
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <style jsx>{`
        .dropdown-toggle::after {
          display: none !important;
        }
        @media (max-width: 768px) {
          .offcanvas {
            width: 70% !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
