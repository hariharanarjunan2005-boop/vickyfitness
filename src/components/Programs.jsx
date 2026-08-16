import React from 'react';
import { gymData } from '../data/gymData';
import { Dumbbell, ArrowRight, Zap } from 'lucide-react';

export default function Programs({ onOpenJoinModal }) {
  return (
    <section id="programs" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/30 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
              <span className="text-xs font-bold tracking-widest text-brand-red uppercase">
                TRAINING PROGRAMS
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-tight">
              ENGINEERED FOR <span className="text-gradient-gold">RESULTS</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm sm:text-base max-w-md">
            Whether your focus is heavy compound strength or body composition, our structured regimes support continuous athletic growth.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gymData.programs.map((program, idx) => (
            <div
              key={program.id}
              className="group relative p-8 rounded-2xl bg-brand-surface border border-white/10 hover:border-brand-gold/50 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-brand-gold">
                    {program.tag}
                  </span>
                  <span className="text-xs font-mono font-bold text-gray-500">
                    0{idx + 1}
                  </span>
                </div>

                <div className="text-xs font-semibold text-brand-red uppercase tracking-wider mb-1">
                  {program.subtitle}
                </div>

                <h3 className="font-heading font-extrabold text-xl text-white mb-4 group-hover:text-brand-gold transition-colors">
                  {program.title}
                </h3>

                <p className="text-xs text-gray-400 leading-relaxed mb-6">
                  {program.description}
                </p>
              </div>

              {/* Card Action */}
              <button
                onClick={onOpenJoinModal}
                className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-brand-red text-white text-xs font-bold uppercase tracking-wider border border-white/10 hover:border-brand-red transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-brand-red/20"
              >
                <span>INQUIRE PROGRAM</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
