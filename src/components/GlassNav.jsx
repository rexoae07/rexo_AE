import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import useScrollSpy from '../hooks/useScrollSpy';
import { formatTimecode } from '../utils/format';

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'achievements', label: 'Stats' },
  { id: 'showreel', label: 'Work' },
  { id: 'process', label: 'Process' },
  { id: 'contact', label: 'Contact' },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

export default function GlassNav() {
  const { activeId, progress } = useScrollSpy(LINKS.map((l) => l.id));
  const [open, setOpen] = useState(false);

  // Lock background scrolling (native + Lenis) while the mobile menu is open.
  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.dataset.scrollY = String(scrollY);
      window.__lenis?.stop();
    } else {
      const scrollY = Number(document.body.dataset.scrollY || 0);
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      delete document.body.dataset.scrollY;
      window.scrollTo(0, scrollY);
      window.__lenis?.start();
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      window.__lenis?.start();
    };
  }, [open]);

  function handleNavigate(id) {
    scrollToId(id);
    setOpen(false);
  }

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-3 sm:top-4 inset-x-0 z-50 flex justify-center px-4 sm:px-5 md:px-6"
    >
      <div className="w-full max-w-5xl">
        <div className="glass-strong rounded-2xl px-4 sm:px-5 md:px-6 py-3 md:py-3.5 flex items-center justify-between shadow-glass">
          {/* Logo */}
          <a
            href="#top"
            data-cursor="link"
            onClick={(e) => {
              e.preventDefault();
              handleNavigate('top');
            }}
            className="font-display font-semibold tracking-tight text-sm sm:text-base text-white shrink-0"
          >
            Rexo
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-0.5 lg:gap-1">
            {LINKS.map((link) => (
              <button
                key={link.id}
                data-cursor="link"
                aria-current={activeId === link.id ? 'true' : undefined}
                onClick={() => scrollToId(link.id)}
                className={`relative px-3 lg:px-4 py-2 text-xs tracking-wide rounded-full transition-colors duration-300 ${
                  activeId === link.id
                    ? 'text-white'
                    : 'text-paper-dim hover:text-white'
                }`}
              >
                {activeId === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/10 border border-white/10"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </button>
            ))}
          </nav>

          {/* Scroll Progress */}
          <div className="hidden md:flex items-center gap-2 font-mono text-[11px] text-paper-dim tabular-nums shrink-0">
            <span className="text-white/70">
              {formatTimecode(progress)}
            </span>

            <div className="relative h-[3px] w-12 lg:w-16 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-white/60"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            data-cursor="link"
            type="button"
            className="md:hidden h-11 w-11 -mr-1 flex items-center justify-center rounded-full text-white active:bg-white/10 transition-colors"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-nav-menu"
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden mt-2 overflow-hidden"
            >
              <nav
                aria-label="Mobile"
                className="glass-strong rounded-2xl p-3 flex flex-col gap-1 shadow-glass"
              >
                {LINKS.map((link) => (
                  <button
                    key={link.id}
                    data-cursor="link"
                    aria-current={activeId === link.id ? 'true' : undefined}
                    onClick={() => handleNavigate(link.id)}
                    className={`min-h-[48px] flex items-center text-left px-4 rounded-xl text-base transition-colors ${
                      activeId === link.id
                        ? 'text-white bg-white/10'
                        : 'text-paper-dim hover:text-white active:bg-white/[0.06]'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
