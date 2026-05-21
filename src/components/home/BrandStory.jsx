import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import servicesImg from "../../assets/plumber setting up pipes.jpeg";
import tankImg from "../../assets/tank after setup.jpeg";
import sinkImg from "../../assets/plumbers setting up sink.jpeg";
import bathroomImg from "../../assets/bathroom with toilet.jpeg";

const BrandStory = () => {
  return (
    <section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface-container-low overflow-hidden relative">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative">
           {/* Background Animated Shape */}
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl"
           ></motion.div>

           <div className="grid grid-cols-2 gap-6 relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                 <div className="aspect-[3/4] rounded-[32px] overflow-hidden shadow-2xl border border-white/20">
                    <img src={servicesImg} alt="Pipe Installation" className="w-full h-full object-cover" />
                 </div>
                 <div className="aspect-square rounded-[32px] overflow-hidden shadow-2xl border border-white/20">
                    <img src={sinkImg} alt="Sink Setup" className="w-full h-full object-cover" />
                 </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6 pt-16"
              >
                 <div className="aspect-square rounded-[32px] overflow-hidden shadow-2xl border border-white/20">
                    <img src={tankImg} alt="Water Tank" className="w-full h-full object-cover" />
                 </div>
                 <div className="aspect-[3/4] rounded-[32px] overflow-hidden shadow-2xl border border-white/20 bg-primary">
                    <img src={bathroomImg} alt="Bathroom Finishes" className="w-full h-full object-cover mix-blend-overlay opacity-80" />
                 </div>
              </motion.div>
           </div>
        </div>

        <div className="space-y-10 relative z-10">
           <div className="space-y-4">
              <span className="font-label-md text-accent tracking-[0.4em] uppercase block">Zimbabwean Excellence</span>
              <h2 className="font-headline-xl text-5xl md:text-7xl text-primary font-bold uppercase tracking-tighter leading-none">Quality You <br />Can <span className="italic text-secondary">Truly See.</span></h2>
           </div>
           <p className="font-body-lg text-xl text-on-surface-variant leading-relaxed">
              Every project we undertake is a testament to our commitment to durability. From large-scale industrial pipe systems to elegant residential bathroom finishes, Nashe Plumbers delivers a master-class in Zimbabwean plumbing.
           </p>
           <div className="flex flex-wrap gap-6 pt-4">
              <Link to="/services" className="px-10 py-5 bg-primary text-white rounded-2xl font-headline-sm text-lg hover:bg-secondary transition-colors uppercase tracking-widest shadow-xl shadow-primary/20">Discover Our Work</Link>
              <a href="tel:+263785770586" className="px-10 py-5 border-2 border-primary text-primary rounded-2xl font-headline-sm text-lg hover:bg-primary hover:text-white transition-all uppercase tracking-widest">Talk to a Master</a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
