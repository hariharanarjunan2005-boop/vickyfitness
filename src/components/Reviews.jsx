import React from 'react';
import { gymData } from '../data/gymData';
import { Star, ExternalLink, ShieldCheck, MapPin } from 'lucide-react';

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-brand-surface border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-brand-dark via-brand-surface to-brand-dark border border-white/10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Glow Accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-red/10 rounded-full filter blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Rating Big Number */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-7 h-7 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <div className="font-heading font-black text-6xl sm:text-7xl text-white tracking-tight">
                4.8 <span className="text-2xl sm:text-3xl text-gray-400 font-normal">/ 5</span>
              </div>
              <div className="text-base font-bold text-gray-200 uppercase tracking-widest mt-2">
                Google Rating
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Rated 4.8★ by members on Google Maps Trichy
              </p>
            </div>

            {/* Middle Trust Callout */}
            <div className="lg:col-span-4 flex flex-col gap-3 py-4 lg:py-0 border-y lg:border-y-0 lg:border-x border-white/10 lg:px-8">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm text-gray-200 font-medium">Verified Google Reviews</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-red shrink-0" />
                <span className="text-sm text-gray-200 font-medium">Located near Clock Tower, Madurai Road</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-sm text-gray-200 font-medium">Recognized Coaching Standards</span>
              </div>
            </div>

            {/* Right Action Button */}
            <div className="lg:col-span-3 flex justify-center lg:justify-end">
              <a
                href={gymData.brand.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-amber-500/20 hover:scale-105"
              >
                <span>VIEW GOOGLE REVIEWS</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
