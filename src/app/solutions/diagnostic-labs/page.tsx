import type { Metadata } from "next";
import TrackedLink from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "Diagnostic Labs",
  description: "Lab Growth Automation System™ by Vivv Systems.",
  openGraph: {
    title: "Lab Growth Automation System™",
    description: "Lab Growth Automation System™ by Vivv Systems.",
  },
};

export default function DiagnosticLabsPage() {
  return (
    <div className="section-pad">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Diagnostic Labs
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          Lab Growth Automation System™
        </h1>
        <p className="mt-5 text-base text-slate-600">
          Missed calls and manual follow-ups are silent revenue killers.
        </p>
        <p className="mt-4 text-sm font-semibold text-slate-900">
          Our system ensures:
        </p>
        <ul className="mt-4 space-y-2 text-sm text-slate-600">
          <li>• Automated recovery of missed and busy calls</li>
          <li>• Instant SMS/WhatsApp response to inquiries</li>
          <li>• 24/7 appointment booking without receptionist dependency</li>
          <li>• Automated reminders and follow-ups</li>
          <li>• Repeat customer tracking</li>
          <li>• Revenue and expense dashboard visibility</li>
          <li>• Promotional campaign automation for retention</li>
        </ul>
        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-lg font-semibold text-slate-900">Expected Outcome</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>• 10–15% increase in walk-ins</li>
            <li>• 50 to 70% reduction in manual admin workload</li>
            <li>• Full visibility for lab owners</li>
          </ul>
        </div>
        <TrackedLink
          href="/contact"
          label="Book Lab Growth Audit"
          location="diagnostic-labs"
          className="mt-8 inline-flex rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2"
        >
          Book Lab Growth Audit
        </TrackedLink>
      </div>
    </div>
  );
}
