import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4">
            Contact MGA AGRO
          </h2>
          <p className="text-xl text-gray-600">
            Have questions about our products or want to place a bulk order? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          
          {/* Contact Info */}
          <div className="w-full lg:w-2/5 bg-primary p-10 lg:p-12 text-white relative overflow-hidden">
            {/* BG pattern */}
            <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4 scale-150">
              <svg width="200" height="200" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="none"/><circle cx="50" cy="50" r="30" stroke="white" strokeWidth="2" fill="none"/></svg>
            </div>
            
            <h3 className="text-3xl font-bold mb-2 relative z-10">Contact Information</h3>
            <p className="text-primary-light mb-10 relative z-10">Fill up the form and our team will get back to you within 24 hours.</p>

            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <MapPin className="text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Registered Office</h4>
                  <p className="text-white/80 mt-1">
                    Vill+P.O.- Khargram, P.S.+Block -Khargram<br/>
                    Indrani, Dist- Murshidabad<br/>
                    Pin - 742159, (W B)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Phone Number</h4>
                  <p className="text-white/80 mt-1">+91 97759 30840 / +91 96479 95108</p>
                  <p className="text-white/80">+91 85091 00612 / +91 78721 50828</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Email Address</h4>
                  <p className="text-white/80 mt-1">mgaindustriespvtltd@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Company Details</h4>
                  <p className="text-white/80 mt-1">CIN: U15121WB2020PTC239295</p>
                  <p className="text-white/80">GSTIN: 19AANCM7447H1ZV</p>
                  <p className="text-white/80">PAN: AANCM7447H</p>
                  <p className="text-white/80">TAN: CALM21835C</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-3/5 p-10 lg:p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Doe" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="+91 00000 00000" />
                </div>
              </div>

              <div>
                <label flex="message" className="block text-sm font-medium text-gray-700 mb-1">Message / Inquiry</label>
                <textarea id="message" rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" placeholder="I would like to inquire about..."></textarea>
              </div>

              <button type="submit" className="w-full bg-gray-900 hover:bg-primary text-white font-semibold py-4 rounded-lg transition-colors duration-300 shadow-md">
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
