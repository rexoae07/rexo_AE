import { useEffect, useRef, useState } from 'react';

const LERP_SPEED = 0.18;
const TRAIL_LERP = 0.1;

/**
 * Custom cursor with:
 *  - lerped (smoothed) following of the real pointer
 *  - a lagging "trail" ring for a sense of momentum
 *  - expansion + color inversion when hovering [data-cursor="link"] targets
 *  - inversion over text via [data-cursor="text"]
 * Disabled entirely on touch devices (see CSS media query in index.css).
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [variant, setVariant] = useState('default'); // default | link | text
  const [isTouch, setIsTouch] = useState(false);

  const mouse = useRef({ x: -100, y: -100 });
  const dot = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)');
    const updateIsTouch = () => setIsTouch(!finePointer.matches);
    updateIsTouch();

    // Re-check if the input method changes mid-session (e.g. a mouse is
    // connected to a tablet, or a 2-in-1 device switches modes).
    finePointer.addEventListener?.('change', updateIsTouch);

    if (!finePointer.matches) {
      return () => finePointer.removeEventListener?.('change', updateIsTouch);
    }

    function onMove(e) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    }

    function onOver(e) {
      const target = e.target.closest('[data-cursor]');
      setVariant(target ? target.getAttribute('data-cursor') : 'default');
    }

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });

    let rafId;
    function tick() {
      dot.current.x += (mouse.current.x - dot.current.x) * LERP_SPEED;
      dot.current.y += (mouse.current.y - dot.current.y) * LERP_SPEED;
      ring.current.x += (mouse.current.x - ring.current.x) * TRAIL_LERP;
      ring.current.y += (mouse.current.y - ring.current.y) * TRAIL_LERP;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.current.x}px, ${dot.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(rafId);
      finePointer.removeEventListener?.('change', updateIsTouch);
    };
  }, []);

  if (isTouch) return null;

  const isLink = variant === 'link';
  const isText = variant === 'text';

  return (
    <div className="cursor-root">
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border transition-[width,height,border-color,opacity] duration-300 ease-out"
        style={{
          width: isLink ? 64 : isText ? 2 : 34,
          height: isLink ? 64 : isText ? 2 : 34,
          borderColor: isLink ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.28)',
          borderRadius: isText ? 2 : 999,
          opacity: isText ? 0 : 1,
        }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full transition-[width,height,background-color] duration-200 ease-out mix-blend-difference"
        style={{
          width: isLink ? 10 : isText ? 26 : 6,
          height: isLink ? 10 : isText ? 26 : 6,
          backgroundColor: '#ffffff',
        }}
      />
    </div>
  );
}
