'use client';

import { useState } from 'react';
import { useColor, type ColorOption } from '@/app/contexts/ColorContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette } from 'lucide-react';

const colorOptions: { value: ColorOption; label: string; hex: string }[] = [
  { value: 'green', label: 'Groen', hex: '#4ade80' },
  { value: 'yellow', label: 'Geel', hex: '#FCD34D' },
  { value: 'purple', label: 'Paars', hex: '#A855F7' },
  { value: 'blue', label: 'Blauw', hex: '#3B82F6' },
];

export default function ColorPicker() {
  const { selectedColor, setSelectedColor } = useColor();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[9999]">
      <div className="flex items-center">
        {/* Color options panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="bg-white rounded-l-lg shadow-xl p-4 border border-gray-200 mr-2"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xs font-semibold text-gray-700 mb-3 text-center uppercase tracking-wide">
                Wijzig kleur
              </p>
              <div className="space-y-2">
                {colorOptions.map((option) => (
                  <motion.button
                    key={option.value}
                    onClick={() => {
                      setSelectedColor(option.value);
                      setIsOpen(false);
                    }}
                    className={`w-full px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                      selectedColor === option.value
                        ? 'bg-gray-100 text-gray-900 ring-2 ring-gray-300'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: option.hex }}
                    />
                    <span>{option.label}</span>
                    {selectedColor === option.value && (
                      <motion.span
                        className="text-xs"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                      >
                        ✓
                      </motion.span>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle button - always visible */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white rounded-l-lg shadow-xl p-3 border border-gray-200 hover:bg-gray-50 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Wijzig kleur"
        >
          <Palette className="w-5 h-5 text-gray-700" />
        </motion.button>
      </div>
    </div>
  );
}

