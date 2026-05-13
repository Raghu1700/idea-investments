import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Shield, Heart, Landmark } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { AnimatedButton } from '../components/ui/AnimatedButton';

const plans = [
  {
    icon: Shield,
    title: "Premium Life Coverage",
    desc: "A robust term insurance plan offering substantial cover at affordable premiums to secure your family's future.",
    features: ["Up to ₹5 Crore Cover", "Rider Options Available", "Tax Benefits u/s 80C"]
  },
  {
    icon: Heart,
    title: "Comprehensive Health",
    desc: "Global medical coverage with zero copayment and access to top-tier cashless hospital networks.",
    features: ["Cashless in 10k+ Hospitals", "No Room Rent Capping", "Annual Health Checkups"]
  },
  {
    icon: Landmark,
    title: "Wealth Maximizer ULIP",
    desc: "Market-linked returns blended with life cover to accelerate your wealth generation journey.",
    features: ["Multiple Fund Options", "Free Switches", "Tax-Free Maturity"]
  }
];

export const PlanDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-ivory">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-aqua/20 to-coral/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-coral transition-colors mb-12 group font-medium">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 flex flex-col gap-12">
            <div>
              <span className="text-coral font-semibold tracking-wider uppercase text-xs md:text-sm">Detailed Overview</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mt-2 mb-4 md:mb-6">
                Premium Financial <span className="text-gradient">Solutions</span>
              </h1>
              <p className="text-base md:text-lg text-slate-500 leading-relaxed">
                Our suite of premium financial solutions is meticulously designed for high-net-worth individuals who demand the best in protection and wealth generation. Explore the details of our flagship plans below.
              </p>
            </div>

            <div className="flex flex-col gap-6 md:gap-8">
              {plans.map((plan, i) => (
                <GlassCard key={i} className="!p-6 md:!p-8 group hover:border-coral/30">
                  <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-coral/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <plan.icon className="text-coral w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2 md:mb-3">{plan.title}</h3>
                      <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-4 md:mb-6">{plan.desc}</p>
                      
                      <div className="grid sm:grid-cols-2 gap-2 md:gap-3">
                        {plan.features.map((feat, j) => (
                          <div key={j} className="flex items-center gap-2 text-slate-600 font-medium text-sm md:text-base">
                            <CheckCircle2 size={16} className="text-teal-600 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="relative">
            <div className="sticky top-32">
              <GlassCard className="!p-8 bg-slate-900/5 backdrop-blur-xl border-white border-2">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to Secure Your Future?</h3>
                <p className="text-slate-500 mb-8">
                  Get a personalized consultation and a bespoke portfolio designed exclusively for your financial goals.
                </p>
                <div className="flex flex-col gap-4">
                  <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">
                    <AnimatedButton variant="primary" className="w-full">
                      Chat on WhatsApp
                    </AnimatedButton>
                  </a>
                  <a href="mailto:advisor@licpremier.com">
                    <AnimatedButton variant="outline" className="w-full bg-white">
                      Email Advisor
                    </AnimatedButton>
                  </a>
                </div>
              </GlassCard>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
