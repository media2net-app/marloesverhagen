'use client';

import { content } from '@/app/data/content';
import { motion, Variants } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';

export default function TargetGroup() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="py-20 md:py-32 bg-[#03272A] px-4">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {content.targetGroup.title}
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {content.targetGroup.description}
            </p>
          </div>
        </AnimateOnScroll>
        
        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {content.targetGroup.profiles.map((profile, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg border-l-4 border-[#4ade80] shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ 
                x: 8,
                transition: { duration: 0.3 }
              }}
            >
              <p className="text-lg text-[#042b2e]">
                {index + 1}. {profile}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

