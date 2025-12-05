import { motion } from "framer-motion";
import { useState } from "react";
import { Globe, MapPin } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import type { ExportCountry } from "@shared/schema";

export default function ExportMap() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  
  const { data: countries, isLoading } = useQuery<ExportCountry[]>({
    queryKey: ["/api/countries"],
  });

  const hoveredCountryData = countries?.find(c => c.id === hoveredCountry);

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
          className="relative aspect-[2/1] max-w-5xl mx-auto"
          data-testid="export-map-container"
        >
          {isLoading ? (
            <div className="w-full h-full flex items-center justify-center">
              <Skeleton className="w-full h-full bg-gold/10 rounded-lg" />
            </div>
          ) : (
            <>
              {/* Simplified World Map SVG */}
              <svg
                viewBox="0 0 100 50"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
                data-testid="export-map-svg"
              >
                {/* Simplified continent outlines */}
                <defs>
                  <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.05" />
                  </linearGradient>
                </defs>

                {/* North America */}
                <path
                  d="M10,15 Q15,10 25,12 Q30,15 28,25 Q25,30 20,32 Q15,30 12,25 Q10,20 10,15"
                  fill="url(#mapGradient)"
                  stroke="#D4AF37"
                  strokeWidth="0.2"
                  strokeOpacity="0.3"
                />

                {/* South America */}
                <path
                  d="M22,35 Q28,38 26,48 Q22,50 20,45 Q18,40 22,35"
                  fill="url(#mapGradient)"
                  stroke="#D4AF37"
                  strokeWidth="0.2"
                  strokeOpacity="0.3"
                />

                {/* Europe */}
                <path
                  d="M45,18 Q55,15 55,25 Q52,28 48,26 Q44,24 45,18"
                  fill="url(#mapGradient)"
                  stroke="#D4AF37"
                  strokeWidth="0.2"
                  strokeOpacity="0.3"
                />

                {/* Africa */}
                <path
                  d="M48,32 Q58,30 58,45 Q55,52 50,50 Q45,45 48,32"
                  fill="url(#mapGradient)"
                  stroke="#D4AF37"
                  strokeWidth="0.2"
                  strokeOpacity="0.3"
                />

                {/* Asia */}
                <path
                  d="M55,12 Q75,10 85,20 Q88,30 80,35 Q70,40 60,35 Q55,30 55,20 Q55,15 55,12"
                  fill="url(#mapGradient)"
                  stroke="#D4AF37"
                  strokeWidth="0.2"
                  strokeOpacity="0.3"
                />

                {/* Australia */}
                <path
                  d="M78,55 Q88,52 90,60 Q88,68 82,68 Q76,65 78,55"
                  fill="url(#mapGradient)"
                  stroke="#D4AF37"
                  strokeWidth="0.2"
                  strokeOpacity="0.3"
                />

                {/* Grid lines */}
                {[...Array(5)].map((_, i) => (
                  <line
                    key={`h-${i}`}
                    x1="0"
                    y1={10 + i * 10}
                    x2="100"
                    y2={10 + i * 10}
                    stroke="#D4AF37"
                    strokeWidth="0.05"
                    strokeOpacity="0.1"
                  />
                ))}
                {[...Array(10)].map((_, i) => (
                  <line
                    key={`v-${i}`}
                    x1={10 + i * 10}
                    y1="0"
                    x2={10 + i * 10}
                    y2="50"
                    stroke="#D4AF37"
                    strokeWidth="0.05"
                    strokeOpacity="0.1"
                  />
                ))}

                {/* Country markers */}
                {countries?.map((country) => (
                  <g key={country.id}>
                    <motion.circle
                      cx={country.x}
                      cy={country.y}
                      r={hoveredCountry === country.id ? 1.5 : 0.8}
                      fill="#D4AF37"
                      className="cursor-pointer"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: Math.random() * 0.5 }}
                      onMouseEnter={() => setHoveredCountry(country.id)}
                      onMouseLeave={() => setHoveredCountry(null)}
                      data-testid={`map-marker-${country.id}`}
                    />
                    {/* Pulse effect */}
                    <motion.circle
                      cx={country.x}
                      cy={country.y}
                      r="2"
                      fill="none"
                      stroke="#D4AF37"
                      strokeWidth="0.1"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{
                        opacity: [0.5, 0],
                        scale: [0.5, 2],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  </g>
                ))}
              </svg>

              {/* Hover tooltip */}
              {hoveredCountryData && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-royal-black/95 backdrop-blur-sm border border-gold/30 rounded-lg px-6 py-4 pointer-events-none z-10"
                  data-testid="export-tooltip"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gold" />
                    <div>
                      <h4 className="font-cinzel text-lg font-bold text-white">
                        {hoveredCountryData.name}
                      </h4>
                      <p className="text-gold/80 text-sm">
                        Since {hoveredCountryData.since}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
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
