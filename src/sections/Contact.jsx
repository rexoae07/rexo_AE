import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Instagram,
  Mail,
  Youtube,
  ArrowUpRight,
  Check,
} from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionEyebrow from '../components/SectionEyebrow';
import MagneticButton from '../components/MagneticButton';
import FloatingLights from '../components/FloatingLights';

const SOCIALS = [
  { label: 'Discord', handle: 'rexo_ae', href: null, Icon: MessageCircle },
  {
    label: 'Instagram',
    handle: '@rexoofc',
    href: 'https://instagram.com/rexoofc',
    Icon: Instagram,
  },
  {
    label: 'Email',
    handle: 'rexo.aeofficial@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=rexo.aeofficial@gmail.com&su=Let%27s%20work%20together&body=Hey%2C%20I%20wanna%20hire%20you!',
    Icon: Mail,
  },
  {
    label: 'YouTube',
    handle: '@rexo_ae',
    href: 'https://www.youtube.com/@rexo_ae',
    Icon: Youtube,
  },
];

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyDiscord = (handle) => {
    navigator.clipboard?.writeText(handle).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <section
      id="contact"
      className="relative px-5 sm:px-6 md:px-8 py-24 sm:py-28 md:py-32 lg:py-36 max-w-6xl mx-auto overflow-hidden"
    >
      <FloatingLights className="opacity-60" />

      <SectionEyebrow index="05" label="Contact" />

      <Reveal>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tightest text-white max-w-2xl leading-[1.1] sm:leading-[1.05]">
          Got a project in mind? Lemme cook!
        </h2>
      </Reveal>

      <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 gap-4 sm:gap-5">
        {SOCIALS.map((social, i) => {
          const isDiscord = !social.href;

          return (
            <MagneticButton
              key={social.label}
              as={isDiscord ? 'button' : 'a'}
              href={social.href || undefined}
              target={isDiscord ? undefined : '_blank'}
              rel={isDiscord ? undefined : 'noopener noreferrer'}
              onClick={
                isDiscord
                  ? () => handleCopyDiscord(social.handle)
                  : undefined
              }
              className="w-full text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="glass rounded-2xl p-5 sm:p-6 min-h-[48px] flex items-center justify-between gap-3 shadow-glass hover:bg-white/[0.06] transition-colors duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="h-11 w-11 rounded-full glass-strong flex items-center justify-center shrink-0">
                    <social.Icon size={18} className="text-white/85" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-medium text-white">
                      {social.label}
                    </p>
                    <p className="text-xs text-paper-dim mt-0.5 break-all">
                      {isDiscord && copied
                        ? 'Copied to clipboard'
                        : social.handle}
                    </p>
                  </div>
                </div>

                {isDiscord ? (
                  <Check
                    size={18}
                    className={`text-paper-faint shrink-0 transition-opacity ${
                      copied ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ) : (
                  <ArrowUpRight
                    size={18}
                    className="text-paper-faint shrink-0"
                  />
                )}
              </motion.div>
            </MagneticButton>
          );
        })}
      </div>
    </section>
  );
}

export default React.memo(Contact);