import React from 'react';

const Stats = () => {
  const stats = [
    {
      id: 1,
      value: "25+",
      label: "YEARS EXPERIENCE",
      icon: (
        // Icon wrapper height & width reduced for compactness
        <div className="relative w-20 h-12 mx-auto mb-3 transition-transform duration-700 group-hover:scale-105">
          <svg viewBox="0 0 100 60" className="w-full h-full fill-emerald-800">
            <path d="M20,50 Q10,30 20,10 M25,45 Q15,25 25,5 M30,40 Q20,20 30,0" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
            <path d="M80,50 Q90,30 80,10 M75,45 Q85,25 75,5 M70,40 Q80,20 70,0" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
            <circle cx="50" cy="30" r="7" />
            <circle cx="38" cy="38" r="5" opacity="0.8" />
            <circle cx="62" cy="38" r="5" opacity="0.8" />
            <path d="M50,10 L52,16 L58,16 L53,20 L55,26 L50,22 L45,26 L47,20 L42,16 L48,16 Z" className="fill-emerald-600" />
            <path d="M38,18 L39,21 L42,21 L39,23 L40,26 L38,24 L36,26 L37,23 L34,21 L37,21 Z" opacity="0.6" />
            <path d="M62,18 L63,21 L66,21 L63,23 L64,26 L62,24 L60,26 L61,23 L58,21 L61,21 Z" opacity="0.6" />
          </svg>
        </div>
      )
    },
    {
      id: 2,
      value: "200",
      label: "MT PER DAY CAPACITY",
      icon: (
        <div className="relative w-20 h-12 mx-auto mb-3 transition-transform duration-700 group-hover:scale-105">
          <svg viewBox="0 0 100 60" className="w-full h-full fill-emerald-800">
            <path d="M20,50 Q10,30 20,10 M25,45 Q15,25 25,5 M30,40 Q20,20 30,0" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
            <path d="M80,50 Q90,30 80,10 M75,45 Q85,25 75,5 M70,40 Q80,20 70,0" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
            <path d="M38,48 L62,48 L67,28 Q67,15 50,15 Q33,15 33,28 Z" className="fill-emerald-800" />
            <path d="M44,20 L56,20 L54,14 L46,14 Z" className="fill-emerald-600" />
            <path d="M50,40 L53,35 L50,30 L47,35 Z" fill="#FAFAFA" />
            <path d="M50,28 L52,24 L50,20 L48,24 Z" fill="#FAFAFA" />
          </svg>
        </div>
      )
    },
    {
      id: 3,
      value: "10K",
      label: "MT EXPORTED",
      icon: (
        <div className="relative w-20 h-12 mx-auto mb-3 transition-transform duration-700 group-hover:scale-105">
          <svg viewBox="0 0 100 60" className="w-full h-full fill-emerald-800">
            <path d="M20,50 Q10,30 20,10 M25,45 Q15,25 25,5 M30,40 Q20,20 30,0" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
            <path d="M80,50 Q90,30 80,10 M75,45 Q85,25 75,5 M70,40 Q80,20 70,0" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
            <circle cx="50" cy="22" r="12" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
            <path d="M38,22 L62,22 M50,10 L50,34" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
            <path d="M40,38 L60,38 L64,48 L36,48 Z" className="fill-emerald-700" />
            <rect x="44" y="41" width="3" height="3" fill="#FAFAFA" opacity="0.9" />
            <rect x="48.5" y="41" width="3" height="3" fill="#FAFAFA" opacity="0.9" />
            <rect x="53" y="41" width="3" height="3" fill="#FAFAFA" opacity="0.9" />
          </svg>
        </div>
      )
    },
    {
      id: 4,
      value: "10+",
      label: "EXPORT COUNTRIES",
      icon: (
        <div className="relative w-20 h-12 mx-auto mb-3 transition-transform duration-700 group-hover:scale-105">
          <svg viewBox="0 0 100 60" className="w-full h-full fill-emerald-800">
            <path d="M20,50 Q10,30 20,10 M25,45 Q15,25 25,5 M30,40 Q20,20 30,0" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
            <path d="M80,50 Q90,30 80,10 M75,45 Q85,25 75,5 M70,40 Q80,20 70,0" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
            <circle cx="50" cy="35" r="14" fill="currentColor" opacity="0.2" />
            <path d="M50,21 Q60,21 60,35 Q60,49 50,49 Q40,49 40,35 Q40,21 50,21" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M36,35 Q50,45 64,35 M36,35 Q50,25 64,35" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
            <path d="M56,8 Q64,8 64,16 Q64,24 56,30 Q48,24 48,16 Q48,8 56,8 Z" className="fill-emerald-600" />
            <circle cx="56" cy="16" r="3" fill="#FAFAFA" />
          </svg>
        </div>
      )
    }
  ];

  return (
    // Removed all vertical padding and horizontal constraints to make it edge-to-edge and compact
    <section className="relative bg-white overflow-visible w-full py-4">

      <div className="w-full relative z-10 px-0">
        {/* Gap reduced and max-width removed for an edge-to-edge look */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-2">
          {stats.map((stat) => (
            <div
              key={stat.id}
              // Card color updated to a premium, subtle emerald cream. 
              // Removed extra padding for a ultra-compact feel.
              className="group relative bg-[#f4fcf7] p-6 md:p-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl hover:z-20 hover:-translate-y-1 border-x border-emerald-50/50 cursor-default overflow-hidden"
            >
              {/* Premium Card Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/30 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <div className="relative z-10">
                {stat.icon}
                <div className="flex flex-col gap-1.5">
                  <span className="text-3xl md:text-5xl font-extrabold text-[#113328] tracking-tighter group-hover:text-emerald-800 transition-colors duration-500">
                    {stat.value}
                  </span>

                  {/* Subtle, premium divider line */}
                  <div className="w-6 h-[2px] bg-emerald-200 mx-auto rounded-full my-1 transition-all duration-500 group-hover:w-12 group-hover:bg-emerald-600"></div>

                  <span className="text-[10px] md:text-xs font-bold text-emerald-950/60 uppercase tracking-[0.2em] leading-relaxed max-w-[180px] mx-auto group-hover:text-emerald-900 transition-colors duration-500">
                    {stat.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;