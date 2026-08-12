export default function SectionEyebrow({ index, label }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="font-mono text-xs tracking-widest text-paper-faint">{index}</span>
      <span className="h-px w-8 bg-white/20" />
      <span className="font-mono text-xs tracking-[0.25em] uppercase text-paper-dim">{label}</span>
    </div>
  );
}
