import React, { useState } from 'react';
import { Package, Truck, Store, Award, Check, Send, ShoppingBag } from 'lucide-react';
import { ASSETS } from '../data/assets';
import { ActivePage } from '../components/Header';

interface WholesaleViewProps {
  onNavigate: (page: ActivePage) => void;
}

export const WholesaleView: React.FC<WholesaleViewProps> = ({ onNavigate }) => {
  const [tradeForm, setTradeForm] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: 'restaurant',
    location: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#faf7f0] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Editorial Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-[#881326]" />
            <span className="text-xs font-bold tracking-[0.25em] text-[#881326] uppercase">
              Trade &amp; Hospitality Supply
            </span>
            <span className="h-px w-8 bg-[#881326]" />
          </div>
          <h1 className="font-serif-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#1d3728] tracking-tight mb-3">
            Wholesale Yorkshire Dairy Ice Cream
          </h1>
          <p className="text-sm md:text-base text-[#4f6052] leading-relaxed">
            Partner with Mr Moo&rsquo;s to serve genuine, award-winning farmhouse ice cream at your restaurant, tearoom, farm shop, or coastal kiosk. Churned fresh in East Yorkshire with whole milk and real double cream.
          </p>
        </div>

        {/* Feature Split Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border-4 border-white shadow-md aspect-16/10 relative group">
            <img
              src={ASSETS.iceCreamTubs}
              alt="Mr Moo's wholesale tubs and Napoli pans for trade customers"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14271c]/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-5 right-5 text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-[#e5be49]">
                Trade Deliveries Across Yorkshire
              </span>
              <h3 className="font-serif-heading font-bold text-xl md:text-2xl">
                4.5L Napoli Pans &amp; 500ml Retail Tubs
              </h3>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col items-start gap-4">
            <span className="text-[10px] font-bold tracking-widest text-[#881326] uppercase">
              Why Stock Mr Moo’s
            </span>
            <h2 className="font-serif-heading font-bold text-2xl sm:text-3xl text-[#1d3728] leading-tight">
              A Proven Crowd Pleaser Since 2003
            </h2>
            <p className="text-sm text-[#47574b] leading-relaxed">
              Customers recognise and trust the Mr Moo’s name. From Michelin-recommended gastro pubs to seaside scoop bars, our high milk-fat content delivers superior texture, clean melting profile, and customer retention.
            </p>

            <div className="space-y-3 w-full pt-1">
              <div className="flex items-start gap-3 bg-[#f6f0e4] border border-[#e8ddcb] rounded-2xl p-4">
                <Store className="w-5 h-5 text-[#881326] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif-heading font-bold text-sm text-[#1d3728]">Turnkey Scoop Support</h4>
                  <p className="text-xs text-[#526354]">We supply branded freezer cabinets, engraved scooping wells, stainless cone dispensers, and wipe-clean flavour tags.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#f6f0e4] border border-[#e8ddcb] rounded-2xl p-4">
                <Truck className="w-5 h-5 text-[#1d3728] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif-heading font-bold text-sm text-[#1d3728]">Reliable Temperature-Controlled Delivery</h4>
                  <p className="text-xs text-[#526354]">Regular refrigerated van delivery routes across East Yorkshire, North Yorkshire, Hull, York, and the coast.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Formats for Wholesale */}
        <div className="bg-[#f6f0e4] border border-[#e8ddcb] rounded-3xl p-8 md:p-12 mb-16 shadow-xs">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-serif-heading font-bold text-2xl md:text-3xl text-[#1d3728] mb-2">
              Wholesale Packaging Formats
            </h3>
            <p className="text-xs md:text-sm text-[#5a6b5e]">
              Flexible sizes tailored to high-turnover scoop counters or retail freezers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#e8ddcb] shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-wider text-[#881326] block mb-1">
                For Scoop Counters
              </span>
              <h4 className="font-serif-heading font-bold text-xl text-[#1d3728] mb-2">
                4.5 Litre Napoli Pans
              </h4>
              <p className="text-xs text-[#526354] leading-relaxed mb-4">
                Standard stainless-ready food-grade pans. Yields approximately 38–42 generous scoops per tub. Available across all 30+ flavours.
              </p>
              <div className="text-xs text-[#1d3728] font-semibold border-t border-[#f0e7d8] pt-3">
                Minimum order: 4 tubs per drop
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#e8ddcb] shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-wider text-[#881326] block mb-1">
                For Farm Shops &amp; Delis
              </span>
              <h4 className="font-serif-heading font-bold text-xl text-[#1d3728] mb-2">
                500ml Retail Pre-Packs
              </h4>
              <p className="text-xs text-[#526354] leading-relaxed mb-4">
                Eye-catching kraft tubs with tamper-evident lids and EAN barcodes. High margin and repeat purchases for boutique food retailers.
              </p>
              <div className="text-xs text-[#1d3728] font-semibold border-t border-[#f0e7d8] pt-3">
                Case size: 8 tubs per flavour
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#e8ddcb] shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-wider text-[#881326] block mb-1">
                For Weddings &amp; Events
              </span>
              <h4 className="font-serif-heading font-bold text-xl text-[#1d3728] mb-2">
                Event Carts &amp; Single Pots
              </h4>
              <p className="text-xs text-[#526354] leading-relaxed mb-4">
                120ml individual dessert pots with wooden spoons nested in the lid, or hire our vintage mobile ice cream cart for private celebrations.
              </p>
              <div className="text-xs text-[#1d3728] font-semibold border-t border-[#f0e7d8] pt-3">
                Custom branding available
              </div>
            </div>
          </div>
        </div>

        {/* Trade Enquiry Form */}
        <div className="max-w-2xl mx-auto bg-white border border-[#e8ddcb] rounded-3xl p-6 sm:p-10 shadow-md">
          <div className="text-center mb-8">
            <span className="text-xs font-bold tracking-widest text-[#881326] uppercase block mb-1">
              Sample Request &amp; Trade Pricing
            </span>
            <h3 className="font-serif-heading font-bold text-2xl md:text-3xl text-[#1d3728]">
              Request a Trade Price List &amp; Samples
            </h3>
            <p className="text-xs sm:text-sm text-[#556657] mt-1">
              Let us know about your venue, and our wholesale manager will be in touch with wholesale price schedules.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#edf6f0] border border-[#b8dfc4] rounded-2xl p-8 text-center animate-in fade-in">
              <div className="w-12 h-12 rounded-full bg-[#1d3728] text-white flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-[#e5be49]" />
              </div>
              <h4 className="font-serif-heading font-bold text-xl text-[#1d3728] mb-2">
                Trade Enquiry Received
              </h4>
              <p className="text-xs sm:text-sm text-[#415344] leading-relaxed mb-6">
                Thank you, <strong>{tradeForm.contactName}</strong> from <strong>{tradeForm.businessName}</strong>. Our wholesale team will review your requirements and send over our trade tariff and sample arrangements to <strong>{tradeForm.email}</strong> shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-[#1d3728] text-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider"
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-[#1d3728] block mb-1">Business Name *</label>
                  <input
                    type="text"
                    required
                    value={tradeForm.businessName}
                    onChange={(e) => setTradeForm({ ...tradeForm, businessName: e.target.value })}
                    className="w-full bg-[#faf7f0] border border-[#d8cdba] focus:border-[#1d3728] rounded-xl px-3.5 py-2 text-xs md:text-sm text-[#1d3728] outline-hidden"
                    placeholder="e.g. The Bayview Tearooms"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#1d3728] block mb-1">Contact Name *</label>
                  <input
                    type="text"
                    required
                    value={tradeForm.contactName}
                    onChange={(e) => setTradeForm({ ...tradeForm, contactName: e.target.value })}
                    className="w-full bg-[#faf7f0] border border-[#d8cdba] focus:border-[#1d3728] rounded-xl px-3.5 py-2 text-xs md:text-sm text-[#1d3728] outline-hidden"
                    placeholder="e.g. Sarah Jenkins"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-[#1d3728] block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={tradeForm.email}
                    onChange={(e) => setTradeForm({ ...tradeForm, email: e.target.value })}
                    className="w-full bg-[#faf7f0] border border-[#d8cdba] focus:border-[#1d3728] rounded-xl px-3.5 py-2 text-xs md:text-sm text-[#1d3728] outline-hidden"
                    placeholder="sarah@bayviewtearooms.co.uk"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#1d3728] block mb-1">Telephone *</label>
                  <input
                    type="tel"
                    required
                    value={tradeForm.phone}
                    onChange={(e) => setTradeForm({ ...tradeForm, phone: e.target.value })}
                    className="w-full bg-[#faf7f0] border border-[#d8cdba] focus:border-[#1d3728] rounded-xl px-3.5 py-2 text-xs md:text-sm text-[#1d3728] outline-hidden"
                    placeholder="01262 123456"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-[#1d3728] block mb-1">Business Type *</label>
                  <select
                    value={tradeForm.businessType}
                    onChange={(e) => setTradeForm({ ...tradeForm, businessType: e.target.value })}
                    className="w-full bg-[#faf7f0] border border-[#d8cdba] focus:border-[#1d3728] rounded-xl px-3 py-2 text-xs md:text-sm text-[#1d3728] outline-hidden"
                  >
                    <option value="restaurant">Restaurant / Gastro Pub</option>
                    <option value="tearoom">Café / Tearoom</option>
                    <option value="farmshop">Farm Shop / Delicatessen</option>
                    <option value="kiosk">Ice Cream Parlour / Kiosk</option>
                    <option value="events">Weddings / Event Catering</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#1d3728] block mb-1">Location / Town *</label>
                  <input
                    type="text"
                    required
                    value={tradeForm.location}
                    onChange={(e) => setTradeForm({ ...tradeForm, location: e.target.value })}
                    className="w-full bg-[#faf7f0] border border-[#d8cdba] focus:border-[#1d3728] rounded-xl px-3.5 py-2 text-xs md:text-sm text-[#1d3728] outline-hidden"
                    placeholder="e.g. Beverley, Bridlington, York"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#1d3728] block mb-1">Estimated Weekly Volume or Specific Flavours</label>
                <textarea
                  rows={3}
                  value={tradeForm.message}
                  onChange={(e) => setTradeForm({ ...tradeForm, message: e.target.value })}
                  className="w-full bg-[#faf7f0] border border-[#d8cdba] focus:border-[#1d3728] rounded-xl p-3 text-xs md:text-sm text-[#1d3728] outline-hidden"
                  placeholder="e.g. Looking for 6 Napoli pans per week, plus freezer cabinet hire."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1d3728] hover:bg-[#14271c] text-white py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Trade Request</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
