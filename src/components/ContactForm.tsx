"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { siteContent } from "@/content/siteContent";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(data[key] ?? "")}`
    )
    .join("&");

const industries = [
  "Diagnostic Labs",
  "Supermarkets",
  "Schools",
  "Other",
] as const;

export default function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">(
    "idle"
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = {
      "form-name": "consultation",
    };

    formData.forEach((value, key) => {
      data[key] = String(value);
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encode(data),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      router.push("/contact/thanks");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form
      name="consultation"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="consultation" />
      <div className="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Name
          <input
            name="name"
            required
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/70 focus-visible:ring-offset-2"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Business Name
          <input
            name="business"
            required
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/70 focus-visible:ring-offset-2"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Industry
          <select
            name="industry"
            required
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/70 focus-visible:ring-offset-2"
            defaultValue=""
          >
            <option value="" disabled>
              Select an industry
            </option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-medium text-slate-700">
          Phone
          <input
            name="phone"
            type="tel"
            required
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/70 focus-visible:ring-offset-2"
          />
        </label>
        <label className="text-sm font-medium text-slate-700 md:col-span-2">
          Email
          <input
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/70 focus-visible:ring-offset-2"
          />
        </label>
      </div>
      <label className="text-sm font-medium text-slate-700">
        Message
        <textarea
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/70 focus-visible:ring-offset-2"
        />
      </label>
      {status === "error" ? (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again.
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting"
          ? "Submitting..."
          : siteContent.contact.formButton}
      </button>
    </form>
  );
}
