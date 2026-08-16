import React, { useState, useEffect } from 'react';
import { images } from '../data/images';
import { gymData } from '../data/gymData';

export default function IntroScreen({ onComplete }) {
  const [stage, setStage] = useState('initial'); // 'initial' | 'fade-in' | 'pulse' | 'reveal' | 'exit' | 'done'
  const [shouldSkip, setShouldSkip] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion & session state
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasSeenIntro = sessionStorage.getItem('grower_intro_seen');

    if (prefersReducedMotion || hasSeenIntro) {
      setShouldSkip(true);
      onComplete?.();
      return;
    }

    // Sequence timing strictly tuned for smooth 3.0s total intro:
    // 0–0.5s: Logo fades in
    // 0.5–1.5s: Subtle logo scale & glow animation
    // 1.5–2.5s: Hero background begins revealing
    // 2.5–3.0s: Intro smoothly disappears completely

    const t1 = setTimeout(() => setStage('fade-in'), 20);
    const t2 = setTimeout(() => setStage('pulse'), 500);
    const t3 = setTimeout(() => setStage('reveal'), 1500);
    const t4 = setTimeout(() => setStage('exit'), 2500);
    const t5 = setTimeout(() => {
      setStage('done');
      sessionStorage.setItem('grower_intro_seen', 'true');
      onComplete?.();
    }, 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  if (shouldSkip || stage === 'done') {
    return null;
  }

  const isExiting = stage === 'exit';
  const isRevealing = stage === 'reveal' || isExiting;
  const isPulsing = stage === 'pulse' || isRevealing;
  const isFadedIn = stage !== 'initial';

  return (
    <div
      className={`fixed inset-0 z-[100] w-full min-h-[100dvh] h-[100dvh] bg-black flex flex-col items-center justify-center overflow-hidden transition-all duration-700 ease-out select-none ${
        isRevealing ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Radial Glow */}
      <div
        className={`absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.18)_0%,transparent_70%)] pointer-events-none transition-opacity duration-1000 ${
          isPulsing ? 'opacity-100' : 'opacity-40'
        }`}
      />

      {/* Centered Main Brand Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-xs sm:max-w-md">
        
        {/* Responsive Logo Container */}
        <div
          className={`relative w-24 h-24 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-brand-red via-brand-gold to-brand-red shadow-2xl shadow-brand-red/40 transition-all duration-700 ease-out ${
            isFadedIn ? 'opacity-100 scale-100' : 'opacity-0 scale-90 translate-y-3'
          } ${isPulsing ? 'scale-105 shadow-brand-red/60' : ''}`}
        >
          <div className="w-full h-full rounded-full bg-black overflow-hidden p-0.5 border border-white/20">
            <img
              src={images.logo}
              alt="Grower Fitness Logo"
              className="w-full h-full object-cover rounded-full"
              loading="eager"
            />
          </div>

          {/* Glow Ring Pulse */}
          <div
            className={`absolute -inset-2 rounded-full border border-brand-red/40 transition-opacity duration-500 pointer-events-none ${
              isPulsing ? 'animate-ping opacity-60' : 'opacity-0'
            }`}
          />
        </div>

        {/* Brand Text Header */}
        <div
          className={`mt-5 transition-all duration-700 delay-150 ease-out ${
            isFadedIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h1 className="font-heading font-black text-2xl sm:text-4xl tracking-widest text-white uppercase flex items-center justify-center gap-2">
            GROWER <span className="text-brand-red">FITNESS</span>
          </h1>

          {/* Gold Accent Line */}
          <div className="relative w-40 sm:w-64 h-0.5 mx-auto my-3 overflow-hidden bg-white/10 rounded-full">
            <div
              className={`absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold to-transparent transition-transform duration-1000 ease-in-out ${
                isFadedIn ? 'translate-x-0' : '-translate-x-full'
              }`}
            />
          </div>

          {/* Location Subtitle */}
          <p className="text-[11px] sm:text-sm font-semibold tracking-[0.25em] text-gray-400 uppercase">
            {gymData.brand.location}
          </p>
        </div>

      </div>

      {/* Skip Button */}
      <button
        onClick={() => {
          setStage('done');
          sessionStorage.setItem('grower_intro_seen', 'true');
          onComplete?.();
        }}
        className="absolute bottom-6 sm:bottom-8 text-[10px] uppercase tracking-widest text-gray-500 hover:text-gray-200 transition-colors py-1.5 px-4 rounded-full bg-white/5 border border-white/10 active:scale-95"
      >
        SKIP INTRO
      </button>
    </div>
  );
}
