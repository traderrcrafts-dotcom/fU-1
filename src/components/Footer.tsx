import React from 'react';
import LucideIcon from './LucideIcon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSocialClick = (platform: string) => {
    alert(`Connecting you to FILINGUNIVERSE official ${platform} handle.`);
  };

  return (
    <footer id="footer" className="bg-[#09111c] border-t border-brand-primary/25 pt-16 pb-8 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Info */}
          <div className="md:col-span-4 space-y-4">
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, 'home')}
              id="footer-logo"
              className="flex items-center gap-2 group"
            >
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg overflow-hidden shadow-[0_0_15px_rgba(156,122,60,0.155)] border border-white/10">
                <img
                  src="https://i.postimg.cc/g2BLGSzT/555660951-122138528108883574-909309500835565069-n.jpg"
                  alt="FILINGUNIVERSE Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="font-display font-black text-lg tracking-wider text-white">
                FILING
                <span className="bg-gradient-to-r from-brand-primary to-amber-200 bg-clip-text text-transparent">
                  UNIVERSE
                </span>
              </span>
            </a>

            <p className="text-xs sm:text-sm text-stone-405 leading-relaxed font-sans max-w-sm">
              FILINGUNIVERSE is a modern legal-tech and fintech business compliance utility powered by senior Chartered Accountants, trademark attorneys, and CS specialists.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2" id="footer-social-icons">
              {['Twitter', 'LinkedIn', 'Instagram', 'Github'].map((platform) => (
                <button
                  key={platform}
                  onClick={() => handleSocialClick(platform)}
                  id={`social-link-${platform}`}
                  className="w-8 h-8 rounded-lg border border-white/10 hover:border-brand-primary/40 bg-white/5 hover:bg-brand-primary/10 flex items-center justify-center text-stone-400 hover:text-brand-primary transition-all duration-300 cursor-pointer"
                  title={`Connect on ${platform}`}
                >
                  <LucideIcon name={platform === 'Twitter' ? 'Globe' : platform === 'LinkedIn' ? 'Award' : platform === 'Instagram' ? 'Sparkles' : 'Globe'} size={14} />
                </button>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-semibold">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleSmoothScroll(e, 'home')}
                  className="hover:text-brand-primary transition-colors block py-0.5 text-stone-300"
                  id="foot-home-link"
                >
                  Home Portal
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, 'services')}
                  className="hover:text-brand-primary transition-colors block py-0.5 text-stone-300"
                  id="foot-services-link"
                >
                  Filing Services
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  onClick={(e) => handleSmoothScroll(e, 'why-us')}
                  className="hover:text-brand-primary transition-colors block py-0.5 text-stone-300"
                  id="foot-why-us-link"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  onClick={(e) => handleSmoothScroll(e, 'process')}
                  className="hover:text-brand-primary transition-colors block py-0.5 text-stone-300"
                  id="foot-process-link"
                >
                  Onboarding Steps
                </a>
              </li>

            </ul>
          </div>

          {/* Column 3: Premium Services */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest">
              POPULAR SERVICES
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400 font-sans font-medium">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, 'services')}
                  className="hover:text-brand-primary transition-colors block py-0.5"
                  id="foot-gst-link"
                >
                  GST Return Filing Panel
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, 'services')}
                  className="hover:text-brand-primary transition-colors block py-0.5"
                  id="foot-itr-link"
                >
                  Income Tax Return Assistance
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, 'services')}
                  className="hover:text-brand-primary transition-colors block py-0.5"
                  id="foot-trademark-link"
                >
                  Logo & Brand Trademark TM
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, 'services')}
                  className="hover:text-brand-primary transition-colors block py-0.5"
                  id="foot-comp-link"
                >
                  Pvt Ltd Company Incorporation
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, 'services')}
                  className="hover:text-brand-primary transition-colors block py-0.5"
                  id="foot-startup-link"
                >
                  Startup India DPIIT Registration
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Compliance disclaimer */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest">
              CERTIFIED SLA DESK
            </h4>
            <div className="bg-white/5 border border-brand-primary/20 p-4 rounded-xl space-y-2 text-xs">
              <span className="text-brand-primary font-bold flex items-center gap-1.5 uppercase font-mono tracking-wider">
                <LucideIcon name="ShieldCheck" className="text-brand-primary" size={14} />
                Govt Portal Sync
              </span>
              <p className="text-stone-400 leading-normal font-sans">
                Our filing integrations connect directly with the GST Portal, Income Tax e-Filing, MCA21, and IPIndia digital gateways for error-free transactions.
              </p>
            </div>
          </div>

        </div>

        {/* Footer Base copyright info card */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-stone-550 gap-4">
          <div className="space-y-1 text-center md:text-left">
            <span>&copy; {currentYear} FILINGUNIVERSE. All rights reserved.</span>
            <p className="text-[10px] text-stone-500">
              Disclaimers: Chartered Accountants are certified by the ICAI. Legal actions are strictly governed under Indian Jurisdiction.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="hover:text-brand-primary cursor-pointer transition-colors">Privacy Protocol</span>
            <span>&bull;</span>
            <span className="hover:text-brand-primary cursor-pointer transition-colors">Terms & SLA Agreements</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
