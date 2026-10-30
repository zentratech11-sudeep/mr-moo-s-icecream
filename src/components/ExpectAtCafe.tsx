import React from 'react';
import { Coffee, Sandwich, Utensils, IceCream, Cherry } from 'lucide-react';
import { DaisyIcon } from './Logo';
import { ActivePage } from './Header';

interface ExpectAtCafeProps {
  onNavigate: (page: ActivePage) => void;
}

export const ExpectAtCafe: React.FC<ExpectAtCafeProps> = ({ onNavigate }) => {
  const highlights = [
    {
      title: 'Brilliant Breakfasts',
      subtitle: 'Hearty Yorkshire plates & fresh breakfast rolls',
      icon: Coffee,
      action: 'cafe',
    },
    {
      title: 'Lovely Lunches',
      subtitle: 'Toasted bloomer sandwiches & hot paninis',
      icon: Sandwich,
      action: 'cafe',
    },
    {
      title: 'Perfect Pastries',
      subtitle: 'Scones with clotted cream & homemade cakes',
      icon: Utensils,
      action: 'cafe',
    },
    {
      title: 'Irresistible Ice Cream',
      subtitle: 'Over 30 artisan dairy flavours churned on farm',
      icon: IceCream,
      action: 'flavours',
    },
    {
      title: 'Scrummy Sundaes',
      subtitle: 'Knickerbocker glory & decadent waffle towers',
      icon: Cherry,
      action: 'cafe',
    },
  ];

  return (
    <section className="w-full bg-farmhouse-canvas py-12 md:py-16 border-b border-[#e8ddcb]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        
        {/* Decorative divider with daisy */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="h-px w-12 md:w-20 bg-[#cfc3b0]" />
          <DaisyIcon className="w-5 h-5" />
          <span className="h-px w-12 md:w-20 bg-[#cfc3b0]" />
        </div>

        {/* Section Heading */}
        <h2 className="font-serif-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#1d3728] mb-2 tracking-tight">
          What You Can Expect at Our Café
        </h2>
        <p className="text-xs sm:text-sm text-[#5a6a5e] max-w-2xl mx-auto mb-8 font-normal">
          We offer little bites including sandwiches, teas, coffees, milkshakes and much more, which all makes the parlour a &lsquo;must&rsquo; if passing by.
        </p>

        {/* 5 Highlight Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 md:gap-5">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.title}
                onClick={() => onNavigate(item.action as ActivePage)}
                className="bg-farmhouse-card hover:bg-[#efe7d8] rounded-2xl p-5 md:p-6 flex flex-col items-center text-center transition-all duration-200 group shadow-2xs hover:shadow-xs cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-white border border-[#e5dcce] flex items-center justify-center text-[#1d3728] mb-3 group-hover:scale-110 group-hover:bg-[#1d3728] group-hover:text-white transition-all shadow-2xs">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif-heading font-bold text-sm md:text-base text-[#1d3728] mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#637467] leading-tight hidden sm:block">
                  {item.subtitle}
                </p>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
