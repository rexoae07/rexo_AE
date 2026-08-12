export default function Footer() {
  return (
    <footer className="relative px-5 sm:px-6 md:px-8 py-10 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 text-center sm:text-left">
        <div>
          <p className="font-display text-sm font-medium text-white">Rexo</p>
          <p className="text-xs text-paper-faint mt-0.5">Video Editor</p>
        </div>
        <div className="flex flex-col sm:items-end gap-0.5">
          <p className="text-xs text-paper-faint">© 2026 Rexo. All rights reserved.</p>
          <p className="font-mono text-[10px] tracking-widest uppercase text-paper-faint/70">
            Designed with precision and love :)
          </p>
        </div>
      </div>
    </footer>
  );
}
