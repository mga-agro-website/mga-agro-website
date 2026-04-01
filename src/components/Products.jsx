import React, { useRef, useState, useEffect } from 'react';

const Products = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeVariants, setActiveVariants] = useState({});

  const products = [
    {
      id: 1,
      name: "Premium Super Fine Rice",
      description: "Extra long grains with an exquisite aroma, meticulously processed for the finest culinary experience.",
      image: "/Rice Bags 1.webp",
      tags: ["Super Fine", "Premium"],
      rating: 4.9,
      reviews: 128,
      variants: ["5kg", "10kg", "25kg"]
    },
    {
      id: 2,
      name: "Gold Standard Raw Rice",
      description: "Carefully milled raw rice that retains maximum nutritional value and a brilliant natural whiteness.",
      image: "/Rice Bags 2.webp",
      tags: ["Raw Rice", "Healthy"],
      rating: 4.7,
      reviews: 84,
      variants: ["10kg", "25kg", "50kg"]
    },
    {
      id: 3,
      name: "Classic Parboiled Rice",
      description: "Thermally processed to drive nutrients into the grain, ensuring fluffy, separate grains when cooked.",
      image: "/Rice Bags 3.webp",
      tags: ["Parboiled", "Nutrient"],
      rating: 4.8,
      reviews: 256,
      variants: ["5kg", "25kg", "50kg"]
    },
    {
      id: 4,
      name: "Everyday Sella Rice",
      description: "High-quality, durable sella rice perfect for daily consumption with consistent cooking results.",
      image: "/Rice Bags 4.webp",
      tags: ["Sella", "Daily Use"],
      rating: 4.6,
      reviews: 312,
      variants: ["10kg", "25kg"]
    },
    {
      id: 5,
      name: "Special Reserve Rice",
      description: "A specially curated reserve of our finest harvest, offering unmatched taste and texture.",
      image: "/Rice Bags 5.webp",
      tags: ["Reserve", "Aromatic"],
      rating: 5.0,
      reviews: 95,
      variants: ["5kg", "10kg"]
    }
  ];

  // Auto-scroll logic 
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          const cardWidth = scrollRef.current.children[0]?.clientWidth || 400;
          scrollRef.current.scrollBy({ left: cardWidth + 32, behavior: 'smooth' });
        }
      }
    }, 4500); // Slightly longer pause for better reading

    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0]?.clientWidth || 400;
      const scrollAmount = direction === 'left' ? -(cardWidth + 32) : (cardWidth + 32);
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleVariantClick = (productId, variant) => {
    setActiveVariants(prev => ({ ...prev, [productId]: variant }));
  };

  const handleInquire = (product, variant) => {
    // Generate absolute URL for the image so WhatsApp can generate a rich link preview photo
    const imageUrl = `${window.location.origin}${product.image.replace(/ /g, '%20')}`;
    const message = `Hello M.G.A. AGRO,\n\nI would like to inquire about your product:\n- Product: ${product.name}\n- Preferred Size: ${variant}\n\nAttached Product Photo:\n${imageUrl}\n\nPlease share the pricing and bulk order details.`;

    window.open(`https://wa.me/919775930840?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="products" className="py-24 bg-slate-50 overflow-hidden relative font-sans">
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          @keyframes slideUpFade {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-header { animation: slideUpFade 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        `}
      </style>

      {/* Very subtle background elements for a clean light theme */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] bg-teal-50/60 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 animate-header gap-6 px-2">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-700 font-bold tracking-wider uppercase text-xs mb-4">
              Premium Selection
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
              Our Finest Grains
            </h2>
            <p className="text-lg text-slate-600 font-normal mt-4 max-w-2xl leading-relaxed">
              Cultivated with care, processed with precision. Explore our export-quality rice varieties tailored for every culinary need across the globe.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-3 pb-2">
            <button
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-emerald-600 hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              aria-label="Previous product"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-emerald-600 hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              aria-label="Next product"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* Sliding Carousel */}
        <div
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-16 pt-4 px-2 no-scrollbar scroll-smooth"
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {products.map((product) => {
            const activeVariant = activeVariants[product.id] || product.variants[0];

            return (
              <div
                key={product.id}
                className="min-w-[90vw] md:min-w-[420px] lg:min-w-[450px] snap-center group relative"
              >
                {/* Product Card Container */}
                <div className="bg-white rounded-[2.5rem] p-3 shadow-sm hover:shadow-[0_20px_50px_-15px_rgba(16,185,129,0.15)] transition-all duration-500 h-full flex flex-col border border-slate-100 group-hover:border-emerald-100">

                  {/* Clean Image Section */}
                  <div className="relative h-[340px] w-full rounded-[2rem] overflow-hidden bg-slate-50 flex items-center justify-center p-8 group-hover:bg-emerald-50/30 transition-colors duration-500">
                    {/* Minimal backdrop glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-white rounded-full blur-2xl opacity-60"></div>

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-auto h-full max-h-[280px] object-contain relative z-10 transition-transform duration-[1.5s] ease-out group-hover:scale-110 drop-shadow-2xl"
                    />

                    {/* Floating Badges */}
                    <div className="absolute top-5 left-5 flex flex-col gap-2 z-20">
                      {product.tags.map((tag, i) => (
                        <span
                          key={tag}
                          className={`text-[11px] uppercase tracking-widest font-bold px-4 py-2 rounded-full shadow-sm transition-all duration-500 ${i === 0 ? 'bg-slate-900 text-white' : 'bg-white/80 text-slate-700 backdrop-blur-md border border-slate-200'}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Quick Rating Badge */}
                    <div className="absolute top-5 right-5 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-slate-200 flex items-center gap-1">
                      <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-bold text-slate-700">{product.rating}</span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Title & Description */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <div className="mt-auto space-y-6">
                      {/* Weight Variants */}
                      <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Available Sizes</p>
                        <div className="flex flex-wrap gap-2">
                          {product.variants.map(variant => (
                            <button
                              key={variant}
                              onClick={() => handleVariantClick(product.id, variant)}
                              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${activeVariant === variant
                                ? 'border-emerald-500 bg-emerald-50 text-emerald-700 shadow-sm'
                                : 'border-slate-200 bg-white text-slate-600 hover:border-emerald-200 hover:bg-slate-50'
                                }`}
                            >
                              {variant}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                        <button
                          onClick={() => handleInquire(product, activeVariant)}
                          className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-4 rounded-2xl font-semibold text-sm transition-colors shadow-sm shadow-emerald-200 flex items-center justify-center gap-2"
                        >
                          Inquire Now
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </button>
                        <a
                          href="#contact"
                          className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 py-3.5 px-4 rounded-2xl font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                        >
                          Request Sample
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;