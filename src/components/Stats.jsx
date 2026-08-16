import React from 'react';
import { gymData } from '../data/gymData';
import { Star, MapPin, Dumbbell, Calendar } from 'lucide-react';

export default function Stats() {
  const getIcon = (index) => {
    switch (index) {
      case 0:
        return <Star className="w-5 h-5 text-amber-400 fill-amber-400" />;
      case 1:
        return <MapPin className="w-5 h-5 text-brand-red" />;
      case 2:
        return <Dumbbell className="w-5 h-5 text-brand-gold" />;
      default:
        return <Calendar className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="stats" className="relative z-20 py-10 bg-brand-surface border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {gymData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="mb-2 p-2.5 rounded-full bg-black/40 group-hover:scale-110 transition-transform">
                {getIcon(idx)}
              </div>
              <div className="font-heading font-black text-2xl sm:text-3xl text-white tracking-wider">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-gray-300 uppercase tracking-widest mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-gray-500 mt-0.5">
                {stat.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
