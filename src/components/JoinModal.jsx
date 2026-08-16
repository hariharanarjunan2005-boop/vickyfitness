import React, { useState } from 'react';
import { gymData } from '../data/gymData';
import { X, Dumbbell, Phone, CheckCircle, Send } from 'lucide-react';

export default function JoinModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: 'Strength Training',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-brand-dark rounded-2xl sm:rounded-3xl border border-white/15 shadow-2xl p-4 sm:p-8 my-auto max-h-[90dvh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-white/5 text-gray-400 hover:text-white border border-white/10 transition-colors active:scale-95 min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 sm:py-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4">
              <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white mb-2">
              INQUIRY RECEIVED!
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-sm mb-6 leading-relaxed">
              Thank you for reaching out to Grower Fitness. Our team will get back to you shortly at <span className="text-white font-bold">{formData.phone || 'your number'}</span>.
            </p>
            <div className="flex flex-col gap-3 w-full">
              <a
                href={`tel:${gymData.brand.phoneClean}`}
                className="w-full min-h-[48px] rounded-xl bg-brand-red text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-brand-red/30 active:scale-98"
              >
                <Phone className="w-4 h-4" />
                <span>CALL DIRECTLY: {gymData.brand.phone}</span>
              </a>
              <button
                onClick={handleReset}
                className="w-full min-h-[48px] rounded-xl bg-white/5 text-gray-400 hover:text-white text-xs font-semibold uppercase tracking-wider border border-white/10 active:scale-98"
              >
                CLOSE
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-2 pr-10">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-brand-red/20 border border-brand-red/40 flex items-center justify-center text-brand-red shrink-0">
                <Dumbbell className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[9px] sm:text-[10px] font-bold text-brand-gold uppercase tracking-widest block">
                  START YOUR FITNESS JOURNEY
                </span>
                <h3 className="font-heading font-extrabold text-lg sm:text-2xl text-white uppercase">
                  JOIN GROWER FITNESS
                </h3>
              </div>
            </div>

            <p className="text-xs text-gray-400 mb-5 leading-relaxed">
              Fill out your details below to request a callback or tour of Grower Fitness in Trichy.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full min-h-[48px] px-4 py-2.5 rounded-xl bg-brand-surface border border-white/10 text-white text-sm focus:outline-none focus:border-brand-red placeholder:text-gray-600"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full min-h-[48px] px-4 py-2.5 rounded-xl bg-brand-surface border border-white/10 text-white text-sm focus:outline-none focus:border-brand-red placeholder:text-gray-600"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                  Primary Fitness Goal
                </label>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full min-h-[48px] px-4 py-2.5 rounded-xl bg-brand-surface border border-white/10 text-white text-sm focus:outline-none focus:border-brand-red"
                >
                  <option value="Strength Training">Strength Training</option>
                  <option value="Muscle Building">Muscle Building / Hypertrophy</option>
                  <option value="Weight Management">Weight Management / Fat Loss</option>
                  <option value="Cardio & Conditioning">Cardio & Conditioning</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                  Additional Note (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Any specific questions or preferred timing..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-brand-surface border border-white/10 text-white text-sm focus:outline-none focus:border-brand-red placeholder:text-gray-600 resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  type="submit"
                  className="w-full min-h-[48px] rounded-xl bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-brand-red/30 flex items-center justify-center gap-2 transition-colors active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>SUBMIT INQUIRY</span>
                </button>

                <div className="text-center text-[10px] text-gray-500 font-medium my-0.5">OR CALL US DIRECTLY</div>

                <a
                  href={`tel:${gymData.brand.phoneClean}`}
                  className="w-full min-h-[48px] rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider border border-white/10 flex items-center justify-center gap-2 transition-colors active:scale-98"
                >
                  <Phone className="w-4 h-4 text-brand-gold" />
                  <span>{gymData.brand.phone}</span>
                </a>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
