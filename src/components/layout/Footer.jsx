import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, MessageCircle, Share2, Video, Mail, Phone, MapPin } from 'lucide-react';
import { AnimatedButton } from '../ui/AnimatedButton';

export const Footer = () => {
  return (
    <footer className="relative bg-white pt-24 pb-12 overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-aqua/30 to-transparent blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-gradient-to-tl from-blush/30 to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-slate-800">LIC Premier</h3>
            <p className="text-slate-500 leading-relaxed">
              Securing futures and building generational wealth with premium insurance and investment strategies.
            </p>
            <div className="flex gap-4">
              {[Globe, MessageCircle, Share2, Video].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-600 hover:text-coral hover:-translate-y-1 transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-semibold text-slate-800">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="text-slate-500 hover:text-coral transition-colors">Home</Link></li>
              <li><Link to="/plans" className="text-slate-500 hover:text-coral transition-colors">Services & Plans</Link></li>
              <li><Link to="/calculator" className="text-slate-500 hover:text-coral transition-colors">Financial Calculator</Link></li>
              <li><Link to="/history" className="text-slate-500 hover:text-coral transition-colors">Firm History & Records</Link></li>
              <li><Link to="/contact" className="text-slate-500 hover:text-coral transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-semibold text-slate-800">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-slate-500">
                <MapPin className="text-coral shrink-0 mt-1" size={18} />
                <span>123 Financial District, Premium Tower, New Delhi, India</span>
              </li>
              <li className="flex items-center gap-3 text-slate-500">
                <Phone className="text-coral shrink-0" size={18} />
                <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="hover:text-coral transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3 text-slate-500">
                <Mail className="text-coral shrink-0" size={18} />
                <a href="mailto:advisor@licpremier.com" className="hover:text-coral transition-colors">advisor@licpremier.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} LIC Premier Advisor. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-coral transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-coral transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
