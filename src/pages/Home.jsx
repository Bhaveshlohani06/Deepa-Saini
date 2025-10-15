import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import { motion, useInView, useAnimation } from "framer-motion";
import { FaFacebook, FaInstagram, FaYoutube, FaPhone, FaStar, FaPlay } from "react-icons/fa";
import Layout from "../Layout/Layout";
import { useLanguage } from "../context/language";

const HomePage = () => {
  const { t, lang } = useLanguage();
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isHeroInView) {
      controls.start("visible");
    }
  }, [isHeroInView, controls]);

  const testimonials = [
    {
      en: "Deepa's words have a unique charm that stays in the heart for long. Her poetry resonates with the soul.",
      hi: "दीपा जी के शब्द दिल को इस तरह छू जाते हैं कि लंबे समय तक याद रहते हैं। उनकी कविताएँ आत्मा से जुड़ जाती हैं।",
      name: "Anjali Sharma / अंजलि शर्मा",
      role: "Literature Enthusiast / साहित्य प्रेमी"
    },
    {
      en: "Her poetry and social work inspire many around her. A true gem in our society!",
      hi: "उनकी कविताएँ और समाजसेवा दोनों ही प्रेरणादायक हैं। हमारे समाज में एक सच्चे रत्न!",
      name: "Rohit Verma / रोहित वर्मा",
      role: "Social Activist / सामाजिक कार्यकर्ता"
    },
    {
      en: "Featured on 'Wah Bhai Wah', Deepa's talent shines through her powerful words and social initiatives.",
      hi: "'वाह भाई वाह' में featured, दीपा की प्रतिभा उनके शक्तिशाली शब्दों और सामाजिक पहलों के माध्यम से चमकती है।",
      name: "Priya Singh / प्रिया सिंह",
      role: "Media Professional / मीडिया पेशेवर"
    }
  ];

const galleryImages = [
  { 
    id: 1, 
    title: "Poetry Session", 
    category: "poetry",
    src: "/images/poetry.jpeg" // Replace with your actual image path
  },
  { 
    id: 2, 
    title: "Social Work", 
    category: "social",
    src: "/images/social.jpeg" // Replace with your actual image path
  },
  { 
    id: 3, 
    title: "Government Event", 
    category: "official",
    src: "/images/govt.jpg" // Replace with your actual image path
  },
  { 
    id: 4, 
    title: "Media Appearance", 
    category: "media",
    src: "/images/movement.jpg" // Replace with your actual image path
  },
  { 
    id: 5, 
    title: "Community Service", 
    category: "social",
    src: "/images/glamour.jpg" // Replace with your actual image path
  },
  { 
    id: 6, 
    title: "Literary Meet", 
    category: "poetry",
    src: "/images/live.jpg" // Replace with your actual image path
  }
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
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

  return (
    <Layout>
      <div style={{ fontFamily: "Poppins, sans-serif", overflow: "hidden" }}>
        {/* Enhanced HERO SECTION */}
<motion.section
  ref={heroRef}
  initial="hidden"
  animate={controls}
  variants={containerVariants}
  className="position-relative"
  style={{
    position: "relative",
    overflow: "hidden"
  }}
>
  {/* Desktop View */}
  <div className="d-none d-md-block">
    <div className="desktop-video-container">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="desktop-video"
      >
        <source src="/images/Final.mp4" type="video/mp4" />
      </video>
      
      <div className="desktop-overlay">
        <Container className="text-center h-100 d-flex align-items-center justify-content-center">
          <div className="desktop-content">
            <motion.div variants={itemVariants} className="d-flex gap-3 justify-content-center flex-wrap mb-4">
              <Button 
                variant="light" 
                size="lg" 
                className="px-4 py-3 fw-bold shadow"
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              >
                {t.explore}
              </Button>
              <Button 
                variant="outline-light" 
                size="lg" 
                className="px-4 py-3 fw-bold border-white text-white"
                onClick={openYoutube}
              >
                <FaPlay className="me-2" />
                {t.watchVideos}
              </Button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="d-flex justify-content-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <FaInstagram 
                  size={28} 
                  className="cursor-pointer text-white" 
                  onClick={openInstagram}
                  style={{ cursor: "pointer" }}
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <FaFacebook 
                  size={28} 
                  className="cursor-pointer text-white" 
                  onClick={openFacebook}
                  style={{ cursor: "pointer" }}
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <FaYoutube 
                  size={28} 
                  className="cursor-pointer text-white" 
                  onClick={openYoutube}
                  style={{ cursor: "pointer" }}
                />
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </div>
    </div>
  </div>

  {/* Mobile View */}
  <div className="d-block d-md-none">
    <div className="mobile-video-container">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="mobile-video"
      >
        <source src="/images/Final.mp4" type="video/mp4" />
      </video>
    </div>
    
    <Container className="text-center mobile-content">
      <motion.div variants={itemVariants} className="d-flex flex-column align-items-center gap-3">
        <Button 
          variant="primary" 
          size="lg" 
          className="px-4 py-3 fw-bold shadow w-100"
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        >
          {t.explore}
        </Button>
        <Button 
          variant="outline-primary" 
          size="lg" 
          className="px-4 py-3 fw-bold w-100"
          onClick={openYoutube}
        >
          <FaPlay className="me-2" />
          {t.watchVideos}
        </Button>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="d-flex justify-content-center gap-4 mt-4"
      >
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <FaInstagram 
            size={24} 
            className="cursor-pointer text-primary" 
            onClick={openInstagram}
            style={{ cursor: "pointer" }}
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <FaFacebook 
            size={24} 
            className="cursor-pointer text-primary" 
            onClick={openFacebook}
            style={{ cursor: "pointer" }}
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <FaYoutube 
            size={24} 
            className="cursor-pointer text-primary" 
            onClick={openYoutube}
            style={{ cursor: "pointer" }}
          />
        </motion.div>
      </motion.div>
    </Container>
  </div>

  <style jsx>{`
    /* Desktop Styles */
    .desktop-video-container {
      position: relative;
      width: 100%;
      height: 100vh;
      margin: 0;
      padding: 0;
    }

    .desktop-video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .desktop-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4); /* Grey background overlay */
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .desktop-content {
      padding: 2rem;
      border-radius: 10px;
    }

    /* Mobile Styles */
    .mobile-video-container {
      width: 100%;
      height: 60vh;
      margin: 0;
      padding: 0;
    }

    .mobile-video {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .mobile-content {
      padding: 2rem 1rem;
      background: white;
    }

    /* Responsive breakpoints */
    @media (max-width: 767px) {
      .desktop-video-container {
        display: none;
      }
    }

    @media (min-width: 768px) {
      .mobile-video-container {
        display: none;
      }
      .mobile-content {
        display: none;
      }
    }

    /* Extra small devices */
    @media (max-width: 576px) {
      .mobile-video-container {
        height: 50vh;
      }
    }

    /* Large screens */
    @media (min-width: 1200px) {
      .desktop-video-container {
        height: 100vh;
      }
    }
  `}</style>
</motion.section>         

        {/* Enhanced ABOUT SECTION */}
      <section id="about" className="py-5 bg-light">
  <Container>
    <Row className="align-items-center min-vh-50">
      <Col lg={6} className="mb-5 mb-lg-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
        >
          <div className="position-relative">
            <motion.img
              whileHover={{ scale: 1.03 }}
              src="/images/deepa.jpeg"
              alt="Deepa Saini"
              className="img-fluid rounded-4 shadow-lg"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="position-absolute top-0 start-0 m-3"
            >
              <Badge bg="success" className="px-3 py-2 fs-6">
                {lang === "en" ? "Government Officer & Poet" : "सरकारी अधिकारी एवं कवयित्री"}
              </Badge>
            </motion.div> 
          </div>
        </motion.div>
      </Col>
      <Col lg={6}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Badge bg="primary" className="mb-3 px-3 py-2 fs-6">
            {lang === "en" ? "About Me" : "मेरे बारे में"}
          </Badge>
          <h2 className="fw-bold display-5 mb-4">
            {lang === "en" ? "Government Officer by Profession, Poet by Passion" : "पेशे से सरकारी अधिकारी, जुनून से कवयित्री"}
          </h2>
          <p className="fs-5 text-muted mb-4">
            {lang === "en" 
              ? "Deepa Saini is a renowned Hindi and Rajasthani poetess from Jaipur who has captivated audiences across India with her powerful poetry. She performs on national Kavi Sammelan stages and solo live shows, and has appeared on popular TV shows like 'Wah Bhai Wah' on Shemaroo TV. Her poetic journey inspires many as she balances her government service with artistic expression."
              : "दीपा सैनी जयपुर की एक प्रसिद्ध हिंदी और राजस्थानी कवयित्री हैं, जिन्होंने अपनी शक्तिशाली कविताओं से पूरे भारत में श्रोताओं को मंत्रमुग्ध किया है। वह राष्ट्रीय कवि सम्मेलनों और एकल लाइव शो में प्रदर्शन करती हैं, और शेमारू टीवी पर 'वाह भाई वाह' जैसे लोकप्रिय टीवी शो में भी दिख चुकी हैं। सरकारी सेवा के साथ कलात्मक अभिव्यक्ति का संतुलन बनाते हुए उनकी काव्य यात्रा कई लोगों को प्रेरित करती है।"}
          </p>
          <Row className="text-center">
            
            <Col md={4} className="mb-3">
              <motion.div whileHover={{ scale: 1.05 }} className="p-3 bg-white rounded-3 shadow-sm">
                <h3 className="fw-bold text-success mb-2">500+</h3>
                <p className="mb-0">{lang === "en" ? "Stage Performances" : "मंच प्रदर्शन"}</p>
              </motion.div>
            </Col>
            <Col md={4} className="mb-3">
              <motion.div whileHover={{ scale: 1.05 }} className="p-3 bg-white rounded-3 shadow-sm">
                <h3 className="fw-bold text-warning mb-2">100K+</h3>
                <p className="mb-0">{lang === "en" ? "YouTube Views" : "यूट्यूब व्यूज"}</p>
              </motion.div>
            </Col>
          </Row>
         
        </motion.div>
      </Col>
    </Row>
  </Container>
</section>

        {/* Enhanced GALLERY SECTION */}
        <section id="gallery" className="py-5 bg-white">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-5"
            >
              <Badge bg="secondary" className="mb-3 px-3 py-2 fs-6">
                {t.galleryTitle}
              </Badge>
              <h2 className="fw-bold display-5">
                {lang === "en" ? "Moments of Impact & Inspiration" : "प्रभाव और प्रेरणा के पल"}
              </h2>
            </motion.div>
            
            <Row>
              {galleryImages.map((image, index) => (
                <Col key={image.id} lg={4} md={6} className="mb-4">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={itemVariants}
                    custom={index}
                  >
                    <Card className="border-0 shadow-lg hover-shadow overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Card.Img 
                          variant="top"
                          src={image.src}
                          alt={image.title}
                          style={{ height: "250px", objectFit: "cover" }}
                        />
                      </motion.div>
                      <Card.Body className="text-center">
                        <h6 className="fw-bold mb-2">{image.title}</h6>
                        <Badge bg="outline-primary" text="primary">
                          {/* {image.category} */}
                        </Badge>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Enhanced TESTIMONIALS SECTION */}
        <section id="testimonials" className="py-5 bg-light">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-5"
            >
              <Badge bg="warning" className="mb-3 px-3 py-2 fs-6">
                {t.testimonialTitle}
              </Badge>
              <h2 className="fw-bold display-5">
                {lang === "en" ? "What People Say" : "लोग क्या कहते हैं"}
              </h2>
            </motion.div>
            
            <Row>
              {testimonials.map((item, index) => (
                <Col key={index} lg={4} className="mb-4">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={itemVariants}
                    custom={index}
                  >
                    <Card className="border-0 shadow-sm h-100 hover-lift">
                      <Card.Body className="p-4 d-flex flex-column">
                        <div className="mb-3">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="text-warning me-1" />
                          ))}
                        </div>
                        <p className="fst-italic fs-5 flex-grow-1">
                          "{lang === "en" ? item.en : item.hi}"
                        </p>
                        <div className="mt-auto">
                          <h6 className="fw-bold mb-1">{item.name}</h6>
                          <small className="text-muted">{item.role}</small>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Enhanced CONTACT SECTION */}
        <section id="contact" className="py-5 bg-gradient-primary text-white">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-5"
            >
              <Badge bg="light" text="dark" className="mb-3 px-3 py-2 fs-6">
                {t.contactTitle}
              </Badge>
              <h2 className="fw-bold display-5">
                {t.contactDesc}
              </h2>
            </motion.div>

            <Row className="justify-content-center">
              <Col lg={8}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={containerVariants}
                  className="row g-4"
                >
                  <Col md={6}>
                    <motion.div variants={itemVariants} className="text-center p-4 bg-white bg-opacity-10 rounded-4 h-100">
                      <FaPhone size={40} className="mb-3" />
                      <h5 className="fw-bold">{t.phone}</h5>
                      <p className="fs-5 mb-3">077928 41928</p>
                      <Button variant="light" onClick={handleCall}>
                        {lang === "en" ? "Call Now" : "अभी कॉल करें"}
                      </Button>
                    </motion.div>
                  </Col>
                  
                  <Col md={6}>
                    <motion.div variants={itemVariants} className="text-center p-4 bg-white bg-opacity-10 rounded-4 h-100">
                      <FaYoutube size={40} className="mb-3" />
                      <h5 className="fw-bold">{t.watchVideos}</h5>
                      <p className="mb-3">{lang === "en" ? "Subscribe to my channel" : "मेरे चैनल को सब्सक्राइब करें"}</p>
                      <Button variant="light" onClick={openYoutube}>
                        <FaYoutube className="me-2" />
                        YouTube
                      </Button>
                    </motion.div>
                  </Col>
                </motion.div>

                {/* Social Media Section */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="text-center mt-5"
                >
                  <h5 className="fw-bold mb-4">{t.followSocial}</h5>
                  <div className="d-flex justify-content-center gap-4">
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                      <Button variant="outline-light" size="lg" onClick={openInstagram}>
                        <FaInstagram className="me-2" />
                        Instagram
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                      <Button variant="outline-light" size="lg" onClick={openFacebook}>
                        <FaFacebook className="me-2" />
                        Facebook
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>

      <style jsx>{`
        .bg-gradient-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .hover-shadow {
          transition: box-shadow 0.3s ease;
        }
        .hover-shadow:hover {
          box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important;
        }
        .hover-lift {
          transition: transform 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
        }
        .text-gradient {
          background: linear-gradient(45deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .min-vh-50 {
          min-height: 50vh;
        }
      `}</style>
    </Layout>
  );
};

export default HomePage;