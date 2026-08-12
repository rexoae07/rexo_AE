import { motion } from 'framer-motion';

/**
 * Lightweight interactive wrapper for buttons and links: a subtle
 * scale on hover and tap. Pair with data-cursor="link" for the
 * matching custom-cursor expansion.
 */
export default function MagneticButton({
  as: Component = 'button',
  children,
  className = '',
  ...props
}) {
  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      data-cursor="link"
      className={className}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}