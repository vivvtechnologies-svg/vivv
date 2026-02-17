"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import TrackedLink from "@/components/TrackedLink";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Our Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="group inline-flex items-center">
          <span className="text-[20px] font-semibold tracking-tight text-slate-900">
            Vivv<span className="text-emerald-600">Systems</span>
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
                  isActive ? "text-slate-900" : "text-slate-600"
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
