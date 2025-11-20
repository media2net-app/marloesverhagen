'use client';

import { content } from '@/app/data/content';
import { Briefcase, Users, RefreshCw, LucideIcon } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';

const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  Users,
  RefreshCw,
};

export default function Services() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#042b2e] mb-4">
              {content.services.title}
            </h2>
            <p className="text-xl text-[#042b2e]/80 max-w-3xl mx-auto">
              {content.services.description}
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
          {content.services.items.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Briefcase;
            return (
              <motion.div
                key={index}
                className="bg-[#03272A] p-8 rounded-lg border border-[#042b2e] hover:shadow-xl transition-shadow duration-300 cursor-default"
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                }}
              >
                <motion.div 
                  className="mb-6"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, -5, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <IconComponent 
                    className="w-12 h-12 text-[#4ade80]" 
                    strokeWidth={1.5}
                  />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

