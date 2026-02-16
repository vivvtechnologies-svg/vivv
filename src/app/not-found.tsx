import { siteContent } from "@/content/siteContent";
import TrackedLink from "@/components/TrackedLink";

export default function NotFound() {
  const { notFound } = siteContent;

  return (
    <div className="section-pad">
      <div className="mx-auto w-full max-w-2xl px-4 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          {notFound.title}
        </h1>
        <p className="mt-5 text-base text-slate-600">{notFound.body}</p>
        <TrackedLink
          href={notFound.button.href}
          label={notFound.button.label}
          location="not-found"
          className="mt-8 inline-flex rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2"
        >
          {notFound.button.label}
        </TrackedLink>
      </div>
    </div>
  );
}
