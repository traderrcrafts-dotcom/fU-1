import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA } from '../data/services';
import LucideIcon from './LucideIcon';
import { Service } from '../types';

export default function ServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'tax' | 'registration' | 'compliance' | 'startup'>('all');
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const categories = [
    { value: 'all', label: 'All Operations' },
    { value: 'tax', label: 'Taxes & Filings' },
    { value: 'registration', label: 'Incorporate & Registry' },
    { value: 'compliance', label: 'Licenses & Compliance' },
    { value: 'startup', label: 'Startup Programs' }
  ];

  const filteredServices = SERVICES_DATA.filter(service => {
    if (selectedCategory === 'all') return true;
    return service.category === selectedCategory;
  });

  const handleEnquire = (service: Service) => {
    const text = encodeURIComponent(service.whatsappMessage);
    const url = `https://wa.me/919057774795?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="services"
      className="py-24 bg-transparent relative border-t border-white/5"
    >
      {/* Blurred background element */}
      <div className="absolute top-[40%] right-[5%] w-[450px] h-[450px] rounded-full bg-brand-secondary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-brand-primary uppercase"
          >
            SOLUTIONS CATALOGUE
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-bold text-stone-900 tracking-tight"
          >
            Comprehensive Compliance Under{' '}
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              One Single Sky
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-600 text-base sm:text-lg"
          >
            Select from our carefully structure legal-tech and chartered accounting capabilities. Realize quick turnovers, flat-rate pricing, and robust digital support for your business assets.
          </motion.p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value as any)}
              id={`tab-${cat.value}`}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 relative cursor-pointer ${
                selectedCategory === cat.value
                  ? 'text-white font-bold z-10'
                  : 'text-stone-600 hover:text-stone-900 bg-white hover:bg-stone-50 border border-stone-200/80 shadow-sm'
              }`}
            >
              <span className="relative z-10">{cat.label}</span>
              {selectedCategory === cat.value && (
                <motion.span
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-brand-primary rounded-full"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Services Bento Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          id="services-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={service.id}
                onMouseEnter={() => setHoveredCardId(service.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                id={`service-card-${service.id}`}
                className="group relative glass service-card rounded-2xl p-6 shadow-[0_15px_30px_rgba(156,122,60,0.04)] hover:shadow-[0_20px_40px_rgba(156,122,60,0.12)] flex flex-col justify-between overflow-hidden"
              >
                {/* Background glow effect on Hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-300 pointer-events-none" />

                {/* Top Inner Grid */}
                <div className="space-y-5">
                  <div className="flex items-start justify-between">
                    {/* Brand Styled Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-secondary/30 to-brand-primary/20 border border-brand-primary/30 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                      <LucideIcon name={service.iconName} size={22} className="text-brand-primary" />
                    </div>
                    {/* Tiny delivery tag */}
                    <span className="text-[10px] font-mono tracking-wider text-brand-primary/95 font-bold uppercase px-2 py-0.5 rounded-md bg-brand-primary/10 border border-brand-primary/20">
                      {service.deliveryTime}
                    </span>
                  </div>

                  {/* Title & info */}
                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-xl text-stone-900 tracking-tight group-hover:text-brand-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Info Expansion on Hover or interactive */}
                <div className="mt-5 space-y-4 pt-4 border-t border-stone-200/60">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-stone-500">Service Estimate</span>
                    <span className="text-sm font-bold text-brand-primary font-mono">{service.price}</span>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => handleEnquire(service)}
                    id={`btn-enquire-${service.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white group-hover:bg-brand-primary text-stone-700 group-hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 border border-stone-200 group-hover:border-brand-primary cursor-pointer active:scale-95 shadow-sm"
                  >
                    <span>Enquire on WhatsApp</span>
                    <LucideIcon name="MessageSquare" size={14} className="text-emerald-600 group-hover:text-white transition-colors" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
