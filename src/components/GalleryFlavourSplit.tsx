import React from 'react';
import { ArrowRight, Images } from 'lucide-react';
import { ASSETS } from '../data/assets';
import { ActivePage } from './Header';
import { DaisyIcon } from './Logo';

interface GalleryFlavourSplitProps {
  onNavigate: (page: ActivePage) => void;
}

export const GalleryFlavourSplit: React.FC<GalleryFlavourSplitProps> = ({ onNavigate }) => {
  return (
    <section className="w-full bg-farmhouse-canvas py-8 md:py-14 border-b border-[#e8ddcb]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left Card: Dark Forest Green Gallery Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#183525] text-white rounded-3xl p-6 sm:p-7 shadow-md relative overflow-hidden flex flex-col justify-between border border-[#274f38] group">
            {/* Corner daisy accent */}
            <div className="absolute top-4 right-4 opacity-40">
              <DaisyIcon className="w-6 h-6" />
            </div>

            <div>
              <span className="font-script-accent text-[#e5be49] text-base md:text-lg block tracking-wider mb-1">
                PHOTO GALLERY
              </span>
              <h3 className="font-serif-heading font-bold text-2xl md:text-3xl text-white mb-2 leading-tight">
                Café &amp; Parlour Gallery
              </h3>
              <p className="text-xs md:text-sm text-[#cbdad0] leading-relaxed mb-6 font-normal">
                A glimpse into our delicious food, refreshing ice creams, cosy atmosphere and the warm moments we share every day.
              </p>
            </div>

            {/* 4-Photo Collage preview */}
            <div className="grid grid-cols-2 gap-2.5 my-4">
              <div className="aspect-square rounded-xl overflow-hidden border border-white/20">
                <img
                  src={ASSETS.sundaeGlory}
                  alt="Knickerbocker glory sundae"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden border border-white/20">
                <img
                  src={ASSETS.farmhouseBreakfast}
                  alt="Farmhouse breakfast plate"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden border border-white/20">
                <img
                  src={ASSETS.dairyCows}
                  alt="Dairy cows grazing at Southfield House Farm"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden border border-white/20">
                <img
                  src={ASSETS.iceCreamTubs}
                  alt="Artisanal ice cream cones"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <button
              onClick={() => onNavigate('gallery')}
              className="inline-flex items-center justify-center gap-2 bg-[#254934] hover:bg-[#2e5940] border border-white/30 text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors self-start mt-2"
            >
              <Images className="w-3.5 h-3.5 text-[#e5be49]" />
              <span>View More Photos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right Card: The Flavour Collection Showcase (7 cols) */}
          <div className="lg:col-span-7 bg-farmhouse-card rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#881326] uppercase block mb-1">
                  – Handcrafted on the Farm –
                </span>
                <h3 className="font-serif-heading font-bold text-2xl md:text-3xl lg:text-4xl text-[#1d3728] leading-tight mb-1">
                  The Flavour Collection
                </h3>
                <p className="font-serif italic text-sm md:text-base text-[#5c6e60]">
                  Showing 30 authentic Mr Moo’s ice cream flavours
                </p>
              </div>

              <button
                onClick={() => onNavigate('flavours')}
                className="bg-[#881326] hover:bg-[#6e0d1d] text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors shrink-0 self-start sm:self-auto flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <span>View Flavours</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Wide photography of tubs arrayed on farm table */}
            <div className="rounded-2xl overflow-hidden border-2 border-white shadow-xs aspect-16/9 relative mt-2">
              <img
                src={ASSETS.iceCreamTubs}
                alt="30 authentic Mr Moo's dairy ice cream flavours"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-4 bg-[#14271c]/80 backdrop-blur-xs text-white px-3 py-1.5 rounded-xl text-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e5be49]" />
                <span className="font-medium">100% Whole Milk &amp; Double Cream</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
