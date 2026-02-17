import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process",
  description: "Our structured implementation model for sustainable results.",
  openGraph: {
    title: "Our Process | Vivv Systems",
    description: "Our structured implementation model for sustainable results.",
  },
};

export default function ProcessPage() {
  return (
    <div className="section-pad">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Our Process
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          Our Structured Implementation Model
        </h1>
        <p className="mt-6 text-base text-slate-600">
          We follow a disciplined framework to ensure sustainable results:
        </p>
        <div className="mt-8 grid gap-4">
          {[
            "Operational Audit",
            "Strategy Blueprint",
            "System Deployment",
            "Staff Training",
            "Ongoing Support & Optimization",
          ].map((step) => (
            <div
              key={step}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700"
            >
              {step}
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm font-semibold text-slate-700">
          We work as long-term partners — not short-term vendors.
        </p>
      </div>
    </div>
  );
}
