import React, { useState } from 'react';
import { Images, X, ZoomIn, ArrowRight } from 'lucide-react';
import { ASSETS } from '../data/assets';
import { ActivePage } from '../components/Header';

interface GalleryViewProps {
  onNavigate: (page: ActivePage) => void;
}

interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  category: 'parlour' | 'sundaes' | 'farm' | 'beach';
  categoryLabel: string;
  caption: string;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);

  const photos: GalleryPhoto[] = [
    {
      id: 'p1',
      src: ASSETS.sundaeGlory,
      title: "Famous Knickerbocker Glory",
      category: 'sundaes',
      categoryLabel: 'Artisan Sundaes',
      caption: 'Layered with fresh British strawberries, farm clotted cream vanilla and strawberry ice creams, whipped cream, wafer fan and Cadbury flake.',
    },
    {
      id: 'p2',
      src: ASSETS.dairyCows,
      title: "The Southfield Dairy Herd",
      category: 'farm',
      categoryLabel: 'Southfield Dairy Farm',
      caption: 'Our British Friesian herd grazing on lush pastures overlooking the East Yorkshire coastline.',
    },
    {
      id: 'p3',
      src: ASSETS.farmhouseBreakfast,
      title: "The Mighty Moo Breakfast",
      category: 'parlour',
      categoryLabel: 'Parlour & Café',
      caption: 'Hearty full Yorkshire farmhouse breakfast served fresh every morning from 10:00 AM till 12:00 PM.',
    },
    {
      id: 'p4',
      src: ASSETS.beachPath,
      title: "The Skipsea Coastal Footpath",
      category: 'beach',
      categoryLabel: 'Skipsea Beach & Trail',
      caption: 'The idyllic permissive farm footpath connecting our car park directly to Skipsea sand and shingle beach.',
    },
    {
      id: 'p5',
      src: ASSETS.iceCreamTubs,
      title: "Artisan Tubs & Fresh Waffle Cones",
      category: 'sundaes',
      categoryLabel: 'Artisan Sundaes',
      caption: 'Over 30 flavours churned in small batches with whole milk and real double cream.',
    },
    {
      id: 'p6',
      src: ASSETS.dairyCows,
      title: "Morning in the Meadows",
      category: 'farm',
      categoryLabel: 'Southfield Dairy Farm',
      caption: 'Quiet morning sunrise over the Holderness plain at Southfield House Farm.',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'parlour', label: 'Parlour & Café' },
    { id: 'sundaes', label: 'Artisan Sundaes' },
    { id: 'farm', label: 'The Dairy Farm' },
    { id: 'beach', label: 'Beach & Coastal Path' },
  ];

  const filteredPhotos = photos.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  return (
    <div className="w-full bg-[#faf7f0] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Editorial Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-[#881326]" />
            <span className="text-xs font-bold tracking-[0.25em] text-[#881326] uppercase">
              Moments at Mr Moo’s
            </span>
            <span className="h-px w-8 bg-[#881326]" />
          </div>
          <h1 className="font-serif-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#1d3728] tracking-tight mb-3">
            Café &amp; Parlour Gallery
          </h1>
          <p className="text-sm md:text-base text-[#4f6052] leading-relaxed">
            A glimpse into our farmhouse life: friendly cows grazing green pastures, sunny breakfasts in the parlour garden, and towering sundaes enjoyed after a stroll to the sea.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#1d3728] text-white shadow-2xs'
                  : 'bg-[#f6f0e4] border border-[#e8ddcb] text-[#4d5e50] hover:bg-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setLightboxPhoto(photo)}
              className="bg-[#f6f0e4] border border-[#e8ddcb] rounded-3xl overflow-hidden shadow-2xs hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <div className="bg-[#14271c]/80 backdrop-blur-xs px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>View Full Size</span>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <span className="text-[10px] font-bold tracking-widest text-[#881326] uppercase block mb-1">
                  {photo.categoryLabel}
                </span>
                <h3 className="font-serif-heading font-bold text-lg text-[#1d3728] mb-1">
                  {photo.title}
                </h3>
                <p className="text-xs text-[#526354] leading-relaxed line-clamp-2">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxPhoto && (
        <div
          onClick={() => setLightboxPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#faf7f0] rounded-3xl overflow-hidden max-w-3xl w-full border border-stone-700 shadow-2xl relative"
          >
            <button
              onClick={() => setLightboxPhoto(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
              aria-label="Close photo"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-16/10 bg-black overflow-hidden flex items-center justify-center">
              <img
                src={lightboxPhoto.src}
                alt={lightboxPhoto.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 bg-[#faf7f0]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#881326]">
                {lightboxPhoto.categoryLabel}
              </span>
              <h3 className="font-serif-heading font-bold text-2xl text-[#1d3728] mt-0.5 mb-2">
                {lightboxPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#4f6052] leading-relaxed">
                {lightboxPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
