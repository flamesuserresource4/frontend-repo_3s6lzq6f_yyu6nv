import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import Petals from './Petals';

const Hero = () => {
  // Randomized subtle delays for micro variance
  const subtitleDelay = useMemo(() => 0.8 + Math.random() * 0.3, []);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/kqB-rdL4TCJ7pyGb/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Warm vignette and bokeh overlays */}
      <div className="pointer-events-none absolute inset-0">
        {/* Soft vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(10,10,10,0.35)_100%)]" />
        {/* Warm tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-200/20 via-amber-100/10 to-rose-100/10 mix-blend-soft-light" />
        {/* Bokeh lights */}
        <div className="absolute inset-0 opacity-70">
          <div className="bokeh" />
        </div>
      </div>

      {/* Falling petals */}
      <Petals />

      {/* Centered content */}
      <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl md:text-7xl font-serif tracking-tight text-rose-50 drop-shadow-[0_6px_30px_rgba(255,182,193,0.35)]"
          >
            Will You Marry Me?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: subtitleDelay, ease: 'easeOut' }}
            className="mt-4 text-base sm:text-lg md:text-xl text-rose-50/90"
          >
            Forever starts here.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
