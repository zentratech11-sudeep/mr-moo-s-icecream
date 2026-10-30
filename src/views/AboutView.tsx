import React from 'react';
import { Award, Heart, CheckCircle2, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { ASSETS } from '../data/assets';
import { ActivePage } from '../components/Header';
import { DaisyIcon } from '../components/Logo';

interface AboutViewProps {
  onNavigate: (page: ActivePage) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#faf7f0] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-[#881326]" />
            <span className="text-xs font-bold tracking-[0.25em] text-[#881326] uppercase">
              Our Family Farm &amp; Heritage
            </span>
            <span className="h-px w-8 bg-[#881326]" />
          </div>
          <h1 className="font-serif-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#1d3728] tracking-tight mb-4">
            From Pasture to Cone Since 2003
          </h1>
          <p className="text-sm md:text-base text-[#4f6052] leading-relaxed font-normal">
            Nestled on the ruggedly scenic East Yorkshire coastline at Skipsea, Mr Moo&rsquo;s was born from a simple belief: that the freshest whole milk, real double cream, and genuine family craftsmanship produce truly extraordinary ice cream.
          </p>
        </div>

        {/* Feature Split 1: Farm Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border-4 border-white shadow-md aspect-4/3 relative">
            <img
              src={ASSETS.dairyCows}
              alt="Cows grazing peacefully in East Yorkshire farm meadow"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 bg-[#14271c]/80 backdrop-blur-xs text-white px-3 py-1.5 rounded-xl text-xs font-medium">
              Southfield House Farm, Skipsea
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col items-start gap-4">
            <span className="text-[11px] font-bold tracking-widest text-[#881326] uppercase">
              Southfield House Farm
            </span>
            <h2 className="font-serif-heading font-bold text-2xl sm:text-3xl text-[#1d3728] leading-tight">
              A True Yorkshire Working Dairy
            </h2>
            <p className="text-sm text-[#47574a] leading-relaxed">
              In 2003, our family diversified our long-standing dairy farm to share the bounty of our herd directly with locals and visitors heading to the nearby coastline. Starting in a converted barn with just a handful of traditional churn recipes, word quickly spread about our rich, velvety scoops.
            </p>
            <p className="text-sm text-[#47574a] leading-relaxed">
              Today, while our parlour has grown to welcome visitors from all across the United Kingdom, our core values haven’t changed an inch. We still pasteurise, flavour, and churn every single tub right here on the farm, using 100% whole milk and luscious double cream.
            </p>

            <div className="grid grid-cols-2 gap-4 w-full pt-2">
              <div className="bg-[#f6f0e4] border border-[#e8ddcb] rounded-2xl p-4">
                <span className="font-serif-heading font-bold text-2xl text-[#1d3728] block">20+</span>
                <span className="text-xs text-[#526354]">Years of Artisan Churning</span>
              </div>
              <div className="bg-[#f6f0e4] border border-[#e8ddcb] rounded-2xl p-4">
                <span className="font-serif-heading font-bold text-2xl text-[#881326] block">30+</span>
                <span className="text-xs text-[#526354]">Award-Winning Flavours</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Dairy Craftsmanship */}
        <div className="bg-[#f6f0e4] border border-[#e8ddcb] rounded-3xl p-8 md:p-12 mb-16 shadow-xs">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-serif-heading font-bold text-2xl md:text-3xl text-[#1d3728] mb-2">
              The Three Mr Moo’s Commitments
            </h3>
            <p className="text-xs md:text-sm text-[#5a6b5e]">
              How we keep our scoops honest, rich, and unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#e8ddcb] shadow-2xs">
              <div className="w-10 h-10 rounded-full bg-[#1d3728] text-white flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5 text-[#e5be49]" />
              </div>
              <h4 className="font-serif-heading font-bold text-lg text-[#1d3728] mb-2">
                100% Real Dairy
              </h4>
              <p className="text-xs text-[#536556] leading-relaxed">
                No vegetable oils, synthetic emulsifiers or artificial bulkers. Just fresh whole milk and rich double cream that melts like velvet.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#e8ddcb] shadow-2xs">
              <div className="w-10 h-10 rounded-full bg-[#1d3728] text-white flex items-center justify-center mb-4">
                <Heart className="w-5 h-5 text-[#881326]" />
              </div>
              <h4 className="font-serif-heading font-bold text-lg text-[#1d3728] mb-2">
                Happy, Pasture-Fed Cows
              </h4>
              <p className="text-xs text-[#536556] leading-relaxed">
                Our British Friesian herd graze across rich coastal grasses, free to roam the open pastures of the Holderness plain.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#e8ddcb] shadow-2xs">
              <div className="w-10 h-10 rounded-full bg-[#1d3728] text-white flex items-center justify-center mb-4">
                <Award className="w-5 h-5 text-[#e5be49]" />
              </div>
              <h4 className="font-serif-heading font-bold text-lg text-[#1d3728] mb-2">
                Authentic Yorkshire Flavours
              </h4>
              <p className="text-xs text-[#536556] leading-relaxed">
                From hand-rippled Yorkshire rhubarb to dark Belgian chocolate curls and toasted pistachios, we only use top-grade ingredients.
              </p>
            </div>
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="font-serif-heading font-bold text-2xl text-center text-[#1d3728] mb-8">
            Our Journey Over Two Decades
          </h3>

          <div className="space-y-6 relative border-l-2 border-[#1d3728]/20 pl-6 ml-4">
            <div className="relative">
              <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#1d3728] border-2 border-white" />
              <span className="text-xs font-bold text-[#881326] uppercase">2003</span>
              <h4 className="font-serif-heading font-bold text-lg text-[#1d3728]">The First Scoop</h4>
              <p className="text-xs text-[#536556]">Diversifying the family dairy farm with an artisan batch freezer and our original 6 churned recipes.</p>
            </div>

            <div className="relative">
              <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#1d3728] border-2 border-white" />
              <span className="text-xs font-bold text-[#881326] uppercase">2008</span>
              <h4 className="font-serif-heading font-bold text-lg text-[#1d3728]">The Coastal Footpath Opened</h4>
              <p className="text-xs text-[#536556]">Created the dedicated permissive farm path connecting our car park directly to Skipsea beach.</p>
            </div>

            <div className="relative">
              <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#1d3728] border-2 border-white" />
              <span className="text-xs font-bold text-[#881326] uppercase">2014</span>
              <h4 className="font-serif-heading font-bold text-lg text-[#1d3728]">Café Expansion &amp; Breakfasts</h4>
              <p className="text-xs text-[#536556]">Launched the Full Yorkshire Farmhouse breakfasts and Mighty Moo plates using local butcher sausages.</p>
            </div>

            <div className="relative">
              <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#1d3728] border-2 border-white" />
              <span className="text-xs font-bold text-[#881326] uppercase">Present Day</span>
              <h4 className="font-serif-heading font-bold text-lg text-[#1d3728]">Over 30 Flavours &amp; Doggy Tubs</h4>
              <p className="text-xs text-[#536556]">Proudly welcoming over 50,000 visitors annually, with outdoor seating, caravan pitches, and warm dog-wash amenities.</p>
            </div>
          </div>
        </div>

        {/* CTA banner */}
        <div className="bg-[#1b3626] rounded-3xl p-8 md:p-10 text-white text-center flex flex-col items-center">
          <DaisyIcon className="w-8 h-8 mb-3" />
          <h3 className="font-serif-heading font-bold text-2xl md:text-3xl text-white mb-2">
            Come and Taste the Difference
          </h3>
          <p className="text-sm text-emerald-100 max-w-lg mb-6">
            We are open 7 days a week from 10:00 AM to 4:30 PM. Free parking, dog-friendly seating, and scenic beach walks await.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onNavigate('cafe')}
              className="bg-white text-[#1d3728] hover:bg-[#faf7f0] px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Explore Our Café
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#881326] text-white hover:bg-[#6e0d1d] px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Get Directions
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
