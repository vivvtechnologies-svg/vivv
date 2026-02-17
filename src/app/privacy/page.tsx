import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy",
  description: "Vivv Systems privacy policy.",
  openGraph: {
    title: "Vivv Systems Privacy Policy",
    description: "Vivv Systems privacy policy.",
  },
};

export default function PrivacyPage() {
  return (
    <div className="section-pad">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Privacy
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          Privacy Policy
        </h1>
        <div className="mt-8 space-y-6">
          {[
            {
              title: "Introduction",
              body:
                "This Privacy Policy explains how Vivv Systems collects, uses, and protects information when you interact with our website and services.",
            },
            {
              title: "Information We Collect",
              body:
                "We may collect information you provide directly through forms, as well as basic usage data such as device, browser, and interaction details to help us improve our services.",
            },
            {
              title: "How We Use Information",
              body:
                "We use information to respond to inquiries, deliver services, improve our offerings, and communicate relevant updates about our solutions.",
            },
            {
              title: "Cookies",
              body:
                "We use cookies and similar technologies to understand site performance and enhance your experience. You can control cookies through your browser settings.",
            },
            {
              title: "Data Sharing",
              body:
                "We do not sell personal information. We may share data with trusted service providers who support our operations, or when required by law.",
            },
            {
              title: "Data Security",
              body:
                "We implement reasonable safeguards to protect information, but no method of transmission or storage is completely secure.",
            },
            {
              title: "Your Rights",
              body:
                "You may request access, correction, or deletion of your information, subject to applicable laws and contractual obligations.",
            },
            {
              title: "Contact Us",
              body:
                "If you have questions about this policy or your data, please contact Vivv Systems using the information on our contact page.",
            },
          ].map((section) => (
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
