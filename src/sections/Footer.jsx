import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-brand-black border-t border-white/5 py-16 px-8 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Branding Column */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-transparent flex items-center justify-center overflow-hidden">
              <img src="./src/assets/logo-mappia2.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-black text-white">Smart <span className="text-brand-orange">Mappia</span></span>
          </div>
          <p className="text-brand-grey text-sm max-w-sm leading-relaxed">
            The all-in-one ecosystem for your daily needs in Riyadh. From food to shopping and airport transfers, we make it happen securely and instantly.
          </p>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Navigation</h4>
          <ul className="space-y-4 text-brand-grey text-sm">
            <li><a href="#" className="hover:text-brand-orange transition-colors">Home</a></li>
            <li><a href="#features" className="hover:text-brand-orange transition-colors">Services</a></li>
            <li><a href="#restaurants" className="hover:text-brand-orange transition-colors">Restaurants</a></li>
            <li><a href="#faq" className="hover:text-brand-orange transition-colors">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Support</h4>
          <ul className="space-y-4 text-brand-grey text-sm">
            <li>support@smartmappia.sa</li>
            <li>Riyadh, Saudi Arabia</li>
            <li className="flex gap-4 mt-6 text-xl">
              <a href="#" className="hover:text-brand-orange transition-colors">📱</a>
              <a href="#" className="hover:text-brand-orange transition-colors">📸</a>
              <a href="#" className="hover:text-brand-orange transition-colors">🐦</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center md:text-left">
        <p className="text-brand-grey text-xs">
          © 2026 SmartMappia. All rights reserved. Built for seamless urban living.
        </p>
      </div>
    </footer>
  );
};

export default Footer;