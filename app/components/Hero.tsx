'use client';

import { content } from '@/app/data/content';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };


  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden px-4 py-20 md:py-32">
      {/* Background image - native 1920x1230, served 1:1 */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Image
          src="/hero.jpg"
          alt="Marloes Verhagen hero achtergrond"
          width={1920}
          height={1230}
          className="w-full h-full object-cover"
          priority
          quality={100}
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#042b2e]/90 via-[#042b2e]/55 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div 
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="text-xs md:text-sm text-white/70 mb-3 md:mb-4 uppercase tracking-[0.2em]"
            variants={itemVariants}
          >
            {content.tagline}
          </motion.div>
          
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-3 md:mb-4 leading-tight"
            variants={itemVariants}
          >
            {content.hero.headline}
          </motion.h1>
          
          <motion.p 
            className="text-base md:text-xl lg:text-2xl text-white/85 mb-4 md:mb-6 max-w-3xl leading-snug"
            variants={itemVariants}
          >
            {content.hero.subheadline}
          </motion.p>
          
          <motion.p 
            className="text-sm md:text-lg lg:text-xl text-white/90 mb-6 md:mb-10 max-w-3xl leading-relaxed"
            variants={itemVariants}
          >
            {content.hero.description}
          </motion.p>
          {content.hero.highlights && (
            <motion.ul 
              className="mt-6 md:mt-10 mb-6 md:mb-12 grid gap-y-2 md:gap-y-3 gap-x-4 md:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl"
              variants={itemVariants}
            >
              {content.hero.highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-2 md:gap-3">
                  <span className="mt-1.5 md:mt-2 flex-shrink-0 w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#4ade80] min-w-[8px] min-h-[8px] md:min-w-[10px] md:min-h-[10px]"></span>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">{item}</p>
                </li>
              ))}
            </motion.ul>
          )}
          
          <motion.div 
            className="flex flex-row gap-3 md:gap-4"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-1.5 md:gap-2 px-4 py-2.5 md:px-8 md:py-4 bg-[#4ade80] text-[#042b2e] rounded-full font-bold text-sm md:text-lg hover:bg-[#22c55e] transition-colors duration-200 shadow-lg shadow-[#4ade80]/30 flex-1 md:flex-initial justify-center"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(74, 222, 128, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="whitespace-nowrap">Neem contact op</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            </motion.a>
            
            <motion.a
              href="#diensten"
              className="inline-flex items-center gap-1.5 md:gap-2 px-4 py-2.5 md:px-8 md:py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-semibold text-sm md:text-lg hover:border-white/60 hover:bg-white/5 transition-all duration-200 flex-1 md:flex-initial justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="whitespace-nowrap">Ontdek meer</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"></div>
    </section>
  );
}

