import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA = () => {
  return (
    <section className="relative py-28 bg-gradient-to-b from-rose-50 to-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -inset-[30%] bg-[radial-gradient(circle_at_center,rgba(253,230,138,0.25),transparent_60%)]" />
      </div>
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 w-48 h-48 rounded-full bg-gradient-to-br from-amber-100 via-rose-100 to-white shadow-[0_30px_80px_rgba(251,191,36,0.25)] border border-amber-200/60 flex items-center justify-center"
        >
          {/* Simple ring illustration */}
          <div className="relative">
            <div className="w-28 h-28 rounded-full border-[6px] border-amber-300/70 shadow-[0_0_40px_rgba(251,191,36,0.5)_inset]" />
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-6 bg-amber-300/80 rounded-b-[12px] rotate-[-10deg]" />
          </div>
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-serif text-rose-900"
        >
          A lifetime of love, laughter, and gentle mornings.
        </motion.h3>
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group relative mt-8 inline-flex items-center justify-center rounded-full bg-rose-500 text-white px-8 py-4 text-lg font-semibold shadow-[0_10px_30px_rgba(244,114,182,0.35)] hover:shadow-[0_20px_50px_rgba(244,114,182,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
          onClick={() => alert('She said YES! ❤')}
        >
          <span className="animate-[heartbeat_1.8s_ease-in-out_infinite]">Say Yes ❤</span>
          <span className="absolute inset-0 rounded-full ring-2 ring-white/30 scale-110 opacity-0 group-hover:opacity-100 transition" />
        </motion.button>
      </div>
    </section>
  );
};

export default FinalCTA;
