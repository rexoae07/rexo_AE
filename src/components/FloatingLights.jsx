import { motion } from 'framer-motion';

/**
 * Soft, slow-drifting blurred orbs — pure ambiance, monochrome only.
 * Kept behind everything (z-0) and non-interactive.
 */
export default function FloatingLights({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <motion.div
        className="absolute -top-40 left-[10%] h-[220px] w-[220px] sm:h-[320px] sm:w-[320px] md:h-[420px] md:w-[420px] rounded-full bg-white/[0.05] blur-[70px] sm:blur-[100px] md:blur-[120px]"
        animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 right-[5%] h-[180px] w-[180px] sm:h-[270px] sm:w-[270px] md:h-[360px] md:w-[360px] rounded-full bg-white/[0.035] blur-[65px] sm:blur-[90px] md:blur-[110px]"
        animate={{ x: [0, -30, 20, 0], y: [0, -20, 25, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-[30%] h-[150px] w-[150px] sm:h-[220px] sm:w-[220px] md:h-[300px] md:w-[300px] rounded-full bg-white/[0.04] blur-[60px] sm:blur-[80px] md:blur-[100px]"
        animate={{ x: [0, 25, -15, 0], y: [0, -15, 15, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
