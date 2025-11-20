import React from 'react';
import { motion } from 'framer-motion';
import { Heart, CalendarDays, Sparkles, MapPin } from 'lucide-react';

const items = [
  {
    icon: <MapPin className="w-5 h-5" />,
    title: 'First meeting',
    text: 'A serendipitous hello that changed everything.',
  },
  {
    icon: <CalendarDays className="w-5 h-5" />,
    title: 'First date',
    text: 'Nervous laughter, lingering glances, and soft music.',
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: 'Favorite memories',
    text: 'Sunset walks, shared dreams, and midnight conversations.',
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: 'Milestones',
    text: 'From little victories to big leaps — together, always.',
  },
];

const Timeline = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-rose-50 via-rose-50/70 to-amber-50/40">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(255,228,230,0.6),transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-rose-900">Our Love Story</h2>
          <p className="mt-2 text-rose-700/80">A gentle walk through the moments that led us here.</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-rose-200" />
          <div className="space-y-10">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative grid md:grid-cols-2 gap-6 items-center ${i % 2 === 0 ? 'md:text-right' : ''}`}
              >
                <div className={`${i % 2 === 0 ? 'md:order-1' : ''}`}>
                  <div className="inline-flex items-center gap-2 text-rose-700/90 mb-2">
                    <span className="p-2 rounded-full bg-rose-100 text-rose-600 shadow-sm">{item.icon}</span>
                    <span className="uppercase tracking-widest text-xs">{item.title}</span>
                  </div>
                  <div className="inline-block bg-white/70 backdrop-blur-sm border border-rose-100 rounded-2xl shadow-[0_10px_30px_rgba(244,114,182,0.15)] px-5 py-4">
                    <p className="text-rose-900/90">{item.text}</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="h-3 w-3 rounded-full bg-rose-400 shadow-[0_0_0_6px_rgba(251,207,232,0.5)]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
