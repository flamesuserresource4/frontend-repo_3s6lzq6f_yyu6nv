import React from 'react';
import { motion } from 'framer-motion';

const photos = [
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1527261834078-9b37d35a4a32?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
];

const Gallery = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-amber-50/40 via-rose-50/70 to-rose-50">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-rose-900">Our Moments</h2>
          <p className="mt-2 text-rose-700/80">A little gallery of love.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {photos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="relative aspect-[3/4]"
            >
              <div className="absolute inset-0 rotate-[-2deg] rounded-[22px] bg-rose-200/40" />
              <motion.div
                whileHover={{ rotate: -2, y: -4 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="relative h-full rounded-[22px] bg-white shadow-[0_20px_50px_rgba(244,114,182,0.15)] border border-rose-100 p-3"
              >
                <div className="h-full w-full rounded-[16px] overflow-hidden">
                  <img src={src} alt="Memory" className="h-full w-full object-cover" />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white text-rose-900 text-xs px-3 py-1 rounded-full shadow-md border border-rose-100">Polaroid</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
