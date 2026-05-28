import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Elegant incremental loading to 100%
    const duration = 1200; // 1.2 seconds loading
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      const current = Math.min(Math.floor((stepCount / steps) * 100), 100);
      setProgress(current);

      if (current === 100) {
        clearInterval(timer);
        setTimeout(() => {
          onComplete(); // callback once complete
        }, 300);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div id="full-preloader-canvas" className="fixed inset-0 z-[100] bg-[#FAF9F6] flex flex-col items-center justify-center select-none overflow-hidden">
      {/* Absolute blurry space dust */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-primary/10 blur-[100px]" />

      <div className="text-center space-y-8 relative z-10">
        
        {/* Glowing Halo Circular Element */}
        <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
          {/* External Spinning ring */}
          <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-brand-primary animate-spin" />
          <div className="absolute inset-2 rounded-full border-b-2 border-l-2 border-brand-secondary/40 animate-[spin_10s_linear_infinite_reverse]" />
          
          {/* Percentage Counter */}
          <span className="font-mono text-xl font-extrabold tracking-tight text-stone-900 select-none">
            {progress}%
          </span>
        </div>

        {/* Brand Label Typing */}
        <div className="space-y-2">
          <h2 className="font-display font-black text-2xl tracking-[0.3em] text-stone-900">
            FILING
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              UNIVERSE
            </span>
          </h2>
          <span className="text-[10px] font-mono tracking-widest text-[#9C7A3C] uppercase block font-bold">
            booting business compliance engine...
          </span>
        </div>

        {/* Flat styled loading bar */}
        <div className="w-48 h-[2px] bg-stone-200/80 rounded-full mx-auto overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-brand-secondary to-brand-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: 'easeInOut' }}
          />
        </div>

      </div>
    </div>
  );
}
