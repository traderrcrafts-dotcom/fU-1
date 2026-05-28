import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES_DATA } from '../data/services';
import LucideIcon from './LucideIcon';
import { LeadFormInput } from '../types';

export default function ContactSection() {
  const [formData, setFormData] = useState<LeadFormInput>({
    name: '',
    email: '',
    phone: '',
    service: 'GST Return Filing',
    message: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Compile dynamic, highly professional lead generated whatsapp message
    const rawMessage = `Hello FILINGUNIVERSE team,\n\nI want to submit an enquiry via your Web Portal with the following details:\n\n👤 *Full Name:* ${formData.name}\n📧 *Email:* ${formData.email}\n📱 *Phone:* ${formData.phone}\n💼 *Selected Service:* ${formData.service}\n💬 *Requirement Details:* ${formData.message || 'Need complete guide & quotes.'}`;
    
    const encodedMessage = encodeURIComponent(rawMessage);
    const whatsappUrl = `https://wa.me/919057774795?text=${encodedMessage}`;
    
    setIsSuccess(true);
    setTimeout(() => {
      // Open Whatsapp
      window.open(whatsappUrl, '_blank', 'noreferrer,noopener');
      setIsSuccess(false);
    }, 1500);
  };

  const handleDirectCall = () => {
    window.location.href = 'tel:+919057774795';
  };

  const handleEmailAction = () => {
    window.location.href = 'mailto:support@filinguniverse.com?subject=Business%20Compliance%20Enquiry';
  };

  return (
    <section
      id="contact"
      className="py-24 bg-transparent relative border-t border-stone-200/60"
    >
      {/* Background decoration blur glow */}
      <div className="absolute top-[30%] left-[5%] w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-brand-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-brand-primary uppercase"
          >
            PORTAL CONNECT
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-bold text-stone-900 tracking-tight"
          >
            Start Your Compliance{' '}
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Consultation
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-600 text-base sm:text-lg"
          >
            Get in touch immediately. Submit your core corporate requirements to open a priority chat directly with our designated Chartered Accountant.
          </motion.p>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display font-extrabold text-2xl text-stone-900 tracking-tight">
              Direct Channels
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Skip traditional ticket queues and long holds. Talk to active account managers who handle complex Indian corporate filings.
            </p>

            {/* Direct Cards Grid */}
            <div className="space-y-4">
              
              {/* WhatsApp card */}
              <div
                onClick={() => window.open('https://wa.me/919057774795', '_blank')}
                id="contact-channel-whatsapp"
                className="p-4 glass hover:border-[#25D366]/40 rounded-xl flex items-center gap-4 transition-all duration-300 cursor-pointer group bg-white/70"
              >
                <div className="w-11 h-11 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                  <LucideIcon name="MessageSquare" size={22} />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-[#25D366] uppercase block font-bold">Priority Chat</span>
                  <span className="text-stone-900 font-extrabold group-hover:text-emerald-600 transition-colors block text-base">+91 9057774795</span>
                  <span className="text-[11px] text-stone-500 block">Instant Response SLA (Average &lt;10 Min)</span>
                </div>
              </div>

              {/* Phone Card */}
              <div
                onClick={handleDirectCall}
                id="contact-channel-phone"
                className="p-4 glass hover:border-brand-primary/40 rounded-xl flex items-center gap-4 transition-all duration-300 cursor-pointer group bg-white/70"
              >
                <div className="w-11 h-11 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <LucideIcon name="Phone" size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-brand-primary uppercase block font-bold">Direct Call</span>
                  <span className="text-stone-900 font-extrabold group-hover:text-brand-primary transition-colors block text-base">+91 9057774795</span>
                  <span className="text-[11px] text-stone-500 block">Operational Timing: Mon-Sat (10AM - 7PM)</span>
                </div>
              </div>

              {/* Email Card */}
              <div
                onClick={handleEmailAction}
                id="contact-channel-email"
                className="p-4 glass hover:border-brand-secondary/40 rounded-xl flex items-center gap-4 transition-all duration-300 cursor-pointer group bg-white/70"
              >
                <div className="w-11 h-11 rounded-lg bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
                  <LucideIcon name="Mail" size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-brand-secondary uppercase block font-bold">Inquiries Desk</span>
                  <span className="text-stone-900 font-extrabold group-hover:text-brand-secondary transition-colors block text-base">support@filinguniverse.com</span>
                  <span className="text-[11px] text-stone-500 block">For formal corporate RFPs & proposals</span>
                </div>
              </div>



            </div>
          </div>

          {/* Right Column: High-Fi Lead Form */}
          <div className="lg:col-span-7 glass rounded-2xl p-6 sm:p-8 shadow-[0_20px_40px_rgba(156,122,60,0.06)] border border-stone-200/80 bg-white/95">
            <h3 className="font-display font-extrabold text-2xl text-stone-900 tracking-tight mb-2">
              Online Consultation Portal
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm mb-6">
              Fill correct contact credentials below. Submitting will immediately open WhatsApp to complete your filing.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4" id="consultation-enquiry-form">
              
              {/* Full Name */}
              <div className="space-y-1.5">
                <label htmlFor="form-name" className="text-xs font-mono text-stone-500 lowercase block font-bold">
                  &gt; your full name
                </label>
                <input
                  type="text"
                  name="name"
                  id="form-name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Aman Sharma"
                  className="w-full bg-stone-50 border border-stone-200 focus:border-brand-primary placeholder:text-stone-400 rounded-xl px-4 py-3 text-stone-900 text-sm focus:outline-none focus:bg-white transition-all shadow-sm"
                />
              </div>

              {/* Grid Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="form-email" className="text-xs font-mono text-stone-500 lowercase block font-bold">
                    &gt; digital email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="form-email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. name@brand.in"
                    className="w-full bg-stone-50 border border-stone-200 focus:border-brand-primary placeholder:text-stone-400 rounded-xl px-4 py-3 text-stone-900 text-sm focus:outline-none focus:bg-white transition-all shadow-sm"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="form-phone" className="text-xs font-mono text-stone-500 lowercase block font-bold">
                    &gt; whatsapp contact
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="form-phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +91 9876543210"
                    className="w-full bg-stone-50 border border-stone-200 focus:border-brand-primary placeholder:text-stone-400 rounded-xl px-4 py-3 text-stone-900 text-sm focus:outline-none focus:bg-white transition-all shadow-sm"
                  />
                </div>

              </div>

              {/* Service Select Option Option */}
              <div className="space-y-1.5">
                <label htmlFor="form-service" className="text-xs font-mono text-stone-500 lowercase block font-bold">
                  &gt; select required operation
                </label>
                <select
                  name="service"
                  id="form-service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full bg-stone-50 border border-stone-200 focus:border-brand-primary rounded-xl px-4 py-3 text-stone-900 text-sm focus:outline-none focus:bg-white transition-all shadow-sm cursor-pointer"
                >
                  {SERVICES_DATA.map((service) => (
                    <option key={service.id} value={service.title} className="bg-white text-stone-900">
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="form-message" className="text-xs font-mono text-stone-500 lowercase block font-bold">
                  &gt; key requirements (optional)
                </label>
                <textarea
                  name="message"
                  id="form-message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="e.g. We are registering a technology brand and require dual class trademark registrations."
                  className="w-full bg-stone-50 border border-stone-200 focus:border-brand-primary placeholder:text-stone-400 rounded-xl px-4 py-3 text-stone-900 text-sm focus:outline-none focus:bg-white transition-all shadow-sm resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                id="form-submit-btn"
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-xl bg-brand-primary hover:opacity-90 text-white font-extrabold text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(156,122,60,0.3)] cursor-pointer"
              >
                {isSuccess ? (
                  <span className="flex items-center gap-2">
                    <LucideIcon name="Check" size={16} className="animate-ping" />
                    Connecting WhatsApp...
                  </span>
                ) : (
                  <>
                    <span>Submit & Talk on WhatsApp</span>
                    <LucideIcon name="MessageSquare" size={16} />
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
