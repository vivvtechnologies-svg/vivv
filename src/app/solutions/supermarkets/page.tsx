import type { Metadata } from "next";
import { siteContent } from "@/content/siteContent";
import TrackedLink from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "Supermarkets",
  description: "Retail Revenue Acceleration System™ by Vivv Technologies.",
  openGraph: {
    title: "Retail Revenue Acceleration System™",
    description: "Retail Revenue Acceleration System™ by Vivv Technologies.",
  },
};

export default function SupermarketsPage() {
  const { supermarkets } = siteContent;

  return (
    <div className="section-pad">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Supermarkets
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          {supermarkets.title}
        </h1>
        <p className="mt-5 text-base text-slate-600">{supermarkets.intro}</p>
        <p className="mt-4 text-sm font-semibold text-slate-900">
          {supermarkets.includesTitle}
        </p>
        <ul className="mt-4 space-y-2 text-sm text-slate-600">
          {supermarkets.bullets.map((bullet) => (
            <li key={bullet}>• {bullet}</li>
          ))}
        </ul>
        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-lg font-semibold text-slate-900">
            {supermarkets.outcomesTitle}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {supermarkets.outcomes.map((bullet) => (
              <li key={bullet}>• {bullet}</li>
            ))}
          </ul>
        </div>
        <TrackedLink
          href={supermarkets.cta.href}
          label={supermarkets.cta.label}
          location="supermarkets"
          className="mt-8 inline-flex rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2"
        >
          {supermarkets.cta.label}
        </TrackedLink>
      </div>
    </div>
  );
}
