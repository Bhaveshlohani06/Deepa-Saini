import React, { useState, useEffect, useRef } from "react";
import { Navbar, Container, Nav, Button, Offcanvas, Dropdown } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/language";
import { 
  FaFacebook, 
  FaInstagram, 
  FaYoutube, 
  FaBars, 
  FaTimes, 
  FaChevronDown,
  FaGlobe
} from "react-icons/fa";

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
      
      // Update active nav based on scroll position
      const sections = ['home', 'about', 'gallery', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveNav(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const navLinkVariants = {
    hover: { 
      scale: 1.05,
      color: "#B7935B",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  const logoVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  // Text color - always white on navy blue background
  const getTextColor = (isActive = false) => {
    return isActive ? '#B7935B' : '#FFFFFF'; // Gold for active, White for normal
  };

  return (
    <>
      <motion.div
        variants={navVariants}
        initial="hidden"
        animate="visible"
        ref={navRef}
      >
        <Navbar 
          expand="lg"
          sticky="top" 
          className="py-2 shadow-lg-nav"
          style={{
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            backgroundColor: '#1A237E', // Always dark navy blue
            borderBottom: "1px solid rgba(179, 147, 91, 0.3)"
          }}
        >
          <Container fluid="xl">
            {/* Logo/Brand */}
            <motion.div variants={logoVariants} whileHover="hover">
              <Navbar.Brand 
                href="#home" 
                className="fw-bold fs-2"
                style={{ 
                  color: getTextColor(),
                }}
              >
                {t?.name}
              </Navbar.Brand>
            </motion.div>

            {/* Desktop Navigation */}
            <Nav className="d-none d-lg-flex align-items-center gap-1">
              <motion.div variants={navLinkVariants} whileHover="hover" whileTap="tap">
                <Nav.Link 
                  href="#about" 
                  className="fw-semibold mx-2 position-relative"
                  style={{ 
                    color: getTextColor(activeNav === 'about')
                  }}
                >
                  {lang === "en" ? "About" : "परिचय"}
                  {activeNav === 'about' && (
                    <motion.div
                      layoutId="activeNav"
                      className="position-absolute bottom-0 start-50 translate-middle-x"
                      style={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#B7935B',
                        borderRadius: '50%'
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Nav.Link>
              </motion.div>

              <motion.div variants={navLinkVariants} whileHover="hover" whileTap="tap">
                <Nav.Link 
                  href="#gallery" 
                  className="fw-semibold mx-2 position-relative"
                  style={{ 
                    color: getTextColor(activeNav === 'gallery')
                  }}
                >
                  {lang === "en" ? "Gallery" : "गैलरी"}
                  {activeNav === 'gallery' && (
                    <motion.div
                      layoutId="activeNav"
                      className="position-absolute bottom-0 start-50 translate-middle-x"
                      style={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#B7935B',
                        borderRadius: '50%'
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Nav.Link>
              </motion.div>

              <motion.div variants={navLinkVariants} whileHover="hover" whileTap="tap">
                <Nav.Link 
                  href="#testimonials" 
                  className="fw-semibold mx-2 position-relative"
                  style={{ 
                    color: getTextColor(activeNav === 'testimonials')
                  }}
                >
                  {lang === "en" ? "Testimonials" : "प्रशंसापत्र"}
                  {activeNav === 'testimonials' && (
                    <motion.div
                      layoutId="activeNav"
                      className="position-absolute bottom-0 start-50 translate-middle-x"
                      style={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#B7935B',
                        borderRadius: '50%'
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Nav.Link>
              </motion.div>

              <motion.div variants={navLinkVariants} whileHover="hover" whileTap="tap">
                <Nav.Link 
                  href="#contact" 
                  className="fw-semibold mx-2 position-relative"
                  style={{ 
                    color: getTextColor(activeNav === 'contact')
                  }}
                >
                  {lang === "en" ? "Contact" : "संपर्क"}
                  {activeNav === 'contact' && (
                    <motion.div
                      layoutId="activeNav"
                      className="position-absolute bottom-0 start-50 translate-middle-x"
                      style={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#B7935B',
                        borderRadius: '50%'
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Nav.Link>
              </motion.div>

              {/* Language Dropdown */}
              <Dropdown className="ms-3">
                <Dropdown.Toggle 
                  variant="outline"
                  className="border-1 fw-semibold d-flex align-items-center gap-2"
                  style={{ 
                    color: '#FFFFFF',
                    borderColor: '#B7935B',
                    backgroundColor: 'transparent'
                  }}
                >
                  <FaGlobe size={14} />
                  {lang === "en" ? "EN" : "HI"}
                  <FaChevronDown size={10} />
                </Dropdown.Toggle>

                <Dropdown.Menu className="border-0 shadow-lg" style={{ backgroundColor: '#1A237E' }}>
                  <Dropdown.Item 
                    onClick={() => setLang("en")}
                    className="fw-semibold py-2 text-white"
                    style={{ backgroundColor: 'transparent' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#B7935B'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    English
                  </Dropdown.Item>
                  <Dropdown.Item 
                    onClick={() => setLang("hi")}
                    className="fw-semibold py-2 text-white"
                    style={{ backgroundColor: 'transparent' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#B7935B'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    हिंदी
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="primary"
                  size="sm"
                  className="ms-2 fw-bold px-3 py-2"
                  style={{
                    backgroundColor: '#880E4F',
                    borderColor: '#880E4F',
                    borderRadius: '8px'
                  }}
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  {lang === "en" ? "Book Now" : "बुक करें"}
                </Button>
              </motion.div>
            </Nav>

            {/* Mobile Menu Button - White color */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="outline-light"
                className="d-lg-none border-0"
                style={{
                  borderRadius: '8px',
                  color: '#FFFFFF' // White color for hamburger menu
                }}
                onClick={() => setShowOffcanvas(true)}
              >
                <FaBars size={20} />
              </Button>
            </motion.div>
          </Container>
        </Navbar>
      </motion.div>

      {/* Mobile Offcanvas Menu */}
      <Offcanvas 
        show={showOffcanvas} 
        onHide={() => setShowOffcanvas(false)}
        placement="end"
        style={{ backgroundColor: '#1A237E' }}
      >
        <Offcanvas.Header className="border-bottom border-secondary">
          <Offcanvas.Title className="fw-bold fs-3 text-white">
            {t?.name}
          </Offcanvas.Title>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              variant="outline-light"
              className="border-0"
              style={{ color: '#FFFFFF' }} // White color for close button
              onClick={() => setShowOffcanvas(false)}
            >
              <FaTimes size={20} />
            </Button>
          </motion.div>
        </Offcanvas.Header>
        
        <Offcanvas.Body className="d-flex flex-column">
          <Nav className="flex-column gap-2">
            {[
              { href: "#about", en: "About", hi: "परिचय" },
              { href: "#gallery", en: "Gallery", hi: "गैलरी" },
              { href: "#testimonials", en: "Testimonials", hi: "प्रशंसापत्र" },
              { href: "#contact", en: "Contact", hi: "संपर्क" }
            ].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Nav.Link 
                  href={item.href}
                  className="fw-semibold py-3 border-bottom border-secondary text-white d-flex align-items-center justify-content-between"
                  onClick={() => setShowOffcanvas(false)}
                  style={{ fontSize: '1.1rem' }}
                >
                  {lang === "en" ? item.en : item.hi}
                  <motion.div
                    whileHover={{ x: 5 }}
                    style={{ color: '#B7935B' }}
                  >
                    →
                  </motion.div>
                </Nav.Link>
              </motion.div>
            ))}
          </Nav>

          <div className="mt-auto pt-4 border-top border-secondary">
            <div className="text-center mb-3">
              <h6 className="fw-bold mb-3" style={{ color: '#B7935B' }}>
                {lang === "en" ? "Follow Me" : "फॉलो करें"}
              </h6>
              <div className="d-flex justify-content-center gap-3">
                {[FaInstagram, FaFacebook, FaYoutube].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, color: '#B7935B' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon 
                      size={20} 
                      style={{ cursor: 'pointer', color: 'white' }} 
                      onMouseEnter={(e) => e.target.style.color = '#B7935B'}
                      onMouseLeave={(e) => e.target.style.color = 'white'}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="primary"
                size="lg"
                className="w-100 fw-bold py-3 mb-3"
                style={{
                  backgroundColor: '#880E4F',
                  borderColor: '#880E4F',
                  borderRadius: '8px'
                }}
                onClick={() => {
                  setShowOffcanvas(false);
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {lang === "en" ? "Book Session" : "सत्र बुक करें"}
              </Button>
            </motion.div>

            <div className="text-center">
              <Button
                variant="outline-light"
                size="sm"
                className="fw-bold"
                style={{ 
                  borderRadius: '6px',
                  borderColor: '#B7935B',
                  color: '#FFFFFF'
                }}
                onClick={() => setLang(lang === "en" ? "hi" : "en")}
              >
                <FaGlobe className="me-2" />
                {lang === "en" ? "हिंदी में बदलें" : "Switch to English"}
              </Button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <style jsx>{`
        .shadow-lg-nav {
          box-shadow: 0 4px 20px rgba(26, 35, 126, 0.3) !important;
        }
        
        .nav-link {
          transition: all 0.3s ease;
        }
        
        .dropdown-toggle::after {
          display: none !important;
        }

        /* Ensure proper text contrast */
        .text-white {
          color: white !important;
        }
      `}</style>
    </>
  );
};

export default Header;