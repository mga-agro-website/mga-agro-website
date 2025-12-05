import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Package, Globe, Scan, Clock, Users, CheckCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import type { Statistic } from "@shared/schema";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  package: Package,
  globe: Globe,
  scan: Scan,
  clock: Clock,
  users: Users,
  "check-circle": CheckCircle,
};

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(interval);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(interval);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} data-testid="animated-number">
      {displayValue.toLocaleString()}{suffix}
    </span>
  );
}

export default function AnimatedCounters() {
  const { data: statistics, isLoading } = useQuery<Statistic[]>({
    queryKey: ["/api/statistics"],
  });

  return (
    <section
      id="stats"
      className="relative py-24 sm:py-32 overflow-hidden"
      data-testid="section-stats"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-royal-cream to-gold/5" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold text-royal-black mb-6" data-testid="stats-title">
            Why Choose <span className="text-gold-dark">Us</span>
          </h2>
          <p className="font-body text-lg sm:text-xl text-royal-black/60 max-w-2xl mx-auto">
            Numbers that speak louder than words - our commitment to excellence 
            reflected in every grain.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {isLoading ? (
            <>
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <Skeleton className="w-24 h-24 rounded-full bg-gold/20 mb-6" />
                  <Skeleton className="h-12 w-32 bg-gold/20 mb-2" />
                  <Skeleton className="h-4 w-24 bg-gold/10" />
                </div>
              ))}
            </>
          ) : (
            statistics?.map((stat, index) => {
              const Icon = iconMap[stat.icon] || Package;
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                  data-testid={`stat-${stat.id}`}
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Icon with circular border */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative mb-4 sm:mb-6"
                    >
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-gold/50 flex items-center justify-center bg-white/50 backdrop-blur-sm group-hover:border-gold transition-colors duration-300">
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-gold-dark" />
                      </div>
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-full bg-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>

                    {/* Number */}
                    <div className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold text-royal-black mb-2">
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                    </div>

                    {/* Label */}
                    <p className="font-body text-sm sm:text-base text-royal-black/60">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
