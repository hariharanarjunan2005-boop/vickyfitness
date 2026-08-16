import React from 'react';
import { Dumbbell, ArrowDownRight, MapPin, Award, ChevronDown } from 'lucide-react';
import { images } from '../data/images';
import { gymData } from '../data/gymData';

export default function Hero({ onOpenJoinModal }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-brand-dark">
      {/* Background Image Container with Cinematic Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={images.hero}
          alt="Grower Fitness Gym Interior"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-glow"
        />
        {/* Dark Vignette and Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-transparent to-brand-dark/70" />
        {/* Subtle grid accent overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-start justify-center min-h-[calc(100vh-6rem)]">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">
            {gymData.brand.name}
          </span>
          <span className="text-gray-400 text-xs">|</span>
          <span className="text-xs font-medium text-gray-300 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-brand-red" /> {gymData.brand.location}
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="font-heading font-black text-3.5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[0.95] max-w-5xl mb-6">
          BUILD YOUR <br />
          <span className="text-gradient-red drop-shadow-2xl">STRONGEST </span>
          <br className="hidden sm:inline" />
          <span className="text-gradient-gold">SELF.</span>
        </h1>

        {/* Subtitle & Description */}
        <div className="max-w-2xl mb-8 space-y-2">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-200 tracking-wide">
            Train harder. Move better. Become stronger.
          </p>
          <p className="text-sm sm:text-base text-gray-400 font-normal">
            Trichy's premier gym for dedicated strength, physique transformation, and progressive athletic conditioning.
          </p>
        </div>

        {/* Hero CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12">
          <button
            onClick={onOpenJoinModal}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-brand-red/30 hover:shadow-brand-red/50 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Dumbbell className="w-5 h-5 text-white transition-transform group-hover:rotate-45" />
            <span>JOIN NOW</span>
          </button>

          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white font-semibold text-sm tracking-wider uppercase border border-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            <span>EXPLORE GYM</span>
            <ArrowDownRight className="w-4 h-4 text-brand-gold" />
          </a>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-white/10 max-w-3xl w-full">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-brand-red/20 border border-brand-red/30 flex items-center justify-center text-brand-red font-bold text-sm">
              4.8★
            </div>
            <div>
              <div className="text-xs text-gray-400 uppercase font-medium">Google Score</div>
              <div className="text-sm font-bold text-white">Top Rated Trichy</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center text-brand-gold">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-gray-400 uppercase font-medium">Champion Founder</div>
              <div className="text-sm font-bold text-white">Vickey Grower</div>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white">
              <MapPin className="w-5 h-5 text-brand-red" />
            </div>
            <div>
              <div className="text-xs text-gray-400 uppercase font-medium">Prime Location</div>
              <div className="text-sm font-bold text-white">Madurai Road</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#stats"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors group"
      >
        <span className="text-[10px] tracking-widest uppercase font-medium group-hover:text-brand-gold">
          SCROLL DOWN
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-brand-red" />
      </a>
    </section>
  );
}
