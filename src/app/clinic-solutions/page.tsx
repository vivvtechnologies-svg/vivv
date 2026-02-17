import type { Metadata } from "next";
import TrackedLink from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "Clinic Solutions",
  description:
    "Clinic automation modules for appointments, WhatsApp reminders, billing, records, and reporting.",
  openGraph: {
    title: "Clinic Solutions | Vivv Technologies",
    description:
      "Clinic automation modules for appointments, WhatsApp reminders, billing, records, and reporting.",
  },
};

const modules = [
  {
    title: "Appointment Scheduling",
    body: "Online booking + receptionist scheduling with smart slots.",
  },
  {
    title: "WhatsApp Reminders & Follow-ups",
    body: "Visit reminders, test reminders, and vaccine reminders.",
  },
  {
    title: "Billing, Receipts & Payments",
    body: "UPI payments, partial payments, and clean receipts.",
  },
  {
    title: "Patient Records & Visit History",
    body: "Simple, fast search for returning patients.",
  },
  {
    title: "Reports Dashboard",
    body: "Daily collections, doctor-wise and service-wise reporting.",
  },
  {
    title: "Admin & Staff Roles",
    body: "Owner visibility with receptionist-limited access.",
  },
];

const faqs = [
  {
    question: "Can we use WhatsApp reminders?",
    answer:
      "Yes. We set up WhatsApp reminders for appointments, test follow-ups, and vaccines.",
  },
  {
    question: "Can receptionist only access billing/appointments?",
    answer:
      "Yes. We configure role-based access so staff see only what they need.",
  },
  {
    question: "Can we track daily collections?",
    answer:
      "Yes. You get daily, weekly, and doctor-wise collection views.",
  },
  {
    question: "Can we migrate existing patient data?",
    answer:
      "Yes. We help migrate existing patient records into the system.",
  },
  {
    question: "Do you provide support?",
    answer:
      "Yes. We provide ongoing support and optimization as you scale.",
  },
];

export default function ClinicSolutionsPage() {
  return (
    <div className="section-pad">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Clinic Solutions
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          Clinic-first modules that eliminate manual work
        </h1>
        <p className="mt-6 text-base text-slate-600">
          Build only what your clinic needs today and scale with the right
          modules as your operations grow.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <div
              key={module.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-slate-900">
                {module.title}
              </h2>
              <p className="mt-3 text-sm text-slate-600">{module.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-2xl font-semibold text-slate-900">FAQ</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl bg-white p-5">
                <p className="text-sm font-semibold text-slate-900">
                  {faq.question}
                </p>
                <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <TrackedLink
            href="/contact"
            label="Book a Free Clinic Demo"
            location="clinic-solutions"
            className="inline-flex rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2"
          >
            Book a Free Clinic Demo
          </TrackedLink>
        </div>
      </div>
    </div>
  );
}
