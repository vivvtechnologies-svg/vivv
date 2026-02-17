import type { Metadata } from "next";
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
  return (
    <div className="section-pad">
      <div className="mx-auto w-full max-w-2xl px-4 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Contact
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          Thank You
        </h1>
        <p className="mt-5 text-base text-slate-600">
          Your request has been received. Our team will reach out shortly.
        </p>
        <TrackedLink
          href="/"
          label="Back to Home"
          location="contact-thanks"
          className="mt-8 inline-flex rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2"
        >
          Back to Home
        </TrackedLink>
      </div>
    </div>
  );
}
