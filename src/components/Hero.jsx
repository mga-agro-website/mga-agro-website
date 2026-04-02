import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Leaf } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented or video error:", error);
      });
    }
  }, []);

  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden pt-20 bg-slate-950">

      {/* Full-screen Background Video with Dark Premium Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/BG.webp"
          className="w-full h-full object-cover scale-105"
        />
        {/* Advanced Overlay: Dark gradient for maximum text readability and premium depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply z-10"></div>
        
        {/* Animated Mesh Pattern Overlay */}
        <div className="absolute inset-0 z-10 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
      </div>

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 relative z-20">
        <div className="flex flex-col items-start gap-8">

          {/* Text Content */}
          <div className="w-full lg:w-[70%] text-left py-12 md:py-24">

            {/* Premium Pill Badge - Minimalist Glassmorphism */}
            <div className="reveal-up inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md text-emerald-300/90 font-medium text-xs tracking-[0.2em] uppercase mb-8 border border-white/10 shadow-2xl">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              Premium Quality Rice Mill
            </div>

            {/* Main Headline with Elegant Typography */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white leading-[1.1] mb-8 tracking-tight drop-shadow-lg">
              <span className="block reveal-up delay-100">
                Purity in Every
              </span>
              <span className="block reveal-up delay-200">
                Grain, <span className="font-serif italic text-emerald-400">Straight</span>
              </span>
              <span className="block text-slate-300 reveal-up delay-300">
                from the Farm.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-slate-300/80 mb-10 max-w-xl leading-relaxed font-light reveal-up delay-400">
              Where modern innovation meets timeless tradition. MGA AGRO brings you rice of unmatched purity. Experience the excellence of state-of-the-art milling.</p>

            {/* CTA Buttons - Premium Solid & Glass variants */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-5 reveal-up delay-500">
              <Link to="/products-detail" className="group relative overflow-hidden w-full sm:w-auto px-10 py-5 bg-emerald-600 text-slate-950 rounded-full font-bold text-lg transition-all duration-300 hover:bg-emerald-400 hover:-translate-y-1 flex justify-center items-center gap-2 shadow-[0_10px_30px_rgba(16,185,129,0.4)]">
                <span>Explore Products</span>
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link to="/contacts" className="w-full sm:w-auto px-10 py-5 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 text-white rounded-full font-semibold text-lg transition-all duration-300 flex justify-center items-center">
                Get in Touch
              </Link>
            </div>

            {/* Trust Indicators - Subtle Design */}
            <div className="mt-16 flex flex-wrap items-center justify-start gap-4 reveal-up delay-600">
              {[
                { icon: <ShieldCheck size={18} />, text: "100% Quality" },
                { icon: <CheckCircle2 size={18} />, text: "Modern Milling" },
                { icon: <Leaf size={18} />, text: "Eco-Friendly" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2.5 bg-white/5 backdrop-blur-sm px-5 py-3 rounded-full border border-white/5 transition-colors hover:bg-white/10 hover:border-white/10">
                  <span className="text-emerald-400">{item.icon}</span>
                  <span className="text-xs font-semibold text-slate-200 tracking-wider uppercase">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Silky Smooth Keyframe Animations */}
      <style jsx>{`
        .reveal-up {
          opacity: 0;
          transform: translateY(30px);
          animation: revealUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }

        @keyframes revealUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;