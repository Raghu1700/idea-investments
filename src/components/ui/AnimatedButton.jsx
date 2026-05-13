import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export const AnimatedButton = ({ children, variant = 'primary', className, ...props }) => {
  const baseStyle = "relative overflow-hidden rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center";
  const variants = {
    primary: "bg-coral text-white shadow-lg hover:shadow-coral/50 px-8 py-3",
    secondary: "bg-white/50 backdrop-blur-md text-slate-800 border border-white/60 hover:bg-white/70 px-8 py-3",
    outline: "border-2 border-coral text-coral hover:bg-coral hover:text-white px-8 py-3",
    ghost: "text-slate-600 hover:text-coral px-4 py-2"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyle, variants[variant], className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-full hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      )}
    </motion.button>
  );
};
