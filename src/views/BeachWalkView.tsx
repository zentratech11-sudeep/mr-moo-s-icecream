import React from 'react';
import { Waves, MapPin, Compass, ShieldCheck, Heart, Footprints, AlertCircle, ArrowRight } from 'lucide-react';
import { ASSETS } from '../data/assets';
import { ActivePage } from '../components/Header';
import { DaisyIcon } from '../components/Logo';

interface BeachWalkViewProps {
  onNavigate: (page: ActivePage) => void;
}

export const BeachWalkView: React.FC<BeachWalkViewProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#faf7f0] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Editorial Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-[#881326]" />
            <span className="text-xs font-bold tracking-[0.25em] text-[#881326] uppercase">
              Skipsea Coastal Path
            </span>
            <span className="h-px w-8 bg-[#881326]" />
          </div>
          <h1 className="font-serif-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#1d3728] tracking-tight mb-3">
            The Idyllic Beach Walk
          </h1>
          <p className="text-sm md:text-base text-[#4f6052] leading-relaxed">
            One of the highlights of visiting Mr Moo&rsquo;s is our private permissive farm walkway. Stroll straight from our free car park across peaceful cow pastures down to the wide open sands of Skipsea beach.
          </p>
        </div>

        {/* Hero split with beach photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border-4 border-white shadow-md aspect-16/10 relative group">
            <img
              src={ASSETS.beachPath}
              alt="Coastal path from Mr Moo's down to Skipsea beach and North Sea waves"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-5 right-5 text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-[#e5be49]">
                Permissive Farm Trail
              </span>
              <h3 className="font-serif-heading font-bold text-xl md:text-2xl">
                Skipsea Sand &amp; Shingle Shoreline
              </h3>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start gap-4">
            <div className="flex items-center gap-2 bg-[#f6f0e4] border border-[#e8ddcb] px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#1d3728]">
              <Footprints className="w-4 h-4 text-[#881326]" />
              <span>10–15 Minutes Gentle Walk (approx. 800m)</span>
            </div>

            <h2 className="font-serif-heading font-bold text-2xl sm:text-3xl text-[#1d3728] leading-tight">
              From Parlour to Tide in Minutes
            </h2>
            <p className="text-sm text-[#47574b] leading-relaxed">
              Before or after treating yourself to sundaes, grab a takeaway coffee and follow the clearly signposted trail. The path meanders alongside wildflowers, hedgerows, and our friendly dairy cattle, offering sweeping panoramas of the North Sea coastline.
            </p>

            <div className="space-y-3 w-full pt-2">
              <div className="flex items-start gap-3 bg-[#f6f0e4] border border-[#e8ddcb] rounded-2xl p-4">
                <Heart className="w-5 h-5 text-[#881326] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif-heading font-bold text-sm text-[#1d3728]">100% Dog Friendly Year-Round</h4>
                  <p className="text-xs text-[#526354]">Unlike many town beaches, Skipsea beach has no summer dog bans. Pups love racing across the low-tide sands!</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#f6f0e4] border border-[#e8ddcb] rounded-2xl p-4">
                <Waves className="w-5 h-5 text-[#1d3728] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif-heading font-bold text-sm text-[#1d3728]">Dedicated Dog Wash Station</h4>
                  <p className="text-xs text-[#526354]">Convenient warm rinse station in our car park so you can clean sandy and muddy paws before jumping back into the car.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trail Guidelines & Safe Walking Tips */}
        <div className="bg-[#f6f0e4] border border-[#e8ddcb] rounded-3xl p-8 md:p-12 mb-16 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-serif-heading font-bold text-2xl md:text-3xl text-[#1d3728] mb-2">
              Trail Guide &amp; Countryside Etiquette
            </h3>
            <p className="text-xs md:text-sm text-[#5a6b5e]">
              A few simple courtesies to help preserve our working farm and coastal wildlife.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#e8ddcb]">
              <span className="font-serif-heading font-bold text-lg text-[#1d3728] block mb-2">
                1. Dogs on Leads in Fields
              </span>
              <p className="text-xs text-[#536556] leading-relaxed">
                Please keep dogs on short leads while passing through pastures where our cows and calves graze. Once on the open beach, dogs are free to run off-lead safely.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#e8ddcb]">
              <span className="font-serif-heading font-bold text-lg text-[#1d3728] block mb-2">
                2. Check Tide Times
              </span>
              <p className="text-xs text-[#536556] leading-relaxed">
                Low tide exposes wide, firm golden sands and rockpools perfect for exploring and fossil hunting. High tide brings the water close to the clay cliffs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#e8ddcb]">
              <span className="font-serif-heading font-bold text-lg text-[#1d3728] block mb-2">
                3. Leave No Trace
              </span>
              <p className="text-xs text-[#536556] leading-relaxed">
                Please dispose of ice cream tubs, cups, and dog waste in the bins provided at the farm car park. Let’s keep our coastal haven pristine.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#1b3626] rounded-3xl p-8 md:p-10 text-white text-center flex flex-col items-center">
          <h3 className="font-serif-heading font-bold text-2xl md:text-3xl text-white mb-2">
            The Perfect Seaside Day Out
          </h3>
          <p className="text-sm text-emerald-100 max-w-lg mb-6">
            Park up for free, take the morning beach stroll, and reward yourself with a hot lunch or award-winning sundae on your return.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onNavigate('cafe')}
              className="bg-white text-[#1d3728] hover:bg-[#faf7f0] px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              See Our Café Menu
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#881326] text-white hover:bg-[#6e0d1d] px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Find Skipsea on Map
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
