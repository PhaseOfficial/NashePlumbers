import { motion } from "framer-motion";
import cipzLogo from "../../assets/CIPZ Logo.png";
import servicesImg from "../../assets/plumber setting up pipes.jpeg";

const Certification = () => {
  return (
    <section className="py-20 px-margin-mobile md:px-margin-desktop bg-primary text-white relative overflow-hidden border-y-8 border-accent">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <img src={servicesImg} alt="Background" className="w-full h-full object-cover grayscale" />
      </div>
      
      <div className="max-w-container-max mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        <div className="flex flex-col items-center lg:items-start space-y-4">
          <span className="font-label-md text-accent uppercase tracking-[0.4em]">Official Accreditation</span>
          <h3 className="font-headline-xl text-3xl md:text-5xl uppercase font-bold text-center lg:text-left tracking-tighter">Fully Certified & <br />Licensed in Zimbabwe</h3>
        </div>
        
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex-shrink-0"
        >
          <a 
            href="https://cipz.pfms.gov.zw:8090/Info/Checkacompany?=5154B0242026" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col md:flex-row items-center gap-8 bg-white p-10 rounded-[40px] shadow-2xl border border-white/20 text-on-surface"
          >
            <img src={cipzLogo} alt="CIPZ Logo" className="h-24 w-auto object-contain" />
            <div className="flex flex-col text-center md:text-left space-y-1">
              <span className="font-headline-md text-2xl text-primary font-bold uppercase tracking-tight">Verify Registration</span>
              <span className="font-body-md text-on-surface-variant uppercase tracking-widest text-xs">Companies and Intellectual Property Office</span>
              <div className="pt-4 flex items-center gap-2 text-accent font-bold justify-center md:justify-start">
                 CHECK STATUS <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Certification;
