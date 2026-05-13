import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { AnimatedButton } from '../ui/AnimatedButton';

export const Contact = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-coral/10 to-aqua/10 rounded-full blur-[100px] -z-10 animate-blob" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-coral font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-3">
            Start Your <span className="text-gradient">Wealth Journey</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <GlassCard className="!p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Schedule a Consultation</h3>
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-600">First Name</label>
                  <input type="text" className="px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-coral/50 transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-600">Last Name</label>
                  <input type="text" className="px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-coral/50 transition-all" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-600">Email Address</label>
                <input type="email" className="px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-coral/50 transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-600">How can we help you?</label>
                <textarea rows="4" className="px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-coral/50 transition-all resize-none"></textarea>
              </div>
              <AnimatedButton variant="primary" className="w-full mt-2 group">
                <span className="flex items-center gap-2">
                  Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </AnimatedButton>
            </form>
          </GlassCard>

          {/* Contact Info */}
          <div className="flex flex-col gap-8 justify-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-coral/10 flex items-center justify-center shrink-0">
                <MapPin className="text-coral" size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">Office Location</h4>
                <p className="text-slate-500 leading-relaxed">
                  123 Financial District, Premium Tower<br />
                  New Delhi, India 110001
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-start gap-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-aqua/20 flex items-center justify-center shrink-0">
                <Phone className="text-teal-600" size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">Direct Contact</h4>
                <p className="text-slate-500 leading-relaxed">
                  +91 98765 43210<br />
                  Mon-Fri, 9am - 6pm
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-blush/20 flex items-center justify-center shrink-0">
                <Mail className="text-coral" size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">Email</h4>
                <p className="text-slate-500 leading-relaxed">
                  advisor@licpremier.com<br />
                  support@licpremier.com
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
