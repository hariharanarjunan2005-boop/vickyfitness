import React, { useState, useEffect } from 'react';
import { images } from '../data/images';
import { gymData } from '../data/gymData';

export default function IntroScreen({ onComplete }) {
  const [stage, setStage] = useState('initial'); // 'initial' | 'animate' | 'exit' | 'done'
  const [shouldSkip, setShouldSkip] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasSeenIntro = sessionStorage.getItem('grower_intro_seen');

    if (prefersReducedMotion || hasSeenIntro) {
      setShouldSkip(true);
      onComplete?.();
      return;
    }

    // Sequence timing:
    // 0ms: Start logo fade-in & scale
    // 400ms: Reveal text & accent line glow
    // 1800ms: Start fade/scale transition out
    // 2500ms: Fully complete and unmount

    const t1 = setTimeout(() => setStage('animate'), 50);
    const t2 = setTimeout(() => setStage('exit'), 1800);
    const t3 = setTimeout(() => {
      setStage('done');
      sessionStorage.setItem('grower_intro_seen', 'true');
      onComplete?.();
    }, 2500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  if (shouldSkip || stage === 'done') {
    return null;
  }

  const isExiting = stage === 'exit';

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-all duration-700 ease-out select-none ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Subtle Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.12)_0%,transparent_65%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        
        {/* Animated Logo Container */}
        <div
          className={`relative w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-brand-red via-brand-gold to-brand-red shadow-2xl shadow-brand-red/30 transition-all duration-1000 ease-out ${
            stage === 'animate' || isExiting
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-90 translate-y-4'
          }`}
        >
          <div className="w-full h-full rounded-full bg-black overflow-hidden p-0.5 border border-white/20">
            <img
              src={images.logo}
              alt="Grower Fitness Intro Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Pulse Glow Ring */}
          <div className="absolute -inset-2 rounded-full border border-brand-red/30 animate-ping opacity-40 pointer-events-none" />
        </div>

        {/* Brand Text Header */}
        <div
          className={`mt-6 transition-all duration-800 delay-300 ease-out ${
            stage === 'animate' || isExiting
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-3'
          }`}
        >
          <h1 className="font-heading font-black text-3xl sm:text-4xl tracking-widest text-white uppercase flex items-center justify-center gap-2">
            GROWER <span className="text-brand-red">FITNESS</span>
          </h1>

          {/* Animated Gold Accent Line */}
          <div className="relative w-48 sm:w-64 h-0.5 mx-auto my-3 overflow-hidden bg-white/10 rounded-full">
            <div
              className={`absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold to-transparent transition-transform duration-1000 ease-in-out ${
                stage === 'animate' || isExiting ? 'translate-x-0' : '-translate-x-full'
              }`}
            />
          </div>

          {/* Location Subtitle */}
          <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-gray-400 uppercase">
            TRICHY, TAMIL NADU
          </p>
        </div>

      </div>

      {/* Subtle Skip Option for User Control */}
      <button
        onClick={() => {
          setStage('done');
          sessionStorage.setItem('grower_intro_seen', 'true');
          onComplete?.();
        }}
        className="absolute bottom-8 text-[10px] uppercase tracking-widest text-gray-600 hover:text-gray-300 transition-colors py-1 px-3 rounded-full bg-white/5 border border-white/5"
      >
        SKIP INTRO
      </button>
    </div>
  );
}
