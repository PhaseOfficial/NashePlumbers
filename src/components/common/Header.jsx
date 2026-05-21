import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const linkClasses = ({ isActive }) => 
    `font-label-md text-label-md px-4 py-2 transition-all duration-300 border-b-2 ${
      isActive ? "text-primary border-primary" : "text-on-surface-variant border-transparent hover:text-primary"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 md:py-6">
      <div className="flex items-center gap-4">
        <button className="md:hidden text-primary">
          <span className="material-symbols-outlined text-2xl cursor-pointer">menu</span>
        </button>
        <Link to="/" className="flex items-center gap-3 group">
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
      
      <nav className="hidden md:flex items-center gap-4">
        <NavLink to="/" className={linkClasses} end>
          Home
        </NavLink>
        <NavLink to="/services" className={linkClasses}>
          Services
        </NavLink>
        <NavLink to="/about" className={linkClasses}>
          About Us
        </NavLink>
        <NavLink to="/contact" className={linkClasses}>
          Contact Us
        </NavLink>
      </nav>
      
      <div className="flex items-center gap-4">
        <a href="tel:+263770000000" className="bg-accent text-white px-6 py-2 rounded-full font-label-md text-sm hover:bg-accent/90 transition-all flex items-center gap-2 shadow-lg shadow-accent/20">
          <span className="material-symbols-outlined text-sm">call</span>
          <span className="hidden sm:inline">Emergency: 24/7</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
