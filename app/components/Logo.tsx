import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  isDark?: boolean;
}

export default function Logo({ className = '', isDark = false }: LogoProps) {
  return (
    <motion.a 
      href="/" 
      className={`flex items-center gap-2 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {/* Text only - Marloes Verhagen */}
      <div className="flex items-baseline gap-2">
        <span className={`text-xl md:text-2xl font-bold leading-tight transition-colors ${isDark ? 'text-[#042b2e]' : 'text-white'}`}>
          Marloes
        </span>
        <span className={`text-lg md:text-xl font-normal leading-tight transition-colors ${isDark ? 'text-[#042b2e]/90' : 'text-white/90'}`}>
          Verhagen
        </span>
      </div>
    </motion.a>
  );
}

