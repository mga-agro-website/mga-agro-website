import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("/VIDEO1.mp4");

  useEffect(() => {
    // Randomly select between VIDEO1 and VIDEO2 on page load
    const videos = ["/VIDEO1.mp4", "/VIDEO2.mp4"];
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    setSelectedVideo(randomVideo);
  }, []);

  useEffect(() => {
    if (videoRef.current && selectedVideo) {
      videoRef.current.load(); // Reload video with new source
      videoRef.current.play().catch((err) => {
        console.log("Video autoplay failed:", err);
      });
    }
  }, [selectedVideo]);

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
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Video element */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onLoadedData={() => setIsVideoLoaded(true)}
          onError={() => {
            // If VIDEO1 fails, try VIDEO2
            if (selectedVideo === "/VIDEO1.mp4") {
              setSelectedVideo("/VIDEO2.mp4");
            }
          }}
          style={{
            opacity: isVideoLoaded ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            filter: "brightness(1.3) contrast(1.1)",
          }}
        >
          <source src={selectedVideo} type="video/mp4" />
          {/* Fallback to other video */}
          <source src={selectedVideo === "/VIDEO1.mp4" ? "/VIDEO2.mp4" : "/VIDEO1.mp4"} type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          Your browser does not support the video tag.
        </video>

        {/* Fallback background image (shown while video loads) */}
        <div 
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1536625905365-dcc333b44d9b?q=80&w=2669&auto=format&fit=crop")`,
          }}
        />

        {/* Gradient overlay for better text readability - lighter for brighter video */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        
        {/* Animated golden light rays */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gold/10 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-royal-emerald/10 rounded-full blur-[150px]" />
        </motion.div>

        {/* Grain texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
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
        <div className="font-cinzel text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-wide overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center flex-wrap gap-x-4"
        >
            <span>From</span>
            <span>Paddy</span>
            <span>to</span>
          <span className="text-gold relative">
            Plate
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 3.2, ease: "circOut" }}
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gold/30 origin-left"
            />
          </span>
          </motion.div>
        </div>

        {/* Subtitle */}
        <div className="overflow-hidden mb-6">
        <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 2.8, ease: "easeOut" }}
            className="font-cinzel text-gold/80 text-sm sm:text-base tracking-[0.3em] uppercase"
          data-testid="hero-since"
        >
          Since 1987
        </motion.p>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="font-body text-xl sm:text-2xl md:text-3xl text-white/90 font-light mb-12"
          data-testid="hero-description"
        >
          Premium Basmati & Chinigura Rice
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
        >
          <Button
            onClick={scrollToCollection}
            className="group relative overflow-visible bg-transparent hover:bg-transparent text-white hover:text-gold font-cinzel text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-7 tracking-wider transition-all duration-500 border-2 border-gold hover:border-gold/80"
            data-testid="hero-cta"
          >
            <span className="relative z-10">Explore Our Collection</span>
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gold/10 blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
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
