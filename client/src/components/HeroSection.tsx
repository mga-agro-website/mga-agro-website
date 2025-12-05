import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToCollection = () => {
    const element = document.querySelector("#collection");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      {/* Video/Image Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient background simulating golden paddy field at sunset */}
        <div className="absolute inset-0 bg-gradient-to-br from-royal-black via-[#1a1408] to-royal-black" />
        
        {/* Animated golden light rays */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-royal-emerald/5 rounded-full blur-[80px]" />
        </motion.div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Grain texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent max-w-xs mx-auto mb-8"
        />

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-cinzel text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-wide"
          data-testid="hero-title"
        >
          From Paddy to{" "}
          <span className="text-gold relative">
            Plate
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gold/30 origin-left"
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-cinzel text-gold/80 text-sm sm:text-base tracking-[0.3em] uppercase mb-6"
          data-testid="hero-since"
        >
          Since 1987
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-body text-xl sm:text-2xl md:text-3xl text-white/90 font-light mb-12"
          data-testid="hero-description"
        >
          Premium Basmati & Chinigura Rice
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <Button
            onClick={scrollToCollection}
            className="group relative overflow-visible bg-gold hover:bg-royal-emerald text-royal-black hover:text-white font-cinzel text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-7 tracking-wider transition-all duration-500 border-2 border-gold hover:border-royal-emerald"
            data-testid="hero-cta"
          >
            <span className="relative z-10">Explore Our Collection</span>
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-royal-emerald/0 group-hover:bg-royal-emerald/20 blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
          </Button>
        </motion.div>

        {/* Decorative bottom line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 1.3 }}
          className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent max-w-md mx-auto mt-16"
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={scrollToCollection}
          data-testid="hero-scroll-indicator"
        >
          <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 text-gold/70" />
        </motion.div>
      </motion.div>

      {/* Decorative corner elements */}
      <div className="absolute top-24 left-8 w-20 h-20 border-l-2 border-t-2 border-gold/20 hidden md:block" />
      <div className="absolute top-24 right-8 w-20 h-20 border-r-2 border-t-2 border-gold/20 hidden md:block" />
      <div className="absolute bottom-24 left-8 w-20 h-20 border-l-2 border-b-2 border-gold/20 hidden md:block" />
      <div className="absolute bottom-24 right-8 w-20 h-20 border-r-2 border-b-2 border-gold/20 hidden md:block" />
    </section>
  );
}
