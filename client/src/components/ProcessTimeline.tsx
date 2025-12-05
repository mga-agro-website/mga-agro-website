import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Wheat, Sun, Settings, Sparkles, Palette, Package } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import type { ProcessStep } from "@shared/schema";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  wheat: Wheat,
  sun: Sun,
  settings: Settings,
  sparkles: Sparkles,
  palette: Palette,
  package: Package,
};

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const { data: steps, isLoading } = useQuery<ProcessStep[]>({
    queryKey: ["/api/process"],
  });

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative py-24 sm:py-32 overflow-hidden"
      data-testid="section-process"
    >
      {/* Background with parallax effect */}
      <div className="absolute inset-0 bg-royal-black">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
        
        {/* Animated background elements */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-royal-emerald/5 rounded-full blur-[120px]" />
        </motion.div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="process-title">
            Our <span className="text-gold">Process</span>
          </h2>
          <p className="font-body text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
            From field to table, every step is crafted with precision and care to deliver 
            the finest quality rice.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/20 -translate-x-1/2 hidden md:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-gold to-gold/50 origin-top"
            />
          </div>

          {/* Mobile line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gold/20 md:hidden">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-gold to-gold/50 origin-top"
            />
          </div>

          {/* Steps */}
          <div className="space-y-12 md:space-y-24">
            {isLoading ? (
              <>
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="relative flex items-center gap-4 md:gap-8">
                    <div className="flex-1 pl-20 md:pl-0">
                      <Skeleton className="h-40 w-full rounded-lg bg-gold/10" />
                    </div>
                    <Skeleton className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gold/20" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </>
            ) : (
              steps?.map((step, index) => {
                const isEven = index % 2 === 0;
                const Icon = iconMap[step.icon] || Wheat;

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`relative flex items-center gap-4 md:gap-8 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    data-testid={`process-step-${step.id}`}
                  >
                    {/* Content Card */}
                    <div className={`flex-1 ${isEven ? "md:text-right md:pr-16" : "md:text-left md:pl-16"} pl-20 md:pl-0`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="inline-block"
                      >
                        <div className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-lg p-6 sm:p-8 hover:border-gold/40 transition-all duration-500">
                          <div className={`flex items-center gap-3 mb-4 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                            <span className="text-gold font-cinzel text-sm tracking-wider">
                              STEP {String(step.id).padStart(2, "0")}
                            </span>
                          </div>
                          <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-3">
                            {step.title}
                          </h3>
                          <p className="font-body text-white/60 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Center Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="absolute left-8 md:left-1/2 md:-translate-x-1/2 z-10"
                    >
                      <div className="relative">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-royal-black border-2 border-gold flex items-center justify-center">
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-gold" />
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl" />
                      </div>
                    </motion.div>

                    {/* Spacer for layout */}
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
