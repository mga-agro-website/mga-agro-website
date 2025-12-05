import { motion } from "framer-motion";
import { Package, Sparkles } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import type { PackagingProduct } from "@shared/schema";

const colorGradients = [
  "from-gray-800 to-gray-900",
  "from-amber-900 to-yellow-900",
  "from-yellow-800 to-amber-800",
  "from-gray-700 to-gray-800",
  "from-orange-900 to-amber-900",
];

export default function PackagingShowcase() {
  const { data: products, isLoading } = useQuery<PackagingProduct[]>({
    queryKey: ["/api/packaging"],
  });

  return (
    <section
      id="packaging"
      className="relative py-24 sm:py-32 bg-royal-cream overflow-hidden"
      data-testid="section-packaging"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <Package className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold-dark">Premium Packaging</span>
          </motion.div>

          <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold text-royal-black mb-6" data-testid="packaging-title">
            Packaging That Speaks{" "}
            <span className="text-gold-dark">Quality</span>
          </h2>
          <p className="font-body text-lg sm:text-xl text-royal-black/60 max-w-2xl mx-auto">
            From premium pouches to luxury boxes, our packaging preserves freshness 
            while reflecting the quality within.
          </p>
        </motion.div>

        {/* Packaging Cards */}
        <div className="relative">
          {/* Horizontal scroll container */}
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-5 md:overflow-visible">
            {isLoading ? (
              <>
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex-shrink-0 w-[280px] md:w-auto snap-center">
                    <Skeleton className="h-[320px] sm:h-[360px] rounded-lg bg-gold/10" />
                    <Skeleton className="h-6 w-32 mt-4 mx-auto bg-gold/10" />
                    <Skeleton className="h-4 w-48 mt-2 mx-auto bg-gold/5" />
                  </div>
                ))}
              </>
            ) : (
              products?.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-shrink-0 w-[280px] md:w-auto snap-center"
                  data-testid={`packaging-${product.id}`}
                >
                  <motion.div
                    whileHover={{ 
                      y: -10,
                      rotateY: 5,
                      scale: 1.02,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group relative h-full"
                    style={{ perspective: "1000px" }}
                  >
                    {/* Package mockup */}
                    <div className={`relative h-[320px] sm:h-[360px] rounded-lg overflow-hidden bg-gradient-to-br ${colorGradients[index % colorGradients.length]} border border-gold/20 group-hover:border-gold/50 transition-colors duration-500`}>
                      {/* Package visual */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                        {/* Size badge */}
                        <div className="absolute top-4 right-4 bg-gold/90 text-royal-black px-3 py-1 rounded-full text-sm font-bold">
                          {product.size}
                        </div>

                        {/* Package icon */}
                        <div className="relative mb-4">
                          <Package className="w-20 h-20 sm:w-24 sm:h-24 text-gold/50" />
                          <motion.div
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute inset-0 bg-gold/20 blur-xl rounded-full"
                          />
                        </div>

                        {/* Sparkle effect */}
                        <Sparkles className="absolute top-1/3 left-1/4 w-4 h-4 text-gold/40 animate-pulse" />
                        <Sparkles className="absolute bottom-1/3 right-1/4 w-3 h-3 text-gold/30 animate-pulse delay-300" />
                      </div>

                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>

                    {/* Product info */}
                    <div className="mt-4 text-center">
                      <h3 className="font-cinzel text-lg font-bold text-royal-black mb-1">
                        {product.type}
                      </h3>
                      <p className="text-sm text-royal-black/60">
                        {product.description}
                      </p>
                    </div>

                    {/* Golden glow on hover */}
                    <div className="absolute -inset-2 bg-gold/10 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                  </motion.div>
                </motion.div>
              ))
            )}
          </div>
        </div>

        {/* Bottom decoration */}
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
