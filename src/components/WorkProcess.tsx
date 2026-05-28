import { useState } from 'react';
import { motion } from 'motion/react';
import { PROCESS_DATA } from '../data/services';
import LucideIcon from './LucideIcon';

export default function WorkProcess() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section
      id="process"
      className="py-24 bg-transparent relative border-t border-stone-200/60"
    >
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-brand-primary uppercase"
          >
            THE FLUID PROTOCOL
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-bold text-stone-900 tracking-tight"
          >
            Supercharged Onboarding in{' '}
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              4 Simple Steps
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-600 text-base sm:text-lg"
          >
            No complex government portals or legal labyrinths. We streamlined the tax filings and registry pipeline into a convenient paperless digital workspace.
          </motion.p>
        </div>

        {/* Timed Horizontal Connector / Stepper Container */}
        <div className="hidden lg:relative lg:flex justify-between items-center max-w-5xl mx-auto mb-16 px-6">
          {/* Background Connecting bar */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-stone-200/80 -translate-y-1/2 z-0" />
          {/* Active progress bar */}
          <motion.div
            className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-brand-secondary to-brand-primary -translate-y-1/2 z-0"
            animate={{ width: `${((activeStep - 1) / 3) * 100}%` }}
            transition={{ duration: 0.4 }}
          />

          {PROCESS_DATA.map((step) => {
            const isActive = step.step <= activeStep;
            const isCurrent = step.step === activeStep;

            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                id={`process-step-btn-${step.step}`}
                className="relative z-10 flex flex-col items-center group focus:outline-none cursor-pointer"
              >
                {/* Badge Circle */}
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center font-display font-bold text-lg border-2 transition-all duration-300 ${
                    isCurrent
                      ? 'bg-white border-brand-primary text-brand-primary shadow-[0_0_15px_rgba(156,122,60,0.3)] scale-110'
                      : isActive
                      ? 'bg-brand-primary border-brand-primary text-white font-bold'
                      : 'bg-white text-stone-500 border-stone-200/80 shadow-sm group-hover:border-brand-primary/60'
                  }`}
                >
                  {isActive && step.step < activeStep ? (
                    <LucideIcon name="Check" size={20} />
                  ) : (
                    <span>{step.step}</span>
                  )}
                </div>

                {/* Micro step labels */}
                <span
                  className={`text-xs font-bold uppercase tracking-wider mt-3 font-mono transition-colors ${
                    isCurrent ? 'text-brand-primary font-black' : 'text-stone-500 group-hover:text-stone-800'
                  }`}
                >
                  Step {step.step}
                </span>
                <span
                  className={`text-[13px] font-bold mt-1 transition-colors ${
                    isCurrent ? 'text-stone-900 font-extrabold' : 'text-stone-550'
                  }`}
                >
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Terminal for Active Step (Horizontal Mode) */}
        <div className="hidden lg:block max-w-4xl mx-auto glass rounded-2xl p-8 shadow-[0_15px_45px_rgba(156,122,60,0.06)] border border-stone-200/80 relative overflow-hidden">
          {/* Subtle decoration light dots */}
          <div className="absolute top-4 left-4 flex gap-1.5 opacity-60">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-brand-primary/60" />
          </div>

          <div className="grid grid-cols-12 gap-8 items-center mt-3">
            <div className="col-span-8 space-y-4">
              <span className="text-xs font-bold tracking-widest font-mono text-brand-primary block uppercase">
                ACTIVE PIPELINE METRIC: STEP 0{PROCESS_DATA[activeStep - 1].step}
              </span>
              <h3 className="text-2xl font-display font-bold text-stone-900 leading-tight">
                {PROCESS_DATA[activeStep - 1].title}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {PROCESS_DATA[activeStep - 1].description}
              </p>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 text-stone-600 text-xs leading-relaxed font-sans mt-3">
                <span className="text-stone-900 font-extrabold block mb-1">Operational Protocol:</span>
                {PROCESS_DATA[activeStep - 1].detailedInfo}
              </div>
            </div>

            {/* Right Graphics inside Terminal */}
            <div className="col-span-4 flex justify-center">
              <div className="w-36 h-36 rounded-full bg-brand-primary/5 border border-brand-primary/20 flex items-center justify-center text-brand-primary relative shadow-[0_0_40px_rgba(156,122,60,0.08)]">
                {/* Circular spin border */}
                <div className="absolute inset-0 rounded-full border border-dashed border-brand-primary/30 animate-[spin_40s_linear_infinite]" />
                <div className="absolute inset-2 rounded-full border border-dotted border-brand-secondary/40 animate-[spin_20s_linear_infinite_reverse]" />
                
                <LucideIcon name={PROCESS_DATA[activeStep - 1].iconName} size={48} className="text-brand-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-Friendly Vertical Stepper */}
        <div className="lg:hidden space-y-8 select-none" id="mobile-vertical-stepper">
          {PROCESS_DATA.map((step) => {
            const isSelected = activeStep === step.step;

            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                id={`mobile-process-${step.step}`}
                className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'glass border-brand-primary shadow-[0_10px_30px_rgba(156,122,60,0.1)]'
                    : 'glass border-stone-200 hover:border-brand-primary/60'
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Step Ring */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                      isSelected
                        ? 'bg-brand-primary text-white font-bold'
                        : 'bg-white border border-stone-200 text-stone-600 shadow-sm'
                    }`}
                  >
                    <span>{step.step}</span>
                  </div>

                  <div className="flex-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-brand-primary block font-bold">
                      ONBOARD PHASE
                    </span>
                    <h3 className="font-display font-extrabold text-base text-stone-900">
                      {step.title}
                    </h3>
                  </div>

                  <LucideIcon
                    name={step.iconName}
                    size={20}
                    className={isSelected ? 'text-brand-primary' : 'text-stone-500'}
                  />
                </div>

                {/* Mobile Expandable description Panel */}
                <motion.div
                  initial={false}
                  animate={{ height: isSelected ? 'auto' : 0, opacity: isSelected ? 1 : 0 }}
                  className="overflow-hidden mt-3"
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-stone-600 text-xs leading-relaxed pt-3 border-t border-stone-200/50">
                    {step.description}
                  </p>
                  <div className="bg-stone-50 p-3 rounded-lg text-stone-600 text-[11px] mt-2.5 font-sans leading-relaxed border border-stone-200/60">
                    {step.detailedInfo}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
