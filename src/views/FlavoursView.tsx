import React, { useState, useMemo } from 'react';
import {
  Search,
  Sparkles,
  Award,
  Filter,
  Check,
  X,
  Info,
  ShoppingBag,
  ArrowRight,
  Heart,
} from 'lucide-react';
import { ALL_FLAVOURS } from '../data/dairyData';
import {
  IceCreamFlavour,
  filterFlavours,
  calculateServingPrice,
  ICE_CREAM_PRICES,
} from '../utils/dairyBusiness';
import { ASSETS } from '../data/assets';
import { DaisyIcon } from '../components/Logo';
import { ActivePage } from '../components/Header';

interface FlavoursViewProps {
  onNavigate: (page: ActivePage) => void;
}

export const FlavoursView: React.FC<FlavoursViewProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');
  const [selectedFlavour, setSelectedFlavour] = useState<IceCreamFlavour | null>(null);

  // Calculator State
  const [calculatorScoops, setCalculatorScoops] = useState<1 | 2 | 3>(2);
  const [calculatorWaffle, setCalculatorWaffle] = useState(true);
  const [calculatorFlake, setCalculatorFlake] = useState(true);
  const [calculatorFudge, setCalculatorFudge] = useState(false);

  const categories = [
    { id: 'all', label: 'All 30+ Flavours' },
    { id: 'traditional', label: 'Classic Farmhouse' },
    { id: 'fruity', label: 'Berry & Orchard' },
    { id: 'chocolate', label: 'Chocolate & Coffee' },
    { id: 'nutty', label: 'Nutty & Caramel' },
    { id: 'vegan', label: 'Plant-Based & Sorbets' },
    { id: 'doggy', label: 'Doggy Ice Creams' },
  ];

  const dietaryOptions = [
    { id: 'all', label: 'All Diets' },
    { id: 'gluten-free', label: 'Gluten-Free' },
    { id: 'vegan', label: 'Vegan / Dairy-Free' },
    { id: 'vegetarian', label: 'Vegetarian' },
  ];

  const filteredFlavours = useMemo(() => {
    return filterFlavours(ALL_FLAVOURS, searchQuery, selectedCategory, dietaryFilter);
  }, [searchQuery, selectedCategory, dietaryFilter]);

  const calculatedPrice = useMemo(() => {
    return calculateServingPrice(
      calculatorScoops,
      calculatorWaffle,
      calculatorFlake,
      calculatorFudge
    );
  }, [calculatorScoops, calculatorWaffle, calculatorFlake, calculatorFudge]);

  return (
    <div className="w-full bg-[#faf7f0] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Editorial Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-[#881326]" />
            <span className="text-xs font-bold tracking-[0.25em] text-[#881326] uppercase">
              Handcrafted on Southfield House Farm
            </span>
            <span className="h-px w-8 bg-[#881326]" />
          </div>
          <h1 className="font-serif-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#1d3728] tracking-tight mb-3">
            The Flavour Collection
          </h1>
          <p className="text-sm md:text-base text-[#4f6052] leading-relaxed">
            Every batch begins with whole milk and real double cream from local Yorkshire farms. Discover over 30 authentic recipes, from timeless Clotted Cream Vanilla to our Great Taste award-winning Yorkshire Rhubarb &amp; Ginger.
          </p>
        </div>

        {/* Feature Hero Banner */}
        <div className="rounded-3xl overflow-hidden border-4 border-white shadow-md mb-12 relative aspect-21/9 hidden md:block">
          <img
            src={ASSETS.iceCreamTubs}
            alt="Artisanal ice cream cones and tubs on picnic table in East Yorkshire"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#14271c]/90 via-[#14271c]/40 to-transparent flex items-center p-8 lg:p-12">
            <div className="max-w-md text-white">
              <span className="text-xs font-bold tracking-widest uppercase text-[#e5be49] block mb-1">
                Real Dairy Excellence
              </span>
              <h2 className="font-serif-heading font-bold text-2xl lg:text-3xl mb-2">
                Pure Double Cream &amp; Whole Milk
              </h2>
              <p className="text-xs lg:text-sm text-stone-200 leading-relaxed mb-4">
                No vegetable shortenings. No artificial fluffing. Just authentic Yorkshire farm ice cream with a dense, silky churn.
              </p>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xs px-3.5 py-1.5 rounded-full text-xs font-medium">
                <span>30+ Flavours in Parlour Daily</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="bg-[#f6f0e4] border border-[#e8ddcb] rounded-3xl p-6 md:p-8 mb-10 shadow-xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#758677]" />
              <input
                type="text"
                placeholder="Search flavours (e.g. Rhubarb, Pistachio, Honeycomb)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-[#d8cdba] focus:border-[#1d3728] focus:ring-1 focus:ring-[#1d3728] rounded-full pl-10 pr-4 py-2 text-xs md:text-sm text-[#1d3728] placeholder-[#7d8f80] outline-hidden transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 transform -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dietary Dropdown/Toggle */}
            <div className="flex items-center gap-2 self-start md:self-auto w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
              <span className="text-xs text-[#5f7162] font-medium shrink-0">Dietary:</span>
              {dietaryOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setDietaryFilter(opt.id)}
                  className={`px-3 py-1.5 rounded-full text-xs transition-colors shrink-0 cursor-pointer ${
                    dietaryFilter === opt.id
                      ? 'bg-[#1d3728] text-white font-medium'
                      : 'bg-white border border-[#d8cdba] text-[#556758] hover:border-[#1d3728]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#e2d6c3]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#881326] text-white font-semibold shadow-2xs'
                    : 'bg-white/80 hover:bg-white text-[#4a5a4d] border border-[#e0d6c5]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Flavours Results Count */}
        <div className="flex items-center justify-between text-xs text-[#526354] mb-6 px-1">
          <span>
            Showing <strong className="text-[#1d3728]">{filteredFlavours.length}</strong> delicious flavour{filteredFlavours.length === 1 ? '' : 's'}
          </span>
          <span className="text-[11px] text-[#718273]">
            Tap any flavour for allergens &amp; takeaway tub sizes
          </span>
        </div>

        {/* Flavours 3-Column Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredFlavours.map((flavour) => (
            <div
              key={flavour.id}
              onClick={() => setSelectedFlavour(flavour)}
              className="bg-[#f6f0e4] border border-[#e8ddcb] hover:border-[#881326]/40 rounded-3xl p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold tracking-widest text-[#881326] uppercase">
                      {flavour.category.toUpperCase()}
                    </span>
                    <h3 className="font-serif-heading font-bold text-lg md:text-xl text-[#1d3728] group-hover:text-[#881326] transition-colors leading-snug">
                      {flavour.name}
                    </h3>
                  </div>

                  {flavour.isAwardWinner && (
                    <span
                      title="Great Taste Award Winner"
                      className="bg-[#c59b27] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 flex items-center gap-1 shadow-2xs"
                    >
                      <Award className="w-3 h-3" />
                      <span>Award</span>
                    </span>
                  )}
                </div>

                <p className="text-xs text-[#526354] leading-relaxed mb-4">
                  {flavour.description}
                </p>
              </div>

              <div>
                {/* Dietary Tags unboxed per Frontend Design Rule 1A */}
                <div className="flex items-center gap-2 text-[11px] text-[#637566] py-2 border-t border-[#e8ddcb]">
                  <span>Rating: {flavour.rating.toFixed(1)} ★</span>
                  <span aria-hidden="true">•</span>
                  <span>{flavour.dietary.join(', ')}</span>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs">
                  <span className="text-[#881326] font-semibold flex items-center gap-1 group-hover:underline">
                    <span>View Sizes &amp; Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  <span className="font-bold text-[#1d3728]">From £3.20</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Producing Top Quality Ice Cream Section */}
        <div className="bg-farmhouse-card rounded-3xl p-6 md:p-10 mb-16 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#881326] uppercase block mb-1">
              – Southfield House Farm Standards –
            </span>
            <h3 className="font-serif-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#1d3728] mb-2 leading-tight">
              Producing Top Quality Ice Cream
            </h3>
            <p className="text-xs sm:text-sm text-[#526354] leading-relaxed">
              At Mr Moo’s, we pride ourselves on producing top-quality, old-fashioned dairy ice cream made with fresh whole milk and rich double cream sourced from local Yorkshire farms. We believe in honest, pure ingredients with no artificial colours or flavourings.
            </p>
          </div>

          {/* 4 Pillars of Top Quality Ice Cream */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            <div className="bg-white rounded-2xl p-5 border border-[#e8ddcb] flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#1d3728] text-white flex items-center justify-center mb-3">
                  <Heart className="w-5 h-5 text-[#e5be49]" />
                </div>
                <h4 className="font-serif-heading font-bold text-base text-[#1d3728] mb-1.5">
                  Fresh Whole Milk &amp; Double Cream
                </h4>
                <p className="text-xs text-[#526354] leading-relaxed">
                  Sourced directly from local Yorkshire dairy farms, delivering a luxurious milk-fat profile that melts slowly and smoothly on the tongue.
                </p>
              </div>
              <span className="text-[10px] uppercase font-bold text-[#881326] tracking-wider pt-3 mt-3 border-t border-[#f0e7d8]">
                100% Real Dairy
              </span>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#e8ddcb] flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#1d3728] text-white flex items-center justify-center mb-3">
                  <Sparkles className="w-5 h-5 text-[#e5be49]" />
                </div>
                <h4 className="font-serif-heading font-bold text-base text-[#1d3728] mb-1.5">
                  No Artificial Colours or Flavours
                </h4>
                <p className="text-xs text-[#526354] leading-relaxed">
                  Every ripple, infusion, and crunch comes from real ingredients: natural Bourbon vanilla pods, simmered Yorkshire rhubarb, roasted nuts, and fine Belgian cocoa.
                </p>
              </div>
              <span className="text-[10px] uppercase font-bold text-[#881326] tracking-wider pt-3 mt-3 border-t border-[#f0e7d8]">
                Pure &amp; Natural
              </span>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#e8ddcb] flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#1d3728] text-white flex items-center justify-center mb-3">
                  <Award className="w-5 h-5 text-[#e5be49]" />
                </div>
                <h4 className="font-serif-heading font-bold text-base text-[#1d3728] mb-1.5">
                  Small-Batch Farm Churning
                </h4>
                <p className="text-xs text-[#526354] leading-relaxed">
                  Churned slowly right here on the farm with minimal overrun (aeration) for a dense, decadently scoopable texture rather than airy whipped froth.
                </p>
              </div>
              <span className="text-[10px] uppercase font-bold text-[#881326] tracking-wider pt-3 mt-3 border-t border-[#f0e7d8]">
                Artisan Technique
              </span>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#e8ddcb] flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#1d3728] text-white flex items-center justify-center mb-3">
                  <Check className="w-5 h-5 text-[#e5be49]" />
                </div>
                <h4 className="font-serif-heading font-bold text-base text-[#1d3728] mb-1.5">
                  Award-Winning Heritage
                </h4>
                <p className="text-xs text-[#526354] leading-relaxed">
                  Established in 2003, our flavours have won Great Taste Awards, SALSA food-safety certification, and the loyalty of thousands of seaside visitors.
                </p>
              </div>
              <span className="text-[10px] uppercase font-bold text-[#881326] tracking-wider pt-3 mt-3 border-t border-[#f0e7d8]">
                Over 20 Years of Trust
              </span>
            </div>
          </div>

          {/* Quality Standards Strip */}
          <div className="bg-[#ede3d0] rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-around gap-4 text-center border border-[#dfd3be]">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#1d3728]">
              <span className="w-2 h-2 rounded-full bg-[#881326]" />
              <span>100% British Farm Fresh Milk</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#1d3728]">
              <span className="w-2 h-2 rounded-full bg-[#881326]" />
              <span>Real Double Cream (Zero Vegetable Oils)</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#1d3728]">
              <span className="w-2 h-2 rounded-full bg-[#881326]" />
              <span>Great Taste Award Winning Recipes</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#1d3728]">
              <span className="w-2 h-2 rounded-full bg-[#881326]" />
              <span>SALSA Certified Producer</span>
            </div>
          </div>
        </div>

        {/* Interactive Custom Cone Builder & Price Calculator Widget */}
        <div className="bg-[#1b3626] rounded-3xl p-6 md:p-10 text-white shadow-lg relative overflow-hidden">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-bold tracking-widest text-[#e5be49] uppercase block mb-1">
                Interactive Parlour Calculator
              </span>
              <h3 className="font-serif-heading font-bold text-2xl md:text-3xl text-white">
                Build Your Dream Ice Cream Cone
              </h3>
              <p className="text-xs md:text-sm text-emerald-100 mt-1">
                Calculate your custom order before heading to our parlour scoop counter.
              </p>
            </div>

            <div className="bg-[#14291d] rounded-2xl p-6 border border-[#2b5139] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-5">
                {/* Scoops selector */}
                <div>
                  <label className="text-xs font-bold tracking-wide uppercase text-[#e5be49] block mb-2">
                    1. Number of Generous Scoops
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {([1, 2, 3] as const).map((num) => (
                      <button
                        key={num}
                        onClick={() => setCalculatorScoops(num)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          calculatorScoops === num
                            ? 'bg-[#881326] text-white shadow-sm'
                            : 'bg-[#1e3e2c] text-emerald-200 hover:bg-[#274f38]'
                        }`}
                      >
                        {num === 1 ? '1 Scoop' : num === 2 ? '2 Scoops' : '3 Scoops'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Cone Style */}
                <div>
                  <label className="text-xs font-bold tracking-wide uppercase text-[#e5be49] block mb-2">
                    2. Serving Style
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setCalculatorWaffle(false)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        !calculatorWaffle
                          ? 'bg-[#881326] text-white'
                          : 'bg-[#1e3e2c] text-emerald-200 hover:bg-[#274f38]'
                      }`}
                    >
                      Traditional Sugar Cone / Tub
                    </button>
                    <button
                      onClick={() => setCalculatorWaffle(true)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        calculatorWaffle
                          ? 'bg-[#881326] text-white'
                          : 'bg-[#1e3e2c] text-emerald-200 hover:bg-[#274f38]'
                      }`}
                    >
                      Crisp Waffle Cone (+£0.60)
                    </button>
                  </div>
                </div>

                {/* Toppings / Extras */}
                <div>
                  <label className="text-xs font-bold tracking-wide uppercase text-[#e5be49] block mb-2">
                    3. Farmhouse Toppings &amp; Curls
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setCalculatorFlake(!calculatorFlake)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                        calculatorFlake
                          ? 'bg-[#881326] text-white'
                          : 'bg-[#1e3e2c] text-emerald-200 hover:bg-[#274f38]'
                      }`}
                    >
                      <span>Cadbury Flake (+£0.50)</span>
                      {calculatorFlake && <Check className="w-3.5 h-3.5" />}
                    </button>

                    <button
                      onClick={() => setCalculatorFudge(!calculatorFudge)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                        calculatorFudge
                          ? 'bg-[#881326] text-white'
                          : 'bg-[#1e3e2c] text-emerald-200 hover:bg-[#274f38]'
                      }`}
                    >
                      <span>Fudge Stick (+£0.50)</span>
                      {calculatorFudge && <Check className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Price Output */}
              <div className="bg-[#1b3425] rounded-2xl p-6 border border-[#2e573c] text-center flex flex-col items-center justify-center">
                <span className="text-xs text-emerald-200 font-medium">Estimated Serving Total:</span>
                <span className="font-serif-heading font-black text-4xl sm:text-5xl text-white my-2 tabular-nums">
                  £{calculatedPrice.toFixed(2)}
                </span>
                <p className="text-[11px] text-[#97b5a1] mb-4">
                  Includes fresh parlour churn and classic wafer biscuit.
                </p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-[#e5be49] hover:bg-[#d4ad38] text-[#14271c] px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Visit the Scoop Counter
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Flavour Detail Modal */}
      {selectedFlavour && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-[#faf7f0] border border-[#e8ddcb] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setSelectedFlavour(null)}
              className="absolute top-4 right-4 p-2 text-[#566858] hover:text-[#1d3728] hover:bg-[#ede3d1] rounded-full transition-colors"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] font-bold tracking-widest text-[#881326] uppercase block mb-1">
              {selectedFlavour.category.toUpperCase()} • FLAVOUR PROFILE
            </span>

            <h3 className="font-serif-heading font-bold text-2xl text-[#1d3728] mb-2 leading-tight">
              {selectedFlavour.name}
            </h3>

            <p className="text-xs sm:text-sm text-[#47574b] leading-relaxed mb-5">
              {selectedFlavour.description}
            </p>

            {/* Allergens & Dietary Notice */}
            <div className="bg-[#f6f0e4] border border-[#e8ddcb] rounded-2xl p-4 mb-5 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#1d3728]">Dietary Compatibility:</span>
                <span className="text-[#556758]">{selectedFlavour.dietary.join(', ')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#1d3728]">Contains Allergens:</span>
                <span className="text-[#881326] font-medium">
                  {selectedFlavour.allergens.length > 0 ? selectedFlavour.allergens.join(', ') : 'None (Allergen-free)'}
                </span>
              </div>
            </div>

            {/* Available Serving Formats */}
            <div className="mb-6">
              <span className="text-xs font-bold text-[#1d3728] block mb-2">Available Formats in Parlour:</span>
              <div className="flex flex-wrap gap-1.5">
                {selectedFlavour.availableSizes.map((sz) => (
                  <span
                    key={sz}
                    className="bg-white border border-[#d8cdb9] text-[#4d5e51] px-2.5 py-1 rounded-lg text-xs"
                  >
                    {sz.replace('-', ' ').toUpperCase()}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setSelectedFlavour(null)}
              className="w-full bg-[#1d3728] hover:bg-[#14271c] text-white py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Back to Catalogue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
