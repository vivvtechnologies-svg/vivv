import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Implementation model to diagnose, design, implement, optimize, and support operational systems.",
  openGraph: {
    title: "Process | Vivv Technologies",
    description:
      "Implementation model to diagnose, design, implement, optimize, and support operational systems.",
  },
};

export default function ProcessPage() {
  return (
    <div className="section-pad">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white/80 p-8 shadow-sm sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="float-slow absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-100/70 blur-3xl" />
            <div className="float-slow absolute -left-10 top-24 h-32 w-32 rounded-full bg-slate-200/70 blur-3xl" />
            <div className="float-slow absolute bottom-[-20%] right-[20%] h-44 w-44 rounded-full bg-emerald-50 blur-3xl" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Process
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
            How Vivv Works
          </h1>
          <p className="mt-6 text-base text-slate-600">
            We follow a structured framework to deliver measurable operational
            improvements without disrupting day-to-day work.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.5fr_1fr]">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Framework
              </p>
              <p className="mt-4 text-sm text-slate-600">
                A premium, guided rollout designed to align operations, teams,
                and growth targets without disruption.
              </p>
              <div className="mt-6 space-y-3">
                <div className="h-2 w-full rounded-full bg-slate-200">
                  <div className="h-2 w-3/5 rounded-full bg-emerald-500" />
                </div>
                <div className="h-2 w-full rounded-full bg-slate-200">
                  <div className="h-2 w-4/5 rounded-full bg-emerald-400" />
                </div>
                <div className="h-2 w-full rounded-full bg-slate-200">
                  <div className="h-2 w-2/5 rounded-full bg-emerald-300" />
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-px bg-slate-200" />
              <div className="space-y-6">
                {[
                  "Diagnose – Understand workflows, services, and gaps",
                  "Design – Build a system blueprint aligned to outcomes",
                  "Implement – Deploy automation, data, and workflows",
                  "Optimize – Improve based on operational data",
                  "Support – Long-term support and upgrades",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="fade-in-up relative ml-10 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm text-slate-700 shadow-sm"
                    style={{ animationDelay: `${index * 0.08}s` }}
                  >
                    <span className="absolute -left-12 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-xs font-semibold text-emerald-700">
                      {index + 1}
                    </span>
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-10 text-sm font-semibold text-slate-700">
            We work as long-term partners — not short-term vendors.
          </p>
        </div>
      </div>
    </div>
  );
}
