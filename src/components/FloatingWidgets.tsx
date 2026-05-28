import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';

export default function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set timeout to dismiss the notification bubble after 7 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsappRedirect = () => {
    const text = encodeURIComponent('Hello FILINGUNIVERSE, I want to discuss corporate filings and tax compliance with a professional CA. Please connect me.');
    window.open(`https://wa.me/919057774795?text=${text}`, '_blank', 'noreferrer,noopener');
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div id="floating-widgets-container" className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      
      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={handleScrollToTop}
            id="back-to-top-btn"
            className="w-10 h-10 rounded-xl bg-white hover:bg-brand-primary border border-stone-200 hover:border-brand-primary text-stone-600 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer transform active:scale-95 group"
            title="Scroll to Top"
          >
            <LucideIcon name="ChevronLeft" size={18} className="rotate-90 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Action Column */}
      <div className="relative flex items-center gap-3">
        {/* Help Bubble Notification popup */}
        <AnimatePresence>
          {showNotification && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              className="bg-[#131b26] border border-emerald-500/30 text-white rounded-xl py-2 px-3.5 shadow-2xl flex items-center gap-2 max-w-xs whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[11px] font-bold tracking-wide font-mono text-emerald-400 uppercase">CAs Online &bull; Ask Us</span>
              
              <button
                onClick={() => setShowNotification(false)}
                id="close-floating-notify-btn"
                className="text-stone-400 hover:text-white transition-colors"
                title="Dismiss"
              >
                <LucideIcon name="X" size={12} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp core action rounded circle */}
        <button
          onClick={handleWhatsappRedirect}
          id="floating-whatsapp-action"
          className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] transform hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
          title="Direct WhatsApp Helpline"
        >
          {/* Glowing pulse rings around button */}
          <span className="absolute -inset-1 rounded-full border-2 border-[#25D366]/40 animate-ping" />
          <LucideIcon name="MessageSquare" size={24} className="fill-white/10" />
        </button>
      </div>

    </div>
  );
}
