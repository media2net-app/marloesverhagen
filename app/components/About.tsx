'use client';

import { content } from '@/app/data/content';
import { motion } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';
import { useColor } from '@/app/contexts/ColorContext';

export default function About() {
  const { colorValue, darkColorValue } = useColor();
  return (
    <section 
      className="py-20 md:py-32 px-4"
      style={{ backgroundColor: darkColorValue }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <AnimateOnScroll>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {content.about.title}
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            {content.about.description}
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.2}>
          <motion.div 
            className="p-8 rounded-lg border-l-4 border-white shadow-sm max-w-3xl mx-auto"
            style={{ backgroundColor: colorValue }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 10px 30px rgba(4, 43, 46, 0.1)',
              transition: { duration: 0.3 }
            }}
          >
            <p className="text-lg text-white font-medium italic">
              "{content.about.principle}"
            </p>
          </motion.div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

