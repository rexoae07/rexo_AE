import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-ink flex items-center justify-center"
        >
<motion.span
            initial={{ opacity: 0, letterSpacing: '0.3em' }}
            animate={{ opacity: 1, letterSpacing: '0.5em' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-sm uppercase text-paper-dim pl-2"
          >
            Rexo
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
