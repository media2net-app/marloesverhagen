'use client';

import { useState, useEffect } from 'react';
import { content } from '@/app/data/content';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowRight, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { useColor } from '@/app/contexts/ColorContext';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnLightSection, setIsOnLightSection] = useState(false);
  const { colorValue, hoverColorValue, darkColorValue } = useColor();

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (!nav) return;

      const navRect = nav.getBoundingClientRect();
      const navCenter = navRect.top + navRect.height / 2;
      
      // Find all white sections
      const whiteSections = document.querySelectorAll('section.bg-white');
      
      // Check if nav center point is within any white section
      let onLightSection = false;
      
      whiteSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Check if nav center is within the white section bounds
        if (navCenter >= rect.top && navCenter <= rect.bottom) {
          onLightSection = true;
        }
      });

      setIsOnLightSection(onLightSection);
    };

    // Use requestAnimationFrame for smoother performance
    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      style={{ backgroundColor: darkColorValue }}
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
            <Logo isDark={false} />
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
                className="text-white font-medium transition-colors"
                style={{ 
                  '--hover-color': colorValue 
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colorValue;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'white';
                }}
                whileHover={{ y: -2 }}
              >
                Diensten
              </motion.a>
            </motion.div>
            
            {/* Phone and CTA behind menu */}
            <div className="flex items-center gap-6 ml-4">
              <motion.a 
                href={`tel:${content.contact.phone.replace(/\s/g, '').replace(/[()]/g, '')}`}
                className="flex items-center gap-2 text-white transition-colors"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colorValue;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'white';
                }}
                whileHover={{ x: 2 }}
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">{content.contact.phone}</span>
              </motion.a>
              <motion.a
                href="#contact"
                className="flex items-center gap-2 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-colors"
                style={{ backgroundColor: colorValue }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = hoverColorValue;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = colorValue;
                }}
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
              className={`inline-flex items-center justify-center p-2 rounded-md ${isOnLightSection ? 'text-[#042b2e] hover:bg-black/10' : 'text-white hover:bg-white/10'} focus:outline-none transition-colors`}
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
                { href: '#contact', label: 'Neem contact op' },
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
                className="block px-3 py-2 text-white rounded-md font-medium text-center mt-2"
                style={{ backgroundColor: colorValue }}
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

