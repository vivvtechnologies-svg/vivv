import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a free demo with Vivv Technologies.",
  openGraph: {
    title: "Contact Vivv Technologies",
    description: "Book a free demo with Vivv Technologies.",
  },
};

export default function ContactPage() {
  return (
    <div className="section-pad">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Contact
        </p>
        <div className="mt-4 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
              Book a Free Demo
            </h1>
            <p className="mt-6 text-base text-slate-600">
              Share your requirements and we will set up a demo tailored to
              your operations.
            </p>
            <div className="mt-8 space-y-3 text-sm text-slate-700">
              <p>📍 Location: Bengaluru</p>
              <p>📧 Email: info@vivvtechnologies.in</p>
              <p>📞 Phone: 8095045559</p>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Request Free Demo
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
