import { motion } from "framer-motion";

const Testimonials = () => {
  const reviews = [
    {
      initials: "TM",
      name: "Tinashe Moyo",
      role: "Harare Homeowner",
      color: "bg-secondary/10 text-secondary",
      text: "They arrived within 30 minutes for a burst pipe emergency at 2 AM. Professional, clean, and solved the issue quickly."
    },
    {
      initials: "SC",
      name: "Sarah Choga",
      role: "Property Manager",
      color: "bg-primary/10 text-primary",
      text: "Excellent geyser installation. The team was knowledgeable and used high-quality parts. Highly recommended."
    }
  ];

  return (
    <section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface-container-low relative">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-24 space-y-4">
          <span className="font-label-md text-accent tracking-widest uppercase">Verified Reviews</span>
          <h2 className="font-headline-xl text-primary text-5xl md:text-7xl font-bold uppercase tracking-tighter">Customer Stories</h2>
          <div className="h-1 w-32 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-16 rounded-[40px] shadow-xl border border-outline-variant/30 space-y-8 relative overflow-hidden"
            >
               <span className="material-symbols-outlined text-[120px] text-primary/5 absolute -top-4 -right-4">format_quote</span>
               <p className="font-body-lg text-2xl italic text-on-surface leading-relaxed relative z-10">
                 "{review.text}"
               </p>
               <div className="flex items-center gap-6 pt-10 border-t border-outline-variant/30 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-2xl ${review.color}`}>
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-lg uppercase font-bold text-primary tracking-tight">{review.name}</h4>
                    <span className="font-label-sm text-xs text-on-surface-variant uppercase tracking-[0.2em]">{review.role}</span>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
