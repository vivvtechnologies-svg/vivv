import type { Metadata } from "next";
import { siteContent } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Vivv Technologies and our mission.",
  openGraph: {
    title: "About Vivv Technologies",
    description: "Learn about Vivv Technologies and our mission.",
  },
};

export default function AboutPage() {
  const { about } = siteContent;

  return (
    <div className="section-pad">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          About
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          {about.title}
        </h1>
        <div className="prose-lite mt-6 text-base text-slate-600">
          {about.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              {about.visionTitle}
            </h2>
            <p className="mt-3 text-sm text-slate-600">{about.vision}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              {about.promiseTitle}
            </h2>
            <p className="mt-3 text-sm text-slate-600">{about.promise}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
