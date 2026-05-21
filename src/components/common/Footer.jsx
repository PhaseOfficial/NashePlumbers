import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-20 px-margin-mobile md:px-margin-desktop border-t-8 border-accent">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <h2 className="font-headline-lg text-3xl uppercase tracking-tighter">NASHE PLUMBERS</h2>
          <p className="font-body-md text-primary-fixed-dim max-w-sm leading-relaxed">
            Professional grade plumbing solutions since 2014. Certified specialists in residential and commercial plumbing across Zimbabwe.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
              <i className="ri-facebook-fill"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
              <i className="ri-whatsapp-line"></i>
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-headline-sm text-xl uppercase">Quick Links</h3>
          <ul className="space-y-4 font-body-sm text-primary-fixed-dim">
            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Our Services</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="font-headline-sm text-xl uppercase">Contact</h3>
          <ul className="space-y-4 font-body-sm text-primary-fixed-dim">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-accent">location_on</span>
              123 Samora Machel Avenue, Harare
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-accent">call</span>
              +263 770 000 000
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-accent">mail</span>
              info@nasheplumbers.co.zw
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-container-max mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body-sm text-primary-fixed-dim text-sm">
          © 2024 Nashe Plumbers. Certified Specialist | Insured Service.
        </p>
        <div className="flex gap-8 font-body-sm text-xs text-primary-fixed-dim uppercase tracking-widest">
          <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
