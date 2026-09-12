import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DAI Flash | Druta Systems",
  description:
    "DAI Flash by Druta Systems rapidly builds production-ready web apps and interfaces with human review. Ship complete web products in hours, not weeks.",
  keywords: [
    "DAI Flash",
    "Druta Systems",
    "rapid web app development",
    "AI web app builder",
    "production-ready web apps",
    "MVP development India",
    "Next.js development",
    "React development",
    "full-stack development",
    "SaaS development",
    "web product development",
    "automated build engine",
  ],
  openGraph: {
    title: "DAI Flash | Druta Systems",
    description:
      "DAI Flash by Druta Systems rapidly builds production-ready web apps and interfaces with human review. Ship complete web products in hours, not weeks.",
    type: "website",
    siteName: "Druta Systems",
  },
  twitter: {
    card: "summary",
    title: "DAI Flash | Druta Systems",
    description:
      "DAI Flash by Druta Systems rapidly builds production-ready web apps and interfaces with human review. Ship complete web products in hours, not weeks.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "DAI Flash",
  provider: {
    "@type": "Organization",
    name: "Druta Systems",
  },
  serviceType: "Rapid web application development",
  description:
    "DAI Flash is Druta Systems' rapid build engine for shipping complete, production-ready web interfaces and applications with human review at every step.",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "100000",
    description: "Starting price for MVP build — final quote depends on project scope.",
  },
};

const buildCards = [
  {
    title: "AI content studio",
    description:
      "A complete interface for generating, editing, and publishing text and images with built-in review workflows.",
  },
  {
    title: "Customer support dashboard",
    description:
      "A unified workspace for tickets, chat history, knowledge search, and response drafting.",
  },
  {
    title: "Data visualisation tools",
    description:
      "Interactive charts and reports that turn raw data into clear, decision-ready views.",
  },
  {
    title: "Booking and scheduling systems",
    description:
      "Calendar-aware flows for appointments, reminders, and cancellations with role-based access.",
  },
  {
    title: "Internal admin panels",
    description:
      "Secure, maintainable back-office screens for teams, permissions, and operational data.",
  },
  {
    title: "Marketing websites",
    description:
      "High-performance landing pages and campaign sites built from the same design system.",
  },
  {
    title: "SaaS platforms",
    description:
      "Full multi-user SaaS products with authentication, subscription-ready architecture, and usage dashboards, built as a complete working product.",
  },
  {
    title: "E-commerce storefronts",
    description:
      "Product catalogs, carts, and checkout-ready flows built on modern, fast web architecture.",
  },
  {
    title: "AI-powered chatbots & automation",
    description:
      "Custom automation workflows and AI-assisted features that reduce manual, repetitive work.",
  },
  {
    title: "API integrations",
    description:
      "Clean integrations with third-party services and internal systems, done right the first time.",
  },
];

const steps = [
  {
    title: "Describe the outcome",
    description:
      "Start with a plain-language brief. DAI Flash turns the goal into a clear build plan, page structure, and component map.",
  },
  {
    title: "Generate the build",
    description:
      "The system creates the pages, components, routes, and styles needed for the product — all consistent with the existing design language.",
  },
  {
    title: "Review and refine",
    description:
      "A human checks the generated build, tightens the copy, adjusts the flows, and confirms every interaction works as expected.",
  },
  {
    title: "Ship the finished product",
    description:
      "The result is production-ready code that follows the project’s existing conventions and can be deployed immediately.",
  },
];

const edgeCards = [
  {
    title: "Speed to market",
    description:
      "Complete web apps take hours instead of weeks, while still going through a proper human review.",
  },
  {
    title: "Consistent design system",
    description:
      "Every output reuses the same dark slate surfaces, cyan-to-indigo accents, and rounded cards already trusted across the site.",
  },
  {
    title: "Production-ready code",
    description:
      "The generated code is real, maintainable TypeScript and React — not a throwaway prototype.",
  },
  {
    title: "Full-stack capability",
    description:
      "From routing and state to database access and APIs, DAI Flash handles the complete application layer.",
  },
  {
    title: "Secure by default",
    description:
      "Authentication, role checks, input validation, and safe rendering are part of the base build, not an afterthought.",
  },
  {
    title: "Scalable architecture",
    description:
      "The output follows standard project structure, so it can grow with the product instead of being rewritten later.",
  },
  {
    title: "Human oversight built in",
    description:
      "Every generated build is reviewed and adjusted by a person before it ships. Nothing goes out blind.",
  },
  {
    title: "Your data stays yours",
    description:
      "The workflow is built around Druta Systems’ own build practices, with no dependency on third-party AI products.",
  },
];

const techBadges = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Redis",
  "REST APIs",
  "GraphQL",
  "Docker",
  "AWS",
  "GitHub Actions",
];

export default function DaiFlashPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="text-lg font-semibold text-white">
            Druta Systems
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm text-slate-300 transition hover:text-white">
              Home
            </Link>
            <Link href="/products" className="text-sm text-slate-300 transition hover:text-white">
              Products
            </Link>
            <Link href="/dai-flash" className="text-sm text-slate-300 transition hover:text-white">
              DAI Flash
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-indigo-500/10 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            DAI Flash
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Build complete web products in hours, not weeks.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            DAI Flash is Druta Systems’ rapid build engine for shipping complete,
            production-ready web interfaces and applications — with human review at every step.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#build"
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
            >
              See what it can build
            </a>
            <a
              href="#how"
              className="rounded-full border border-slate-700 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-900/40"
            >
              How it works
            </a>
          </div>
        </div>
      </section>

      {/* What is DAI Flash */}
      <section id="what" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">What is DAI Flash?</h2>
            <p className="mt-6 text-lg text-slate-300">
              DAI Flash is our in-house system for rapidly designing, generating, and shipping
              complete web applications. It takes a plain-language product brief and turns it into
              structured pages, reusable components, clean styling, and production-ready code.
            </p>
            <p className="mt-4 text-lg text-slate-300">
              Every build follows the same design language you see across Druta Systems — dark slate
              surfaces, cyan-to-indigo gradients, rounded cards, and clear typography. The result is
              not a mock-up or a demo; it is a working product that can be reviewed, refined, and
              deployed.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">How it works</h2>
            <p className="mt-6 text-lg text-slate-300">
              Four steps take a brief from idea to shipped product.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 text-sm font-bold text-slate-950">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What DAI Flash can build */}
      <section id="build" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">What DAI Flash can build</h2>
            <p className="mt-6 text-lg text-slate-300">
              Complete, focused web products that solve real problems.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {buildCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-slate-600"
              >
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries we serve */}
      <section id="industries" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Industries we serve</h2>
            <p className="mt-6 text-lg text-slate-300">
              Our approach works across industries, not just one niche.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Finance & Fintech",
                description: "Secure customer portals, financial dashboards, and account management apps.",
              },
              {
                title: "FMCG & Retail Brands",
                description: "Brand websites, product catalogs, and retail inventory dashboards.",
              },
              {
                title: "Corporate & Company Websites",
                description: "Professional company websites with service pages, careers, and enquiry flows.",
              },
              {
                title: "Healthcare",
                description: "Clinic websites, appointment booking systems, and patient portals.",
              },
              {
                title: "Education",
                description: "Course catalogs, learning portals, and student administration apps.",
              },
              {
                title: "Real Estate",
                description: "Property listing websites, viewing bookings, and lead management dashboards.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-slate-600"
              >
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages & Technologies */}
      <section id="tech" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Languages & Technologies
            </h2>
            <p className="mt-6 text-lg text-slate-300">
              DAI Flash generates projects using a modern, maintainable stack.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-800 bg-slate-900/40 px-4 py-2 text-sm font-medium text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Real cost savings */}
      <section id="savings" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Real cost savings</h2>
            <p className="mt-4 bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
              Save up to 50%*
            </p>
            <p className="mt-6 text-lg text-slate-300">
              Typical software agencies in India charge significantly more for comparable work.
            </p>
          </div>
          <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-slate-600">
            <h3 className="text-lg font-semibold text-white">MVP Build</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Typical agency starting rate: ₹2 lakh+. Our starting price: ₹1,00,000 - a genuine cost advantage of up to 50%. That&apos;s real money you save.
            </p>
          </div>
          <p className="mt-6 text-lg text-slate-300">
            Final quotes depend on project scope.{" "}
            <Link href="/products" className="text-cyan-400 transition hover:text-white">
              Explore our products and starting prices.
            </Link>
          </p>
          <p className="mt-4 text-xs text-slate-500">
            *Conditions apply. Actual savings depend on project scope and requirements - see /products for current pricing.
          </p>
        </div>
      </section>

      {/* Why DAI Flash gives us the edge */}
      <section id="edge" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Why DAI Flash gives us the edge
            </h2>
            <p className="mt-6 text-lg text-slate-300">
              It combines the speed of automated generation with the care of human review.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {edgeCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-slate-600"
              >
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for reliability */}
      <section id="reliability" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Built for reliability</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Automated quality checks",
                description:
                  "Every build passes automated compile and code-quality checks before acceptance.",
              },
              {
                title: "Independent AI review",
                description:
                  "A second, independent AI review checks the work end-to-end before anything is marked complete.",
              },
              {
                title: "Detailed change reports",
                description:
                  "Every change comes with its own detailed report, so you can see what was done and checked.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-slate-600"
              >
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why this matters for you */}
      <section id="matters" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Why this matters for you</h2>
            <p className="mt-6 max-w-3xl text-lg text-slate-300">
              Most teams spend too long converting an idea into a working product. DAI Flash removes
              that bottleneck. You get real screens, real flows, and real code — fast enough to test
              the idea, and clean enough to keep building on it.
            </p>
            <p className="mt-4 max-w-3xl text-lg text-slate-300">
              Whether you are validating a new product, building an internal tool, or shipping a
              client project, DAI Flash gives Druta Systems a repeatable way to deliver quality
              without the usual delays.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 text-center sm:p-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to build something faster?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
              Tell us what you want to create. We’ll show you what DAI Flash can do.
            </p>
            <p className="mt-4 text-lg font-bold text-white">
              <strong>Use our services once — you&apos;ll feel the difference.</strong>
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
              >
                Contact Druta Systems
              </a>
              <a
                href="/products"
                className="rounded-full border border-slate-700 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-900/40"
              >
                Explore our products
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}