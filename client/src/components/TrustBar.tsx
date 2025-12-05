import { motion } from "framer-motion";
import { Award, Shield, Leaf, Globe, Clock } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import type { Certification } from "@shared/schema";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  award: Award,
  shield: Shield,
  leaf: Leaf,
  globe: Globe,
  clock: Clock,
};

export default function TrustBar() {
  const { data: certifications, isLoading } = useQuery<Certification[]>({
    queryKey: ["/api/certifications"],
  });

  return (
    <section
      className="relative bg-royal-black border-y border-gold/20 py-6 sm:py-8 overflow-hidden"
      data-testid="section-trust"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12">
          {isLoading ? (
            <>
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Skeleton className="w-7 h-7 rounded-full bg-gold/20" />
                  <div className="flex flex-col gap-1">
                    <Skeleton className="h-3 w-24 bg-gold/20" />
                    <Skeleton className="h-2 w-16 bg-gold/10" />
                  </div>
                </div>
              ))}
            </>
          ) : (
            certifications?.map((cert, index) => {
              const Icon = iconMap[cert.icon] || Award;
              const nameParts = cert.name.split(" ");
              const mainText = nameParts.slice(0, -1).join(" ");
              const subText = nameParts[nameParts.length - 1];
              
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 group cursor-default"
                  data-testid={`trust-item-${cert.id}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="relative"
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-gold transition-colors duration-300" />
                    <div className="absolute inset-0 bg-gold/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                  <div className="flex flex-col">
                    <span className="text-white text-xs sm:text-sm font-medium leading-tight">
                      {mainText}
                    </span>
                    <span className="text-gold/70 text-[10px] sm:text-xs leading-tight">
                      {subText}
                    </span>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}
