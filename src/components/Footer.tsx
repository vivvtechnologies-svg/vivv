import Link from "next/link";
const navigation = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Demo", href: "/demo" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-100 text-slate-700">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold text-emerald-600">
            Vivv Technologies
          </p>
          <p className="mt-3 max-w-sm text-sm text-slate-600">
            Custom software, automation, and project management for
            operationally intensive businesses.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/privacy"
                className="transition hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-100"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>Location: Bengaluru</li>
            <li>Email: info@vivvtechnologies.in</li>
            <li>Phone: 8095045559</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 px-4 py-6 text-center text-xs text-slate-500 sm:px-6">
        © {new Date().getFullYear()} Vivv Technologies. All rights reserved.
        <span className="mx-2 text-slate-400">|</span>
        Developed with <span aria-hidden="true">❤️</span>{" "} By
        <span className="sr-only">love</span>{" "}
        <a
          href="https://cleanstacky.com"
          className="font-semibold text-emerald-600 transition hover:text-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-100"
          target="_blank"
          rel="noreferrer"
        >
          Cleanstacky Technologies
        </a>
      </div>
    </footer>
  );
}
