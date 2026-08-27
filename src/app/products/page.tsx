'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Zap, Sparkles, ArrowRight, Layers, Cpu, ShieldCheck, 
  Mail, Phone, Building, User, FileText, Send, CheckCircle, 
  CheckCircle2, Rocket, Clock, DollarSign, ExternalLink,
  Award, Globe2, Code2, Users, ArrowUpRight, Terminal, Laptop
} from 'lucide-react';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
        alert('Form submission failed. Please try again.');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
                Engineering Studio
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="text-cyan-400">Home</Link>
            <a href="#track-record" className="text-slate-400 hover:text-white transition-colors hidden sm:inline">Track Record</a>
            <a href="#showcase" className="text-slate-400 hover:text-white transition-colors hidden sm:inline">Products</a>
            <a href="#services" className="text-slate-400 hover:text-white transition-colors hidden sm:inline">Expertise</a>
            <a href="#quote-form" className="px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all shadow-md shadow-cyan-500/20">
              Hire Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_35%_at_50%_10%,rgba(6,182,212,0.15),transparent)]" />
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" /> 5+ Years of Engineering Production-Ready SaaS & Web Platforms
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            We architect & ship <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">World-Class SaaS</span> and AI software
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Druta Systems is a high-speed venture development studio. We design, engineer, and deploy resilient digital products, custom web portals, and AI engines that scale effortlessly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#quote-form" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold hover:opacity-95 transition-all shadow-lg shadow-cyan-500/25">
              Start Your Project Scope <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#showcase" className="px-6 py-3.5 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold transition-all">
              Inspect Live Products
            </a>
          </div>
        </div>
      </section>

      {/* 5-Year Journey & Company Track Record */}
      <section id="track-record" className="py-16 px-6 max-w-5xl mx-auto border-t border-slate-900">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/30 p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-cyan-400 mb-2">
                <Award className="w-4 h-4" /> Established Engineering Excellence
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">5+ Years of Reliable Delivery</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Since 2021, our core engineering team has delivered custom digital architectures, complex web tools, and enterprise automation pipelines.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                We believe in zero technical bloat: clean modular codebases, sub-second edge response times, strict security frameworks, and 100% intellectual property transfer to our clients upon delivery.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950">
                <div className="text-3xl font-extrabold text-cyan-400">5+ Yrs</div>
                <div className="text-xs text-slate-400 mt-1">Production Experience in Full-Stack & Cloud</div>
              </div>
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950">
                <div className="text-3xl font-extrabold text-indigo-400">100%</div>
                <div className="text-xs text-slate-400 mt-1">Source Code Ownership & Commercial IP</div>
              </div>
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950">
                <div className="text-3xl font-extrabold text-emerald-400">&lt;200ms</div>
                <div className="text-xs text-slate-400 mt-1">Edge Server Performance & Fast Global CDN</div>
              </div>
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950">
                <div className="text-3xl font-extrabold text-sky-400">24/7</div>
                <div className="text-xs text-slate-400 mt-1">Direct Technical Support & Architecture Advice</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live In-House Products / Case Studies */}
      <section id="showcase" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold mb-3">
            <Rocket className="w-3.5 h-3.5" /> Proof of Execution
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Featured Production Platforms</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Real products built, owned, and scaled by Druta Systems demonstrating our software engineering and browser-processing capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Case Study 1: TheClipEditor */}
          <div className="p-8 rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/60 to-slate-950 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  Video AI & SaaS
                </span>
                <a 
                  href="https://theclipeditor.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs text-slate-400 hover:text-cyan-400 flex items-center gap-1"
                >
                  Live Demo <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">TheClipEditor Pro</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                A browser-native video rendering and short-form creation platform. Uses client-side WebAssembly and modern canvas composition to process videos directly on user devices without expensive cloud rendering servers.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" /> 100% Client-side zero server GPU cost
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Integrated subscription payment gateway
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Multi-aspect ratio video transcoding
                </div>
              </div>
            </div>
            <a 
              href="https://theclipeditor.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full py-2.5 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-center text-xs font-semibold text-white transition-all block"
            >
              Inspect theclipeditor.com
            </a>
          </div>

          {/* Case Study 2: GetReadyJob */}
          <div className="p-8 rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/60 to-slate-950 hover:border-indigo-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  Utility & Enterprise Portal
                </span>
                <a 
                  href="https://getreadyjob.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs text-slate-400 hover:text-indigo-400 flex items-center gap-1"
                >
                  Live Demo <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">GetReadyJob Suite</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                A high-traffic recruitment utilities portal featuring specialized photo/signature compressors, official format validators, and examination resource engines serving thousands of daily active users.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400" /> Precision image compression algorithms
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400" /> Fast SEO indexing with sub-second page loads
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400" /> High-concurrency traffic architecture
                </div>
              </div>
            </div>
            <a 
              href="https://getreadyjob.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full py-2.5 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-center text-xs font-semibold text-white transition-all block"
            >
              Inspect getreadyjob.com
            </a>
          </div>
        </div>
      </section>

      {/* Core Engineering Expertise */}
      <section id="services" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-900">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-white mb-3">Core Engineering Capabilities</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            We build custom software end-to-end: from UI/UX prototypes to scalable cloud deployment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-cyan-500/30 transition-all">
            <Cpu className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Custom AI & LLM Systems</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              AI assistants, multimedia processing pipelines, prompt workflows, automated transcription, and intelligent vector search.
            </p>
            <ul className="text-xs text-slate-300 space-y-1.5">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> OpenAI, Anthropic, Gemini API Engines</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Client-side WebAssembly & Media Processing</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-indigo-500/30 transition-all">
            <Layers className="w-8 h-8 text-indigo-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">SaaS & Enterprise Portals</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Full-fledged multi-tenant SaaS platforms, role-based dashboards, database architecture, and automated payment gateways.
            </p>
            <ul className="text-xs text-slate-300 space-y-1.5">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> Next.js 15, React, TypeScript, Node.js</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> Razorpay & Stripe Recurring Billing</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-emerald-500/30 transition-all">
            <ShieldCheck className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">High-Conversion Web Apps</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Corporate platforms, custom lead funnels, and enterprise showcases built for maximum conversion and performance.
            </p>
            <ul className="text-xs text-slate-300 space-y-1.5">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 100/100 Lighthouse Performance Scores</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> CI/CD Automated Cloud Deployments</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How We Work: 4-Step Process */}
      <section className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-900">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-white mb-3">Our Delivery Process</h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            From initial concept to production launch in four structured phases.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950">
            <div className="text-xs font-bold text-cyan-400 mb-2 uppercase">Step 01</div>
            <h4 className="text-sm font-bold text-white mb-1">Scope & Architecture</h4>
            <p className="text-xs text-slate-400">Detailed requirement breakdown, tech stack selection, and milestone roadmap.</p>
          </div>
          <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950">
            <div className="text-xs font-bold text-indigo-400 mb-2 uppercase">Step 02</div>
            <h4 className="text-sm font-bold text-white mb-1">Rapid Prototyping</h4>
            <p className="text-xs text-slate-400">Interactive UI/UX prototypes and core architectural foundation within days.</p>
          </div>
          <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950">
            <div className="text-xs font-bold text-emerald-400 mb-2 uppercase">Step 03</div>
            <h4 className="text-sm font-bold text-white mb-1">Production Build</h4>
            <p className="text-xs text-slate-400">Full-stack development, database schema, payment gateways, and security audits.</p>
          </div>
          <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950">
            <div className="text-xs font-bold text-sky-400 mb-2 uppercase">Step 04</div>
            <h4 className="text-sm font-bold text-white mb-1">Deploy & Handoff</h4>
            <p className="text-xs text-slate-400">Vercel/AWS cloud deployment with complete IP and source code transfer.</p>
          </div>
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
              {/* Formspree Metadata */}
              <input type="hidden" name="_subject" value="New Client Project Inquiry - Druta Systems" />

              {/* Section 1: Contact Information */}
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

              {/* Section 2: Project Specifications */}
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

              {/* Section 3: Budget Range */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Estimated Budget Range
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {['₹25k - ₹50k', '₹50k - ₹1.5L', '₹1.5L - ₹3L+', 'Discuss on Call'].map((tier) => (
                    <label key={tier} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 cursor-pointer">
                      <input type="radio" name="budget_tier" value={tier} defaultChecked={tier === '₹50k - ₹1.5L'} className="accent-cyan-500" />
                      <span className="text-slate-300 font-medium">{tier}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Section 4: Detailed Project Overview */}
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