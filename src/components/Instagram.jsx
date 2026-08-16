import React from 'react';
import { gymData } from '../data/gymData';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Instagram() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-purple-950/40 via-brand-dark to-brand-surface border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 p-6 sm:p-10 rounded-2xl glass-panel border border-white/10 shadow-2xl">
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-0.5 shadow-xl shrink-0">
              <div className="w-full h-full bg-brand-dark rounded-[14px] flex items-center justify-center text-white">
                <InstagramIcon className="w-7 h-7 sm:w-8 sm:h-8 text-rose-400" />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold text-rose-400 uppercase tracking-widest mb-1">
                <Sparkles className="w-3.5 h-3.5" /> SOCIAL MEDIA COMMUNITY
              </div>
              <h3 className="font-heading font-extrabold text-xl sm:text-3xl text-white tracking-tight">
                FOLLOW THE GROWER JOURNEY
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-gray-400 mt-0.5">
                Official Handle: <span className="text-white">{gymData.brand.instagramHandle}</span>
              </p>
            </div>
          </div>

          <a
            href={gymData.brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto min-h-[48px] inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-rose-600/20 active:scale-98 shrink-0"
          >
            <span>FOLLOW ON INSTAGRAM</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

        </div>

      </div>
    </section>
  );
}
