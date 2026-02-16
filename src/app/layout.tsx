import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteContent } from "@/content/siteContent";

const metadataBase =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(metadataBase),
  title: {
    default: "Vivv Technologies | Smart Systems. Sustainable Growth.",
    template: "%s | Vivv Technologies",
  },
  description: siteContent.brand.description,
  openGraph: {
    type: "website",
    title: "Vivv Technologies",
    description: siteContent.brand.description,
    siteName: "Vivv Technologies",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="relative flex-1 overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute -top-40 right-[-10%] h-72 w-72 rounded-full bg-slate-100/80 blur-3xl" />
            <div className="absolute top-32 left-[-12%] h-64 w-64 rounded-full bg-slate-200/60 blur-3xl" />
            <div className="absolute bottom-20 right-[15%] h-56 w-56 rounded-full bg-slate-100/80 blur-3xl" />
          </div>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
