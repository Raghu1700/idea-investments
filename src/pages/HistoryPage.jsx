import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Award, Star } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';

const historyTimeline = [
  {
    year: "2010",
    title: "Firm Established",
    desc: "Founded with a vision to provide transparent and secure financial planning for families.",
    icon: Clock
  },
  {
    year: "2015",
    title: "1000+ Families Protected",
    desc: "Reached a major milestone of securing the futures of over a thousand households across the country.",
    icon: Star
  },
  {
    year: "2019",
    title: "MDRT Qualification",
    desc: "Achieved the prestigious Million Dollar Round Table status, placing our advisory in the top 1% globally.",
    icon: Award
  },
  {
    year: "2024",
    title: "₹500Cr+ Assets Managed",
    desc: "Crossed a half-billion in managed assets, expanding into premium wealth maximization solutions.",
    icon: Award
  }
];

export const HistoryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-ivory">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blush/20 to-coral/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-5xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-coral transition-colors mb-12 group font-medium">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="text-center mb-16">
          <span className="text-coral font-semibold tracking-wider uppercase text-sm">Our Legacy</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mt-3 mb-6">
            History & <span className="text-gradient">Track Record</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            For over a decade, we have been committed to excellence, integrity, and building generational wealth for our clients.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-coral/30 to-transparent md:-translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {historyTimeline.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-6 h-6 rounded-full bg-coral border-4 border-ivory md:-translate-x-1/2 shadow-lg z-10" />
                  
                  <div className="w-full md:w-1/2" />
                  
                  <div className="w-full md:w-1/2 pl-20 md:pl-0">
                    <GlassCard className={`!p-6 md:!p-8 hover:border-coral/30 ${isEven ? 'md:mr-12' : 'md:ml-12'}`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-coral/10 flex items-center justify-center text-coral">
                          <item.icon size={24} />
                        </div>
                        <span className="text-2xl font-bold text-slate-300">{item.year}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-3">{item.title}</h3>
                      <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                    </GlassCard>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
