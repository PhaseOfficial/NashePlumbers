import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "../../assets/plumber installing .jpeg";

const Hero = ({ fadeInUp, staggerContainer, floatAnimation, rotateWrench }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 px-margin-mobile md:px-margin-desktop overflow-hidden bg-gradient-to-br from-surface to-surface-container-low border-b border-outline-variant/20">
      {/* Animated Background Wrench */}
      <motion.div 
        variants={rotateWrench}
        animate="animate"
        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-[0.04] pointer-events-none"
      >
        <span className="material-symbols-outlined text-[500px] text-primary">plumbing</span>
      </motion.div>

      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center relative z-10 w-full">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="col-span-1 md:col-span-7 space-y-8 text-center md:text-left"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full text-secondary font-label-md text-sm border border-secondary/20 mx-auto md:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            24/7 EMERGENCY RESPONSE ACROSS ZIMBABWE
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="font-headline-xl text-5xl md:text-7xl lg:text-8xl text-primary leading-[1.1] font-bold tracking-tighter">
            Expertise <br />
            <span className="text-secondary italic">You Can See,</span> <br />
            Service <br />
            <span className="text-accent italic">You Can Trust.</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="font-body-lg text-lg md:text-2xl text-on-surface-variant max-w-xl leading-relaxed mx-auto md:mx-0">
            Fast, affordable, and professional plumbing solutions for homes and businesses in Zimbabwe. From leaks to full installations, we've got you covered.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
            <Link to="/contact" className="bg-accent text-white px-8 py-5 rounded-2xl font-headline-sm text-xl shadow-xl shadow-accent/20 hover:scale-105 transition-all flex items-center gap-3">
              GET A FREE QUOTE
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <a href="tel:+263785770586" className="bg-primary text-white px-8 py-5 rounded-2xl font-headline-sm text-xl shadow-xl shadow-primary/20 hover:scale-105 transition-all flex items-center gap-3">
              CALL NOW
              <span className="material-symbols-outlined text-xl font-light">call</span>
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex items-center gap-6 md:gap-8 pt-8 border-t border-outline-variant/30 justify-center md:justify-start overflow-x-auto pb-4">
            <div className="flex flex-col flex-shrink-0">
              <span className="font-headline-md text-3xl md:text-4xl text-primary font-bold">10+</span>
              <span className="font-label-sm text-on-surface-variant uppercase tracking-widest text-[10px]">Years Experience</span>
            </div>
            <div className="w-[1px] h-10 bg-outline-variant/30 flex-shrink-0"></div>
            <div className="flex flex-col flex-shrink-0">
              <span className="font-headline-md text-3xl md:text-4xl text-primary font-bold">500+</span>
              <span className="font-label-sm text-on-surface-variant uppercase tracking-widest text-[10px]">Projects Completed</span>
            </div>
            <div className="w-[1px] h-10 bg-outline-variant/30 flex-shrink-0"></div>
            <div className="flex flex-col flex-shrink-0">
              <span className="font-headline-md text-3xl md:text-4xl text-primary font-bold">100%</span>
              <span className="font-label-sm text-on-surface-variant uppercase tracking-widest text-[10px]">Happy Clients</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="col-span-1 md:col-span-5 relative h-[500px] md:h-[700px] mt-12 md:mt-0"
        >
          <div className="absolute inset-0 bg-secondary/10 rounded-[40px] -rotate-3 transform scale-95 border-2 border-dashed border-secondary/20"></div>
          <div className="absolute inset-0 bg-white rounded-[40px] shadow-2xl overflow-hidden border border-outline-variant/30">
             <img src={heroImg} alt="Master Plumber at Work" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
             {/* Floating Overlay Badge */}
             <motion.div 
               {...floatAnimation}
               className="absolute bottom-10 left-10 right-10 p-6 glass-morphism rounded-2xl flex items-center gap-4 border border-white/30"
             >
               <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white shadow-lg">
                  <span className="material-symbols-outlined">verified</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-primary font-bold uppercase tracking-widest text-xs">Certified Quality</span>
                  <span className="text-on-surface-variant text-[10px]">Zimbabwean Standard Approved</span>
               </div>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
