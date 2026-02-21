import type { Metadata } from "next";
import TrackedLink from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "Retail Operations & Growth Automation",
  description:
    "Automate promotions, streamline billing and inventory, and get clear sales visibility with Vivv Systems for retailers.",
  openGraph: {
    title: "Retail Operations & Growth Automation",
    description:
      "Automate promotions, streamline billing and inventory, and get clear sales visibility with Vivv Systems for retailers.",
  },
};

export default function RetailersPage() {
  return (
    <div className="section-pad">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Retailers
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          Smart Retail Growth System™
        </h1>
        <p className="mt-5 text-base text-slate-600">
          We bring structure, visibility, and automation to retail operations —
          helping retailers increase sales, reduce inefficiencies, and improve
          customer retention.
        </p>
        <p className="mt-4 text-sm font-semibold text-slate-900">Includes:</p>
        <ul className="mt-4 space-y-2 text-sm text-slate-600">
          <li>• Automated customer follow-ups and promotional campaigns</li>
          <li>• Missed call and enquiry recovery system</li>
          <li>• Inventory and sales workflow automation</li>
          <li>• Centralised communication platform (SMS / WhatsApp)</li>
          <li>• Sales and performance reporting dashboards</li>
        </ul>
        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-lg font-semibold text-slate-900">Expected Outcome</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>• Increased repeat purchases</li>
            <li>• Reduced revenue leakage</li>
            <li>• Faster operational workflows</li>
            <li>• Clear visibility into sales performance</li>
            <li>• Predictable and scalable growth</li>
          </ul>
        </div>
        <TrackedLink
          href="/contact"
          label="Request Retail System Assessment"
          location="retailers"
          className="mt-8 inline-flex rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2"
        >
          Request Retail System Assessment
        </TrackedLink>
      </div>
    </div>
  );
}
