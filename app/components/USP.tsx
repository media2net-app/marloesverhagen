'use client';

import { content } from '@/app/data/content';
import { motion, Variants } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';
import { useColor } from '@/app/contexts/ColorContext';

export default function USP() {
  const { darkColorValue } = useColor();
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="py-20 md:py-32 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
            <p className="text-lg md:text-xl text-[#042b2e] font-medium leading-relaxed px-2">
              {content.usp.conclusion}
            </p>
          </div>
        </AnimateOnScroll>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {content.usp.values.map((value, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-lg text-center border hover:shadow-lg transition-shadow duration-300"
              style={{ 
                backgroundColor: darkColorValue,
                borderColor: darkColorValue
              }}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <h4 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                {value.title}
              </h4>
              <p className="text-base md:text-lg text-white/90">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

