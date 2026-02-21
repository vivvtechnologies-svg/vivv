import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const metadataBase =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://vivvsystems.in";
const siteTitle =
  "Vivv Systems | Business Automation for Diagnostic Labs, Supermarkets & Retailers in India";
const siteDescription =
  "Vivv Systems helps diagnostic labs, supermarkets, and retailers in India increase revenue, reduce operational inefficiencies, and build predictable growth through structured systems and intelligent automation.";

export const metadata: Metadata = {
  metadataBase: new URL(metadataBase),
  title: {
    default: siteTitle,
    template: "%s | Vivv Systems",
  },
  description: siteDescription,
  keywords: [
    "business automation india",
    "diagnostic lab automation",
    "supermarket automation",
    "retail systems",
    "whatsapp automation",
    "operational dashboards",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: metadataBase,
    title: siteTitle,
    description: siteDescription,
    siteName: "Vivv Systems",
    images: [
      {
        url: "/header.jpeg",
        width: 915,
        height: 282,
        alt: "Vivv Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/header.jpeg"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-screen bg-white text-slate-900 antialiased`}>
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
            <div className="geek-grid" />
            <div className="geek-beam" />
            <div className="float-slow absolute -top-40 right-[-10%] h-72 w-72 rounded-full bg-slate-100/80 blur-3xl" />
            <div className="float-slow absolute top-32 left-[-12%] h-64 w-64 rounded-full bg-slate-200/60 blur-3xl" />
            <div className="float-slow absolute bottom-20 right-[15%] h-56 w-56 rounded-full bg-slate-100/80 blur-3xl" />
          </div>
          {children}
        </main>
        <Footer />
        <a
          href="https://wa.me/918095045559?text=Hi%20Vivv%20Systems,%20I%20want%20a%20free%20consultation."
          className="pulse-soft fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2"
          aria-label="WhatsApp Vivv Systems"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp Us
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Vivv Systems",
                url: metadataBase,
                logo: `${metadataBase}/icon.png`,
                sameAs: [metadataBase],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Vivv Systems",
                url: metadataBase,
                inLanguage: "en-IN",
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "Vivv Systems",
                url: metadataBase,
                telephone: "+91-8095045559",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Bengaluru",
                  addressCountry: "IN",
                },
                areaServed: "IN",
              },
            ]),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Business Systems & Automation",
              provider: {
                "@type": "LocalBusiness",
                name: "Vivv Systems",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Bengaluru",
                  addressCountry: "IN",
                },
              },
              areaServed: "IN",
              serviceType: "Operational business systems and automation",
              knowsAbout: [
                "Diagnostic Lab Automation",
                "Supermarket Automation",
                "Retail Operations Systems",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
