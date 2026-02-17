import type { Metadata } from "next";
import TrackedLink from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Custom software, automation, and project management modules for operational businesses.",
  openGraph: {
    title: "Solutions | Vivv Technologies",
    description:
      "Custom software, automation, and project management modules for operational businesses.",
  },
};

const modules = [
  {
    title: "Operations Platforms",
    body: "Custom web systems that run day-to-day operations with clarity.",
  },
  {
    title: "Automation + Integrations",
    body: "WhatsApp/SMS, payment gateways, and workflow automation.",
  },
  {
    title: "Billing + Payments",
    body: "Receipts, partial payments, and reconciliation workflows.",
  },
  {
    title: "Customer Records",
    body: "Fast search, history, and service tracking for repeat visits.",
  },
  {
    title: "Reporting Dashboards",
    body: "Daily revenue, team performance, and service insights.",
  },
  {
    title: "Role-based Access",
    body: "Owner visibility with staff-specific access controls.",
  },
];

const industries = [
  "Diagnostic Centers",
  "Clinics",
  "Supermarkets",
  "Schools",
];

const faqs = [
  {
    question: "Can we use WhatsApp reminders?",
    answer:
      "Yes. We set up WhatsApp workflows for reminders, follow-ups, and updates.",
  },
  {
    question: "Can receptionist only access billing/appointments?",
    answer:
      "Yes. We configure role-based access so staff see only what they need.",
  },
  {
    question: "Can we track daily collections?",
    answer:
      "Yes. You get daily, weekly, and service-wise reporting dashboards.",
  },
  {
    question: "Can we migrate existing patient data?",
    answer:
      "Yes. We help migrate existing customer or operational data into the system.",
  },
  {
    question: "Do you provide support?",
    answer:
      "Yes. We provide ongoing support and optimization as you scale.",
  },
];

export default function SolutionsPage() {
  return (
    <div className="section-pad">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Solutions
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          Custom systems built to reduce manual work
        </h1>
        <p className="mt-6 text-base text-slate-600">
          We build software and automation that fits your operational workflows
          and grows with your business.
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

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            Industry Examples
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            We build systems for operational businesses across these categories:
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-slate-200 bg-white px-4 py-2"
              >
                {industry}
              </span>
            ))}
          </div>
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
            label="Book a Free Demo"
            location="solutions"
            className="inline-flex rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2"
          >
            Book a Free Demo
          </TrackedLink>
        </div>
      </div>
    </div>
  );
}
