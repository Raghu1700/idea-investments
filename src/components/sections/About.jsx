import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Star, Target } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

export const About = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Profile Area */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-aqua/20 to-blush/20 rounded-[3rem] transform -rotate-6 scale-105" />
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[3rem] overflow-hidden aspect-[4/5] bg-white shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                alt="Advisor Portrait" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-900/90 to-transparent">
                <div className="glass-dark border-none p-4 rounded-2xl inline-flex flex-col">
                  <span className="text-white font-bold text-xl">Rajesh Sharma</span>
                  <span className="text-aqua text-sm">Senior LIC Advisor (MDRT)</span>
                </div>
              </div>
            </motion.div>

            {/* Experience Badge */}
            <GlassCard className="absolute top-10 -right-10 hidden md:block max-w-[180px]">
              <div className="flex flex-col items-center text-center gap-2">
                <Clock className="text-coral" size={32} />
                <span className="text-2xl font-bold text-slate-800">15+</span>
                <span className="text-xs text-slate-500">Years of Financial Excellence</span>
              </div>
            </GlassCard>
          </div>

          {/* Content Area */}
          <div className="order-1 lg:order-2 flex flex-col gap-8">
            <div>
              <span className="text-coral font-semibold tracking-wider uppercase text-sm">About The Advisor</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-3 mb-6">
                Guiding Your Wealth With <span className="text-gradient">Trust & Expertise</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-4">
                As a premier LIC advisor and proud MDRT member, I specialize in crafting bespoke insurance portfolios for high-net-worth individuals and families.
              </p>
              <p className="text-slate-500 text-lg leading-relaxed">
                My approach is deeply personal—I believe financial planning is not just about numbers, but about fulfilling life's promises and building a legacy that lasts generations.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center text-coral shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">MDRT Achiever</h4>
                  <p className="text-sm text-slate-500">Top 1% Global Standard</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-aqua/20 flex items-center justify-center text-teal-600 shrink-0">
                  <Star size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">5-Star Rated</h4>
                  <p className="text-sm text-slate-500">Exceptional Client Trust</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
