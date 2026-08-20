import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import MagneticButton from '../components/MagneticButton';
import GradualBlur from '../components/GradualBlur/GradualBlur';

function scrollToId(id) {
  const el = document.getElementById(id);

  if (el) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Keep the parallax subtle so the typography still feels anchored
  // to the artwork.
  const y = useTransform(scrollYProgress, [0, 1], [0, 55]);
  const opacity = useTransform(scrollYProgress, [0, 0.78], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] flex items-center justify-center px-5 sm:px-6 md:px-8 overflow-hidden bg-black"
    >
      {/* HERO IMAGE */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 1.045,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.4,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute inset-0 z-0"
        aria-hidden="true"
      >
        <img
          src="/Handa.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{
            objectPosition: 'center center',
          }}
        />
      </motion.div>

      {/* SUBTLE BOTTOM FADE */}
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

      {/* HERO CONTENT */}
      <motion.div
        style={{
          y,
          opacity,
        }}
        className="relative z-10 w-full h-[100svh]"
      >
        {/* TEXT */}
        <div
          className="
            absolute
            top-[30%]
            sm:top-[30.5%]
            md:top-[32  %]
            left-0
            right-0
            w-full
            max-w-4xl
            mx-auto
            text-center
            px-6
          "
        >
          <motion.h1
            initial={{
              opacity: 0,
              y: 24,
              filter: 'blur(10px)',
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
            }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              fontFamily:
                '"Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
            className="
              text-[2rem]
              sm:text-[2.55rem]
              md:text-[3rem]
              lg:text-[3.35rem]
              leading-[1.08]
              tracking-[-0.035em]
              mb-4
            "
          >
            <span className="text-white/40 font-light">
              Cooking clips with the
            </span>

            <br />

            <span className="text-white font-light">
              help of editing
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
              y: 14,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.85,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              text-[12px]
              sm:text-[13px]
              md:text-[14px]
              text-white/40
              max-w-[430px]
              mx-auto
              leading-[1.55]
            "
            style={{
              fontFamily:
                '"Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
          >
            I cook cinematic edits, motion graphics and
            <br className="hidden sm:block" />
            scroll-stopping content.
          </motion.p>
        </div>

        {/* CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 18,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.58,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            absolute
            top-[52%]
            sm:top-[51.5%]
            md:top-[51%]
            left-0
            right-0
            flex
            justify-center
          "
        >
          <MagneticButton
            onClick={() => scrollToId('showreel')}
            style={{
              fontFamily:
                '"Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
            className="
              group
              inline-flex
              items-center
              justify-center

              bg-white
              text-black
              font-normal

              text-[13px]
              sm:text-[14px]

              px-8
              sm:px-9

              py-3
              sm:py-3.5

              rounded-[16px]
              sm:rounded-[17px]

              transition-all
              duration-500
              ease-[cubic-bezier(0.16,1,0.3,1)]

              hover:scale-[1.075]
              hover:-translate-y-[3px]

              hover:shadow-[0_14px_45px_rgba(255,255,255,0.22)]

              active:scale-[0.98]
              active:translate-y-0
            "
          >
            <span
              className="
                transition-transform
                duration-500
                ease-[cubic-bezier(0.16,1,0.3,1)]
                group-hover:translate-x-[1px]
              "
            >
              View Showreel
            </span>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.35,
          duration: 1,
        }}
        className="
          absolute
          bottom-6
          sm:bottom-9
          left-1/2
          -translate-x-1/2
          flex
          flex-col
          items-center
          gap-2
          text-white/30
          z-10
        "
      >
        <span
          className="
            font-mono
            text-[9px]
            tracking-[0.32em]
            uppercase
          "
        >
          Scroll
        </span>

        <motion.span
          animate={{
            y: [0, 6, 0],
            opacity: [0.45, 0.8, 0.45],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            h-8
            w-px
            bg-gradient-to-b
            from-white/40
            to-transparent
          "
        />
      </motion.div>
    </section>
  );
}