import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClasses = ({ isActive }) => 
    `font-label-md text-label-md px-4 py-2 transition-all duration-300 border-b-2 ${
      isActive ? "text-primary border-primary" : "text-on-surface-variant border-transparent hover:text-primary"
    }`;

  const mobileLinkClasses = ({ isActive }) => 
    `font-headline-md text-2xl py-4 border-b border-outline-variant/30 w-full text-left flex justify-between items-center ${
      isActive ? "text-primary" : "text-on-surface-variant"
    }`;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Contact Banner */}
      <div className="bg-primary text-white py-2 px-margin-mobile md:px-margin-desktop flex justify-between items-center text-[10px] md:text-xs font-label-md tracking-widest uppercase border-b border-white/10">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-xs text-accent">location_on</span>
            Zimbabwe
          </span>
          <span className="hidden md:flex items-center gap-1 border-l border-white/20 pl-4">
            <span className="material-symbols-outlined text-xs text-accent">schedule</span>
            24/7 Emergency Response
          </span>
        </div>
        <a href="tel:+263785770586" className="flex items-center gap-2 hover:text-accent transition-colors">
          <span className="material-symbols-outlined text-xs text-accent">call</span>
          +263 78 577 0586
        </a>
      </div>

      <div className="bg-surface/80 backdrop-blur-md border-b border-outline-variant flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 md:py-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleMenu}
            className="md:hidden text-primary flex items-center justify-center p-2 hover:bg-primary/5 rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined text-2xl cursor-pointer">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsMenuOpen(false)}>
            <div className="flex flex-col">
              <span className="font-headline-lg text-xl md:text-2xl text-primary tracking-tighter uppercase font-bold">
                NASHE PLUMBERS
              </span>
              <span className="text-[10px] font-label-sm text-secondary tracking-widest uppercase -mt-1">
                Expertise you can trust
              </span>
            </div>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <NavLink to="/" className={linkClasses} end>
            Home
          </NavLink>
          <NavLink to="/services" className={linkClasses}>
            Services
          </NavLink>
          <NavLink to="/contact" className={linkClasses}>
            Contact Us
          </NavLink>
        </nav>
        
        <div className="flex items-center gap-4">
          <a href="tel:+263785770586" className="bg-accent text-white px-6 py-2 rounded-full font-label-md text-sm hover:bg-accent/90 transition-all flex items-center gap-2 shadow-lg shadow-accent/20">
            <span className="material-symbols-outlined text-sm">call</span>
            <span className="hidden sm:inline">Emergency: 24/7</span>
          </a>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-[-1] md:hidden"
            />
            
            {/* Sidebar Content */}
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-[100] md:hidden flex flex-col p-8"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="flex flex-col">
                  <span className="font-headline-lg text-2xl text-primary tracking-tighter uppercase font-bold">
                    NASHE
                  </span>
                  <span className="text-[10px] font-label-sm text-secondary tracking-widest uppercase -mt-1">
                    Plumbing Excellence
                  </span>
                </div>
                <button onClick={toggleMenu} className="text-primary">
                  <span className="material-symbols-outlined text-3xl">close</span>
                </button>
              </div>

              <nav className="flex flex-col flex-1">
                <NavLink to="/" className={mobileLinkClasses} onClick={toggleMenu} end>
                  Home
                  <span className="material-symbols-outlined text-sm opacity-30">arrow_forward</span>
                </NavLink>
                <NavLink to="/services" className={mobileLinkClasses} onClick={toggleMenu}>
                  Our Services
                  <span className="material-symbols-outlined text-sm opacity-30">arrow_forward</span>
                </NavLink>
                <NavLink to="/contact" className={mobileLinkClasses} onClick={toggleMenu}>
                  Contact Us
                  <span className="material-symbols-outlined text-sm opacity-30">arrow_forward</span>
                </NavLink>
              </nav>

              <div className="mt-auto space-y-6 pt-8 border-t border-outline-variant/30">
                <a 
                  href="tel:+263785770586" 
                  className="flex items-center gap-4 bg-accent text-white p-5 rounded-2xl shadow-xl shadow-accent/20 font-headline-sm uppercase text-center justify-center"
                >
                  <span className="material-symbols-outlined">call</span>
                  CALL EMERGENCY
                </a>
                <div className="text-center">
                  <p className="text-[10px] font-label-md text-on-surface-variant uppercase tracking-widest">Available 24/7 Zimbabwe</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
