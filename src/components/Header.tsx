"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import TrackedLink from "@/components/TrackedLink";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Clinic Solutions", href: "/clinic-solutions" },
  { label: "Demo", href: "/demo" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="group inline-flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight text-emerald-600">
            Vivv Technologies
          </span>
          <span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-slate-500 sm:inline">
            Clinics
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/70 focus-visible:ring-offset-2 ${
                  isActive
                    ? "text-slate-900"
                    : "text-slate-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <TrackedLink
            href="/contact"
            label="Book a Free Consultation"
            location="header"
            className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2"
          >
            Book a Free Consultation
          </TrackedLink>
        </div>
      </div>
    </header>
  );
}
