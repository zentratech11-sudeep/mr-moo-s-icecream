import React from 'react';
import { Coffee, Waves, ArrowRight } from 'lucide-react';
import { ASSETS } from '../data/assets';
import { ActivePage } from './Header';

// Custom SVG Cow Icon to match reference
const CowHeadIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 3C5 3 4 5 4 7v3a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V7c0-2-1-4-3-4" />
    <path d="M4 8l-2 1a2 2 0 0 0-1 2v2a2 2 0 0 0 3 2l1-1" />
    <path d="M20 8l2 1a2 2 0 0 1 1 2v2a2 2 0 0 1-3 2l-1-1" />
    <circle cx="9" cy="11" r="1" fill="currentColor" />
    <circle cx="15" cy="11" r="1" fill="currentColor" />
    <ellipse cx="12" cy="18" rx="4" ry="2.5" />
    <circle cx="10" cy="18" r="0.8" fill="currentColor" />
    <circle cx="14" cy="18" r="0.8" fill="currentColor" />
  </svg>
);

interface FeatureTrioProps {
  onNavigate: (page: ActivePage) => void;
}

export const HomeFeatureTrio: React.FC<FeatureTrioProps> = ({ onNavigate }) => {
  return (
    <section className="w-full bg-farmhouse-canvas py-10 md:py-14 border-b border-[#e8ddcb]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: About Us */}
          <div className="bg-farmhouse-card rounded-3xl p-6 lg:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5 text-[#1d3728]">
                  <CowHeadIcon className="w-6 h-6 text-[#1d3728]" />
                  <h3 className="font-serif-heading font-bold text-xl md:text-2xl text-[#1d3728]">
                    About Us
                  </h3>
                </div>
              </div>

              <span className="text-[10px] font-bold tracking-[0.2em] text-[#881326] uppercase block mb-2">
                Our Story
              </span>

              <p className="text-xs md:text-sm text-[#4d5e51] leading-relaxed mb-5">
                From our family farm to your cone, Mr Moo’s has been serving real dairy ice cream for over 20 years.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-16/10 border-2 border-white shadow-xs relative">
                <img
                  src={ASSETS.dairyCows}
                  alt="Mr Moo's dairy farm heritage"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <button
                onClick={() => onNavigate('about')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1d3728] hover:bg-[#14271c] text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Our Café */}
          <div className="bg-farmhouse-card rounded-3xl p-6 lg:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5 text-[#1d3728]">
                  <Coffee className="w-6 h-6 text-[#1d3728]" />
                  <h3 className="font-serif-heading font-bold text-xl md:text-2xl text-[#1d3728]">
                    Our Café
                  </h3>
                </div>
              </div>

              <span className="text-[10px] font-bold tracking-[0.2em] text-[#881326] uppercase block mb-2">
                Food &amp; Drink
              </span>

              <p className="text-xs md:text-sm text-[#4d5e51] leading-relaxed mb-5">
                Enjoy delicious breakfasts, lunches, homemade treats and our award-winning ice cream.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-16/10 border-2 border-white shadow-xs relative">
                <img
                  src={ASSETS.sundaeGlory}
                  alt="Mr Moo's cafe sundae and refreshments"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <button
                onClick={() => onNavigate('cafe')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1d3728] hover:bg-[#14271c] text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <span>View Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Nearby Beach Access */}
          <div className="bg-farmhouse-card rounded-3xl p-6 lg:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5 text-[#1d3728]">
                  <Waves className="w-6 h-6 text-[#1d3728]" />
                  <h3 className="font-serif-heading font-bold text-xl md:text-2xl text-[#1d3728]">
                    Nearby Beach Access
                  </h3>
                </div>
              </div>

              <span className="text-[10px] font-bold tracking-[0.2em] text-[#881326] uppercase block mb-2">
                Our Location
              </span>

              <p className="text-xs md:text-sm text-[#4d5e51] leading-relaxed mb-5">
                With an idyllic footpath down to the beach, there is no better place to enjoy a delightful ice cream.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-16/10 border-2 border-white shadow-xs relative">
                <img
                  src={ASSETS.beachPath}
                  alt="Skipsea beach path from Mr Moo's car park"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <button
                onClick={() => onNavigate('beach')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1d3728] hover:bg-[#14271c] text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
