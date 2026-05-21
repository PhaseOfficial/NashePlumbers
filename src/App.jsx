import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Collection from "./pages/Collection"; // We'll keep this as "Services" for now or rename
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import Voice from "./pages/Voice";
import Header from "./components/common/Header";
import BottomNav from "./components/common/BottomNav";
import Footer from "./components/common/Footer";
import CookieConsent from "./components/Cookies";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import { setupGlobalClickSound } from "./utils/audio";

const tagManagerArgs = {
  gtmId: "GTM-PKXK7LPV",
};

TagManager.initialize(tagManagerArgs);

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const cleanup = setupGlobalClickSound();
    return cleanup;
  }, []);

  return (
    <div className="bg-background min-h-screen font-body-md selection:bg-primary selection:text-white relative">
      {/* Subtle Blue Gradient Background Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05] bg-gradient-to-tr from-secondary to-transparent"></div>
      
      <Header />
      
      <main className="min-h-screen relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Collection />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/voice" element={<Voice />} />
            
            <Route
              path="*"
              element={
                <div className="text-center mt-40 text-2xl font-headline-lg text-primary uppercase tracking-widest">
                  404 - Page Not Found
                </div>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
      <BottomNav />
      <CookieConsent />
    </div>
  );
};

export default App;
