'use client';

import { content } from '@/app/data/content';
import { motion, Variants } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';

export default function USP() {
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#042b2e] mb-6">
              {content.usp.title}
            </h2>
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-[#042b2e] mb-6 italic"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {content.usp.headline}
            </motion.h3>
            <p className="text-xl text-[#042b2e]/80 max-w-3xl mx-auto mb-8">
              {content.usp.description}
            </p>
          </div>
        </AnimateOnScroll>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {content.usp.values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-[#03272A] p-8 rounded-lg text-center border border-[#042b2e] hover:shadow-lg transition-shadow duration-300"
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <h4 className="text-2xl font-bold text-white mb-4">
                {value.title}
              </h4>
              <p className="text-lg text-white/90">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        <AnimateOnScroll delay={0.3}>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-[#042b2e] font-medium leading-relaxed">
              {content.usp.conclusion}
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

