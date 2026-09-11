import Link from "next/link";

type CaseStudy = {
  clientType: string;
  problem: string;
  solution: string;
  results: string[];
};

const caseStudies: CaseStudy[] = [
  {
    clientType: "Video SaaS Startup",
    problem: "Editing turnaround was blocking the team from publishing daily content.",
    solution:
      "Built a custom browser-based clip editor that lets creators trim, caption, and export episodes without leaving the dashboard.",
    results: ["40% faster delivery", "3.2x more clips published", "9 min saved per edit"],
  },
  {
    clientType: "Recruitment Platform",
    problem: "Candidates were dropping out of a slow, multi-step screening flow.",
    solution:
      "Replaced the old form flow with a mobile-first interview readiness app and automated scheduling reminders.",
    results: ["28% more completed applications", "6.4 days shorter time-to-hire", "91% candidate satisfaction"],
  },
  {
    clientType: "Fintech SaaS Startup",
    problem: "Early customers had no self-serve way to understand onboarding or track setup.",
    solution:
      "Designed a product onboarding hub with live setup checklists, progress tracking, and an in-app assistant.",
    results: ["35% faster activation", "52% fewer support tickets", "4.9/5 onboarding rating"],
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      <nav className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-sm font-semibold tracking-wide text-slate-100">
            Druta Systems
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/" className="text-slate-400 transition-colors hover:text-white">
              Home
            </Link>
            <Link href="/products" className="text-slate-400 transition-colors hover:text-white">
              Products
            </Link>
            <Link href="/case-studies" className="text-cyan-300 transition-colors hover:text-cyan-200">
              Case Studies
            </Link>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
            Case Studies
          </span>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Real problems, built solutions.
          </h1>
          <p className="mt-3 max-w-2xl text-slate-400">
            A look at how we partner with startups to design, build and ship products that move a core metric.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.clientType}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-colors hover:border-cyan-400/40"
            >
              <span className="inline-flex rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1 text-xs font-medium text-indigo-300">
                {study.clientType}
              </span>
              <p className="mt-4 text-sm font-medium text-slate-300">{study.problem}</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">{study.solution}</p>
              <div className="mt-6 space-y-3 border-t border-slate-800 pt-5">
                {study.results.map((result) => (
                  <div key={result} className="flex items-center gap-3 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span className="font-semibold text-cyan-300">{result}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-xs text-slate-500">
          <p>© 2026 Druta Systems. All rights reserved.</p>
          <p>Built in India. Serving clients worldwide.</p>
        </div>
      </footer>
    </main>
  );
}