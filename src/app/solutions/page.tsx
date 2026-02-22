import type { Metadata } from "next";
import type { ComponentType } from "react";
import Link from "next/link";
import { CartIcon, FlaskIcon, SparkIcon, StoreIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Our Solutions",
  description:
    "Industry-specific automation systems for diagnostic labs, supermarkets, and retailers. See how Vivv Systems delivers measurable growth.",
  openGraph: {
    title: "Our Solutions",
    description:
      "Industry-specific automation systems for diagnostic labs, supermarkets, and retailers. See how Vivv Systems delivers measurable growth.",
  },
};

export default function SolutionsPage() {
  const iconMap: Record<string, ComponentType<{ className?: string }>> = {
    "Diagnostic Labs": FlaskIcon,
    Supermarkets: CartIcon,
    Retailers: StoreIcon,
  };
  const cards = [
    {
      title: "Diagnostic Labs",
      description: "Lab Growth Automation System™",
      href: "/solutions/diagnostic-labs",
    },
    {
      title: "Supermarkets",
      description: "Retail Revenue Acceleration System™",
      href: "/solutions/supermarkets",
    },
    {
      title: "Retailers",
      description: "Smart Retail Growth System™",
      href: "/solutions/retailers",
    },
  ];

  return (
    <div className="section-pad">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          <SparkIcon className="h-4 w-4 text-emerald-600" />
          Solutions
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          Industry-specific growth systems
        </h1>
        <p className="mt-6 text-base text-slate-600">
          Choose a solution designed for your operational model and growth goals.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = iconMap[card.title] ?? SparkIcon;
            return (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/70 focus-visible:ring-offset-2"
            >
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                <Icon className="h-4 w-4 text-emerald-600" />
                {card.title}
              </p>
              <h2 className="mt-4 text-lg font-semibold text-slate-900">
                {card.description}
              </h2>
              <p className="mt-4 text-sm text-slate-600">
                View the full system overview and expected outcomes.
              </p>
              <span className="mt-6 inline-flex text-sm font-semibold text-slate-900 transition group-hover:text-slate-700">
                Explore
              </span>
            </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
