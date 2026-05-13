import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Services } from '../components/sections/Services';
import { TopFunds } from '../components/sections/TopFunds';
import { Calculator } from '../components/sections/Calculator';
import { Process } from '../components/sections/Process';
import { Contact } from '../components/sections/Contact';

export const Home = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Services />
      <TopFunds />
      <Calculator />
      <Process />
      <Contact />
    </main>
  );
};
