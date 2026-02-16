import type { Metadata } from "next";
import { siteContent } from "@/content/siteContent";
import TrackedLink from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "Thank You",
  description: "We received your request.",
  openGraph: {
    title: "Thank You",
    description: "We received your request.",
  },
};

export default function ContactThanksPage() {
  const { contactThanks } = siteContent;

  return (
    <div className="section-pad">
      <div className="mx-auto w-full max-w-2xl px-4 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Contact
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          {contactThanks.title}
        </h1>
        <p className="mt-5 text-base text-slate-600">
          {contactThanks.body}
        </p>
        <TrackedLink
          href={contactThanks.button.href}
          label={contactThanks.button.label}
          location="contact-thanks"
          className="mt-8 inline-flex rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2"
        >
          {contactThanks.button.label}
        </TrackedLink>
      </div>
    </div>
  );
}
