import React from 'react';
import { images } from '../data/images';
import { gymData } from '../data/gymData';
import { Dumbbell, ShieldCheck, Flame, Cpu } from 'lucide-react';

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-brand-surface border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
            <span className="text-xs font-bold tracking-widest text-brand-red uppercase">
              THE GYM EXPERIENCE
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-tight mb-4">
            FAVORABLE <span className="text-gradient-red">EQUIPMENT & FLOOR</span>
          </h2>
          <p className="text-gray-400 text-base">
            Equipped with durable weight stacks, heavy plates, dumbbells, and wide workout space for optimal physical movement.
          </p>
        </div>

        {/* Editorial Facility Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Main Showcase Image */}
          <div className="lg:col-span-7 relative group rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src={images.gymInterior}
              alt="Grower Fitness Heavy Weight Training Floor"
              className="w-full h-[420px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl glass-panel border border-white/15">
              <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block mb-1">
                HEAVY TRAINING ZONE
              </span>
              <h3 className="font-heading font-bold text-2xl text-white">
                Commercial Grade Power Racks & Dumbbells
              </h3>
              <p className="text-xs text-gray-300 mt-2">
                Designed to support heavy lifting, progressive resistance, and bodybuilding splits safely.
              </p>
            </div>
          </div>

          {/* Secondary Editorial Stack */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {gymData.facilities.map((fac, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-brand-dark border border-white/10 hover:border-brand-red/40 transition-all duration-300 hover:translate-x-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red font-bold shrink-0">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-white mb-1">
                      {fac.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {fac.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
