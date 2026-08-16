import Reveal from '../components/Reveal';
import SectionEyebrow from '../components/SectionEyebrow';
import ProjectCard from '../components/ProjectCard';
import MagneticButton from '../components/MagneticButton';
import Dither from '../components/Dither/Dither';
import projects from '../utils/projects';
import { ArrowUpRight } from 'lucide-react';

const YOUTUBE_URL = 'https://www.youtube.com/@rexo_ae';

export default function Showreel() {
  return (
    <section
      id="showreel"
      className="relative overflow-hidden py-24 sm:py-28 md:py-32 lg:py-36"
    >
      {/* Dither Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Dither
          waveColor={[0.255, 0.255, 0.255]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.2}
          colorNum={4}
          pixelSize={2}
          waveAmplitude={0.24}
          waveFrequency={10}
          waveSpeed={0.02}
        />
        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#050505] via-[#050505]/75 to-transparent z-[2]" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-[2]" />

        {/* Left fade */}
        <div className="absolute inset-y-0 left-0 w-64 sm:w-80 md:w-96 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent z-[2]" />

        {/* Right fade */}
        <div className="absolute inset-y-0 right-0 w-64 sm:w-80 md:w-96 bg-gradient-to-l from-[#050505] via-[#050505]/90 to-transparent z-[2]" />

        <div className="absolute inset-y-0 right-0 w-36 bg-gradient-to-l from-[#050505]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <SectionEyebrow
          index="03"
          label="Showreel"
        />

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 sm:mb-14">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tightest text-white max-w-lg">
              Selected work, across formats.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm text-gray-300 max-w-xs">
              No bs only edits :)
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[240px] sm:auto-rows-[260px] md:auto-rows-[280px] gap-4 sm:gap-5 max-w-4xl lg:max-w-none mx-auto">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
            />
          ))}
        </div>

        <Reveal
          delay={0.15}
          className="flex justify-center mt-10 sm:mt-12"
        >
          <MagneticButton
            as="a"
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 glass text-white font-medium text-sm px-6 py-3.5 min-h-[48px] rounded-full"
          >
            View more

            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}