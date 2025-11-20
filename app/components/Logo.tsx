import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <motion.a 
      href="/" 
      className={`flex items-center gap-2 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {/* Text only - Marloes Verhagen */}
      <div className="flex items-baseline gap-2">
        <span className="text-xl md:text-2xl font-bold text-white leading-tight">
          Marloes
        </span>
        <span className="text-lg md:text-xl font-normal text-white/90 leading-tight">
          Verhagen
        </span>
      </div>
    </motion.a>
  );
}

