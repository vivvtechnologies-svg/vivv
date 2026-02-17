import type { Metadata } from "next";
import Image from "next/image";
import TrackedLink from "@/components/TrackedLink";

export const metadata: Metadata = {
  title:
    "Custom Software & Project Management for Operational Businesses | Vivv Technologies",
  description:
    "Vivv Technologies delivers custom software, automation, and project management for operational businesses. Build systems that improve revenue, visibility, and control.",
  openGraph: {
    title:
      "Custom Software & Project Management for Operational Businesses | Vivv Technologies",
    description:
      "Vivv Technologies delivers custom software, automation, and project management for operational businesses. Build systems that improve revenue, visibility, and control.",
  },
};

export default function HomePage() {
  return (
    <div>
      <section className="section-pad">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Operational Systems
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
              Custom Software & Project Management for Operational Businesses
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              We build business systems, automation, and dashboards that replace
              manual work and keep teams aligned—from discovery to delivery.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <TrackedLink
                href="/contact"
                label="Book a Free Demo"
                location="home-hero"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2"
              >
                Book a Free Demo
              </TrackedLink>
              <TrackedLink
                href="https://wa.me/918095045559?text=Hi%20Vivv%20Technologies,%20I%20want%20to%20learn%20about%20custom%20software%20and%20automation."
                label="WhatsApp Us"
                location="home-hero"
                className="rounded-full border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300 hover:text-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2"
              >
                WhatsApp Us
              </TrackedLink>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold text-slate-600">
              {[
                "Custom Software",
                "Automation + Integrations",
                "Reporting + Visibility",
              ].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-8 shadow-sm">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-slate-200/60 blur-2xl" />
            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-slate-300/50 blur-3xl" />
            <div className="relative space-y-6">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <Image
                  src="/brand.jpeg"
                  alt="Clinic automation dashboard preview"
                  width={1536}
                  height={1024}
                  className="h-48 w-full object-cover sm:h-56"
                  priority
                />
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Revenue Systems
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  Structured workflows, automation, and visibility that keeps
                  teams aligned.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Operational Clarity
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  Real-time dashboards, controlled processes, and cleaner
                  operational handoffs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-slate-200 bg-slate-50">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            Operations Shouldn’t Depend on Manual Follow-ups.
          </h2>
          <ul className="mt-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
            {[
              "Missed calls and leads",
              "Manual scheduling and spreadsheets",
              "Delayed follow-ups and handoffs",
              "Billing errors and process leaks",
              "No daily or weekly performance reports",
              "Staff confusion across teams and services",
            ].map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="flex items-center justify-between gap-6">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              What We Build
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Operations Platforms",
                body: "Custom web systems that run your day-to-day operations.",
              },
              {
                title: "WhatsApp & SMS Automation",
                body: "Automated reminders, follow-ups, and status updates.",
              },
              {
                title: "Billing & Payments",
                body: "Receipts, payment links, and reconciliation workflows.",
              },
              {
                title: "Customer Records",
                body: "Fast search, history, and relationship tracking.",
              },
              {
                title: "Reporting Dashboards",
                body: "Daily revenue, team performance, and service insights.",
              },
              {
                title: "Role-based Access",
                body: "Owner visibility with staff-specific access control.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">{card.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <TrackedLink
              href="/solutions"
              label="Get a System Plan"
              location="home-solutions"
              className="inline-flex rounded-full border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300 hover:text-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2"
            >
              Get a System Plan
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-slate-200 bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            See a Working Demo
          </h2>
          <p className="mt-4 text-base text-slate-600">
            We tailor systems for diagnostic centers, clinics, supermarkets, and
            schools.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              "Appointment dashboard",
              "Billing screen",
              "Daily report",
            ].map((label) => (
              <div
                key={label}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-36 items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {label}
                </div>
                <p className="mt-4 text-sm text-slate-600">
                  Interactive demo card preview.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            How Vivv Works
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Diagnose – Understand workflows, bottlenecks, and goals",
              "Design – Build a system blueprint aligned to outcomes",
              "Implement – Deploy automation, data, and workflows",
              "Optimize – Improve based on operational data",
              "Support – Long-term partnership and upgrades",
            ].map((step) => (
              <div
                key={step}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700"
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-slate-200 bg-slate-50">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            Simple Pricing
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Exact price depends on modules. We start with MVP and scale.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Starter",
                body: "Single location teams ready to systemize operations.",
              },
              {
                title: "Growth",
                body: "Multi-team operations with automation + reporting.",
              },
              {
                title: "Enterprise",
                body: "Multi-branch visibility and advanced workflows.",
              },
            ].map((tier) => (
              <div
                key={tier.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {tier.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">{tier.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight">
            Ready to Run Your Business Like a System?
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Based in Bengaluru • Fast support • Long-term partner
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <TrackedLink
              href="/contact"
              label="Book a Free Demo"
              location="home-final-cta"
              className="inline-flex rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2"
            >
              Book a Free Demo
            </TrackedLink>
            <TrackedLink
              href="https://wa.me/918095045559?text=Hi%20Vivv%20Technologies,%20I%20want%20to%20learn%20about%20custom%20software%20and%20automation."
              label="WhatsApp Us"
              location="home-final-cta"
              className="inline-flex rounded-full border border-emerald-300 px-6 py-3 text-sm font-semibold text-emerald-200 transition hover:border-emerald-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              WhatsApp Us
            </TrackedLink>
          </div>
        </div>
      </section>
    </div>
  );
}
