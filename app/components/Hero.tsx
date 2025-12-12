'use client';

import { content } from '@/app/data/content';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useColor } from '@/app/contexts/ColorContext';

export default function Hero() {
  const { colorValue, hoverColorValue, darkColorValue } = useColor();
  
  // Helper to convert hex to rgba with opacity
  const hexToRgba = (hex: string, opacity: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };
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
    <section className="relative min-h-[95vh] flex items-end overflow-hidden px-4 pt-32 pb-12 md:pt-40 md:pb-20">
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
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-transparent to-transparent"
          style={{ 
            background: `linear-gradient(to top right, ${hexToRgba(darkColorValue, 0.95)} 0%, ${hexToRgba(darkColorValue, 0.70)} 30%, ${hexToRgba(darkColorValue, 0.50)} 60%, transparent 100%)` 
          }}
        ></div>
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 leading-tight"
            variants={itemVariants}
          >
            {content.hero.headline}
          </motion.h1>
          
          <motion.p 
            className="text-base md:text-xl lg:text-xl text-white/85 mb-4 md:mb-6 max-w-4xl leading-snug"
            variants={itemVariants}
          >
            {content.hero.subheadline}
          </motion.p>
          
          <motion.p 
            className="text-sm md:text-lg lg:text-xl text-white/90 mb-6 md:mb-10 max-w-3xl leading-relaxed px-1"
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
                  <span className="mt-1.5 md:mt-2 flex-shrink-0 w-2 h-2 md:w-2.5 md:h-2.5 rounded-full min-w-[8px] min-h-[8px] md:min-w-[10px] md:min-h-[10px]" style={{ backgroundColor: colorValue }}></span>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">{item}</p>
                </li>
              ))}
            </motion.ul>
          )}
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 md:gap-4"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-1.5 md:gap-2 px-4 py-2.5 md:px-8 md:py-4 text-white rounded-full font-bold text-sm md:text-lg transition-colors duration-200 shadow-lg w-full sm:w-auto justify-center relative"
              style={{ 
                backgroundColor: colorValue,
                boxShadow: `0 10px 15px -3px ${hexToRgba(colorValue, 0.3)}, 0 4px 6px -2px ${hexToRgba(colorValue, 0.2)}`
              }}
              whileHover={{ scale: 1.05 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = hoverColorValue;
                e.currentTarget.style.boxShadow = `0 10px 40px ${hexToRgba(colorValue, 0.4)}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colorValue;
                e.currentTarget.style.boxShadow = `0 10px 15px -3px ${hexToRgba(colorValue, 0.3)}, 0 4px 6px -2px ${hexToRgba(colorValue, 0.2)}`;
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Online indicator - hidden on mobile */}
              <div className="hidden sm:flex absolute -top-2 -right-2 md:-top-2.5 md:-right-2.5 items-center gap-1.5 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full shadow-md">
                <div className="relative flex items-center justify-center">
                  {/* Pulsing dot */}
                  <motion.div
                    className="absolute w-2 h-2 md:w-2.5 md:h-2.5 rounded-full"
                    style={{ backgroundColor: colorValue }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  {/* Solid dot */}
                  <div className="relative w-1.5 h-1.5 md:w-2 md:h-2 rounded-full z-10" style={{ backgroundColor: colorValue }}></div>
                </div>
                <span className="text-[10px] md:text-xs text-black font-medium whitespace-nowrap">
                  Beschikbaar
                </span>
              </div>
              <span className="whitespace-nowrap">Neem contact op</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            </motion.a>
            
            <motion.a
              href="#diensten"
              className="inline-flex items-center gap-1.5 md:gap-2 px-4 py-2.5 md:px-8 md:py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-semibold text-sm md:text-lg hover:border-white/60 hover:bg-white/5 transition-all duration-200 w-full sm:w-auto justify-center"
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

