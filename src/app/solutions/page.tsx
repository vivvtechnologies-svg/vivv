import type { Metadata } from "next";
import { siteContent } from "@/content/siteContent";
import TrackedLink from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Explore industry-specific growth systems by Vivv Technologies.",
  openGraph: {
    title: "Vivv Technologies Solutions",
    description: "Explore industry-specific growth systems by Vivv Technologies.",
  },
};

export default function SolutionsPage() {
  const { solutionsOverview } = siteContent;

  return (
    <div className="section-pad">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Solutions
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          {solutionsOverview.title}
        </h1>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {solutionsOverview.cards.map((card) => (
            <TrackedLink
              key={card.href}
              href={card.href}
              label={card.title}
              location="solutions-overview"
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/70 focus-visible:ring-offset-2"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {card.title}
              </p>
              <h2 className="mt-4 text-lg font-semibold text-slate-900">
                {card.description}
              </h2>
              <p className="mt-4 text-sm text-slate-600">
                View the full system overview and expected outcomes.
              </p>
              <span className="mt-6 inline-flex text-sm font-semibold text-slate-900 transition group-hover:text-slate-700">
                Explore
              </span>
            </TrackedLink>
          ))}
        </div>
      </div>
    </div>
  );
}
