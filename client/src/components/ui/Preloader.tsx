import { motion } from "framer-motion";
import { Wheat } from "lucide-react";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5s duration

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: isLoading ? 1 : 0, pointerEvents: isLoading ? "auto" : "none" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-royal-black flex items-center justify-center"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Circle */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute w-48 h-48 border border-gold/20 rounded-full"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="absolute w-64 h-64 border border-gold/10 rounded-full"
        />

        {/* Logo Icon */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="relative z-10 mb-6"
        >
          <Wheat className="w-16 h-16 text-gold" />
          <motion.div 
            className="absolute inset-0 bg-gold/30 blur-xl rounded-full"
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Text Reveal */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-widest text-center"
          >
            MGA AGRO
          </motion.h1>
        </div>
        
        <div className="overflow-hidden mt-2">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="flex items-center gap-4"
          >
            <div className="h-px w-12 bg-gold/50" />
            <span className="text-gold/80 text-xs tracking-[0.3em] uppercase">Since 1987</span>
            <div className="h-px w-12 bg-gold/50" />
          </motion.div>
        </div>

        {/* Loading Bar */}
        <div className="absolute bottom-[-100px] w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-full bg-gold"
          />
        </div>
      </div>
    </motion.div>
  );
}

