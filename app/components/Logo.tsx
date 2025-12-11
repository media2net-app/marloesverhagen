import Image from 'next/image';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  isDark?: boolean;
}

export default function Logo({ className = '', isDark = false }: LogoProps) {
  return (
    <motion.a
      href="/"
      className={`flex items-center ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      aria-label="Marloes Verhagen"
    >
      <Image
        src="/logo.svg"
        alt="Logo Marloes Verhagen"
        width={210}
        height={44}
        priority
        className={`h-11 w-auto transition-all ${isDark ? 'invert' : ''}`}
      />
    </motion.a>
  );
}

