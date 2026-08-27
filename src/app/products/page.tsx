'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Zap, Sparkles, ArrowRight, Layers, Cpu, ShieldCheck, 
  Mail, Phone, Building, User, FileText, Send, CheckCircle, 
  CheckCircle2, Rocket, Clock, DollarSign, ExternalLink,
  Award, Globe2, Code2, Users, ArrowUpRight, Terminal, Laptop,
  Lock, RefreshCw, HelpCircle, ChevronDown, Check, Star
} from 'lucide-react';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('₹50k - ₹1.5L');
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const handlePlanSelect = (tier: string) => {
    setSelectedPlan(tier);
    const element = document.getElementById('quote-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://formspree.io/f/xoeqarvb', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Submission error. Please try again.');
      }
    } catch (error) {
      alert('Network issue. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const faqs = [
    {
      q: "Who owns the intellectual property and source code?",
      a: "You retain 100% complete ownership of all source code, design assets, databases, and IP. Upon final milestone handoff, the full GitHub repository and cloud accounts are transferred to you with zero lock-in."
    },
    {
      q: "Do you sign a Non-Disclosure Agreement (NDA)?",
      a: "Yes, absolutely. We sign a mutual NDA prior to discussing any proprietary technical specifications, business logic, or customer workflows to safeguard your competitive advantage."
    },
    {
      q: "How fast can you build and ship an MVP?",
      a: "Our standard MVP turnaround is 2 to 4 weeks. Because we maintain our own in-house architectural blueprints for auth, payment gateways, and AI pipelines, we don't start from zero."
    },
    {
      q: "What tech stack do you specialize in?",
      a: "We specialize in modern, high-speed architectures: Next.js 15 (React 19), TypeScript, Node.js/Python FastAPI, Tailwind CSS, PostgreSQL/Supabase, WebAssembly/FFmpeg, and OpenAI/Claude/Gemini APIs."
    },
    {
      q: "What support do you provide post-launch?",
      a: "Every build comes with a complimentary 30-day post-launch bug warranty and monitoring period. We also offer ongoing monthly engineering retainers for continuous feature iterations."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      {/* Navigation */}
      <nav className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5 fill-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                DRUTA SYSTEMS
              </span>
              <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-semibold -mt-1">
                Venture & AI Studio
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="text-cyan-400">Home</Link>
            <a href="#showcase" className="text-slate-400 hover:text-white transition-colors hidden sm:inline">Portfolio</a>
            <a href="#pricing" className="text-slate-400 hover:text-white transition-colors hidden sm:inline">Pricing & Plans</a>
            <a href="#faq" className="text-slate-400 hover:text-white transition-colors hidden sm:inline">FAQ</a>
            <a href="#quote-form" className="px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all shadow-md shadow-cyan-500/20">
              Start Project
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_35%_at_50%_10%,rgba(6,182,212,0.15),transparent)]" />
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" /> High-Performance AI Engineering & Full-Stack SaaS Studio
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            We architect & build <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">World-Class Software</span> for high-growth ventures
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            From early-stage AI MVPs to enterprise platforms, Druta Systems combines 5+ years of battle-tested engineering with cutting-edge browser processing & cloud speed.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#quote-form" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold hover:opacity-95 transition-all shadow-lg shadow-cyan-500/25">
              Request Project Proposal <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#pricing" className="px-6 py-3.5 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold transition-all">
              Explore Pricing Tiers
            </a>
          </div>
        </div>
      </section>

      {/* Trust Badges & Tech Stack */}
      <section className="py-10 border-y border-slate-900 bg-slate-950/50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs uppercase tracking-widest text-slate-500 font-semibold mb-6">
            Architected With Modern Global Technology Stacks
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-semibold text-slate-400">
            <span className="flex items-center gap-1.5"><Code2 className="w-4 h-4 text-cyan-400" /> Next.js 15 & React 19</span>
            <span className="flex items-center gap-1.5"><Cpu className="w-4 h-4 text-indigo-400" /> OpenAI & Claude LLMs</span>
            <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-amber-400" /> WebAssembly & Canvas</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> PostgreSQL & Supabase</span>
            <span className="flex items-center gap-1.5"><Globe2 className="w-4 h-4 text-sky-400" /> Vercel Edge Network</span>
          </div>
        </div>
      </section>

      {/* 5-Year Track Record & Guarantees */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/30 p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-cyan-400 mb-2">
                <Award className="w-4 h-4" /> 5+ Years Industry Experience
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Speed, Stability & Zero Bloat</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Since 2021, Druta Systems has engineered full-stack architectures, high-traffic utility suites, and AI automation engines for startups and corporate clients.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                We believe in complete transparency: no outsourced junior talent, zero vendor lock-in, and strict mutual non-disclosure agreements before project initiation.
              </p>
              <div className="flex items-center gap-4 text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1"><Lock className="w-4 h-4 text-cyan-400" /> Mutual NDA</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% IP Handoff</span>
                <span className="flex items-center gap-1"><RefreshCw className="w-4 h-4 text-indigo-400" /> 30-Day Warranty</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950">
                <div className="text-3xl font-extrabold text-cyan-400">5+ Yrs</div>
                <div className="text-xs text-slate-400 mt-1">Full-Stack & Cloud Architecture</div>
              </div>
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950">
                <div className="text-3xl font-extrabold text-indigo-400">2-4 Wks</div>
                <div className="text-xs text-slate-400 mt-1">Average Turnaround for Custom MVPs</div>
              </div>
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950">
                <div className="text-3xl font-extrabold text-emerald-400">&lt;200ms</div>
                <div className="text-xs text-slate-400 mt-1">Edge Server Latency & High Speed</div>
              </div>
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950">
                <div className="text-3xl font-extrabold text-sky-400">100%</div>
                <div className="text-xs text-slate-400 mt-1">Full Source Code & Repository Transfer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Production Products */}
      <section id="showcase" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-900">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold mb-3">
            <Rocket className="w-3.5 h-3.5" /> Proof of Execution
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Featured In-House Software</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Commercial products built and scaled by our core studio engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product 1 */}
          <div className="p-8 rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/60 to-slate-950 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  Video AI Engine
                </span>
                <a href="https://theclipeditor.com" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-cyan-400 flex items-center gap-1">
                  Live Platform <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">TheClipEditor Pro</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Browser-native video transcoding and viral clipping suite. Uses client-side WebAssembly rendering to deliver zero cloud GPU cost and instantaneous exports.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Client-side zero-latency processing
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Recurring subscription billing engine
                </div>
              </div>
            </div>
            <a href="https://theclipeditor.com" target="_blank" rel="noopener noreferrer" className="w-full py-2.5 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-center text-xs font-semibold text-white transition-all block">
              View theclipeditor.com
            </a>
          </div>

          {/* Product 2 */}
          <div className="p-8 rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/60 to-slate-950 hover:border-indigo-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  Enterprise Utilities
                </span>
                <a href="https://getreadyjob.com" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-indigo-400 flex items-center gap-1">
                  Live Platform <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">GetReadyJob Suite</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                High-volume recruitment and candidate utility portal featuring custom image compression algorithms and format validators serving thousands of active users.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400" /> High-concurrency architecture
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400" /> Sub-second SEO loading speeds
                </div>
              </div>
            </div>
            <a href="https://getreadyjob.com" target="_blank" rel="noopener noreferrer" className="w-full py-2.5 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-center text-xs font-semibold text-white transition-all block">
              View getreadyjob.com
            </a>
          </div>
        </div>
      </section>

      {/* Pricing / Engagement Packages */}
      <section id="pricing" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-900">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold mb-3">
            <DollarSign className="w-3.5 h-3.5" /> Transparent Pricing
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Project Packages & Rates</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Predictable scope, fixed-price milestones, and zero hidden costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tier 1 */}
          <div className="p-7 rounded-3xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">MVP Sprint</h3>
              <p className="text-xs text-slate-400 mb-4">For founders needing a fast, working product to pitch or validate.</p>
              <div className="text-3xl font-extrabold text-white mb-4">₹35,000 <span className="text-xs text-slate-400 font-normal">/ one-time</span></div>
              <ul className="text-xs text-slate-300 space-y-2 mb-6">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> 1-2 Weeks Rapid Delivery</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Full Next.js 15 Web Architecture</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> User Auth + Database Setup</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Vercel Cloud Deployment</li>
              </ul>
            </div>
            <button 
              onClick={() => handlePlanSelect('₹25k - ₹50k')}
              className="w-full py-2.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-all"
            >
              Select MVP Sprint
            </button>
          </div>

          {/* Tier 2 (Highlighted) */}
          <div className="p-7 rounded-3xl border-2 border-cyan-500 bg-gradient-to-b from-cyan-950/20 to-slate-950 relative flex flex-col justify-between shadow-xl shadow-cyan-500/10">
            <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-cyan-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider">
              Most Popular
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Full-Scale SaaS</h3>
              <p className="text-xs text-slate-400 mb-4">Complete commercial web app with payments, AI, and admin portal.</p>
              <div className="text-3xl font-extrabold text-cyan-400 mb-4">₹75,000 - ₹1.5L <span className="text-xs text-slate-400 font-normal">/ project</span></div>
              <ul className="text-xs text-slate-300 space-y-2 mb-6">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> 3-4 Weeks Turnaround</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> OpenAI / Claude API AI Features</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Razorpay / Stripe Billing Engine</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> Comprehensive Admin Telemetry</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /> 30-Day Post-Launch Warranty</li>
              </ul>
            </div>
            <button 
              onClick={() => handlePlanSelect('₹50k - ₹1.5L')}
              className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-xs font-bold text-slate-950 transition-all shadow-md shadow-cyan-500/20"
            >
              Select Full-Scale SaaS
            </button>
          </div>

          {/* Tier 3 */}
          <div className="p-7 rounded-3xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Enterprise Custom</h3>
              <p className="text-xs text-slate-400 mb-4">Large-scale platforms, custom video/AI pipelines, and bespoke portals.</p>
              <div className="text-3xl font-extrabold text-white mb-4">Custom Scope</div>
              <ul className="text-xs text-slate-300 space-y-2 mb-6">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-400" /> Dedicated Technical Lead</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-400" /> Complex Multimedia / FFmpeg Engines</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-400" /> Microservices & AWS Cloud Deploy</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-400" /> Priority 24/7 SLA Support</li>
              </ul>
            </div>
            <button 
              onClick={() => handlePlanSelect('₹1.5L - ₹3L+')}
              className="w-full py-2.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-all"
            >
              Discuss Custom Build
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 max-w-4xl mx-auto border-t border-slate-900">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-900 text-slate-300 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Everything You Need to Know</h2>
          <p className="text-slate-400 text-sm">Clear answers on how we collaborate, execute, and deliver code.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl border border-slate-800 bg-slate-900/40 overflow-hidden">
              <button 
                onClick={() => toggleFaq(i)}
                className="w-full p-5 text-left flex items-center justify-between text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
              >
                {faq.q}
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${faqOpen === i ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>
              {faqOpen === i && (
                <div className="px-5 pb-5 text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Project Scope / Requirement Intake Form */}
      <section id="quote-form" className="py-20 px-6 max-w-4xl mx-auto border-t border-slate-900">
        <div className="rounded-3xl border border-cyan-500/30 bg-slate-900/60 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold mb-3">
              <FileText className="w-3.5 h-3.5" /> Client Project Intake Form
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-2">Tell Us About Your Project Requirements</h2>
            <p className="text-slate-400 text-sm max-w-lg mx-auto">
              Fill out this project questionnaire. Details will be delivered directly to our lead engineering desk, and we will contact you within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12 px-6 rounded-2xl bg-slate-950/80 border border-emerald-500/40">
              <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold text-white mb-2">Project Scope Received!</h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                Thank you! Your project requirements have reached our lead engineering team. We will review the specifications and reach out via Email / WhatsApp shortly.
              </p>
              <button 
                onClick={() => setSubmitted(false)} 
                className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all"
              >
                Submit Another Requirement
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_subject" value="New Client Project Inquiry - Druta Systems" />

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Name / Contact Person *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                    <input 
                      type="text" 
                      name="client_name" 
                      required 
                      placeholder="e.g. Rahul Sharma" 
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-sm text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Company / Organization Name
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                    <input 
                      type="text" 
                      name="company_name" 
                      placeholder="e.g. Acme Innovations" 
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-sm text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Business Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      placeholder="name@company.com" 
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-sm text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                    <input 
                      type="tel" 
                      name="phone_number" 
                      required 
                      placeholder="+91 98765 43210" 
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-sm text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Project Type & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Project Type *
                  </label>
                  <select 
                    name="project_type" 
                    required 
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-sm text-slate-200"
                  >
                    <option value="AI SaaS Platform">AI SaaS Platform / Web Application</option>
                    <option value="Custom Business Portal">Custom Portal / Dashboard</option>
                    <option value="Automation Engine">Backend Automation / API Pipeline</option>
                    <option value="Corporate Landing Page">Corporate Website & Showcase</option>
                    <option value="Consulting / Custom Build">Other Custom Software Build</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Expected Timeline *
                  </label>
                  <select 
                    name="timeline" 
                    required 
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-sm text-slate-200"
                  >
                    <option value="Urgent (1-2 Weeks)">Urgent (1 - 2 Weeks)</option>
                    <option value="Standard (2-4 Weeks)">Standard (2 - 4 Weeks)</option>
                    <option value="Flexible (1-2 Months)">Flexible (1 - 2 Months)</option>
                    <option value="Ongoing Long-term">Ongoing / Dedicated Partnership</option>
                  </select>
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Estimated Budget Range
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {['₹25k - ₹50k', '₹50k - ₹1.5L', '₹1.5L - ₹3L+', 'Discuss on Call'].map((tier) => (
                    <label key={tier} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 cursor-pointer">
                      <input 
                        type="radio" 
                        name="budget_tier" 
                        value={tier} 
                        checked={selectedPlan === tier}
                        onChange={() => setSelectedPlan(tier)}
                        className="accent-cyan-500" 
                      />
                      <span className="text-slate-300 font-medium">{tier}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Detailed Scope */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Project Scope & Key Features Required *
                </label>
                <textarea 
                  name="project_description" 
                  rows={4} 
                  required 
                  placeholder="Describe your requirements: e.g. User login, payment integration, AI features, database requirements, or reference websites..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-sm text-white placeholder-slate-600"
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-600 hover:opacity-95 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/25 disabled:opacity-50"
              >
                {loading ? 'Submitting Scope...' : <>Submit Project Brief <Send className="w-4 h-4" /></>}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 px-6 text-center text-xs text-slate-500">
        <p>© 2026 Druta Systems. All rights reserved. Engineering high-speed digital products.</p>
      </footer>
    </div>
  );
}