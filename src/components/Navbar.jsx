import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Dumbbell, ChevronRight } from 'lucide-react';
import { images } from '../data/images';
import { gymData } from '../data/gymData';

export default function Navbar({ onOpenJoinModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3 shadow-2xl shadow-black/50'
            : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full p-0.5 bg-gradient-to-br from-brand-red via-brand-gold to-brand-red overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
              <img
                src={images.logo}
                alt="Grower Fitness Logo"
                className="w-full h-full object-cover rounded-full bg-black"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-wider text-white flex items-center gap-1">
                GROWER <span className="text-brand-red">FITNESS</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium -mt-1">
                Trichy • Tamil Nadu
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white hover:scale-105 transition-all duration-200 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right Action CTA & Call Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${gymData.brand.phoneClean}`}
              className="flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 px-3.5 py-2.5 rounded-full border border-white/10 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-brand-red" />
              <span>{gymData.brand.phone}</span>
            </a>
            <button
              onClick={onOpenJoinModal}
              className="relative group overflow-hidden rounded-full p-px font-semibold text-xs uppercase tracking-wider"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-brand-red via-amber-500 to-brand-red rounded-full transition-all duration-300 group-hover:opacity-90" />
              <span className="relative px-6 py-2.5 rounded-full bg-brand-dark flex items-center gap-2 text-white group-hover:bg-transparent transition-all duration-300">
                <Dumbbell className="w-4 h-4 text-brand-red group-hover:text-white transition-colors" />
                JOIN NOW
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex sm:hidden items-center gap-3">
            <button
              onClick={onOpenJoinModal}
              className="bg-brand-red text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider"
            >
              JOIN
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 text-gray-200 hover:text-white border border-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Slide-Over Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-md transition-opacity duration-300 sm:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-brand-dark border-l border-white/10 p-6 flex flex-col justify-between transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <img src={images.logo} alt="Logo" className="w-9 h-9 rounded-full" />
                <span className="font-heading font-bold text-lg text-white">
                  GROWER <span className="text-brand-red">FITNESS</span>
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-base font-medium text-gray-200 hover:text-brand-red py-2 border-b border-white/5"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
            <a
              href={`tel:${gymData.brand.phoneClean}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold text-white"
            >
              <Phone className="w-4 h-4 text-brand-red" />
              <span>{gymData.brand.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoinModal();
              }}
              className="w-full py-3.5 rounded-xl bg-brand-red text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-brand-red/30"
            >
              JOIN NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
