import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Druta Systems delivered our AI video MVP in under 3 weeks. Fast execution, clean Next.js architecture, and zero technical bloat.',
    name: 'Alex M.',
    role: 'SaaS Founder',
    location: 'US',
  },
  {
    quote:
      'Exceptional speed and attention to performance. The browser-level processing eliminated our cloud GPU costs entirely.',
    name: 'Rohan K.',
    role: 'Product Lead',
    location: 'India',
  },
  {
    quote:
      'The most seamless transition from idea to production-ready software. Complete code ownership handed over on day one.',
    name: 'David L.',
    role: 'Tech Director',
    location: 'UK',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-900">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-3">
          <Star className="w-3.5 h-3.5 fill-emerald-300" /> Client Success Stories
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Trusted by Founders & Product Teams</h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
          Real feedback from clients who shipped production software with our engineering team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="p-7 rounded-3xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between hover:border-emerald-500/40 transition-all"
          >
            <div>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                {t.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <div className="text-sm font-bold text-white truncate">{t.name}</div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                    {t.role}
                  </span>
                  <span className="text-[10px] text-slate-500">{t.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
