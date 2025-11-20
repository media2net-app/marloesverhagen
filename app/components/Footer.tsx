'use client';

import { content } from '@/app/data/content';
import { motion, Variants } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';
import { useColor } from '@/app/contexts/ColorContext';

export default function Footer() {
  const { colorValue, darkColorValue } = useColor();
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
    <footer 
      id="contact" 
      className="border-t-2 px-4 py-16"
      style={{ 
        backgroundColor: darkColorValue,
        borderTopColor: darkColorValue
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="max-w-2xl mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-white mb-6">
              {content.contact.title}
            </h3>
            <p className="text-lg text-white/90 mb-6">
              {content.contact.description}
            </p>
            <div className="space-y-3">
              <motion.p 
                className="text-lg text-white"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <strong>Email:</strong> <a 
                  href={`mailto:${content.contact.email}`} 
                  className="underline transition-colors"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colorValue;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '';
                  }}
                >{content.contact.email}</a>
              </motion.p>
              <motion.p 
                className="text-lg text-white"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <strong>Telefoon:</strong> {content.contact.phone}
              </motion.p>
              <motion.p 
                className="text-lg text-white"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <strong>LinkedIn:</strong> <a 
                  href={`https://${content.contact.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="underline transition-colors"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colorValue;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '';
                  }}
                >{content.contact.linkedin}</a>
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
        
        <AnimateOnScroll>
          <div className="border-t border-white/20 pt-8 text-center space-y-2">
            <p className="text-lg text-white/60">
              © 2025 {content.name}. Alle rechten voorbehouden.
            </p>
            <p className="text-sm text-white/50">
              Website gemaakt door <a 
                href="https://improve.onl" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline transition-colors"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colorValue;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '';
                }}
              >Improve.onl</a> | Websites met impact
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </footer>
  );
}

