import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 px-margin-mobile md:px-margin-desktop overflow-hidden bg-gradient-to-br from-surface to-surface-container-low">
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-[0.03] pointer-events-none">
          <span className="material-symbols-outlined text-[600px] text-primary">plumbing</span>
        </div>

        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center relative z-10 w-full">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="col-span-1 md:col-span-7 space-y-8"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full text-secondary font-label-md text-sm border border-secondary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              24/7 EMERGENCY RESPONSE ACROSS ZIMBABWE
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="font-headline-xl text-4xl md:text-6xl lg:text-7xl text-primary leading-tight font-bold tracking-tighter">
              Expertise You Can See, <br />
              <span className="text-secondary italic">Service You Can Trust.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="font-body-lg text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
              Fast, affordable, and professional plumbing solutions for homes and businesses in Zimbabwe. From leaks to full installations, we've got you covered.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
              <Link to="/contact" className="bg-accent text-white px-8 py-4 rounded-xl font-headline-sm text-lg shadow-xl shadow-accent/20 hover:scale-105 transition-all flex items-center gap-3">
                GET A FREE QUOTE
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <a href="tel:+263770000000" className="bg-primary text-white px-8 py-4 rounded-xl font-headline-sm text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-all flex items-center gap-3">
                CALL NOW
                <span className="material-symbols-outlined text-xl font-light">call</span>
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-8 pt-8 border-t border-outline-variant/30">
              <div className="flex flex-col">
                <span className="font-headline-md text-3xl text-primary font-bold">10+</span>
                <span className="font-label-sm text-on-surface-variant uppercase tracking-widest text-[10px]">Years Experience</span>
              </div>
              <div className="w-[1px] h-10 bg-outline-variant/30"></div>
              <div className="flex flex-col">
                <span className="font-headline-md text-3xl text-primary font-bold">500+</span>
                <span className="font-label-sm text-on-surface-variant uppercase tracking-widest text-[10px]">Projects Completed</span>
              </div>
              <div className="w-[1px] h-10 bg-outline-variant/30"></div>
              <div className="flex flex-col">
                <span className="font-headline-md text-3xl text-primary font-bold">100%</span>
                <span className="font-label-sm text-on-surface-variant uppercase tracking-widest text-[10px]">Happy Clients</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="col-span-1 md:col-span-5 relative h-[500px] md:h-[600px] hidden md:block"
          >
            <div className="absolute inset-0 bg-secondary/10 rounded-3xl -rotate-3 transform scale-95 border-2 border-dashed border-secondary/20"></div>
            <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden border border-outline-variant/30">
               {/* Placeholder for Hero Image */}
               <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative">
                  <span className="material-symbols-outlined text-[200px] text-white/10 absolute top-0 left-0">water_damage</span>
                  <div className="p-12 text-center space-y-6">
                    <span className="material-symbols-outlined text-8xl text-accent">construction</span>
                    <h3 className="font-headline-lg text-white text-3xl uppercase tracking-tighter">ZIMBABWEAN PLUMBING EXCELLENCE</h3>
                    <div className="h-1 w-20 bg-accent mx-auto"></div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop bg-white">
        <div className="max-w-container-max mx-auto">
          <div className="text-center space-y-4 mb-20">
            <h2 className="font-headline-xl text-primary text-4xl md:text-5xl tracking-tighter uppercase font-bold">Our Expert Services</h2>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Professional-grade plumbing solutions delivered with precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "leak_add", title: "Leak Repairs", desc: "Detection and repair of hidden pipe leaks using advanced thermal imaging." },
              { icon: "pipeline", title: "Pipe Install", desc: "Professional installation of copper and PVC piping for all building types." },
              { icon: "cleaning_services", title: "Drain Cleaning", desc: "Advanced hydro-jetting and mechanical cleaning for persistent blockages." },
              { icon: "water_heater", title: "Geyser Install", desc: "Expert setup and maintenance of solar, gas, and electric water heaters." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-surface hover:bg-white hover:shadow-2xl transition-all border border-outline-variant/30 group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors mb-6">
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </div>
                <h3 className="font-headline-md text-xl text-primary mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/services" className="font-label-md text-primary border-b-2 border-primary/20 hover:border-primary pb-2 transition-all uppercase tracking-widest">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-24 bg-primary text-white px-margin-mobile md:px-margin-desktop relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
           <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary to-transparent"></div>
        </div>
        
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <h2 className="font-headline-xl text-3xl md:text-5xl font-bold leading-tight uppercase tracking-tighter">
              Why Zimbabwean <br />Families <span className="text-accent italic">Choose Us</span>
            </h2>
            <div className="space-y-6">
              {[
                { title: "Fast Response", desc: "Local teams positioned for rapid dispatch across Harare." },
                { title: "Skilled Technicians", desc: "Highly trained and certified plumbers you can trust." },
                { title: "24/7 Support", desc: "We're available for emergencies anytime, day or night." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent flex-shrink-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-sm">check</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-lg uppercase">{item.title}</h4>
                    <p className="font-body-sm text-primary-fixed-dim opacity-80">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/10 space-y-8 text-center">
            <h3 className="font-headline-lg text-2xl uppercase tracking-widest">Need Immediate Help?</h3>
            <p className="font-body-lg text-primary-fixed-dim">Our emergency team is standing by.</p>
            <div className="flex flex-col gap-4">
               <a href="tel:+263770000000" className="bg-accent text-white py-6 rounded-xl font-headline-md text-2xl shadow-xl shadow-accent/20 hover:scale-105 transition-all">
                  +263 770 000 000
               </a>
               <a href="https://wa.me/263770000000" className="bg-white text-primary py-4 rounded-xl font-label-md text-sm hover:bg-opacity-90 transition-all uppercase tracking-widest flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">chat</span>
                  WhatsApp Us
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="font-headline-xl text-primary text-4xl font-bold uppercase tracking-tighter">Customer Stories</h2>
            <div className="h-1 w-20 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-12 rounded-3xl shadow-xl border border-outline-variant/30 space-y-6 relative overflow-hidden">
               <span className="material-symbols-outlined text-8xl text-primary/5 absolute top-4 right-4">format_quote</span>
               <p className="font-body-lg text-xl italic text-on-surface leading-relaxed relative z-10">
                 "They arrived within 30 minutes for a burst pipe emergency at 2 AM. Professional, clean, and solved the issue quickly."
               </p>
               <div className="flex items-center gap-4 pt-6 border-t border-outline-variant/30 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold">TM</div>
                  <div>
                    <h4 className="font-headline-sm text-sm uppercase font-bold text-primary">Tinashe Moyo</h4>
                    <span className="font-label-sm text-xs text-on-surface-variant uppercase tracking-widest">Harare Homeowner</span>
                  </div>
               </div>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-xl border border-outline-variant/30 space-y-6 relative overflow-hidden">
               <span className="material-symbols-outlined text-8xl text-primary/5 absolute top-4 right-4">format_quote</span>
               <p className="font-body-lg text-xl italic text-on-surface leading-relaxed relative z-10">
                 "Excellent geyser installation. The team was knowledgeable and used high-quality parts. Highly recommended."
               </p>
               <div className="flex items-center gap-4 pt-6 border-t border-outline-variant/30 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">SC</div>
                  <div>
                    <h4 className="font-headline-sm text-sm uppercase font-bold text-primary">Sarah Choga</h4>
                    <span className="font-label-sm text-xs text-on-surface-variant uppercase tracking-widest">Property Manager</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto bg-gradient-to-br from-secondary to-primary rounded-[40px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          </div>
          
          <div className="relative z-10 space-y-10">
            <h2 className="font-headline-xl text-4xl md:text-6xl font-bold uppercase tracking-tighter max-w-4xl mx-auto">
              Ready for Professional <br /><span className="text-accent italic">Plumbing Support?</span>
            </h2>
            <p className="font-body-lg text-xl text-primary-fixed-dim max-w-2xl mx-auto opacity-90">
              Get an instant quote or book an inspection today. Our master plumbers are standing by to assist you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
              <Link to="/contact" className="bg-accent text-white px-12 py-6 rounded-2xl font-headline-md text-xl hover:scale-105 transition-all shadow-xl shadow-accent/40">
                GET A QUOTE
              </Link>
              <Link to="/services" className="bg-white text-primary px-12 py-6 rounded-2xl font-headline-md text-xl hover:scale-105 transition-all">
                OUR SERVICES
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
