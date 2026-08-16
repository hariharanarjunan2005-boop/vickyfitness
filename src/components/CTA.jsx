import React from 'react';
import { images } from '../data/images';
import { gymData } from '../data/gymData';
import { Dumbbell, Phone } from 'lucide-react';

export default function CTA({ onOpenJoinModal }) {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-brand-dark">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={images.team}
          alt="Team Grower Fitness Athletes"
          className="w-full h-full object-cover object-center scale-105"
          loading="lazy"
        />
        {/* Strong Dark Vignette & Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/85 to-brand-dark/90" />
        <div className="absolute inset-0 bg-brand-red/10 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/20 border border-brand-red/40 backdrop-blur-md mb-4 sm:mb-6">
          <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
          <span className="text-[10px] sm:text-xs font-bold tracking-widest text-white uppercase">
            TAKE THE FIRST STEP TODAY
          </span>
        </div>

        <h2 className="font-heading font-black text-[clamp(2.2rem,8.5vw,4.5rem)] text-white tracking-tight uppercase leading-[0.95] mb-4 sm:mb-6">
          READY TO <br />
          <span className="text-gradient-red">GROW STRONGER?</span>
        </h2>

        <p className="text-gray-300 text-base sm:text-2xl font-medium max-w-2xl mb-8 sm:mb-10">
          Start your fitness journey with Grower Fitness.
        </p>

        {/* Buttons (Stacked on Mobile with 48px touch target) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <button
            onClick={onOpenJoinModal}
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-3 px-9 py-4 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-2xl shadow-brand-red/40 active:scale-98"
          >
            <Dumbbell className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>JOIN NOW</span>
          </button>

          <a
            href={`tel:${gymData.brand.phoneClean}`}
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-3 px-9 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase border border-white/20 transition-all duration-300 backdrop-blur-md active:scale-98"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-brand-gold" />
            <span>CALL US: {gymData.brand.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
