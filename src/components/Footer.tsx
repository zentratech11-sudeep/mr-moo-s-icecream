import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Heart,
  Instagram,
  Facebook,
  Award,
} from 'lucide-react';
import { Logo } from './Logo';
import { ActivePage } from './Header';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: ActivePage) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#14271c] text-[#dce7df] pt-14 pb-8 relative overflow-hidden border-t-4 border-[#244733]">
      {/* Decorative pastoral top arch line */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-900 via-[#e5be49]/30 to-emerald-900 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main 4-column footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#284935]">
          {/* Column 1: Brand & Heritage (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start gap-5">
            <div className="bg-[#1b3626] p-4 rounded-2xl border border-[#2b5139] shadow-inner">
              <Logo variant="light" size="md" />
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#1f3c2b] hover:bg-[#881326] flex items-center justify-center text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#1f3c2b] hover:bg-[#881326] flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <button
                onClick={() => handleNav('home')}
                className="h-9 px-3.5 rounded-full bg-[#1f3c2b] hover:bg-[#881326] text-xs font-medium text-emerald-100 flex items-center gap-1.5 transition-colors"
                aria-label="TripAdvisor"
              >
                <Award className="w-4 h-4 text-[#e5be49]" />
                <span>TripAdvisor 4.5/5</span>
              </button>
            </div>

            <p className="font-script-accent text-[#d6cbb2] text-lg leading-snug italic max-w-sm">
              &ldquo;Crafted with fresh, whole milk and real, double cream sourced from local Yorkshire farms. Enjoyed by thousands since 2003.&rdquo;
            </p>
          </div>

          {/* Column 2: Explore (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-white font-serif-heading font-semibold text-lg tracking-wide border-b border-[#2e533c] pb-2">
              Explore
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-[#b9cdc1]">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors text-left"
                >
                  Homepage
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('cafe')}
                  className="hover:text-white transition-colors text-left"
                >
                  The Parlour &amp; Café
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('flavours')}
                  className="hover:text-white transition-colors text-left"
                >
                  Flavours Catalogue
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('beach')}
                  className="hover:text-white transition-colors text-left"
                >
                  Nearby Beach Walk
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('wholesale')}
                  className="hover:text-white transition-colors text-left"
                >
                  Wholesale Supply
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('caravan')}
                  className="hover:text-white transition-colors text-left"
                >
                  Caravan Site
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Opening Times (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-white font-serif-heading font-semibold text-lg tracking-wide border-b border-[#2e533c] pb-2">
              Opening Times
            </h4>

            {/* Framed highlight box */}
            <div className="bg-[#1b3425] border border-[#2d553b] rounded-xl p-4 flex flex-col gap-1.5 shadow-sm">
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#e5be49]">
                Parlour &amp; Café
              </span>
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Clock className="w-4 h-4 text-[#e5be49]" />
                <span>OPEN EVERYDAY</span>
              </div>
              <span className="text-sm text-emerald-100 font-medium">
                10:00AM – 4:30PM
              </span>
            </div>

            <div className="text-xs text-[#a5bfaf] space-y-1.5 pt-1">
              <p>
                <strong className="text-white">Breakfast Served:</strong> From opening till 12:00 PM
              </p>
              <p>
                <strong className="text-white">Last Order For Lunches:</strong> 2:00 PM
              </p>
              <p className="text-[11px] text-emerald-200/70 pt-1">
                Ice cream parlour, hot beverages &amp; cakes served until 4:30 PM.
              </p>
            </div>
          </div>

          {/* Column 4: Parlour Location & Contact (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-white font-serif-heading font-semibold text-lg tracking-wide border-b border-[#2e533c] pb-2">
              Parlour Location
            </h4>

            <div className="flex flex-col gap-3 text-sm text-[#c4d6cb]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e5be49] shrink-0 mt-1" />
                <span>
                  Mr Moo’s, Southfield House Farm, Hornsea Rd, Skipsea, Driffield YO25 8SY
                </span>
              </div>

              <a
                href="tel:+441262469829"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#e5be49] shrink-0" />
                <span className="font-semibold text-white">01262 469829</span>
              </a>

              <a
                href="https://mrmoos.co.uk"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4 text-[#e5be49] shrink-0" />
                <span>mrmoos.co.uk</span>
              </a>

              <a
                href="mailto:info@mrmoos.co.uk"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#e5be49] shrink-0" />
                <span>info@mrmoos.co.uk</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8da696]">
          <p>© 2024 Mr Moo’s Yorkshire Dairy Ice Cream, Southfield House Farm, Skipsea, East Yorkshire.</p>
          <div className="flex items-center gap-3 tracking-widest text-[11px] font-medium uppercase text-[#a2bca9]">
            <span>Editorial Content</span>
            <span>•</span>
            <span>Real Dairy Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
