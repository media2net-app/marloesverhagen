'use client';

import { content } from '@/app/data/content';
import { motion, Variants } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';

export default function Footer() {
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
    <footer id="contact" className="bg-[#f3f1ef] border-t-2 border-[#042b2e] px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-[#042b2e] mb-6">
              {content.contact.title}
            </h3>
            <p className="text-lg text-[#042b2e]/80 mb-6">
              {content.contact.description}
            </p>
            <div className="space-y-3">
              <motion.p 
                className="text-lg text-[#042b2e]"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <strong>Email:</strong> <a href={`mailto:${content.contact.email}`} className="underline hover:text-[#062a2e] transition-colors">{content.contact.email}</a>
              </motion.p>
              <motion.p 
                className="text-lg text-[#042b2e]"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <strong>Telefoon:</strong> {content.contact.phone}
              </motion.p>
              <motion.p 
                className="text-lg text-[#042b2e]"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <strong>LinkedIn:</strong> <a href={`https://${content.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#062a2e] transition-colors">{content.contact.linkedin}</a>
              </motion.p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-[#042b2e] mb-6">
              {content.availability.title}
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Uurtarief', value: content.availability.rate },
                { label: 'Beschikbaarheid', value: content.availability.hours },
                { label: 'Doelstelling', value: content.availability.goal },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                >
                  <p className="text-lg font-semibold text-[#042b2e] mb-2">{item.label}</p>
                  <p className="text-lg text-[#042b2e]/80">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        <AnimateOnScroll>
          <div className="border-t border-[#042b2e]/20 pt-8 text-center">
            <p className="text-lg text-[#042b2e]/60">
              © {new Date().getFullYear()} {content.name}. Alle rechten voorbehouden.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </footer>
  );
}

