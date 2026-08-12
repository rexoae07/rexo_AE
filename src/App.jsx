import { useEffect, useState } from 'react';
import useLenis from './hooks/useLenis';
import CustomCursor from './components/CustomCursor';
import GlassNav from './components/GlassNav';
import PageLoader from './components/PageLoader';
import Home from './pages/Home';
import GradualBlur from './components/GradualBlur/GradualBlur';

export default function App() {
  useLenis();
  const [loading, setLoading] = useState(true);
  const [blurOpacity, setBlurOpacity] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const checkBottom = () => {
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const distanceFromBottom =
        documentHeight - (scrollTop + viewportHeight);

      // Start fading the blur 400px before reaching the bottom
      const fadeDistance = 400;

      const opacity = Math.min(
        1,
        Math.max(0, distanceFromBottom / fadeDistance)
      );

      setBlurOpacity(opacity);
    };

    window.addEventListener('scroll', checkBottom, { passive: true });
    window.addEventListener('resize', checkBottom);

    checkBottom();

    return () => {
      window.removeEventListener('scroll', checkBottom);
      window.removeEventListener('resize', checkBottom);
    };
  }, []);

  return (
    <>
      <PageLoader visible={loading} />

      <div className="grain" />

      <CustomCursor />

      <GlassNav />

      <Home />

      <GradualBlur
        target="page"
        position="bottom"
        height="8rem"
        strength={2}
        divCount={8}
        curve="bezier"
        exponential={true}
        opacity={1}
        style={{
          opacity: blurOpacity,
          transition: 'opacity 0.15s linear',
        }}
      />
    </>
  );
}