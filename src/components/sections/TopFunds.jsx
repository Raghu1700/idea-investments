import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, ShieldCheck, PieChart, Baby } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

const categories = [
  { id: 'equity', label: 'Equity Funds', icon: TrendingUp },
  { id: 'debt', label: 'Debt Funds', icon: ShieldCheck },
  { id: 'hybrid', label: 'Hybrid Funds', icon: PieChart },
  { id: 'children', label: "Children's Funds", icon: Baby },
];

const fundsData = {
  equity: [
    { name: 'Parag Parikh Flexi Cap Fund', amc: 'PPFAS Mutual Fund', return1Y: '38.5%', return3Y: '24.2%', risk: 'Very High' },
    { name: 'SBI PSU Fund', amc: 'SBI Mutual Fund', return1Y: '82.4%', return3Y: '45.1%', risk: 'Very High' },
    { name: 'HDFC Mid-Cap Opportunities', amc: 'HDFC Mutual Fund', return1Y: '56.2%', return3Y: '32.8%', risk: 'Very High' },
  ],
  debt: [
    { name: 'ICICI Pru Corporate Bond Fund', amc: 'ICICI Prudential MF', return1Y: '7.8%', return3Y: '6.5%', risk: 'Low to Moderate' },
    { name: 'HDFC Short Term Debt Fund', amc: 'HDFC Mutual Fund', return1Y: '7.5%', return3Y: '6.2%', risk: 'Moderate' },
    { name: 'SBI Liquid Fund', amc: 'SBI Mutual Fund', return1Y: '7.2%', return3Y: '5.8%', risk: 'Low' },
  ],
  hybrid: [
    { name: 'HDFC Balanced Advantage Fund', amc: 'HDFC Mutual Fund', return1Y: '32.4%', return3Y: '22.1%', risk: 'High' },
    { name: 'ICICI Pru Multi Asset Fund', amc: 'ICICI Prudential MF', return1Y: '35.6%', return3Y: '26.4%', risk: 'High' },
    { name: 'SBI Equity Hybrid Fund', amc: 'SBI Mutual Fund', return1Y: '28.1%', return3Y: '18.5%', risk: 'High' },
  ],
  children: [
    { name: "SBI Magnum Children's Benefit", amc: 'SBI Mutual Fund', return1Y: '42.1%', return3Y: '28.4%', risk: 'High' },
    { name: 'HDFC Children’s Gift Fund', amc: 'HDFC Mutual Fund', return1Y: '31.5%', return3Y: '20.2%', risk: 'High' },
    { name: 'ICICI Pru Child Care Fund', amc: 'ICICI Prudential MF', return1Y: '29.8%', return3Y: '19.5%', risk: 'High' },
  ]
};

export const TopFunds = () => {
  const [activeTab, setActiveTab] = useState('equity');

  return (
    <section className="py-24 relative bg-slate-50/50" id="top-funds">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <span className="text-coral font-semibold tracking-wider uppercase text-xs md:text-sm">Market Leaders</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mt-2 mb-4 md:mb-6">
            Top Performing <span className="text-gradient">Mutual Funds</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg">
            Discover consistently high-performing funds across various categories to build a robust and diversified portfolio.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-row overflow-x-auto pb-4 hide-scrollbar justify-start md:justify-center gap-2 md:gap-4 mb-8 md:mb-12 snap-x">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`shrink-0 flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full transition-all duration-300 snap-center ${
                  isActive 
                    ? 'bg-coral text-white shadow-lg shadow-coral/30 md:scale-105' 
                    : 'bg-white text-slate-600 hover:bg-coral/10 hover:text-coral'
                }`}
              >
                <cat.icon size={16} className="md:w-5 md:h-5" />
                <span className="text-sm md:text-base font-medium">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Data Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-3 gap-6"
            >
              {fundsData[activeTab].map((fund, i) => (
                <GlassCard key={i} className="hover:border-coral/50 group">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-coral transition-colors">{fund.name}</h3>
                    <p className="text-slate-500 text-sm font-medium">{fund.amc}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-50 rounded-xl p-4">
                      <p className="text-xs text-slate-400 mb-1">1Y Return</p>
                      <p className="text-lg font-bold text-teal-600">{fund.return1Y}</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4">
                      <p className="text-xs text-slate-400 mb-1">3Y Return</p>
                      <p className="text-lg font-bold text-teal-600">{fund.return3Y}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Risk Level</span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      fund.risk.includes('High') ? 'bg-red-100 text-red-600' : 
                      fund.risk.includes('Moderate') ? 'bg-yellow-100 text-yellow-700' : 
                      'bg-green-100 text-green-600'
                    }`}>
                      {fund.risk}
                    </span>
                  </div>
                </GlassCard>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
