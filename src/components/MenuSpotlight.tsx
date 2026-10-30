import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ASSETS } from '../data/assets';
import { ActivePage } from './Header';

interface MenuSpotlightProps {
  onNavigate: (page: ActivePage) => void;
}

export const MenuSpotlight: React.FC<MenuSpotlightProps> = ({ onNavigate }) => {
  return (
    <section className="w-full bg-farmhouse-canvas py-8 md:py-12 border-b border-[#e8ddcb]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card Left: Food & Drink Menu */}
          <div className="bg-farmhouse-card rounded-3xl p-6 lg:p-7 flex flex-col sm:flex-row items-center gap-6 shadow-xs hover:shadow-md transition-shadow group">
            <div className="flex-1 flex flex-col items-start justify-between h-full">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#881326] uppercase block mb-1">
                  Served Daily
                </span>
                <h3 className="font-serif-heading font-bold text-2xl md:text-3xl text-[#1d3728] mb-2 leading-tight">
                  Food &amp; Drink Menu
                </h3>
                <p className="text-xs md:text-sm text-[#4d5e51] leading-relaxed mb-6 font-normal">
                  Full Yorkshire Farmhouse breakfasts, hot breakfast rolls, toasties, warm paninis, coffee and more.
                </p>
              </div>

              <button
                onClick={() => onNavigate('cafe')}
                className="inline-flex items-center gap-2 bg-[#1d3728] hover:bg-[#14271c] text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <span>View Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="w-full sm:w-48 lg:w-56 shrink-0 aspect-4/3 rounded-2xl overflow-hidden border-2 border-white shadow-xs">
              <img
                src={ASSETS.farmhouseBreakfast}
                alt="Hearty full Yorkshire Farmhouse breakfast at Mr Moo's"
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Card Right: Dessert & Sundaes Menu */}
          <div className="bg-farmhouse-card rounded-3xl p-6 lg:p-7 flex flex-col sm:flex-row items-center gap-6 shadow-xs hover:shadow-md transition-shadow group">
            <div className="flex-1 flex flex-col items-start justify-between h-full">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#881326] uppercase block mb-1">
                  Sweet Delights
                </span>
                <h3 className="font-serif-heading font-bold text-2xl md:text-3xl text-[#1d3728] mb-2 leading-tight">
                  Dessert &amp; Sundaes Menu
                </h3>
                <p className="text-xs md:text-sm text-[#4d5e51] leading-relaxed mb-6 font-normal">
                  Famous knickerbocker glory, decadent sundaes, warm Belgian waffles and thick milkshakes.
                </p>
              </div>

              <button
                onClick={() => onNavigate('cafe')}
                className="inline-flex items-center gap-2 bg-[#1d3728] hover:bg-[#14271c] text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <span>View Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="w-full sm:w-48 lg:w-56 shrink-0 aspect-4/3 rounded-2xl overflow-hidden border-2 border-white shadow-xs">
              <img
                src={ASSETS.sundaeGlory}
                alt="Mr Moo's famous knickerbocker glory sundae dessert"
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
