"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

type TrackedLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  label: string;
  location?: string;
};

export default function TrackedLink({
  href,
  className,
  children,
  label,
  location,
}: TrackedLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() =>
        trackEvent("cta_click", {
          label,
          href,
          location: location ?? "unknown",
        })
      }
    >
      {children}
    </Link>
  );
}
