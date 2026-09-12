"use client";

import { useState } from "react";
import Link from "next/link";

const coverage = [
  {
    title: "Bug Fixes",
    description:
      "Quick resolution of unexpected errors and breakages across your website or application.",
  },
  {
    title: "Uptime Monitoring",
    description:
      "Proactive checks that catch downtime early so your product stays available to customers.",
  },
  {
    title: "Security Patches",
    description:
      "Timely application of security fixes to reduce risk and keep your platform protected.",
  },
  {
    title: "Minor Feature Updates",
    description:
      "Small enhancements and refinements that improve the product without a full new build.",
  },
  {
    title: "Dependency Updates",
    description:
      "Regular updates for frameworks, libraries and tools to keep the stack current and stable.",
  },
  {
    title: "Priority Support Response",
    description:
      "A dedicated response channel with faster turnaround times for issues that matter.",
  },
];

const tiers = [
  {
    name: "Basic",
    price: "₹12,000/month",
    features: [
      "Bug fixes",
      "Monthly uptime monitoring",
      "Security patches",
      "Email support",
      "Response within 48 hours",
    ],
  },
  {
    name: "Standard",
    price: "₹24,000/month",
    features: [
      "Everything in Basic",
      "Minor feature updates",
      "Dependency updates",
      "Weekly uptime monitoring",
      "Priority email support",
      "Response within 24 hours",
    ],
  },
  {
    name: "Priority",
    price: "₹42,000/month",
    features: [
      "Everything in Standard",
      "Daily uptime monitoring",
      "Faster security patch rollout",
      "Dedicated relationship manager",
      "Phone/WhatsApp support",
      "Response within 4 business hours",
    ],
  },
];

const faqs = [
  {
    q: "What is an AMC?",
    a: "An Annual Maintenance Contract is a recurring support plan that keeps your website or app stable, secure and continuously improved through planned maintenance and priority assistance.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes. You can move between Basic, Standard and Priority as your needs change. We will help you choose the right level before the next billing cycle.",
  },
  {
    q: "Do you work on products built by other teams?",
    a: "In most cases, yes. We start with a review of your existing stack and codebase, then confirm the scope of fixes and updates we can support.",
  },
  {
    q: "How quickly can you start?",
    a: "After a short onboarding call and access to your project, most AMC coverage can begin within a few working days.",
  },
  {
    q: "Are emergency fixes included?",
    a: "Priority support is included in every AMC, with faster response times on higher plans. Critical production issues are treated as top priority.",
  },
];

export default function AmcPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-white"
          >
            <span className="text-cyan-400">Druta</span> Systems
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              Products
            </Link>
            <Link
              href="/amc"
              className="text-sm font-medium text-cyan-400"
            >
              AMC
            </Link>
            <Link
              href="/#contact"
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden px-6 pb-24 pt-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Annual Maintenance Contracts for digital products that must stay online
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Keep your website or app healthy, secure and evolving with predictable
            monthly support from the Druta Systems team.
          </p>
          <a
            href="#enquiry"
            className="mt-10 inline-flex rounded-full bg-cyan-500 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Get AMC pricing
          </a>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            What&apos;s covered
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400">
            Every AMC is built around the recurring work your product needs to stay
            reliable, safe and useful.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coverage.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            AMC Plans
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400">
            Plain, predictable monthly pricing. No hidden charges or surprise billing.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 transition hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
                <p className="mt-3 text-2xl font-bold text-cyan-400">
                  {tier.price}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="text-cyan-400">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Frequently asked questions
          </h2>
          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-slate-800 bg-slate-900/60"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-medium text-white">{faq.q}</span>
                  <span className="ml-4 text-xl text-cyan-400">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-sm leading-relaxed text-slate-400">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="enquiry" className="px-6 pb-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Enquire about an AMC
          </h2>
          <p className="mt-4 text-slate-400">
            Tell us about your product and the support you need. We&apos;ll get back
            to you with a clear recommendation.
          </p>
          <form
            action="https://formspree.io/f/xoeqarvb"
            method="POST"
            className="mt-12 space-y-6"
          >
            <input
              type="text"
              name="business-name"
              required
              placeholder="Business Name"
              className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone/WhatsApp"
              className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
            />
            <input
              type="url"
              name="website"
              placeholder="Current Website/App URL"
              className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
            />
            <select
              name="amc-type"
              required
              defaultValue=""
              className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
            >
              <option value="" disabled>
                What do you need AMC for?
              </option>
              <option value="website-maintenance">Website maintenance</option>
              <option value="app-maintenance">App maintenance</option>
              <option value="bug-fixes">Bug fixes</option>
              <option value="security-updates">Security updates</option>
              <option value="full-amc">Full AMC</option>
            </select>
            <textarea
              name="message"
              rows={5}
              placeholder="Message"
              className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-cyan-500 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Send enquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}