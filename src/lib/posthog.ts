// Utilitaire PostHog — appel sécurisé côté client
export function phCapture(event: string, properties?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  const ph = (window as any).posthog;
  if (!ph) return;
  ph.capture(event, properties);
}
