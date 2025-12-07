import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import type { ExportCountry } from "@shared/schema";

export default function ExportMap() {
  const { data: countries, isLoading } = useQuery<ExportCountry[]>({
    queryKey: ["/api/countries"],
  });

  return (
    <section
      id="export"
      className="relative py-24 sm:py-32 bg-royal-black overflow-hidden"
      data-testid="section-export"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-royal-emerald/5 rounded-full blur-[120px]" />
      </div>

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
            <Globe className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold">Global Reach</span>
          </motion.div>

          <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="export-title">
            Trusted by <span className="text-gold">{countries?.length || 23} Countries</span>
          </h2>
          <p className="font-body text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
            Our premium rice graces tables across the globe, from the Middle East 
            to North America.
          </p>
        </motion.div>

        {/* Interactive World Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[2/1] max-w-5xl mx-auto rounded-lg overflow-hidden border border-gold/20"
          data-testid="export-map-container"
        >
          {isLoading ? (
            <div className="w-full h-full flex items-center justify-center">
              <Skeleton className="w-full h-full bg-gold/10 rounded-lg" />
            </div>
          ) : (
            <>
              {/* World Map Image */}
              <img
                src="/MAP.jpg"
                alt="World Map showing export countries"
                className="w-full h-full object-cover"
                data-testid="export-map-image"
              />
            </>
          )}
        </motion.div>

        {/* Country list for mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3"
          data-testid="export-country-list"
        >
          {isLoading ? (
            <>
              {[...Array(8)].map((_, i) => (
                <Skeleton key={i} className="h-8 w-24 rounded-full bg-gold/10" />
              ))}
            </>
          ) : (
            <>
              {countries?.slice(0, 12).map((country) => (
                <span
                  key={country.id}
                  className="px-3 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs sm:text-sm text-white/80 hover:bg-gold/20 hover:text-white transition-colors cursor-default"
                  data-testid={`export-country-${country.id}`}
                >
                  {country.name}
                </span>
              ))}
              {countries && countries.length > 12 && (
                <span 
                  className="px-3 py-1.5 bg-gold/20 border border-gold/30 rounded-full text-xs sm:text-sm text-gold font-medium"
                  data-testid="export-country-more"
                >
                  +{countries.length - 12} more
                </span>
              )}
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
