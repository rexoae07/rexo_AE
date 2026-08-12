import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

/**
 * Initializes Lenis for buttery smooth scrolling and drives it
 * from requestAnimationFrame. Respects prefers-reduced-motion by
 * skipping smoothing entirely (native scroll takes over).
 */
export default function useLenis() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });

    lenisRef.current = lenis;
    // Expose the active instance so other components (e.g. the mobile nav)
    // can stop/start smooth scrolling without prop-drilling the ref.
    window.__lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      if (window.__lenis === lenis) window.__lenis = null;
    };
  }, []);

  return lenisRef;
}
