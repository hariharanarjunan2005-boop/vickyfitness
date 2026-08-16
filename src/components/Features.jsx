import React from 'react';
import { gymData } from '../data/gymData';
import { Dumbbell, Activity, Flame, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Features() {
  const getFeatureIcon = (iconName) => {
    switch (iconName) {
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6 text-brand-red" />;
      case 'Activity':
        return <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />;
      case 'Flame':
        return <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />;
      default:
        return <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />;
    }
  };

  return (
    <section className="py-14 sm:py-24 bg-brand-surface border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-brand-gold uppercase">
              WHY GROWER FITNESS
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-[clamp(1.8rem,7vw,3.25rem)] text-white tracking-tight uppercase leading-tight mb-3 sm:mb-4">
            BUILT FOR REAL <span className="text-gradient-red">PROGRESS</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg leading-relaxed">
            We focus on proven training principles, quality equipment, and a serious workout culture designed to deliver tangible fitness results.
          </p>
        </div>

        {/* Feature Cards Grid (Single-column on mobile, cards fit viewport) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {gymData.features.map((feature) => (
            <div
              key={feature.id}
              className="group relative p-6 sm:p-8 rounded-2xl bg-brand-dark border border-white/10 hover:border-brand-red/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-red/10 flex flex-col justify-between"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-105 group-hover:bg-brand-red/10 group-hover:border-brand-red/30 transition-all duration-300">
                  {getFeatureIcon(feature.icon)}
                </div>

                <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-2 sm:mb-3 group-hover:text-brand-gold transition-colors">
                  {feature.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Link Indicator */}
              <div className="mt-6 sm:mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] sm:text-xs font-semibold text-gray-500 group-hover:text-brand-red transition-colors">
                <span>Core Pillar</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

              {/* Hover Glow Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-brand-red/30 pointer-events-none transition-colors duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
