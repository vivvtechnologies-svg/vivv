import type { Metadata } from "next";
import Image from "next/image";
import TrackedLink from "@/components/TrackedLink";

export const metadata: Metadata = {
  title:
    "Vivv Systems | Business Automation for Diagnostic Labs, Supermarkets & Retailers in India",
  description:
    "Vivv Systems helps diagnostic labs, supermarkets, and retailers in India increase revenue, reduce operational inefficiencies, and build predictable growth through structured systems and intelligent automation.",
  openGraph: {
    title:
      "Vivv Systems | Business Automation for Diagnostic Labs, Supermarkets & Retailers in India",
    description:
      "Vivv Systems helps diagnostic labs, supermarkets, and retailers in India increase revenue, reduce operational inefficiencies, and build predictable growth through structured systems and intelligent automation.",
  },
};

export default function HomePage() {
  return (
    <div>
      <section className="section-pad">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Vivv Systems
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
              Smart Systems. Sustainable Growth.
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Vivv Systems helps diagnostic labs, supermarkets, and retailers
              increase revenue, reduce operational inefficiencies, and build
              predictable growth through structured systems and intelligent
              automation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <TrackedLink
                href="/contact"
                label="Book a Free Consultation"
                location="home-hero"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2"
              >
                Book a Free Consultation
              </TrackedLink>
              <TrackedLink
                href="/solutions"
                label="Explore Our Solutions"
                location="home-hero"
                className="rounded-full border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300 hover:text-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2"
              >
                Explore Our Solutions
              </TrackedLink>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-slate-200/60 blur-2xl" />
            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-slate-300/50 blur-3xl" />
            <div className="relative flex h-full items-center justify-center">
              <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <Image
                  src="/brand-v2.jpeg"
                  alt="Vivv Systems brand"
                  width={1536}
                  height={1024}
                  className="h-64 w-full object-contain sm:h-80"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-slate-200 bg-slate-50">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            Growing Shouldn’t Feel This Complicated.
          </h2>
          <div className="prose-lite mt-6 text-base text-slate-600">
            <p>
              Many operational businesses lose revenue daily due to missed calls,
              manual processes, poor follow-ups, and lack of system visibility.
              Growth becomes chaotic instead of structured.
            </p>
            <p>
              Vivv bridges the gap between operations and customer experience by
              designing business systems that deliver measurable results —
              without adding complexity.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="flex items-center justify-between gap-6">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Solutions by Industry
            </h2>
          </div>
          <p className="mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
            Built for operational teams that need clarity, faster execution, and
            measurable outcomes.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Diagnostic Labs
              </p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">
                Recover lost leads. Increase walk-ins. Gain full control.
              </h3>
              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                <li>Call recovery + smart appointment booking</li>
                <li>Automated reminders and repeat-test follow-ups</li>
                <li>Revenue and operations visibility dashboard</li>
              </ul>
              <div className="mt-5 rounded-xl bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700">
                10-15% walk-in lift potential
              </div>
              <TrackedLink
                href="/solutions/diagnostic-labs"
                label="Book Lab Growth Audit"
                location="home-industries"
                className="mt-6 inline-flex text-sm font-semibold text-emerald-700 transition hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2"
              >
                Book Lab Growth Audit
              </TrackedLink>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Supermarkets
              </p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">
                Transform offline stores into structured revenue engines.
              </h3>
              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                <li>Business gap analysis and margin-focused planning</li>
                <li>Online ordering setup for 0-3 km local delivery</li>
                <li>Unified control for products, offers, and pricing</li>
              </ul>
              <div className="mt-5 rounded-xl bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700">
                Offline + online execution model
              </div>
              <TrackedLink
                href="/solutions/supermarkets"
                label="Get Supermarket Growth Blueprint"
                location="home-industries"
                className="mt-6 inline-flex text-sm font-semibold text-emerald-700 transition hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2"
              >
                Get Supermarket Growth Blueprint
              </TrackedLink>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Retailers
              </p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">
                Structured operations. Predictable growth.
              </h3>
              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                <li>Promotion and follow-up automation</li>
                <li>Billing and inventory workflow optimization</li>
                <li>Sales visibility with clear reporting</li>
              </ul>
              <div className="mt-5 rounded-xl bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700">
                Reduced leakage, clearer operations
              </div>
              <TrackedLink
                href="/solutions/retailers"
                label="Request Retail System Assessment"
                location="home-industries"
                className="mt-6 inline-flex text-sm font-semibold text-emerald-700 transition hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2"
              >
                Request Retail System Assessment
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight">
            How Vivv Works
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Diagnose – Deep analysis of your current operations",
              "Design – Customized system blueprint aligned to your goals",
              "Implement – Deployment of automation & structured workflows",
              "Optimize – Continuous improvement based on performance data",
              "Scale – Long-term support for sustainable growth",
            ].map((step) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm"
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            Why Vivv
          </h2>
          <ul className="mt-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
            {[
              "Business-first approach (not just technology)",
              "Industry-specific solutions",
              "Simple, scalable systems",
              "Measurable outcomes",
              "Long-term partnership model",
              "No unnecessary tools or complexity",
            ].map((bullet) => (
              <li
                key={bullet}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad border-t border-slate-200 bg-slate-50">
        <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            Ready to Build a Business That Runs Smoothly?
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Let’s design systems that give you clarity, control, and peace of
            mind.
          </p>
          <TrackedLink
            href="/contact"
            label="Schedule Your Free Consultation"
            location="home-final-cta"
            className="mt-8 inline-flex rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2"
          >
            Schedule Your Free Consultation
          </TrackedLink>
        </div>
      </section>
    </div>
  );
}
