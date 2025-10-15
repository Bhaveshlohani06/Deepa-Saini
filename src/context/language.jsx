import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    name: "Deepa Saini",
    tagline: "Government Officer | Social Worker | Poet",
    explore: "Explore My Work",
    about: "A multifaceted personality serving as a government officer while passionately pursuing social work and poetry. Featured on 'Wah Bhai Wah', Deepa brings unique perspectives through her words and actions.",
    galleryTitle: "Gallery",
    testimonialTitle: "Testimonials",
    contactTitle: "Get In Touch",
    contactDesc: "Let's connect and make a difference together",
    watchVideos: "Watch Videos",
    followSocial: "Follow on Social Media",
    phone: "Phone",
    email: "Email"
  },
  hi: {
    name: "दीपा सैनी",
    tagline: "सरकारी अधिकारी | सामाजिक कार्यकर्ता | कवियत्री",
    explore: "मेरे काम को देखें",
    about: "एक बहुमुखी व्यक्तित्व जो सरकारी अधिकारी के रूप में सेवा करते हुए सामाजिक कार्य और कविता को जुनून के साथ आगे बढ़ा रही हैं। 'वाह भाई वाह' में featured, दीपा अपने शब्दों और कार्यों के माध्यम से अनूठे दृष्टिकोण लाती हैं।",
    galleryTitle: "गैलरी",
    testimonialTitle: "प्रशंसापत्र",
    contactTitle: "संपर्क करें",
    contactDesc: "आइए जुड़ें और एक साथ बदलाव लाएं",
    watchVideos: "वीडियो देखें",
    followSocial: "सोशल मीडिया पर फॉलो करें",
    phone: "फोन",
    email: "ईमेल"
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('preferredLanguage') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('preferredLanguage', lang);
  }, [lang]);

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};