import { Link } from "react-router-dom";

const HomeCTA = () => {
  return (
    <section className="py-32 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto bg-gradient-to-br from-secondary to-primary rounded-[60px] p-12 md:p-32 text-center text-white relative overflow-hidden shadow-2xl border-4 border-white/10">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        
        <div className="relative z-10 space-y-12">
          <h2 className="font-headline-xl text-5xl md:text-8xl font-bold uppercase tracking-tighter max-w-5xl mx-auto leading-none">
            Ready for <br />Professional <br /><span className="text-accent italic underline decoration-white/20">Plumbing Support?</span>
          </h2>
          <p className="font-body-lg text-xl md:text-3xl text-primary-fixed-dim max-w-3xl mx-auto opacity-90 leading-relaxed">
            Get an instant quote or book an inspection today. Our master plumbers are standing by to assist you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-10">
            <Link to="/contact" className="bg-accent text-white px-16 py-8 rounded-3xl font-headline-md text-2xl hover:scale-105 transition-all shadow-2xl shadow-accent/40 font-black">
              GET A QUOTE
            </Link>
            <Link to="/services" className="bg-white text-primary px-16 py-8 rounded-3xl font-headline-md text-2xl hover:scale-105 transition-all font-black shadow-xl">
              OUR SERVICES
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
