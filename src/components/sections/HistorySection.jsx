import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock, Award, Star } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

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

export const HistorySection = () => {
  const containerRef = useRef(null);
  
  // Track scroll progress within the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Map scroll progress to the top position of the moving dot
  const dotPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 relative overflow-hidden bg-ivory" id="history">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blush/20 to-coral/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-coral font-semibold tracking-wider uppercase text-sm">Our Legacy</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mt-3 mb-6">
            History & <span className="text-gradient">Track Record</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            For over a decade, we have been committed to excellence, integrity, and building generational wealth for our clients.
          </p>
        </div>

        <div className="relative" ref={containerRef}>
          {/* Vertical Line Background */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 md:-translate-x-1/2 rounded-full" />
          
          {/* Moving Glowing Dot */}
          <motion.div 
            className="absolute left-8 md:left-1/2 w-6 h-6 rounded-full bg-coral border-4 border-ivory shadow-[0_0_20px_rgba(255,127,80,0.8)] z-20 -translate-x-[10px] md:-translate-x-1/2"
            style={{ top: dotPosition, marginTop: '-12px' }}
          />

          <div className="flex flex-col gap-24 py-12">
            {historyTimeline.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  <div className="w-full md:w-1/2" />
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
                    transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                    className="w-full md:w-1/2 pl-24 md:pl-0 z-10"
                  >
                    <GlassCard className={`!p-6 md:!p-8 hover:border-coral/30 ${isEven ? 'md:mr-16' : 'md:ml-16'}`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-coral/10 flex items-center justify-center text-coral">
                          <item.icon size={24} />
                        </div>
                        <span className="text-2xl font-bold text-slate-300">{item.year}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">{item.title}</h3>
                      <p className="text-slate-500 leading-relaxed text-sm md:text-base">{item.desc}</p>
                    </GlassCard>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
