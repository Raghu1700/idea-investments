import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { AnimatedButton } from '../ui/AnimatedButton';
import { GlassCard } from '../ui/GlassCard';

export const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-element', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden" id="home">
      {/* Background Gradients & Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-coral/20 blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-aqua/30 blur-[120px] animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[60%] w-[40%] h-[40%] rounded-full bg-blush/20 blur-[120px] animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass w-fit hero-element">
              <ShieldCheck size={18} className="text-coral" />
              <span className="text-sm font-medium text-slate-700">Premium LIC Advisory</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-slate-800 hero-element">
              Secure Your Family's <br />
              <span className="text-gradient">Legacy Today</span>
            </h1>
            
            <p className="text-base md:text-lg text-slate-500 max-w-xl leading-relaxed hero-element">
              Experience world-class financial planning. We craft personalized insurance and wealth strategies to protect what matters most to you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 hero-element">
              <AnimatedButton variant="primary" className="text-base md:text-lg px-6 py-3 md:px-8 md:py-4 w-full sm:w-auto">
                Start Planning
              </AnimatedButton>
              <AnimatedButton variant="secondary" className="text-base md:text-lg px-6 py-3 md:px-8 md:py-4 w-full sm:w-auto">
                Calculate Returns
              </AnimatedButton>
            </div>
          </div>

          {/* Visual Content / Floating Cards */}
          <div className="relative h-[600px] w-full hidden lg:block">
            {/* Main Visual Image Placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0 m-auto w-3/4 h-3/4 rounded-3xl bg-gradient-to-tr from-aqua/40 to-blush/40 p-1"
            >
              <div className="w-full h-full rounded-3xl bg-white/50 backdrop-blur-md overflow-hidden relative shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" 
                  alt="Family Security" 
                  className="w-full h-full object-cover opacity-90 mix-blend-multiply"
                />
              </div>
            </motion.div>

            {/* Floating Stats */}
            <GlassCard className="absolute top-[10%] left-[-10%] max-w-[200px] animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center text-coral">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-800">10k+</h4>
                  <p className="text-xs text-slate-500 font-medium">Families Protected</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="absolute bottom-[20%] right-[-5%] max-w-[220px] animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-aqua/20 flex items-center justify-center text-teal-600">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-800">₹500Cr+</h4>
                  <p className="text-xs text-slate-500 font-medium">Assets Managed</p>
                </div>
              </div>
            </GlassCard>
          </div>
          
        </div>
      </div>
    </section>
  );
};
