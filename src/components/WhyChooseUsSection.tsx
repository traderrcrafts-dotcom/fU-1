import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { FEATURES_DATA } from '../data/services';
import LucideIcon from './LucideIcon';

export default function WhyChooseUsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  // Custom Counters state
  const [clients, setClients] = useState(0);
  const [taxesSaved, setTaxesSaved] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [sla, setSla] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Clients counter (Target: 10500+)
      let clientStart = 0;
      const clientEnd = 10500;
      const clientDuration = 2000;
      const clientStepTime = Math.max(Math.floor(clientDuration / (clientEnd / 200)), 15);
      const clientTimer = setInterval(() => {
        clientStart += 210;
        if (clientStart >= clientEnd) {
          setClients(clientEnd);
          clearInterval(clientTimer);
        } else {
          setClients(clientStart);
        }
      }, clientStepTime);

      // Taxes Optimized counter (Target: 45)
      let taxStart = 0;
      const taxEnd = 45;
      const taxTimer = setInterval(() => {
        taxStart += 1;
        if (taxStart >= taxEnd) {
          setTaxesSaved(taxEnd);
          clearInterval(taxTimer);
        } else {
          setTaxesSaved(taxStart);
        }
      }, 40);

      // Accuracy counter (Target: 99.8)
      let accStart = 0;
      const accEnd = 99.8;
      const accTimer = setInterval(() => {
        accStart += 2.5;
        if (accStart >= accEnd) {
          setAccuracy(accEnd);
          clearInterval(accTimer);
        } else {
          setAccuracy(parseFloat(accStart.toFixed(1)));
        }
      }, 35);

      // Support speed timer (Target: 14)
      let slaStart = 0;
      const slaEnd = 12;
      const slaTimer = setInterval(() => {
        slaStart += 1;
        if (slaStart >= slaEnd) {
          setSla(slaEnd);
          clearInterval(slaTimer);
        } else {
          setSla(slaStart);
        }
      }, 100);

      return () => {
        clearInterval(clientTimer);
        clearInterval(taxTimer);
        clearInterval(accTimer);
        clearInterval(slaTimer);
      };
    }
  }, [isInView]);

  return (
    <section
      id="why-us"
      className="py-24 bg-transparent relative border-t border-white/5"
      ref={containerRef}
    >
      {/* Background decoration elements */}
      <div className="absolute top-[30%] left-[2%] w-[400px] h-[400px] rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[2%] w-[350px] h-[350px] rounded-full bg-brand-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-brand-primary uppercase"
          >
            THE TRUST SHIELD
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-bold text-stone-900 tracking-tight"
          >
            Engineered For{' '}
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Speed, Safety & Scale
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-600 text-base sm:text-lg"
          >
            We merge standard expert Chartered Accounting services with modern legal-tech integrations so startups can concentrate completely on product, marketing, and core operations.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES_DATA.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              id={`feature-card-${feature.id}`}
              className="glass service-card rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Corner neon hover lines */}
              <span className="absolute top-0 left-0 w-2 h-0.5 bg-brand-primary group-hover:w-12 transition-all duration-300" />
              <span className="absolute top-0 left-0 w-0.5 h-2 bg-brand-primary group-hover:h-12 transition-all duration-300" />

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/5 border border-stone-200/50 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary/10 group-hover:border-brand-primary/30 transition-colors">
                  <LucideIcon name={feature.iconName === 'Users' ? 'Users' : feature.iconName === 'Zap' ? 'Zap' : feature.iconName === 'DollarSign' ? 'DollarSign' : feature.iconName === 'ShieldCheck' ? 'ShieldCheck' : feature.iconName === 'Sparkles' ? 'Sparkles' : 'MessageSquare'} size={24} />
                </div>
                <h3 className="font-display font-extrabold text-lg text-stone-900 group-hover:text-brand-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Counters Bar */}
        <div className="glass border border-brand-primary/15 rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-[0_15px_35px_-10px_rgba(156,122,60,0.08)] bg-white/45">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/5 rounded-full blur-3xl" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 text-center">
            
            {/* Counter 1 */}
            <div className="space-y-2">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-stone-900 font-mono flex items-center justify-center">
                {clients.toLocaleString()}
                <span className="text-brand-primary">+</span>
              </span>
              <span className="text-xs font-bold tracking-wider font-mono text-stone-500 uppercase block">Businesses Served</span>
            </div>

            {/* Counter 2 */}
            <div className="space-y-2">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-stone-900 font-mono flex items-center justify-center">
                ₹{taxesSaved}Cr
                <span className="text-brand-primary">+</span>
              </span>
              <span className="text-xs font-bold tracking-wider font-mono text-stone-500 uppercase block">Tax Optimized</span>
            </div>

            {/* Counter 3 */}
            <div className="space-y-2">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-stone-900 font-mono flex items-center justify-center">
                {accuracy}%
              </span>
              <span className="text-xs font-bold tracking-wider font-mono text-stone-500 uppercase block">Audit Accuracy SLA</span>
            </div>

            {/* Counter 4 */}
            <div className="space-y-2">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-stone-900 font-mono flex items-center justify-center">
                &lt;{sla}
                <span className="text-xs text-brand-primary font-extrabold ml-1 font-sans">Mins</span>
              </span>
              <span className="text-xs font-bold tracking-wider font-mono text-stone-500 uppercase block">Support SLA response</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
