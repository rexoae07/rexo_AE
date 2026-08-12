import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
import SectionEyebrow from '../components/SectionEyebrow';
import { padIndex } from '../utils/format';

const STEPS = [
  { title: 'Brief', copy: 'I figure out what the edit needs to do and who its for.' },
  { title: 'References', copy: 'I look at the vibe, pacing, and references before I touch the timeline.' },
  { title: 'Rough Cut', copy: 'I build the edit around the footage, pacing, and music.' },
  { title: 'Effects & Sound', copy: 'Graphs, transitions, motion, sound design whatever the edit needs.' },
  { title: 'Feedback', copy: 'You tell me what needs changing. I refine it.' },
  { title: 'Final Render', copy: 'Clean it up, export it, send it over.' },
];

export default function Process() {
  return (
    <section id="process" className="relative px-5 sm:px-6 md:px-8 py-24 sm:py-28 md:py-32 lg:py-36 max-w-6xl mx-auto">
      <SectionEyebrow index="04" label="Editing Process" />
      <Reveal>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tightest text-white max-w-lg mb-14 sm:mb-16 lg:mb-20">
          Six steps, one story.
        </h2>
      </Reveal>

      {/* Desktop / large tablet: horizontal timeline */}
      <div className="hidden lg:block relative">
        <div className="absolute top-[22px] left-0 right-0 h-px bg-white/10" />
        <motion.div
          className="absolute top-[22px] left-0 h-px bg-white/50 origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="grid grid-cols-6 gap-4 xl:gap-6">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="relative pt-14">
                <div className="absolute top-0 left-0 h-11 w-11 rounded-full glass-strong flex items-center justify-center">
                  <span className="font-mono text-xs text-white/80">{padIndex(i + 1)}</span>
                </div>
                <h3 className="font-display text-sm font-medium text-white leading-snug">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs text-paper-dim leading-relaxed">{step.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Mobile / tablet: vertical timeline */}
      <div className="lg:hidden relative pl-9 sm:pl-10 max-w-xl md:max-w-2xl">
        <div className="absolute top-2 bottom-2 left-[17px] sm:left-[19px] w-px bg-white/10" />
        <div className="flex flex-col gap-8 sm:gap-10">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.06} className="relative">
              <div className="absolute -left-9 sm:-left-10 top-0 h-9 w-9 rounded-full glass-strong flex items-center justify-center">
                <span className="font-mono text-[11px] text-white/80">{padIndex(i + 1)}</span>
              </div>
              <h3 className="font-display text-sm font-medium text-white">{step.title}</h3>
              <p className="mt-1.5 text-xs text-paper-dim leading-relaxed max-w-xs md:max-w-md">{step.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
