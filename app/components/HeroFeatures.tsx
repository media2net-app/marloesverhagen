'use client';

import { motion, Variants } from 'framer-motion';
import { Briefcase, Users, Target, Heart, Zap } from 'lucide-react';

const features = [
  {
    icon: Briefcase,
    text: 'Interim HR-advies voor verzuim, groei en leiderschap.',
  },
  {
    icon: Users,
    text: 'Teamcoaching die vertrouwen en verantwoordelijkheid vergroot.',
  },
  {
    icon: Target,
    text: 'Resultaatgerichte veranderbegeleiding met focus op draagvlak.',
  },
  {
    icon: Heart,
    text: 'Verbindende aanpak van werkvloer tot MT.',
  },
  {
    icon: Zap,
    text: 'Nuchter, praktisch en energie brengen in teams.',
  },
];

export default function HeroFeatures() {
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
    <section className="relative bg-gradient-to-b from-[#021a1c] to-[#042b2e] px-4 py-12 md:py-16">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8"
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
                className="flex flex-col items-center text-center group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 p-4 rounded-full bg-[#4ade80]/10 group-hover:bg-[#4ade80]/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-[#4ade80]" strokeWidth={1.5} />
                </div>
                <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-[200px]">
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

