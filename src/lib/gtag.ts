export function trackEvent(
  name: string,
  params?: Record<string, string>,
) {
  if (typeof window === "undefined") return;
  const gtag = (
    window as Window & { gtag?: (...args: unknown[]) => void }
  ).gtag;
  if (typeof gtag === "function") gtag("event", name, params);
}
