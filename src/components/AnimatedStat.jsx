import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * Displays a stat card whose numeric value counts up smoothly when
 * it scrolls into view. `value` is the numeric target; `prefix`/`suffix`
 * carry any non-numeric characters (e.g. "+", "/10", "K+", "M+").
 */
export default function AnimatedStat({ value, prefix = '', suffix = '', label, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 24, stiffness: 60 });
  const display = useTransform(spring, (v) => Math.floor(v).toString());

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="glass rounded-2xl p-6 sm:p-7 md:p-8 shadow-glass h-full flex flex-col justify-between"
    >
      <div className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tightest text-white">
        {prefix}
        <motion.span>{display}</motion.span>
        {suffix}
      </div>
      <div className="mt-3 font-mono text-xs tracking-[0.2em] uppercase text-paper-dim">
        {label}
      </div>
    </motion.div>
  );
}
