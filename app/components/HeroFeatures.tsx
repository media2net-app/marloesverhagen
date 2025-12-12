'use client';

import { motion, Variants } from 'framer-motion';
import { Briefcase, Users, Target, Heart, Zap } from 'lucide-react';
import { useColor } from '@/app/contexts/ColorContext';

const features = [
  {
    icon: Briefcase,
    text: 'HR- advies voor leiderschap, groei en verzuim',
  },
  {
    icon: Users,
    text: 'Teamcoaching op mens en proces',
  },
  {
    icon: Target,
    text: 'Resultaatgerichte veranderbegeleiding',
  },
  {
    icon: Heart,
    text: 'Verbindende aanpak',
  },
  {
    icon: Zap,
    text: 'Nuchter, praktisch en energiek',
  },
];

export default function HeroFeatures() {
  const { colorValue, darkColorValue, darkerColorValue } = useColor();
  
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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section 
      className="relative px-4 py-12 md:py-16"
      style={{
        background: `linear-gradient(to bottom, ${darkerColorValue} 0%, ${darkColorValue} 100%)`
      }}
    >
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-row md:flex-col items-center md:items-center gap-3 md:gap-0 text-left md:text-center group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div 
                  className="flex-shrink-0 mb-0 md:mb-4 p-4 rounded-full transition-colors duration-300"
                  style={{ 
                    backgroundColor: hexToRgba(colorValue, 0.1),
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = hexToRgba(colorValue, 0.2);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = hexToRgba(colorValue, 0.1);
                  }}
                >
                  <Icon className="w-8 h-8" style={{ color: colorValue }} strokeWidth={1.5} />
                </div>
                <p className="text-white/80 text-sm md:text-base leading-relaxed md:max-w-none">
                  {feature.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

