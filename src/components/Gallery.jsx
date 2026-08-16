import React, { useState } from 'react';
import { images } from '../data/images';
import { Maximize2, X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Community', 'Achievements', 'Awards', 'Facilities'];

  const filteredGallery = activeFilter === 'All'
    ? images.gallery
    : images.gallery.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-14 sm:py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-brand-gold uppercase">
              ACTUAL GALLERY & MEMORIES
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-[clamp(1.8rem,7vw,3.25rem)] text-white tracking-tight uppercase leading-tight mb-3 sm:mb-4">
            THE GROWER <span className="text-gradient-red">GALLERY</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-base leading-relaxed">
            Authentic moments from championship bodybuilding stage wins, team events, and daily gym strength work.
          </p>
        </div>

        {/* Category Filters (Mobile Scrollable / Wrapped) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 mb-8 sm:mb-12 overflow-x-auto pb-2 sm:pb-0 no-scrollbar max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 shrink-0 ${
                activeFilter === cat
                  ? 'bg-brand-red text-white shadow-lg shadow-brand-red/30'
                  : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Mobile Redesigned Gallery Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">
          {filteredGallery.map((item) => {
            const isWide = item.aspect === 'wide';
            const colSpan = isWide ? 'lg:col-span-8' : 'lg:col-span-4';

            return (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className={`${colSpan} group relative rounded-2xl overflow-hidden bg-brand-surface border border-white/10 cursor-pointer h-[220px] xs:h-[240px] sm:h-[380px] shadow-xl hover:border-brand-gold/50 transition-all duration-300`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <span className="px-2.5 py-0.5 rounded text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-brand-gold border border-white/10">
                      {item.category}
                    </span>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-sm sm:text-xl text-white group-hover:text-brand-gold transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-gray-300 mt-0.5 hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to expand photo
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-8 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-brand-dark rounded-2xl overflow-hidden border border-white/20 shadow-2xl my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-30 p-3 rounded-full bg-black/80 text-white border border-white/20 transition-colors shadow-lg active:scale-95 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close image"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative max-h-[60dvh] sm:max-h-[75dvh] flex items-center justify-center bg-black p-2">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[58dvh] sm:max-h-[70dvh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="p-4 sm:p-6 bg-brand-surface border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] sm:text-xs font-bold text-brand-gold uppercase tracking-wider block mb-0.5">
                  {selectedImage.category}
                </span>
                <h4 className="font-heading font-bold text-lg sm:text-2xl text-white">
                  {selectedImage.title}
                </h4>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider border border-white/15 active:scale-98"
              >
                CLOSE VIEWER
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
