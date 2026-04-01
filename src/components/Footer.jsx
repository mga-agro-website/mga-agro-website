import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/Logo.webp" 
                alt="MGA AGRO Logo" 
                className="h-10 w-10 sm:h-12 sm:w-12 object-contain rounded-xl shadow-sm"
              />
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                M.G.A.<span className="text-emerald-500 font-light"> AGRO</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Premium rice processors committed to delivering the highest quality grains from farm to table. Experience purity with every bite.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-primary transition-colors">Our Products</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-primary transition-colors">Milling Process</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Our Products</h4>
            <ul className="space-y-3">
              <li><a href="#products" className="text-gray-400 hover:text-primary transition-colors">Premium Basmati</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-primary transition-colors">Silky Raw Rice</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-primary transition-colors">Parboiled (Sella)</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-primary transition-colors">Rice Bran</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Business Hours</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Mon - Fri:</span> <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Saturday:</span> <span>9:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between pb-2 text-gray-500">
                <span>Sunday:</span> <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} M.G.A. AGRO INDUSTRIES PRIVATE LIMITED. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
