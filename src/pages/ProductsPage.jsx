import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Star } from 'lucide-react';
import Navbar from '../components/Navbar';

const ProductsPage = () => {
  const [activeVariants, setActiveVariants] = useState({});
  const [activeFilter, setActiveFilter] = useState('all');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    // ... rest of the code remains same
    {
      id: 1,
      name: 'Premium Super Fine Rice',
      category: 'fine',
      description:
        'Extra long grains with an exquisite, natural aroma. Meticulously processed using imported polishing equipment, delivering a brilliant white appearance and soft-cooked texture ideal for all occasions.',
      image: '/Rice Bags 1.webp',
      tags: ['Super Fine', 'Premium'],
      rating: 4.9,
      reviews: 128,
      variants: ['5kg', '10kg', '25kg'],
      details: ['Extra Long Grain', 'Low Broken %', 'Polished Finish', 'Export Quality'],
    },
    {
      id: 2,
      name: 'Gold Standard Raw Rice',
      category: 'raw',
      description:
        'Carefully milled raw rice that retains maximum nutritional value. A brilliant natural whiteness with consistent grain size — perfect for everyday home cooking and institutional supply.',
      image: '/Rice Bags 2.webp',
      tags: ['Raw Rice', 'Healthy'],
      rating: 4.7,
      reviews: 84,
      variants: ['10kg', '25kg', '50kg'],
      details: ['Medium Grain', 'Low Moisture', 'Natural Polish', 'High Volume'],
    },
    {
      id: 3,
      name: 'Classic Parboiled Rice',
      category: 'parboiled',
      description:
        'Thermally processed using precision steam technology to drive nutrients deep into the grain. Produces perfectly fluffy, non-sticky cooked rice — a top seller in international markets.',
      image: '/Rice Bags 3.webp',
      tags: ['Parboiled', 'Nutrient Rich'],
      rating: 4.8,
      reviews: 256,
      variants: ['5kg', '25kg', '50kg'],
      details: ['Golden Hue', 'Firm Texture', 'Non-Sticky', 'Longer Shelf Life'],
    },
    {
      id: 4,
      name: 'Everyday Sella Rice',
      category: 'sella',
      description:
        'High-quality Sella (parboiled and dried) rice for consistent daily consumption. Robust cooking performance with low breakage percentage — trusted by families and food service operators.',
      image: '/Rice Bags 4.webp',
      tags: ['Sella', 'Daily Use'],
      rating: 4.6,
      reviews: 312,
      variants: ['10kg', '25kg'],
      details: ['Pre-Gelatinized', 'Consistent Size', 'Low Breakage', 'Economic Value'],
    },
    {
      id: 5,
      name: 'Special Reserve Rice',
      category: 'fine',
      description:
        'A specially curated reserve from our finest harvest season. Hand-selected paddy stock, double-sorted through optical color sorters for an impeccable visual quality and superior flavour.',
      image: '/Rice Bags 5.webp',
      tags: ['Reserve', 'Aromatic'],
      rating: 5.0,
      reviews: 95,
      variants: ['5kg', '10kg'],
      details: ['Double Sorted', 'Handpicked Batch', 'Limited Stock', 'Gift Grade'],
    },
  ];

  const filters = [
    { id: 'all', label: 'All Products' },
    { id: 'fine', label: 'Super Fine' },
    { id: 'raw', label: 'Raw Rice' },
    { id: 'parboiled', label: 'Parboiled' },
    { id: 'sella', label: 'Sella' },
  ];

  const filtered = activeFilter === 'all' ? products : products.filter((p) => p.category === activeFilter);

  const handleVariantClick = (id, variant) => setActiveVariants((prev) => ({ ...prev, [id]: variant }));

  const handleInquire = (product, variant) => {
    const imageUrl = `${window.location.origin}${product.image.replace(/ /g, '%20')}`;
    const message = `Hello M.G.A. AGRO,\n\nI would like to inquire about your product:\n- Product: ${product.name}\n- Preferred Size: ${variant}\n\nAttached Product Photo:\n${imageUrl}\n\nPlease share the pricing and bulk order details.`;
    window.open(`https://wa.me/919775930840?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />

      {/* Hero */}
      <section className="pt-16 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px]" />
          <img src="/LINE ART2.webp" alt="" className="absolute bottom-0 left-10 w-48 opacity-10" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Our Products
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            Our Finest <span className="text-emerald-400">Grains</span>
          </h1>
          <p className="text-xl text-slate-300 font-light max-w-2xl leading-relaxed">
            From farm to final pack — five premium rice varieties crafted with precision, purity, and purpose for domestic and international markets.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-16 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-3 overflow-x-auto no-scrollbar">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  activeFilter === f.id
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                    : 'border-gray-200 text-gray-600 hover:border-emerald-300 hover:text-emerald-700'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filtered.map((product) => {
              const activeVariant = activeVariants[product.id] || product.variants[0];
              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-emerald-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-72 bg-slate-50 flex items-center justify-center p-8 group-hover:bg-emerald-50/30 transition-colors duration-500">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full blur-2xl opacity-60" />
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-auto h-full max-h-[240px] object-contain relative z-10 transition-transform duration-[1.5s] ease-out group-hover:scale-110 drop-shadow-2xl"
                    />
                    {/* Tags */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
                      {product.tags.map((tag, i) => (
                        <span
                          key={tag}
                          className={`text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full shadow-sm ${
                            i === 0 ? 'bg-slate-900 text-white' : 'bg-white/80 text-slate-700 border border-slate-200 backdrop-blur-md'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* Rating */}
                    <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-slate-200 flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span className="text-sm font-bold text-slate-700">{product.rating}</span>
                      <span className="text-xs text-slate-400">({product.reviews})</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">{product.name}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5">{product.description}</p>

                    {/* Feature Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {product.details.map((d) => (
                        <span key={d} className="text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full font-semibold">
                          {d}
                        </span>
                      ))}
                    </div>

                    {/* Variant Selector */}
                    <div className="mb-5">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Available Sizes</p>
                      <div className="flex flex-wrap gap-2">
                        {product.variants.map((v) => (
                          <button
                            key={v}
                            onClick={() => handleVariantClick(product.id, v)}
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                              activeVariant === v
                                ? 'border-emerald-500 bg-emerald-50 text-emerald-700 shadow-sm'
                                : 'border-slate-200 bg-white text-slate-600 hover:border-emerald-200'
                            }`}
                          >
                            {v}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto pt-4 border-t border-slate-100">
                      <button
                        onClick={() => handleInquire(product, activeVariant)}
                        className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-2xl font-semibold text-sm transition-colors shadow-sm flex items-center justify-center gap-2"
                      >
                        Inquire Now <ChevronRight className="w-4 h-4" />
                      </button>
                      <Link
                        to="/contacts"
                        className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 px-4 rounded-2xl font-semibold text-sm transition-colors flex items-center justify-center"
                      >
                        Request Sample
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-slate-400">No products found in this category.</div>
          )}

          {/* Packaging Info */}
          <div className="mt-16 bg-emerald-50 rounded-3xl p-10 border border-emerald-100 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Custom Packaging Available</h3>
            <p className="text-gray-500 max-w-xl mx-auto mb-6">We offer custom bag sizes from 1kg to 50kg in moisture-proof, food-grade packaging. OEM branding and white-label options are also available for distributors and retail chains.</p>
            <Link
              to="/contacts"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-colors shadow-lg shadow-emerald-200"
            >
              Request Custom Quote <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
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

export default ProductsPage;
