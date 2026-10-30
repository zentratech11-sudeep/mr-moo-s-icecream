import React, { useState } from 'react';
import { Caravan, Zap, Droplets, Check, Sparkles, Send, Calendar, ShieldCheck, MapPin } from 'lucide-react';
import { CARAVAN_SITE_FEATURES } from '../data/dairyData';
import { ASSETS } from '../data/assets';
import { ActivePage } from '../components/Header';

interface CaravanSiteViewProps {
  onNavigate: (page: ActivePage) => void;
}

export const CaravanSiteView: React.FC<CaravanSiteViewProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleType: 'caravan',
    arrivalDate: '',
    nights: '2',
    guests: '2',
    dogs: '0',
    notes: '',
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
              East Yorkshire Coastal Getaways
            </span>
            <span className="h-px w-8 bg-[#881326]" />
          </div>
          <h1 className="font-serif-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#1d3728] tracking-tight mb-3">
            Mr Moo’s Coastal Caravan Site
          </h1>
          <p className="text-sm md:text-base text-[#4f6052] leading-relaxed">
            Wake up to birdsong and fresh sea breezes on our peaceful, family-run working dairy farm. Spacious pitches with electric hookups, private beach access, and award-winning ice cream on your doorstep.
          </p>
        </div>

        {/* Feature Split Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border-4 border-white shadow-md aspect-16/10 relative group">
            <img
              src={ASSETS.dairyCows}
              alt="Southfield House Farm pastures and coastal pitches"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14271c]/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-5 right-5 text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-[#e5be49]">
                Certified CL &amp; Touring Location
              </span>
              <h3 className="font-serif-heading font-bold text-xl md:text-2xl">
                Peaceful, Spacious Rural Pitches
              </h3>
              <p className="text-xs text-stone-200 mt-0.5">
                Surrounded by open fields, just 10 minutes walk to the North Sea beach.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start gap-4">
            <span className="text-[10px] font-bold tracking-widest text-[#881326] uppercase">
              Tranquil Seaside Pitches
            </span>
            <h2 className="font-serif-heading font-bold text-2xl sm:text-3xl text-[#1d3728] leading-tight">
              Escape to the Yorkshire Coast
            </h2>
            <p className="text-sm text-[#47574b] leading-relaxed">
              Our small, uncrowded site provides a restful countryside haven away from busy commercial holiday parks. Pitch up your touring caravan, motorhome, or campervan in our dedicated green meadow.
            </p>

            <div className="bg-[#f6f0e4] border border-[#e8ddcb] rounded-2xl p-5 w-full space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#556758] font-medium">Standard Pitch with 16A Electric:</span>
                <span className="font-serif-heading font-bold text-base text-[#1d3728]">From £24 / night</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#556758] font-medium">Dog Friendly (up to 2 well-behaved dogs):</span>
                <span className="font-semibold text-[#881326]">Free of charge</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#556758] font-medium">Beach Footpath Access:</span>
                <span className="font-semibold text-[#1d3728]">Direct from farm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Site Facilities Grid */}
        <div className="bg-[#f6f0e4] border border-[#e8ddcb] rounded-3xl p-8 md:p-12 mb-16 shadow-xs">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-serif-heading font-bold text-2xl md:text-3xl text-[#1d3728] mb-2">
              Site Amenities &amp; Services
            </h3>
            <p className="text-xs md:text-sm text-[#5a6b5e]">
              Everything you need for an effortless, comfortable coastal break.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CARAVAN_SITE_FEATURES.map((feat) => (
              <div key={feat.title} className="bg-white rounded-2xl p-5 border border-[#e8ddcb] shadow-2xs">
                <div className="w-8 h-8 rounded-full bg-[#1d3728] text-white flex items-center justify-center mb-3">
                  <Check className="w-4 h-4 text-[#e5be49]" />
                </div>
                <h4 className="font-serif-heading font-bold text-base text-[#1d3728] mb-1">
                  {feat.title}
                </h4>
                <p className="text-xs text-[#526354] leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Inquiry Form */}
        <div className="max-w-2xl mx-auto bg-white border border-[#e8ddcb] rounded-3xl p-6 sm:p-10 shadow-md">
          <div className="text-center mb-8">
            <span className="text-xs font-bold tracking-widest text-[#881326] uppercase block mb-1">
              Check Availability
            </span>
            <h3 className="font-serif-heading font-bold text-2xl md:text-3xl text-[#1d3728]">
              Caravan Pitch Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-[#556657] mt-1">
              Send us your requested dates and our farm team will confirm availability within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#edf6f0] border border-[#b8dfc4] rounded-2xl p-8 text-center animate-in fade-in">
              <div className="w-12 h-12 rounded-full bg-[#1d3728] text-white flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-[#e5be49]" />
              </div>
              <h4 className="font-serif-heading font-bold text-xl text-[#1d3728] mb-2">
                Enquiry Received!
              </h4>
              <p className="text-xs sm:text-sm text-[#415344] leading-relaxed mb-6">
                Thank you, <strong>{formData.name}</strong>. We have logged your request for {formData.arrivalDate || 'your stay'} ({formData.nights} nights). A member of our farm team will contact you shortly via <strong>{formData.email}</strong> to confirm your pitch.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-[#1d3728] text-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider"
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-[#1d3728] block mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#faf7f0] border border-[#d8cdba] focus:border-[#1d3728] rounded-xl px-3.5 py-2 text-xs md:text-sm text-[#1d3728] outline-hidden"
                    placeholder="e.g. David Walker"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#1d3728] block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#faf7f0] border border-[#d8cdba] focus:border-[#1d3728] rounded-xl px-3.5 py-2 text-xs md:text-sm text-[#1d3728] outline-hidden"
                    placeholder="e.g. david@example.co.uk"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-semibold text-[#1d3728] block mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#faf7f0] border border-[#d8cdba] focus:border-[#1d3728] rounded-xl px-3.5 py-2 text-xs md:text-sm text-[#1d3728] outline-hidden"
                    placeholder="07123 456789"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#1d3728] block mb-1">Vehicle / Unit *</label>
                  <select
                    value={formData.vehicleType}
                    onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                    className="w-full bg-[#faf7f0] border border-[#d8cdba] focus:border-[#1d3728] rounded-xl px-3 py-2 text-xs md:text-sm text-[#1d3728] outline-hidden"
                  >
                    <option value="caravan">Touring Caravan</option>
                    <option value="motorhome">Motorhome</option>
                    <option value="campervan">Campervan</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#1d3728] block mb-1">Arrival Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.arrivalDate}
                    onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                    className="w-full bg-[#faf7f0] border border-[#d8cdba] focus:border-[#1d3728] rounded-xl px-3 py-2 text-xs md:text-sm text-[#1d3728] outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-semibold text-[#1d3728] block mb-1">Nights</label>
                  <select
                    value={formData.nights}
                    onChange={(e) => setFormData({ ...formData, nights: e.target.value })}
                    className="w-full bg-[#faf7f0] border border-[#d8cdba] rounded-xl px-3 py-2 text-xs text-[#1d3728]"
                  >
                    {[1, 2, 3, 4, 5, 7, 10, 14].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? 'night' : 'nights'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#1d3728] block mb-1">Guests</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-[#faf7f0] border border-[#d8cdba] rounded-xl px-3 py-2 text-xs text-[#1d3728]"
                  >
                    {[1, 2, 3, 4, 5, 6].map((g) => (
                      <option key={g} value={g}>{g} {g === 1 ? 'Adult' : 'Adults'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#1d3728] block mb-1">Dogs</label>
                  <select
                    value={formData.dogs}
                    onChange={(e) => setFormData({ ...formData, dogs: e.target.value })}
                    className="w-full bg-[#faf7f0] border border-[#d8cdba] rounded-xl px-3 py-2 text-xs text-[#1d3728]"
                  >
                    {[0, 1, 2, 3].map((d) => (
                      <option key={d} value={d}>{d} {d === 1 ? 'dog' : 'dogs'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#1d3728] block mb-1">Any Special Requests or Vehicle Dimensions</label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#faf7f0] border border-[#d8cdba] focus:border-[#1d3728] rounded-xl p-3 text-xs md:text-sm text-[#1d3728] outline-hidden"
                  placeholder="e.g. Twin-axle caravan, awning, arrival approx 3:00 PM"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1d3728] hover:bg-[#14271c] text-white py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Pitch Request</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
