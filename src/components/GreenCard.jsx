import React, { useState } from 'react';

const GreenCard = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <div className="w-full bg-white flex flex-col items-center">
      
      {/* White text section above the green card */}
      <div className="relative w-full py-4 md:py-6 px-4 flex justify-center items-center">
        
        {/* Left-side Line Art */}
        <img 
          src="/LINE ART.webp" 
          alt="Line Art Decor" 
          className="absolute left-0 md:left-8 lg:left-16 top-1/2 -translate-y-1/2 h-12 md:h-16 lg:h-20 object-contain opacity-80 pointer-events-none"
        />

        {/* Text Container */}
        <div className="text-center z-10 relative px-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-none">
            Welcome to <br className="sm:hidden" />
            <span className="text-emerald-600">MGA AGRO</span> Rice Mill
          </h2>
          {/* Subtle decorative underline */}
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto mt-2 rounded-full shadow-sm"></div>
        </div>

        {/* Right-side Line Art */}
        <img 
          src="/LINE ART2.webp" 
          alt="Line Art Decor" 
          className="absolute right-0 md:right-8 lg:right-16 top-1/2 -translate-y-1/2 h-12 md:h-16 lg:h-20 object-contain opacity-80 pointer-events-none"
        />
      </div>

      <section 
        className="w-full relative z-10 overflow-hidden font-sans cursor-default"
        onMouseMove={handleMouseMove}
      >

        {/* Radial Gradient Background matching the attached image */}
        <div
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, #d4eaa4 10%, #4d977e 60%, #25564e 100%)" }}
        ></div>

        {/* Subtle Grid Pattern Overlay */}
        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:16px_16px] z-10 pointer-events-none"></div>

        {/* Premium Animated Text Element from Left */}
        <div className="absolute left-4 md:left-12 lg:left-24 top-[55%] -translate-y-1/2 z-40 pointer-events-none hidden sm:block">
          <div className="flex flex-col gap-1 items-start slide-in-left">
            <span className="text-[10px] md:text-sm font-bold text-emerald-300 tracking-[0.5em] uppercase opacity-70">
              MGA AGRO Quality
            </span>
            <h3 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white drop-shadow-2xl tracking-tighter">
              Naturally <br /> <span className="text-emerald-950">Pure.</span>
            </h3>
          </div>
        </div>

        {/* Foreground Container */}
        <div className="relative w-full z-30 pointer-events-none flex items-end justify-center min-h-[300px] md:min-h-[350px]">

          {/* Multiple Rice Seed Elements for a Tighter, Layered Cluster */}
          {/* 1. Primary Seed Cluster - Move Higher */}
          <img
            src="/RICE SEEDS.webp"
            alt="Rice Seeds Decor"
            className="absolute top-4 right-[8%] w-24 md:w-28 h-auto object-contain z-25 transition-transform duration-100 ease-out pointer-events-none opacity-80"
            style={{
              transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px) rotate(15deg)`,
            }}
          />

          {/* 2. Secondary Seed Cluster (Increased gap, moved higher) */}
          <img
            src="/RICE SEEDS.webp"
            alt="Rice Seeds Decor"
            className="absolute top-12 right-[18%] w-16 md:w-20 h-auto object-contain z-25 transition-transform duration-150 ease-out pointer-events-none opacity-60"
            style={{
              transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px) rotate(-10deg)`,
            }}
          />

          {/* 3. Smallest Seed Cluster (Increased gap, moved higher) */}
          <img
            src="/RICE SEEDS.webp"
            alt="Rice Seeds Decor"
            className="absolute top-6 right-[28%] w-10 md:w-14 h-auto object-contain z-25 transition-transform duration-250 ease-out pointer-events-none opacity-40 blur-[0.5px]"
            style={{
              transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px) rotate(45deg)`,
            }}
          />

          {/* Left-side decor image */}
          <img
            src="/width_458.png"
            alt="Left Green Decor"
            className="absolute bottom-0 left-0 w-[30%] md:w-[24%] lg:w-[20%] max-w-[250px] h-auto object-contain object-bottom z-20 opacity-40"
          />

          {/* Full-width Rice Bowl Image */}
          <img
            src="/rice_bowl.webp"
            alt="Premium Rice Bowls"
            className="w-full max-h-[250px] sm:max-h-[300px] md:max-h-[350px] lg:max-h-[400px] object-cover object-bottom drop-shadow-2xl z-30 relative"
          />
        </div>

        {/* CSS for Premium Animation */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes slideInLeft {
            0% {
              opacity: 0;
              transform: translateX(-50px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .slide-in-left {
            animation: slideInLeft 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
          }
        ` }} />
      </section>
    </div>
  );
};

export default GreenCard;
