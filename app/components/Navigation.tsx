'use client';

import { useState } from 'react';
import { content } from '@/app/data/content';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowRight, Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-transparent/95 backdrop-blur-sm"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Logo />
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <motion.div 
              className="flex items-baseline space-x-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.a 
                href="#diensten" 
                className="text-white hover:text-[#4ade80] font-medium transition-colors"
                whileHover={{ y: -2 }}
              >
                Diensten
              </motion.a>
              <motion.a 
                href="#doelgroep" 
                className="text-white hover:text-[#4ade80] font-medium transition-colors"
                whileHover={{ y: -2 }}
              >
                Doelgroep
              </motion.a>
              <motion.a 
                href="#over-mij" 
                className="text-white hover:text-[#4ade80] font-medium transition-colors"
                whileHover={{ y: -2 }}
              >
                Over mij
              </motion.a>
            </motion.div>
            
            {/* Phone and CTA behind menu */}
            <div className="flex items-center gap-6 ml-4">
              <motion.a 
                href={`tel:${content.contact.phone.replace(/\s/g, '').replace(/[()]/g, '')}`}
                className="flex items-center gap-2 text-white hover:text-[#4ade80] transition-colors"
                whileHover={{ x: 2 }}
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">{content.contact.phone}</span>
              </motion.a>
              <motion.a
                href="#contact"
                className="flex items-center gap-2 bg-[#4ade80] text-[#042b2e] px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-[#22c55e] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Neem contact op
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none"
              aria-label="Menu"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {!isOpen ? (
                  <Menu
                    key="menu"
                    className="h-6 w-6"
                  />
                ) : (
                  <X
                    key="close"
                    className="h-6 w-6"
                  />
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden overflow-hidden bg-[#021a1c]"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-white/10"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {[
                { href: '#diensten', label: 'Diensten' },
                { href: '#doelgroep', label: 'Doelgroep' },
                { href: '#over-mij', label: 'Over mij' },
              ].map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:bg-white/10 rounded-md font-medium"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
              ))}
              {/* Mobile contact button */}
              <motion.a
                href="#contact"
                className="block px-3 py-2 bg-[#4ade80] text-[#042b2e] rounded-md font-medium text-center mt-2"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                whileTap={{ scale: 0.95 }}
              >
                Neem contact op
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

