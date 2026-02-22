import type { Metadata } from "next";
import { GearIcon, SparkIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "How Vivv Systems diagnoses, designs, implements, and scales business systems for operational businesses.",
  openGraph: {
    title: "Our Process | Vivv Systems",
    description:
      "How Vivv Systems diagnoses, designs, implements, and scales business systems for operational businesses.",
  },
};

export default function ProcessPage() {
  const steps = [
    "Operational Audit",
    "Strategy Blueprint",
    "System Deployment",
    "Staff Training",
    "Ongoing Support & Optimization",
  ];

  return (
    <div className="section-pad">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-b from-white via-slate-50 to-white p-6 shadow-sm sm:p-10">
          <div className="pointer-events-none absolute -left-20 top-20 h-48 w-48 rounded-full bg-emerald-100/60 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 bottom-12 h-44 w-44 rounded-full bg-slate-200/70 blur-3xl" />

          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
            <GearIcon className="h-4 w-4 text-emerald-600" />
            Our Process
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Our Structured Implementation Model
          </h1>
          <p className="mt-5 max-w-2xl text-base text-slate-600">
            We follow a disciplined framework to ensure sustainable results.
          </p>

          <div className="mt-10">
            <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center md:gap-3">
              {steps.map((step, index) => (
                <div key={step} className="contents">
                  <div
                    className="fade-in-up rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
                    style={{ animationDelay: `${index * 0.07}s` }}
                  >
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-sm font-semibold text-emerald-700">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <p className="mt-3 text-sm font-medium text-slate-800">
                      {step}
                    </p>
                  </div>
                  {index < steps.length - 1 ? (
                    <div
                      aria-hidden="true"
                      className="fade-in-up flex items-center justify-center text-2xl font-semibold text-emerald-500"
                      style={{ animationDelay: `${index * 0.07 + 0.03}s` }}
                    >
                      →
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="grid gap-2 md:hidden">
              {steps.map((step, index) => (
                <div key={step}>
                  <div
                    className="fade-in-up grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                    style={{ animationDelay: `${index * 0.07}s` }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-sm font-semibold text-emerald-700">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <p className="text-sm font-medium text-slate-800">{step}</p>
                  </div>
                  {index < steps.length - 1 ? (
                    <div
                      aria-hidden="true"
                      className="my-1 text-center text-xl font-semibold text-emerald-500"
                    >
                      ↓
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50/60 px-5 py-4">
            <p className="text-sm font-semibold text-slate-700">
              We work as long-term partners, not short-term vendors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
