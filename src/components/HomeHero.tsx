import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { ASSETS } from '../data/assets';
import { ActivePage } from './Header';

interface HomeHeroProps {
  onNavigate: (page: ActivePage) => void;
}

// Lush botanical leaf branch for corners to match the mockup
const BotanicalBranch: React.FC<{ className?: string; flipped?: boolean }> = ({
  className = '',
  flipped = false,
}) => (
  <svg
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${flipped ? 'transform scale-x-[-1]' : ''}`}
  >
    {/* Stem */}
    <path
      d="M10 10 C45 35, 90 90, 145 150"
      stroke="#284c37"
      strokeWidth="3.5"
      strokeLinecap="round"
      opacity="0.85"
    />
    {/* Leaf pairs */}
    <path
      d="M15 15 C8 40, 25 55, 38 42 C45 30, 30 18, 15 15 Z"
      fill="#2d553d"
      opacity="0.9"
    />
    <path
      d="M32 25 C50 15, 68 28, 56 42 C45 52, 32 38, 32 25 Z"
      fill="#3a664a"
      opacity="0.9"
    />
    <path
      d="M50 48 C35 70, 52 88, 68 76 C76 65, 65 48, 50 48 Z"
      fill="#2a4f38"
      opacity="0.95"
    />
    <path
      d="M72 65 C95 50, 112 68, 98 84 C85 96, 70 80, 72 65 Z"
      fill="#3e6b4d"
      opacity="0.9"
    />
    <path
      d="M88 92 C70 115, 90 135, 108 120 C118 108, 105 88, 88 92 Z"
      fill="#264833"
      opacity="0.95"
    />
    <path
      d="M112 110 C135 98, 148 118, 134 135 C122 146, 110 128, 112 110 Z"
      fill="#3a6348"
      opacity="0.85"
    />
    {/* Small accent berries/blossoms */}
    <circle cx="28" cy="18" r="3" fill="#c59b27" opacity="0.9" />
    <circle cx="68" cy="52" r="3.5" fill="#881326" opacity="0.85" />
    <circle cx="106" cy="98" r="3" fill="#c59b27" opacity="0.9" />
  </svg>
);

export const HomeHero: React.FC<HomeHeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative w-full overflow-hidden bg-farmhouse-canvas border-b border-[#e8ddcb] pt-4 md:pt-8 pb-12 md:pb-16">
      {/* Top Left Botanical Foliage framing */}
      <div className="absolute top-0 left-0 w-28 h-28 sm:w-40 sm:h-40 md:w-52 md:h-52 pointer-events-none z-20">
        <BotanicalBranch className="w-full h-full" />
      </div>

      {/* Top Right Botanical Foliage framing */}
      <div className="absolute top-0 right-0 w-28 h-28 sm:w-40 sm:h-40 md:w-52 md:h-52 pointer-events-none z-20">
        <BotanicalBranch className="w-full h-full" flipped />
      </div>

      {/* Subtle warm pastoral ambient light gradient behind hero center */}
      <div className="absolute inset-0 bg-radial from-[#fffcf5]/80 via-transparent to-[#f5ede0]/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left: Farmhouse Dairy Cow Landscape Image (lg:col-span-4) */}
          <div className="lg:col-span-4 order-2 lg:order-1 flex justify-center">
            <div className="relative group w-full max-w-sm lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-md border-3 border-white aspect-4/3 lg:aspect-5/4 bg-[#f0e7d8]">
                <img
                  src={ASSETS.dairyCows}
                  alt="Mr Moo's dairy cows grazing in East Yorkshire pastures"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14271c]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#e5be49] font-bold">
                    Southfield House Farm
                  </span>
                  <p className="text-xs text-stone-100 font-medium leading-snug">
                    Fresh whole milk from our own herd, crafting genuine Yorkshire dairy ice cream since 2003.
                  </p>
                </div>
              </div>

              {/* Over 20 Years Family Run Badge */}
              <div className="absolute -bottom-3 -right-2 bg-white px-3.5 py-1.5 rounded-full shadow-sm border border-[#e8ddcb] flex items-center gap-1.5 text-xs font-semibold text-[#1d3728]">
                <span className="w-2 h-2 rounded-full bg-[#881326]" />
                <span>Over 20 Years Family Run</span>
              </div>
            </div>
          </div>

          {/* Center Column: Editorial Typography matching visual mockup (lg:col-span-5) */}
          <div className="lg:col-span-5 order-1 lg:order-2 text-center lg:text-left flex flex-col items-center lg:items-start pt-2">
            
            {/* Header label with dashes */}
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="h-px w-6 sm:w-8 bg-[#881326]/70" />
              <span className="text-[11px] md:text-xs font-bold tracking-[0.25em] text-[#881326] uppercase">
                Real Dairy Ice Cream • Skipsea
              </span>
              <span className="h-px w-6 sm:w-8 bg-[#881326]/70" />
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-[52px] tracking-tight text-[#1d3728] leading-[1.08] mb-3">
              A Little Slice of{' '}
              <span className="block font-serif italic font-normal text-[#881326] mt-1">
                Yorkshire Heaven
              </span>
            </h1>

            {/* Body Prose */}
            <p className="text-sm md:text-base text-[#47564a] leading-relaxed max-w-lg mb-8 font-normal">
              Welcome to Mr Moo’s – where farm-fresh dairy, handcrafted ice cream and a warm Yorkshire welcome come together on the East Yorkshire coast.
            </p>

            {/* Dual Action Buttons matching mockup */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto">
              <button
                onClick={() => onNavigate('flavours')}
                className="bg-[#1d3728] hover:bg-[#14271c] active:scale-98 text-white px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all shadow-sm flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore Our Flavours</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('cafe')}
                className="bg-transparent hover:bg-white/80 active:scale-98 text-[#1d3728] border-2 border-[#1d3728] px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all shadow-2xs cursor-pointer"
              >
                <span>Visit Our Café</span>
              </button>
            </div>

            {/* Trust badge summary */}
            <div className="mt-8 pt-4 border-t border-[#e2d5c0] flex items-center gap-3 text-xs text-[#526354]">
              <span className="w-6 h-6 rounded-full bg-[#1d3728] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                4.7
              </span>
              <span>
                Rated <strong className="text-[#1d3728]">4.7 ★</strong> by over <strong className="text-[#1d3728]">2,600+</strong> Google &amp; TripAdvisor visitors
              </span>
            </div>
          </div>

          {/* Right Column: Towering Ice Cream & Script Callout (lg:col-span-3) */}
          <div className="lg:col-span-3 order-3 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-xs lg:max-w-none">
              
              {/* Handwritten Script Callout matching reference */}
              <div className="text-center mb-2 transform -rotate-2 select-none">
                <span className="font-script-accent text-2xl md:text-3xl font-bold text-[#1d3728] block leading-tight">
                  Real Dairy
                </span>
                <span className="font-script-accent text-xl md:text-2xl font-bold text-[#881326] block leading-tight">
                  Real Flavours
                </span>
                <span className="font-script-accent text-2xl md:text-3xl font-bold text-[#1d3728] inline-flex items-center gap-1 leading-tight">
                  Happy Moments <Heart className="w-4 h-4 text-[#881326] fill-[#881326] inline" />
                </span>
              </div>

              {/* Artisan Sundae Photo Card with coastal backdrop */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg border-3 border-white bg-white group aspect-3/4">
                <img
                  src={ASSETS.sundaeGlory}
                  alt="Mr Moo's Knickerbocker Glory ice cream sundae"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gold badge */}
                <div className="absolute top-3 right-3 bg-[#c59b27] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-xs flex items-center gap-1">
                  <span>★ Award-Winning</span>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-3.5 bg-gradient-to-t from-[#14271c] via-[#14271c]/75 to-transparent text-white text-center">
                  <span className="text-xs font-serif-heading font-bold block">Famous Knickerbocker Glory</span>
                  <span className="text-[10px] text-stone-200">Layered with fresh fruit &amp; double cream</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
