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
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-brand-dark rounded-3xl border border-white/15 shadow-2xl p-5 sm:p-8 my-auto max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-gray-400 hover:text-white border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-white mb-2">
              INQUIRY RECEIVED!
            </h3>
            <p className="text-sm text-gray-300 max-w-sm mb-6">
              Thank you for reaching out to Grower Fitness. Our team will get back to you shortly at <span className="text-white font-bold">{formData.phone || 'your number'}</span>.
            </p>
            <div className="flex flex-col gap-3 w-full">
              <a
                href={`tel:${gymData.brand.phoneClean}`}
                className="w-full py-3.5 rounded-xl bg-brand-red text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-brand-red/30"
              >
                <Phone className="w-4 h-4" />
                <span>CALL DIRECTLY: {gymData.brand.phone}</span>
              </a>
              <button
                onClick={handleReset}
                className="w-full py-3 rounded-xl bg-white/5 text-gray-400 hover:text-white text-xs font-semibold uppercase tracking-wider border border-white/10"
              >
                CLOSE
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-full bg-brand-red/20 border border-brand-red/40 flex items-center justify-center text-brand-red">
                <Dumbbell className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest block">
                  START YOUR FITNESS JOURNEY
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-white uppercase">
                  JOIN GROWER FITNESS
                </h3>
              </div>
            </div>

            <p className="text-xs text-gray-400 mb-6">
              Fill out your details below to request a callback or tour of Grower Fitness in Trichy.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-brand-surface border border-white/10 text-white text-sm focus:outline-none focus:border-brand-red placeholder:text-gray-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-brand-surface border border-white/10 text-white text-sm focus:outline-none focus:border-brand-red placeholder:text-gray-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Primary Fitness Goal
                </label>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-brand-surface border border-white/10 text-white text-sm focus:outline-none focus:border-brand-red"
                >
                  <option value="Strength Training">Strength Training</option>
                  <option value="Muscle Building">Muscle Building / Hypertrophy</option>
                  <option value="Weight Management">Weight Management / Fat Loss</option>
                  <option value="Cardio & Conditioning">Cardio & Conditioning</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Additional Note (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Any specific questions or preferred timing..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-brand-surface border border-white/10 text-white text-sm focus:outline-none focus:border-brand-red placeholder:text-gray-600 resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col gap-3">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-brand-red/30 flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>SUBMIT INQUIRY</span>
                </button>

                <div className="text-center text-[11px] text-gray-500 font-medium">OR CALL US DIRECTLY</div>

                <a
                  href={`tel:${gymData.brand.phoneClean}`}
                  className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider border border-white/10 flex items-center justify-center gap-2 transition-colors"
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
