import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Vivv Systems and our mission.",
  openGraph: {
    title: "About Vivv Systems",
    description: "Learn about Vivv Systems and our mission.",
  },
};

export default function AboutPage() {
  return (
    <div className="section-pad">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          About Us
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          About Vivv Systems
        </h1>
        <div className="prose-lite mt-6 text-base text-slate-600">
          <p>
            Vivv Systems was founded with a clear mission — to bring structure,
            clarity, and sustainable growth to operationally intensive
            businesses.
          </p>
          <p>
            We believe growth should not depend on chaos, overworked staff, or
            missed opportunities. It should be driven by systems that work
            seamlessly in the background.
          </p>
          <p>
            Our expertise lies in identifying operational gaps between revenue,
            customer experience, and internal workflows — and implementing
            solutions that eliminate inefficiencies while increasing
            profitability.
          </p>
          <p>We don’t just install software.</p>
          <p>We design business systems that create measurable results.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Our Vision</h2>
            <p className="mt-3 text-sm text-slate-600">
              To become the most trusted growth and automation partner for
              healthcare and retail businesses, enabling them to operate with
              clarity, efficiency, and predictable growth.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Our Promise</h2>
            <p className="mt-3 text-sm text-slate-600">
              Clarity. Control. Sustainable Growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
