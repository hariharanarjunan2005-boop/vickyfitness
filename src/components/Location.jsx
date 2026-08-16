import React from 'react';
import { gymData } from '../data/gymData';
import { MapPin, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';

export default function Location() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    'Grower Fitness, 86/3, GP Raja Tower, ICICI Bank Building, Madurai Road, Bharathiyar Salai, Trichy 620008'
  )}`;

  return (
    <section id="location" className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
            <span className="text-xs font-bold tracking-widest text-brand-red uppercase">
              VISIT GROWER FITNESS
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-tight mb-4">
            GYM LOCATION & <span className="text-gradient-red">CONTACT</span>
          </h2>
          <p className="text-gray-400 text-base">
            Conveniently situated in the heart of Trichy at GP Raja Tower on Madurai Road.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Info Card */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-2xl bg-brand-surface border border-white/10 flex flex-col justify-between shadow-2xl">
            <div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-wider mb-2">
                {gymData.brand.name}
              </h3>
              <p className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-6">
                {gymData.brand.type}
              </p>

              <div className="space-y-6 mb-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Address</h4>
                    <p className="text-sm text-gray-200 leading-relaxed font-medium">
                      {gymData.brand.fullAddress}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Phone Inquiry</h4>
                    <a
                      href={`tel:${gymData.brand.phoneClean}`}
                      className="text-base text-white hover:text-brand-gold font-bold tracking-wide transition-colors"
                    >
                      {gymData.brand.phone}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-gray-300 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Working Hours</h4>
                    <p className="text-sm text-gray-200 font-medium">
                      {gymData.brand.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-brand-red/20"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href={`tel:${gymData.brand.phoneClean}`}
                className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider border border-white/15 transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-brand-gold" />
                <span>CALL NOW</span>
              </a>
            </div>
          </div>

          {/* Right Map Section */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-white/10 min-h-[380px] bg-brand-surface relative shadow-2xl">
            <iframe
              title="Grower Fitness Gym Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.786207865243!2d78.691!3d10.824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ5JzI2LjQiTiA3OMKwNDEnMjcuNiJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '420px', filter: 'grayscale(0.9) contrast(1.2) invert(0.9)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            
            {/* Map Overlay Badge */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel border border-white/15 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-bold text-white">Madurai Road Landmark: ICICI Bank Building</span>
              </div>
              <span className="text-[10px] text-gray-400 font-mono hidden sm:inline">Trichy 620008</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
