import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    { icon: "water_damage", title: "Leak Repairs", desc: "Detection and repair of hidden pipe leaks using advanced thermal imaging." },
    { icon: "plumbing", title: "Pipe Install", desc: "Professional installation of copper and PVC piping for all building types." },
    { icon: "sanitizer", title: "Drain Cleaning", desc: "Advanced hydro-jetting and mechanical cleaning for persistent blockages." },
    { icon: "water_heater", title: "Geyser Install", desc: "Expert setup and maintenance of solar, gas, and electric water heaters." }
  ];

  return (
    <section className="py-32 px-margin-mobile md:px-margin-desktop bg-white relative z-10">
      <div className="max-w-container-max mx-auto">
        <div className="text-center space-y-4 mb-20">
          <h2 className="font-headline-xl text-primary text-4xl md:text-6xl tracking-tighter uppercase font-bold">Our Expert Services</h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto text-xl">
            Professional-grade plumbing solutions delivered with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[32px] bg-surface hover:bg-white hover:shadow-2xl transition-all border border-outline-variant/30 group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors mb-8 shadow-sm">
                <span className="material-symbols-outlined text-4xl">{service.icon}</span>
              </div>
              <h3 className="font-headline-md text-2xl text-primary mb-4 group-hover:text-accent transition-colors font-bold uppercase tracking-tight">{service.title}</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <Link to="/services" className="px-12 py-5 border-2 border-primary text-primary rounded-2xl font-headline-sm text-lg hover:bg-primary hover:text-white transition-all uppercase tracking-widest">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
