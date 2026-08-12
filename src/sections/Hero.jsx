import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import FloatingLights from '../components/FloatingLights';
import MagneticButton from '../components/MagneticButton';
import DarkVeil from '../components/DarkVeil/DarkVeil';
import GradualBlur from '../components/GradualBlur/GradualBlur';

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] flex items-center justify-center px-5 sm:px-6 md:px-8 overflow-hidden"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <DarkVeil speed={0.3} />
      </div>
      <FloatingLights />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_60%)]" />
      <GradualBlur
        target="parent"
        position="bottom"
        height="6rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
        zIndex={1}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-4xl mx-auto text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-paper-dim glass rounded-full px-4 py-1.5 mb-6 sm:mb-8"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white/70 animate-pulse shrink-0" />
          Freelance Video Editor
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-semibold text-[clamp(2.25rem,9vw,3.75rem)] sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] sm:leading-[1.03] tracking-tightest text-gradient text-balance"
        >
          Cooking clips
          <br />
          that stop the
          <br />
          doomscroll
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-7 text-base sm:text-lg text-paper-dim max-w-xl mx-auto leading-relaxed px-2 sm:px-0"
        >
        I cook cinematic edits, motion graphics, and scroll-stopping content.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 sm:mt-11 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto"
        >
          <MagneticButton
            onClick={() => scrollToId('showreel')}
            className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black font-medium text-sm px-6 py-3.5 min-h-[48px] rounded-full transition-transform"
          >
            <PlayCircle size={17} strokeWidth={2} />
            View Showreel
          </MagneticButton>

          <MagneticButton
            onClick={() => scrollToId('contact')}
            className="group w-full sm:w-auto flex items-center justify-center gap-2 glass text-white font-medium text-sm px-6 py-3.5 min-h-[48px] rounded-full"
          >
            Contact Me
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-paper-faint"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
