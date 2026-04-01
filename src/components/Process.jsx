import React, { useState } from 'react';

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Sourcing",
      desc: "Selecting the finest paddy from trusted agricultural lands, ensuring absolute consistency in every batch.",
      image: "/01 Sourcing.jpg",
    },
    {
      num: "02",
      title: "Cleaning",
      desc: "Multi-level pre-cleaning systems remove dust, stones, and foreign matter, leaving only pure grain.",
      image: "/02 Cleaning.jpg",
    },
    {
      num: "03",
      title: "Milling",
      desc: "Precision de-husking and soft-polishing using advanced imported equipment to preserve natural nutrients.",
      image: "/03 Milling.png",
    },
    {
      num: "04",
      title: "Sorting",
      desc: "High-speed optical color sorters meticulously inspect each grain, ensuring 100% unstained perfection.",
      image: "/04 Sorting.png",
    },
    {
      num: "05",
      title: "Packing",
      desc: "Hygienic, automated, and moisture-proof packaging applied to guarantee maximum shelf life worldwide.",
      image: "/05 Packing.png",
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#FAFAF7] text-stone-800 relative overflow-hidden font-sans">
      {/* Soft warm background glows for creamy depth */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-100/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-stone-200/40 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="mb-16 md:mb-24 relative">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white text-amber-700 font-bold tracking-[0.2em] uppercase text-xs mb-6 border border-amber-200/60 shadow-sm">
            How We Do It
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight mb-6">
            Our Milling Process
          </h2>
          <p className="text-xl text-stone-500 font-light max-w-2xl leading-relaxed">
            A seamless blend of modern technology and traditional care, perfected over generations.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Left Side: Interactive Steps List */}
          <div className="w-full lg:w-5/12 space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`group cursor-pointer rounded-3xl p-6 lg:p-8 transition-all duration-500 border relative overflow-hidden ${activeStep === index
                    ? 'bg-white border-amber-100/50 shadow-[0_20px_50px_-15px_rgba(217,119,6,0.1)] z-10'
                    : 'bg-transparent border-transparent hover:bg-white/40 hover:border-stone-200/50'
                  }`}
                onMouseEnter={() => setActiveStep(index)}
                onClick={() => setActiveStep(index)}
              >
                {/* Active indicator line */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1.5 bg-amber-500 transition-all duration-500 origin-top rounded-r-md ${activeStep === index ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
                    }`}
                ></div>

                <div className="flex gap-6 items-start">
                  <div className={`text-4xl font-black transition-colors duration-500 ${activeStep === index ? 'text-amber-500' : 'text-stone-300 group-hover:text-stone-400'
                    }`}>
                    {step.num}
                  </div>
                  <div>
                    <h3 className={`text-2xl lg:text-3xl font-bold mb-3 transition-colors duration-500 ${activeStep === index ? 'text-stone-900' : 'text-stone-500 group-hover:text-stone-700'
                      }`}>
                      {step.title}
                    </h3>

                    {/* Collapsible description wrapper */}
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${activeStep === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 lg:grid-rows-[1fr] lg:opacity-60'
                        }`}
                    >
                      <p className="text-stone-500 leading-relaxed overflow-hidden text-sm md:text-base pr-4">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile Inline Image */}
                <div
                  className={`lg:hidden mt-6 rounded-2xl overflow-hidden transition-all duration-700 ease-out origin-top relative shadow-lg ${activeStep === index ? 'h-[240px] opacity-100 scale-100 block' : 'h-0 opacity-0 scale-95 hidden'
                    }`}
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Sticky Image Gallery (Desktop Only) */}
          <div className="hidden lg:block w-full lg:w-7/12 relative">
            <div className="sticky top-32 rounded-[2.5rem] overflow-hidden bg-stone-100 aspect-[4/4.5] shadow-2xl border border-white/80 ring-1 ring-stone-900/5">

              {/* Image Stack */}
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeStep === index
                      ? 'opacity-100 z-10 scale-100 translate-y-0'
                      : 'opacity-0 z-0 scale-105 translate-y-8 pointer-events-none'
                    }`}
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Elegant warm vignette to blend with the creamy theme while protecting text */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-stone-900/95 via-stone-900/30 to-transparent mix-blend-multiply"></div>
                </div>
              ))}

              {/* Dynamic Overlay Content overlaying the active image */}
              <div className="absolute bottom-12 left-12 right-12 z-30 pointer-events-none">
                <div className="inline-block px-5 py-2.5 bg-white/90 backdrop-blur-md rounded-full border border-white/50 text-amber-700 font-bold text-xs tracking-[0.2em] uppercase mb-5 shadow-lg">
                  Step {steps[activeStep].num}
                </div>
                <h4 className="text-4xl font-extrabold text-white drop-shadow-md mb-4 tracking-tight">
                  {steps[activeStep].title} Stage
                </h4>
                <p className="text-lg text-stone-200/90 max-w-lg drop-shadow-sm font-light leading-relaxed">
                  {steps[activeStep].desc}
                </p>
              </div>

              {/* Progress Bar Indicator at the bottom of the image */}
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/20 z-30 backdrop-blur-sm">
                <div
                  className="h-full bg-amber-500 transition-all duration-500 ease-out shadow-[0_0_15px_rgba(245,158,11,0.6)]"
                  style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                ></div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;