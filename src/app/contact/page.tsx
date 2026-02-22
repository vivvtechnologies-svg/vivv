import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { MailIcon, MapPinIcon, PhoneIcon, SparkIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description:
    "Talk to Vivv Systems about your business. Get a free consultation tailored to your diagnostic lab, supermarket, or retail operations.",
  openGraph: {
    title: "Book a Free Consultation",
    description:
      "Talk to Vivv Systems about your business. Get a free consultation tailored to your diagnostic lab, supermarket, or retail operations.",
  },
};

export default function ContactPage() {
  return (
    <div className="section-pad">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          <SparkIcon className="h-4 w-4 text-emerald-600" />
          Contact
        </p>
        <div className="mt-4 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
              Let’s Build a Structured Growth System for Your Business
            </h1>
            <p className="mt-6 text-base text-slate-600">
              Whether you operate a lab, supermarket, or school — we are ready to
              help you streamline operations and increase revenue.
            </p>
            <div className="mt-8 space-y-3 text-sm text-slate-700">
              <p className="inline-flex items-center gap-2">
                <MapPinIcon className="h-4 w-4 text-emerald-600" />
                Location: Bengaluru
              </p>
              <p className="inline-flex items-center gap-2">
                <MailIcon className="h-4 w-4 text-emerald-600" />
                Email: info@vivvsystems.in
              </p>
              <p className="inline-flex items-center gap-2">
                <PhoneIcon className="h-4 w-4 text-emerald-600" />
                Phone: 8095045559
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Request Free Consultation
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Share a few details and we will reach out shortly.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
