import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Wheat } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { id: "home", label: "Home", href: "#hero" },
  { id: "rice", label: "Our Rice", href: "#collection" },
  { id: "process", label: "Process", href: "#process" },
  { id: "factory", label: "Factory", href: "#factory" },
  { id: "gallery", label: "Gallery", href: "#gallery" },
  { id: "export", label: "Export", href: "#export" },
  { id: "contact", label: "Contact", href: "#footer" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-royal-black/80 backdrop-blur-xl border-b border-gold/30"
            : "bg-transparent"
        }`}
        data-testid="nav-main"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => scrollToSection("#hero")}
              data-testid="nav-logo"
            >
              <div className="relative">
                <Wheat className="w-8 h-8 text-gold" />
                <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-xl font-bold text-white tracking-wider">
                  ROYAL RICE
                </span>
                <span className="text-[10px] text-gold/80 tracking-[0.3em] uppercase">
                  Since 1987
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 text-sm font-medium text-white/80 hover:text-gold transition-colors duration-300 relative group"
                  data-testid={`nav-link-${item.id}`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(true)}
              data-testid="nav-mobile-toggle"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] lg:hidden"
            data-testid="nav-mobile-menu"
          >
            {/* Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-royal-black"
            >
              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-royal-emerald/10" />
              {/* Grain texture overlay */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }} />
            </motion.div>

            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-white hover:text-gold transition-colors z-10"
              data-testid="nav-mobile-close"
            >
              <X className="w-8 h-8" />
            </motion.button>

            {/* Menu Content */}
            <div className="relative h-full flex flex-col items-center justify-center px-8">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-12 flex items-center gap-3"
              >
                <Wheat className="w-10 h-10 text-gold" />
                <span className="font-cinzel text-2xl font-bold text-white tracking-wider">
                  ROYAL RICE
                </span>
              </motion.div>

              {/* Navigation Items */}
              <nav className="flex flex-col items-center gap-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    onClick={() => scrollToSection(item.href)}
                    className="py-3 px-8 text-2xl font-cinzel text-white/80 hover:text-gold transition-all duration-300 relative group"
                    data-testid={`nav-mobile-link-${item.id}`}
                  >
                    {item.label}
                    <motion.span
                      className="absolute -bottom-1 left-1/2 h-0.5 bg-gold"
                      initial={{ width: 0, x: "-50%" }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                ))}
              </nav>

              {/* Decorative elements */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4"
              >
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                <Wheat className="w-5 h-5 text-gold/50" />
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
