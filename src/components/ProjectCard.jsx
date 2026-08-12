import { motion } from 'framer-motion';
import { ArrowUpRight, Youtube, Instagram, Film } from 'lucide-react';

const SIZE_CLASSES = {
  large: 'md:row-span-2',
  medium: 'md:row-span-2',
  small: 'md:row-span-1',
};

const PLATFORM_META = {
  youtube: { label: 'YouTube', Icon: Youtube },
  instagram: { label: 'Instagram', Icon: Instagram },
};

export default function ProjectCard({ project, index }) {
  const { title, description, platform, url, size, thumbnail } = project;
  const { label, Icon } =
    PLATFORM_META[platform] || PLATFORM_META.youtube;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="link"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{
        duration: 0.7,
        delay: (index % 3) * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover="hover"
      className={`group relative overflow-hidden rounded-2xl glass shadow-glass flex flex-col ${
        SIZE_CLASSES[size] || 'md:row-span-1'
      }`}
    >
      {/* Thumbnail area */}
      <div className="relative flex-1 min-h-[180px] overflow-hidden bg-gradient-to-br from-white/[0.06] to-white/[0.01]">
        {thumbnail ? (
          <motion.img
            src={thumbnail}
            alt={title}
            loading="lazy"
            decoding="async"
            variants={{
              hover: {
                scale: 1.06,
                filter: 'grayscale(0%)',
              },
            }}
            initial={{
              filter: 'grayscale(100%)',
            }}
            transition={{
              scale: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              },
              filter: {
                duration: 0.5,
                ease: 'ease-out',
              },
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <motion.div
            variants={{ hover: { scale: 1.06 } }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Film
              className="text-white/15"
              size={56}
              strokeWidth={1}
            />
          </motion.div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />

        <div className="absolute top-4 left-4 flex items-center gap-1.5 glass rounded-full px-3 py-1.5">
          <Icon size={12} className="text-white/80" />

          <span className="font-mono text-[10px] tracking-widest uppercase text-white/80">
            {label}
          </span>
        </div>

        <motion.div
          variants={{
            hover: {
              opacity: 1,
              scale: 1,
            },
          }}
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          transition={{
            duration: 0.3,
          }}
          className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white flex items-center justify-center"
        >
          <ArrowUpRight size={16} className="text-black" />
        </motion.div>
      </div>

      {/* Copy */}
      <div className="p-4 sm:p-5">
        <h3 className="font-display text-base sm:text-lg font-medium text-white leading-snug">
          {title}
        </h3>

        <p className="mt-1.5 text-sm text-paper-dim leading-relaxed">
          {description}
        </p>
      </div>
    </motion.a>
  );
}