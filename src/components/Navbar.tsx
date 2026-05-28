import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';

interface NavbarProps {
  onServiceSelect?: (serviceId: string) => void;
}

export default function Navbar({ onServiceSelect }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detection
      const sections = ['home', 'services', 'why-us', 'process', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home', id: 'home-link' },
    { label: 'Services', href: '#services', id: 'services-link' },
    { label: 'Why Choose Us', href: '#why-us', id: 'why-us-link' },
    { label: 'How It Works', href: '#process', id: 'process-link' },
    { label: 'Contact', href: '#contact', id: 'contact-link' },
  ];

  const handleWhatsappRedirect = () => {
    const url = 'https://wa.me/919057774795?text=Hello%20FILINGUNIVERSE%2C%20I%20want%20to%20enquire%20about%20your%20business%20compliance%20services.';
    window.open(url, '_blank', 'noreferrer');
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-brand-primary/20 shadow-[0_10px_30px_-10px_rgba(156,122,60,0.12)] py-3'
            : 'bg-transparent border-b border-brand-primary/10 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              id="navbar-logo"
              className="flex items-center gap-2 group"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-lg overflow-hidden border border-stone-200/55 shadow-[0_0_15px_rgba(156,122,60,0.15)] group-hover:shadow-[0_0_20px_rgba(156,122,60,0.3)] transition-all">
                <img
                  src="https://i.postimg.cc/g2BLGSzT/555660951-122138528108883574-909309500835565069-n.jpg"
                  alt="FILINGUNIVERSE Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="font-display font-bold text-xl tracking-wider text-stone-900">
                FILING
                <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                  UNIVERSE
                </span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  id={item.id}
                  className={`text-sm font-medium tracking-wide transition-colors relative py-2 ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-brand-primary font-bold'
                      : 'text-stone-550 hover:text-stone-900'
                  }`}
                >
                  {item.label}
                  {activeSection === item.href.replace('#', '') && (
                    <motion.span
                      layoutId="activeSub"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-brand-primary shadow-[0_0_8px_rgba(156,122,60,0.5)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* CTA Option */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={handleWhatsappRedirect}
                id="header-cta-whatsapp"
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/30 hover:border-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(156,112,56,0.05)] hover:shadow-[0_0_20px_rgba(156,112,56,0.25)] font-semibold text-sm group cursor-pointer animate-none"
              >
                <LucideIcon name="MessageSquare" size={16} className="text-emerald-600 group-hover:text-white transition-colors" />
                <span>Support Chat</span>
              </button>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                id="mobile-menu-toggle"
                className="w-10 h-10 rounded-lg flex items-center justify-center text-stone-600 hover:text-stone-900 border border-stone-200 hover:border-brand-primary/40 bg-white/40 backdrop-blur-sm transition-all"
                aria-label="Toggle Menu"
              >
                <LucideIcon name={mobileMenuOpen ? 'X' : 'Menu'} size={20} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            id="mobile-nav-panel"
            className="fixed top-[65px] left-0 right-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-lg border-b border-brand-primary/20 shadow-lg md:hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  id={`mobile-${item.id}`}
                  className={`block px-4 py-3 rounded-xl text-base font-bold transition-all ${
                    activeSection === item.href.replace('#', '')
                      ? 'bg-brand-primary/10 text-brand-primary border-l-4 border-brand-primary pl-3'
                      : 'text-stone-650 hover:bg-stone-100 hover:text-stone-900'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleWhatsappRedirect();
                  }}
                  id="mobile-menu-whatsapp-cta"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-primary text-white font-bold shadow-[0_4px_15px_rgba(156,122,60,0.3)] hover:scale-[1.02] transition-transform"
                >
                  <LucideIcon name="MessageSquare" size={18} />
                  <span>Talk on WhatsApp</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
