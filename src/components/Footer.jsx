import React from 'react';
import { images } from '../data/images';
import { gymData } from '../data/gymData';
import { Phone, MapPin, ChevronUp } from 'lucide-react';

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-12 text-gray-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#hero" className="flex items-center gap-3 mb-4">
              <img src={images.logo} alt="Grower Fitness Logo" className="w-12 h-12 rounded-full border border-white/10" />
              <div className="flex flex-col">
                <span className="font-heading font-black text-2xl text-white tracking-wider">
                  GROWER <span className="text-brand-red">FITNESS</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold -mt-1">
                  Premium Gym in Trichy
                </span>
              </div>
            </a>
            <p className="text-xs text-gray-400 leading-relaxed mb-6 max-w-sm">
              Trichy's premier fitness destination focused on raw strength training, progressive conditioning, and dedicated physique building.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={gymData.brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-rose-600/20 hover:text-rose-400 border border-white/10 flex items-center justify-center text-gray-300 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`tel:${gymData.brand.phoneClean}`}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-red/20 hover:text-brand-red border border-white/10 flex items-center justify-center text-gray-300 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a href="#hero" className="hover:text-brand-red transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-red transition-colors">About Grower Fitness</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-brand-red transition-colors">Training Programs</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-brand-red transition-colors">Gym Facilities</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-brand-red transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-brand-red transition-colors">Member Reviews</a>
              </li>
              <li>
                <a href="#location" className="hover:text-brand-red transition-colors">Contact & Location</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Contact & Location
            </h4>
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span className="text-gray-300 leading-relaxed">
                  {gymData.brand.fullAddress}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a href={`tel:${gymData.brand.phoneClean}`} className="text-white hover:text-brand-gold font-bold">
                  {gymData.brand.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <InstagramIcon className="w-4 h-4 text-rose-400 shrink-0" />
                <a href={gymData.brand.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white font-semibold">
                  {gymData.brand.instagramHandle}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <div>
            © {new Date().getFullYear()} Grower Fitness Gym, Trichy. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
          >
            <span>BACK TO TOP</span>
            <ChevronUp className="w-4 h-4 text-brand-red" />
          </button>
        </div>

      </div>
    </footer>
  );
}
