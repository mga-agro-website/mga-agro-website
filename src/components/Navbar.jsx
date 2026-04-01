import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileMenuOpen(false); }, [location.pathname]);

  const navLinks = [
    { name: 'Home',     to: '/',                  scrollId: null },
    { name: 'About Us', to: '/about',              scrollId: 'about' },
    { name: 'Products', to: '/products-detail',    scrollId: 'products' },
    { name: 'Process',  to: isHome ? '/#process' : '/#process', scrollId: 'process', homeOnly: true },
    { name: 'Contact',  to: '/contacts',           scrollId: 'contact' },
  ];

  const isActive = (link) => {
    if (link.to === '/') return location.pathname === '/';
    return location.pathname.startsWith(link.to);
  };

  const handleNavClick = (link, e) => {
    if (link.homeOnly && isHome) {
      e.preventDefault();
      document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || mobileMenuOpen ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/Logo.webp"
                alt="MGA AGRO Logo"
                className="h-10 w-10 sm:h-11 sm:w-11 object-contain rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-gray-900">
                  M.G.A.<span className="text-emerald-600 font-light"> AGRO</span>
                </span>
                <span className="hidden sm:block text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] leading-none">
                  Industries Pvt. Ltd.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.homeOnly && isHome ? '#' : link.to}
                  onClick={(e) => handleNavClick(link, e)}
                  className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive(link)
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-gray-600 hover:text-emerald-600 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                  {isActive(link) && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-500" />
                  )}
                </Link>
              ))}
              <Link
                to="/contacts"
                className="ml-3 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-200 shadow-sm"
              >
                Get Quote →
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} className="text-gray-700" /> : <Menu size={20} className="text-gray-700" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Drawer Panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[80vw] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
            <img src="/Logo.webp" alt="MGA AGRO" className="h-9 w-9 rounded-lg" />
            <span className="text-lg font-extrabold text-gray-900">M.G.A. <span className="text-emerald-600 font-light">AGRO</span></span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X size={16} className="text-gray-600" />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              to={link.homeOnly && isHome ? '#' : link.to}
              onClick={(e) => handleNavClick(link, e)}
              className={`flex items-center justify-between px-4 py-3.5 rounded-2xl font-semibold text-base transition-all duration-200 ${
                isActive(link)
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-emerald-600'
              }`}
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <span>{link.name}</span>
              {isActive(link) ? (
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-400 -rotate-90" />
              )}
            </Link>
          ))}
        </nav>

        {/* Drawer Footer CTA */}
        <div className="px-4 pb-8 pt-4 border-t border-gray-100 space-y-3">
          <Link
            to="/contacts"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-2xl font-bold text-base transition-colors shadow-lg shadow-emerald-200"
          >
            Get a Quote →
          </Link>
          <a
            href="https://wa.me/919775930840"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 rounded-2xl font-bold text-sm transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
          <p className="text-center text-xs text-gray-400">© {new Date().getFullYear()} M.G.A. Agro Industries Pvt. Ltd.</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;

