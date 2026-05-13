import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Process } from '../components/sections/Process';
import { Contact } from '../components/sections/Contact';

export const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-ivory">
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-coral transition-colors group font-medium">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>

      {/* Reusing existing components */}
      <Process />
      <Contact />
    </div>
  );
};
