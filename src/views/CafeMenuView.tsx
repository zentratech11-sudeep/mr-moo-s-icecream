import React, { useState } from 'react';
import { Clock, Coffee, Sparkles, AlertCircle, Heart, Check, Utensils } from 'lucide-react';
import { CAFE_MENU } from '../data/dairyData';
import { ASSETS } from '../data/assets';
import { ActivePage } from '../components/Header';
import { DaisyIcon } from '../components/Logo';

interface CafeMenuViewProps {
  onNavigate: (page: ActivePage) => void;
}

export const CafeMenuView: React.FC<CafeMenuViewProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'vegetarian'>('all');

  const categories = [
    { id: 'all', label: 'Complete Menu' },
    { id: 'breakfast', label: 'Farmhouse Breakfasts (10am-12pm)' },
    { id: 'lunch', label: 'Lunches & Paninis (12pm-2pm)' },
    { id: 'sundae', label: 'Decadent Sundaes' },
    { id: 'waffle', label: 'Waffles & Pastries' },
    { id: 'hot-drink', label: 'Teas & Fresh Coffee' },
    { id: 'cold-drink', label: 'Hand-Spun Milkshakes' },
  ];

  const filteredItems = CAFE_MENU.filter((item) => {
    if (selectedCategory !== 'all') {
      if (selectedCategory === 'sundae' && item.category !== 'sundae') return false;
      if (selectedCategory === 'waffle' && item.category !== 'waffle') return false;
      if (selectedCategory === 'breakfast' && item.category !== 'breakfast') return false;
      if (selectedCategory === 'lunch' && item.category !== 'lunch') return false;
      if (selectedCategory === 'hot-drink' && item.category !== 'hot-drink') return false;
      if (selectedCategory === 'cold-drink' && item.category !== 'cold-drink') return false;
    }
    if (dietaryFilter === 'vegetarian' && !item.dietary?.includes('vegetarian')) {
      return false;
    }
    return true;
  });

  return (
    <div className="w-full bg-[#faf7f0] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Editorial Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-[#881326]" />
            <span className="text-xs font-bold tracking-[0.25em] text-[#881326] uppercase">
              Farmhouse Kitchen &amp; Parlour
            </span>
            <span className="h-px w-8 bg-[#881326]" />
          </div>
          <h1 className="font-serif-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#1d3728] tracking-tight mb-3">
            The Café Menu
          </h1>
          <p className="text-sm md:text-base text-[#4f6052] leading-relaxed">
            From our hearty Mighty Moo morning fry-ups to lunchtime bloomer toasties and legendary towering knickerbocker glories, every dish is prepared fresh using local Yorkshire produce.
          </p>
        </div>

        {/* Serving times notice box */}
        <div className="bg-[#f6f0e4] border border-[#e8ddcb] rounded-3xl p-6 md:p-8 mb-12 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#e2d5c0]">
            <div className="pt-2 md:pt-0">
              <span className="text-xs font-bold tracking-wider uppercase text-[#881326] block mb-1">
                Breakfast Service
              </span>
              <p className="font-serif-heading font-bold text-lg text-[#1d3728]">
                10:00 AM – 12:00 PM
              </p>
              <p className="text-xs text-[#526354] mt-1">
                Full farmhouse breakfasts &amp; hot baps
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:px-4">
              <span className="text-xs font-bold tracking-wider uppercase text-[#881326] block mb-1">
                Farmhouse Lunches
              </span>
              <p className="font-serif-heading font-bold text-lg text-[#1d3728]">
                12:00 PM – 2:00 PM
              </p>
              <p className="text-xs text-[#526354] mt-1">
                Toasties, paninis, soups &amp; jacket potatoes
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:px-4">
              <span className="text-xs font-bold tracking-wider uppercase text-[#881326] block mb-1">
                Desserts &amp; Parlour
              </span>
              <p className="font-serif-heading font-bold text-lg text-[#1d3728]">
                All Day until 4:30 PM
              </p>
              <p className="text-xs text-[#526354] mt-1">
                Sundaes, waffles, cakes &amp; 30+ ice creams
              </p>
            </div>
          </div>
        </div>

        {/* Filter Controls (Segmented Tabs per Frontend Design Rule 0/1A) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#efe7d6] rounded-2xl w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#1d3728] text-white shadow-xs font-semibold'
                    : 'text-[#47574b] hover:text-[#1d3728] hover:bg-white/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto text-xs text-[#47574b]">
            <button
              onClick={() => setDietaryFilter(dietaryFilter === 'vegetarian' ? 'all' : 'vegetarian')}
              className={`px-3 py-1.5 rounded-full border transition-colors cursor-pointer ${
                dietaryFilter === 'vegetarian'
                  ? 'bg-[#881326] text-white border-[#881326]'
                  : 'bg-white border-[#d8cdb9] hover:border-[#1d3728]'
              }`}
            >
              Vegetarian Only (V)
            </button>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#f6f0e4] border border-[#e8ddcb] rounded-2xl p-5 sm:p-6 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between gap-4 mb-1.5">
                  <h3 className="font-serif-heading font-bold text-lg text-[#1d3728] leading-tight flex items-center gap-2">
                    <span>{item.name}</span>
                    {item.popular && (
                      <span className="text-[10px] uppercase font-bold text-[#881326] tracking-wider bg-[#881326]/10 px-2 py-0.5 rounded-md">
                        Popular
                      </span>
                    )}
                  </h3>
                  <span className="font-serif-heading font-bold text-base text-[#1d3728] tabular-nums shrink-0">
                    £{item.price.toFixed(2)}
                  </span>
                </div>

                <p className="text-xs text-[#526354] leading-relaxed mb-3">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#e8ddcb] text-[11px] text-[#718274]">
                <span>{item.servingTime ? `Served: ${item.servingTime}` : 'Served all day'}</span>
                {item.dietary?.includes('vegetarian') && (
                  <span className="font-medium text-[#1d3728]">Suitable for Vegetarians</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* All Images of Our Café: Visual Showcase at Bottom of Complete Menu */}
        <section className="mb-14 pt-10 border-t border-[#e2d5c0]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-[#881326] block mb-2">
              – Fresh From Our Farmhouse Kitchen &amp; Parlour –
            </span>
            <h3 className="font-serif-heading font-bold text-2xl md:text-3xl text-[#1d3728]">
              Café Favourites &amp; Parlour Gallery
            </h3>
            <p className="text-sm text-[#526354] mt-2 font-serif italic">
              A glimpse of our hearty breakfasts, artisanal sundaes, freshly churned tubs and sunny farm courtyard.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* 1. Mighty Moo Breakfast */}
            <div className="group bg-[#f6f0e4] rounded-2xl overflow-hidden border border-[#e8ddcb] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={ASSETS.farmhouseBreakfast}
                  alt="Hearty full Yorkshire farmhouse breakfast"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#1d3728]/90 text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md backdrop-blur-xs">
                  Breakfast Favourite
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif-heading font-bold text-base text-[#1d3728] mb-1">
                    The Mighty Moo Breakfast
                  </h4>
                  <p className="text-xs text-[#526354] leading-relaxed">
                    Butcher-cut Cumberland sausages, thick Yorkshire cured bacon, farm eggs, grilled tomatoes and farmhouse bloomer toast.
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-[#e8ddcb]/80 flex items-center justify-between text-[11px] text-[#718274]">
                  <span>Served 10am – 12pm</span>
                  <span className="font-semibold text-[#1d3728]">£9.95</span>
                </div>
              </div>
            </div>

            {/* 2. Legendary Knickerbocker Glory */}
            <div className="group bg-[#f6f0e4] rounded-2xl overflow-hidden border border-[#e8ddcb] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={ASSETS.sundaeGlory}
                  alt="Mr Moo's famous knickerbocker glory sundae"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#881326]/90 text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md backdrop-blur-xs">
                  Signature Sundae
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif-heading font-bold text-base text-[#1d3728] mb-1">
                    Famous Knickerbocker Glory
                  </h4>
                  <p className="text-xs text-[#526354] leading-relaxed">
                    Layers of sweet British strawberries, raspberry coulis, clotted cream vanilla and strawberry scoops, cream, Cadbury flake &amp; wafer.
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-[#e8ddcb]/80 flex items-center justify-between text-[11px] text-[#718274]">
                  <span>Served All Day</span>
                  <span className="font-semibold text-[#1d3728]">£7.95</span>
                </div>
              </div>
            </div>

            {/* 3. Artisan Dairy Tubs & Scoops */}
            <div className="group bg-[#f6f0e4] rounded-2xl overflow-hidden border border-[#e8ddcb] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={ASSETS.iceCreamTubs}
                  alt="Mr Moo's take-home tubs and parlour scoops"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#1d3728]/90 text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md backdrop-blur-xs">
                  Over 30 Flavours
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif-heading font-bold text-base text-[#1d3728] mb-1">
                    Artisan Tubs &amp; Waffle Cones
                  </h4>
                  <p className="text-xs text-[#526354] leading-relaxed">
                    Freshly churned in Skipsea with whole milk and real double cream. Enjoy in crispy waffle cones or take home insulated tubs.
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-[#e8ddcb]/80 flex items-center justify-between text-[11px] text-[#718274]">
                  <span>Parlour Counter</span>
                  <span className="font-semibold text-[#1d3728]">From £3.20</span>
                </div>
              </div>
            </div>

            {/* 4. Sunny Farm Courtyard Terrace */}
            <div className="group bg-[#f6f0e4] rounded-2xl overflow-hidden border border-[#e8ddcb] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={ASSETS.cafeTerrace}
                  alt="Mr Moo's farmhouse cafe outdoor terrace and picnic tables"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#881326]/90 text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md backdrop-blur-xs">
                  Outdoor Seating
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif-heading font-bold text-base text-[#1d3728] mb-1">
                    Garden Terrace &amp; Veranda
                  </h4>
                  <p className="text-xs text-[#526354] leading-relaxed">
                    Savour teas, coffees and sundaes on our sunny outdoor picnic benches surrounded by flower planters and fresh East Yorkshire sea breezes.
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-[#e8ddcb]/80 flex items-center justify-between text-[11px] text-[#718274]">
                  <span>Dog-Friendly Area</span>
                  <span className="font-semibold text-[#1d3728]">Walk-ins Welcome</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Children's & Dog Friendly Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#f6f0e4] border border-[#e8ddcb] rounded-3xl p-6 md:p-8">
          <div className="space-y-3">
            <h4 className="font-serif-heading font-bold text-xl text-[#1d3728]">
              Children&rsquo;s Favourites
            </h4>
            <p className="text-xs text-[#526354] leading-relaxed">
              We welcome families of all generations! Smaller appetites can enjoy mini sausage &amp; mash, half-portion breakfast plates, novelty animal sundaes with sweet popping candy, and fruit cartons. High chairs and baby-change facilities available.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-serif-heading font-bold text-xl text-[#1d3728]">
              Dog-Friendly Café &amp; Doggy Tubs
            </h4>
            <p className="text-xs text-[#526354] leading-relaxed">
              Dogs on leads are warmly welcomed in our outdoor garden terrace and designated covered veranda seating. Pick up a lactose-free Peanut &amp; Banana or Apple &amp; Carrot doggy ice cream tub for your four-legged companion!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
