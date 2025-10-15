import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaGlobe,
  FaHeart,
  FaArrowUp,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";
import { useLanguage } from "../context/language";

const Footer = () => {
  const { t, lang } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const openYoutube = () => {
    window.open("https://youtube.com/@deepasainiofficiall?si=SSw1X3baLR6cl1rT", "_blank");
  };

  const openInstagram = () => {
    window.open("https://www.instagram.com/deepasainiofficial/", "_blank");
  };

  const openFacebook = () => {
    window.open("https://www.facebook.com/deepasainiofficial", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:07792841928";
  };

  const handleEmail = () => {
    window.location.href = "mailto:deepasaini.writes@gmail.com";
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      y: -5,
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.9 }
  };

  return (
    <>
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="position-fixed bottom-0 end-0 m-4 btn btn-warning rounded-circle shadow-lg"
            style={{ width: "60px", height: "60px", zIndex: 1000 }}
          >
            <FaArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main Footer */}
      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={footerVariants}
        className="text-white"
        style={{ 
          backgroundColor: "#1B1B1B",
          background: "linear-gradient(135deg, #1B1B1B 0%, #2D2D2D 100%)",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Animated Background Elements */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ 
          background: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23e6c200' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          opacity: 0.3
        }} />

        <Container className="p-4 position-relative">
          <Row>
            {/* Column 1 - About */}
            <Col lg={4} md={6} className="mb-4 mb-md-0 text-start">
              <motion.div variants={itemVariants}>
                <h5 className="fw-bold text-uppercase mb-4" style={{ color: "#E6C200" }}>
                  {lang === "en" ? "About" : "हमारे बारे में"}
                </h5>
                
                {/* <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="mb-3"
                >
                  <img
                    src="/images/deepa-logo.png"
                    alt="Deepa Saini Logo"
                    style={{ 
                      height: "65px", 
                      borderRadius: "12px",
                      filter: "drop-shadow(0 4px 8px rgba(230, 194, 0, 0.3))"
                    }}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/200x65/1B1B1B/E6C200?text=Deepa+Saini";
                    }}
                  />
                </motion.div> */}

                <p className="small mt-3" style={{ lineHeight: "1.6" }}>
                  <strong>Deepa Saini</strong> is a Government Officer, Social Worker, and Poet 
                  whose words capture the essence of emotion, truth, and everyday life.
                  <br />
                  <span style={{ color: "#ccc" }}>
                    <strong>दीपा सैनी</strong> एक सरकारी अधिकारी, सामाजिक कार्यकर्ता और कवयित्री हैं 
                    जिनकी रचनाएँ जीवन के भावों, सच्चाई और संवेदनाओं को बखूबी अभिव्यक्त करती हैं।
                  </span>
                </p>

                {/* Live Time Display */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-3 p-3 rounded"
                  style={{ backgroundColor: "rgba(230, 194, 0, 0.1)", border: "1px solid rgba(230, 194, 0, 0.3)" }}
                >
                  <FaClock className="me-2 text-warning" />
                  <small>
                    {currentTime.toLocaleDateString(lang === 'en' ? 'en-IN' : 'hi-IN', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                    <br />
                    {currentTime.toLocaleTimeString(lang === 'en' ? 'en-IN' : 'hi-IN')}
                  </small>
                </motion.div>
              </motion.div>
            </Col>

            {/* Column 2 - Quick Links */}
            <Col lg={3} md={6} className="mb-4 mb-md-0 text-start">
              <motion.div variants={itemVariants}>
                <h5 className="fw-bold text-uppercase mb-4" style={{ color: "#E6C200" }}>
                  {lang === "en" ? "Quick Links" : "उपयोगी लिंक"}
                </h5>
                <ul className="list-unstyled">
                  {[
                    { en: "Home", hi: "मुखपृष्ठ", href: "/" },
                    { en: "About", hi: "परिचय", href: "#about" },
                    { en: "Gallery", hi: "गैलरी", href: "#gallery" },
                    { en: "Testimonials", hi: "प्रशंसापत्र", href: "#testimonials" },
                    { en: "Contact", hi: "संपर्क", href: "#contact" }
                  ].map((link, index) => (
                    <motion.li 
                      key={index}
                      whileHover={{ x: 10 }}
                      className="mb-3"
                    >
                      <a 
                        href={link.href}
                        className="text-white text-decoration-none d-block p-2 rounded hover-gold"
                        style={{ 
                          transition: "all 0.3s ease",
                          border: "1px solid transparent"
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.borderColor = "#E6C200";
                          e.target.style.backgroundColor = "rgba(230, 194, 0, 0.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.borderColor = "transparent";
                          e.target.style.backgroundColor = "transparent";
                        }}
                      >
                        {lang === "en" ? link.en : link.hi}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </Col>

            {/* Column 3 - Contact Info */}
            <Col lg={5} md={12} className="text-start">
              <motion.div variants={itemVariants}>
                <h5 className="fw-bold text-uppercase mb-4" style={{ color: "#E6C200" }}>
                  {lang === "en" ? "Contact Info" : "संपर्क जानकारी"}
                </h5>

                {/* Contact Items */}
                <div className="mb-4">
                  {[
                    {
                      icon: FaEnvelope,
                      text: "deepasaini.writes@gmail.com",
                      action: handleEmail,
                      color: "#EA4335"
                    },
                    {
                      icon: FaPhoneAlt,
                      text: "+91 77928 41928",
                      action: handleCall,
                      color: "#34A853"
                    },
                    {
                      icon: FaMapMarkerAlt,
                      text: lang === "en" ? "Government Officer & Social Worker" : "सरकारी अधिकारी और सामाजिक कार्यकर्ता",
                      action: null,
                      color: "#4285F4"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="d-flex align-items-center mb-3 p-2 rounded hover-gold"
                      style={{ cursor: item.action ? "pointer" : "default" }}
                      onClick={item.action}
                    >
                      <div 
                        className="rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{ 
                          width: "40px", 
                          height: "40px", 
                          backgroundColor: "rgba(230, 194, 0, 0.1)",
                          border: `2px solid ${item.color}`,
                          flexShrink: 0
                        }}
                      >
                        <item.icon className="text-warning" />
                      </div>
                      <span className="small">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Newsletter Subscription */}
                {/* <motion.div variants={itemVariants}>
                  <h6 className="fw-bold mb-3" style={{ color: "#E6C200" }}>
                    {lang === "en" ? "Stay Updated" : "अपडेट रहें"}
                  </h6>
                  <AnimatePresence mode="wait">
                    {!subscribed ? (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        onSubmit={handleSubscribe}
                      >
                        <InputGroup>
                          <Form.Control
                            type="email"
                            placeholder={lang === "en" ? "Your email address" : "आपका ईमेल पता"}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{ 
                              backgroundColor: "rgba(255,255,255,0.1)", 
                              border: "1px solid #E6C200",
                              color: "white"
                            }}
                          />
                          <Button 
                            variant="warning" 
                            type="submit"
                            className="d-flex align-items-center"
                          >
                            <FaPaperPlane />
                          </Button>
                        </InputGroup>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center p-3 rounded"
                        style={{ backgroundColor: "rgba(52, 168, 83, 0.2)", border: "1px solid #34A853" }}
                      >
                        <FaPaperPlane className="text-success me-2" />
                        {lang === "en" ? "Thank you for subscribing!" : "सब्सक्राइब करने के लिए धन्यवाद!"}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div> */}

                {/* Social Links */}
                <motion.div variants={itemVariants} className="mt-4">
                  <h6 className="fw-bold mb-3" style={{ color: "#E6C200" }}>
                    {lang === "en" ? "Follow Me" : "फॉलो करें"}
                  </h6>
                  <div className="d-flex align-items-center gap-3">
                    {[
                      { icon: FaFacebookF, action: openFacebook, color: "#1877F2" },
                      { icon: FaInstagram, action: openInstagram, color: "#E4405F" },
                      { icon: FaYoutube, action: openYoutube, color: "#FF0000" }
                    ].map((social, index) => (
                      <motion.div
                        key={index}
                        variants={socialIconVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{ 
                          width: "50px", 
                          height: "50px", 
                          backgroundColor: "rgba(255,255,255,0.1)",
                          cursor: "pointer",
                          border: `2px solid ${social.color}`
                        }}
                        onClick={social.action}
                      >
                        <social.icon className="text-white" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </Container>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center p-4 border-top"
          style={{ 
            backgroundColor: "#000", 
            borderColor: "#E6C200 !important",
            position: "relative"
          }}
        >
          <Container>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="mb-2"
            >
              © {new Date().getFullYear()} <strong style={{ color: "#E6C200" }}>Deepa Saini</strong> |{" "}
              {lang === "en" ? "All Rights Reserved" : "सर्वाधिकार सुरक्षित"}
            </motion.div>
            <motion.small 
              style={{ color: "#ccc" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {lang === "en" ? "Crafted with" : "बनाया गया"} <FaHeart className="text-danger mx-1" style={{ fontSize: "12px" }} />{" "}
              {lang === "en" ? "by" : "द्वारा"} <strong>Bhavesh Lohani</strong>
            </motion.small>
          </Container>
        </motion.div>
      </motion.footer>

      <style jsx>{`
        .hover-gold:hover {
          color: #E6C200 !important;
          transition: all 0.3s ease;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .floating {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default Footer;