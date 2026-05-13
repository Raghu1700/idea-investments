import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Shield, Landmark, Baby, Briefcase, GraduationCap, TrendingUp, Umbrella } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

const services = [
  { icon: Shield, title: "Life Insurance", desc: "Comprehensive protection for your family's future." },
  { icon: Heart, title: "Health Insurance", desc: "Premium medical coverage with cashless network." },
  { icon: Umbrella, title: "Retirement Plans", desc: "Secure your golden years with guaranteed pension." },
  { icon: Baby, title: "Child Education", desc: "Fund your child's global education dreams." },
  { icon: Landmark, title: "Tax Saving Plans", desc: "Optimize wealth while saving under section 80C." },
  { icon: TrendingUp, title: "ULIPs", desc: "Market-linked returns with life cover." },
  { icon: Briefcase, title: "Wealth Growth", desc: "High-yield investment strategies." },
  { icon: GraduationCap, title: "Pension Plans", desc: "Annuity solutions for lifetime income." },
];

export const Services = () => {
  return (
    <section className="py-24 relative z-10 bg-slate-50/50" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 md:mb-6"
          >
            Premium <span className="text-gradient">Financial Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-slate-500"
          >
            Tailored investment and protection plans designed to build generational wealth and secure your family's legacy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <GlassCard key={i} delay={i * 0.1} className="group hover:bg-white/60">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-coral/10 to-blush/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svc.icon className="text-coral" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{svc.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{svc.desc}</p>
              <Link to="/plan-details" className="inline-flex items-center text-coral font-medium text-sm group-hover:underline">
                Explore Plan &rarr;
              </Link>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
