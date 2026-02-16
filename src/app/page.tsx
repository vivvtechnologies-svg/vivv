import type { Metadata } from "next";
import { siteContent } from "@/content/siteContent";
import TrackedLink from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "Home",
  description: siteContent.brand.description,
  openGraph: {
    title: "Vivv Technologies",
    description: siteContent.brand.description,
  },
};

export default function HomePage() {
  const { home } = siteContent;

  return (
    <div>
      <section className="section-pad">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Vivv Technologies
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              {home.hero.headline}
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              {home.hero.subheadline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <TrackedLink
                href={home.hero.primaryCta.href}
                label={home.hero.primaryCta.label}
                location="home-hero"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2"
              >
                {home.hero.primaryCta.label}
              </TrackedLink>
              <TrackedLink
                href={home.hero.secondaryCta.href}
                label={home.hero.secondaryCta.label}
                location="home-hero"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/70 focus-visible:ring-offset-2"
              >
                {home.hero.secondaryCta.label}
              </TrackedLink>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-8 shadow-sm">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-slate-200/60 blur-2xl" />
            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-slate-300/50 blur-3xl" />
            <div className="relative space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Revenue Systems
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  Structured workflows, automated follow-ups, and visibility that
                  keeps your teams aligned.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Operational Clarity
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  Real-time dashboards, controlled processes, and sustainable
                  growth without the chaos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-slate-200 bg-slate-50">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            {home.problem.title}
          </h2>
          <div className="prose-lite mt-6 text-base text-slate-600">
            {home.problem.body.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="flex items-center justify-between gap-6">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              {home.industries.title}
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {home.industries.diagnosticLabs.title}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">
                {home.industries.diagnosticLabs.tagline}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {home.industries.diagnosticLabs.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
              <TrackedLink
                href={home.industries.diagnosticLabs.cta.href}
                label={home.industries.diagnosticLabs.cta.label}
                location="home-industries"
                className="mt-6 inline-flex text-sm font-semibold text-slate-900 transition hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/70 focus-visible:ring-offset-2"
              >
                {home.industries.diagnosticLabs.cta.label}
              </TrackedLink>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {home.industries.supermarkets.title}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">
                {home.industries.supermarkets.tagline}
              </h3>
              <p className="mt-4 text-sm text-slate-600">
                {home.industries.supermarkets.bodyLine}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {home.industries.supermarkets.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
              <TrackedLink
                href={home.industries.supermarkets.cta.href}
                label={home.industries.supermarkets.cta.label}
                location="home-industries"
                className="mt-6 inline-flex text-sm font-semibold text-slate-900 transition hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/70 focus-visible:ring-offset-2"
              >
                {home.industries.supermarkets.cta.label}
              </TrackedLink>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {home.industries.schools.title}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">
                {home.industries.schools.tagline}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {home.industries.schools.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
              <TrackedLink
                href={home.industries.schools.cta.href}
                label={home.industries.schools.cta.label}
                location="home-industries"
                className="mt-6 inline-flex text-sm font-semibold text-slate-900 transition hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/70 focus-visible:ring-offset-2"
              >
                {home.industries.schools.cta.label}
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight">
            {home.approach.title}
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {home.approach.steps.map((step) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm"
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            {home.whyVivv.title}
          </h2>
          <ul className="mt-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
            {home.whyVivv.bullets.map((bullet) => (
              <li key={bullet} className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad border-t border-slate-200 bg-slate-50">
        <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            {home.finalCta.heading}
          </h2>
          <p className="mt-4 text-base text-slate-600">
            {home.finalCta.body}
          </p>
          <TrackedLink
            href={home.finalCta.button.href}
            label={home.finalCta.button.label}
            location="home-final-cta"
            className="mt-8 inline-flex rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2"
          >
            {home.finalCta.button.label}
          </TrackedLink>
        </div>
      </section>
    </div>
  );
}
