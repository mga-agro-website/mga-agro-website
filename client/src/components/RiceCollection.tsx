import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import type { RiceProduct } from "@shared/schema";

const gradients = [
  "from-amber-900/80 to-yellow-900/80",
  "from-yellow-900/80 to-amber-800/80",
  "from-orange-900/80 to-yellow-900/80",
  "from-yellow-800/80 to-orange-900/80",
];

function ProductCardSkeleton() {
  return (
    <Card className="relative overflow-visible bg-white/50 backdrop-blur-sm border border-gold/20">
      <div className="p-6 sm:p-8">
        <Skeleton className="h-48 sm:h-56 rounded-lg mb-6 bg-gold/10" />
        <div className="space-y-4">
          <div>
            <Skeleton className="h-3 w-24 mb-2 bg-gold/10" />
            <Skeleton className="h-8 w-48 bg-gold/10" />
          </div>
          <Skeleton className="h-16 w-full bg-gold/10" />
          <div className="flex gap-2">
            <Skeleton className="h-6 w-20 rounded-full bg-gold/10" />
            <Skeleton className="h-6 w-24 rounded-full bg-gold/10" />
            <Skeleton className="h-6 w-20 rounded-full bg-gold/10" />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default function RiceCollection() {
  const { data: products, isLoading } = useQuery<RiceProduct[]>({
    queryKey: ["/api/products"],
  });

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {isLoading ? (
            <>
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
            </>
          ) : (
            products?.slice(0, 4).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card
                  className="group relative overflow-visible bg-white/50 backdrop-blur-sm border border-gold/20 hover:border-gold/50 transition-all duration-500 cursor-pointer"
                  data-testid={`product-card-${product.id}`}
                >
                  {/* Card inner content */}
                  <div className="relative p-6 sm:p-8">
                    {/* Rice image placeholder with gradient */}
                    <div className={`relative h-48 sm:h-56 rounded-lg overflow-hidden mb-6 bg-gradient-to-br ${gradients[index % gradients.length]}`}>
                      {/* Decorative rice grain pattern */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          {/* Rice grain shapes */}
                          <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="flex gap-3"
                          >
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className="w-3 h-12 bg-white/20 rounded-full transform rotate-12"
                                style={{ 
                                  transform: `rotate(${15 + i * 5}deg) translateY(${Math.sin(i) * 10}px)`
                                }}
                              />
                            ))}
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      {/* Origin badge */}
                      <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
                        {product.origin}
                      </div>
                    </div>

                    {/* Product info */}
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs text-gold-dark font-medium uppercase tracking-wider mb-1">
                          {product.grainType}
                        </p>
                        <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-royal-black group-hover:text-gold-dark transition-colors duration-300">
                          {product.name}
                        </h3>
                      </div>

                      <p className="font-body text-royal-black/60 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature) => (
                          <span
                            key={feature}
                            className="text-xs bg-gold/10 text-gold-dark px-3 py-1 rounded-full border border-gold/20"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* View Details Button - appears on hover */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="pt-2"
                      >
                        <Button
                          className="w-full bg-royal-emerald hover:bg-royal-emerald/90 text-white font-medium group/btn opacity-0 group-hover:opacity-100 transition-all duration-300"
                          data-testid={`view-details-${product.id}`}
                        >
                          <span>View Details</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </div>
                  </div>

                  {/* Golden glow on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
