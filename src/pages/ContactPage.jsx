import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Building2, FileText, ArrowLeft, ChevronRight, Send, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';

const ContactPage = () => {
  const [formState, setFormState] = useState({ name: '', phone: '', email: '', company: '', quantity: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    // ... rest of the code remains same
    e.preventDefault();
    const msg = `Hello M.G.A. AGRO Industries,\n\nNew Inquiry Received:\n👤 Name: ${formState.name}\n📱 Phone: ${formState.phone}\n📧 Email: ${formState.email}\n🏢 Company: ${formState.company}\n📦 Quantity Required: ${formState.quantity} MT\n\n💬 Message:\n${formState.message}`;
    window.open(`https://wa.me/919775930840?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const infoBlocks = [
    {
      icon: <MapPin className="w-6 h-6 text-emerald-600" />,
      title: 'Registered Office',
      lines: [
        'M.G.A. Agro Industries Private Limited',
        'Vill+P.O.- Khargram, P.S.+Block -Khargram',
        'Indrani, Dist- Murshidabad',
        'Pin - 742159, West Bengal, India',
      ],
    },
    {
      icon: <Phone className="w-6 h-6 text-emerald-600" />,
      title: 'Phone Numbers',
      lines: ['+91 97759 30840', '+91 96479 95108', '+91 85091 00612', '+91 78721 50828'],
    },
    {
      icon: <Mail className="w-6 h-6 text-emerald-600" />,
      title: 'Email Address',
      lines: ['mgaindustriespvtltd@gmail.com'],
    },
  ];

  const companyDetails = [
    { label: 'CIN', value: 'U15121WB2020PTC239295' },
    { label: 'GSTIN', value: '19AANCM7447H1ZV' },
    { label: 'PAN', value: 'AANCM7447H' },
    { label: 'TAN', value: 'CALM21835C' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />

      {/* Hero */}
      <section className="pt-16 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px]" />
          <img src="/LINE ART.webp" alt="" className="absolute bottom-0 right-10 w-56 opacity-10" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            Contact <span className="text-emerald-400">MGA AGRO</span>
          </h1>
          <p className="text-xl text-slate-300 font-light max-w-2xl leading-relaxed">
            Whether you're a distributor, retailer, or buyer looking for premium-quality rice at export scale — we're ready to discuss your requirements.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left: Contact Info */}
            <div className="space-y-8">

              {/* Info Blocks */}
              {infoBlocks.map((block, i) => (
                <div key={i} className="flex gap-5 p-6 bg-slate-50 hover:bg-white hover:shadow-lg rounded-3xl border border-transparent hover:border-emerald-100 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-emerald-100 group-hover:bg-emerald-200 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors">
                    {block.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base mb-2">{block.title}</h3>
                    {block.lines.map((line, j) => (
                      <p key={j} className="text-gray-500 text-sm leading-relaxed">{line}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Company Legal Details */}
              <div className="bg-slate-900 rounded-3xl p-8 border border-slate-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="font-bold text-white text-lg">Company Legal Details</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {companyDetails.map(({ label, value }) => (
                    <div key={label} className="bg-slate-800/60 rounded-2xl p-4 border border-slate-700">
                      <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1">{label}</p>
                      <p className="text-white font-mono text-sm font-semibold">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3 p-4 bg-slate-800/60 rounded-2xl border border-slate-700">
                  <FileText className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Registered Under</p>
                    <p className="text-white text-sm font-semibold">Companies Act 2013 — West Bengal, India</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick CTA */}
              <a
                href="https://wa.me/919775930840"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white px-7 py-5 rounded-3xl font-bold text-base transition-colors shadow-xl shadow-green-200 group"
              >
                <svg className="w-7 h-7 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <div>
                  <p className="text-lg leading-tight">Chat on WhatsApp</p>
                  <p className="text-green-100 text-sm font-normal">We reply within minutes</p>
                </div>
                <ChevronRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Right: Inquiry Form */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl overflow-hidden">
              {submitted ? (
                <div className="p-12 text-center flex flex-col items-center justify-center min-h-[600px]">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Inquiry Sent!</h3>
                  <p className="text-gray-500 mb-8 max-w-sm">Your inquiry has been sent via WhatsApp. Our team will get back to you shortly.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3 rounded-full font-semibold text-sm transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-5">
                  <div>
                    <h2 className="text-2xl font-extrabold text-gray-900 mb-1">Send an Inquiry</h2>
                    <p className="text-gray-500 text-sm">Fill in the details below and we'll send it directly via WhatsApp.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none text-sm transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none text-sm transition-all"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Email Address</label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none text-sm transition-all"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Company Name</label>
                      <input
                        type="text"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none text-sm transition-all"
                        placeholder="Your company / firm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Quantity Required (MT)</label>
                    <select
                      value={formState.quantity}
                      onChange={(e) => setFormState({ ...formState, quantity: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none text-sm transition-all bg-white"
                    >
                      <option value="">Select quantity range</option>
                      <option>1 – 10 MT</option>
                      <option>10 – 50 MT</option>
                      <option>50 – 100 MT</option>
                      <option>100 – 500 MT</option>
                      <option>500+ MT (Bulk Export)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Your Message / Requirements *</label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none text-sm transition-all resize-none"
                      placeholder="Tell us about the product type, packaging requirements, destination country, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-bold text-sm transition-colors shadow-lg shadow-emerald-200 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send via WhatsApp
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    Tapping 'Send' will open WhatsApp with your inquiry pre-filled. We respond within 24 hours.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-xl" style={{ height: '350px' }}>
            <iframe
              title="MGA AGRO Location"
              src="https://maps.google.com/maps?q=Khargram,Murshidabad,West+Bengal,India&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src="/Logo.webp" alt="MGA AGRO" className="h-9 w-9 rounded-xl" />
            <span className="font-extrabold text-lg">M.G.A.<span className="text-emerald-400 font-light"> AGRO INDUSTRIES PVT. LTD.</span></span>
          </div>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} M.G.A. Agro Industries Private Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
