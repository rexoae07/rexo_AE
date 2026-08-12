import Reveal from '../components/Reveal';
import SectionEyebrow from '../components/SectionEyebrow';
import AnimatedStat from '../components/AnimatedStat';

const STATS = [
  { value: 20, prefix: '', suffix: '+', label: 'Projects Completed' },
  { value: 9, prefix: '', suffix: '.2/10', label: 'Client Satisfaction' },
  { value: 300, prefix: '', suffix: '+', label: 'YouTube Subscribers' },
  { value: 3, prefix: '', suffix: 'M+', label: 'Views Reached' },
];
export default function Achievements() {
  return (
    <section id="achievements" className="relative px-5 sm:px-6 md:px-8 py-24 sm:py-28 md:py-32 lg:py-36 max-w-6xl mx-auto">
      <SectionEyebrow index="02" label="Achievements" />
      <Reveal>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tightest text-white max-w-lg">
          A few things I've managed to break the algorithm with.
        </h2>
      </Reveal>

      <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
        {STATS.map((stat, i) => (
          <AnimatedStat key={stat.label} index={i} {...stat} />
        ))}
      </div>
    </section>
  );
}
