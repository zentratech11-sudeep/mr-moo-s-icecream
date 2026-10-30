import React, { useState, useMemo } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Compass,
  Car,
  Send,
  Check,
  ExternalLink,
  Heart,
  Navigation,
} from 'lucide-react';
import { getServiceStatus, OPENING_HOURS } from '../utils/dairyBusiness';
import { ActivePage } from '../components/Header';
import { DaisyIcon } from '../components/Logo';

interface ContactViewProps {
  onNavigate: (page: ActivePage) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Compute live parlour status based on local time
  const currentStatus = useMemo(() => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return getServiceStatus(`${hours}:${minutes}`);
  }, []);

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
              Visit Skipsea, East Yorkshire
            </span>
            <span className="h-px w-8 bg-[#881326]" />
          </div>
          <h1 className="font-serif-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#1d3728] tracking-tight mb-3">
            Find Us &amp; Say Hello
          </h1>
          <p className="text-sm md:text-base text-[#4f6052] leading-relaxed">
            Located just off the coastal road between Hornsea and Bridlington, Southfield House Farm welcomes you 7 days a week. We have ample free parking, level access, and sunny outdoor seating.
          </p>
        </div>

        {/* Live Service Status Callout */}
        <div className="bg-[#1b3626] rounded-3xl p-5 md:p-6 text-white mb-12 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#274c35]">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-[#e5be49] text-[#14271c] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#e5be49] block">
                Live Parlour Status
              </span>
              <p className="font-serif-heading font-bold text-base md:text-lg">
                {currentStatus.message}
              </p>
            </div>
          </div>

          <a
            href="tel:+441262469829"
            className="bg-white text-[#1d3728] hover:bg-[#faf7f0] px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-[#881326]" />
            <span>Call 01262 469829</span>
          </a>
        </div>

        {/* 3-Column Info Layout: Details / Directions / Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Column 1 & 2: Parlour Details & Driving Routes (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Address & Hours Card */}
            <div className="bg-[#f6f0e4] border border-[#e8ddcb] rounded-3xl p-6 md:p-8 shadow-xs">
              <h3 className="font-serif-heading font-bold text-xl md:text-2xl text-[#1d3728] mb-4">
                Location &amp; Opening Hours
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2 text-xs text-[#47574b]">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#881326] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1d3728] block text-sm">Mr Moo’s Ice Cream Parlour</strong>
                      <span>Southfield House Farm</span><br />
                      <span>Hornsea Road, Skipsea</span><br />
                      <span>Driffield, East Yorkshire, YO25 8SY</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="text-[11px] text-[#718274]">Google Plus Code:</span>
                    <p className="font-mono text-xs text-[#1d3728]">XQFR+PF Driffield</p>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-[#47574b] bg-white rounded-2xl p-4 border border-[#e5dcce]">
                  <span className="font-bold text-[#1d3728] block text-sm">Everyday Schedule</span>
                  <div className="flex justify-between border-b border-stone-100 pb-1">
                    <span>Parlour &amp; Café:</span>
                    <strong className="text-[#1d3728]">10:00am – 4:30pm</strong>
                  </div>
                  <div className="flex justify-between border-b border-stone-100 pb-1">
                    <span>Breakfast Served:</span>
                    <span className="text-[#1d3728]">10:00am – 12:00pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lunches Cut-off:</span>
                    <span className="text-[#1d3728]">Last orders 2:00pm</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://maps.google.com/?q=Mr+Moo's+Ice+Cream+Parlour+Skipsea"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#1d3728] hover:bg-[#14271c] text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors inline-flex items-center gap-2"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#e5be49]" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                <a
                  href="tel:+441262469829"
                  className="bg-white border border-[#d8cdba] hover:border-[#1d3728] text-[#1d3728] px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#881326]" />
                  <span>+44 1262 469829</span>
                </a>
              </div>
            </div>

            {/* Driving Directions */}
            <div className="bg-[#f6f0e4] border border-[#e8ddcb] rounded-3xl p-6 md:p-8 shadow-xs">
              <h3 className="font-serif-heading font-bold text-xl md:text-2xl text-[#1d3728] mb-4">
                How to Reach Us by Car
              </h3>

              <div className="space-y-3.5 text-xs text-[#526354]">
                <div className="bg-white rounded-xl p-3.5 border border-[#e8ddcb]">
                  <strong className="text-[#1d3728] block mb-0.5">From Bridlington (approx. 20 mins):</strong>
                  <span>Head south along the coastal B1242 through Barmston and Ulrome into Skipsea. Look for the prominent brown Mr Moo’s tourist signs on Hornsea Road.</span>
                </div>

                <div className="bg-white rounded-xl p-3.5 border border-[#e8ddcb]">
                  <strong className="text-[#1d3728] block mb-0.5">From Hornsea (approx. 10 mins):</strong>
                  <span>Travel north on the B1242 coastal route towards Skipsea. We are on the left-hand side before Skipsea village centre.</span>
                </div>

                <div className="bg-white rounded-xl p-3.5 border border-[#e8ddcb]">
                  <strong className="text-[#1d3728] block mb-0.5">From Driffield (approx. 15 mins):</strong>
                  <span>Follow the B1249 eastward through Beeford, continuing straight along Hornsea Road directly to Southfield House Farm.</span>
                </div>

                <div className="bg-white rounded-xl p-3.5 border border-[#e8ddcb]">
                  <strong className="text-[#1d3728] block mb-0.5">From Hull &amp; Beverley (approx. 35 mins):</strong>
                  <span>Take the A1035 towards Leven, join the B1243 to Beeford, then turn towards Skipsea on Hornsea Road.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Column 3: Contact Form (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-[#e8ddcb] rounded-3xl p-6 sm:p-8 shadow-md flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-[#881326] uppercase block mb-1">
                Drop Us a Line
              </span>
              <h3 className="font-serif-heading font-bold text-2xl text-[#1d3728] mb-2">
                Send an Enquiry
              </h3>
              <p className="text-xs text-[#596a5c] leading-relaxed mb-6">
                Have a question about large group visits, dietary requirements, flavours in stock, or our caravan pitches? Fill in the form below.
              </p>

              {submitted ? (
                <div className="bg-[#edf6f0] border border-[#b8dfc4] rounded-2xl p-6 text-center animate-in fade-in my-6">
                  <div className="w-10 h-10 rounded-full bg-[#1d3728] text-white flex items-center justify-center mx-auto mb-3">
                    <Check className="w-5 h-5 text-[#e5be49]" />
                  </div>
                  <h4 className="font-serif-heading font-bold text-lg text-[#1d3728] mb-1">
                    Message Sent!
                  </h4>
                  <p className="text-xs text-[#445647] leading-relaxed mb-4">
                    Thank you, <strong>{form.name}</strong>. We have received your note and will get back to you at <strong>{form.email}</strong> as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-[#1d3728] text-white px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-[#1d3728] block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#faf7f0] border border-[#d8cdba] focus:border-[#1d3728] rounded-xl px-3.5 py-2 text-xs md:text-sm text-[#1d3728] outline-hidden"
                      placeholder="e.g. Jane Smith"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#1d3728] block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#faf7f0] border border-[#d8cdba] focus:border-[#1d3728] rounded-xl px-3.5 py-2 text-xs md:text-sm text-[#1d3728] outline-hidden"
                      placeholder="jane@example.co.uk"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#1d3728] block mb-1">Phone (Optional)</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-[#faf7f0] border border-[#d8cdba] focus:border-[#1d3728] rounded-xl px-3.5 py-2 text-xs md:text-sm text-[#1d3728] outline-hidden"
                      placeholder="01234 567890"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#1d3728] block mb-1">Subject</label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full bg-[#faf7f0] border border-[#d8cdba] focus:border-[#1d3728] rounded-xl px-3 py-2 text-xs md:text-sm text-[#1d3728] outline-hidden"
                    >
                      <option value="general">General Visiting Enquiry</option>
                      <option value="group">Large Group / Coach Booking</option>
                      <option value="dietary">Dietary &amp; Allergens</option>
                      <option value="caravan">Caravan Pitch Question</option>
                      <option value="wholesale">Wholesale &amp; Events</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#1d3728] block mb-1">Your Message *</label>
                    <textarea
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-[#faf7f0] border border-[#d8cdba] focus:border-[#1d3728] rounded-xl p-3 text-xs md:text-sm text-[#1d3728] outline-hidden"
                      placeholder="How can we help you today?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1d3728] hover:bg-[#14271c] text-white py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            <div className="pt-6 mt-6 border-t border-[#e8ddcb] text-[11px] text-[#718274] text-center">
              <span>Free parking • Dog-friendly outdoor seating • Level wheelchair access</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
