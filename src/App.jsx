import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Collection from "./pages/Collection";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import Voice from "./pages/Voice";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import CookieConsent from "./components/Cookies";
import { useEffect } from "react";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-background min-h-screen font-body-md selection:bg-primary selection:text-white relative">
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05] bg-gradient-to-tr from-secondary to-transparent"></div>
      
      <Header />
      
      <main className="min-h-screen relative z-10">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
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
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default App;
