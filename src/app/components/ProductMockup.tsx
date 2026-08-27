type Accent = 'cyan' | 'indigo';

const ACCENT_STYLES: Record<Accent, { text: string; border: string; glow: string }> = {
  cyan: {
    text: 'text-cyan-400',
    border: 'border-cyan-500/20',
    glow: 'from-cyan-500/10',
  },
  indigo: {
    text: 'text-indigo-400',
    border: 'border-indigo-500/20',
    glow: 'from-indigo-500/10',
  },
};

interface ProductMockupProps {
  url: string;
  accent: Accent;
  stats: { value: string; label: string }[];
  badges: string[];
}

// Stylized browser-window preview used inside product showcase cards.
export default function ProductMockup({ url, accent, stats, badges }: ProductMockupProps) {
  const styles = ACCENT_STYLES[accent];

  return (
    <div className={`mb-6 rounded-2xl border ${styles.border} bg-slate-950/80 overflow-hidden shadow-inner`}>
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-900/80 border-b border-slate-800/80">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
        <span className="ml-3 text-[10px] text-slate-500 font-mono truncate">{url}</span>
      </div>
      <div className={`p-4 bg-gradient-to-br ${styles.glow} to-transparent`}>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {stats.map((s) => (
            <div key={s.label} className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80 text-center">
              <div className={`text-sm font-bold ${styles.text}`}>{s.value}</div>
              <div className="text-[9px] text-slate-500 mt-0.5 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {badges.map((b) => (
            <span key={b} className="px-2 py-0.5 rounded-md bg-slate-800/80 text-[10px] text-slate-300 font-mono">
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
