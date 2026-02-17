import type { Metadata } from "next";
import TrackedLink from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "Supermarkets",
  description: "Retail Revenue Acceleration System™ by Vivv Systems.",
  openGraph: {
    title: "Retail Revenue Acceleration System™",
    description: "Retail Revenue Acceleration System™ by Vivv Systems.",
  },
};

export default function SupermarketsPage() {
  return (
    <div className="section-pad">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Supermarkets
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          Retail Revenue Acceleration System™
        </h1>
        <p className="mt-5 text-base text-slate-600">
          We help manually operated supermarkets modernize without disruption.
        </p>
        <p className="mt-4 text-sm font-semibold text-slate-900">Includes:</p>
        <ul className="mt-4 space-y-2 text-sm text-slate-600">
          <li>• Business gap analysis</li>
          <li>• Digital ordering platform for 0–3 km local delivery</li>
          <li>• Inventory and pricing control dashboard</li>
          <li>• Dual online + offline sales synchronization</li>
          <li>• Digital marketing collaboration for visibility</li>
          <li>• Structured revenue growth system</li>
        </ul>
        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-lg font-semibold text-slate-900">Expected Outcome</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>• Increased average bill value</li>
            <li>• Repeat customer growth</li>
            <li>• Digital expansion without operational confusion</li>
          </ul>
        </div>
        <TrackedLink
          href="/contact"
          label="Get Supermarket Growth Blueprint"
          location="supermarkets"
          className="mt-8 inline-flex rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2"
        >
          Get Supermarket Growth Blueprint
        </TrackedLink>
      </div>
    </div>
  );
}
