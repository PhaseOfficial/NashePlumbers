import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Select a Service",
    message: ""
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const phoneNumber = "263785770586";
    const text = `*New Service Request - Nashe Plumbers*%0A%0A` +
                 `*Name:* ${formData.name}%0A` +
                 `*Phone:* ${formData.phone}%0A` +
                 `*Service:* ${formData.service}%0A` +
                 `*Message:* ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-background min-h-screen pt-24 pb-32 font-body-md">
      {/* Header Section */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[500px]">contact_support</span>
        </div>
        
        <div className="max-w-container-max mx-auto relative z-10 text-center space-y-6">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-label-md text-accent tracking-[0.4em] uppercase block"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-headline-xl text-5xl md:text-7xl font-bold uppercase tracking-tighter"
          >
            Contact <span className="text-secondary-fixed italic">Nashe Plumbers</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-body-lg text-lg md:text-xl text-secondary-fixed-dim max-w-2xl mx-auto opacity-90"
          >
            We're here to help with all your plumbing needs. From emergency repairs to professional installations across Zimbabwe.
          </motion.p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-10">
              <motion.div {...fadeInUp} className="flex gap-6 p-8 bg-white rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                   <span className="material-symbols-outlined text-3xl">call</span>
                </div>
                <div className="space-y-2">
                   <h3 className="font-headline-sm text-xl text-primary uppercase font-bold">Phone Support</h3>
                   <p className="font-body-md text-on-surface-variant leading-relaxed">Call our expert team directly for immediate assistance.</p>
                   <a href="tel:+263785770586" className="text-2xl font-headline-md text-primary font-bold hover:text-accent transition-colors">+263 78 577 0586</a>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="flex gap-6 p-8 bg-white rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                   <span className="material-symbols-outlined text-3xl">mail</span>
                </div>
                <div className="space-y-2">
                   <h3 className="font-headline-sm text-xl text-primary uppercase font-bold">Email Us</h3>
                   <p className="font-body-md text-on-surface-variant leading-relaxed">For non-urgent inquiries and detailed project quotes.</p>
                   <a href="mailto:info@nasheplumbers.co.zw" className="text-xl font-body-lg text-primary font-bold hover:text-accent transition-colors">info@nasheplumbers.co.zw</a>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="flex gap-6 p-8 bg-white rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                   <span className="material-symbols-outlined text-3xl">schedule</span>
                </div>
                <div className="space-y-2">
                   <h3 className="font-headline-sm text-xl text-primary uppercase font-bold">Working Hours</h3>
                   <div className="font-body-md text-on-surface-variant space-y-1">
                      <p>Mon - Fri: 08:00 - 17:00</p>
                      <p>Saturday: 09:00 - 13:00</p>
                      <p className="text-accent font-bold">Emergency: 24/7 Available</p>
                   </div>
                </div>
              </motion.div>
            </div>

            <motion.div {...fadeInUp} className="bg-primary text-white p-10 rounded-3xl space-y-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                 <span className="material-symbols-outlined text-[100px]">location_on</span>
              </div>
              <h3 className="font-headline-lg text-2xl uppercase tracking-widest relative z-10">Our Physical Office</h3>
              <p className="font-body-lg opacity-80 relative z-10 max-w-xs">
                123 Samora Machel Avenue, Harare, Zimbabwe
              </p>
              <a href="#" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-label-md text-sm uppercase tracking-widest hover:bg-accent hover:text-white transition-all relative z-10">
                <span className="material-symbols-outlined">directions</span>
                Get Directions
              </a>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[40px] border border-outline-variant/30 shadow-2xl space-y-10"
            >
              <div className="space-y-4">
                <h2 className="font-headline-xl text-primary text-4xl font-bold uppercase tracking-tighter">Send a Message</h2>
                <p className="font-body-lg text-on-surface-variant">Fill out the form below and it will open WhatsApp with your details.</p>
              </div>

              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="font-label-md text-on-surface text-sm uppercase tracking-widest px-1">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-6 py-4 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="font-label-md text-on-surface text-sm uppercase tracking-widest px-1">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-6 py-4 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" 
                      placeholder="+263 ..." 
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="font-label-md text-on-surface text-sm uppercase tracking-widest px-1">Service Type</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-6 py-4 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option disabled>Select a Service</option>
                    <option>Emergency Repair</option>
                    <option>Geyser Installation</option>
                    <option>Leak Detection</option>
                    <option>Drain Cleaning</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="font-label-md text-on-surface text-sm uppercase tracking-widest px-1">Your Message</label>
                  <textarea 
                    name="message"
                    rows="5" 
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-6 py-4 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" 
                    placeholder="Describe your plumbing needs..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full bg-primary text-white py-6 rounded-2xl font-headline-md text-xl uppercase tracking-widest hover:bg-accent transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3">
                  <i className="ri-whatsapp-line text-2xl"></i>
                  SEND VIA WHATSAPP
                </button>
              </form>
            </motion.div>

            <motion.div {...fadeInUp} className="mt-12 p-10 rounded-3xl bg-secondary/5 border-2 border-dashed border-secondary/20 flex flex-col md:flex-row items-center justify-between gap-8">
               <div className="space-y-2">
                  <h3 className="font-headline-sm text-2xl text-primary uppercase font-bold">Need an instant response?</h3>
                  <p className="font-body-md text-on-surface-variant">Our technicians are standing by to answer your questions via WhatsApp.</p>
               </div>
               <a href="https://wa.me/263785770586" className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-headline-sm text-lg hover:scale-105 transition-all flex items-center gap-3 shadow-xl shadow-green-500/20">
                  <i className="ri-whatsapp-line text-2xl"></i>
                  CHAT DIRECTLY
               </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low border-y border-outline-variant/30 overflow-hidden relative">
         <div className="absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant/20"></div>
         <div className="max-w-container-max mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex items-center gap-8">
               <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-accent shadow-xl border border-outline-variant/30">
                  <span className="material-symbols-outlined text-4xl">map</span>
               </div>
               <div className="space-y-2">
                  <h3 className="font-headline-lg text-3xl text-primary font-bold uppercase tracking-tight">Service Area</h3>
                  <p className="font-body-lg text-on-surface-variant">We provide 24/7 plumbing services across Harare, Chitungwiza, and surrounding areas.</p>
               </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
               {["Harare", "Chitungwiza", "Epworth", "Norton", "Ruwa", "Mt Pleasant"].map((city, i) => (
                 <span key={i} className="bg-white px-6 py-2 rounded-full text-sm font-label-md text-primary border border-outline-variant/30 shadow-sm">
                    {city}
                 </span>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default Contact;
