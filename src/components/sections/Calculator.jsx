import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { AnimatedButton } from '../ui/AnimatedButton';

export const Calculator = () => {
  const [age, setAge] = useState(30);
  const [investment, setInvestment] = useState(50000);
  const [term, setTerm] = useState(20);

  // Simplified mock calculation
  const totalInvestment = investment * term;
  const estimatedReturn = totalInvestment * 2.5; // Just a dummy multiplier for UI

  return (
    <section className="py-24 relative" id="calculator">
      {/* Background elements */}
      <div className="absolute inset-0 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-coral/20 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-aqua font-semibold tracking-wider uppercase text-xs md:text-sm">Wealth Planner</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 md:mt-3">
            Estimate Your <span className="text-coral">Future Growth</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          
          {/* Controls */}
          <GlassCard className="lg:col-span-2 glass-dark !border-slate-700">
            <div className="flex flex-col gap-8">
              
              <div className="flex flex-col gap-4">
                <div className="flex justify-between text-white font-medium">
                  <label>Current Age</label>
                  <span className="text-coral">{age} Yrs</span>
                </div>
                <input 
                  type="range" min="18" max="60" 
                  value={age} onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full accent-coral"
                />
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex justify-between text-white font-medium">
                  <label>Annual Investment</label>
                  <span className="text-coral">₹{investment.toLocaleString()}</span>
                </div>
                <input 
                  type="range" min="10000" max="500000" step="5000"
                  value={investment} onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full accent-coral"
                />
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex justify-between text-white font-medium">
                  <label>Policy Term</label>
                  <span className="text-coral">{term} Yrs</span>
                </div>
                <input 
                  type="range" min="10" max="35" 
                  value={term} onChange={(e) => setTerm(Number(e.target.value))}
                  className="w-full accent-coral"
                />
              </div>

            </div>
          </GlassCard>

          {/* Results Dashboard */}
          <div className="lg:col-span-3">
            <GlassCard className="glass-dark !border-slate-700 h-full flex flex-col justify-center">
              <h3 className="text-xl text-slate-300 font-medium mb-8">Estimated Projection</h3>
              
              <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-8">
                <div className="p-4 md:p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
                  <p className="text-slate-400 text-xs md:text-sm mb-1 md:mb-2">Total Investment</p>
                  <p className="text-2xl lg:text-3xl font-bold text-white">₹{totalInvestment.toLocaleString()}</p>
                </div>
                <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-coral/20 to-transparent border border-coral/30">
                  <p className="text-coral text-xs md:text-sm mb-1 md:mb-2">Estimated Maturity Amount</p>
                  <p className="text-3xl lg:text-4xl font-bold text-white">₹{estimatedReturn.toLocaleString()}</p>
                </div>
              </div>

              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden flex">
                <div className="h-full bg-slate-500" style={{ width: '40%' }}></div>
                <div className="h-full bg-coral relative overflow-hidden" style={{ width: '60%' }}>
                  <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>
              <div className="flex justify-between mt-3 text-xs text-slate-400">
                <span>Investment (40%)</span>
                <span>Wealth Gain (60%)</span>
              </div>

              <div className="mt-8">
                <AnimatedButton variant="primary" className="w-full sm:w-auto">
                  Discuss This Plan
                </AnimatedButton>
              </div>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
};
