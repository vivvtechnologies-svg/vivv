export type AnalyticsPayload = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(event: string, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", event, payload);
    return;
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event, ...payload });
  }
}
