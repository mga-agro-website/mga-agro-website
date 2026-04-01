import React from 'react';
import { ShieldCheck, Factory, Sparkles, Sprout, ArrowRight } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Factory className="w-5 h-5 text-emerald-700 transition-transform duration-700 group-hover:scale-110" />,
      title: "Advanced Processing",
      description: "State-of-the-art milling technology ensures every grain is perfectly polished.",
      accent: "bg-emerald-50/80 group-hover:bg-emerald-100"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-700 transition-transform duration-700 group-hover:scale-110" />,
      title: "Purity Guaranteed",
      description: "Rigorous quality checks preserve the authentic natural aroma of our rice.",
      accent: "bg-emerald-50/80 group-hover:bg-emerald-100"
    },
    {
      icon: <Sprout className="w-5 h-5 text-emerald-700 transition-transform duration-700 group-hover:scale-110" />,
      title: "Eco-Conscious Heritage",
      description: "Sustainably sourced utilizing strictly eco-friendly processing methods.",
      accent: "bg-emerald-50/80 group-hover:bg-emerald-100"
    }
  ];

  // Updated to py-12/16 for compactness, removed overflow-hidden to help with edge cases,
  // but relies on positive positioning to keep line art safe.
  return (
    <section id="about" className="relative py-12 md:py-16 bg-[#FAFAFA]">

      {/* Scattered Premium Line Art Background - Repositioned to prevent cutting */}
      {/* Top Left - Moved inwards */}
      <img src="/LINE ART.webp" alt="" className="absolute top-4 left-4 w-56 md:w-[400px] opacity-[0.07] pointer-events-none z-0 mix-blend-multiply" />
      {/* Center - Slightly smaller for better fit */}
      <img src="/LINE ART2.webp" alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-[550px] opacity-[0.07] pointer-events-none z-0 mix-blend-multiply" />
      {/* Bottom Left - Repositioned from negative bottom/left */}
      <img src="/LINE ART.webp" alt="" className="absolute bottom-8 left-[5%] w-64 md:w-[450px] opacity-[0.07] pointer-events-none z-0 mix-blend-multiply" />
      {/* Top Right - Repositioned inwards */}
      <img src="/LINE ART2.webp" alt="" className="absolute top-6 right-6 w-56 md:w-[400px] opacity-[0.04] pointer-events-none z-0 mix-blend-multiply" />
      {/* Bottom Right - Repositioned inwards */}
      <img src="/LINE ART.webp" alt="" className="absolute bottom-10 right-[8%] w-64 md:w-[450px] opacity-[0.04] pointer-events-none z-0 mix-blend-multiply" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">

          {/* Compact Image Composition */}
          <div className="w-full lg:w-1/2 relative reveal-up">
            <div className="relative w-full h-[320px] md:h-[400px] max-w-[420px] mx-auto lg:mx-0">

              <div className="absolute top-0 left-0 w-[85%] h-[85%] overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] group z-10">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1599328580087-15c9dab481f3?q=80&w=1170&auto=format&fit=crop"
                  alt="Premium Rice Processing"
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
              </div>

              <div className="absolute right-0 bottom-4 w-[60%] h-[45%] overflow-hidden rounded-[1.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.12)] border-[6px] border-[#FAFAFA] group z-20">
                <img
                  src="https://images.unsplash.com/photo-1746106388675-4a5cb72db549?q=80&w=1170&auto=format&fit=crop"
                  alt="Lush Paddy Fields"
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
              </div>

              {/* Scaled down badge */}
              <div className="absolute top-6 -left-4 md:-left-8 backdrop-blur-2xl bg-white/70 p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] z-30 border border-white/80 max-w-[160px] transform transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgb(0,0,0,0.1)]">
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-1.5 bg-emerald-700 rounded-full text-white shadow-lg shadow-emerald-700/30">
                    <Sparkles size={14} strokeWidth={2} />
                  </div>
                  <span className="font-extrabold text-2xl text-gray-900 tracking-tighter">100<span className="text-emerald-600 text-xl">%</span></span>
                </div>
                <p className="text-gray-500 font-semibold text-[9px] uppercase tracking-[0.2em] leading-relaxed mt-1 pl-1">
                  Premium Quality
                </p>
              </div>
            </div>
          </div>

          {/* Compact Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="reveal-up">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-emerald-100 shadow-sm text-emerald-800 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                About MGA AGRO
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-4 leading-[1.1] tracking-tight">
                Centuries of Tradition, <br />
                <span className="font-serif italic font-light text-emerald-800">Perfected</span> for Today.
              </h2>

              <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light mb-6 max-w-lg">
                At MGA AGRO, we preserve the soul of the harvest. Sourced from the world's finest paddy fields, every grain tells a story of unmatched purity.
              </p>

              {/* Tighter features list */}
              <div className="flex flex-col gap-1 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4 p-3 -ml-3 rounded-2xl transition-all duration-500 hover:bg-white hover:shadow-[0_10px_40px_rgb(0,0,0,0.03)] group cursor-default border border-transparent hover:border-gray-100">
                    <div className={`flex-shrink-0 p-3 rounded-xl h-fit transition-all duration-500 ${feature.accent}`}>
                      {feature.icon}
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-base font-semibold text-gray-900 mb-0.5">{feature.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed font-light">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                {/* Smaller button */}
                <button className="group relative inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-full font-medium text-sm overflow-hidden transition-all duration-500 hover:bg-emerald-800 hover:shadow-[0_10px_40px_rgba(4,120,87,0.3)]">
                  <span className="relative z-10 tracking-wide">Discover Our Heritage</span>
                  <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;