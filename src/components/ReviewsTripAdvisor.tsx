import React from 'react';
import { Star } from 'lucide-react';
import { AUTHENTIC_REVIEWS } from '../data/dairyData';

// Hand-drawn sketch illustrations for left & right borders matching the mockup
const LighthouseCoastSketch: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 240 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Lighthouse tower */}
    <path d="M42 140 L48 50 L64 50 L70 140 Z" stroke="#3d5743" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M46 72 L66 72 M44 95 L68 95 M43 118 L69 118" stroke="#3d5743" strokeWidth="1.2" />
    {/* Lantern room & gallery */}
    <rect x="46" y="38" width="20" height="12" rx="1" stroke="#3d5743" strokeWidth="1.6" />
    <path d="M44 38 L68 38 M44 50 L68 50" stroke="#3d5743" strokeWidth="1.6" />
    {/* Dome cap and spire */}
    <path d="M48 38 C48 30, 64 30, 64 38 Z" stroke="#3d5743" strokeWidth="1.6" fill="none" />
    <line x1="56" y1="30" x2="56" y2="24" stroke="#3d5743" strokeWidth="1.8" />
    {/* Light rays */}
    <line x1="68" y1="44" x2="105" y2="35" stroke="#3d5743" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
    <line x1="68" y1="48" x2="115" y2="52" stroke="#3d5743" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
    {/* Cliff rocks & headland */}
    <path d="M10 165 C30 150, 45 152, 60 148 C75 144, 90 152, 110 146 C130 140, 160 155, 185 150 C210 146, 230 158, 240 165" stroke="#3d5743" strokeWidth="1.8" />
    <path d="M25 168 C50 162, 85 165, 120 160 C155 155, 195 165, 230 162" stroke="#3d5743" strokeWidth="1.2" opacity="0.7" />
    {/* Grass tufts & daisies */}
    <path d="M85 146 C86 138, 88 132, 92 128 M90 146 C93 136, 97 132, 102 130" stroke="#3d5743" strokeWidth="1.4" />
    <circle cx="106" cy="126" r="3" stroke="#3d5743" strokeWidth="1.2" />
    <path d="M106 120 L106 123 M106 129 L106 132 M100 126 L103 126 M109 126 L112 126" stroke="#3d5743" strokeWidth="1.2" />
    {/* Rolling ocean waves */}
    <path d="M5 174 C15 171, 25 171, 35 174 C45 177, 55 177, 65 174 C75 171, 85 171, 95 174" stroke="#3d5743" strokeWidth="1.4" opacity="0.75" />
    <path d="M40 178 C52 176, 62 176, 75 178 C88 180, 98 180, 110 178" stroke="#3d5743" strokeWidth="1.2" opacity="0.5" />
  </svg>
);

const CottageDaisiesSketch: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 240 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Farmhouse Cottage */}
    <path d="M140 142 L140 110 L165 92 L190 110 L190 142 Z" stroke="#3d5743" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M190 110 L230 110 L230 142 L190 142" stroke="#3d5743" strokeWidth="1.8" />
    <path d="M165 92 L205 92 L230 110" stroke="#3d5743" strokeWidth="1.8" />
    {/* Chimney */}
    <rect x="146" y="86" width="8" height="16" stroke="#3d5743" strokeWidth="1.5" />
    {/* Door & Windows */}
    <rect x="158" y="122" width="12" height="20" stroke="#3d5743" strokeWidth="1.4" />
    <rect x="146" y="114" width="8" height="10" stroke="#3d5743" strokeWidth="1.2" />
    <rect x="174" y="114" width="8" height="10" stroke="#3d5743" strokeWidth="1.2" />
    <rect x="202" y="116" width="14" height="12" stroke="#3d5743" strokeWidth="1.2" />
    {/* Windmill blades in distance */}
    <path d="M228 92 L234 68 L240 92 Z" stroke="#3d5743" strokeWidth="1.2" opacity="0.7" />
    <line x1="234" y1="74" x2="220" y2="60" stroke="#3d5743" strokeWidth="1.2" opacity="0.7" />
    <line x1="234" y1="74" x2="248" y2="88" stroke="#3d5743" strokeWidth="1.2" opacity="0.7" />
    {/* Wild Daisies & Flora in foreground */}
    <path d="M30 148 C32 135, 42 120, 52 112" stroke="#3d5743" strokeWidth="1.6" />
    <circle cx="54" cy="110" r="4.5" stroke="#3d5743" strokeWidth="1.5" />
    {/* Daisy petals */}
    <ellipse cx="54" cy="100" rx="2.5" ry="5.5" stroke="#3d5743" strokeWidth="1.2" />
    <ellipse cx="54" cy="120" rx="2.5" ry="5.5" stroke="#3d5743" strokeWidth="1.2" />
    <ellipse cx="44" cy="110" rx="5.5" ry="2.5" stroke="#3d5743" strokeWidth="1.2" />
    <ellipse cx="64" cy="110" rx="5.5" ry="2.5" stroke="#3d5743" strokeWidth="1.2" />
    {/* Second daisy */}
    <path d="M70 152 C74 140, 85 130, 96 125" stroke="#3d5743" strokeWidth="1.4" />
    <circle cx="98" cy="123" r="3.5" stroke="#3d5743" strokeWidth="1.4" />
    {/* Ground contour & stones */}
    <path d="M10 162 C50 155, 95 160, 140 152 C175 146, 215 152, 240 158" stroke="#3d5743" strokeWidth="1.8" />
  </svg>
);

export const ReviewsTripAdvisor: React.FC = () => {
  const topReviews = AUTHENTIC_REVIEWS.slice(0, 3);

  return (
    <section className="w-full bg-farmhouse-canvas py-14 md:py-20 relative overflow-hidden border-b border-[#e8ddcb]">
      {/* Hand-drawn coastal lighthouse sketch on left border */}
      <div className="absolute bottom-2 left-0 sm:left-2 w-40 sm:w-56 md:w-64 opacity-65 pointer-events-none select-none z-0">
        <LighthouseCoastSketch className="w-full h-auto" />
      </div>

      {/* Hand-drawn cottage & wild daisies sketch on right border */}
      <div className="absolute bottom-2 right-0 sm:right-2 w-40 sm:w-56 md:w-64 opacity-65 pointer-events-none select-none z-0">
        <CottageDaisiesSketch className="w-full h-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#881326] uppercase block mb-1">
            – Authentic TripAdvisor Reviews –
          </span>
          <h2 className="font-serif-heading font-bold text-3xl sm:text-4xl text-[#1d3728] tracking-tight mb-2">
            Friends of Mr Moo’s
          </h2>
          <p className="text-xs sm:text-sm text-[#556758] font-normal">
            Over 20 years of smiles, generous scoops, and sunny memories on the East Yorkshire coast.
          </p>
        </div>

        {/* Reviews Grid + TripAdvisor summary card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* 3 Testimonials (lg:col-span-9, 3 cols) */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-4">
            {topReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-farmhouse-card rounded-2xl p-5 shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1 mb-3 text-[#d97706]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#d97706]" />
                    ))}
                  </div>

                  <p className="text-xs text-[#3f5043] leading-relaxed italic mb-4">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-[#e2d5c1] flex items-center justify-between text-[11px] text-[#69796c]">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#1d3728] text-white flex items-center justify-center font-bold text-[10px]">
                      {rev.author[0]}
                    </div>
                    <div>
                      <span className="font-bold text-[#1d3728] block">{rev.author}</span>
                      <span className="text-[10px] text-[#7d8f80]">{rev.date}</span>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-semibold text-[#881326]">
                    TripAdvisor
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* TripAdvisor & Google Badge Card (lg:col-span-3) */}
          <div className="lg:col-span-3 bg-farmhouse-card rounded-2xl p-6 shadow-xs flex flex-col items-center justify-center text-center">
            {/* TripAdvisor Owl Logo Style */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#00aa6c] flex items-center justify-center text-white font-black text-sm">
                🦉
              </div>
              <span className="font-serif-heading font-black text-xl text-[#1d3728]">
                Tripadvisor
              </span>
            </div>

            {/* 5 Green Rating circles */}
            <div className="flex items-center gap-1.5 my-2">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="w-3.5 h-3.5 rounded-full bg-[#00aa6c] border border-[#008f5a] inline-block"
                />
              ))}
            </div>

            <div className="font-serif-heading font-bold text-3xl text-[#1d3728] my-1">
              4.5 <span className="text-base text-[#69796c] font-normal">/ 5</span>
            </div>

            <p className="text-xs text-[#526354] leading-tight mb-3">
              Based on 620+ authentic traveller reviews
            </p>

            <div className="w-full pt-3 border-t border-[#e2d5c1] text-[11px] text-[#69796c]">
              <span className="font-medium text-[#1d3728]">Google Maps:</span> 4.7 ★ (2,628+ reviews)
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
