import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import LucideIcon from './LucideIcon';

export default function HeroSection() {
  const [typingText, setTypingText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const words = [
    'GST Filings',
    'Income Tax Return',
    'Trademark Safeguarding',
    'Company Registration',
    'Startup Seed Support',
    'LLP Incorporation'
  ];

  // Simulated metrics for the interactive dashboard
  const [revenue, setRevenue] = useState(142580);
  const [taxSaved, setTaxSaved] = useState(38420);
  const [complianceScore, setComplianceScore] = useState(94);

  // Active word rotation
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && typingText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typingText === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timer = setTimeout(() => {
        setTypingText(
          isDeleting
            ? currentWord.substring(0, typingText.length - 1)
            : currentWord.substring(0, typingText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [typingText, isDeleting, wordIndex]);

  // Small live numbers fluctuation to show premium active status
  useEffect(() => {
    const interval = setInterval(() => {
      setRevenue((prev) => prev + Math.floor(Math.random() * 20) - 8);
      setTaxSaved((prev) => prev + Math.floor(Math.random() * 10) - 4);
      setComplianceScore((prev) => {
        const diff = Math.floor(Math.random() * 3) - 1;
        const next = prev + diff;
        return next >= 95 ? 98 : next <= 90 ? 92 : next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleTalkWhatsapp = () => {
    const text = encodeURIComponent('Hello FILINGUNIVERSE, I am looking for professional business compliance and filing services. Please let me know how to start.');
    window.open(`https://wa.me/919057774795?text=${text}`, '_blank');
  };

  const handleScrollToConsultation = () => {
    const formElement = document.getElementById('contact');
    if (formElement) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = formElement.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-transparent"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-brand-primary/5 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-brand-secondary/8 blur-[150px]" />

        {/* Floating space dust elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-brand-primary opacity-20"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              top: Math.random() * 90 + 5 + '%',
              left: Math.random() * 90 + 5 + '%',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-2 lg:mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Info */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Tech tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-xs font-semibold tracking-wider text-brand-primary uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              INTELLIGENT BUSINESS COMPLIANCE SUITE
            </motion.div>

            {/* Display Title */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[54px] leading-[1.1] text-stone-900 tracking-tight">
              Smart Tax & Compliance Solutions <br />
              <span className="text-stone-650">For </span>
              <span className="bg-gradient-to-r from-brand-primary via-[#C8A96B] to-[#7C5F2C] bg-clip-text text-transparent">
                Modern Businesses
              </span>
            </h1>

            {/* Typing Compliance Sector */}
            <div className="h-8 flex items-center justify-center lg:justify-start gap-2.5 font-mono text-sm sm:text-base text-stone-600">
              <span className="text-brand-primary font-bold">&gt;_</span>
              <span>Deploying instant support for:</span>
              <span className="text-stone-800 font-bold underline decoration-brand-primary/50 underline-offset-4">
                {typingText}
                <span className="animate-pulse font-light text-brand-primary">|</span>
              </span>
            </div>

            {/* Explanatory Paragraph */}
            <p className="text-stone-700 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              FILINGUNIVERSE coordinates and accelerates corporate filings for fast-growing companies. Get expert CA assistance with 
              <span className="text-stone-900 font-bold"> GST Filing, Income Tax Returns, Trademark Safeguards, Import Export Code, </span> 
              Company Registration, MSME scaling, and end-to-end accounting.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={handleTalkWhatsapp}
                id="hero-cta-whatsapp"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-base shadow-[0_10px_25px_-5px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_30px_-5px_rgba(16,185,129,0.4)] transform hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <LucideIcon name="MessageSquare" className="animate-bounce" size={20} />
                <span>Talk on WhatsApp</span>
              </button>

              <button
                onClick={handleScrollToConsultation}
                id="hero-cta-consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-primary/10 hover:bg-brand-primary/20 text-brand-primary border border-brand-primary/40 hover:border-brand-primary/80 transition-all font-bold text-base cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Get Free Consultation</span>
                <LucideIcon name="ArrowRight" size={16} />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-stone-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-stone-550">
              <div className="flex items-center gap-1.5">
                <LucideIcon name="Check" className="text-brand-primary" size={14} />
                <span className="font-semibold text-stone-600">GSTIN & ITR Verified Solutions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <LucideIcon name="ShieldCheck" className="text-brand-primary" size={14} />
                <span className="font-semibold text-stone-600">100% Secure CA Backing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <LucideIcon name="Star" className="text-yellow-500 fill-yellow-500" size={14} />
                <span className="text-stone-700 font-bold">4.8/5 Rated on Google Business</span>
              </div>
            </div>
          </div>

          {/* Hero Right Dashboard (Futuristic UI/UX Illustration) */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
            
            {/* Ambient light ring around dashboard */}
            <div className="absolute inset-0 bg-brand-primary/10 rounded-3xl blur-3xl transform scale-90 -z-10" />

            {/* Interactive Dashboard Frame */}
            <motion.div
               initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              id="hero-dashboard-frame"
              className="w-full max-w-[430px] glass rounded-2xl p-5 shadow-[0_20px_40px_rgba(156,122,60,0.1)] relative overflow-hidden"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-stone-200/60 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5 grayscale">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono tracking-widest text-stone-500">UNIVERSE_CONSOLE_V2.0</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-brand-primary/10 text-brand-primary text-[10px] font-mono font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-ping" />
                  <span>LIVE CONNECTED</span>
                </div>
              </div>

              {/* Grid Content */}
              <div className="space-y-4">
                
                {/* Metric 1 - Saved Taxes */}
                <div className="bg-white/95 border border-stone-200/80 rounded-xl p-3.5 flex items-center justify-between shadow-sm">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block">Tax Saved (Annualized)</span>
                    <span className="text-xl font-display font-bold text-stone-900">₹{taxSaved.toLocaleString()}</span>
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 border border-emerald-500/20">
                    <LucideIcon name="Coins" size={18} />
                  </div>
                </div>

                {/* Simulated Chart Container */}
                <div className="bg-white/95 border border-stone-200/80 rounded-xl p-4 space-y-3 shadow-sm">
                  <div className="flex items-center justify-between text-xs text-stone-600">
                    <span className="font-mono">Filing Compliance Index</span>
                    <span className="text-brand-primary font-bold">{complianceScore}% Perfect</span>
                  </div>

                  {/* SVG Chart Line */}
                  <div className="h-28 w-full relative pt-2">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 45" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="gradient-chart" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#9C7A3C" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#9C7A3C" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      {/* Grid Horizontal Help Lines */}
                      <line x1="0" y1="15" x2="100" y2="15" stroke="rgba(156,122,60,0.08)" strokeDasharray="3,3" />
                      <line x1="0" y1="30" x2="100" y2="30" stroke="rgba(156,122,60,0.08)" strokeDasharray="3,3" />
                      
                      {/* Area Under Curve */}
                      <path
                        d="M 0 45 L 0 35 Q 20 15 40 28 T 80 5 T 100 12 L 100 45 Z"
                        fill="url(#gradient-chart)"
                      />
                      
                      {/* Line Curve */}
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: 'easeInOut' }}
                        d="M 0 35 Q 20 15 40 28 T 80 5 T 100 12"
                        fill="none"
                        stroke="#9C7A3C"
                        strokeWidth="2"
                      />

                      {/* Moving Dot */}
                      <motion.circle
                        cx="100"
                        cy="12"
                        r="3"
                        fill="#9C7A3C"
                        animate={{ r: [3, 5, 3] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </svg>
                  </div>
                  
                  {/* Ledger Footer */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-stone-500 pt-1 border-t border-stone-200/50">
                    <span>Q1 FILINGS</span>
                    <span>Q2 INTEGRATION</span>
                    <span>Q3 TAX AUDIT</span>
                  </div>
                </div>

                {/* Sub row - Two Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/95 border border-stone-200/80 rounded-xl p-3 text-center shadow-sm">
                    <span className="text-[10px] font-mono text-stone-400 block mb-1">COMPLETED TASKS</span>
                    <span className="text-sm font-bold text-brand-primary font-mono">100% Verified</span>
                  </div>
                  <div className="bg-white/95 border border-stone-200/80 rounded-xl p-3 text-center shadow-sm">
                    <span className="text-[10px] font-mono text-stone-400 block mb-1">GST VERBAL AUDIT</span>
                    <span className="text-sm font-bold text-emerald-600 font-mono">Active</span>
                  </div>
                </div>

                {/* Mini User Profile Card */}
                <div className="bg-white/70 border border-stone-200/80 rounded-xl p-2.5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                    <LucideIcon name="HeartHandshake" size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs text-stone-800 font-bold block truncate">Zetta Technologies Ltd.</span>
                    <span className="text-[10px] text-stone-500 block">DPIIT Startup Registered</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 font-semibold">
                    COMPLIANT
                  </span>
                </div>

              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
