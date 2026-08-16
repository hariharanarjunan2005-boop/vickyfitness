import React from 'react';
import { images } from '../data/images';
import { gymData } from '../data/gymData';
import { Trophy, CheckCircle2, ArrowRight, Shield } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-24 bg-brand-dark relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-brand-red/10 rounded-full filter blur-[100px] sm:blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Grower Fitness Photography Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src={images.founderTrophy}
                alt="Vickey Grower Championship Trophy"
                className="w-full h-[320px] xs:h-[380px] sm:h-[540px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3.5 sm:p-5 rounded-xl glass-panel border border-white/15">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-red/20 border border-brand-red/40 flex items-center justify-center text-brand-gold shrink-0">
                    <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-sm sm:text-base">Vickey Grower</h4>
                    <p className="text-[11px] sm:text-xs text-gray-300">Competitive Bodybuilder & Head Coach</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Floating Achievement Card (Desktop/Tablet) */}
            <div className="hidden sm:flex absolute -bottom-8 -right-6 glass-panel p-4 rounded-xl border border-white/15 max-w-xs shadow-2xl items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold text-sm shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Championship Pedigree</div>
                <div className="text-[11px] text-gray-400">Proven competitive excellence & authentic guidance.</div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Details */}
          <div className="lg:col-span-6 flex flex-col items-start mt-4 sm:mt-0">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/30 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-brand-red uppercase">
                ABOUT GROWER FITNESS
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-heading font-extrabold text-[clamp(1.8rem,7vw,3.25rem)] text-white tracking-tight uppercase leading-tight mb-4 sm:mb-6">
              MORE THAN A GYM. <br />
              <span className="text-gradient-red">A PLACE TO GROW.</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-lg leading-relaxed mb-6">
              {gymData.about.description}
            </p>

            {/* Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 sm:mb-8 w-full">
              {gymData.about.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-gold shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-gray-200">{item}</span>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <a
              href="#programs"
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-brand-red text-white font-bold text-xs uppercase tracking-widest border border-white/15 hover:border-brand-red transition-all duration-300 group active:scale-98"
            >
              <span>DISCOVER MORE</span>
              <ArrowRight className="w-4 h-4 text-brand-gold group-hover:text-white group-hover:translate-x-1 transition-all" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
