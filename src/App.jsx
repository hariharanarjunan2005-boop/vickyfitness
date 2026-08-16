import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Features from './components/Features';
import Programs from './components/Programs';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Instagram from './components/Instagram';
import CTA from './components/CTA';
import Footer from './components/Footer';
import JoinModal from './components/JoinModal';
import IntroScreen from './components/IntroScreen';

export default function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [introFinished, setIntroFinished] = useState(false);

  const openJoinModal = () => setIsJoinModalOpen(true);
  const closeJoinModal = () => setIsJoinModalOpen(false);

  return (
    <div className="min-h-screen bg-brand-dark text-gray-100 font-sans selection:bg-brand-red selection:text-white">
      {/* Premium Cinematic Intro Screen Overlay */}
      <IntroScreen onComplete={() => setIntroFinished(true)} />

      {/* Main Website Structure */}
      <div
        className={`transition-all duration-1000 ease-out ${
          introFinished ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-2'
        }`}
      >
        {/* Sticky Header Navigation */}
        <Navbar onOpenJoinModal={openJoinModal} />

        {/* Main Content Sections */}
        <main>
          <Hero onOpenJoinModal={openJoinModal} />
          <Stats />
          <About />
          <Features onOpenJoinModal={openJoinModal} />
          <Programs onOpenJoinModal={openJoinModal} />
          <Facilities />
          <Gallery />
          <Reviews />
          <Location />
          <Instagram />
          <CTA onOpenJoinModal={openJoinModal} />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Interactive Lead / Membership Inquiry Modal */}
      <JoinModal isOpen={isJoinModalOpen} onClose={closeJoinModal} />
    </div>
  );
}
