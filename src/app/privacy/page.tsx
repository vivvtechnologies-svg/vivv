import type { Metadata } from "next";
import { siteContent } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Vivv Technologies privacy policy.",
  openGraph: {
    title: "Vivv Technologies Privacy Policy",
    description: "Vivv Technologies privacy policy.",
  },
};

export default function PrivacyPage() {
  const { privacy } = siteContent;

  return (
    <div className="section-pad">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Privacy
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          {privacy.title}
        </h1>
        <div className="mt-8 space-y-6">
          {privacy.sections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-slate-900">
                {section.title}
              </h2>
              <p className="mt-3 text-sm text-slate-600">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
