import Link from 'next/link';
import { Zap, ArrowLeft, ExternalLink, Video, Briefcase, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      {/* Navigation */}
      <nav className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white">
              <Zap className="w-4 h-4 fill-white" />
            </div>
            <span className="font-extrabold text-base tracking-tight text-white">DRUTA SYSTEMS</span>
          </Link>
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-cyan-400 hover:text-cyan-300 font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Product Portfolio
          </div>
          <h1 className="text-4xl font-extrabold text-white mb-4">In-House Products & Platforms</h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Explore the flagship software platforms developed and managed under the Druta Systems umbrella.
          </p>
        </div>

        <div className="space-y-12">
          {/* Detailed Product 1: TheClipEditor */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Video className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">TheClipEditor</h2>
                  <p className="text-xs text-cyan-400 font-medium">AI Multimedia & Video Generation Engine</p>
                </div>
              </div>
              <a href="https://theclipeditor.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all w-fit">
                Open Live Product <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              A specialized browser-first SaaS platform that simplifies multimedia creation, automated video framing, timeline editing, and dynamic subtitle overlays without requiring heavy desktop software.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Real-time Canvas Rendering</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Automated AI Captioning & Voiceover</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Razorpay Multi-Tier SaaS Subscriptions</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> High-Performance Next.js Architecture</div>
            </div>
          </div>

          {/* Detailed Product 2: GetReadyJob */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Briefcase className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">GetReadyJob</h2>
                  <p className="text-xs text-indigo-400 font-medium">Career Assessment & Readiness SaaS</p>
                </div>
              </div>
              <a href="https://getreadyjob.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-all w-fit">
                Open Live Product <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              An interactive web application designed to help job aspirants test their skills, prepare for technical interviews, and gain actionable readiness scores across industries.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Dynamic Assessment Workflow</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> User Profile & Skill Tracking</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Fast & Responsive Web Experience</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Cloud Database & Secure Auth</div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-900 py-8 px-6 text-center text-xs text-slate-500">
        <p>© 2026 Druta Systems. All rights reserved.</p>
      </footer>
    </div>
  );
}