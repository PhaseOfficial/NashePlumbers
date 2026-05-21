import { motion } from "framer-motion";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Certification from "../components/home/Certification";
import BrandStory from "../components/home/BrandStory";
import TrustBanner from "../components/home/TrustBanner";
import Testimonials from "../components/home/Testimonials";
import HomeCTA from "../components/home/HomeCTA";

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 0.2 } }
  };

  const floatAnimation = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const rotateWrench = {
    animate: {
      rotate: [0, 15, -15, 0],
      y: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden relative">
      {/* Global Background Animations */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating Droplets */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.05, 0.15, 0.05],
              y: [0, -100, 0],
              x: [0, (i % 2 === 0 ? 50 : -50), 0]
            }}
            transition={{ 
              duration: 8 + i * 2, 
              repeat: Infinity, 
              delay: i * 1.5 
            }}
            className="absolute text-primary"
            style={{ 
              top: `${20 + i * 15}%`, 
              left: `${10 + i * 15}%`,
              fontSize: `${20 + i * 10}px`
            }}
          >
            <span className="material-symbols-outlined">water_drop</span>
          </motion.div>
        ))}

        {/* Floating Tools (Subtle) */}
        <motion.div 
          {...floatAnimation} 
          className="absolute top-[30%] right-[10%] text-secondary opacity-[0.03]"
        >
          <span className="material-symbols-outlined text-[150px]">construction</span>
        </motion.div>
        <motion.div 
          {...floatAnimation} 
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-[20%] left-[5%] text-primary opacity-[0.03]"
        >
          <span className="material-symbols-outlined text-[200px]">handyman</span>
        </motion.div>
      </div>

      <Hero 
        fadeInUp={fadeInUp} 
        staggerContainer={staggerContainer} 
        floatAnimation={floatAnimation} 
        rotateWrench={rotateWrench} 
      />
      
      <Services />
      
      <Certification />
      
      <BrandStory />
      
      <TrustBanner />
      
      <Testimonials />
      
      <HomeCTA />
    </div>
  );
};

export default Home;
