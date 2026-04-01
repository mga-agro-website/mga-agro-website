import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Factory, Sprout, Globe, Award, Users, ArrowLeft, ChevronRight } from 'lucide-react';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('story');

  const milestones = [
    { year: '2020', title: 'Company Founded', desc: 'M.G.A. Agro Industries Pvt. Ltd. incorporated in Murshidabad, West Bengal.' },
    { year: '2021', title: 'Modern Mill Setup', desc: 'Installed state-of-the-art milling & optical sorting machinery with 100 MT/day capacity.' },
    { year: '2022', title: 'First Export', desc: 'Achieved first international export shipment across South and Southeast Asian markets.' },
    { year: '2023', title: 'Capacity Expansion', desc: 'Scaled capacity to 200 MT/day and added dedicated parboiling & packaging lines.' },
    { year: '2024', title: 'Export to 10+ Nations', desc: 'Expanded reach to 10+ countries, building long-term trade relationships globally.' },
    { year: '2025', title: 'Quality Certifications', desc: 'Achieved GSTIN compliance and advanced food safety standards for all product lines.' },
  ];

  const values = [
    {
      icon: <ShieldCheck className="w-7 h-7 text-emerald-600" />,
      title: 'Uncompromising Quality',
      desc: 'Every grain undergoes rigorous multi-stage inspection — from raw paddy to final packed product — ensuring only the finest reaches your table.',
    },
    {
      icon: <Factory className="w-7 h-7 text-emerald-600" />,
      title: 'Advanced Technology',
      desc: 'We invest in modern imported milling equipment, optical sorters, and hygienic automated packaging lines for precision at every stage.',
    },
    {
      icon: <Sprout className="w-7 h-7 text-emerald-600" />,
      title: 'Sustainable Sourcing',
      desc: 'We partner with trusted paddy farmers in West Bengal, ensuring eco-friendly cultivation practices and a fair agricultural supply chain.',
    },
    {
      icon: <Globe className="w-7 h-7 text-emerald-600" />,
      title: 'Global Standards',
      desc: 'Our operations are fully GSTIN registered, CIN compliant, and aligned with international food export standards for 10+ countries.',
    },
  ];

  const team = [
    { name: 'Managing Director', role: 'Operations & Strategy', initial: 'MD' },
    { name: 'Head of Quality', role: 'Quality Control & Compliance', initial: 'HQ' },
    { name: 'Export Manager', role: 'International Trade', initial: 'EM' },
    { name: 'Production Head', role: 'Milling & Processing', initial: 'PH' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/Logo.webp" alt="MGA AGRO" className="h-9 w-9 rounded-xl" />
            <span className="text-xl font-extrabold text-gray-900">M.G.A.<span className="text-emerald-600 font-light"> AGRO</span></span>
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/about" className="text-emerald-600 font-semibold text-sm">About Us</Link>
            <Link to="/products-detail" className="text-gray-600 hover:text-emerald-600 font-medium text-sm transition-colors">Products</Link>
            <Link to="/contacts" className="text-gray-600 hover:text-emerald-600 font-medium text-sm transition-colors">Contact</Link>
            <Link to="/" className="flex items-center gap-2 bg-gray-900 text-white text-sm px-4 py-2 rounded-full hover:bg-emerald-700 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-16 relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-900/20 rounded-full blur-[80px]" />
          <img src="/LINE ART.webp" alt="" className="absolute top-10 right-10 w-64 opacity-10 mix-blend-luminosity" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              About Our Company
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6">
              Tradition Meets <br />
              <span className="text-emerald-400">Modern Precision</span>
            </h1>
            <p className="text-xl text-slate-300 font-light leading-relaxed max-w-2xl mb-10">
              M.G.A. Agro Industries Private Limited — a Murshidabad-based premium rice processing company delivering world-class quality from the heart of West Bengal to tables across the globe.
            </p>
            <div className="flex flex-wrap gap-8">
              {[['25+', 'Years Legacy'], ['200 MT', 'Daily Capacity'], ['10+', 'Export Countries']].map(([val, label]) => (
                <div key={label}>
                  <div className="text-3xl font-black text-white">{val}</div>
                  <div className="text-xs text-emerald-400 font-bold uppercase tracking-widest mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto no-scrollbar">
            {[['story', 'Our Story'], ['values', 'Core Values'], ['milestones', 'Milestones'], ['team', 'Leadership']].map(([id, label]) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex-shrink-0 px-6 py-4 text-sm font-semibold border-b-2 transition-all duration-200 ${
                  activeTab === id
                    ? 'border-emerald-500 text-emerald-600'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Story */}
          {activeTab === 'story' && (
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-4 block">Who We Are</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
                  Rooted in Rice,<br /> Built for the World.
                </h2>
                <div className="space-y-5 text-gray-600 text-base leading-relaxed">
                  <p>
                    M.G.A. Agro Industries Private Limited was incorporated in 2020, headquartered at Vill+P.O. Khargram, Indrani, Murshidabad — the rice heartland of West Bengal. We began with a singular vision: to bring scientifically processed, export-quality rice from India's finest paddy fields to the world.
                  </p>
                  <p>
                    With a state-of-the-art processing plant capable of handling 200 metric tons per day, our facility houses advanced de-husking equipment, multi-stage grain cleaners, precision optical color sorters, and hygienic automated packaging lines.
                  </p>
                  <p>
                    Today, we proudly export to 10+ countries across Asia and beyond, while maintaining an unwavering focus on purity, consistency, and food safety at every stage of our supply chain.
                  </p>
                </div>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    to="/contacts"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-colors shadow-lg shadow-emerald-200"
                  >
                    Get in Touch <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/products-detail"
                    className="inline-flex items-center gap-2 border border-gray-200 hover:border-emerald-300 text-gray-700 hover:text-emerald-700 px-7 py-3.5 rounded-full font-semibold text-sm transition-colors"
                  >
                    View Products
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img src="/01 Sourcing.jpg" alt="Sourcing" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 flex items-center gap-4">
                  <div className="bg-emerald-100 p-3 rounded-xl">
                    <Award className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <div className="font-extrabold text-gray-900 text-lg">GSTIN & CIN</div>
                    <div className="text-xs text-gray-500 font-medium">Certified & Compliant</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Values */}
          {activeTab === 'values' && (
            <div>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-3 block">What Drives Us</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Core Values</h2>
                <p className="text-gray-500 mt-4 text-lg">The principles that guide each stage of our process and every relationship we build.</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((v, i) => (
                  <div key={i} className="group bg-slate-50 hover:bg-white rounded-3xl p-8 border border-transparent hover:border-emerald-100 hover:shadow-xl transition-all duration-500 cursor-default">
                    <div className="bg-emerald-100 group-hover:bg-emerald-200 transition-colors w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                      {v.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Milestones */}
          {activeTab === 'milestones' && (
            <div>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-3 block">Our Journey</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Key Milestones</h2>
              </div>
              <div className="relative max-w-3xl mx-auto">
                <div className="absolute left-16 top-0 bottom-0 w-px bg-emerald-100" />
                <div className="space-y-10">
                  {milestones.map((m, i) => (
                    <div key={i} className="flex gap-8 items-start group">
                      <div className="w-14 text-right flex-shrink-0">
                        <span className="text-sm font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-200">{m.year}</span>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[2.15rem] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-emerald-500 group-hover:bg-emerald-500 transition-colors z-10" />
                      </div>
                      <div className="bg-gray-50 group-hover:bg-white group-hover:shadow-lg rounded-2xl p-6 flex-1 border border-transparent group-hover:border-emerald-100 transition-all duration-300">
                        <h3 className="font-bold text-gray-900 text-lg mb-1">{m.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Team */}
          {activeTab === 'team' && (
            <div>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-3 block">Our Leadership</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">The Team Behind MGA</h2>
                <p className="text-gray-500 mt-4 text-lg">Experienced professionals dedicated to agri-processing excellence and global trade.</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, i) => (
                  <div key={i} className="group text-center">
                    <div className="relative w-28 h-28 mx-auto mb-5">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-400 to-emerald-700 flex items-center justify-center shadow-xl group-hover:shadow-emerald-200 transition-shadow duration-300">
                        <span className="text-2xl font-extrabold text-white">{member.initial}</span>
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{member.role}</p>
                  </div>
                ))}
              </div>
              <div className="mt-16 text-center bg-emerald-50 rounded-3xl p-10 border border-emerald-100">
                <Users className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Join Our Growing Team</h3>
                <p className="text-gray-500 mb-6 max-w-lg mx-auto text-sm">We are always looking for passionate individuals to help us grow and export the finest rice globally.</p>
                <Link to="/contacts" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-colors">
                  Contact Us <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-10 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src="/Logo.webp" alt="MGA AGRO" className="h-9 w-9 rounded-xl" />
            <span className="font-extrabold text-lg">M.G.A.<span className="text-emerald-400 font-light"> AGRO INDUSTRIES PVT. LTD.</span></span>
          </div>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} M.G.A. Agro Industries Private Limited. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default AboutPage;
