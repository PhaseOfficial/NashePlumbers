import { NavLink } from "react-router-dom";

const BottomNav = () => {
  const baseClasses = "flex flex-col items-center justify-center px-4 py-2 transition-all duration-300";
  const activeClasses = "bg-primary text-cream px-6 py-2";
  const inactiveClasses = "text-matte-black hover:bg-cream";

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 px-2 pb-safe bg-surface border-t border-matte-black md:hidden">
      <NavLink 
        to="/" 
        end
        className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      >
        <span className="material-symbols-outlined mb-1 text-xl">home</span>
        <span className="font-label font-bold text-[9px] tracking-widest uppercase">HOME</span>
      </NavLink>
      <NavLink 
        to="/collection" 
        className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      >
        <span className="material-symbols-outlined mb-1 text-xl">grid_view</span>
        <span className="font-label font-bold text-[9px] tracking-widest uppercase">SHOP</span>
      </NavLink>
      <NavLink 
        to="/contact" 
        className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      >
        <span className="material-symbols-outlined mb-1 text-xl">mail</span>
        <span className="font-label font-bold text-[9px] tracking-widest uppercase">CONTACT</span>
      </NavLink>
      <NavLink 
        to="/profile" 
        className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      >
        <span className="material-symbols-outlined mb-1 text-xl">person</span>
        <span className="font-label font-bold text-[9px] tracking-widest uppercase">PROFILE</span>
      </NavLink>
    </nav>
  );
};

export default BottomNav;
