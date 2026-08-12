import Reveal from '../components/Reveal';
import SectionEyebrow from '../components/SectionEyebrow';

const STYLES = [
  'Cinematic edits',
  'Fast-paced phonk edits',
  'Real estate edits',
  'Social media edits',
  'Commercial edits',
  'Promotional edits',
  'Velocity edits',
  'And many more',
];

export default function About() {
  return (
    <section id="about" className="relative px-5 sm:px-6 md:px-8 py-24 sm:py-28 md:py-32 lg:py-36 max-w-6xl mx-auto">
      <SectionEyebrow index="01" label="About" />

      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 sm:gap-12 md:gap-16 lg:gap-20">
        <div>
          <Reveal>
            <h2
              data-cursor="text"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tightest leading-tight text-white"
            >
              Hi, I&apos;m Rexo.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p data-cursor="text" className="mt-6 text-paper-dim text-base sm:text-lg leading-relaxed max-w-xl">
              I&apos;m Rexo, an editor who got way too obsessed with making clips hit harder. 
              I work across different styles, from cinematic and character edits to motion graphics and fast-paced social content Every project is different, 
              so I focus on figuring out what works for the footage instead of forcing the same style onto everything.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p data-cursor="text" className="mt-5 text-paper-dim text-base sm:text-lg leading-relaxed max-w-xl">
              I focus on understanding each client&apos;s vision and delivering
              edits that match their unique style, rather than forcing one
              editing approach onto every project.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="glass rounded-2xl p-7 sm:p-8 h-fit shadow-glass">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-paper-faint mb-5">
            Styles I work in
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-x-6 gap-y-3">
            {STYLES.map((style) => (
              <li
                key={style}
                className="flex items-start gap-2.5 text-sm text-paper-dim"
              >
                <span className="mt-2 h-1 w-1 rounded-full bg-white/50 shrink-0" />
                <span>{style}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
