import type { Metadata } from "next";
import TrackedLink from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "Demo",
  description:
    "See a working clinic automation demo for appointments, billing, and reporting.",
  openGraph: {
    title: "Clinic Demo | Vivv Technologies",
    description:
      "See a working clinic automation demo for appointments, billing, and reporting.",
  },
};

export default function DemoPage() {
  return (
    <div className="section-pad">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Demo
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          See a working clinic system before you decide
        </h1>
        <p className="mt-6 text-base text-slate-600">
          Explore a guided walkthrough of appointment management, billing, and
          daily reporting. We can tailor this for single-doctor or multi-branch
          clinics.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            "Appointment dashboard",
            "Billing screen",
            "Daily report",
          ].map((label) => (
            <div
              key={label}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-36 items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {label}
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Preview module tailored to your clinic workflow.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <TrackedLink
            href="/contact"
            label="Book a Free Clinic Demo"
            location="demo"
            className="inline-flex rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2"
          >
            Book a Free Clinic Demo
          </TrackedLink>
          <TrackedLink
            href="https://wa.me/918095045559?text=Hi%20Vivv%20Technologies,%20I%20want%20a%20clinic%20automation%20demo."
            label="WhatsApp Us"
            location="demo"
            className="inline-flex rounded-full border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300 hover:text-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2"
          >
            WhatsApp Us
          </TrackedLink>
        </div>
      </div>
    </div>
  );
}
