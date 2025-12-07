import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import type { RiceProduct } from "@shared/schema";
import { productImages } from "@/lib/images";
import { useState, useRef } from "react";

function ProductCardSkeleton() {
  return (
    <div className="flex-shrink-0 w-[300px] md:w-[450px] snap-center">
      <Skeleton className="h-[480px] md:h-[650px] rounded-3xl bg-gold/10" />
    </div>
  );
}

function ProductCard({ product, index }: { product: RiceProduct; index: number }) {
  const [isActive, setIsActive] = useState(false);

  // Different gradient combinations for active state
  const gradientCombos = [
    "from-gold/30 via-royal-emerald/40 to-gold/20",
    "from-royal-emerald/30 via-gold/40 to-royal-emerald/20",
    "from-gold/25 via-royal-emerald/35 to-gold/15",
    "from-royal-emerald/25 via-gold/35 to-royal-emerald/15",
  ];

  const activeGradient = gradientCombos[index % gradientCombos.length];

  return (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex-shrink-0 w-[300px] md:w-[450px] snap-center"
      data-testid={`product-card-${product.id}`}
    >
      <div
        onClick={() => setIsActive(!isActive)}
        className="group relative h-full cursor-pointer"
      >
        {/* Product Card */}
        <div className="relative h-[480px] md:h-[650px] rounded-3xl overflow-hidden bg-royal-cream border-2 border-gold/30 transition-all duration-500 group-hover:border-gold/50">
          {/* Background Container */}
          <div className="absolute inset-0 z-0">
            {/* Before Background - Previous cream background with subtle pattern */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-royal-cream via-royal-cream/95 to-royal-black/5"
              animate={{ opacity: isActive ? 0 : 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            
            {/* After Background - Golden/Emerald glow with more intensity */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${activeGradient} opacity-90`}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            
            {/* Light overlay for active state with better gradient */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white/80 backdrop-blur-[2px]"
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23 11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm22 4c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm29-22c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM6 83c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm47-24c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }} />
          </div>

          {/* Product Image Box */}
          <div className="absolute inset-0 flex items-center justify-center p-2 z-10 overflow-visible">
            <motion.div
              className="w-full h-full flex items-center justify-center"
              animate={{
                y: isActive ? "-28%" : "0%",
              }}
              transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
            >
              <motion.img 
                src={productImages[product.image] || product.image}
                alt={product.name}
                className="w-[500px] md:w-[700px] h-auto max-h-[600px] md:max-h-[800px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
                style={{ transformOrigin: "center center" }}
                animate={{
                  rotate: isActive ? -12 : 0,
                  scale: isActive ? 0.8 : 1,
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30,
                  mass: 0.5
                }}
              />
            </motion.div>
          </div>

          {/* Content */}
          <div className="absolute bottom-8 md:bottom-12 left-0 right-0 z-10 px-6 md:px-8 text-center">
            {/* Title and Description - Shows after animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: isActive ? 1 : 0,
                y: isActive ? 0 : 30,
              }}
              transition={{ duration: 0.5, delay: isActive ? 0.15 : 0 }}
            >
              <motion.h2
                className="font-cinzel text-2xl md:text-3xl font-bold text-royal-black mb-2 md:mb-3 leading-tight"
                transition={{ delay: isActive ? 0.2 : 0 }}
              >
                {product.name}
              </motion.h2>
              <motion.p
                className="text-royal-black/75 text-sm md:text-base mb-4 md:mb-6 font-medium leading-relaxed"
                transition={{ delay: isActive ? 0.25 : 0 }}
              >
                {product.description}
              </motion.p>
            </motion.div>

            {/* View/Hide Details Button - Always Visible */}
            <Button
              className="bg-royal-emerald text-white hover:bg-gold hover:text-royal-black font-bold px-8 md:px-10 py-2.5 md:py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-sm md:text-base"
              onClick={(e) => {
                e.stopPropagation();
                setIsActive(!isActive);
              }}
            >
              {isActive ? (
                <>
                  Hide Details
                  <ChevronUp className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                </>
              ) : (
                <>
                  View Details
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                </>
              )}
            </Button>
          </div>

          {/* Grain Type Badge */}
          <div className="absolute top-4 md:top-6 right-4 md:right-6 bg-gold/95 text-royal-black px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold z-20 shadow-lg backdrop-blur-sm border border-gold/50">
            {product.grainType}
          </div>

          {/* Origin Badge */}
          <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-black/70 backdrop-blur-md text-white text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full z-20 border-2 border-gold/40 shadow-lg">
            {product.origin}
          </div>

          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/20 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold/20 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold/20 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold/20 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          {/* Glow effect on active */}
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-gold/20 via-royal-emerald/20 to-gold/20 rounded-3xl blur-xl opacity-0 -z-10"
            animate={{ opacity: isActive ? 0.6 : 0 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function RiceCollection() {
  const { data: products, isLoading } = useQuery<RiceProduct[]>({
    queryKey: ["/api/products"],
  });

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = window.innerWidth >= 768 ? 470 : 320; // 450px card + 20px gap
      scrollContainerRef.current.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = window.innerWidth >= 768 ? 470 : 320; // 450px card + 20px gap
      scrollContainerRef.current.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="collection"
      className="relative py-24 sm:py-32 bg-royal-cream overflow-hidden"
      data-testid="section-collection"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Section Header */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold-dark">Premium Quality</span>
          </motion.div>
          
          <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold text-royal-black mb-6" data-testid="collection-title">
            Our Premium{" "}
            <span className="text-gold-dark">Collection</span>
          </h2>
          
          <p className="font-body text-lg sm:text-xl text-royal-black/60 max-w-2xl mx-auto">
            Experience the finest selection of rice varieties, carefully sourced and 
            processed to deliver exceptional quality to your table.
          </p>
        </motion.div>
      </div>

      {/* Product Cards - Single Horizontal Line */}
      <div className="relative">
        <div 
          ref={scrollContainerRef}
          className="flex flex-nowrap gap-5 overflow-x-auto overflow-y-hidden pb-8 snap-x snap-mandatory scroll-smooth scrollbar-hide"
        >
          {isLoading ? (
            <>
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
            </>
          ) : (
            products?.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))
          )}
        </div>

        {/* Arrow Buttons - Desktop Only */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center bg-white/90 hover:bg-white border-2 border-gold/30 hover:border-gold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-royal-black" />
        </button>

        <button
          onClick={scrollRight}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center bg-white/90 hover:bg-white border-2 border-gold/30 hover:border-gold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-royal-black" />
        </button>
      </div>

      {/* Bottom decoration */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent max-w-xl mx-auto mt-16"
        />
      </div>
    </section>
  );
}
