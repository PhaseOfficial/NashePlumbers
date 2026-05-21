import { motion } from "framer-motion";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-background min-h-screen pt-24 font-body-md">
      {/* Hero Section */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[500px]">engineering</span>
        </div>
        
        <div className="max-w-container-max mx-auto relative z-10 space-y-8">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-label-md text-accent tracking-[0.4em] uppercase block"
          >
            The Nashe Legacy
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-headline-xl text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none"
          >
            Built on <span className="text-secondary-fixed italic">Trust,</span> <br /> Delivered with <span className="text-primary-fixed-dim">Precision.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-body-lg text-lg md:text-2xl text-primary-fixed-dim max-w-3xl leading-relaxed opacity-90"
          >
            Since 2014, Nashe Plumbers has been the silent engine behind Zimbabwe's most reliable residential and commercial water systems.
          </motion.p>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop bg-white">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-secondary/5 -rotate-6 rounded-[40px] border-2 border-dashed border-secondary/20"></div>
            <div className="relative aspect-[4/5] bg-gradient-to-br from-primary to-secondary rounded-[40px] overflow-hidden flex items-center justify-center shadow-2xl">
               <span className="material-symbols-outlined text-[200px] text-white/10">verified</span>
               <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                  <p className="font-headline-sm text-white text-xl uppercase tracking-tighter">Zimbabwean Excellence Certified</p>
               </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <h2 className="font-headline-xl text-primary text-4xl font-bold uppercase tracking-tighter">Plumbing as a Master-Craft</h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed text-xl">
                We don't just fix pipes; we engineer durable solutions. Nashe Plumbers was founded on the belief that Zimbabwean homes and businesses deserve plumbing infrastructure that reflects the quality of their ambitions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div {...fadeInUp} className="space-y-4">
                 <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    <span className="material-symbols-outlined text-2xl">workspace_premium</span>
                 </div>
                 <h3 className="font-headline-sm text-xl text-primary uppercase font-bold">Uncompromising Quality</h3>
                 <p className="font-body-md text-on-surface-variant">We only use certified, high-grade materials that meet international safety standards.</p>
              </motion.div>
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="space-y-4">
                 <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-2xl">speed</span>
                 </div>
                 <h3 className="font-headline-sm text-xl text-primary uppercase font-bold">Absolute Response</h3>
                 <p className="font-body-md text-on-surface-variant">Our fleet is positioned strategically to ensure we reach any emergency within the hour.</p>
              </motion.div>
              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="space-y-4">
                 <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-2xl">groups</span>
                 </div>
                 <h3 className="font-headline-sm text-xl text-primary uppercase font-bold">Master Technicians</h3>
                 <p className="font-body-md text-on-surface-variant">Every Nashe plumber undergoes rigorous certification and technical training.</p>
              </motion.div>
              <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="space-y-4">
                 <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    <span className="material-symbols-outlined text-2xl">payments</span>
                 </div>
                 <h3 className="font-headline-sm text-xl text-primary uppercase font-bold">Flat-Rate Fairness</h3>
                 <p className="font-body-md text-on-surface-variant">Transparent pricing without hidden fees. You know the cost before the work begins.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* History / Timeline */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface-container-low border-y border-outline-variant/30">
        <div className="max-w-container-max mx-auto text-center space-y-20">
           <div className="space-y-4">
              <span className="font-label-md text-secondary tracking-widest uppercase">Our Journey</span>
              <h2 className="font-headline-xl text-primary text-4xl font-bold uppercase tracking-tighter">A Decade of Excellence</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left relative">
              {/* Decorative Pipe Connector */}
              <div className="hidden md:block absolute top-10 left-0 w-full h-1 bg-gradient-to-r from-primary/10 via-accent/20 to-primary/10 -z-0"></div>

              {[
                { year: "2014", title: "The Foundation", desc: "Nashe Plumbers begins as a small family-run repair service in Harare." },
                { year: "2018", title: "Commercial Expansion", desc: "Launched specialized industrial division catering to large-scale construction." },
                { year: "2024", title: "Digital Masterclass", desc: "Implementing real-time tracking and non-invasive leak detection across Zimbabwe." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-12 rounded-3xl border border-outline-variant/30 relative z-10 shadow-xl space-y-6 group hover:border-accent transition-colors">
                   <div className="text-4xl font-headline-xl text-accent font-black">{item.year}</div>
                   <h3 className="font-headline-sm text-2xl text-primary uppercase font-bold">{item.title}</h3>
                   <p className="font-body-md text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-40 px-margin-mobile md:px-margin-desktop bg-white text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.h2 {...fadeInUp} className="font-headline-xl text-primary text-4xl md:text-6xl font-bold uppercase tracking-tighter">
            Work with Zimbabwe's <br /><span className="text-accent italic">Most Trusted</span> Specialists.
          </motion.h2>
          <motion.div {...fadeInUp} className="flex justify-center gap-6">
             <a href="tel:+263770000000" className="bg-primary text-white px-12 py-6 rounded-2xl font-headline-md text-xl shadow-2xl shadow-primary/20 hover:scale-105 transition-all">
                GET STARTED
             </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
