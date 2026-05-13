import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { AnimatedButton } from '../ui/AnimatedButton';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/plans' },
    { name: 'Calculator', href: '/calculator' },
    { name: 'History', href: '#history' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'shadow-xl bg-white/70' : 'bg-white/40'
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-coral to-blush flex items-center justify-center text-white shadow-lg">
              <ShieldCheck size={24} />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">
              LIC Premier
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-coral transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral transition-all duration-300 group-hover:w-full"></span>
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-coral transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link to="/calendar">
              <AnimatedButton variant="primary" className="py-2 px-6 text-sm">
                Book Consultation
              </AnimatedButton>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-800 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 p-6 glass rounded-2xl md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-slate-800 hover:text-coral transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-medium text-slate-800 hover:text-coral transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Link to="/calendar" onClick={() => setMobileMenuOpen(false)}>
              <AnimatedButton variant="primary" className="w-full mt-4">
                Book Consultation
              </AnimatedButton>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
