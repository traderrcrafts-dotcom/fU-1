/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import WorkProcess from './components/WorkProcess';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div id="filing-universe-root" className="min-h-screen gradient-bg text-[#2D271E]">
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div id="app-main-canvas" className="flex flex-col relative min-h-screen">
          {/* Header element */}
          <Navbar />

          {/* Main sections */}
          <main className="flex-grow z-10">
            <HeroSection />
            <ServicesSection />
            <WhyChooseUsSection />
            <WorkProcess />
            <ContactSection />
          </main>

          {/* Footer element */}
          <Footer />

          {/* Action and feedback helper overlays */}
          <FloatingWidgets />
        </div>
      )}
    </div>
  );
}

