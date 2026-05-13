import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, FileCheck, Landmark, Infinity as InfinityIcon } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

const steps = [
  { icon: MessageSquare, title: "1. Consultation", desc: "Understanding your life goals and risk appetite." },
  { icon: FileCheck, title: "2. Strategic Planning", desc: "Crafting a bespoke portfolio from premium plans." },
  { icon: Landmark, title: "3. Implementation", desc: "Seamless onboarding and policy generation." },
  { icon: InfinityIcon, title: "4. Lifetime Support", desc: "Annual reviews and dedicated claim assistance." }
];

export const Process = () => {
  return (
    <section className="py-24 relative bg-ivory" id="process">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-20 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 md:mb-6">
            The <span className="text-gradient">Premium Journey</span>
          </h2>
          <p className="text-base md:text-lg text-slate-500">
            A seamless, transparent, and highly personalized experience tailored for your peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-coral/0 via-coral/30 to-coral/0 -translate-y-1/2 z-0"></div>
          
          {steps.map((step, i) => (
            <div key={i} className="relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full glass flex items-center justify-center mb-6 shadow-xl relative group">
                  <div className="absolute inset-0 bg-coral/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <step.icon size={32} className="text-coral relative z-10" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
