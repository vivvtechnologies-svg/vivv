import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { siteContent } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a free consultation with Vivv Technologies.",
  openGraph: {
    title: "Contact Vivv Technologies",
    description: "Request a free consultation with Vivv Technologies.",
  },
};

export default function ContactPage() {
  const { contact } = siteContent;

  return (
    <div className="section-pad">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Contact
        </p>
        <div className="mt-4 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
              {contact.title}
            </h1>
            <p className="mt-6 text-base text-slate-600">{contact.body}</p>
            <div className="mt-8 space-y-3 text-sm text-slate-700">
              <p>📍 Location: {contact.placeholders.location}</p>
              <p>📧 Email: {contact.placeholders.email}</p>
              <p>📞 Phone: {contact.placeholders.phone}</p>
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
