import { motion } from "framer-motion";

const TrustBanner = () => {
  const trustItems = [
    { title: "Fast Response", desc: "Local teams positioned for rapid dispatch across Harare." },
    { title: "Skilled Technicians", desc: "Highly trained and certified plumbers you can trust." },
    { title: "24/7 Support", desc: "We're available for emergencies anytime, day or night." }
  ];

  return (
    <section className="py-24 bg-primary text-white px-margin-mobile md:px-margin-desktop relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
         <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary to-transparent"></div>
      </div>
      
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <h2 className="font-headline-xl text-4xl md:text-6xl font-bold leading-tight uppercase tracking-tighter">
            Why Zimbabwean <br />Families <span className="text-accent italic">Choose Us</span>
          </h2>
          <div className="space-y-6">
            {trustItems.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accent flex-shrink-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-sm">check</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-2xl uppercase font-bold tracking-tight">{item.title}</h4>
                  <p className="font-body-lg text-primary-fixed-dim opacity-80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-12 rounded-[40px] shadow-2xl space-y-8 text-center text-primary relative overflow-hidden border border-white/20">
          <div className="absolute top-0 right-0 p-8 opacity-5">
             <span className="material-symbols-outlined text-[150px]">emergency</span>
          </div>
          <h3 className="font-headline-lg text-3xl uppercase tracking-widest font-bold">Need Immediate Help?</h3>
          <p className="font-body-lg text-on-surface-variant text-xl">Our emergency team is standing by.</p>
          <div className="flex flex-col gap-4">
             <a href="tel:+263785770586" className="bg-accent text-white py-8 rounded-2xl font-headline-xl text-4xl shadow-2xl shadow-accent/20 hover:scale-105 transition-all font-black">
                +263 78 577 0586
             </a>
             <a href="https://wa.me/263785770586" className="bg-primary text-white py-5 rounded-2xl font-label-md text-sm hover:bg-secondary transition-all uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-lg">
                <span className="material-symbols-outlined">chat</span>
                WhatsApp Emergency Desk
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
