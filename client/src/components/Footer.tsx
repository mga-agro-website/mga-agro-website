import { motion } from "framer-motion";
import { Wheat, MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "Our Rice", href: "#collection" },
  { label: "Our Process", href: "#process" },
  { label: "Factory Tour", href: "#factory" },
  { label: "Export Markets", href: "#export" },
  { label: "Contact Us", href: "#footer" },
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="footer"
      className="relative bg-royal-black pt-16 sm:pt-24 pb-8 overflow-hidden"
      data-testid="section-footer"
    >
      {/* Top golden line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-royal-emerald/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <Wheat className="w-8 h-8 text-gold" />
                <div className="absolute inset-0 bg-gold/20 blur-lg rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-xl font-bold text-white tracking-wider">
                  ROYAL RICE
                </span>
                <span className="text-[10px] text-gold/80 tracking-[0.2em] uppercase">
                  Mills Ltd.
                </span>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed mb-6">
              For over 37 years, we've been delivering premium quality rice to 
              discerning customers worldwide. From paddy to plate, excellence 
              is our tradition.
            </p>
            
            {/* Certifications */}
            <div className="flex items-center gap-4">
              <div className="px-3 py-1.5 bg-gold/10 border border-gold/20 rounded text-xs text-gold">
                ISO 9001:2015
              </div>
              <div className="px-3 py-1.5 bg-gold/10 border border-gold/20 rounded text-xs text-gold">
                FSSC 22000
              </div>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-cinzel text-lg font-bold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/60 hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(' ', '-')}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-cinzel text-lg font-bold text-white mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/60">
                  Industrial Area, Narayanganj<br />
                  Dhaka, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+8801700000000" className="text-white/60 hover:text-gold transition-colors">
                  +880 1700-000-000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:info@royalrice.com" className="text-white/60 hover:text-gold transition-colors">
                  info@royalrice.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-white/60">
                  Sat - Thu: 9:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-cinzel text-lg font-bold text-white mb-6">
              Follow Us
            </h3>
            <p className="text-white/60 mb-6">
              Stay connected with us for the latest updates, recipes, and 
              behind-the-scenes content.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-white/5 border border-gold/20 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/50 hover:bg-gold/10 transition-all duration-300"
                    aria-label={social.label}
                    data-testid={`social-${social.label.toLowerCase()}`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Decorative separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-8" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm"
        >
          <p className="text-white/40 text-center sm:text-left">
            © 2025 Royal Rice Mills Ltd. Crafted with passion in Bangladesh
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
