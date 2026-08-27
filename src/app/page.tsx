import Link from 'next/link';
import { Zap, Sparkles, ArrowRight, Video, Briefcase, Code, ShieldCheck, Mail, Globe, Layers, Cpu, Users } from 'lucide-react';
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      {/* Navigation */}
      <nav className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-black font-bold shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5 text-white fill-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                DRUTA SYSTEMS
              </span>
              <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-semibold -mt-1">
                Venture Studio
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="text-cyan-400">Home</Link>
            <Link href="/products" className="text-slate-400 hover:text-white transition-colors">Products</Link>
            <a href="#services" className="text-slate-400 hover:text-white transition-colors hidden sm:inline">Capabilities</a>
            <a href="#contact" className="px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all shadow-md shadow-cyan-500/20">
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_35%_at_50%_10%,rgba(6,182,212,0.15),transparent)]" />
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" /> High-Performance AI & Full-Stack Web Platforms
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Engineering scalable SaaS & modern <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">web technologies</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-6 leading-relaxed">
            Druta Systems is a venture and product studio creating production-ready AI software, video engines, and full-stack digital architectures.
          </p>
          <div className="inline-flex items-start sm:items-center gap-2.5 px-5 py-3 rounded-2xl border border-slate-800 bg-slate-900/60 text-slate-300 text-xs sm:text-sm font-medium mb-10 text-left">
            <Users className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
            <span>Backed by experienced software architects and product engineers with <span className="text-white font-semibold">5+ years</span> of verified full-stack & AI delivery.</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold hover:opacity-95 transition-all shadow-lg shadow-cyan-500/25">
              Explore In-House Products <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="#contact" className="px-6 py-3.5 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold transition-all">
              Hire Us For Custom Build
            </a>
          </div>
        </div>
      </section>

      {/* Core Highlights */}
      <section className="py-12 border-y border-slate-900 bg-slate-950/50">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/30">
            <Cpu className="w-8 h-8 text-cyan-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">AI Native Architecture</h3>
            <p className="text-sm text-slate-400">Deep integration with LLMs, generative video pipelines, and high-throughput APIs.</p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/30">
            <Layers className="w-8 h-8 text-indigo-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">Modern Next.js Stack</h3>
            <p className="text-sm text-slate-400">Ultra-fast server components, responsive interfaces, and production-grade security.</p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/30">
            <ShieldCheck className="w-8 h-8 text-emerald-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">Full-Cycle SaaS Ready</h3>
            <p className="text-sm text-slate-400">Built-in authentication, Razorpay/Stripe billing, and database workflows.</p>
          </div>
        </div>
      </section>

      {/* Featured Flagship Products */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-white mb-3">Our Flagship SaaS Products</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Live web platforms built and operated under the Druta Systems umbrella.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: TheClipEditor */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 flex flex-col justify-between hover:border-cyan-500/50 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Video className="w-6 h-6" />
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 font-semibold border border-cyan-500/20">
                  Live SaaS
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">TheClipEditor</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Browser-based AI video creation suite with timeline canvas, dynamic layer composition, automated templates, and secure multi-tier billing.
              </p>
              <div className="flex flex-wrap gap-2 mb-6 text-xs text-slate-300">
                <span className="px-2.5 py-1 bg-slate-800/80 rounded-md">Next.js</span>
                <span className="px-2.5 py-1 bg-slate-800/80 rounded-md">Canvas / FFmpeg</span>
                <span className="px-2.5 py-1 bg-slate-800/80 rounded-md">OpenAI API</span>
                <span className="px-2.5 py-1 bg-slate-800/80 rounded-md">Razorpay</span>
              </div>
            </div>
            <a href="https://theclipeditor.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all">
              Visit TheClipEditor <Globe className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: GetReadyJob */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 flex flex-col justify-between hover:border-indigo-500/50 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Briefcase className="w-6 h-6" />
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 font-semibold border border-indigo-500/20">
                  Live SaaS
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">GetReadyJob</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Comprehensive career preparation and job assessment ecosystem designed to streamline skill evaluation and candidate readiness.
              </p>
              <div className="flex flex-wrap gap-2 mb-6 text-xs text-slate-300">
                <span className="px-2.5 py-1 bg-slate-800/80 rounded-md">Next.js</span>
                <span className="px-2.5 py-1 bg-slate-800/80 rounded-md">Assessment Engine</span>
                <span className="px-2.5 py-1 bg-slate-800/80 rounded-md">Authentication</span>
                <span className="px-2.5 py-1 bg-slate-800/80 rounded-md">Cloud Database</span>
              </div>
            </div>
            <a href="https://getreadyjob.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all">
              Visit GetReadyJob <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Services / Client Capabilities */}
      <section id="services" className="py-20 px-6 bg-slate-900/30 border-t border-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Custom Development Capabilities</h2>
            <p className="text-slate-400 text-sm max-w-lg mx-auto">
              We also partner with businesses and founders worldwide to build high-grade web applications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-slate-800 bg-slate-950">
              <Code className="w-7 h-7 text-cyan-400 mb-3" />
              <h4 className="font-bold text-white mb-2">Custom AI Integrations</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Tailored OpenAI / Anthropic agent workflows, prompt engines, and automated backend scripts.</p>
            </div>
            <div className="p-6 rounded-xl border border-slate-800 bg-slate-950">
              <Layers className="w-7 h-7 text-indigo-400 mb-3" />
              <h4 className="font-bold text-white mb-2">Full-Stack SaaS Platforms</h4>
              <p className="text-xs text-slate-400 leading-relaxed">End-to-end architecture: Next.js frontend, database models, payment gateways, and user auth.</p>
            </div>
            <div className="p-6 rounded-xl border border-slate-800 bg-slate-950">
              <ShieldCheck className="w-7 h-7 text-emerald-400 mb-3" />
              <h4 className="font-bold text-white mb-2">Landing Pages & Portals</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Ultra-fast, mobile-first business websites engineered for maximum conversion and credibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-3xl mx-auto">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-8 sm:p-12 text-center shadow-2xl">
          <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mx-auto mb-4">
            <Mail className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-3">Let's Build Something Great</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto mb-8">
            Have a project in mind or looking for a custom web solution? Reach out directly to our engineering team.
          </p>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-2 rounded-2xl bg-slate-950 border border-slate-800">
            <span className="px-4 text-cyan-300 font-mono text-sm sm:text-base font-medium select-all">
              contact@drutasystems.com
            </span>
            <a href="mailto:contact@drutasystems.com" className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all">
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 px-6 text-center text-xs text-slate-500">
        <p>© 2026 Druta Systems. All rights reserved. Engineering high-speed digital products.</p>
      </footer>
    </div>
  );
}