import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return (
    <button 
      onClick={() => setIsVisible(true)}
      className="fixed bottom-24 left-6 bg-primary text-cream p-3 stitch-border drop-border cursor-pointer hover:-translate-y-1 z-50 transition-all active:scale-95"
      title="Cookie Settings"
    >
      <span className="material-symbols-outlined text-xl">cookie</span>
    </button>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center md:justify-start md:items-end p-6 pointer-events-none">
      <div className="bg-surface text-matte-black p-8 border border-matte-black w-full max-w-md pointer-events-auto animate-fadeIn drop-border">
        <p className="font-label font-black text-xs mb-4 uppercase tracking-widest text-primary italic">
          THE STITCH COOKIE
        </p>
        <p className="font-body text-base mb-8 opacity-80 leading-relaxed">
          We use cookies to improve your digital showcase experience. By continuing, you agree to our use of cookies for functional and analytical purposes.
        </p>
        <div className="flex gap-4">
          <button
            onClick={handleDecline}
            className="flex-1 bg-transparent border border-matte-black px-6 py-3 font-label font-bold text-[10px] uppercase tracking-widest hover:bg-cream transition-all"
          >
            DECLINE
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 bg-primary text-cream px-6 py-3 font-label font-bold text-[10px] uppercase tracking-widest hover:bg-matte-black transition-all"
          >
            ACCEPT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
