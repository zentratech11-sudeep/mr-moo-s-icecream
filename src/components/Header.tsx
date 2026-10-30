import React, { useState } from 'react';
import {
  Clock,
  MapPin,
  Phone,
  Menu as MenuIcon,
  X,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { Logo } from './Logo';

export type ActivePage =
  | 'home'
  | 'about'
  | 'cafe'
  | 'flavours'
  | 'caravan'
  | 'wholesale'
  | 'beach'
  | 'gallery'
  | 'contact';

interface HeaderProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: ActivePage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full relative z-50 shadow-xs">
      {/* 1. Top Forest Green Utility Bar */}
      <div className="bg-[#1b3626] text-[#e3ece5] text-xs font-medium py-1.5 px-4 md:px-8 border-b border-[#284a36]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Opening Times & Location */}
          <div className="flex items-center gap-4 text-[11px] md:text-xs">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#e5be49]" />
              <span className="tracking-wide">OPEN EVERYDAY 10:00AM - 4:30PM</span>
            </div>
            <span className="hidden sm:inline text-emerald-600/70">•</span>
            <div className="hidden sm:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#e5be49]" />
              <span className="tracking-wide">SKIPSEA, EAST YORKSHIRE</span>
            </div>
          </div>

          {/* Right: Phone & Socials */}
          <div className="flex items-center gap-4 text-[11px] md:text-xs ml-auto">
            <a
              href="tel:+441262469829"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              aria-label="Call Mr Moo's directly"
            >
              <Phone className="w-3.5 h-3.5 text-[#e5be49]" />
              <span className="font-semibold tracking-wide">01262 469829</span>
            </a>
            <span className="hidden md:inline text-emerald-600/70">|</span>
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
              <button
                onClick={() => handleNavClick('home')}
                className="hover:text-white transition-colors"
              >
                TripAdvisor 4.5★
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="bg-[#faf7f0] border-b border-[#e9dfcc] px-4 md:px-8 py-3 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1d3728] hover:bg-[#ede5d5] rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>

          {/* Left Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-[#2d4032]">
            <button
              onClick={() => handleNavClick('about')}
              className={`hover:text-[#881326] transition-colors pb-0.5 relative ${
                activePage === 'about'
                  ? 'text-[#881326] font-semibold border-b-2 border-[#881326]'
                  : ''
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('cafe')}
              className={`hover:text-[#881326] transition-colors pb-0.5 relative ${
                activePage === 'cafe'
                  ? 'text-[#881326] font-semibold border-b-2 border-[#881326]'
                  : ''
              }`}
            >
              Our Café
            </button>
            <button
              onClick={() => handleNavClick('flavours')}
              className={`hover:text-[#881326] transition-colors pb-0.5 relative ${
                activePage === 'flavours'
                  ? 'text-[#881326] font-semibold border-b-2 border-[#881326]'
                  : ''
              }`}
            >
              Our Ice-cream
            </button>
          </nav>

          {/* Center Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex flex-col items-center cursor-pointer group"
            aria-label="Mr Moo's Home"
          >
            <Logo size="md" />
          </button>

          {/* Right Desktop Nav Links + CTA */}
          <div className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-[#2d4032]">
            <button
              onClick={() => handleNavClick('caravan')}
              className={`flex items-center gap-1 hover:text-[#881326] transition-colors ${
                activePage === 'caravan' ? 'text-[#881326] font-semibold' : ''
              }`}
            >
              <span>Caravan Site</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </button>
            <button
              onClick={() => handleNavClick('wholesale')}
              className={`hover:text-[#881326] transition-colors ${
                activePage === 'wholesale' ? 'text-[#881326] font-semibold' : ''
              }`}
            >
              Wholesale
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`hover:text-[#881326] transition-colors ${
                activePage === 'contact' ? 'text-[#881326] font-semibold' : ''
              }`}
            >
              Contact
            </button>

            {/* Red Burgundy Primary CTA */}
            <button
              onClick={() => handleNavClick('flavours')}
              className="bg-[#881326] hover:bg-[#6e0d1d] active:scale-98 text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow-sm flex items-center gap-2 group cursor-pointer"
            >
              <span>View Flavours</span>
              <span className="transform group-hover:translate-x-0.5 transition-transform">→</span>
            </button>
          </div>

          {/* Mobile Right CTA button */}
          <button
            onClick={() => handleNavClick('flavours')}
            className="lg:hidden bg-[#881326] text-white px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide"
          >
            Flavours →
          </button>
        </div>
      </div>

      {/* 3. Mobile Slide-Down Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf7f0] border-b border-[#e5dcce] shadow-xl px-5 py-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3 text-base font-medium text-[#1d3728]">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-[#efe8da] text-left"
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4 text-stone-400" />
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-[#efe8da] text-left"
            >
              <span>About Us &amp; Farm Heritage</span>
              <ChevronRight className="w-4 h-4 text-stone-400" />
            </button>
            <button
              onClick={() => handleNavClick('cafe')}
              className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-[#efe8da] text-left"
            >
              <span>Our Café &amp; Food Menus</span>
              <ChevronRight className="w-4 h-4 text-stone-400" />
            </button>
            <button
              onClick={() => handleNavClick('flavours')}
              className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-[#efe8da] text-left text-[#881326] font-semibold"
            >
              <span>30+ Ice Cream Flavours</span>
              <span className="bg-[#881326] text-white text-xs px-2 py-0.5 rounded-full">New</span>
            </button>
            <button
              onClick={() => handleNavClick('beach')}
              className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-[#efe8da] text-left"
            >
              <span>Nearby Beach Access Walk</span>
              <ChevronRight className="w-4 h-4 text-stone-400" />
            </button>
            <button
              onClick={() => handleNavClick('caravan')}
              className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-[#efe8da] text-left"
            >
              <span>Coastal Caravan Site</span>
              <ChevronRight className="w-4 h-4 text-stone-400" />
            </button>
            <button
              onClick={() => handleNavClick('wholesale')}
              className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-[#efe8da] text-left"
            >
              <span>Wholesale &amp; Hospitality Supply</span>
              <ChevronRight className="w-4 h-4 text-stone-400" />
            </button>
            <button
              onClick={() => handleNavClick('gallery')}
              className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-[#efe8da] text-left"
            >
              <span>Parlour &amp; Farm Photo Gallery</span>
              <ChevronRight className="w-4 h-4 text-stone-400" />
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-[#efe8da] text-left"
            >
              <span>Contact &amp; Directions</span>
              <ChevronRight className="w-4 h-4 text-stone-400" />
            </button>
          </div>

          <div className="mt-6 pt-5 border-t border-[#e2d7c5] flex flex-col gap-3">
            <a
              href="tel:+441262469829"
              className="flex items-center justify-center gap-2 bg-[#1d3728] text-white py-3 rounded-xl font-medium text-sm"
            >
              <Phone className="w-4 h-4 text-[#e5be49]" />
              <span>Call 01262 469829</span>
            </a>
            <div className="text-center text-xs text-[#526354]">
              Hornsea Rd, Skipsea, Driffield YO25 8SY • Open 10am - 4:30pm
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
